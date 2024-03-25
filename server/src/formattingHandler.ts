/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";
import { FormattingOptions, TextEdit, Range, Position } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { modelComment, parserModelComment } from "./modelComment";

// 代码块类型
enum BlockType {
    None, // 错误内容
    BlockComment, // 注释块
    LineComment, // 注释行
    IfThen, // 条件IF
    Else, // 条件ELSE
    BeginEnd, // 代码块
    Code, // 代码行
    Empty, // 空行
}

interface Block {
    type: BlockType;
    text: string;
}

// 获取全部代码块
const getBlocks = (text: string) => {
    const blocks: Block[] = [];

    const trimStart = (code: string) => {
        if (/^\s*(?:\r?\n)/.test(code)) {
            blocks.push({ type: BlockType.Empty, text: "" });
        }
        return code.trimStart();
    };

    const tryMatch = (regexStart: RegExp | null, regex: RegExp, type: BlockType) => {
        if (!text) return true;
        if (!regexStart || regexStart.test(text)) {
            const matchText = text.match(regex)?.[0] ?? "";
            if (matchText) {
                blocks.push({ type, text: matchText });
                text = trimStart(text.substring(matchText.length));
            } else {
                blocks.push({ type: BlockType.None, text });
                text = "";
            }
            return true;
        }
        return false;
    };

    text = trimStart(text);
    while (text) {
        if (tryMatch(/^\/\*/, /^\/\*[\s\S]*?\*\/[ \t]*(?:\r?\n|$)?/, BlockType.BlockComment)) continue;
        if (tryMatch(/^\/\//, /^\/\/.*(?:\r?\n|$)/, BlockType.LineComment)) continue;
        if (tryMatch(/^IF\b(?!\s*\()/i, /^IF\b(?!\s*\()[\s\S]*?\bTHEN\b[ \t]*(?:\r?\n|$)?/i, BlockType.IfThen))
            continue;
        if (tryMatch(/^ELSE\b/i, /^ELSE\b[ \t]*(?:\r?\n|$)?/i, BlockType.Else)) continue;
        if (tryMatch(/^BEGIN\b/i, /^BEGIN\b[\s\S]*?\bEND\b[ \t]*(?:\r?\n|$)?/i, BlockType.BeginEnd)) continue;
        if (tryMatch(null, /^.*(?:\r?\n|$)/, BlockType.Code)) continue;
        break;
    }
    return blocks;
};

const formatBlockComment = (text: string, indent: string, indentLevel: number = 0): string => {
    let comment = text.trim();
    if (comment.startsWith("/**")) {
        const contentItems = parserModelComment(comment);
        comment = modelComment(contentItems);
    }
    return indentCode(comment, indent, indentLevel);
};

const formatLineComment = (text: string, indent: string, indentLevel: number = 0): string => {
    const comment = text
        .trim()
        .replace(/^\/\/\s*/, "// ")
        .replace(/^\/\/\s#\s*/, "//#")
        .replace(/region\s*/i, "region ")
        .replace(/endregion.*/i, "endregion");
    return indentCode(comment, indent, indentLevel);
};

const formatCode = (text: string, indent: string, indentLevel: number = 0): string => {
    const singleLineCommentIdx = text.indexOf("//");
    let singleLineComment = formatLineComment(
        singleLineCommentIdx !== -1 ? text.slice(singleLineCommentIdx) : "",
        indent,
        0
    );
    const code = singleLineCommentIdx !== -1 ? text.slice(0, singleLineCommentIdx) : text;
    let singleLineCode = code
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
    if (singleLineCode) {
        if (singleLineCode.slice(-1) !== ";") {
            if (
                !/^IF\b(?!\s*\()/i.test(singleLineCode) &&
                !/^#/i.test(singleLineCode) &&
                !/^ELSE\b/i.test(singleLineCode) &&
                !/^BEGIN\b/i.test(singleLineCode) &&
                !/^END\b/i.test(singleLineCode)
            ) {
                singleLineCode += ";";
            }
        }
        if (singleLineComment) {
            singleLineComment = " " + singleLineComment;
        }
    }
    const newLine = singleLineCode + singleLineComment;
    return indentCode(newLine, indent, indentLevel);
};

const formatIfThen = (text: string, indent: string, indentLevel: number = 0): string => {
    return formatCode(text.trim().replace(/\r?\n/g, " "), indent, indentLevel);
};

const formatElse = (text: string, indent: string, indentLevel: number = 0): string => {
    return indentCode(text.trim(), indent, indentLevel);
};

const formatBeginEnd = (text: string, indent: string, indentLevel: number = 0): string => {
    let formattedCode = "BEGIN" + os.EOL;
    const code = text.replace(/^BEGIN[ \t]*(?:\r?\n|$)?/i, " ").replace(/[ \t]*END[ \t]*(?:\r?\n|$)?$/i, " ");
    formattedCode += formatText(code, indent, 1);
    formattedCode += "END";
    return indentCode(formattedCode, indent, indentLevel);
};

const indentCode = (code: string, indent: string, indentLevel: number): string => {
    const lines = code.split(/\r?\n/);
    const fullIndent = indent.repeat(indentLevel);
    const indentedLines = lines.map((line) => fullIndent + line);
    return indentedLines.join(os.EOL);
};

const parserIf = (ifBlock: Block, blocks: Block[], indent: string, indentLevel: number = 0) => {
    let formattedCode = "";
    formattedCode += formatBlock(ifBlock, indent, indentLevel);
    let nextBlock = blocks.shift();
    while (
        nextBlock &&
        (nextBlock.type === BlockType.LineComment ||
            nextBlock.type === BlockType.BlockComment ||
            nextBlock.type === BlockType.Empty)
    ) {
        formattedCode += formatBlock(nextBlock, indent, indentLevel + 1);
        nextBlock = blocks.shift();
    }
    if (nextBlock) {
        if (nextBlock.type === BlockType.IfThen) {
            formattedCode += parserIf(nextBlock, blocks, indent, indentLevel + 1);
            nextBlock = blocks.shift();
            if (nextBlock && nextBlock.type !== BlockType.Else) {
                blocks.unshift(nextBlock);
                nextBlock = undefined;
            }
        } else if (nextBlock.type === BlockType.BeginEnd) {
            formattedCode += formatBlock(nextBlock, indent, indentLevel);
            nextBlock = blocks.shift();
            if (nextBlock && nextBlock.type !== BlockType.Else) {
                blocks.unshift(nextBlock);
                nextBlock = undefined;
            }
        } else if (nextBlock.type === BlockType.Code) {
            formattedCode += formatBlock(nextBlock, indent, indentLevel + 1);
            nextBlock = blocks.shift();
            if (nextBlock && nextBlock.type !== BlockType.Else) {
                blocks.unshift(nextBlock);
                nextBlock = undefined;
            }
        } else if (nextBlock.type === BlockType.Else) {
            // nothing to do
        } else {
            blocks.unshift(nextBlock);
            nextBlock = undefined;
        }
    }
    if (nextBlock && nextBlock.type === BlockType.Else) {
        formattedCode += formatBlock(nextBlock, indent, indentLevel);
        nextBlock = blocks.shift();
        if (nextBlock) {
            if (nextBlock.type === BlockType.IfThen) {
                formattedCode += parserIf(nextBlock, blocks, indent, indentLevel + 1);
            } else if (nextBlock.type === BlockType.BeginEnd) {
                formattedCode += formatBlock(nextBlock, indent, indentLevel);
            } else if (nextBlock.type === BlockType.Code) {
                formattedCode += formatBlock(nextBlock, indent, indentLevel + 1);
            } else {
                blocks.unshift(nextBlock);
            }
        }
    }
    return formattedCode;
};

const formatBlock = (block: Block, indent: string, indentLevel: number = 0): string => {
    let formattedCode = "";
    if (block) {
        if (block.type === BlockType.Empty) {
            formattedCode += os.EOL;
        } else if (block.type === BlockType.BlockComment) {
            formattedCode += formatBlockComment(block.text, indent, indentLevel) + os.EOL;
        } else if (block.type === BlockType.LineComment) {
            formattedCode += formatLineComment(block.text, indent, indentLevel) + os.EOL;
        } else if (block.type === BlockType.IfThen) {
            formattedCode += formatIfThen(block.text, indent, indentLevel) + os.EOL;
        } else if (block.type === BlockType.Else) {
            formattedCode += formatElse(block.text, indent, indentLevel) + os.EOL;
        } else if (block.type === BlockType.BeginEnd) {
            formattedCode += formatBeginEnd(block.text, indent, indentLevel) + os.EOL;
        } else if (block.type === BlockType.Code) {
            formattedCode += formatCode(block.text, indent, indentLevel) + os.EOL;
        } else {
            formattedCode += block.text + os.EOL;
        }
    }
    return formattedCode;
};

const formatText = (text: string, indent: string, indentLevel: number = 0): string => {
    let formattedCode = "";
    const blocks = getBlocks(text);
    while (blocks.length > 0) {
        const block = blocks.shift();
        if (!block) continue;
        if (block.type === BlockType.IfThen) {
            formattedCode += parserIf(block, blocks, indent, indentLevel);
        } else {
            formattedCode += formatBlock(block, indent, indentLevel);
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
