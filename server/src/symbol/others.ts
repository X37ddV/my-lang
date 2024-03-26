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

const _$_ = new MySymbol();
_$_.label = "$";
_$_.description = "引用其他合约的K线数据";
_$_.insertText = "";
_$_.body = " $ ";
_$_.kind = MySymbolKind.Text;
_$_.marketType = MyMarketType.TPlusZeroStrategyFunction;
_$_.functionType = MyFunctionType.CandlestickDataReference;
_$_.returnType = MyFunctionReturnType.None;
_$_.parameters = MySymbol.createParametersFromStrings([]);
_$_.detail = "引用其他合约的K线数据";
_$_.documentation = `

" $ " 简化的跨合约函数, 调用其他合约的K线数据。

用法:"CODE$PRICE"引用CODE合约的PRICE数据, CODE为文华码。

注:
1、PRICE的位置可以替换为TIME、OPEN、O、HIGH、H、LOW、L、CLOSE、C、OPI、VOL、V、AVPRICE、SETTLE、SCALE
2、默认只能引用同一周期的数据。
3、CODE的位置不可以为空。
4、一个模型中&跨合约、&&跨周期引用语句个数不能超过6个。

例1:
A:"1209$CLOSE";//返回文华码为1209合约的收盘价。

例2:
A:"8606$OPI";//返回文华码为8606合约的持仓量。
`;

const _$_$_ = new MySymbol();
_$_$_.label = "$$";
_$_$_.description = "引用其他周期的K线数据";
_$_$_.insertText = "";
_$_$_.body = " $ $ ";
_$_$_.kind = MySymbolKind.Text;
_$_$_.marketType = MyMarketType.TPlusZeroStrategyFunction;
_$_$_.functionType = MyFunctionType.CandlestickDataReference;
_$_$_.returnType = MyFunctionReturnType.None;
_$_$_.parameters = MySymbol.createParametersFromStrings([]);
_$_$_.detail = "引用其他周期的K线数据";
_$_$_.documentation = `

" $ $ " 简化的跨周期函数, 调用另外一个周期上一根k线的数据。

用法:"MIN$15$PRICE"引用15分钟K线的PRICE数据, PERIOD为周期类型。PRICE为引用的数据。

注:
1、PRICE的位置可以替换为TIME、OPEN、O、HIGH、H、LOW、L、CLOSE、C、OPI、VOL、V、AVPRICE、SETTLE、SCALE
2、引用的是上一根K线的值。
示例 TEST:"MIN$3$CLOSE";  //引用3分钟周期K线CLOSE
即引用的上一根3分钟K线的CLOSE。
3、只支持小周期引用大周期, 被引用周期不支持秒周期及自定义周期, 支持的被引用周期:1MIN,3MIN,5MIN,10MIN,15MIN,30MIN,1HOUR,2HOUR,3HOUR,4HOUR,DAY,WEEK,MONTH。
4、一个模型中&跨合约、&&跨周期引用语句个数不能超过6个。

例1:
A:"MIN$5$CLOSE";//返回上一根5分钟周期K线的收盘价。

例2:
A:"HOUR$4$OPI";//返回上一根4小时周期K线的持仓量。
`;

export const others = [_$_, _$_$_];
