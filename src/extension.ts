import * as vscode from "vscode";
import { getLanguageId } from "./common";
import { activateColorDecorations } from "./colorDecorations";
import { activateCompletionItemProvider } from "./completionItemProvider";
import { activateHoverProvider } from "./hoverProvider";
import { activateCommands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
    const languageId = getLanguageId(context);
    activateHoverProvider(context, languageId);
    activateCompletionItemProvider(context, languageId);
    activateColorDecorations(context, languageId);
    activateCommands(context);
    vscode.languages.registerSignatureHelpProvider(languageId, {
        provideSignatureHelp(document, position, token, context) {
            // 这里实现你的逻辑来根据当前位置提供函数签名帮助
            // 你可能需要分析当前位置前的文本，找到函数调用并提取其信息
            const signatureHelp = new vscode.SignatureHelp();
            signatureHelp.signatures = [new vscode.SignatureInformation('函数描述', '函数文档')];
            signatureHelp.activeSignature = 0; // 当前激活的签名
            signatureHelp.activeParameter = 0; // 当前激活的参数
            return signatureHelp;
        }
    }, '(', ',');
    // vscode.languages.registerDocumentFormattingEditProvider('my-lang', {
    //     provideDocumentFormattingEdits(document) {
    //         // 通常，你会在这里发起一个向语言服务器的请求，请求格式化文档
    //         // 然后返回一个编辑操作数组，VS Code会应用这些编辑来格式化文档
    //     }
    // });
    
}
