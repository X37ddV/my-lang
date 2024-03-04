import * as vscode from "vscode";
import { funcMap } from "./configs/func";

export function activateHoverProvider(context: vscode.ExtensionContext, languageId: string) {
    const provider = vscode.languages.registerHoverProvider(languageId, {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            // 检查当前单词是否是我们感兴趣的变量或方法
            if (word in funcMap) {
                const func = funcMap[word];

                const contents = new vscode.MarkdownString(
                    `**${func.detail}**(***${func.label}***)\n\n${func.tip}\n\n${func.documentation}`
                );
                contents.isTrusted = true; // 允许命令和链接

                // 返回一个 Hover 对象，包含要显示的内容和范围
                return new vscode.Hover(contents, range);
            }
        },
    });

    context.subscriptions.push(provider);
}
