import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as funcDef from "./configs/funcDes";

let a: string = `
import { MyFunc } from "../common"

`;
let s: string = "";
let n: string = "";
let labels: string[] = [];
let labelMaps: string[] = [];
for (const [key, value] of Object.entries(funcDef)) {
    for (let [k, v] of Object.entries(value)) {
        const label = k.replace("#", "");
        if (k[0] === "#") {
            k = k.replace("#", "_");
        } else if (k === "$") {
            k = "_$_";
        } else if (k === "$ $") {
            k = "_$_$_";
        }
        if (typeof v === "string") {
            s += `const ${k} = "${v}"\n`;
        } else if (typeof v === "number") {
            n += `const ${k} = ${v}\n`;
        } else {
            labels.push(k);
            labelMaps.push(`"${label}": ${k}`);
            a += `const ${k} = new MyFunc()\n`;
            a += `${k}.label = "${label}"\n`;
            a += `${k}.insertText = ""\n`;
            const o = v as any;
            if (o["explanation"]) {
                let oo = o["explanation"];
                a += `${k}.detail = "${oo}"\n`;
            }
            if (o["tip"]) {
                let oo = o["tip"];
                a += `${k}.tip = "${oo}"\n`;
            }
            if (o["body"]) {
                a += `${k}.body = "${o["body"]}"\n`;
            }
            if (o["markettype"]) {
                let oo = o["markettype"];
                a += `${k}.markettype = ${oo}\n`;
            }
            if (o["type"]) {
                let oo = o["type"];
                a += `${k}.type = ${oo}\n`;
            }
            if (o["description"]) {
                let oo = o["description"];
                oo = oo.replace(/\\r\\n/g, "\n");
                a += `${k}.documentation = \`\n${oo}\n\`\n`;
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
    let disposable = vscode.commands.registerCommand(
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
