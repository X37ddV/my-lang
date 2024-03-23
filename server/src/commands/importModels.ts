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

/**
 * DESCRIPTION
 *
 * @version VERSION
 *
 * @briefDescription BRIEFDESCRIPTION
 * @property PROPERTY
 * @editTime EDITTIME
 *
 * @author AUTHOR
 * @signature SIGNATURE
 * @telephone TELEPHONE
 * @mail MAIL
 * @infoVersion INFOVERSION
 *
 * @param PARAM [PARAMDEFAULTSET]
 */
const formatContent = (destContent: string) => {
    const myDescription = extractTagContent(destContent, "DESCRIPTION");
    const myParam = extractTagContent(destContent, "PARAM");
    const myParamDefaultSet = extractTagContent(destContent, "PARAMDEFAULTSET");
    const myVersion = extractTagContent(destContent, "VERSION");
    const mySignature = extractTagContent(destContent, "SIGNATURE");
    const myTelephone = extractTagContent(destContent, "TELEPHONE");
    const myMail = extractTagContent(destContent, "MAIL");
    const myBriefDescription = extractTagContent(destContent, "BRIEFDESCRIPTION");
    const myEditTime = extractTagContent(destContent, "EDITTIME");
    const myInfoVersion = extractTagContent(destContent, "INFOVERSION");
    const myAuthor = extractTagContent(destContent, "AUTHOR");
    const myProperty = extractTagContent(destContent, "PROPERTY");
    const myCode = extractTagContent(destContent, "CODE");

    function formatValue(value: string | null) {
        return value?.replace(/[\r\n]+/g, "").trim() ?? "";
    }

    function getFieldLines(fields: Record<string, string | null>) {
        return Object.entries(fields)
            .filter(([_key, value]) => value)
            .map(([key, value]) => `${key} ${formatValue(value)}`);
    }

    const descriptionLines = (myDescription || "")
        .trim()
        .split(/\r?\n/)
        .map((line) => `${line}`);
    const versionLines = getFieldLines({
        "@version": myVersion,
    });
    const baseInfoLines = getFieldLines({
        "@briefDescription": myBriefDescription,
        "@property": myProperty,
        "@editTime": myEditTime,
    });
    const authorLines = getFieldLines({
        "@author": myAuthor,
        "@signature": mySignature,
        "@telephone": myTelephone,
        "@mail": myMail,
        "@infoVersion": myInfoVersion,
    });
    const params = extractParamContent(myParam ?? "");
    const defaultSet = extractParamContent(myParamDefaultSet ?? "");
    const paramLines = params.map((param, i) => {
        const [first, ...rest] = param;
        const defaultValue = defaultSet[i] ?? [0, 0, 0, 0];
        return `@param ${first} ${rest.join(", ")} [${defaultValue.join(", ")}]`;
    });
    const descriptions = [descriptionLines, versionLines, baseInfoLines, authorLines, paramLines]
        .filter((lines) => lines.length > 0)
        .reduce((acc, currentArray, index) => {
            if (index > 0) {
                acc = acc.concat("");
            }
            return acc.concat(currentArray);
        }, []);

    const lines: string[] = [];
    if (descriptions.length > 0) {
        lines.push("/**");
        lines.push(...descriptions.map((line) => ` * ${line}`));
        lines.push(" */");
    }
    lines.push("");
    if (myCode) {
        lines.push(...myCode.split(/\r?\n/));
        lines.push("");
    }
    return lines.join(os.EOL);
};

const extractParamContent = (text: string) => {
    // 使用正则表达式匹配文本中的所有方括号内容
    const regex = /\[([^\]]+)\]/g;

    // 使用 matchAll 方法获取所有匹配项
    const matches = [...text.matchAll(regex)];

    // 提取匹配组中的内容并转换为数值数组
    const arrays = matches.map((match) => {
        // 分割字符串得到字符串数组，然后使用 map 将每个元素转换为浮点数或字符串
        return match[1].split(",").map((item) => {
            const trimmedItem = item.trim();
            const number = Number(trimmedItem);
            return isNaN(number) ? trimmedItem : number;
        });
    });

    return arrays;
};

const extractTagContent = (xml: string, tagName: string) => {
    const regex = new RegExp(`<${tagName}>\\s*([\\s\\S]*?)\\s*</${tagName}>`, "i");
    const matches = xml.match(regex);
    return matches ? matches[1] : null;
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
        const destContent = iconv.encode(srcContent, destEncoding).toString();
        const destFileContent = formatContent(destContent);
        for (const destFilePath of destFilePaths) {
            // 确保目标目录存在，如果不存在则创建
            const destDir = path.dirname(destFilePath);
            await fs.mkdir(destDir, { recursive: true });
            await fs.writeFile(destFilePath, destFileContent);
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
