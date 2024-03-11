import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as funcDef from "./configs/funcDes";

let a: string = `
import { MyFunc } from "../common"

`;
let s: string = "";
let n: string = "";
const labels: string[] = [];
const labelMaps: string[] = [];
for (const [_key, value] of Object.entries(funcDef)) {
    for (const [k, v] of Object.entries(value)) {
        let key = k;
        const label = key.replace("#", "");
        if (key[0] === "#") {
            key = key.replace("#", "_");
        } else if (key === "$") {
            key = "_$_";
        } else if (key === "$ $") {
            key = "_$_$_";
        }
        if (typeof v === "string") {
            s += `const ${key} = "${v}"\n`;
        } else if (typeof v === "number") {
            n += `const ${key} = ${v}\n`;
        } else {
            labels.push(key);
            labelMaps.push(`"${label}": ${key}`);
            a += `const ${key} = new MyFunc()\n`;
            a += `${key}.label = "${label}"\n`;
            a += `${key}.insertText = ""\n`;
            const o = v as any;
            if (o["explanation"]) {
                const oo = o["explanation"];
                a += `${key}.detail = "${oo}"\n`;
            }
            if (o["tip"]) {
                const oo = o["tip"];
                a += `${key}.tip = "${oo}"\n`;
            }
            if (o["body"]) {
                a += `${key}.body = "${o["body"]}"\n`;
            }
            if (o["markettype"]) {
                const oo = o["markettype"];
                a += `${key}.markettype = ${oo}\n`;
            }
            if (o["type"]) {
                const oo = o["type"];
                a += `${key}.type = ${oo}\n`;
            }
            if (o["description"]) {
                let oo = o["description"];
                oo = oo.replace(/\\r\\n/g, "\n");
                a += `${key}.documentation = \`\n${oo}\n\`\n`;
            }
            a += "\n";
        }
    }
}

function saveStringToFile(filePath: string, content: string): void {
    try {
        fs.writeFileSync(filePath, content, "utf8");
        // 显示一个信息性消息以确认文件已保存
        vscode.window.showInformationMessage(`File saved: ${filePath}`);
    } catch (err: any) {
        // 错误处理：如果文件无法保存，显示一个错误消息
        vscode.window.showErrorMessage(
            `Failed to save the file: ${err.message}`
        );
    }
}

export function activateCommands(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "extension.saveString",
        () => {
            // 指定要保存的文件路径和内容
            // 检查是否有打开的工作区文件夹
            if (
                vscode.workspace.workspaceFolders &&
                vscode.workspace.workspaceFolders.length > 0
            ) {
                // 获取第一个工作区文件夹的路径
                const workspaceFolder = vscode.workspace.workspaceFolders[0];
                const workspaceFolderPath = workspaceFolder.uri.fsPath;
                a += `export const funcList = [ ${labels.join(", ")} ]\n`;
                a += `export const funcMap: { [key: string]: MyFunc } = { ${labelMaps.join(
                    ", "
                )} }\n`;
                saveStringToFile(path.join(workspaceFolderPath, "a.ts"), a);
                saveStringToFile(path.join(workspaceFolderPath, "s.ts"), s);
                saveStringToFile(path.join(workspaceFolderPath, "n.ts"), n);
            } else {
                vscode.window.showErrorMessage("No workspace folder is open.");
            }
        }
    );

    context.subscriptions.push(disposable);
}
