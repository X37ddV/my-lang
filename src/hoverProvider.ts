import * as vscode from "vscode";
import { funcMap } from "./configs/func";
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
            if (word in funcMap) {
                const func = funcMap[word];
                const contents = new vscode.MarkdownString(
                    `**${func.detail}**(***${func.label}***)\n\n${func.tip}\n\n${func.documentation}`
                );
                contents.isTrusted = true;
                return new vscode.Hover(contents, range);
            } else if (word.startsWith("ICON") && icons[word]) {
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
