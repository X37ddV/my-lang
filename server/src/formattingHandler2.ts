/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";
import { FormattingOptions, TextEdit, Range, Position } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

// 代码块类型
enum BlockType {
    None, // 错误内容
    BlockComment, // 注释块
    LineComment, // 注释行
    IfThen, // 条件IF
    Else, // 条件ELSE
    BeginEnd, // 代码块
    Code, // 代码行
}

interface Block {
    type: BlockType;
    text: string;
}

// 获取下一个代码块
const getBlocks = (text: string) => {
    const blocks: Block[] = [];
    text = text.trim();

    const tryMatch = (regexStart: RegExp | null, regex: RegExp, type: BlockType) => {
        if (!text) return true;
        if (!regexStart || regexStart.test(text)) {
            const matchText = text.match(regex)?.[0] ?? "";
            if (matchText) {
                blocks.push({ type, text: matchText });
                text = text.substring(matchText.length).trim();
            } else {
                blocks.push({ type: BlockType.None, text });
                text = "";
            }
            return true;
        }
        return false;
    };

    while (text) {
        if (tryMatch(/^\/\*/, /^\/\*[\s\S]*?\*\//, BlockType.BlockComment)) continue;
        if (tryMatch(/^\/\//, /^\/\/.*/, BlockType.LineComment)) continue;
        if (tryMatch(/^IF\b(?!\s*\()/i, /^IF\b(?!\s*\()[\s\S]*?\bTHEN\b/i, BlockType.IfThen)) continue;
        if (tryMatch(/^ELSE\b/i, /^ELSE\b/i, BlockType.Else)) continue;
        if (tryMatch(/^BEGIN\b/i, /^BEGIN\b[\s\S]*?\bEND\b/i, BlockType.BeginEnd)) continue;
        if (tryMatch(null, /^.*(?:\r\n|\n|$)/, BlockType.Code)) continue;
        break;
    }
    return blocks;
};

function formatBlockComment(comment: string): string {
    return comment;
}

function formatLineComment(comment: string): string {
    return comment
        .replace(/^\/\/\s*/, "// ")
        .replace(/^\/\/\s#/, "//#")
        .replace(/region\s*/i, "region ")
        .replace(/endregion.*/i, "endregion");
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
        .replace(/(?<![0-9A-Z)]\s+)-\s+(?=\d|[A-Z])/g, "-")
        .replace(/(?<=[0-9A-Z])\s+\(/g, "(")
        .replace(/^(VARIABLE|REFLINE)\s*:/, "$1:")
        .replace(/\s+/g, " ")
        .trim();
    return text;
}

function formatIfThen(code: string): string {
    return code;
}

function formatElse(code: string): string {
    return code;
}
function formatBeginEnd(code: string): string {
    return code;
}

function indentCode(code: string, indent: string, indentLevel: number): string {
    const lines = code.split("\r?\n");
    const fullIndent = indent.repeat(indentLevel);
    const indentedLines = lines.map((line) => fullIndent + line);
    return indentedLines.join(os.EOL);
}

function parserIf(ifBlock: Block, blocks: Block[], indent: string, indentLevel: number = 0) {
    let formattedCode = "";
    formattedCode += formatIfThen(ifBlock.text) + os.EOL;
    const nextBlock = blocks.shift();
    if (nextBlock) {
        if (nextBlock.type === BlockType.IfThen) {
            formattedCode += parserIf(nextBlock, blocks, indent, indentLevel + 1) + os.EOL;
        }
    }
    return formattedCode;
}

const formatText = (text: string, indent: string, indentLevel: number = 0): string => {
    let formattedCode = "";
    const blocks = getBlocks(text);
    while (blocks.length > 0) {
        const block = blocks.shift();
        if (block) {
            if (block.type === BlockType.BlockComment) {
                formattedCode += formatBlockComment(block.text) + os.EOL;
            } else if (block.type === BlockType.LineComment) {
                formattedCode += formatLineComment(block.text) + os.EOL;
            } else if (block.type === BlockType.IfThen) {
                formattedCode += parserIf(block, blocks, indent, indentLevel) + os.EOL;
            } else if (block.type === BlockType.Else) {
                formattedCode += formatElse(block.text) + os.EOL;
            } else if (block.type === BlockType.BeginEnd) {
                formattedCode += formatBeginEnd(block.text) + os.EOL;
            } else if (block.type === BlockType.Code) {
                formattedCode += formatCode(block.text) + os.EOL;
            } else {
                formattedCode += block.text;
            }
        }
    }
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const preBlock = i - 1 >= 0 ? blocks[i - 1] : null;
        const nextBlock = i + 1 < blocks.length ? blocks[i + 1] : null;
        if (block.type === BlockType.BlockComment) {
            formattedCode += formatBlockComment(block.text) + os.EOL;
        } else if (block.type === BlockType.LineComment) {
            formattedCode += formatLineComment(block.text) + os.EOL;
        } else if (block.type === BlockType.IfThen) {
            formattedCode += formatIfThen(block.text) + os.EOL;
        } else if (block.type === BlockType.Else) {
            formattedCode += formatElse(block.text) + os.EOL;
        } else if (block.type === BlockType.BeginEnd) {
            formattedCode += formatBeginEnd(block.text) + os.EOL;
        } else if (block.type === BlockType.Code) {
            formattedCode += formatCode(block.text) + os.EOL;
        } else {
            formattedCode += block.text;
        }
    }
    return formattedCode;
};

// 辅助函数：获取文档的完整范围
const getFullRange = (document: TextDocument): Range => {
    return Range.create(Position.create(0, 0), document.positionAt(document.getText().length));
};

export const formattingHandler = (document: TextDocument, options: FormattingOptions): TextEdit[] => {
    // 缩进
    let indent: string;
    if (options.insertSpaces) {
        indent = " ".repeat(options.tabSize);
    } else {
        indent = "\t";
    }

    // 获取文档内容
    const text = document.getText();

    // 格式化代码
    const formattedText = formatText(text, indent);

    // 计算差异，生成 TextEdit
    const edits = [TextEdit.replace(getFullRange(document), formattedText)];

    return edits;
};
