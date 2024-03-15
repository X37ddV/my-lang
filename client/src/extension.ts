/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

// 创建装饰器类型的映射，以便复用
const decorationTypes: { [key: string]: vscode.TextEditorDecorationType } = {};

function ensureDecorationType(colorKey: string) {
    if (!decorationTypes[colorKey]) {
        decorationTypes[colorKey] =
            vscode.window.createTextEditorDecorationType({
                before: {
                    contentText: " ", // 实际内容为空，但是通过CSS来创建可视效果
                    width: "0.8em", // 装饰器宽度
                    height: "0.8em", // 装饰器高度
                    border: "1px solid #fff", // 1px白色边框
                    backgroundColor: colorKey, // 指定的颜色填充
                    margin: "0.1em 0.2em 0 0.2em", // 适当的边距以避免与文本重叠
                },
            });
    }
    return decorationTypes[colorKey];
}

export function activate(context: vscode.ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'my-lang', pattern: '**/*.my' }],
		synchronize: {
			// Notify the server about file changes to '.my files contained in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.my')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'myLang',
		'My Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();

	vscode.languages.onDidChangeDiagnostics(event => {
		event.uris.forEach(uri => {
            const diagnostics = vscode.languages.getDiagnostics(uri);
			const activeEditor = vscode.window.visibleTextEditors.find(editor => editor.document.uri.toString() === uri.toString());
			if (!activeEditor) {
				return;
			}
			const colorDiagnostics = diagnostics.filter(diagnostic => diagnostic.source === 'colorDecorator');
			const colorDecorations: { [key: string]: vscode.DecorationOptions[] } = {};
			for (const colorDiagnostic of colorDiagnostics) {
				const decoration: vscode.DecorationOptions = {
					range: colorDiagnostic.range,
					hoverMessage: colorDiagnostic.message,
				};
				if (colorDecorations[colorDiagnostic.message]) {
					colorDecorations[colorDiagnostic.message].push(decoration);
				} else {
					colorDecorations[colorDiagnostic.message] = [decoration];
				}
			}

			// 更新颜色装饰器
			const colorDecorationsKeys = Object.keys(colorDecorations);
			const colorDecorationTypes = Object.keys(decorationTypes);
			const allKeys = [
				...new Set([...colorDecorationsKeys, ...colorDecorationTypes]),
			];
			allKeys.forEach((key) => {
				const decorationType = ensureDecorationType(key);
				if (colorDecorationsKeys.includes(key)) {
					activeEditor.setDecorations(decorationType, colorDecorations[key]);
				} else {
					activeEditor.setDecorations(decorationType, []);
				}
			});
        });
    });
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
