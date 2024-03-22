/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";
import * as fs from "fs/promises";
import * as path from "path";
import * as iconv from "iconv-lite";
import { exec as execOriginal } from "child_process";
import { promisify } from "util";

const exec = promisify(execOriginal);

const autoItPath = path.join(__dirname, "..", "..", "autoit");
const autoItExecutable = path.join(autoItPath, "AutoIt3.exe");
const scriptPath = path.join(autoItPath, "run.au3");

const parseOutput = (output: string) => {
    const regex = /\{(.|\n)*?\}/;
    const match = output.match(regex);
    let jsonObject: { code: number; message: string } | null = null;
    if (match) {
        try {
            jsonObject = JSON.parse(match[0]);
        } catch (error: any) {
            // nothing to do
        }
    }
    return jsonObject;
};

const convertText = (documentText: string) => {
    const text = documentText.replace(/\r?\n|\n\r?|\r/g, os.EOL);
    return iconv.encode(text, "GB2312");
};

const orderIniContent = (fileNames: string[]) =>
    convertText(
        [
            "[FILES]",
            `Num=${fileNames.length}`,
            fileNames.map((fileName, i) => `ITEM${i.toString().padStart(4, "0")}=${fileName}`).join("\n"),
        ].join("\n")
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

const autoRunContent = (codeText: string) =>
    convertText(`<DESCRIPTION>
此代码由于 VSCode 扩展 MyLang 生成，用于在 TQuant8 中自动运行模型。
</DESCRIPTION>
<PARAMDEFAULTSET>
1
</PARAMDEFAULTSET>
<CODE>
${codeText.trimEnd()}

</CODE>
<VERSION>
130112
</VERSION>
<BRIEFDESCRIPTION>
自动运行
</BRIEFDESCRIPTION>
<EDITTIME>
${formatDate(new Date())}
</EDITTIME>
<AUTHOR>
MyLang
</AUTHOR>
<PROPERTY>
1
</PROPERTY>
\0`);

const codeMessage = (code: number) => {
    switch (code) {
        case 0:
            return "成功";
        case 1:
            return "请将`TQuant8`的主视图切换到`K线`视图";
        case -1:
            return "未找到`TQuant8`的主窗口";
        case -2:
            return "未找到`TQuant8`的`编写模型`窗口";
        default:
            return "未知错误";
    }
};

const getNewOrderIni = (content: Buffer, insertAutoRun: boolean) => {
    const lineText = iconv.decode(content, "GB2312");
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
    let message = "";
    let autoRunPath = "";
    let orderIniFile = "";
    try {
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
        const { stdout, stderr } = await exec(command, { encoding: "utf-8" });
        const objerr = parseOutput(stderr);
        const objout = parseOutput(stdout);
        let code = 0;
        if (objerr && objerr.code) {
            code = objerr.code;
        } else if (objout && objout.code) {
            code = objout.code;
        }
        if (code < 0) {
            throw new Error(`${codeMessage(code)}`);
        } else if (code > 0) {
            message = `${codeMessage(code)}`;
        }
    } catch (error: any) {
        throw new Error(`在 TQuant8 中运行失败: ${error.message}`);
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
