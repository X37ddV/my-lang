/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as os from "os";

/**
 * DESCRIPTION
 *
 * @version VERSION
 *
 * @briefDescription BRIEFDESCRIPTION
 * @property PROPERTY
 * @editTime EDITTIME
 *
 * @author AUTHOR
 * @signature SIGNATURE
 * @telephone TELEPHONE
 * @mail MAIL
 * @infoVersion INFOVERSION
 *
 * @param PARAM [PARAMDEFAULTSET]
 */

enum ModelTag {
    Description = "DESCRIPTION",
    Param = "PARAM",
    ParamDefaultSet = "PARAMDEFAULTSET",
    Version = "VERSION",
    Signature = "SIGNATURE",
    Telephone = "TELEPHONE",
    Mail = "MAIL",
    BriefDescription = "BRIEFDESCRIPTION",
    EditTime = "EDITTIME",
    InfoVersion = "INFOVERSION",
    Author = "AUTHOR",
    Property = "PROPERTY",
    Code = "CODE",
}

export const parserModelComment = (modelComment: string) => {
    // 提取以@开头的属性
    const attrs: { key: string; value: string }[] = [];
    modelComment.match(/@(\w+)\s+(.+)/g)?.forEach((attr) => {
        const match = attr.match(/@(\w+)\s+(.+)/);
        const key = match?.[1].toUpperCase();
        const value = match?.[2].trim();
        if (key && value) {
            attrs.push({ key, value });
        }
    });

    // 提取PARAM属性
    const attrParams = attrs
        .filter((attr) => attr.key === ModelTag.Param)
        .map((attr) => {
            const text = attr.value;
            const identifierRegex = /^\s*([A-Za-z0-9]+)\s*/;
            const bracketNumbersRegex = /\[(.*?)\]/;

            // 第一步：获取第一个标识符
            const identifierMatch = text.match(identifierRegex);
            const identifier = identifierMatch ? identifierMatch[1] : null;

            // 第二步：获取中括号中的内容，并转换为数字数组
            const bracketContentMatch = text.match(bracketNumbersRegex);
            const bracketNumbers = bracketContentMatch
                ? bracketContentMatch[1].split(",").map((num) => parseFloat(num.trim()) || 0)
                : [];

            // 第三步：获取剩余部分，并转换为数字数组
            // 移除第一个标识符和方括号内容
            const remainingText = text.replace(identifierRegex, "").replace(bracketNumbersRegex, "");
            const remainingNumbers = remainingText.split(",").map((num) => parseFloat(num.trim()) || 0);

            // 返回结果
            const param = `[${[identifier, ...remainingNumbers.map((num) => num.toFixed(6))].join(",")}]`;
            const paramDefaultSet = `[${bracketNumbers.map((num) => num.toFixed(6)).join(",")}]`;
            return { param, paramDefaultSet };
        });

    // 提取普通的注释内容
    const normalComments = modelComment
        .replace(/^\/\*\*|\*\/$/gm, "") // 移除注释的开始/**和结束*/标记
        .split(/\r?\n/) // 按行分割
        .map((line) => line.replace(/^\s*\*\s*/, "").trim()) // 移除行首的*号和空格
        .filter((line) => !line.startsWith("@")) // 排除以@开头的行
        .join(os.EOL) // 重新组合为字符串
        .trim(); // 移除字符串两端的空白字符

    // 生成新的属性列表
    const contentItems = attrs
        .filter((attr) => attr.key !== ModelTag.Param)
        .reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>);
    contentItems[ModelTag.Param] = attrParams.map((item) => item.param).join(os.EOL);
    contentItems[ModelTag.ParamDefaultSet] = ["1", ...attrParams.map((item) => item.paramDefaultSet)].join(os.EOL);
    contentItems[ModelTag.Description] = normalComments;
    // contentItems[ModelTags.Code] = `${documentText.trimEnd()}${os.EOL}`.replace("/**", "/*");
    // contentItems[ModelTags.EditTime] = `${formatDate(new Date())}`;
    // contentItems[ModelTags.Property] = contentItems[ModelTags.Property] || "1";
    // contentItems[ModelTags.Version] = contentItems[ModelTags.Version] || "130112";

    return contentItems;
};

export const parserModelXML = (xmlContent: string) => {
    const extractTagContent = (xml: string, tagName: string) => {
        const regex = new RegExp(`<${tagName}>\\s*([\\s\\S]*?)\\s*</${tagName}>`, "i");
        const matches = xml.match(regex);
        return matches ? matches[1] : null;
    };

    const contentItems: Record<string, string> = {};
    for (const value of Object.values(ModelTag)) {
        const content = extractTagContent(xmlContent, ModelTag.Description);
        if (content) {
            contentItems[value] = content;
        }
    }
};

export const modelComment = (contentItems: Record<string, string>) => {
    const formatValue = (value: string | null) => {
        return value?.replace(/[\r\n]+/g, "").trim() ?? "";
    };
    const getFieldLines = (tags: ModelTag[]) => {
        return tags
            .filter((tag) => contentItems[tag])
            .map((tag) => `${tagName(tag)} ${formatValue(contentItems[tag])}`);
    };

    const descriptionLines = (contentItems[ModelTag.Description] || "")
        .trim()
        .split(/\r?\n/)
        .map((line) => `${line}`);
    const versionLines = getFieldLines([ModelTag.Version]);
    const baseInfoLines = getFieldLines([ModelTag.BriefDescription, ModelTag.Property, ModelTag.EditTime]);
    const authorLines = getFieldLines([
        ModelTag.Author,
        ModelTag.Signature,
        ModelTag.Telephone,
        ModelTag.Mail,
        ModelTag.InfoVersion,
    ]);
    const params = extractParamContent(contentItems[ModelTag.Param] ?? "");
    const defaultSet = extractParamContent(contentItems[ModelTag.ParamDefaultSet] ?? "");
    const paramLines = params.map((param, i) => {
        const [first, ...rest] = param;
        const defaultValue = defaultSet[i] ?? [0, 0, 0, 0];
        return `${tagName(ModelTag.Param)} ${first} ${rest.join(", ")} [${defaultValue.join(", ")}]`;
    });
    const descriptions = [descriptionLines, versionLines, baseInfoLines, authorLines, paramLines]
        .filter((lines) => lines.length > 0)
        .reduce((acc, currentArray, index) => {
            if (index > 0) {
                acc = acc.concat("");
            }
            return acc.concat(currentArray);
        }, []);

    const lines: string[] = [];
    if (descriptions.length > 0) {
        lines.push("/**");
        lines.push(...descriptions.map((line) => ` * ${line}`));
        lines.push(" */");
    }
    return lines.join(os.EOL);
};

const extractParamContent = (text: string) => {
    // 使用正则表达式匹配文本中的所有方括号内容
    const regex = /\[([^\]]+)\]/g;

    // 使用 matchAll 方法获取所有匹配项
    const matches = [...text.matchAll(regex)];

    // 提取匹配组中的内容并转换为数值数组
    const arrays = matches.map((match) => {
        // 分割字符串得到字符串数组，然后使用 map 将每个元素转换为浮点数或字符串
        return match[1].split(",").map((item) => {
            const trimmedItem = item.trim();
            const number = Number(trimmedItem);
            return isNaN(number) ? trimmedItem : number;
        });
    });

    return arrays;
};

const tagName = (tag: ModelTag) => {
    for (const key in ModelTag) {
        if (ModelTag[key as keyof typeof ModelTag] === tag) {
            return "@" + key.charAt(0).toLowerCase() + key.slice(1);
        }
    }
    throw new Error(`${tag}`);
};
