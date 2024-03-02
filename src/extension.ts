import * as vscode from "vscode";
import { activateColorDecorations } from "./colorDecorations";
import { activateSaveString } from "./saveString";
import { activateCompletionItemProvider } from "./completionItemProvider";
import { activateHoverProvider } from "./hoverProvider";

export function activate(context: vscode.ExtensionContext) {
    activateHoverProvider(context);
    activateCompletionItemProvider(context);
    activateColorDecorations(context);
    activateSaveString(context);
}
