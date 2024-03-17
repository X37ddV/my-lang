/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as fs from "fs";
import * as path from "path";
import { MySymbol } from "./common";


const iconsPath = path.join(__dirname, "..", "..", "icons");
const icons: { [key: string]: string } = {};

try {
    const files = fs.readdirSync(iconsPath);

    files.forEach((file) => {
        if (path.extname(file).toLowerCase() === ".ico") {
            const filePath = path.join(iconsPath, file);
            const fileContent = fs.readFileSync(filePath);
            const base64String = fileContent.toString("base64");
            const iconName = path
                .basename(file, ".ico")
                .toUpperCase()
                .replace(/_0*/, "");
            icons[iconName] = base64String;
        }
    });
} catch (err) {
    console.error("Error processing files:", err);
}

export const iconMap: { [key: string]: MySymbol } = {
	...Object.keys(icons).reduce((acc, key) => {
		const iconSymbol = new MySymbol();
		iconSymbol.documentation = `![Icon](data:image/x-icon;base64,${icons[key]})`;
		acc[key] = iconSymbol;
		return acc;
	}, {} as { [key: string]: MySymbol }),
};