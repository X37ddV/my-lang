/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from "vscode";

export const autoInsertStarInJSDoc = (startStr: string) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // 无活动编辑器
    }
    const doc = editor.document;
    const position = editor.selection.active;
    const lineText = doc.lineAt(position.line).text;
    if ((/^\s*\*[^/]*$/.test(lineText) || lineText.trim().startsWith("/**")) && !lineText.trim().endsWith("*/")) {
        const insertStr = startStr ? " *" : " * ";
        editor.edit((editBuilder) => {
            editBuilder.insert(new vscode.Position(position.line + 1, 0), insertStr);
        });
    }
};
