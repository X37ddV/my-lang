import * as vscode from 'vscode';

function addColorBlockDecorations(editor: vscode.TextEditor) {
    // 颜色映射
    const colorMap: Object = {
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
        COLORGRAY: '#808080'
    };

    const text = editor.document.getText();
    const colorDecorations: { range: vscode.Range; hoverMessage: string; }[] = [];

    // 正则表达式匹配所有颜色标识符
    const regex = /\b(COLORRED|COLORGREEN|COLORBLUE|COLORMAGENTA|COLORYELLOW|COLORLIGHTGREY|COLORLIGHTRED|COLORLIGHTGREEN|COLORLIGHTBLUE|COLORBLACK|COLORWHITE|COLORCYAN|COLORGRAY)\b/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        const startPos = editor.document.positionAt(match.index);
        const endPos = editor.document.positionAt(match.index + match[0].length);
        const decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: 'Color **' + match[0] + '**' };
        colorDecorations.push(decoration);
    }

    // 为每个匹配的颜色创建并应用装饰器
    Object.keys(colorMap).forEach((colorKey) => {
        const decorationType = vscode.window.createTextEditorDecorationType({
            // 为装饰器设置背景色
            backgroundColor: colorMap[colorKey as keyof typeof colorMap], // Explicitly define the type of colorMap
            // isWholeLine: true
        });
        const matches = colorDecorations.filter(decoration => {
            // 获取装饰器范围内的文本内容
            const textInRange = editor.document.getText(decoration.range);
            return textInRange === colorKey;
        });
        // const matches = colorDecorations.filter(decoration => text.substring(decoration.range.start.character, decoration.range.end.character) === colorKey);
        editor.setDecorations(decorationType, matches);
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
    }, ' ');

    const provider2 = vscode.languages.registerCompletionItemProvider(
        'my-lang',
        {
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
        },
        '.' // triggered whenever a '.' is being typed
    );

    context.subscriptions.push(provider1, provider2);

    let activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        addColorBlockDecorations(activeEditor);
    }

    vscode.window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (editor) {
            addColorBlockDecorations(editor);
        }
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            addColorBlockDecorations(activeEditor);
        }
    }, null, context.subscriptions);
}
