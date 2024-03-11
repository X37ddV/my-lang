import * as vscode from "vscode";
import { completions } from "./configs/completions";

export function activateCompletionItemProvider(
    context: vscode.ExtensionContext,
    languageId: string
) {
    const provider1 = vscode.languages.registerCompletionItemProvider(
        languageId,
        {
            provideCompletionItems(
                document: vscode.TextDocument,
                position: vscode.Position,
                token: vscode.CancellationToken,
                context: vscode.CompletionContext
            ) {
                const completionItems = [];
                for (const item of completions) {
                    const completionItem = new vscode.CompletionItem(
                        item.label
                    );
                    completionItem.kind = vscode.CompletionItemKind.Function;
                    completionItem.detail = item.detail;
                    completionItem.insertText = item.insertText
                        ? new vscode.SnippetString(item.insertText)
                        : undefined;
                    completionItem.documentation = new vscode.MarkdownString(
                        item.documentation
                    );
                    completionItems.push(completionItem);
                }
                return completionItems;
            },
        }
    );

    const provider2 = vscode.languages.registerCompletionItemProvider(
        languageId,
        {
            provideCompletionItems(
                _document: vscode.TextDocument,
                position: vscode.Position
            ) {
                // 创建补全项的范围，使其覆盖用户已经输入的'#'
                const startPosition = new vscode.Position(position.line, Math.max(position.character - 1, 0));
                const endPosition = position;
                const range = new vscode.Range(startPosition, endPosition);

                const regionCompletion = new vscode.CompletionItem('#region', vscode.CompletionItemKind.Snippet);
                regionCompletion.insertText = new vscode.SnippetString('//#region ${1:Region Name}\n$0\n//#endregion');
                regionCompletion.detail = 'Region Start';
                regionCompletion.documentation = new vscode.MarkdownString('Inserts a //#region block and a //#endregion block');
                regionCompletion.range = range;
                
                const endregionCompletion = new vscode.CompletionItem('#endregion', vscode.CompletionItemKind.Snippet);
                endregionCompletion.insertText = new vscode.SnippetString('//#endregion');
                endregionCompletion.detail = 'Region End';
                endregionCompletion.documentation = new vscode.MarkdownString('Ends a //#region block');
                endregionCompletion.range = range;
                
                return [
                    regionCompletion,
                    endregionCompletion,
                ];
            },
        },
        "#"
    );

    context.subscriptions.push(provider1, provider2);
}
