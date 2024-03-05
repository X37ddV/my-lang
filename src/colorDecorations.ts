import * as vscode from "vscode";

// 创建装饰器类型的映射，以便复用
const decorationTypes: { [key: string]: vscode.TextEditorDecorationType } = {};

// 颜色映射
const colorMap: { [key: string]: string } = {
    COLORRED: "#FF0000",
    COLORGREEN: "#00FF00",
    COLORBLUE: "#0000FF",
    COLORMAGENTA: "#FF00FF",
    COLORYELLOW: "#FFFF00",
    COLORLIGHTGREY: "#D3D3D3",
    COLORLIGHTRED: "#FFA07A",
    COLORLIGHTGREEN: "#90EE90",
    COLORLIGHTBLUE: "#ADD8E6",
    COLORBLACK: "#000000",
    COLORWHITE: "#FFFFFF",
    COLORCYAN: "#00FFFF",
    COLORGRAY: "#808080",
};

function ensureDecorationType(colorKey: string) {
    if (!decorationTypes[colorKey]) {
        decorationTypes[colorKey] =
            vscode.window.createTextEditorDecorationType({
                before: {
                    contentText: " ", // 实际内容为空，但是通过CSS来创建可视效果
                    width: "0.8em", // 装饰器宽度
                    height: "0.8em", // 装饰器高度
                    border: "1px solid #fff", // 1px白色边框
                    backgroundColor: colorKey, // 指定的颜色填充
                    margin: "0.1em 0.2em 0 0.2em", // 适当的边距以避免与文本重叠
                },
            });
    }
    return decorationTypes[colorKey];
}

function rgbToHex(r: string, g: string, b: string) {
    const toHex = (n: string) => {
        let hex = parseInt(n, 10).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return ("#" + toHex(r) + toHex(g) + toHex(b)).toUpperCase();
}

function updateDecorations(activeEditor: vscode.TextEditor) {
    const text = activeEditor.document.getText();
    const colorDecorations: { [key: string]: vscode.DecorationOptions[] } = {};

    // 正则表达式匹配所有颜色标识符
    const regex = RegExp(
        `\\b(${Object.keys(colorMap).join("|")})\\b` +
            "|\\bRGB\\s*\\(\\s*(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)\\s*,\\s*(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)\\s*,\\s*(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)\\s*\\)",
        "g"
    );
    let match;
    while ((match = regex.exec(text)) !== null) {
        const startPos = activeEditor.document.positionAt(match.index);
        const endPos = activeEditor.document.positionAt(
            match.index + match[0].length
        );
        const matchString = match[0];
        const key = matchString.startsWith("RGB")
            ? rgbToHex(match[2], match[3], match[4])
            : colorMap[matchString];
        const decoration: vscode.DecorationOptions = {
            range: new vscode.Range(startPos, endPos),
            hoverMessage: "Color **" + key + "**",
        };
        if (colorDecorations[key]) {
            colorDecorations[key].push(decoration);
        } else {
            colorDecorations[key] = [decoration];
        }
    }

    // 更新颜色装饰器
    const colorDecorationsKeys = Object.keys(colorDecorations);
    const colorDecorationTypes = Object.keys(decorationTypes);
    const allKeys = [
        ...new Set([...colorDecorationsKeys, ...colorDecorationTypes]),
    ];
    allKeys.forEach((key) => {
        const decorationType = ensureDecorationType(key);
        if (colorDecorationsKeys.includes(key)) {
            activeEditor.setDecorations(decorationType, colorDecorations[key]);
        } else {
            activeEditor.setDecorations(decorationType, []);
        }
    });
}

export function activateColorDecorations(
    context: vscode.ExtensionContext,
    languageId: string
) {
    let activeEditor = vscode.window.activeTextEditor;
    if (activeEditor && activeEditor.document.languageId === languageId) {
        updateDecorations(activeEditor);
    }

    vscode.window.onDidChangeActiveTextEditor(
        (editor) => {
            activeEditor = editor;
            if (
                activeEditor &&
                activeEditor.document.languageId === languageId
            ) {
                updateDecorations(activeEditor);
            }
        },
        null,
        context.subscriptions
    );

    vscode.workspace.onDidChangeTextDocument(
        (event) => {
            if (
                activeEditor &&
                event.document === activeEditor.document &&
                activeEditor.document.languageId === languageId
            ) {
                updateDecorations(activeEditor);
            }
        },
        null,
        context.subscriptions
    );
}
