/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from "vscode";

export const importModelsFromTQuant8 = (clientReadyPromise: Promise<unknown>) => {
    return async () => {
        await clientReadyPromise;
        const workspaceFolders = vscode.workspace.workspaceFolders?.map((folder) => folder.uri.fsPath) || [];
        vscode.commands.executeCommand("myLang.importModelsFromTQuant8", ...workspaceFolders);
    };
};
