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
}
