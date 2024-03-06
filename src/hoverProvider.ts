import * as vscode from "vscode";
import { completionMap } from "./configs/completions";
import { getIcons } from "./common";

export function activateHoverProvider(
    context: vscode.ExtensionContext,
    languageId: string
) {
    const icons = getIcons(context);
    const provider = vscode.languages.registerHoverProvider(languageId, {
        provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
            const item = completionMap.get(word);
            if (item) {
                const contents = new vscode.MarkdownString(
                    `**${item.label}**\n**${item.detail}**\n\n${item.tip}\n\n${item.documentation}`
                );
                contents.isTrusted = true;
                return new vscode.Hover(contents, range);
            } else if (word.startsWith("ICON") && icons[word]) {
                // 显示图标
                const contents = new vscode.MarkdownString(
                    `![Icon](data:image/x-icon;base64,${icons[word]})`
                );
                contents.isTrusted = true;
                return new vscode.Hover(contents, range);
            }
        },
    });

    context.subscriptions.push(provider);
}
