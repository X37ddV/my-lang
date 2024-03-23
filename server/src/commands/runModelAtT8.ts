/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";
import * as fs from "fs/promises";
import * as path from "path";
import * as iconv from "iconv-lite";
import { promisify } from "util";
import { exec as execCallback } from "child_process";
import { MessageType, ShowMessageParams } from "vscode-languageserver/node";
import { searchTQuant8 } from "./searchTQuant8";

const exec = promisify(execCallback);

const autoItPath = path.join(__dirname, "..", "..", "autoit");
const autoItExecutable = path.join(autoItPath, "AutoIt3.exe");
const scriptPath = path.join(autoItPath, "run.au3");

const convertText = (documentText: string) => {
    const text = documentText.replace(/\r?\n/g, os.EOL);
    return iconv.encode(text, "GBK");
};

const orderIniContent = (fileNames: string[]) =>
    convertText(
        [
            "[FILES]",
            `Num=${fileNames.length}`,
            fileNames.map((fileName, i) => `ITEM${i.toString().padStart(4, "0")}=${fileName}`).join(os.EOL),
        ].join(os.EOL)
    );

const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${year}年${month}月${day}日${hours}:${minutes}:${seconds}`;
};

const autoRunContent = (documentText: string) => {
    const commentContent = documentText.match(/\/\*\*[\s\S]*?\*\//)?.[0] ?? "";

    // 提取以@开头的属性
    const attrs: { key: string; value: string }[] = [];
    commentContent.match(/@(\w+)\s+(.+)/g)?.forEach((attr) => {
        const match = attr.match(/@(\w+)\s+(.+)/);
        const key = match?.[1].toUpperCase();
        const value = match?.[2].trim();
        if (key && value) {
            attrs.push({ key, value });
        }
    });

    // 提取PARAM属性
    const attrParams = attrs
        .filter((attr) => attr.key === "PARAM")
        .map((attr) => {
            const text = attr.value;
            const identifierRegex = /^\s*([A-Za-z0-9]+)\s*/;
            const bracketNumbersRegex = /\[(.*?)\]/;

            // 第一步：获取第一个标识符
            const identifierMatch = text.match(identifierRegex);
            const identifier = identifierMatch ? identifierMatch[1] : null;

            // 第二步：获取中括号中的内容，并转换为数字数组
            const bracketContentMatch = text.match(bracketNumbersRegex);
            const bracketNumbers = bracketContentMatch
                ? bracketContentMatch[1].split(",").map((num) => parseFloat(num.trim()) || 0)
                : [];

            // 第三步：获取剩余部分，并转换为数字数组
            // 移除第一个标识符和方括号内容
            const remainingText = text.replace(identifierRegex, "").replace(bracketNumbersRegex, "");
            const remainingNumbers = remainingText.split(",").map((num) => parseFloat(num.trim()) || 0);

            // 返回结果
            const param = `[${[identifier, ...remainingNumbers.map((num) => num.toFixed(6))].join(",")}]`;
            const paramDefaultSet = `[${bracketNumbers.map((num) => num.toFixed(6)).join(",")}]`;
            return { param, paramDefaultSet };
        });

    // 提取普通的注释内容
    const normalComments = commentContent
        .replace(/^\/\*\*|\*\/$/gm, "") // 移除注释的开始/**和结束*/标记
        .split(/\r?\n/) // 按行分割
        .map((line) => line.replace(/^\s*\*\s*/, "")) // 移除行首的*号和空格
        .filter((line) => !line.startsWith("@")) // 排除以@开头的行
        .join(os.EOL) // 重新组合为字符串
        .trim(); // 移除字符串两端的空白字符

    // 生成新的属性列表
    const contentItems = attrs
        .filter((attr) => attr.key !== "PARAM")
        .reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>);
    contentItems["PARAM"] = attrParams.map((item) => item.param).join(os.EOL);
    contentItems["PARAMDEFAULTSET"] = ["1", ...attrParams.map((item) => item.paramDefaultSet)].join(os.EOL);
    contentItems["DESCRIPTION"] = normalComments;
    contentItems["CODE"] = `${documentText.trimEnd()}${os.EOL}`.replace("/**", "/*");
    contentItems["EDITTIME"] = `${formatDate(new Date())}`;
    contentItems["PROPERTY"] = contentItems["PROPERTY"] || "1";
    contentItems["VERSION"] = contentItems["VERSION"] || "130112";

    // 按顺序生成模型文件内容
    const contents = [
        "DESCRIPTION",
        "PARAM",
        "PARAMDEFAULTSET",
        "CODE",
        "VERSION",
        "SIGNATURE",
        "TELEPHONE",
        "MAIL",
        "BRIEFDESCRIPTION",
        "EDITTIME",
        "INFOVERSION",
        "AUTHOR",
        "PROPERTY",
    ]
        .map((key) => {
            const vaule = contentItems[key];
            return vaule ? `<${key}>${os.EOL}${vaule}${os.EOL}</${key}>` : "";
        })
        .filter((content) => content);

    return convertText(contents.join(os.EOL) + "\0");
};

const getNewOrderIni = (content: Buffer, insertAutoRun: boolean) => {
    const lineText = iconv.decode(content, "GBK");
    const itemRegex = /ITEM(\d{4})=(.*)/g;
    const items: string[] = [];
    let match;
    while ((match = itemRegex.exec(lineText)) !== null) {
        items[Number(match[1])] = match[2];
    }
    const newItems: string[] = items.filter((item) => item !== undefined && item !== "VSCODE");
    if (insertAutoRun) {
        newItems.unshift("VSCODE");
    }
    return orderIniContent(newItems);
};

const restoreOrderIniFile = (orderIniFile: string) => {
    fs.access(orderIniFile).then((err: any) => {
        if (!err) {
            fs.readFile(orderIniFile).then((content: Buffer) => {
                const newContent = getNewOrderIni(content, false);
                fs.writeFile(orderIniFile, newContent);
            });
        }
    });
};

const modifyOrderIniFile = async (orderIniFile: string) => {
    await fs.access(orderIniFile);
    const content = await fs.readFile(orderIniFile);
    const newContent = getNewOrderIni(content, true);
    await fs.writeFile(orderIniFile, newContent);
};

export const runModelAtTQuant8 = async (root: string, documentText: string) => {
    let message: ShowMessageParams | null = null;
    let autoRunPath = "";
    let orderIniFile = "";
    try {
        // 如果 root 为空，则尝试搜索
        root = await searchTQuant8(root);
        // 准备运行环境
        await fs.access(root);
        const formulaTypesPath = path.join(root, "Formula", "TYPES");
        await fs.access(formulaTypesPath);
        orderIniFile = path.join(formulaTypesPath, "Order.ini");
        autoRunPath = path.join(formulaTypesPath, "VSCODE");
        await fs.mkdir(autoRunPath, { recursive: true });
        const autoIniFile = path.join(autoRunPath, "Order.ini");
        await fs.writeFile(autoIniFile, orderIniContent(["AUTORUN.XTRD"]));
        const autoRunFile = path.join(autoRunPath, "AUTORUN.XTRD");
        await fs.writeFile(autoRunFile, autoRunContent(documentText));
        await modifyOrderIniFile(orderIniFile);
        // 运行AutoIt脚本
        const command = `${autoItExecutable} ${scriptPath}`;
        const { stdout, stderr } = await exec(command, { encoding: "buffer" });
        const stdoutDecoded = iconv.decode(stdout, "GBK");
        const stderrDecoded = iconv.decode(stderr, "GBK");
        if (stderrDecoded) {
            message = {
                type: MessageType.Error,
                message: stderrDecoded,
            };
        } else if (stdoutDecoded) {
            message = {
                type: MessageType.Warning,
                message: stdoutDecoded,
            };
        } else {
            message = {
                type: MessageType.Info,
                message: "成功在 TQuant8 中运行模型",
            };
        }
    } catch (error: any) {
        message = {
            type: MessageType.Error,
            message: `在 TQuant8 中运行失败: ${error.message}`,
        };
    } finally {
        // 还原运行环境
        if (autoRunPath) {
            await fs.rm(autoRunPath, { recursive: true, force: true });
        }
        if (orderIniFile) {
            restoreOrderIniFile(orderIniFile);
        }
    }
    return message;
};
