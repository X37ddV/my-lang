/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from "vscode";

export const runModelAtTQuant8 = (clientReadyPromise: Promise<unknown>) => {
    return async () => {
        await clientReadyPromise;
        // 发送命令到LSP服务端
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const fileUri = editor.document.uri.toString();
            if (fileUri.endsWith(".my")) {
                vscode.commands.executeCommand("myLang.runModelAtTQuant8", fileUri);
            } else {
                vscode.window.showWarningMessage("请打开一个文件（.my）以运行此命令。");
            }
        } else {
            vscode.window.showWarningMessage("未检测到活动编辑器，请打开一个文件（.my）以运行此命令。");
        }
    };
};
