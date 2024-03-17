/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { functions } from "./functions";
import { keywords } from "./keywords";
import { others } from "./others";
import { CompletionItem, CompletionItemKind, InsertTextFormat, MarkupKind } from "vscode-languageserver/node";
import { MySymbolKind } from "./common";
import { iconMap } from "./icons";

const kindMap: { [key in MySymbolKind]: CompletionItemKind } = {
    [MySymbolKind.Keyword]: CompletionItemKind.Keyword,
    [MySymbolKind.Function]: CompletionItemKind.Function,
    [MySymbolKind.Enum]: CompletionItemKind.Enum,
    [MySymbolKind.Reference]: CompletionItemKind.Reference,
    [MySymbolKind.Snippet]: CompletionItemKind.Snippet,
    [MySymbolKind.Operator]: CompletionItemKind.Operator,
    [MySymbolKind.Text]: CompletionItemKind.Text,
};

const toKind = (kind: MySymbolKind): CompletionItemKind => {
    return kindMap[kind] ?? CompletionItemKind.Text;
};

const completions = [...functions, ...keywords, ...others];
const completionMap = new Map(completions.map((completion) => [completion.label, completion]));

export const getSymbolByName = (name: string) => {
    let symbol = completionMap.get(name);
    if (!symbol && name.startsWith("ICON")) {
        symbol = iconMap[name];
    }
    return symbol;
};

// 非#开头的智能提示
export const allCompletionItems: CompletionItem[] = completions
    .filter((item) => item.kind != MySymbolKind.Reference && item.kind != MySymbolKind.Snippet)
    .map((item) => ({
        label: item.label,
        kind: toKind(item.kind),
        labelDetails: { detail: "", description: item.description },
    }));

// #开头的智能提示
export const sharpCompletionItems: CompletionItem[] = completions
    .filter((item) => item.kind == MySymbolKind.Reference || item.kind == MySymbolKind.Snippet)
    .map((item) => ({
        label: item.label,
        kind: toKind(item.kind),
        labelDetails: { detail: "", description: item.description },
        textEdit: {
            range: {
                start: { line: 0, character: 0 },
                end: { line: 0, character: 0 },
            },
            newText: item.insertText,
        },
    }));

export const completionResolve = (item: CompletionItem): CompletionItem => {
    const completionItem = completionMap.get(item.label);
    if (completionItem) {
        if (!item.textEdit && completionItem.insertText) {
            item.insertText = completionItem.insertText;
        }
        item.insertTextFormat = InsertTextFormat.Snippet;
        item.detail = completionItem.detail;
        item.documentation = {
            kind: MarkupKind.Markdown,
            value: completionItem.documentation,
        };
    }
    return item;
};
