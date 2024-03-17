/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { FormattingOptions, TextEdit } from "vscode-languageserver/node";

function formatComment(comment: string): string {
    return comment
        .replace(/^\/\/\s*/, "// ")
        .replace(/^\/\/\s#/, "//#")
        .replace(/region\s*/i, "region ")
        .replace(/endregion/i, "endregion");
}

function formatCode(code: string): string {
    const text = code
        .toUpperCase()
        .replace(/"/g, "'")
        .replace(/\s*([()[\],;#+\-*/&|<>=:^.])\s*/g, " $1 ")
        .replace(/&\s*&|\|\s*\||>\s*=|<\s*=|<\s*>|:\s*=|\^\s*\^|\.\s*\./g, (match) => match.replace(/\s/g, ""))
        .replace(/\s+([.#;])\s+/g, "$1")
        .replace(/([([])\s*/g, "$1")
        .replace(/\s*([)\],])/g, "$1")
        .replace(/(?<![0-9A-Z]\s+)-\s+(?=\d)/g, "-")
        .replace(/(?<=[0-9A-Z])\s+\(/g, "(")
        .replace(/^(VARIABLE|REFLINE)\s*:/, "$1:")
        .replace(/\s+/g, " ")
        .trim();
    return text;
}

export const formattingHandler = (fullText: string, options: FormattingOptions): TextEdit[] => {
    const edits: TextEdit[] = [];
    const lines = fullText.split(/\r?\n/);

    let indent: string;
    if (options.insertSpaces) {
        indent = " ".repeat(options.tabSize);
    } else {
        indent = "\t";
    }

    let inMultilineComment = false;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // 检查当前行是否开始或结束一个多行注释
        if (line.includes("/*")) {
            inMultilineComment = true;
        }
        if (line.includes("*/")) {
            inMultilineComment = false;
            continue; // 还需要处理行尾的注释结束标志后可能的代码
        }

        // 对于多行注释内的行，不进行格式化
        if (inMultilineComment) {
            continue;
        }

        // 去掉行首和行尾的空白字符
        const trimmedLine = line.trim();
        // 获取单行注释
        const singleLineCommentIdx = trimmedLine.indexOf("//");
        const singleLineComment = formatComment(
            singleLineCommentIdx !== -1 ? trimmedLine.slice(singleLineCommentIdx) : ""
        );
        // 获取代码部分
        const singleLineCode = formatCode(
            singleLineCommentIdx !== -1 ? trimmedLine.slice(0, singleLineCommentIdx) : trimmedLine
        );
        const newLine = singleLineCode + (singleLineComment ? `${singleLineCode ? " " : ""}${singleLineComment}` : "");

        if (line !== newLine) {
            const range = {
                start: { line: i, character: 0 },
                end: { line: i, character: line.length },
            };
            edits.push(TextEdit.replace(range, newLine));
        }
    }

    return edits;
};
