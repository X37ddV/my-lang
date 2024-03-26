/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from "path";
import * as vscode from "vscode";

import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from "vscode-languageclient/node";
import { colorProvider } from "./colorProvider";
import { importModelsFromTQuant8 } from "./commands/importModelsFromTQuant8";
import { runModelAtTQuant8 } from "./commands/runModelAtTQuant8";
import { autoInsertStarInJSDoc } from "./commands/autoInsertStarInJSDoc";

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

    // 注册客户端插件
    context.subscriptions.push(
        // 颜色装饰器
        vscode.languages.registerColorProvider("my-lang", colorProvider),
        // 服务端命令: 导入 TQuant8 模型
        vscode.commands.registerCommand(
            "extension.importModelsFromTQuant8",
            importModelsFromTQuant8(clientReadyPromise)
        ),
        // 服务端命令: 在 TQuant8 运行模型
        vscode.commands.registerCommand("extension.runModelAtTQuant8", runModelAtTQuant8(clientReadyPromise)),
        // 客户端命令：在 JSDoc 中自动插入星号
        vscode.commands.registerCommand("extension.autoInsertStarInJSDoc", autoInsertStarInJSDoc)
    );

    // 监听回车键事件
    vscode.workspace.onDidChangeTextDocument((event) => {
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor && event.contentChanges.length > 0) {
            const change = event.contentChanges[0];
            if (/^\r?\n/.test(change.text)) {
                vscode.commands.executeCommand("extension.autoInsertStarInJSDoc", change.text.replace(/^\r?\n/, ""));
            }
        }
    });
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
