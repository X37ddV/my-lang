import { functions } from "./functions";
import { keywords } from "./keywords";
import { others } from "./others";
import { CompletionItem, CompletionItemKind } from "vscode-languageserver/node";
import { MyCompletionItemKind } from "./utils";

const toKind = (kind: MyCompletionItemKind): CompletionItemKind => {
    let result: CompletionItemKind;
    switch (kind) {
        case MyCompletionItemKind.Keyword:
            result = CompletionItemKind.Keyword;
            break;
        case MyCompletionItemKind.Function:
            result = CompletionItemKind.Function;
            break;
        case MyCompletionItemKind.Enum:
            result = CompletionItemKind.Enum;
            break;
        case MyCompletionItemKind.Reference:
            result = CompletionItemKind.Reference;
            break;
        case MyCompletionItemKind.Snippet:
            result = CompletionItemKind.Snippet;
            break;
        case MyCompletionItemKind.Operator:
            result = CompletionItemKind.Operator;
            break;
        case MyCompletionItemKind.Text:
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

export const sharpCompletionItems: CompletionItem[] = completions
    .filter(
        (item) =>
            item.kind == MyCompletionItemKind.Reference ||
            item.kind == MyCompletionItemKind.Snippet
    )
    .map((item) => ({
        label: item.label,
        kind: toKind(item.kind),
    }));

console.log(sharpCompletionItems);

export const completionResolve = (item: CompletionItem): CompletionItem => {
    const completionItem = completionMap.get(item.label);
    if (completionItem) {
        item.labelDetails = { detail: completionItem.description, description: completionItem.description };
        item.insertText = completionItem.insertText;
        item.detail = completionItem.detail;
        item.documentation = completionItem.documentation;
    }
    return item;
};
