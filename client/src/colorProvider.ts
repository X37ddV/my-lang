/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from "vscode";

const colorMap: { [key: string]: number[] } = {
    COLORRED: [255, 0, 0],
    COLORGREEN: [0, 255, 0],
    COLORBLUE: [0, 0, 255],
    COLORMAGENTA: [255, 0, 255],
    COLORYELLOW: [255, 255, 0],
    COLORLIGHTGREY: [211, 211, 211],
    COLORLIGHTRED: [255, 160, 122],
    COLORLIGHTGREEN: [144, 238, 144],
    COLORLIGHTBLUE: [173, 216, 230],
    COLORBLACK: [0, 0, 0],
    COLORWHITE: [255, 255, 255],
    COLORCYAN: [0, 255, 255],
    COLORGRAY: [128, 128, 128],
};

const regex = RegExp(
    `\\b(${Object.keys(colorMap).join("|")})\\b` +
        "|\\bRGB\\s*\\(\\s*(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)\\s*,\\s*(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)\\s*,\\s*(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]?\\d)\\s*\\)",
    "g"
);

/**
 * 将 VS Code 的颜色转换为麦语言的颜色
 * @param vscodeColor VS Code 的颜色
 */
function vscodeColorToMyColor(vscodeColor: vscode.Color): string {
    const [red, green, blue] = [vscodeColor.red, vscodeColor.green, vscodeColor.blue].map((c) => Math.floor(c * 255));
    const colorEntry = Object.entries(colorMap).find(([_key, [r, g, b]]) => r === red && g === green && b === blue);
    return colorEntry ? colorEntry[0] : `RGB(${red}, ${green}, ${blue})`;
}

export const colorProvider: vscode.DocumentColorProvider = {
    provideDocumentColors(document: vscode.TextDocument): vscode.ProviderResult<vscode.ColorInformation[]> {
        const text = document.getText();
        const colorInformations: vscode.ColorInformation[] = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            const start = document.positionAt(match.index);
            const end = document.positionAt(match.index + match[0].length);
            const matchString = match[0];
            let red = 0;
            let green = 0;
            let blue = 0;
            if (matchString.startsWith("RGB")) {
                red = parseInt(match[2], 10);
                green = parseInt(match[3], 10);
                blue = parseInt(match[4], 10);
            } else {
                red = colorMap[matchString][0];
                green = colorMap[matchString][1];
                blue = colorMap[matchString][2];
            }
            colorInformations.push(
                new vscode.ColorInformation(
                    new vscode.Range(start.line, start.character, end.line, end.character),
                    new vscode.Color(red / 255, green / 255, blue / 255, 1)
                )
            );
        }
        return colorInformations;
    },
    provideColorPresentations(color: vscode.Color): vscode.ProviderResult<vscode.ColorPresentation[]> {
        return [new vscode.ColorPresentation(vscodeColorToMyColor(color))];
    },
};
