/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";
import * as path from "path";
import * as fs from "fs/promises";
import * as iconv from "iconv-lite";
import { MessageType, ShowMessageParams } from "vscode-languageserver/node";
import { searchTQuant8 } from "./searchTQuant8";

const defaultSettings = (root: string) => {
    return `
    {
        "myLang.localTQuant8Path": "${root.replace("\\", "\\\\")}",
        "myLang.maxNumberOfProblems": 100,
        "vsicons.associations.files": [
            {
                "icon": "mlang",
                "extensions": ["my"],
                "format": "svg"
            }
        ]
    }
`;
};

const findXTRDFiles = async (dir: string, files: string[] = []) => {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            // 如果是目录，递归查找
            await findXTRDFiles(fullPath, files);
        } else if (item.isFile() && path.extname(item.name).toUpperCase() === ".XTRD") {
            // 如果是文件且扩展名为.XTRD，添加到结果数组
            files.push(fullPath);
        }
    }

    return files;
};

async function convertXTRDToMy(
    srcFilePath: string,
    destFilePaths: string[],
    srcEncoding = "GBK",
    destEncoding = "UTF-8"
) {
    try {
        // 读取原文件内容
        const srcContentBuffer = await fs.readFile(srcFilePath);
        const srcContent = iconv.decode(srcContentBuffer, srcEncoding);

        // 转换编码并写入新文件
        const destContent = iconv.encode(srcContent, destEncoding);
        const regex = /<CODE>([\s\S]*?)<\/CODE>/g;
        const matches = destContent.toString().matchAll(regex);
        const myContent = [];
        for (const match of matches) {
            myContent.push(match[1]);
        }
        for (const destFilePath of destFilePaths) {
            // 确保目标目录存在，如果不存在则创建
            const destDir = path.dirname(destFilePath);
            await fs.mkdir(destDir, { recursive: true });
            await fs.writeFile(destFilePath, myContent.join(os.EOL));
        }
    } catch (error: any) {
        throw new Error(`转换文件 ${srcFilePath} 失败: ${error.message}`);
    }
}

export const importModelsFromTQuant8 = async (root: string, workspaceFolders: string[]) => {
    let message: ShowMessageParams | null = null;
    try {
        root = await searchTQuant8(root);
        await fs.access(root);
        // 自动生成配置
        for (const workspaceFolder of workspaceFolders) {
            const vscodeFolder = path.join(workspaceFolder, ".vscode");
            fs.access(vscodeFolder).then(async (err: any) => {
                if (err) {
                    await fs.mkdir(vscodeFolder, { recursive: true });
                }
                const settingsFile = path.join(vscodeFolder, "settings.json");
                fs.access(settingsFile).then(async (err: any) => {
                    if (err) {
                        await fs.writeFile(settingsFile, defaultSettings(root));
                    }
                });
            });
        }
        // 开始导入
        const formulaTypesPath = path.join(root, "Formula", "TYPES");
        const files = await findXTRDFiles(formulaTypesPath);
        for (const file of files) {
            const destFilePaths = [];
            for (const workspaceFolder of workspaceFolders) {
                const relativePath = path.relative(formulaTypesPath, file);
                const destFilePath = path.join(workspaceFolder, relativePath);
                const parsedPath = path.parse(destFilePath);
                parsedPath.ext = ".my";
                parsedPath.base = `${parsedPath.name}${parsedPath.ext}`;
                const myFilePath = path.format(parsedPath);
                destFilePaths.push(myFilePath);
            }
            await convertXTRDToMy(file, destFilePaths);
        }
        message = {
            type: MessageType.Info,
            message: `成功导入 ${files.length} 个 TQuant8 模型`,
        };
    } catch (error: any) {
        message = {
            type: MessageType.Error,
            message: `导入 TQuant8 模型失败: ${error.message}`,
        };
    }
    return message;
};
