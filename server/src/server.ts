/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    TextDocumentPositionParams,
    TextDocumentSyncKind,
    InitializeResult,
    DocumentDiagnosticReportKind,
    type DocumentDiagnosticReport,
    Hover,
    MarkupKind,
    Position,
    TextEdit,
    DocumentFormattingParams,
} from "vscode-languageserver/node";

import { TextDocument } from "vscode-languageserver-textdocument";

import {
    allCompletionItems,
    sharpCompletionItems,
    completionResolve,
    getSymbolByName,
} from "./symbol/symbolTable";
import { MySymbol } from "./symbol/common";
import { formattingHandler } from "./formattingHandler";

// 为服务创建一个连接, 用 Node 的 IPC 进行传输
const connection = createConnection(ProposedFeatures.all);

// 创建一个简单的文档管理器，可以支持多个打开的文档
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
    const capabilities = params.capabilities;

    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInformationCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // 声明代码补全能力
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: ["#"],
            },
            // 声明签名帮助能力
            diagnosticProvider: {
                interFileDependencies: false,
                workspaceDiagnostics: false,
            },
            // 声明悬停提示能力
            hoverProvider: true,
            // 声明格式化能力
            documentFormattingProvider: true,
        },
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true,
            },
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        connection.client.register(
            DidChangeConfigurationNotification.type,
            undefined
        );
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders((_event) => {
            connection.console.log("Workspace folder change event received.");
        });
    }
});

// 麦语言的设置信息
interface MyLangSettings {
    maxNumberOfProblems: number;
}

// 设置信息
const defaultSettings: MyLangSettings = { maxNumberOfProblems: 100 };
let globalSettings: MyLangSettings = defaultSettings;

// 缓存文档的设置信息
const documentSettings: Map<string, Thenable<MyLangSettings>> = new Map();

connection.onDidChangeConfiguration((change) => {
    if (hasConfigurationCapability) {
        // 清除所有文档的设置
        documentSettings.clear();
    } else {
        globalSettings = <MyLangSettings>(
            (change.settings.myLang || defaultSettings)
        );
    }
    // 当配置发生变化时，重新验证所有打开的文档
    connection.languages.diagnostics.refresh();
});

function getDocumentSettings(resource: string): Thenable<MyLangSettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: "myLang",
        });
        documentSettings.set(resource, result);
    }
    return result;
}

// 仅保留打开文档的设置, 关闭的文档将被删除
documents.onDidClose((e) => {
    documentSettings.delete(e.document.uri);
});

connection.languages.diagnostics.on(async (params) => {
    const document = documents.get(params.textDocument.uri);
    if (document !== undefined) {
        return {
            kind: DocumentDiagnosticReportKind.Full,
            items: await validateTextDocument(document),
        } satisfies DocumentDiagnosticReport;
    } else {
        // 找不到文档，返回空的诊断报告
        return {
            kind: DocumentDiagnosticReportKind.Full,
            items: [],
        } satisfies DocumentDiagnosticReport;
    }
});

// 当文档内容发生变化时触发
documents.onDidChangeContent((change) => {
    validateTextDocument(change.document);
});

async function validateTextDocument(
    textDocument: TextDocument
): Promise<Diagnostic[]> {
    // 获取文档的设置
    const settings = await getDocumentSettings(textDocument.uri);

    // The validator creates diagnostics for all uppercase words length 2 and more
    const text = textDocument.getText();
    const pattern = /\/\/.*|\/\*[\s\S]*?\*\/|[a-z]+/g;
    let match: RegExpExecArray | null;

    let problems = 0;
    const diagnostics: Diagnostic[] = [];
    while (
        (match = pattern.exec(text)) &&
        problems < settings.maxNumberOfProblems
    ) {
        // 检查匹配项是否为小写单词
        if (match[0].startsWith("//") || match[0].startsWith("/*")) {
            // 是注释或字符串，跳过
            continue;
        }

        problems++;
        const diagnostic: Diagnostic = {
            severity: DiagnosticSeverity.Warning,
            range: {
                start: textDocument.positionAt(match.index),
                end: textDocument.positionAt(match.index + match[0].length),
            },
            message: `${match[0]} 应改为大写`,
            source: "my-lang",
        };
        if (hasDiagnosticRelatedInformationCapability) {
            // diagnostic.relatedInformation = [
            //     {
            //         location: {
            //             uri: textDocument.uri,
            //             range: Object.assign({}, diagnostic.range),
            //         },
            //         message: "Spelling matters",
            //     },
            //     {
            //         location: {
            //             uri: textDocument.uri,
            //             range: Object.assign({}, diagnostic.range),
            //         },
            //         message: "Particularly for names",
            //     },
            // ];
        }
        diagnostics.push(diagnostic);
    }
    return diagnostics;
}

connection.onDidChangeWatchedFiles((_change) => {
    // 监听文件变化
    connection.console.log("We received a file change event");
});

// 代码补全的基本信息
connection.onCompletion(
    (textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
        let isSharp = false;
        const document = documents.get(textDocumentPosition.textDocument.uri);
        if (document) {
            const position = textDocumentPosition.position;
            const range = {
                start: {
                    line: position.line,
                    character: Math.max(0, position.character - 1),
                },
                end: position,
            };
            const text = document.getText(range);
            isSharp = text === "#";
            for (const item of sharpCompletionItems) {
                if (item.textEdit && "range" in item.textEdit) {
                    item.textEdit.range = range;
                }
            }
        }
        if (isSharp) {
            return sharpCompletionItems;
        } else {
            return allCompletionItems;
        }
    }
);

// 代码补全的完整信息
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    return completionResolve(item);
});

function getSymbolAtPosition(
    document: TextDocument,
    position: Position
): MySymbol | undefined {
    const text = document.getText();
    const lines = text.split(/\r?\n/);
    const lineText = lines[position.line];

    // 简单的正则表达式，用于匹配单词。根据你的语言特性调整
    const wordRegex = /\b\w+\b/g;
    let match;
    while ((match = wordRegex.exec(lineText)) !== null) {
        const word = match[0];
        const start = match.index;
        const end = start + word.length;
        // 检查光标位置是否在单词中
        if (start <= position.character && position.character <= end) {
            return getSymbolByName(word);
        }
    }

    return undefined; // 没有找到符号
}

connection.onHover((params: TextDocumentPositionParams): Hover | null => {
    // 获取文档和悬停位置
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const position = params.position;

    const symbol = getSymbolAtPosition(document, position);

    if (symbol) {
        const hoverContent = symbol.documentation;
        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: hoverContent,
            },
        };
    }
    return null;
});

connection.onDocumentFormatting(
    ({ textDocument, options }: DocumentFormattingParams): TextEdit[] => {
        const document = documents.get(textDocument.uri);
        const fullText = document?.getText();
        return formattingHandler(fullText ?? "", options);
    }
);

// 添加文档监听
documents.listen(connection);

// 开始监听来自客户端的请求
connection.listen();
