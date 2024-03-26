/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";
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
        let insertStr = startStr ? " *" : " * ";
        const nextLineText = doc.lineAt(position.line + 1).text;
        const isEnd = nextLineText.trim().startsWith("*/");
        if (isEnd) {
            insertStr += os.EOL;
        }
        editor
            .edit((editBuilder) => {
                editBuilder.insert(new vscode.Position(position.line + 1, 0), insertStr);
            })
            .then(() => {
                if (isEnd) {
                    const newPosition = new vscode.Position(position.line + 1, insertStr.length);
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                }
            });
    }
};
