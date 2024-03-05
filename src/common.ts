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
    static fromLabelAndDetail(label: string, detail: string): MyFunc {
        const result = new MyFunc();
        result.label = label;
        result.detail = detail;
        result.tip = detail;
        result.documentation = detail;
        result.body = label;
        return result;
    }
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

export function getIcons(context: { extensionPath: string }): {
    [key: string]: string;
} {
    const iconsPath = path.join(context.extensionPath, "images/icons");
    let icons: { [key: string]: string } = {};

    try {
        const files = fs.readdirSync(iconsPath);

        files.forEach((file) => {
            if (path.extname(file).toLowerCase() === ".ico") {
                const filePath = path.join(iconsPath, file);
                const fileContent = fs.readFileSync(filePath);
                const base64String = fileContent.toString("base64");
                const iconName = path.basename(file, ".ico").toUpperCase().replace(/_0*/, "");
                icons[iconName] = base64String;
            }
        });
    } catch (err) {
        console.error("Error processing files:", err);
    }

    return icons;
}
