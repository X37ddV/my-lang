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
    let jsonObject = null;
    if (match) {
        try {
            jsonObject = JSON.parse(match[0]);
        } catch (error: any) {
            throw new Error(`解析 JSON 失败: ${error.message}`);
        }
    }
    return jsonObject;
};

export const runModelAtTQuant8 = async (root: string, documentText: string) => {
    try {
        await fs.access(root);
        const formulaTypesPath = path.join(root, "Formula", "TYPES");
        const command = `${autoItExecutable} ${scriptPath}`;
        const { stdout, stderr } = await exec(command, { encoding: "utf-8" });
        JSON.parse(stdout);
        JSON.parse(stderr);
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    } catch (error: any) {
        throw new Error(`在 TQuant8 中运行失败: ${error.message}`);
    }
};
