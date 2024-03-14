import {
    MySymbol,
    MySymbolKind,
    MyMarketType,
    MyFunctionReturnType,
    MyFunctionType,
    MyFunctionParameterType,
} from "./common";

const _REGION = new MySymbol();
_REGION.label = "#region";
_REGION.description = "Region Start";
_REGION.insertText = "//#region ${1:Region Name}\n$0\n//#endregion";
_REGION.kind = MySymbolKind.Snippet;
_REGION.detail = "Folding Region Start (麦语言基础功能)";
_REGION.documentation = `
\`\`\` javascript
//#region
\`\`\`
`;

const _ENDREGION = new MySymbol();
_ENDREGION.label = "#endregion";
_ENDREGION.description = "Region End";
_ENDREGION.insertText = "//#endregion";
_ENDREGION.kind = MySymbolKind.Snippet;
_ENDREGION.detail = "Folding Region End (麦语言基础功能)";
_ENDREGION.documentation = `
\`\`\` javascript
//#endregion
\`\`\`
`;

const _CALL = new MySymbol();
_CALL.label = "#CALL";
_CALL.description = "跨合约引用指标";
_CALL.insertText = "#CALL [${1|VIXINDEX,MAININDEX,WEIGHTINDEX|}, ${2:FORMULA}] AS ${3:VAR}";
_CALL.kind = MySymbolKind.Reference;
_CALL.marketType = MyMarketType.TPlusZeroStrategyFunction;
_CALL.functionType = MyFunctionType.CandlestickDataReference;
_CALL.returnType = MyFunctionReturnType.None;
_CALL.parameters = MySymbol.createParametersFromStrings([]);
_CALL.detail = "跨合约引用指标";
_CALL.documentation = `
#CALL[CODE,FORMULA]ASVAR引用CODE合约的指标FORMULA的数据
#CALL [CODE, FORMULA] AS VAR 引用CODE合约的指标FORMULA的数据。

注:
1、参数CODE支持传入下列指定代码以获取数据:
CODE写为文华码或交易代码, 即引用指定文华码或交易代码合约的数据
CODE写为VIXINDEX, 即引用当前合约对应VIX指数的数据
CODE写为MAININDEX, 即引用当前合约对应主连合约的数据
CODE写为WEIGHTINDEX或者#CALL[,指标名]AS VAR 表示自动获取加载合约对应的加权合约。
2、FORMULA为引用指标名, VAR为定义变量名(此变量名不能以数字开头)。
2、默认只能引用同一周期的数据。
3、支持加载到自定义周期中使用。
4、
该函数支持1分钟数据逐笔回测, 即该函数可以和MULTSIG_MIN、CHECKSIG_MIN函数连用;
该函数不支持TICK数据逐笔回测, 即该函数不可以和MULTSIG、CHECKSIG函数连用。
5、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个;

例1:
CC:REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为AA
#CALL[1201,AA] AS VAR
CC:VAR.CC;//跨合约引用豆粕1501昨天的收盘价

例2:
CC:REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为BB
#CALL[VIXINDEX,BB] AS VAR
CC:VAR.CC;//跨合约引用当前合约对应品种VIX指数一个周期前的收盘价
`;

const _CALL_OTHER = new MySymbol();
_CALL_OTHER.label = "#CALL_OTHER";
_CALL_OTHER.description = "跨指标引用";
_CALL_OTHER.insertText = "#CALL_OTHER [${1:FORMULA}] AS ${2:VAR}";
_CALL_OTHER.kind = MySymbolKind.Reference;
_CALL_OTHER.marketType = MyMarketType.TPlusZeroStrategyFunction;
_CALL_OTHER.functionType =
    MyFunctionType.CandlestickDataReference;
