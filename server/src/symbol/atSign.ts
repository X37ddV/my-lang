/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
    MySymbol,
    MySymbolKind,
    MyMarketType,
    MyFunctionReturnType,
    MyFunctionType,
    MyFunctionParameterType,
} from "./common";

const _AUTHOR = new MySymbol();
_AUTHOR.label = "@author";
_AUTHOR.description = "作者";
_AUTHOR.insertText = "@author ${1:Author}";
_AUTHOR.kind = MySymbolKind.Keyword;
_AUTHOR.detail = "";
_AUTHOR.documentation = "";

const _BRIEFDESCRIPTION = new MySymbol();
_BRIEFDESCRIPTION.label = "@briefDescription";
_BRIEFDESCRIPTION.description = "简要描述";
_BRIEFDESCRIPTION.insertText = "@briefDescription ${1:BriefDescription}";
_BRIEFDESCRIPTION.kind = MySymbolKind.Keyword;
_BRIEFDESCRIPTION.detail = "";
_BRIEFDESCRIPTION.documentation = "";

const _EDITTIME = new MySymbol();
_EDITTIME.label = "@editTime";
_EDITTIME.description = "编辑时间";
_EDITTIME.insertText = "@editTime ${1:EditTime}";
_EDITTIME.kind = MySymbolKind.Keyword;
_EDITTIME.detail = "";
_EDITTIME.documentation = "";

const _INFOVERSION = new MySymbol();
_INFOVERSION.label = "@infoVersion";
_INFOVERSION.description = "版本信息";
_INFOVERSION.insertText = "@infoVersion ${1:InfoVersion}";
_INFOVERSION.kind = MySymbolKind.Keyword;
_INFOVERSION.detail = "";
_INFOVERSION.documentation = "";

const _MAIL = new MySymbol();
_MAIL.label = "@mail";
_MAIL.description = "邮箱地址";
_MAIL.insertText = "@mail ${1:Mail}";
_MAIL.kind = MySymbolKind.Keyword;
_MAIL.detail = "";
_MAIL.documentation = "";

const _PARAM = new MySymbol();
_PARAM.label = "@param";
_PARAM.description = "邮箱地址";
_PARAM.insertText = "@param ${1:Name} 0, 0, 0 [0, 0, 0, 0]";
_PARAM.kind = MySymbolKind.Keyword;
_PARAM.detail = "";
_PARAM.documentation = "";

const _PROPERTY = new MySymbol();
_PROPERTY.label = "@property";
_PROPERTY.description = "运行属性";
_PROPERTY.insertText = "@property ${1:Name} 0, 0, 0 [0, 0, 0, 0]";
_PROPERTY.kind = MySymbolKind.Keyword;
_PROPERTY.detail = "";
_PROPERTY.documentation = "";

const _SIGNATURE = new MySymbol();
_SIGNATURE.label = "@signature";
_SIGNATURE.description = "数字签名";
_SIGNATURE.insertText = "@signature ${1:Signature}";
_SIGNATURE.kind = MySymbolKind.Keyword;
_SIGNATURE.detail = "";
_SIGNATURE.documentation = "";

const _TELEPHONE = new MySymbol();
_TELEPHONE.label = "@telephone";
_TELEPHONE.description = "数字签名";
_TELEPHONE.insertText = "@telephone ${1:Telephone}";
_TELEPHONE.kind = MySymbolKind.Keyword;
_TELEPHONE.detail = "";
_TELEPHONE.documentation = "";

const _VERSION = new MySymbol();
_VERSION.label = "@version";
_VERSION.description = "数字签名";
_VERSION.insertText = "@version ${1:Version}";
_VERSION.kind = MySymbolKind.Keyword;
_VERSION.detail = "";
_VERSION.documentation = "";

export const atSign = [
    _AUTHOR,
    _BRIEFDESCRIPTION,
    _EDITTIME,
    _INFOVERSION,
    _MAIL,
    _PARAM,
    _PROPERTY,
    _SIGNATURE,
    _TELEPHONE,
    _VERSION,
];
