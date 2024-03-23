/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from "path";
import * as vscode from "vscode";

import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from "vscode-languageclient/node";
import { colorProvider } from "./colorProvider";

let client: LanguageClient;
let clientReadyPromiseResolve: (value: unknown) => void;
const clientReadyPromise = new Promise((resolve) => {
    clientReadyPromiseResolve = resolve;
});

export function activate(context: vscode.ExtensionContext) {
    // 服务器模块的绝对路径
    const serverModule = context.asAbsolutePath(path.join("server", "out", "server.js"));

    // 服务器配置选项
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
        },
    };

    // 客户端配置选项
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: "file", language: "my-lang", pattern: "**/*.my" }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher("**/.my"),
        },
    };

    // 创建语言客户端
    client = new LanguageClient("myLang", "My Language Server", serverOptions, clientOptions);

    // 启动客户端
    client.start().then((value) => {
        clientReadyPromiseResolve(value);
    });

    // 添加不依赖于语言服务器的功能
    context.subscriptions.push(
        // 颜色装饰器
        vscode.languages.registerColorProvider("my-lang", colorProvider)
    );

    // 命令: 导入 TQuant8 模型
    vscode.commands.registerCommand("extension.importModelsFromTQuant8", async () => {
        await clientReadyPromise;
        const workspaceFolders: string[] = [];
        if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
            // 获取当前激活的工作区（工作目录）
            for (let i = 0; i < vscode.workspace.workspaceFolders.length; i++) {
                workspaceFolders.push(vscode.workspace.workspaceFolders[i].uri.fsPath); // 获取文件系统路径
            }
        }
        vscode.commands.executeCommand("myLang.importModelsFromTQuant8", ...workspaceFolders);
    });

    // 命令: 在 TQuant8 运行模型
    vscode.commands.registerCommand("extension.runModelAtTQuant8", async () => {
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
    });
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