_CALL_OTHER.returnType = MyFunctionReturnType.None;
_CALL_OTHER.parameters = MySymbol.createParametersFromStrings([]);
_CALL_OTHER.detail = "跨指标引用";
_CALL_OTHER.documentation = `
#CALL_OTHER[FORMULA]ASVAR跨指标引用
#CALL_OTHER [FORMULA] AS VAR 引用当前合约, 当前周期的, 指标FORMULA的数据

注:
1、FORMULA为引用指标名, VAR为定义变量名(变量名不能以数字开头)。
2、默认只能引用同一周期的数据。
3、支持加载到自定义周期中使用。
4、默认引用当前合约
5、
该函数支持1分钟数据逐笔回测, 即该函数可以和MULTSIG_MIN、CHECKSIG_MIN函数连用;
该函数不支持TICK数据逐笔回测, 即该函数不可以和MULTSIG、CHECKSIG函数连用。
6、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个;

例1:
CC:REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为AA
#CALL_OTHER[AA] AS VAR
CC:VAR.CC;//跨指标引用当前合约的一个周期前的收盘价
`;

const _CALL_PLUS = new MySymbol();
_CALL_PLUS.label = "#CALL_PLUS";
_CALL_PLUS.description = "跨合约跨周期引用指标";
_CALL_PLUS.insertText = "#CALL_PLUS [${1|VIXINDEX,MAININDEX,WEIGHTINDEX|}, ${2|MIN,HOUR,CUSHOUR,DAY,WEEK,MONTH,QUARTER,YEAR|}, ${3:N}, ${4:FORMULA}] AS ${5:VAR}";
_CALL_PLUS.kind = MySymbolKind.Reference;
_CALL_PLUS.marketType = MyMarketType.TPlusZeroStrategyFunction;
_CALL_PLUS.functionType = MyFunctionType.CandlestickDataReference;
_CALL_PLUS.returnType = MyFunctionReturnType.None;
_CALL_PLUS.parameters = MySymbol.createParametersFromStrings([]);
_CALL_PLUS.detail = "跨合约跨周期引用指标";
_CALL_PLUS.documentation = `
#CALL_PLUS[CODE,PERIOD,N,FORMULA]ASVAR引用CODE合约PERIOD参数为N的周期下的指标FORMULA的数据
#CALL_PLUS[CODE,PERIOD,N,FORMULA] AS VAR 引用CODE合约, PERIOD参数为N的周期, 指标FORMULA的数据。

注:
1、参数CODE支持传入下列指定代码以获取数据:
CODE写为VIXINDEX, 即引用当前合约对应VIX指数的数据
CODE写为MAININDEX, 即引用当前合约对应主连合约的数据
CODE写为WEIGHTINDEX或者CODE位置为空, 表示自动获取加载合约对应的加权合约数据。例如:#CALL_PLUS[,DAY,1,AA] AS VAR//自动获取加载合约对应的加权合约一天的AA指标的数值;
2、PERIOD为周期, 支持如下周期:MIN(分钟周期), HOUR(小时周期), CUSHOUR(自定义小时周期), DAY(日周期), WEEK(一周), MONTH(月周期), QUARTER(一季度), YEAR(年周期)。
3、N为具体的参数, N必须为大于等于1的整数, 周、季周期, N写入大于1的数, 按照1计算。例如:#CALL_PLUS[8600,WEEK,2,FORMULA] AS VAR//默认引用的是一周的指标;
4、FORMULA为引用指标名, FORMULA引用指标名可以为字母、汉字或数字命名的指标。
5、VAR为定义变量名(此变量名不能以数字开头)。
6、该函数支持与1分钟数据为基础数据的信号控制函数连用。
7、支持引用自定义周期;
如#CALL_PLUS[8600,MIN,2,MACD] AS VAR//引用文华码8600的合约两分钟周期MACD指标数值
8、引用常规小时周期使用HOUR, 引用自定义小时周期需要使用CUSHOUR。
9、不支持加载到秒周期、量能周期。
10、该函数可以小周期引用大周期, 也可以大周期引用小周期。
11、被引用的指标中不能存在引用。
12、定义变量名不能与函数名重复。
13、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个。
14、使用该函数编写末尾不能编写分号。

例1:
CC:REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为AA
#CALL_PLUS[8600,DAY,1,AA] AS VAR
CC:VAR.CC;//跨周期引用IF加权昨天的收盘价

例2:
CC:REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为BB
#CALL_PLUS[VIXINDEX,DAY,1,BB] AS VAR
CC:VAR.CC;//跨周期引用当前合约对应品种VIX指数昨天的收盘价
`;

