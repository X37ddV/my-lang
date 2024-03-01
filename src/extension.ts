import * as vscode from 'vscode';

// 创建装饰器类型的映射，以便复用
const decorationTypes: { [key: string]: vscode.TextEditorDecorationType } = {};

// 颜色映射
const colorMap: { [key: string]: string } = {
    COLORRED: '#FF0000',
    COLORGREEN: '#00FF00',
    COLORBLUE: '#0000FF',
    COLORMAGENTA: '#FF00FF',
    COLORYELLOW: '#FFFF00',
    COLORLIGHTGREY: '#D3D3D3',
    COLORLIGHTRED: '#FFA07A',
    COLORLIGHTGREEN: '#90EE90',
    COLORLIGHTBLUE: '#ADD8E6',
    COLORBLACK: '#000000',
    COLORWHITE: '#FFFFFF',
    COLORCYAN: '#00FFFF',
    COLORGRAY: '#808080',
};

function ensureDecorationType(colorKey: string) {
    if (!decorationTypes[colorKey]) {
        decorationTypes[colorKey] = vscode.window.createTextEditorDecorationType({
            before: {
                contentText: ' ', // 实际内容为空，但是通过CSS来创建可视效果
                width: '0.8em', // 装饰器宽度
                height: '0.8em', // 装饰器高度
                border: '1px solid #fff', // 1px白色边框
                backgroundColor: colorKey, // 指定的颜色填充
                margin: '0.1em 0.2em 0 0.2em', // 适当的边距以避免与文本重叠
            },
        });
    }
    return decorationTypes[colorKey];
}
function rgbToHex(r: string, g: string, b: string) {
    // 将单个数值转换为十六进制字符串的函数
    const toHex = (n: string) => {
        // 将数值转换为十六进制，结果为字符串
        let hex = parseInt(n, 10).toString(16);
        // 单个字符的结果前添加0，确保输出总是两个字符
        return hex.length === 1 ? '0' + hex : hex;
    };

    // 转换每个颜色分量，并拼接成完整的十六进制颜色代码
    return '#' + toHex(r) + toHex(g) + toHex(b);
}

function updateDecorations(activeEditor: vscode.TextEditor) {

    // 先清除旧的装饰器
    // Object.keys(decorationTypes).forEach(colorKey => {
    //     activeEditor.setDecorations(decorationTypes[colorKey], []);
    // });

    const text = activeEditor.document.getText();
    const colorDecorations: { [key: string]: vscode.DecorationOptions[] } = {};

    // 正则表达式匹配所有颜色标识符
    const regex = /\b(COLORRED|COLORGREEN|COLORBLUE|COLORMAGENTA|COLORYELLOW|COLORLIGHTGREY|COLORLIGHTRED|COLORLIGHTGREEN|COLORLIGHTBLUE|COLORBLACK|COLORWHITE|COLORCYAN|COLORGRAY)\b|\bRGB\s*\(\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*,\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*,\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*\)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        const startPos = activeEditor.document.positionAt(match.index);
        const endPos = activeEditor.document.positionAt(match.index + match[0].length);
        const matchString = match[0]
        const key = matchString.startsWith("RGB") ? rgbToHex(match[2], match[3], match[4]) : colorMap[matchString]
        const decoration: vscode.DecorationOptions = { range: new vscode.Range(startPos, endPos), hoverMessage: 'Color **' + key + '**' };
        if (colorDecorations[key]) {
            colorDecorations[key].push(decoration);
        } else {
            colorDecorations[key] = [decoration];
        }
    }
    const colorDecorationsKeys = Object.keys(colorDecorations)
    const allKeys = [...new Set([...colorDecorationsKeys, ...Object.keys(decorationTypes)])];
    allKeys.forEach(key => {
        const decorationType = ensureDecorationType(key);
        if (key in colorDecorationsKeys) {
            activeEditor.setDecorations(decorationType, colorDecorations[key]);
        } else {
            activeEditor.setDecorations(decorationType, []);
        }
    });
}


export function activate(context: vscode.ExtensionContext) {

    const provider1 = vscode.languages.registerCompletionItemProvider('my-lang', {

        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            // a simple completion item which inserts `Hello World!`
            const simpleCompletion = new vscode.CompletionItem('Hello World!');

            // a completion item that inserts its text as snippet,
            // the `insertText`-property is a `SnippetString` which will be
            // honored by the editor.
            const snippetCompletion = new vscode.CompletionItem('Good part of the day');
            snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
            const docs: any = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
            snippetCompletion.documentation = docs;
            docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');

            // a completion item that can be accepted by a commit character,
            // the `commitCharacters`-property is set which means that the completion will
            // be inserted and then the character will be typed.
            const commitCharacterCompletion = new vscode.CompletionItem('console');
            commitCharacterCompletion.commitCharacters = ['.'];
            commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

            // a completion item that retriggers IntelliSense when being accepted,
            // the `command`-property is set which the editor will execute after 
            // completion has been inserted. Also, the `insertText` is set so that 
            // a space is inserted after `new`
            const commandCompletion = new vscode.CompletionItem('new');
            commandCompletion.kind = vscode.CompletionItemKind.Keyword;
            commandCompletion.insertText = 'new ';
            commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

            // return all completion items as array
            return [
                simpleCompletion,
                snippetCompletion,
                commitCharacterCompletion,
                commandCompletion
            ];
        }
    });

    const provider2 = vscode.languages.registerCompletionItemProvider('my-lang', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix = document.lineAt(position).text.slice(0, position.character);
            if (!linePrefix.endsWith('console.')) {
                return undefined;
            }

            return [
                new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
            ];
        }
    }, '.'); // triggered whenever a '.' is being typed

    context.subscriptions.push(provider1, provider2);

    let activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        updateDecorations(activeEditor);
    }

    vscode.window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (activeEditor) {
            updateDecorations(activeEditor);
        }
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            updateDecorations(activeEditor);
        }
    }, null, context.subscriptions);
}
