import * as fs from "fs";
import * as path from "path";

export class MyFunc {
    public label: string = "";
    public insertText: string = "";
    public detail: string = "";
    public tip: string = "";
    public documentation: string = "";
    public body: string = "";
    public markettype: number = 0;
    public type: number = 0;
}

export function getLanguageId(context: { extensionPath: string }): string {
    const packageJSONPath = path.join(context.extensionPath, "package.json");
    let languageId = "";

    try {
        const data = fs.readFileSync(packageJSONPath, "utf8");
        const packageJSON = JSON.parse(data);
        languageId = packageJSON.contributes.languages[0].id;
    } catch (error) {
        console.error("Error reading or parsing package.json:", error);
    }

    return languageId;
}