const _IMPORT = new MySymbol();
_IMPORT.label = "#IMPORT";
_IMPORT.description = "跨周期引用指标";
_IMPORT.insertText = "#IMPORT [${1|MIN,HOUR,CUSHOUR,DAY,WEEK,MONTH,QUARTER,YEAR|}, ${2:N}, ${3:FORMULA}] AS ${4:VAR}";
_IMPORT.kind = MySymbolKind.Reference;
_IMPORT.marketType = MyMarketType.TPlusZeroStrategyFunction;
_IMPORT.functionType = MyFunctionType.CandlestickDataReference;
_IMPORT.returnType = MyFunctionReturnType.None;
_IMPORT.parameters = MySymbol.createParametersFromStrings([]);
_IMPORT.detail = "跨周期引用指标";
_IMPORT.documentation = `
#IMPORT[PERIOD,N,FORMULA]ASVAR引用PERIOD参数为N的周期下的指标FORMULA的数据
#IMPORT [PERIOD,N,FORMULA] AS VAR 引用当前合约, PERIOD参数为N的周期, 指标FORMULA的数据。

注:
1、PERIOD为周期, N为具体的参数, FORMULA为引用指标名, VAR为定义变量名(此变量名不能以数字开头);
2、PERIOD支持如下周期:MIN(分钟周期), HOUR(小时周期), CUSHOUR(自定义小时周期), DAY(日周期), WEEK(一周), MONTH(月周期), QUARTER(一季度), YEAR(年周期);
3、支持引用自定义周期;
如#IMPORT [MIN,2,MACD] AS VAR//引用两分钟周期MACD指标数值
4、N必须为大于等于1的整数, 周、季周期, N写入大于1的数, 按照1计算;
例如:#IMPORT [WEEK,2,FORMULA] AS VAR//默认引用的是一周的指标;
5、引用常规小时周期使用HOUR, 引用自定义小时周期需要使用CUSHOUR。
6、该函数不支持加载到量能周期使用;
7、该函数可以小周期引用大周期, 也可以大周期引用小周期;
8、被引用的指标中不能存在引用;
9、FORMULA引用指标名可以为字母、汉字或数字命名的指标;
10、定义变量名不能与函数名重复;
11、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个;
12、使用该函数编写末尾不能编写分号。

例1:
CC:REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为AA
#IMPORT[DAY,1,AA] AS VAR
CC:VAR.CC;//跨周期引用昨天的收盘价

例2:
CC:C;//定义收盘价
保存指标, 命名为CC
#IMPORT[DAY,1,CC] AS VAR
CC:=VAR.CC;//跨周期引用日周期上的收盘价
CC1:REF(CC,1);
//要引用的数据需要写在被引用的指标里, 不能写在IMPORT模型中。
//例1中的CC指标引用日周期上前一个周期的收盘价, 需要在被引用的指标中取一个周期前的收盘价, 
例2中写在IMPORT模型中则表示取小周期上一个周期前的值

例3:
CC:=REF(C,1);//定义一个周期前的收盘价
保存指标, 命名为AA
#IMPORT[CUSHOUR,6,AA]AS S
CC1:=S.CC;//跨周期引用自定义6小时周期的一个周期前的收盘价
#IMPORT[MIN,1,AA]AS R
CC2:=R.CC;//跨周期引用自定义1分钟周期的一个周期前的收盘价
`;

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
_$_$_.label = "$ $";
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

export const others = [
    _REGION,
    _ENDREGION,
    _CALL,
    _CALL_OTHER,
    _CALL_PLUS,
    _IMPORT,
    _$_,
    _$_$_,
];
