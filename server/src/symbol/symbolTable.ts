import { functions } from "./functions";
import { keywords } from "./keywords";
import { others } from "./others";
import {
    CompletionItem,
    CompletionItemKind,
    InsertTextFormat,
    MarkupKind,
} from "vscode-languageserver/node";
import { MySymbolKind } from "./common";
import { iconMap } from './icons';

const toKind = (kind: MySymbolKind): CompletionItemKind => {
    let result: CompletionItemKind;
    switch (kind) {
        case MySymbolKind.Keyword:
            result = CompletionItemKind.Keyword;
            break;
        case MySymbolKind.Function:
            result = CompletionItemKind.Function;
            break;
        case MySymbolKind.Enum:
            result = CompletionItemKind.Enum;
            break;
        case MySymbolKind.Reference:
            result = CompletionItemKind.Reference;
            break;
        case MySymbolKind.Snippet:
            result = CompletionItemKind.Snippet;
            break;
        case MySymbolKind.Operator:
            result = CompletionItemKind.Operator;
            break;
        case MySymbolKind.Text:
            result = CompletionItemKind.Text;
            break;
        default:
            result = CompletionItemKind.Text;
            break;
    }
    return result;
};

const completions = [...functions, ...keywords, ...others];
const completionMap = new Map(
    completions.map((completion) => [completion.label, completion])
);

export const getSymbolByName = (name: string) => {
    let symbol = completionMap.get(name);
    if (!symbol && name.startsWith("ICON")) {
        symbol = iconMap[name];
    }
    return symbol;
};

// 非#开头的智能提示
export const allCompletionItems: CompletionItem[] = completions
    .filter(
        (item) =>
            item.kind != MySymbolKind.Reference &&
            item.kind != MySymbolKind.Snippet
    )
    .map((item) => ({
        label: item.label,
        kind: toKind(item.kind),
        labelDetails: { detail: "", description: item.description }
    }));

// #开头的智能提示
export const sharpCompletionItems: CompletionItem[] = completions
    .filter(
        (item) =>
            item.kind == MySymbolKind.Reference ||
            item.kind == MySymbolKind.Snippet
    )
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
