/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

// import * as os from "os";
import * as path from "path";
import * as fs from "fs/promises";
import { exec as execCb } from "child_process";
import { promisify } from "util";
// import * as iconv from "iconv-lite";

const exec = promisify(execCb);

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

export const runModelAtTQuant8 = async (root: string, documentText: string) => {
    let message = "";
    try {
        await fs.access(root);
        const formulaTypesPath = path.join(root, "Formula", "TYPES");
        const orderIniPath = path.join(formulaTypesPath, "Order.ini");
        // TODO: 读取Order.ini文件，检查是否存在AUTORUN字段，如果不存在则添加
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
    }
    return message;
};
