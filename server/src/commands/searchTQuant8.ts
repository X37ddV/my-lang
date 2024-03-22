/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as fs from "fs/promises";
import * as path from "path";

const fileExists = async (filePath: string) => {
    try {
        await fs.access(filePath);
        return true; // 文件存在
    } catch (error) {
        return false; // 文件不存在或其他错误
    }
};

const searchInDirectories = async (directories: string[], dirname: string, filename: string) => {
    let foundPaths: string = "";

    for (const directory of directories) {
        try {
            const files = await fs.readdir(directory, { withFileTypes: true });
            const dirents = files.filter((file) => file.isDirectory() && file.name.startsWith(dirname));
            for (const dirent of dirents) {
                if (await fileExists(path.join(dirent.path, dirent.name, filename))) {
                    foundPaths = path.join(dirent.path, dirent.name);
                    break;
                }
            }
        } catch (err) {
            // nothing to do
        }
        if (foundPaths) {
            break;
        }
    }

    return foundPaths;
};

const directoriesToSearch = [
    "E:\\",
    "F:\\",
    "D:\\",
    "C:\\",
    "C:\\Program Files",
    "C:\\Program Files (x86)",
    "D:\\Program Files",
    "D:\\Program Files (x86)",
];

export const searchTQuant8 = async (dir: string) => {
    if (!dir) {
        dir = await searchInDirectories(directoriesToSearch, "TQuant8", "wh8.exe");
    }
    return dir;
};
