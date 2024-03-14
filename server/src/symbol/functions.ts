import {
    MySymbol,
    MySymbolKind,
    MyMarketType,
    MyFunctionReturnType,
    MyFunctionType,
    MyFunctionParameterType,
} from "./common";

const ABS = new MySymbol();
ABS.label = "ABS";
ABS.description = "绝对值";
ABS.insertText = "";
ABS.body = "ABS( )";
ABS.kind = MySymbolKind.Function;
ABS.marketType = MyMarketType.BasicFunction;
ABS.functionType = MyFunctionType.MathFunction;
ABS.returnType = MyFunctionReturnType.None;
ABS.parameters = MySymbol.createParametersFromStrings([]);
ABS.detail = "绝对值";
ABS.documentation = `
ABS(X),求X的绝对值
ABS(X)：取的X的绝对值。

注：
1、正数的绝对值是它本身；
2、负数的绝对值是它的相反数；
3、0的绝对值还是0；

例1：
ABS(-10);//返回10。
例2：
ABS(CLOSE-10);//返回收盘价和的10价差的绝对值。
例3：
ABS(C-O);//当前K线实体长度
`;

const ACOS = new MySymbol();
ACOS.label = "ACOS";
ACOS.description = "反余弦值";
ACOS.insertText = "";
ACOS.body = "ACOS( )";
ACOS.kind = MySymbolKind.Function;
ACOS.marketType = MyMarketType.BasicFunction;
ACOS.functionType = MyFunctionType.MathFunction;
ACOS.returnType = MyFunctionReturnType.None;
ACOS.parameters = MySymbol.createParametersFromStrings([]);
ACOS.detail = "反余弦值";
ACOS.documentation = `
ACOS(X),求X的反余弦值
ACOS(X)：返回X的反余弦值。

注：
1、X取值范围[-1，1]。
2、若X不在取值范围，返回值为空值。

例1：
ACOS(-1);//求-1的反余弦值；
例2：
ACOS(1);//求1的反余弦值；
`;

const ADMA = new MySymbol();
ADMA.label = "ADMA";
ADMA.description = "考夫曼均值";
ADMA.insertText = "";
ADMA.body = "ADMA(,,,)";
ADMA.kind = MySymbolKind.Function;
ADMA.marketType = MyMarketType.BasicFunction;
ADMA.functionType = MyFunctionType.MathematicalStatisticsFunction;
ADMA.returnType = MyFunctionReturnType.None;
ADMA.parameters = MySymbol.createParametersFromStrings([]);
ADMA.detail = "考夫曼均值";
ADMA.documentation = `
AMA(X,N,P,Q),考夫曼均值X为调用的k线数据（例如高、开、低，收），N为调用的间隔时间P为快线频率参数，Q为慢线频率参数
ADMA(X,N,P,Q) 考夫曼均值

用法：ADMA(X,N,P,Q);求X在N个周期中的，快线频率参数为P，慢线频率参数为Q的考夫曼自适应均值。

注：
1、X为调用的k线数据（例如高、开、低，收）；N为调用的间隔时间；P为快线频率参数；Q为慢线频率参数。
2、当前的K线数不足N根时，函数返回空值。
3、N为0或空值的情况下，函数返回空值。

算法：
ADMA(X,N,P,Q)=REF(EMA(X,N),1)+CONSTANT*(X- REF(EMA(X,N),1));
CONSTANT是平滑系数，用麦语言函数可以表示为：
CONSTANT:=SQUARE((ABS((CLOSE-REF(CLOSE,N))/(SUM(ABS((CLOSE-REF(CLOSE,1))),N))))*(2/(P+1)-2/(Q+1))+2/(Q+1));

算法举例：计算C在9周期的，快线频率参数为2，慢线频率参数为30的考夫曼均值。
1、确定价格方向：价格方向表示整个时间段中的净价格变化。比如，使用N天的间隔（或N小时），这里N为9
2、计算方向移动：DIRECTION:=ABS(CLOSE-REF(CLOSE,9));
3、计算波动性：波动性是市场噪音的总数量，计算了时间段内价格变化的总和。
VOLATILITY:=SUM(ABS((CLOSE-REF(CLOSE,1))),9);
4、确定效率系数：
ER:=DIRECTION/VOLATILITY;
5、计算平滑系数：
FASTSC:=2/(2+1);
SLOWSC:=2/(30+1);
SMOOTH:=ER*(FASTSC-SLOWSC)+SLOWSC;
CONSTANT:=SQUARE(SMOOTH);
6、计算平滑系数为CONSTANT的自适应均线：
AMACLOSE:REF(EMA(C,9),1)+CONSTANT*(C-REF(EMA(C,9),1));
`;

const ALIGN = new MySymbol();
ALIGN.label = "ALIGN";
ALIGN.description = "设置文字对齐方式（左中右）";
ALIGN.insertText = "";
ALIGN.body = "ALIGN";
ALIGN.kind = MySymbolKind.Function;
ALIGN.marketType = MyMarketType.BasicFunction;
ALIGN.functionType = MyFunctionType.DrawingFunction;
ALIGN.returnType = MyFunctionReturnType.None;
ALIGN.parameters = MySymbol.createParametersFromStrings([]);
ALIGN.detail = "设置文字对齐方式（左中右）";
ALIGN.documentation = `
ALIGN0,ALIGN1,ALIGN2,分别表示文字左对齐，居中对齐，右对齐
设置文字对齐方式（左中右）。

用法：DRAWTEXT(COND,PRICE,TEXT),ALIGNX;

COND条件满足时，在PRICE的位置，标注TEXT，文字按照ALIGNX写入的方式对齐。ALIGN0，ALIGN1，ALIGN2，分别表示左对齐，居中对齐，右对齐。

例：
DRAWTEXT(C>O,H,'涨'),ALIGN1,VALIGN1,FONTSIZE20,COLORGREEN;//在阳线的最高价标注文字“涨”，文字居中对齐，字体大小为20，颜色为绿色。
`;

const ASIN = new MySymbol();
ASIN.label = "ASIN";
ASIN.description = "反正弦值";
ASIN.insertText = "";
ASIN.body = "ASIN( )";
ASIN.kind = MySymbolKind.Function;
ASIN.marketType = MyMarketType.BasicFunction;
ASIN.functionType = MyFunctionType.MathFunction;
ASIN.returnType = MyFunctionReturnType.None;
ASIN.parameters = MySymbol.createParametersFromStrings([]);
ASIN.detail = "反正弦值";
ASIN.documentation = `
ASIN(X),求X的反正弦值
ASIN(X)：返回X的反正弦值。

注：
1、X取值范围[-1，1]。
2、若X不在取值范围，返回值为空值。

例1：
ASIN(-1);//求-1的反正弦值；
例2：
ASIN(1);//求1的反正弦值；
`;

const ATAN = new MySymbol();
ATAN.label = "ATAN";
ATAN.description = "反正切值";
ATAN.insertText = "";
ATAN.body = "ATAN( )";
ATAN.kind = MySymbolKind.Function;
ATAN.marketType = MyMarketType.BasicFunction;
ATAN.functionType = MyFunctionType.MathFunction;
ATAN.returnType = MyFunctionReturnType.None;
ATAN.parameters = MySymbol.createParametersFromStrings([]);
ATAN.detail = "反正切值";
ATAN.documentation = `
ATAN(X),求X的反正切值
ATAN(X)：返回X的反正切值。

注：X的取值为R（实数集）

例1：
ATAN(-1.75);//求-1.75的反正切值；
例2：
ATAN(1.75);//求1.75的反正切值；
`;

const AUTOFILTER = new MySymbol();
AUTOFILTER.label = "AUTOFILTER";
AUTOFILTER.description = "启用一开一平信号过滤机制";
AUTOFILTER.insertText = "";
AUTOFILTER.body = "AUTOFILTER";
AUTOFILTER.kind = MySymbolKind.Function;
AUTOFILTER.marketType = MyMarketType.BasicFunction;
AUTOFILTER.functionType = MyFunctionType.CalculationControlFunction;
AUTOFILTER.returnType = MyFunctionReturnType.None;
AUTOFILTER.parameters = MySymbol.createParametersFromStrings([]);
AUTOFILTER.detail = "启用一开一平信号过滤机制";
AUTOFILTER.documentation = `
AUTOFILTER,启用一开一平信号过滤机制。
AUTOFILTER 启用一开一平信号过滤机制。

用法：
模型中含有AUTOFILTER函数，则启用一开一平信号过滤机制。
模型中不写入该函数，则每个指令都有效，支持加减仓。

模型的过滤规则：
1、连续的同方向指令只有第一个有效，其他的将被过滤；
2、交易指令必须先开仓后平仓，一开一平配对出现：
出现BK指令，下一个指令只允许出现SP\\SPK指令；
出现SK指令，下一个指令只允许出现BP\\BPK指令；
出现SP/BP/CLOSEOUT等平仓指令，下一个可以是BK/SK/SPK/BPK指令任一个；
反手指令SPK和BPK交叉出现。

例：
CLOSE>OPEN,BK;
CLOSE<OPEN,SP;
AUTOFILTER; //启用一开一平信号过滤机制
`;

const AUTOFINANCING = new MySymbol();
AUTOFINANCING.label = "AUTOFINANCING";
AUTOFINANCING.description = "启用按需自动入金方式";
AUTOFINANCING.insertText = "";
AUTOFINANCING.body = "AUTOFINANCING";
AUTOFINANCING.kind = MySymbolKind.Function;
AUTOFINANCING.marketType = MyMarketType.TPlusZeroStrategyFunction;
AUTOFINANCING.functionType =
    MyFunctionType.CalculationControlFunction;
AUTOFINANCING.returnType = MyFunctionReturnType.None;
AUTOFINANCING.parameters = MySymbol.createParametersFromStrings([]);
AUTOFINANCING.detail = "启用按需自动入金方式";
AUTOFINANCING.documentation = `
AUTOFINANCING，启用按需自动入金方式
AUTOFINANCING 启用按需自动入金方式 

用法：模型中含有AUTOFINANCING函数，则启用按需自动入金方式。

按需自动入金方式规则：
1、模型中含有该函数，回测和模组中资金使用量按需自动入金，参数设置中设置的资金分配量无效。
2、首次账户入金为首次开仓所需要的资金，如下次开仓时可用资金不足，则账户再次入金，按所需补齐不足部分资金。
3、如模型中不含该函数
1）回测时：则按回测参数中设置的资金分配量进行回测
2）实盘中：则实盘运行按模组参数中设置的信号计算资金分配量进行计算

注：
按需自动入金中，回测报告中显示的资金分配量为账户总入金

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK(100);
CROSSDOWN(MA5,MA10),SP(100);
AUTOFINANCING;//启用自动入金方式
//该模型加载在股票合约上
`;

const AVAILABLE_OPI = new MySymbol();
AVAILABLE_OPI.label = "AVAILABLE_OPI";
AVAILABLE_OPI.description = "可用股数";
AVAILABLE_OPI.insertText = "";
AVAILABLE_OPI.body = "AVAILABLE_OPI";
AVAILABLE_OPI.kind = MySymbolKind.Function;
AVAILABLE_OPI.marketType = MyMarketType.TPlusZeroStrategyFunction;
AVAILABLE_OPI.functionType =
    MyFunctionType.PositionManagementFunction;
AVAILABLE_OPI.returnType = MyFunctionReturnType.None;
AVAILABLE_OPI.parameters = MySymbol.createParametersFromStrings([]);
AVAILABLE_OPI.detail = "可用股数";
AVAILABLE_OPI.documentation = `
AVAILABLE_OPI可用股数
AVAILABLE_OPI 可用股数

用法：
该函数取值为股票合约的当前可用股数

注：
1、该函数只支持股票市场
2、当日买入手数不计入该函数取值

例1
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK(100);
AVAILABLE_OPI>0&&CROSSDOWN(MA5,MA10),SP(AVAILABLE_OPI);//当前可用股数大于0，并且5日均线下穿10日均线，卖出全部可用股数
`;

const AVEDEV = new MySymbol();
AVEDEV.label = "AVEDEV";
AVEDEV.description = "平均绝对偏差";
AVEDEV.insertText = "";
AVEDEV.body = "AVEDEV( , )";
AVEDEV.kind = MySymbolKind.Function;
AVEDEV.marketType = MyMarketType.BasicFunction;
AVEDEV.functionType = MyFunctionType.MathematicalStatisticsFunction;
AVEDEV.returnType = MyFunctionReturnType.None;
AVEDEV.parameters = MySymbol.createParametersFromStrings([]);
AVEDEV.detail = "平均绝对偏差";
AVEDEV.documentation = `
AVEDEV(X,N),求X在N周期内的平均绝对偏差
AVEDEV(X,N)：返回X在N周期内的平均绝对偏差。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值；
5、N不能为变量

算法举例：计算AVEDEV(C,3);在最近一根K线上的值。

用麦语言函数可以表示如下：
(ABS(C-(C+REF(C,1)+REF(C,2))/3)+ABS(REF(C,1)-(C+REF(C,1)+REF(C,2))/3)+ABS(REF(C,2)-(C+REF(C,1)+REF(C,2))/3))/3;

例：
AVEDEV(C,5);//返回收盘价在5周期内的平均绝对偏差。
//表示5个周期内每个周期的收盘价与5周期收盘价的平均值的差的绝对值的平均值，判断收盘价与其均值的偏离程度
`;

const AVPRICE = new MySymbol();
AVPRICE.label = "AVPRICE";
AVPRICE.description = "取得K线图的均价";
AVPRICE.insertText = "";
AVPRICE.body = "AVPRICE";
AVPRICE.kind = MySymbolKind.Function;
AVPRICE.marketType = MyMarketType.BasicFunction;
AVPRICE.functionType = MyFunctionType.CandlestickDataReference;
AVPRICE.returnType = MyFunctionReturnType.None;
AVPRICE.parameters = MySymbol.createParametersFromStrings([]);
AVPRICE.detail = "取得K线图的均价";
AVPRICE.documentation = `
AVPRICE,取均价
AVPRICE 取得K线图的均价。

注：
1、表示单根K线内的均价；
2、日线周期上收盘后与SETTLE函数一样取得当日的结算价。

例1：
A:AVPRICE;//定义变量A为均价线；

例2：
MA5:MA(AVPRICE,5);//定义五个周期均价的平均值;

例3：
C>MA(AVPRICE,5);//价格大于五个周期均价的平均值则返回1，否则返回0。
`;

const BACKGROUNDSTYLE = new MySymbol();
BACKGROUNDSTYLE.label = "BACKGROUNDSTYLE";
BACKGROUNDSTYLE.description = "背景的样式";
BACKGROUNDSTYLE.insertText = "";
BACKGROUNDSTYLE.body = "BACKGROUNDSTYLE( )";
BACKGROUNDSTYLE.kind = MySymbolKind.Function;
BACKGROUNDSTYLE.marketType = MyMarketType.BasicFunction;
BACKGROUNDSTYLE.functionType = MyFunctionType.DrawingFunction;
BACKGROUNDSTYLE.returnType = MyFunctionReturnType.None;
BACKGROUNDSTYLE.parameters = MySymbol.createParametersFromStrings([]);
BACKGROUNDSTYLE.detail = "背景的样式";
BACKGROUNDSTYLE.documentation = `
BACKGROUNDSTYLE(i)设置背景的样式,i=0、1、2
BACKGROUNDSTYLE函数    设置背景的样式。

用法：
BACKGROUNDSTYLE(i)设置背景的样式。
i = 0 或1或2。

注：
1.
0 是保持本身坐标不变。
1 是将坐标固定在0到100之间。
2 是将坐标以0为中轴的坐标系。
2、参数i的选择根据想要显示的指标数据范围而定。
3、不支持将该函数直接定义为变量，即不支持下面的写法：A:BACKGROUNDSTYLE(i);

例1：
MA5:MA(C,5);
MA10:MA(C,10);
BACKGROUNDSTYLE(0);
例2：
DIFF : EMA(CLOSE,12) - EMA(CLOSE,26);
DEA  : EMA(DIFF,9);
2*(DIFF-DEA),COLORSTICK;
BACKGROUNDSTYLE(2);
`;

const BARINTERVAL = new MySymbol();
BARINTERVAL.label = "BARINTERVAL";
BARINTERVAL.description = "返回数据合约的K线周期数值";
BARINTERVAL.insertText = "";
BARINTERVAL.body = "BARINTERVAL";
BARINTERVAL.kind = MySymbolKind.Function;
BARINTERVAL.marketType = MyMarketType.BasicFunction;
BARINTERVAL.functionType = MyFunctionType.CandlestickDataReference;
BARINTERVAL.returnType = MyFunctionReturnType.None;
BARINTERVAL.parameters = MySymbol.createParametersFromStrings([]);
BARINTERVAL.detail = "返回数据合约的K线周期数值";
BARINTERVAL.documentation = `
BARINTERVAL数据合约的K线周期数值。
BARINTERVAL 返回数据合约的K线周期数值

用法：
1、BarInterval返回数据合约的K线周期数值。
2、该函数支持在常规周期、自定义周期使用，如加载在常规1小时周期，该函数返回1，加载到自定义2小时周期，该函数返回2。
3、加载周期为日线，BarInterval返回1；
4、加载周期为量能周期，BarInterval返回设置的成交量容量，如量能（1000），该函数返回1000。

例：
BARTYPE;
BARINTERVAL;
`;

const BARPOS = new MySymbol();
BARPOS.label = "BARPOS";
BARPOS.description = "取K线的位置";
BARPOS.insertText = "";
BARPOS.body = "BARPOS";
BARPOS.kind = MySymbolKind.Function;
BARPOS.marketType = MyMarketType.BasicFunction;
BARPOS.functionType = MyFunctionType.TimeFunction;
BARPOS.returnType = MyFunctionReturnType.None;
BARPOS.parameters = MySymbol.createParametersFromStrings([]);
BARPOS.detail = "取K线的位置";
BARPOS.documentation = `
BARPOS,取某K线的位置
BARPOS，返回从第一根K线开始到当前的周期数。

注：
1、BARPOS返回本地已有的K线根数，从本机上存在的数据开始算起。
2、本机已有的第一根K线上返回值为1。

例1：LLV(L,BARPOS);//求本地已有数据的最小值。

例2：IFELSE(BARPOS=1,H,0);//当前K线是本机已有的第一根K线取最高值，否则取0。
`;

const BARSBK = new MySymbol();
BARSBK.label = "BARSBK";
BARSBK.description = "上一次买开信号位置";
BARSBK.insertText = "";
BARSBK.body = "BARSBK";
BARSBK.kind = MySymbolKind.Function;
BARSBK.marketType = MyMarketType.TPlusZeroStrategyFunction;
BARSBK.functionType = MyFunctionType.SignalLoggingFunction;
BARSBK.returnType = MyFunctionReturnType.None;
BARSBK.parameters = MySymbol.createParametersFromStrings([]);
BARSBK.detail = "上一次买开信号位置";
BARSBK.documentation = `
BARSBK，取上一次买开信号位置
BARSBK 上一次买开信号位置

用法：
BARSBK返回上一次买开仓的K线距离当前K线的周期数（不包含出现BK信号的那根K线）
取包含BK信号出现的那根K线到当前K线的周期数，则需要在此函数后+1，即BARSBK+1；由于发出BK信号的当根k线BARSBK返回空值，则BARSBK+1在发出BK信号当根k线返回空值。

注：
1、若当前K线之前无BK信号，则函数返回值为空值
2、BK信号固定后BARSBK返回为空值。
（1）设置信号执行方式为K线走完确认信号下单
BARSBK返回值为上一个BK信号距离当前的K线根数（包含当前K线）
（2）设置信号执行方式为出信号立即下单，不复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
   a.历史信号计算中，出现BK信号的当根K线，BARSBK返回空值
   b.加载运行过程中,信号固定后BARSBK返回空值
（3）设置信号执行方式为K线走完复核（例如：在模型中写入CHECKSIG(BK,'A',N,'D',0,0);）
BARSBK返回值为上一个BK信号距离当前的K线根数（包含当前K线）

例：
1、BARSBK>10,SP;//上一次买开仓（不包含出现买开信号的那根K线）距离当前K线的周期数大于10，卖平；
2、HHV(H,BARSBK+1);//上一次买开仓（包含开仓信号出现的当根k线）到当前的最高价的最大值。
当根K线出现BK信号，AA返回为空值，需要返回当根K线上最高价，模型需要修改为:
AA:IFELSE(BARSBK>=1,HHV(H,BARSBK+1),H);
（1）当根K线出现BK信号，BARSBK返回为空值，不满足BARSBK>=1的条件，则取值为当根K线的最高价H
（2）发出BK信号之后K线BARSBK返回买开仓的K线距离当前K线的周期数，满足BARSBK>=1的条件，则取值为HHV(H,BARSBK+1)，即买开仓（包含开仓信号出现的当根k线）到当前的最高价的最大值。
修改后如果平仓条件中用到了AA的值，当根K线满足了平仓条件，可以出现平仓信号 
3、AA:IFELSE(BARSBK>=1,REF(C,BARSBK),C);//取最近一次买开仓K线的收盘价
（1）发出BK信号的当根k线BARSBK返回空值,则当根K线不满足BARSBK>=1的条件，AA返回当根k线的收盘价；
（2）发出BK信号之后的k线BARSBK返回买开仓的K线距离当前K线的周期数，则AA返回REF(C,BARSBK)，即开仓k线的收盘价；
（3）例：1、2、3三根k线，1 K线为开仓信号的当根k线，则返回当根k线的收盘价，2、3 K线AA返回值为 1 K线的收盘价。
`;

const BARSBP = new MySymbol();
BARSBP.label = "BARSBP";
BARSBP.description = "上一次买平信号位置";
BARSBP.insertText = "";
BARSBP.body = "BARSBP";
BARSBP.kind = MySymbolKind.Function;
BARSBP.marketType = MyMarketType.TPlusZeroStrategyFunction;
BARSBP.functionType = MyFunctionType.SignalLoggingFunction;
BARSBP.returnType = MyFunctionReturnType.None;
BARSBP.parameters = MySymbol.createParametersFromStrings([]);
BARSBP.detail = "上一次买平信号位置";
BARSBP.documentation = `
BARSBP，取上一次买平信号位置
BARSBP 上一次买平信号位置

用法：
BARSBP返回上一次买平仓的K线距离当前K线的周期数（不包含出现BP信号的那根K线）
取包含BP信号出现的那根K线到当前K线的周期数，则需要在此函数后+1，即BARSBP+1。由于发出BP信号的当根k线BARSBP返回空值，则BARSBP+1在发出BP信号当根k线返回空值。

注：
1、若当前K线之前无BP信号，则函数返回值为空值
2、BP信号固定后BARSBP返回为空值。
（1）设置信号执行方式为K线走完确认信号下单
BARSBP返回值为上一个BP信号距离当前的K线根数（包含当前K线）
（2）设置信号执行方式为出信号立即下单，不复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
   a.历史信号计算中，出现BP信号当根K线，BARSBP返回空值
   b.加载运行过程中，BP信号当根K线,信号固定后BARSBP返回空值
（3）设置信号执行方式为K线走完复核（例如：在模型中写入CHECKSIG(BP,'A',N,'D',0,0);）
BARSBP返回值为上一个BP信号距离当前的K线根数（包含当前K线）

例： 
1、BARSBP>10,BK;//上一次买平仓（不包含出现买平信号的那根K线）距离当前K线的周期数大于10，买开。 
2、AA:HHV(H,BARSBP+1);//上一次买平仓（包含平仓信号出现的当根k线）到当前的最高价的最大值。 
当根K线出现BP信号，AA返回为空值，如果需要返回当根K线上最高价，模型需要修改为:
AA:IFELSE(BARSBP>=1,HHV(H,BARSBP+1),H);
（1）当根K线出现BP信号，BARSBP返回为空值，不满足BARSBP>=1的条件，则取值为当根K线的最高价H 
（2）发出BP信号之后K线BARSBP返回买平仓的K线距离当前K线的周期数，满足BARSBP>=1的条件，则取值为HHV(H,BARSBP+1)，即买平仓（包含平仓信号出现的当根k线）到当前的最高价的最大值。
3、AA:IFELSE(BARSBP>=1,REF(C,BARSBP),C);//取最近一次买平仓K线的收盘价
（1）发出BP信号的当根k线BARSBP返回空值,则当根K线不满足BARSBP>=1的条件，AA返回当根k线的收盘价；
（2）发出BP信号之后的k线BARSBP返回买平仓的K线距离当前K线的周期数，则AA返回REF(C,BARSBP)，即平仓k线的收盘价；
（3）例：1、2、3三根k线，1 K线为平仓信号的当根k线，则返回当根k线的收盘价，2、3 K线AA返回值为 1 K线的收盘价。
`;

const BARSBUY = new MySymbol();
BARSBUY.label = "BARSBUY";
BARSBUY.description = "上一次买入信号位置";
BARSBUY.insertText = "";
BARSBUY.body = "BARSBUY";
BARSBUY.kind = MySymbolKind.Function;
BARSBUY.marketType = MyMarketType.TPlusOneStrategyFunction;
BARSBUY.functionType = MyFunctionType.SignalLoggingFunction;
BARSBUY.returnType = MyFunctionReturnType.None;
BARSBUY.parameters = MySymbol.createParametersFromStrings([]);
BARSBUY.detail = "上一次买入信号位置";
BARSBUY.documentation = `
BARSBUY 上一次买入信号位置
BARSBUY 上一次买入信号位置

用法：
1、BARSBUY返回上一次买入的K线距离当前K线的周期数（不包含出现BUY信号的那根K线）
2、取包含BUY信号出现的那根K线到当前K线的周期数，则需要在此函数后+1，即BARSBUY+1；由于发出BUY信号的当根k线BARSBUY返回空值，则BARSBUY+1在发出BUY信号当根k线返回空值。

注：
1、若当前K线之前无BUY信号，则函数返回值为空值。
2、该函数支持在股票T+1策略运行池中使用；

例：
1、BARSBUY>10,SELL;//上一次买入（不包含出现买入信号的那根K线）距离当前K线的周期数大于10，卖出；
2、HHV(H,BARSBUY+1);//上一次买入（包含买入信号出现的当根k线）到当前的最高价的最大值。
3、AA:IFELSE(BARSBUY>=1,REF(C,BARSBUY),C);//取最近一次买入K线的收盘价
（1）发出BUY信号的当根k线BARSBK返回空值,则当根K线不满足BARSBUY>=1的条件，AA返回当根k线的收盘价；
（2）发出BUY信号之后的k线BARSBUY返回上一次买入的K线距离当前K线的周期数，则AA返回REF(C,BARSBUY)，即买入k线的收盘价；
（3）例：1、2、3三根k线，1 K线为买入信号的当根k线，则返回当根k线的收盘价，2、3 K线AA返回值为 1 K线的收盘价。
`;

const BARSCOUNT = new MySymbol();
BARSCOUNT.label = "BARSCOUNT";
BARSCOUNT.description = "第一个有效周期到当前的周期数";
BARSCOUNT.insertText = "";
BARSCOUNT.body = "BARSCOUNT()";
BARSCOUNT.kind = MySymbolKind.Function;
BARSCOUNT.marketType = MyMarketType.BasicFunction;
BARSCOUNT.functionType = MyFunctionType.FinancialStatisticsFunction;
BARSCOUNT.returnType = MyFunctionReturnType.None;
BARSCOUNT.parameters = MySymbol.createParametersFromStrings([]);
BARSCOUNT.detail = "第一个有效周期到当前的周期数";
BARSCOUNT.documentation = `
BARSCOUNT(COND)返回COND第一个有效值的位置到当前的周期数
BARSCOUNT(COND) 第一个有效周期到当前的周期数。

注：
1、返回值为COND从第一个有效周期开始计算，到现在为止的周期数。
2、条件第一次成立的当根k线上BARSCOUNT(COND)的返回值为0

例：
BARSCOUNT(MA(C,4));//计算MA(C,4)第一次有返回值到当前的周期数。
`;

const BARSLAST = new MySymbol();
BARSLAST.label = "BARSLAST";
BARSLAST.description = "上一次条件成立位置";
BARSLAST.insertText = "";
BARSLAST.body = "BARSLAST( )";
BARSLAST.kind = MySymbolKind.Function;
BARSLAST.marketType = MyMarketType.BasicFunction;
BARSLAST.functionType = MyFunctionType.FinancialStatisticsFunction;
BARSLAST.returnType = MyFunctionReturnType.None;
BARSLAST.parameters = MySymbol.createParametersFromStrings([]);
BARSLAST.detail = "上一次条件成立位置";
BARSLAST.documentation = `
BARSLAST(X),求上一次条件X满足到现在的周期数
BARSLAST(COND)：上一次条件COND成立到当前的周期数

注：
1、条件成立的当根k线上BARSLAST(COND)的返回值为0

例1：
BARSLAST(OPEN>CLOSE); //上一根阴线到现在的周期数。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，当日k线数。
//由于条件成立的当根k线上BARSLAST(COND)的返回值为0，所以“+1”才是当日k线根数。
`;

const BARSLASTCOUNT = new MySymbol();
BARSLASTCOUNT.label = "BARSLASTCOUNT";
BARSLASTCOUNT.description = "从当前周期向前计算，统计连续满足条件的周期数";
BARSLASTCOUNT.insertText = "";
BARSLASTCOUNT.body = "BARSLASTCOUNT()";
BARSLASTCOUNT.kind = MySymbolKind.Function;
BARSLASTCOUNT.marketType = MyMarketType.BasicFunction;
BARSLASTCOUNT.functionType =
    MyFunctionType.FinancialStatisticsFunction;
BARSLASTCOUNT.returnType = MyFunctionReturnType.None;
BARSLASTCOUNT.parameters = MySymbol.createParametersFromStrings([]);
BARSLASTCOUNT.detail = "从当前周期向前计算，统计连续满足条件的周期数";
BARSLASTCOUNT.documentation = `
BARSLASTCOUNT,从当前周期向前计算，统计连续满足条件的周期数
BARSLASTCOUNT(COND) 从当前周期向前计算，统计连续满足条件的周期数。

注：
1、返回值为从当前周期计算COND连续不为0的周期数
2、条件第一次成立的当根k线上BARSLASTCOUNT(COND)的返回值为1

例：
BARSLASTCOUNT(CLOSE>OPEN);
//计算当根K线在内连续为阳线的周期数
`;

const BARSSELL = new MySymbol();
BARSSELL.label = "BARSSELL";
BARSSELL.description = "上一次卖出信号位置";
BARSSELL.insertText = "";
BARSSELL.body = "BARSSELL";
BARSSELL.kind = MySymbolKind.Function;
BARSSELL.marketType = MyMarketType.TPlusOneStrategyFunction;
BARSSELL.functionType = MyFunctionType.SignalLoggingFunction;
BARSSELL.returnType = MyFunctionReturnType.None;
BARSSELL.parameters = MySymbol.createParametersFromStrings([]);
BARSSELL.detail = "上一次卖出信号位置";
BARSSELL.documentation = `
BARSSELL 上一次卖出信号位置
BARSSELL 上一次卖出信号位置

用法：
1、BARSSELL返回上一次卖出的K线距离当前K线的周期数（不包含出现SELL信号的那根K线）
2、取包含SELL信号出现的那根K线到当前K线的周期数，则需要在此函数后+1，即BARSSELL+1。由于发出SELL信号的当根k线BARSSELL返回空值，则BARSSELL+1在发出SELL信号当根k线返回空值。

注：
1、若当前K线之前无SELL信号，则函数返回值为空值
2、该函数支持在股票T+1策略运行池中使用

例：
1、BARSSELL>10,BUY;//上一次卖出（不包含出现卖出信号的那根K线）距离当前K线的周期数大于10，买入。
2、AA:HHV(H,BARSSELL+1);//上一次，卖出（包含卖出信号出现的当根k线）到当前的最高价的最大值。 
3、AA:IFELSE(BARSSELL>=1,REF(C,BARSSELL),C);//取最近一次卖出K线的收盘价 
（1）发出SELL信号的当根k线BARSSELL返回空值,则当根K线不满足BARSSELL>=1的条件，AA返回当根k线的收盘价；
（2）发出SELL信号之后的k线BARSSELL返回卖出的K线距离当前K线的周期数，则AA返回REF(C,BARSSELL)，即卖出k线的收盘价；
（3）1、2、3三根k线，1 K线为卖出信号的当根k线，则返回当根k线的收盘价，2、3 K线AA返回值为 1 K线的收盘价
`;

const BARSSINCE = new MySymbol();
BARSSINCE.label = "BARSSINCE";
BARSSINCE.description = "第一个条件成立到当前的周期数";
BARSSINCE.insertText = "";
BARSSINCE.body = "BARSSINCE()";
BARSSINCE.kind = MySymbolKind.Function;
BARSSINCE.marketType = MyMarketType.BasicFunction;
BARSSINCE.functionType = MyFunctionType.FinancialStatisticsFunction;
BARSSINCE.returnType = MyFunctionReturnType.None;
BARSSINCE.parameters = MySymbol.createParametersFromStrings([]);
BARSSINCE.detail = "第一个条件成立到当前的周期数";
BARSSINCE.documentation = `
BARSSINCE,第一个条件成立到当前的周期数
BARSSINCE(COND) 第一个条件成立到当前的周期数。

注：
1、返回值为COND第一次成立到当前的周期数
2、条件第一次成立的当根k线上BARSSINCE(COND)的返回值为0

例：
BARSSINCE(CLOSE>OPEN);
//统计第一次满足阳线这个条件的K线到现在的周期数
`;

const BARSSINCEN = new MySymbol();
BARSSINCEN.label = "BARSSINCEN";
BARSSINCEN.description = "统计N周期内第一次条件成立到当前的周期数";
BARSSINCEN.insertText = "";
BARSSINCEN.body = "BARSSINCEN";
BARSSINCEN.kind = MySymbolKind.Function;
BARSSINCEN.marketType = MyMarketType.BasicFunction;
BARSSINCEN.functionType = MyFunctionType.FinancialStatisticsFunction;
BARSSINCEN.returnType = MyFunctionReturnType.None;
BARSSINCEN.parameters = MySymbol.createParametersFromStrings([]);
BARSSINCEN.detail = "统计N周期内第一次条件成立到当前的周期数";
BARSSINCEN.documentation = `
BARSSINCEN统计N周期内第一次条件成立到当前的周期数
BARSSINCEN(COND,N) 统计N周期内第一次条件成立到当前的周期数

注：
1、N包含当前k线。
2、当N为有效值，但当前的k线数不足N根，按照实际的根数计算； 
3、若N为0返回无效值；
4、N可以为变量

例：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，当日K线数。
BARSSINCEN(ISUP,N);//统计N周期内第一次满足阳线到当前的周期数
`;

const BARSSK = new MySymbol();
BARSSK.label = "BARSSK";
BARSSK.description = "上一次卖开信号位置";
BARSSK.insertText = "";
BARSSK.body = "BARSSK";
BARSSK.kind = MySymbolKind.Function;
BARSSK.marketType = MyMarketType.TPlusZeroStrategyFunction;
BARSSK.functionType = MyFunctionType.SignalLoggingFunction;
BARSSK.returnType = MyFunctionReturnType.None;
BARSSK.parameters = MySymbol.createParametersFromStrings([]);
BARSSK.detail = "上一次卖开信号位置";
BARSSK.documentation = `
BARSSK，取上一次卖开信号位置
BARSSK 上一次卖开信号位置

用法：
BARSSK返回上一次卖开仓的K线距离当前K线的周期数（不包含出现SK信号的那根K线）
取包含SK信号出现的那根K线到当前K线的周期数，需要在此函数后+1，即BARSSK+1；由于发出SK信号的当根k线BARSSK返回空值，则BARSSK+1在发出SK信号当根k线返回空值。

注：
1、若当前K线之前无SK信号，则函数返回值为空值
2、SK信号固定后BARSSK返回为空值。
（1）设置信号执行方式为K线走完确认信号下单
BARSSK返回值为上一个SK信号距离当前的K线根数（包含当前K线）
（2）设置信号执行方式为出信号立即下单，不复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
   a.历史信号计算中，出现SK信号当根K线，BARSSK返回空值
   b.加载运行过程中，SK信号当根K线,信号固定后BARSSK返回空值
（3）设置信号执行方式为K线走完复核（例如：在模型中写入CHECKSIG(SK,'A',N,'D',0,0);）
BARSSK返回值为上一个SK信号距离当前的K线根数（包含当前K线）

例：
1、BARSSK>10,BP;//上一次卖开仓（不包含出现买开信号的那根K线）距离当前K线的周期数大于10，买平；
2、LLV(L,BARSSK+1);//上一次卖开仓（包含开仓信号出现的当根k线）到当前的最低价的最小值。
当根K线出现SK信号，AA返回为空值，如果需要返回当根K线上最低价，模型需要修改为:
AA:IFELSE(BARSSK>=1,LLV(L,BARSSK+1),L);
（1）当根K线出现SK信号，BARSSK返回为空值，不满足BARSSK>=1的条件，则取值为当根K线的最低价L
（2）发出SK信号之后K线SARSBK返回卖开仓的K线距离当前K线的周期数，满足BARSSK>=1的条件，则取值为LLV(L,BARSSK+1)，即卖开仓（包含开仓信号出现的当根k线）到当前的最低价的最小值。
修改后如果平仓条件中用到了AA的值，当根K线满足了平仓条件，可以出现平仓信号。
3、AA:IFELSE(BARSSK>=1,REF(C,BARSSK),C);//取最近一次卖开仓K线的收盘价
（1）发出SK信号的当根k线BARSSK返回空值,则当根K线不满足BARSSK>=1的条件，AA返回当根k线的收盘价；
（2）发出SK信号之后的k线BARSSK返回卖开仓的K线距离当前K线的周期数，则AA返回REF(C,BARSSK)，即开仓k线的收盘价；
（3）例：1、2、3三根k线，1K线为开仓信号的当根k线，则返回当根k线的收盘价，2、3K线AA返回值为1K线的收盘价。
`;

const BARSSP = new MySymbol();
BARSSP.label = "BARSSP";
BARSSP.description = "上一次卖平信号位置";
BARSSP.insertText = "";
BARSSP.body = "BARSSP";
BARSSP.kind = MySymbolKind.Function;
BARSSP.marketType = MyMarketType.TPlusZeroStrategyFunction;
BARSSP.functionType = MyFunctionType.SignalLoggingFunction;
BARSSP.returnType = MyFunctionReturnType.None;
BARSSP.parameters = MySymbol.createParametersFromStrings([]);
BARSSP.detail = "上一次卖平信号位置";
BARSSP.documentation = `
BARSSP，取上一次卖平信号位置
BARSSP 上一次卖平信号位置

用法：
BARSSP返回上一次卖平仓的K线距离当前K线的周期数（不包含出现SP信号的那根K线）
取包含SP信号出现的那根K线到当前K线的周期数，则需要在此函数后+1，即BARSSP+1。由于发出SP信号的当根k线BARSSP返回空值，则BARSSP+1在发出SP信号当根k线返回空值。

注：
1、若当前K线之前无SP信号，则函数返回值为空值
2、SP信号固定后BARSSP返回为空值。
（1）设置信号执行方式为K线走完确认信号下单
BARSBP返回值为上一个BP信号距离当前的K线根数（包含当前K线）
（2）设置信号执行方式为出信号立即下单，不复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
   a.历史信号计算中，出现SP信号当根K线，BARSSP返回空值
   b.加载运行过程中，SP信号当根K线,信号固定后BARSSP返回空值
（3）设置信号执行方式为K线走完复核（例如：在模型中写入CHECKSIG(SP,'A',N,'D',0,0);）
BARSSP返回值为上一个SP信号距离当前的K线根数（包含当前K线）

例：
1、BARSSP>10,BK;//上一次卖平仓（不包含出现卖平信号的那根K线）距离当前K线的周期数大于10，买开。
2、AA:HHV(H,BARSSP+1);//上一次，卖平仓（包含平仓信号出现的当根k线）到当前的最高价的最大值。 
当根K线出现SP信号，AA返回为空值，如果需要返回当根K线上最高价，模型需要修改为:
AA:IFELSE(BARSSP>=1,HHV(H,BARSSP+1),H); 
（1）当根K线出现SP信号，BARSSP返回为空值，不满足BARSSP>=1的条件，则取值为当根K线的最高价H 
（2）发出SP信号之后K线BARSSP返回买平仓的K线距离当前K线的周期数，满足BARSSP>=1的条件，则取值为HHV(H,BARSSP+1)，即卖平仓（包含平仓信号出现的当根k线）到当前的最高价的最大值。
3、AA:IFELSE(BARSSP>=1,REF(C,BARSSP),C);//取最近一次卖平仓K线的收盘价 
（1）发出SP信号的当根k线BARSSP返回空值,则当根K线不满足BARSSP>=1的条件，AA返回当根k线的收盘价；
（2）发出SP信号之后的k线BARSSP返回卖平仓的K线距离当前K线的周期数，则AA返回REF(C,BARSSP)，即平仓k线的收盘价；
（3）1、2、3三根k线，1 K线为平仓信号的当根k线，则返回当根k线的收盘价，2、3 K线AA返回值为 1 K线的收盘价
`;

const BARSTATUS = new MySymbol();
BARSTATUS.label = "BARSTATUS";
BARSTATUS.description = "返回当前周期的位置状态";
BARSTATUS.insertText = "";
BARSTATUS.body = "BARSTATUS";
BARSTATUS.kind = MySymbolKind.Function;
BARSTATUS.marketType = MyMarketType.BasicFunction;
BARSTATUS.functionType = MyFunctionType.DrawingFunction;
BARSTATUS.returnType = MyFunctionReturnType.None;
BARSTATUS.parameters = MySymbol.createParametersFromStrings([]);
BARSTATUS.detail = "返回当前周期的位置状态";
BARSTATUS.documentation = `
BARSTATUS返回当前周期的位置状态。1表示当前周期是第一个周期，2表示是最后一个周期，0表示当前周期处于中间位置。
BARSTATUS 返回当前周期的位置状态。

注：
1、该函数返回1表示当前周期是第一个周期，返回2表示是最后一个周期，返回0表示当前周期处于中间位置
2、该函数仅支持在绘图函数中使用。

例:
DRAWNUMBER(BARSTATUS=1,HIGH,OPEN,0,COLORRED);//如果当前K线是第一个周期，则在最高价位置红色显示开盘价。
`;

const BARTYPE = new MySymbol();
BARTYPE.label = "BARTYPE";
BARTYPE.description = "数据合约的K线周期类型值";
BARTYPE.insertText = "";
BARTYPE.body = "BARTYPE";
BARTYPE.kind = MySymbolKind.Function;
BARTYPE.marketType = MyMarketType.BasicFunction;
BARTYPE.functionType = MyFunctionType.CandlestickDataReference;
BARTYPE.returnType = MyFunctionReturnType.None;
BARTYPE.parameters = MySymbol.createParametersFromStrings([]);
BARTYPE.detail = "数据合约的K线周期类型值";
BARTYPE.documentation = `
BARTYPE数据合约的K线周期类型值。
BARTYPE 数据合约的K线周期类型值

用法：
返回值如下：
0 日周期
1 分钟周期
2 小时周期  
3 量能周期
4 周线
5 月线
6 季线
7 年线
8 秒周期

例：
BARTYPE;
BARINTERVAL;
`;

const BETWEEN = new MySymbol();
BETWEEN.label = "BETWEEN";
BETWEEN.description = "介于";
BETWEEN.insertText = "";
BETWEEN.body = "BETWEEN( , , )";
BETWEEN.kind = MySymbolKind.Function;
BETWEEN.marketType = MyMarketType.BasicFunction;
BETWEEN.functionType = MyFunctionType.LogicalJudgmentFunction;
BETWEEN.returnType = MyFunctionReturnType.None;
BETWEEN.parameters = MySymbol.createParametersFromStrings([]);
BETWEEN.detail = "介于";
BETWEEN.documentation = `
BETWEEN(A,B,C),A处于B和C之间时取1(Yes)，否则取0(No)
BETWEEN(X,Y,Z) 表示X是否处于Y和Z之间，成立返回1(Yes)，否则返回0(No)。

注：
1、其中若X=Y、X=Z、或X=Y且Y=Z时函数返回值为1(Yse)。

例1：
BETWEEN(CLOSE,MA5,MA10); //表示收盘价介于5日均线与10日均线之间。
`;

const BKHIGH = new MySymbol();
BKHIGH.label = "BKHIGH";
BKHIGH.description = "返回数据合约买开仓以来的最高价";
BKHIGH.insertText = "";
BKHIGH.body = "BKHIGH";
BKHIGH.kind = MySymbolKind.Function;
BKHIGH.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKHIGH.functionType = MyFunctionType.SignalLoggingFunction;
BKHIGH.returnType = MyFunctionReturnType.None;
BKHIGH.parameters = MySymbol.createParametersFromStrings([]);
BKHIGH.detail = "返回数据合约买开仓以来的最高价";
BKHIGH.documentation = `
BKHIGH,返回数据合约买开仓以来的最高价
返回数据合约买开仓以来的最高价
用法：
BKHIGH返回数据合约最近一次模型买开位置到当前的最高价。
1、不同信号执行方式，其返回值分别为：
（1）信号执行方式为K线走完确认信号下单
a.历史信号计算中，BK(BPK)信号之后的K线返回委托以来的数据合约行情的最高价
b.加载运行过程中，BK(BPK)信号当根K线返回上个BK(BPK)信号发出以来的数据合约行情最高价，BK之后的K线返回委托以来的数据合约行情最高价
（2）信号执行方式选择K线走完复核（例如：在模型中写入CHECKSIG(BK,'A',0,'D',0,0);）
从BK(BPK)信号发出时开始统计数据合约行情的最高价；信号消失，返回上次买开以来的数据合约行情的最高价，信号确认存在，返回当根K线记录的数据合约行情的最高价
注：BK信号发出后，中间出了信号消失，从最后一次信号出现开始统计数据合约最高价
（3）信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
BK(BPK)信号的当根K线返回从信号发出到K线走完时数据合约行情的最高价；BK(BPK)信号之后的K线返回信号发出以来数据合约行情的最高价。
2、主连合约使用换月移仓函数，主力合约切换后，从新的主力合约第一根K线开盘价重新开始统计
3、模组重新初始化后，数据合约和交易合约相同，则BKGIGH返回初始化后的最高价与初始化弹出框中填入的持仓价相比较后较大的数值；数据合约与交易合约不同时，则BKHIGH返回初始化后的最高价与初始化弹出框中填入的数据合约信号价相比较后较大的数值。

例：
C>O,BK;
C>BKPRICE&&C<BKHIGH-5*MINPRICE,SP;
AUTOFILTER;//最新价低于买开仓以来的数据合约最高价5个点，止盈平仓。
`;

const BKLOW = new MySymbol();
BKLOW.label = "BKLOW";
BKLOW.description = "返回数据合约买开仓以来的最低价";
BKLOW.insertText = "";
BKLOW.body = "BKLOW";
BKLOW.kind = MySymbolKind.Function;
BKLOW.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKLOW.functionType = MyFunctionType.SignalLoggingFunction;
BKLOW.returnType = MyFunctionReturnType.None;
BKLOW.parameters = MySymbol.createParametersFromStrings([]);
BKLOW.detail = "返回数据合约买开仓以来的最低价";
BKLOW.documentation = `
BKLOW,返回数据合约买开仓以来的最低价
返回数据合约买开仓以来的最低价
用法：
BKLOW返回数据合约最近一次模型买开位置到当前的最低价。
1、不同信号执行方式，其返回值分别为：
（1）K线走完确认信号下单
a.历史信号计算中，BK(BPK)信号之后的K线返回委托以来的数据合约行情的最低价
b.加载运行过程中，BK(BPK)信号当根K线返回上个BK(BPK)信号发出以来的数据合约行情最低价，BK之后的K线返回委托以来的数据合约行情最低价
（2）信号执行方式选择K线走完复核（例如：在模型中写入CHECKSIG(BK,'A',0,'D',0,0);）
从BK(BPK)信号发出时行情时开始统计数据合约行情的最低价；信号消失，返回上次买开以来的数据合约行情的最低价，信号确认存在，返回当根K线记录的数据合约行情的最低价
注：BK信号发出后，中间出了信号消失，从最后一次信号出现开始统计数据合约最低价
（3）信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
BK(BPK)信号的当根K线返回的从信号发出到K线走完时数据合约行情的最低价；BK(BPK)信号之后的K线返回信号发出以来数据合约行情的最低价。
2、主连合约使用换月移仓函数，主力合约切换后，从新的主力合约第一根K线开盘价重新开始统计
3、模组重新初始化后，数据合约和交易合约相同，则BKLOW返回初始化后的最低价与初始化弹出框中填入的持仓价相比较后较小的数值；数据合约与交易合约不同时，则BKLOW返回初始化后的最低价与初始化弹出框中填入的数据合约信号价相比较后较小的数值。

例：
C>O,BK;
C>BKLOW+5*MINPRICE,SP;
AUTOFILTER;//最新价高于买开仓以来数据合约的最低价5个点，平仓。
`;

const BKPRICE = new MySymbol();
BKPRICE.label = "BKPRICE";
BKPRICE.description = "返回数据合约最近一次买开信号价位";
BKPRICE.insertText = "";
BKPRICE.body = "BKPRICE";
BKPRICE.kind = MySymbolKind.Function;
BKPRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKPRICE.functionType = MyFunctionType.SignalLoggingFunction;
BKPRICE.returnType = MyFunctionReturnType.None;
BKPRICE.parameters = MySymbol.createParametersFromStrings([]);
BKPRICE.detail = "返回数据合约最近一次买开信号价位";
BKPRICE.documentation = `
BKPRICE，返回数据合约最近一次买开信号价位
BKPRICE 返回数据合约最近一次买开信号价位。

用法：
BKPRICE 返回数据合约最近一次买开信号发出时的行情的最新价。

注：
1、当数据合约和交易合约相同时BKPRICE值和BKPRICE1值相等。
2、当模型存在连续多个开仓信号(加仓)的情况下，该函数返回的是最近一次开仓信号的价格,而不是开仓均价。
3、不同信号执行方式，其返回值分别为：
（1）信号执行方式为不进行信号复核
a.历史回测：BKPRICE返回信号发出时的数据合约行情最新价
b.模组运行：BKPRICE返回信号发出时的数据合约行情最新价
（2）信号执行方式选择K线走完确认信号下单
a.历史回测：BKPRICE返回信号发出时数据合约当根K线的收盘价
b.模组运行：BKPRICE返回信号发出时数据合约当根K线的收盘价
（3）信号执行方式设置为K线走完进行信号复核
a.历史回测：BKPRICE返回信号发出时数据合约当根K线的收盘价
b.模组运行：复核前，返回上一次BK信号当根K线数据合约的行情最新价；复核后，返回本次BK信号当根K线数据合约的行情最新价
4、模组头寸同步后，BKPRICE的值不变，仍然返回上一次买开信号时数据合约行情的最新价。
5、模组重新初始化后，数据合约和交易合约相同，则BKPRICE返回为初始化弹出框中填入的持仓价格；数据合约与交易合约不同时，则BKPRICE返回初始化弹出框中填入的数据合约信号价。
6、加载在主连合约上，使用了换月移仓函数，主力换月后BKPRCIE取值为新的主力合约的第一根K线的开盘价

例:
BKPRICE-CLOSE>60 && BKPRICE>0 && BKVOL>0, SP;//如果买开价位比当前价位高出60,且多头持仓存在，卖平仓。
`;

const BKPRICE1 = new MySymbol();
BKPRICE1.label = "BKPRICE1";
BKPRICE1.description = "返回交易合约最近一次买开信号价位";
BKPRICE1.insertText = "";
BKPRICE1.body = "BKPRICE1";
BKPRICE1.kind = MySymbolKind.Function;
BKPRICE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKPRICE1.functionType = MyFunctionType.SignalLoggingFunction;
BKPRICE1.returnType = MyFunctionReturnType.None;
BKPRICE1.parameters = MySymbol.createParametersFromStrings([]);
BKPRICE1.detail = "返回交易合约最近一次买开信号价位";
BKPRICE1.documentation = `
BKPRICE1，返回交易合约最近一次买开信号价位
BKPRICE1 返回交易合约最近一次买开信号价位。

用法：
BKPRICE1：返回交易合约最近一次买开信号发出时的行情的最新价。

注：
1、当数据合约和交易合约相同时BKPRICE值和BKPRICE1值相等。
2、当数据合约和交易合约不同时，不同信号执行方式，其返回值分别为：
（1）信号执行方式为不进行信号复核
a.历史回测：BKPRICE1返回信号发出时的交易合约行情最新价
b.模组运行：BKPRICE1返回信号发出时的交易合约行情最新价
（2）信号执行方式选择K线走完确认信号下单
a.历史回测：BKPRICE1返回信号发出时交易合约当根K线的收盘价
b.模组运行：BKPRICE1返回信号发出时交易合约当根K线的收盘价
（3）信号执行方式设置为K线走完进行信号复核
a.历史回测：BKPRICE1返回信号发出时交易合约当根K线的收盘价
b.模组运行：复核前，返回上一次BK信号当根K线交易合约的行情最新价；复核后，返回本次BK信号当根K线交易合约的行情最新价
3、模组头寸同步后，BKPRICE1的值不变，仍然返回上一次买开信号时交易合约行情的最新价；模组重新初始化后，BKPRICE1返回为初始化弹出框中填入的持仓价格。
4、加载在加权/主连合约上，使用了换月移仓函数，主力换月后BKPRCIE1取值为新的主力合约的第一根K线的开盘价
`;

const BKPRICEAV = new MySymbol();
BKPRICEAV.label = "BKPRICEAV";
BKPRICEAV.description = "返回数据合约多头开仓均价";
BKPRICEAV.insertText = "";
BKPRICEAV.body = "BKPRICEAV";
BKPRICEAV.kind = MySymbolKind.Function;
BKPRICEAV.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKPRICEAV.functionType = MyFunctionType.PositionManagementFunction;
BKPRICEAV.returnType = MyFunctionReturnType.None;
BKPRICEAV.parameters = MySymbol.createParametersFromStrings([]);
BKPRICEAV.detail = "返回数据合约多头开仓均价";
BKPRICEAV.documentation = `
BKPRICEAV返回数据合约多头开仓均价
BKPRICEAV 返回数据合约多头开仓均价。

用法：
BKPRICEAV 返回数据合约多头开仓均价。

注：
1、过滤模型：
（1）开仓信号后，未出平仓信号时：BKPRICEAV取值和BKPRICE取值相同。
（2）平仓信号后：BKPRICEAV返回值为0。
2、加减仓模型：
（1）持仓不为0时：BKPRICEAV返回数据合约理论持仓的开仓均价。
（2）加减仓模型持仓为0时：BKPRICEAV返回值为0。
3、该函数在模组运行和回测中都读取的是模组理论持仓的开仓均价，非实际持仓开仓均价。
4、模组重新初始化后，数据合约和交易合约相同，则BKPRICEAV计算取初始化弹出框中填入的持仓价格；数据合约与交易合约不同时，则BKPRICEAV计算取初始化弹出框中填入的数据合约信号价。

注：
该函数的计算考虑滑点。

例：
CLOSE-BKPRICEAV>60,SP(BKVOL);//当前价位比多头开仓均价高出60,平掉所有多头持仓
`;

const BKPRICEAV1 = new MySymbol();
BKPRICEAV1.label = "BKPRICEAV1";
BKPRICEAV1.description = "返回交易合约多头开仓均价";
BKPRICEAV1.insertText = "";
BKPRICEAV1.body = "BKPRICEAV1";
BKPRICEAV1.kind = MySymbolKind.Function;
BKPRICEAV1.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKPRICEAV1.functionType = MyFunctionType.PositionManagementFunction;
BKPRICEAV1.returnType = MyFunctionReturnType.None;
BKPRICEAV1.parameters = MySymbol.createParametersFromStrings([]);
BKPRICEAV1.detail = "返回交易合约多头开仓均价";
BKPRICEAV1.documentation = `
BKPRICEAV1交易合约多头开仓均价
BKPRICEAV1 返回交易合约多头开仓均价

用法：
BKPRICEAV1 返回交易合约多头开仓均价

注：
1、当模型存在连续多个开仓信号(加仓)的情况下，该函数返回的是交易合约开仓均价。
2、当数据合约和交易合约相同时BKPRICEAV值和BKPRICEAV1值相等。
3、过滤模型：
（1）开仓信号后，未出平仓信号时：BKPRICEAV1取值和BKPRICE1取值相同。
（2）平仓信号后：BKPRICEAV1返回值为0。
4、加减仓模型：
（1）持仓不为0时：BKPRICEAV1返回交易合约理论持仓的开仓均价。
（2）加减仓模型持仓为0时：BKPRICEAV返回值为0。

注：
该函数的计算考虑滑点。

例：
CLOSE-BKPRICEAV1>60,SP(BKVOL);//当前价位比交易合约多头开仓均价高出60,平掉所有多头持仓
`;

const BKVOL = new MySymbol();
BKVOL.label = "BKVOL";
BKVOL.description = "买开信号手数";
BKVOL.insertText = "";
BKVOL.body = "BKVOL";
BKVOL.kind = MySymbolKind.Function;
BKVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKVOL.functionType = MyFunctionType.PositionManagementFunction;
BKVOL.returnType = MyFunctionReturnType.None;
BKVOL.parameters = MySymbol.createParametersFromStrings([]);
BKVOL.detail = "买开信号手数";
BKVOL.documentation = `
BKVOL返回模型当前的多头理论持仓
买开信号手数
用法：
BKVOL返回模型当前的多头理论持仓。
1、加载运行：
（1）模组初始化后，BKVOL仍然返回根据信号下单手数计算的理论持仓，不受账户持仓的影响。
（2）模组运行中手动调仓，头寸同步修改持仓，BKVOL返回值不变，仍然返回根据信号下单手数计算的理论持仓。
（3）页面盒子运行中，BKVOL不受资金情况的限制，按照信号显示开仓手数。
2、回测、模组运行中：
（1）如果资金不够开仓，开仓手数为0，BKVOL返回值为0。
（2）BK（BPK）信号出现并且确认固定后，BKVOL的取值增加开仓手数的数值；SP（SPK）信号出现并且确认固定后，BKVOL的取值减少平仓手数的数值。

例：
BKVOL=0&&C>O,BK(1);//多头理论持仓为0并且收盘价大于开盘价时，买开一手
BKVOL>=1&&H>HV(H,5),BK(2); //多头持仓大于等于1，并且当根K线的最高价大于前面5个周期中最高价中最大值时，加仓2手
BKVOL>0&&L<REF(L,5),SP(BKVOL); //多头持仓大于0，并且当根K线的最低价小于5个周期前K线的最低价时，卖平所有多头持仓
`;

const BKVOL2 = new MySymbol();
BKVOL2.label = "BKVOL2";
BKVOL2.description = "买开信号手数";
BKVOL2.insertText = "";
BKVOL2.body = "BKVOL2";
BKVOL2.kind = MySymbolKind.Function;
BKVOL2.marketType = MyMarketType.TPlusZeroStrategyFunction;
BKVOL2.functionType = MyFunctionType.PositionManagementFunction;
BKVOL2.returnType = MyFunctionReturnType.None;
BKVOL2.parameters = MySymbol.createParametersFromStrings([]);
BKVOL2.detail = "买开信号手数";
BKVOL2.documentation = `
BKVOL2模组多头持仓
买开信号手数
用法：
BKVOL2返回模型当前的多头持仓。
1、加载运行：
（1）模组初始化后，BKVOL2返回的理论持仓仍然延续，返回模型信号手数，不受账户持仓的影响。
（2）页面盒子和模组加载中，BKVOL2不受资金情况的限制，按照信号显示开仓手数。
（3）模组运行过程中BK（BPK）信号出现并且确认固定后，BKVOL2的取值增加开仓手数的数值；SP（SPK）信号出现并且确认固定后，BKVOL2的取值减少平仓手数的数值。
2、回测：
（1）BKVOL2不受资金情况的限制，按照信号显示开仓手数。
（2）BK（BPK）信号出现并且确认固定后，BKVOL2的取值增加开仓手数的数值；SP（SPK）信号出现并且确认固定后，BKVOL2的取值减少平仓手数的数值。

例：
BKVOL2=0&&C>O,BK(1);//多头持仓为0并且收盘价大于开盘价时，买开一手
BKVOL2>=1&&H>HV(H,5),BK(2); //多头持仓大于等于1，并且当根K线的最高价大于前面5个周期中最高价中最大值时，加仓2手
BKVOL2>0&&L<REF(L,5),SP(BKVOL2); //多头持仓大于0，并且当根K线的最低价小于5个周期前K线的最低价时，卖平所有多头持仓
`;

const BUYPRICE = new MySymbol();
BUYPRICE.label = "BUYPRICE";
BUYPRICE.description = "返回最近一次买入信号所在K线的收盘价。";
BUYPRICE.insertText = "";
BUYPRICE.body = "BUYPRICE";
BUYPRICE.kind = MySymbolKind.Function;
BUYPRICE.marketType = MyMarketType.TPlusOneStrategyFunction;
BUYPRICE.functionType = MyFunctionType.SignalLoggingFunction;
BUYPRICE.returnType = MyFunctionReturnType.None;
BUYPRICE.parameters = MySymbol.createParametersFromStrings([]);
BUYPRICE.detail = "返回最近一次买入信号所在K线的收盘价。";
BUYPRICE.documentation = `
BUYPRICE  返回最近一次买入信号所在K线的收盘价。
BUYPRICE 返回最近一次买入信号所在K线的收盘价。

用法：
BUYPRICE 返回最近一次买入信号所在K线的收盘价。

注：
1、该函数支持在股票T+1策略运行池中使用。

例:
BUYPRICE-CLOSE>60 && BUYPRICE>0 && BUYVOL>0, SELL;//如果买入价位比当前价位高出60,且多头持仓存在，卖出持仓。
`;

const CEILING = new MySymbol();
CEILING.label = "CEILING";
CEILING.description = "向上舍入";
CEILING.insertText = "";
CEILING.body = "CEILING( , )";
CEILING.kind = MySymbolKind.Function;
CEILING.marketType = MyMarketType.BasicFunction;
CEILING.functionType = MyFunctionType.MathFunction;
CEILING.returnType = MyFunctionReturnType.None;
CEILING.parameters = MySymbol.createParametersFromStrings([]);
CEILING.detail = "向上舍入";
CEILING.documentation = `
CEILING(X,Y)返回指定实数(X)在沿绝对值增大的方向上第一个能整除基数(Y)的值。
CEILING(X,Y) 返回指定实数(X)在沿绝对值增大的方向上第一个能整除基数(Y)的值。

注：
1、如果X和Y符号相同，则对值按远离0的方向进行舍入。
2、X和Y符号不同的情况下：
（1）如果X为负，Y为正，则对值按朝向0的方向进行向上舍入。
（2）如果X为正，Y为负，CEILING返回无效值。
3、X、Y均可以为变量。
4、若X、Y中任意一个为空值，则该函数返回空值。

例1：
CEILING(2.1,1);//求得3。
例2：
CEILING(-8.8,-2);//求得-10。
例3：
CEILING(CLOSE*1.01,1);//求收盘价的1.01倍向上取整
例4：
CEILING(-7,2);//求得-6。
例5：
CEILING(8,-2);//返回无效值。
`;

const CHECKSIG = new MySymbol();
CHECKSIG.label = "CHECKSIG";
CHECKSIG.description =
    "设置信号确认与复核的指令价方式（TICK逐笔回测，可设置回测精度）";
CHECKSIG.insertText = "";
CHECKSIG.body = "CHECKSIG( , , , , ,)";
CHECKSIG.kind = MySymbolKind.Function;
CHECKSIG.marketType = MyMarketType.TPlusZeroStrategyFunction;
CHECKSIG.functionType =
    MyFunctionType.PerformanceOptimizationFunction;
CHECKSIG.returnType = MyFunctionReturnType.None;
CHECKSIG.parameters = MySymbol.createParametersFromStrings([]);
CHECKSIG.detail =
    "设置信号确认与复核的指令价方式（TICK逐笔回测，可设置回测精度）";
CHECKSIG.documentation = `
CHECKSIG(SIG,MODE1,TIME1,MODE2,TIME2,INTERVAL);设置信号确认与复核的指令价方式（TICK逐笔回测，可设置回测精度）SIG为信号,MODE1为下单方式,TIME1下单确认时间,MODE2复核方式,TIME2复核确认时间,INTERVAL代表数据时间间隔
CHECKSIG 设置信号确认与复核的指令价方式（TICK逐笔回测，可设置回测精度）

用法：
CHECKSIG(SIG,MODE1,TIME1,MODE2,TIME2,INTERVAL);
1、当INTERVAL不为0时，INTERVAL数据时间间隔，每隔INTERVAL秒计算一次信号，SIG为信号,MODE1为信号确认方式,TIME1信号确认时间乘数,MODE2信号复核方式,TIME2信号复核时间乘数。
（例：INTERVAL为10，豆粕合约开盘第一根K线21：00：09为第一次计算模型，21：00：19为第二次计算模型...）
2、当INTERVAL为0时，每笔TICK计算一次信号，SIG为信号,MODE1为信号确认方式,TIME1信号确认时间,MODE2信号复核方式,TIME2信号复核时间。
3、通过调整INTERVAL参数，模型可设置不同数据快照频率进行回测。

注：
1、该函数支持在期货月份合约和股票上运行。
2、写了这个函数以后，模型会按照指令价方式运行。
3、SIG位置为交易指令，交易指令包括BK\\SK\\BP\\SP\\BPK\\SPK。
4、MODE1位置为信号确认方式，有A和B两种：
A：MODE1为'A'时
 1）当INTERVAL不为0时，出信号后第TIME1个数据时间间隔确认信号下单
 2）当INTERVAL为0时，出信号TIME1秒后确认信号下单
B：MODE1为'B'时
 1）当INTERVAL不为0时，K线走完前TIME1个时间间隔确认信号下单
 2）当INTERVAL为0时，K线走完前TIME1秒确认信号下单
 3）TIME1=0为K线走完确认信号下单
5、MODE2位置为信号复核方式，有C，D，E和F四种：
C：MODE2为'C'时
 1）当INTERVAL不为0时，下单后第TIME2个数据时间间隔进行信号复核
 2）当INTERVAL为0时，下单TIME2秒后进行信号复核，TIME2=0为不复核
D：MODE2为'D'时
 1）当INTERVAL不为0时，K线走完前TIME2个时间间隔进行信号复核
 2）当INTERVAL为0时，K线走完前TIME2秒进行信号复核
 3）TIME2=0为K线走完复核
E：每一个以小节为结束时间的K线提前复核，其他非小节时间结束的K线为K线走完复核。(小节包括：商品合约10:15-10:30休盘、11:30-13:30休市、21:00-23:00(或23:30或1:00或2:30)期间夜盘小节、收盘前最后一根k线；股指合约11:30-13:00休市以及收盘前最后一根k线)
 1）当INTERVAL不为0时，提前TIME2个时间间隔进行信号复核
 2）当INTERVAL为0时，提前TIME2秒进行信号复核
 3）TIME2=0为K线走完复核
F：每天以收盘时间为结束时间的K线提前复核，其他不以收盘时间为结束时间的K线为K线走完复核
 1）当INTERVAL不为0时，提前TIME2个时间间隔进行信号复核
 2）当INTERVAL为0时，提前TIME2秒进行信号复核
 3）TIME2=0为K线走完复核
6、INTERVAL代表数据时间间隔
 1）支持0、3、5、10四个值，不支持变量。
 2）3、5、10分别代表用每隔3秒、5秒、10秒，计算一次模型
 3）参数为3、5、10 ，回测速度可提升3-10倍，回测精度稍差
 4）参数为0的时 为每笔TICK计算一次模型
 5）一个模型中只能写入一个INTERVAL值
7、模型中写入该函数，一根K线只能有一个信号。
8、CHECKSIG、MULTSIG、MULTSIG_MIN、CHECKSIG_MIN函数不能同时出现在一个模型中
9、该函数只允许在模组中使用，不支持加载到盒子。
10、未使用该函数的指令，默认的信号执行方式为K线走完确认信号下单。
11、该函数不支持加载到量能周期使用,例如：量能周期出信号TIME1个数据时间间隔下单， K线走完前TIME2个数据时间间隔复核之类的都不支持
12、如果用该函数设置了信号复核，复核时产生了信号消失，会进行信号消失处理。信号消失的处理方式：
还没有成交时的信号消失处理-撤单
BK、SK信号消失处理-平仓
BPK、SPK信号消失处理-平仓+恢复建仓
BP、SP信号消失处理-恢复建仓
13、不支持与TRADE_OTHER、#CALL、#CALL_OTHER、#CALL_PLUS函数同时使用。

例：
C>O,BK;
C<O,SP;
CHECKSIG(BK,'A',5,'D',0,3);//设置BK信号，出信号后第5个数据时间间隔确认下单（例如21:00:02满足条件，出现信号后第5次计算信号，即21:00：17时确认信号下单），K线走完复核。每隔3秒计算一次信号。
CHECKSIG(SP,'A',0,'C',10,3);//设置SP信号，根据数据时间间隔计算出信号后立即下单（例如21:00:02满足条件，出现信号后立即下单），下单后第10个数据时间间隔复核（例如21:00：17时确认信号下单，则确认下单后第10次计算模型，即21:00:47进行信号复核）。每隔3秒计算一次信号。
AUTOFILTER;
`;

const CHECKSIG_MIN = new MySymbol();
CHECKSIG_MIN.label = "CHECKSIG_MIN";
CHECKSIG_MIN.description = "设置信号确认与复核的指令价方式（逐分钟回测）";
CHECKSIG_MIN.insertText = "";
CHECKSIG_MIN.body = "CHECKSIG_MIN( , , , ,)";
CHECKSIG_MIN.kind = MySymbolKind.Function;
CHECKSIG_MIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
CHECKSIG_MIN.functionType =
    MyFunctionType.PerformanceOptimizationFunction;
CHECKSIG_MIN.returnType = MyFunctionReturnType.None;
CHECKSIG_MIN.parameters = MySymbol.createParametersFromStrings([]);
CHECKSIG_MIN.detail = "设置信号确认与复核的指令价方式（逐分钟回测）";
CHECKSIG_MIN.documentation = `
CHECKSIG_MIN(SIG,MODE1,TIME1,MODE2,TIME2);设置信号确认与复核的指令价方式（逐分钟回测）SIG为信号,MODE1为下单方式,TIME1下单确认时间,MODE2复核方式,TIME2复核确认时间
CHECKSIG_MIN 设置信号确认与复核的指令价方式（逐分钟回测）

用法：
CHECKSIG_MIN(SIG,MODE1,TIME1,MODE2,TIME2);SIG为信号,MODE1为信号确认方式,TIME1信号确认时间,MODE2信号复核方式,TIME2信号复核时间。

注：
1、写了这个函数以后，模型会按照指令价方式运行。
2、使用该函数时，基础数据为1分钟数据。(TIME1 TIME2不支持小数)
3、该函数不支持加载在15分钟以下周期使用
4、SIG位置为交易指令，交易指令包括BK\\SK\\BP\\SP\\BPK\\SPK。
5、MODE1位置为信号确认方式，有A和B两种：
A：出信号TIME1分钟确认信号下单。TIME1>0为出信号TIME1分钟确认信号下单，TIME1=0为出信号立即下单。
B：K线走完前TIME1分钟确认信号下单。TIME1>0为K线走完前TIME1分钟确认信号下单(不支持加载在日线以上周期)，TIME1=0为K线走完确认信号下单
6、MODE2位置为信号复核方式，有C，D，E和F四种：
C：下单后TIME2分钟进行信号复核。TIME2>0为下单后TIME2分钟进行信号复核，TIME2=0为不复核。
D：K线走完前TIME2分钟进行信号复核。TIME2>0为K线走完前TIME2分钟进行信号复核(不支持加载在日线以上周期)，TIME2=0为K线走完复核。
E：每一个以小节为结束时间的K线提前复核。(小节包括：商品合约10:15-10:30休盘、11:30-13:30休市、21:00-23:00(或23:30或1:00或2:30)期间夜盘小节、收盘前最后一根k线；股指合约11:30-13:00休市以及收盘前最后一根k线)TIME2>0为每一个以小节为结束时间的K线提前TIME2分钟进行信号复核(不支持加载在日线以上周期)，TIME2=0为K线走完复核。其他非小节时间结束的K线为K线走完复核。
F：以收盘时间为结束时间的K线为提前TIME2分钟复核。TIME2>0为以收盘时间为结束时间的K线提前TIME2分钟进行信号复核(不支持加载在日线以上周期)，TIME2=0为K线走完复核。其他非收盘时间结束的K线为K线走完复核。
7、模型中写入该函数，一根K线只能有一个信号。
8、MULTSIG、MULTSIG_MIN、CHECKSIG和CHECKSIG_MIN函数不能同时出现在一个模型中
9、该函数只允许在模组中使用，不支持加载到盒子。
10、未使用该函数的指令，默认的信号执行方式为K线走完确认信号下单。
11、参数TIME1、TIME2非0时，该函数不支持加载到日线以上的周期中使用。
12、如果用该函数设置了信号复核，复核时产生了信号消失，会进行信号消失处理。信号消失的处理方式：
还没有成交时的信号消失处理-撤单
BK、SK信号消失处理-平仓
BPK、SPK信号消失处理-平仓+恢复建仓
BP、SP信号消失处理-恢复建仓

几种典型的信号复核确认方式对应的写法举例：
CHECKSIG_MIN(SIG,'A',0,'D',0);//出信号立即下单，K线走完复核
CHECKSIG_MIN(SIG,'A',N,'D',0);//出信号N分钟确认信号下单，K线走完复核
CHECKSIG_MIN(SIG,'A',N,'C',0);//出信号N分钟确认信号下单，不进行复核
CHECKSIG_MIN(SIG,'B',N,'D',0);//K线走完前N分钟确认信号下单，K线走完复核
CHECKSIG_MIN(SIG,'B',N,'C',0);//K线走完前N分钟确认信号下单，不复核
CHECKSIG_MIN(SIG,'B',0,'C',N);//K线走完确认信号下单
CHECKSIG_MIN(SIG,'B',0,'D',0);//K线走完确认信号下单
CHECKSIG_MIN(SIG,'A',0,'C',0);//出信号立即下单，不复核
CHECKSIG_MIN(SIG,'A',0,'F',10);//出信号立即下单，收盘前最后一根K线提前10分钟进行复核。

例：
C>O,BK;
C<O,SP;
CHECKSIG_MIN(BK,'A',5,'D',0);//设置BK信号，出信号5分钟后确认下单，K线走完复核。
CHECKSIG_MIN(SP,'A',0,'C',10);//设置SP信号，出信号立即下单，下单后10分钟复核。
AUTOFILTER;
`;

const CIRCLEDOT = new MySymbol();
CIRCLEDOT.label = "CIRCLEDOT";
CIRCLEDOT.description = "小圆点线";
CIRCLEDOT.insertText = "";
CIRCLEDOT.body = "CIRCLEDOT";
CIRCLEDOT.kind = MySymbolKind.Function;
CIRCLEDOT.marketType = MyMarketType.BasicFunction;
CIRCLEDOT.functionType = MyFunctionType.DrawingFunction;
CIRCLEDOT.returnType = MyFunctionReturnType.None;
CIRCLEDOT.parameters = MySymbol.createParametersFromStrings([]);
CIRCLEDOT.detail = "小圆点线";
CIRCLEDOT.documentation = `

画小圆点线。
用法：
CIRCLEDOT 画小圆点线。

注：
1、该函数支持设置颜色。
2、不支持将函数定义为变量，即不支持下面的写法：A:CIRCLEDOT；

例：MA5:MA(C,5),CIRCLEDOT,COLORCYAN;//用小圆点线画5周期均线，圆点线显示为青色。
`;

const CJLVOL = new MySymbol();
CJLVOL.label = "CJLVOL";
CJLVOL.description = "绘制CJL成交量柱线";
CJLVOL.insertText = "";
CJLVOL.body = "CJLVOL( )";
CJLVOL.kind = MySymbolKind.Function;
CJLVOL.marketType = MyMarketType.BasicFunction;
CJLVOL.functionType = MyFunctionType.DrawingFunction;
CJLVOL.returnType = MyFunctionReturnType.None;
CJLVOL.parameters = MySymbol.createParametersFromStrings([]);
CJLVOL.detail = "绘制CJL成交量柱线";
CJLVOL.documentation = `
CJLVOL(N)，绘制CJL成交量柱线
CJLVOL(N) 绘制CJL成交量柱线

用法：当参数N为零时，则相当于VOL,VOLUMESTICK;当参数N不为零时，成交量柱线的宽度和颜色和竹线保持一致。

注：
该函数用于系统CJL指标 

例：
CJLVOL(0);//绘制CJL成交量红绿柱线
`;

const CLOSE = new MySymbol();
CLOSE.label = "CLOSE";
CLOSE.description = "取得K线图的收盘价";
CLOSE.insertText = "";
CLOSE.body = "CLOSE";
CLOSE.kind = MySymbolKind.Function;
CLOSE.marketType = MyMarketType.BasicFunction;
CLOSE.functionType = MyFunctionType.CandlestickDataReference;
CLOSE.returnType = MyFunctionReturnType.None;
CLOSE.parameters = MySymbol.createParametersFromStrings([]);
CLOSE.detail = "取得K线图的收盘价";
CLOSE.documentation = `
CLOSE,取收盘(最新)价
CLOSE 取得K线图的收盘价。

注：
1、当盘中k线没有走完的时候，取得最新价。
2、可简写为C。

例1：
A:CLOSE;//定义变量A为收盘价（盘中k线没有走完的时候A为最新价）。
例2：
MA5:=MA(C,5);//定义收盘价的5周期均线（C为CLOSE简写）。
例3：
A:=REF(C,1);//取得前一根k线的收盘价。
`;

const CLOSEKLINE = new MySymbol();
CLOSEKLINE.label = "CLOSEKLINE";
CLOSEKLINE.description = "设置K线提前N(1-30)秒走完";
CLOSEKLINE.insertText = "";
CLOSEKLINE.body = "CLOSEKLINE( , )";
CLOSEKLINE.kind = MySymbolKind.Function;
CLOSEKLINE.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSEKLINE.functionType = MyFunctionType.SignalExecutionFunction;
CLOSEKLINE.returnType = MyFunctionReturnType.None;
CLOSEKLINE.parameters = MySymbol.createParametersFromStrings([]);
CLOSEKLINE.detail = "设置K线提前N(1-30)秒走完";
CLOSEKLINE.documentation = `
CLOSEKLINE(TYPE,N),设置K线提前N(1-30)秒走完TYPE=0，代表每小节和收盘前最后一根K线提前N秒走完；
TYPE=1，代表夜盘结束及日盘结束前最后一根K线提前N秒走完；TYPE=2，代表每一根K线提前N秒走完；N是时间（秒数）
CLOSEKLINE(TYPE,N) 设置K线走完前N秒，确认信号下单，K线走完进行复核，N的取值范围为1-30

用法：
TYPE=0，小节及交易日结束前N秒确认信号下单，其他时间K线走完确认信号下单
TYPE=1，夜盘结束及日盘结束前N秒确认信号下单，其他时间K线走完确认信号下单
TYPE=2，每一根K线提前N秒确认信号下单

注：
1、提前N秒下单不支持历史回测，仅支持盘中运行
（1）历史回测：信号按照收盘价计算。
（2）模组运行：历史信号按照收盘价计算；盘中运行根据TYPE设置提前N秒下单，K线走完复核。
（3）盒子运行：历史信号按照收盘价计算；盘中运行根据TYPE设置提前N秒下单，信号消失不处理。
2、K线走完复核机制说明
（1）提前N秒有信号并确认下单，K线走完信号消失，下根K线开盘后做信号消失处理
（2）提前N秒没有信号，K线走完时复核有信号，下根K线开盘立即下单
3、CLOSEKLINE与CLOSEOUT同时使用的模型，不管参数怎么设置，均按照提前60秒下单执行。
4、数据合约是股票指数，交易日结束前的最后一根k线提前时间为N秒+3分钟。
5、如果设置小节提前下单，小节时间和k线走完时间重合时，此设置才起作用。例如：沪金合约，15分钟周期上，小节时间的信号提前N秒下单；但日线周期上，小节时不会提前下单。
6、该函数不支持加载到量能周期和日线以上的周期中使用。
7、该函数不支持与CHECKSIG/CHECKSIG_MIN/MULTSIG/MULTSIG_MIN一起使用。

例：
C>HV(H,4),BK;//价格大于前四个周期高点开多仓
C<MA(C,5),SP;//价格小于5周期均线，平多仓
CLOSEKLINE(1,9);//设置夜盘结束及日盘结束前9秒确认信号下单
AUTOFILTER;
`;

const CLOSEMINUTE = new MySymbol();
CLOSEMINUTE.label = "CLOSEMINUTE";
CLOSEMINUTE.description = "距收盘前时间";
CLOSEMINUTE.insertText = "";
CLOSEMINUTE.body = "CLOSEMINUTE";
CLOSEMINUTE.kind = MySymbolKind.Function;
CLOSEMINUTE.marketType = MyMarketType.BasicFunction;
CLOSEMINUTE.functionType = MyFunctionType.TimeFunction;
CLOSEMINUTE.returnType = MyFunctionReturnType.None;
CLOSEMINUTE.parameters = MySymbol.createParametersFromStrings([]);
CLOSEMINUTE.detail = "距收盘前时间";
CLOSEMINUTE.documentation = `
CLOSEMINUTE,返回K线距离闭市前的时间（单位：分钟），方便闭市前及时平仓
CLOSEMINUTE，返回K线距离收盘前的分钟数。

注：
1、该函数只能用于收盘价模型，返回当根K线开始时间距离交易日结束的分钟数。
2、该函数与CLOSEOUT指令同时使用时：
K线走完前：返回K线当前时间距离交易日结束的分钟数；
历史K线：返回K线结束时间距离交易日结束的分钟数。
3、该函数需要在分钟，小时周期使用；不支持在TICK周期，秒周期，量能周期，日线及以上周期使用。
4、该函数的返回值包含小结和午休的时间。
5、CLOSEMINUTE返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，夜盘收盘不是当日收盘，15点收盘才算作当日收盘。
7、CLOSEMINUTE在合约最后交易日，返回实际收盘时间。
8、该函数不支持和CLOSESEC同时使用。

例：
CROSS(C,MA(C,5))&&CLOSEMINUTE>5,BK;//收盘价上穿五周期均线，开仓，收盘前5分钟内不开仓
CLOSEMINUTE<=5,CLOSEOUT;//收盘前5分钟清仓
AUTOFILTER;
`;

const CLOSEMINUTE1 = new MySymbol();
CLOSEMINUTE1.label = "CLOSEMINUTE1";
CLOSEMINUTE1.description = "距收盘前时间";
CLOSEMINUTE1.insertText = "";
CLOSEMINUTE1.body = "CLOSEMINUTE1";
CLOSEMINUTE1.kind = MySymbolKind.Function;
CLOSEMINUTE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSEMINUTE1.functionType = MyFunctionType.TimeFunction;
CLOSEMINUTE1.returnType = MyFunctionReturnType.None;
CLOSEMINUTE1.parameters = MySymbol.createParametersFromStrings([]);
CLOSEMINUTE1.detail = "距收盘前时间";
CLOSEMINUTE1.documentation = `
CLOSEMINUTE1,返回当前时间距离闭市前的时间（单位：分钟），方便闭市前及时平仓
CLOSEMINUTE1，返回距离收盘前的分钟数。

注：
1、该函数只能用于指令价模型。
2、
历史K线：该函数返回K线结束时间距离收盘的分钟数。
盘中：该函数返回K线当前时间距离收盘的分钟数。
3、该函数需要在分钟，小时，日线周期使用；不支持在TICK周期，秒周期，量能周期，周线及以上周期使用。
4、该函数返回值包含小结和午休的时间。
5、CLOSEMINUTE1返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，夜盘收盘不是当日收盘，15点收盘才算作当日收盘。
7、CLOSEMINUTE1在合约最后交易日，返回实际收盘时间。
8、CLOSEMINUTE1加载到主力合约上，主力换月和合约最后交易日在同一天，则按照最后交易日的收盘时间计算，主力换月和合约最后交易日不在同一天，那么按照正常的非最后交易日进行计算。
9、该函数不支持和CLOSESEC1同时使用。
10、CLOSEMINUTE1与逐分钟回测函数CHECKSIG_MIN 、MULTSIG_MIN连用，想实现日内闭式前及时平仓，CLOSEMINUTE1的参数取值需大于1，即CLOSEMINUTE1需<=大于1 的值。

例：
CROSS(C,MA(C,5)),BK;//最新价上穿五周期均线，买开
MULTSIG(0,0,1,0);//使用TICK数据回测，出信号立即下单，不复核
CLOSEMINUTE1<=1,CLOSEOUT;//收盘前1分钟，清仓
AUTOFILTER;
`;

const CLOSEMINUTEEVERY = new MySymbol();
CLOSEMINUTEEVERY.label = "CLOSEMINUTEEVERY";
CLOSEMINUTEEVERY.description = "距小节结束时间";
CLOSEMINUTEEVERY.insertText = "";
CLOSEMINUTEEVERY.body = "CLOSEMINUTEEVERY()";
CLOSEMINUTEEVERY.kind = MySymbolKind.Function;
CLOSEMINUTEEVERY.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSEMINUTEEVERY.functionType = MyFunctionType.TimeFunction;
CLOSEMINUTEEVERY.returnType = MyFunctionReturnType.None;
CLOSEMINUTEEVERY.parameters = MySymbol.createParametersFromStrings([]);
CLOSEMINUTEEVERY.detail = "距小节结束时间";
CLOSEMINUTEEVERY.documentation = `
CLOSEMINUTEEVERY(N),返回K线距离每个小节结束的时间（单位：分钟），N为第几个小节，方便小节前及时平仓
CLOSEMINUTEEVERY(N)，返回K线距离小节结束的分钟数。

用法：
CLOSEMINUTEEVERY(N),返回距离第N个小节结束的分钟数。N为参数，表示第几个小节（交易时间段）
以沪金合约为例。N=1,第一小节为21：00到次日2点30;N=2，第二小节为上午9:00-10：15；N=3,第三小节为上午10：30到11:30；N=4,第四小节为13:00-15:00

注：
1、该函数只能用于收盘价模型，返回当根K线开始时间距离小节结束的分钟数。
2、该函数与CLOSEOUT指令同时使用时：
K线走完前：返回K线当前时间距离小节结束的分钟数。
历史K线：返回K线结束时间距离小节结束的分钟数。
3、该函数需要在分钟，小时周期使用；不支持在TICK周期，秒周期，量能周期，日线及以上周期使用。
4、该函数的返回值包含小结和午休的时间。
5、CLOSEMINUTEEVERY返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，第一个小节时间指加载合约的夜盘交易时间段。
7、该函数不支持在跨周期、跨合约中作为被引用指标使用。
8、该函数不支持和CLOSESECEVERY同时使用。

例：
CROSS(C,MA(C,5)),BK;//收盘价上穿五周期均线，开仓
CLOSEMINUTEEVERY(1)<=10,CLOSEOUT;//第一个小节结束前10分钟，清仓
AUTOFILTER;
`;

const CLOSEMINUTEEVERY1 = new MySymbol();
CLOSEMINUTEEVERY1.label = "CLOSEMINUTEEVERY1";
CLOSEMINUTEEVERY1.description = "距小节结束时间";
CLOSEMINUTEEVERY1.insertText = "";
CLOSEMINUTEEVERY1.body = "CLOSEMINUTEEVERY1()";
CLOSEMINUTEEVERY1.kind = MySymbolKind.Function;
CLOSEMINUTEEVERY1.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSEMINUTEEVERY1.functionType = MyFunctionType.TimeFunction;
CLOSEMINUTEEVERY1.returnType = MyFunctionReturnType.None;
CLOSEMINUTEEVERY1.parameters = MySymbol.createParametersFromStrings([]);
CLOSEMINUTEEVERY1.detail = "距小节结束时间";
CLOSEMINUTEEVERY1.documentation = `
CLOSEMINUTEEVERY1(N),返回当前时间距离每个小节结束的时间（单位：分钟），N为第几个小节，方便小节前及时平仓
CLOSEMINUTEEVERY1(N),返回距离小节结束的分钟数

用法：
CLOSEMINUTEEVERY1(N),返回距离第N个小节结束的分钟数。N为参数，表示第几个小节（交易时间段）
以沪金合约为例。N=1,第一小节为21：00到次日2点30;N=2，第二小节为上午9:00-10：15；N=3,第三小节为上午10：30到11:30；N=4,第四小节为13:00-15:00

注：
1、该函数只能用于指令价模型。
2、
历史K线：该函数返回K线结束时间距离小节结束的分钟数。
盘中：该函数返回K线当前时间距离小节结束的分钟数。
3、该函数需要在分钟，小时，日线周期使用；不支持在TICK周期，秒周期，量能周期，周线及以上周期使用。
4、CLOSEMINUTEEVERY1返回的是交易所的时间，不是本机的时间。
5、对于夜盘合约，第一个小节时间指加载合约的夜盘交易时间段
6、该函数不支持和CLOSESECEVERY1同时使用。
7、CLOSEMINUTEEVERY1与逐分钟回测函数CHECKSIG_MIN 、MULTSIG_MIN连用，想实现小节结束前及时平仓，CLOSEMINUTEEVERY1的取值需大于1，即CLOSEMINUTEEVERY1(N)需<=大于1 的值。

例：
CROSS(C,MA(C,5)),BK;//最新价上穿五周期均线，买开
MULTSIG(0,0,1,0);//使用TICK数据回测，出信号立即下单，不复核
CLOSEMINUTEEVERY1(2)<=1,SP;//第二小节结束前平仓
AUTOFILTER;
`;

const CLOSESEC = new MySymbol();
CLOSESEC.label = "CLOSESEC";
CLOSESEC.description = "距收盘前时间（秒数）";
CLOSESEC.insertText = "";
CLOSESEC.body = "CLOSESEC";
CLOSESEC.kind = MySymbolKind.Function;
CLOSESEC.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSESEC.functionType = MyFunctionType.TimeFunction;
CLOSESEC.returnType = MyFunctionReturnType.None;
CLOSESEC.parameters = MySymbol.createParametersFromStrings([]);
CLOSESEC.detail = "距收盘前时间（秒数）";
CLOSESEC.documentation = `
CLOSESEC,返回K线开始时间距离闭市前的时间（单位：秒），方便闭市前及时平仓
CLOSESEC，返回K线开始时间距离收盘前的秒数。

注：
1、该函数只能用于收盘价模型。
2、该函数返回当根K线开始时间距离收盘的秒数。
3、该函数需要加载到秒周期使用；不支持在TICK周期，量能周期，分钟及以上周期使用。
4、该函数的返回值包含小结和午休的时间。
5、CLOSESEC返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，夜盘收盘不是当日收盘，15点收盘才算作当日收盘。
7、CLOSESEC在合约最后交易日，返回实际收盘时间。
8、CLOSESEC加载到主力合约上，主力换月和合约最后交易日在同一天，则按照最后交易日的收盘时间计算，主力换月和合约最后交易日不在同一天，那么按照正常的非最后交易日进行计算。
9、该函数不支持和CLOSEMINUTE同时使用。

例：
CROSS(C,MA(C,5))&&CLOSESEC>15,BK;//十五秒周期上，收盘价上穿五周期均线，开仓，当天最后一根K线不交易
CLOSESEC<=15,SP;//15秒周期上，最后一根K线尾盘平仓
CLOSEKLINE(1,5);//收盘前最后一根K线提前5秒判断K线走完
AUTOFILTER;
`;

const CLOSESEC1 = new MySymbol();
CLOSESEC1.label = "CLOSESEC1";
CLOSESEC1.description = "距收盘前时间（秒数）";
CLOSESEC1.insertText = "";
CLOSESEC1.body = "CLOSESEC1";
CLOSESEC1.kind = MySymbolKind.Function;
CLOSESEC1.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSESEC1.functionType = MyFunctionType.TimeFunction;
CLOSESEC1.returnType = MyFunctionReturnType.None;
CLOSESEC1.parameters = MySymbol.createParametersFromStrings([]);
CLOSESEC1.detail = "距收盘前时间（秒数）";
CLOSESEC1.documentation = `
CLOSESEC1,返回当前时间距离闭市前的时间（单位：秒），方便闭市前及时平仓
CLOSESEC1，返回距离收盘前的秒数。

注：
1、该函数只能用于指令价模型。
2、
历史K线：该函数返回K线结束时间距离收盘的秒数。
盘中：该函数返回K线当前时间距离收盘的秒数。
3、该函数不支持在TICK周期，量能周期使用。
4、该函数返回值包含小结和午休的时间。
5、CLOSESEC1返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，夜盘收盘不是当日收盘，15点收盘才算作当日收盘。
7、CLOSESEC1在合约最后交易日，返回实际收盘时间。
8、CLOSESEC1加载到主力合约上，主力换月和合约最后交易日在同一天，则按照最后交易日的收盘时间计算，主力换月和合约最后交易日不在同一天，那么按照正常的非最后交易日进行计算。
9、该函数不支持和CLOSEMINUTE1同时使用。

例：
CROSS(C,MA(C,5)),BK;//最新价上穿五周期均线，买开
MULTSIG(0,0,1,0);//使用TICK数据回测，出信号立即下单，不复核
CLOSESEC1<=5,CLOSEOUT;//收盘前五秒钟，清仓。
AUTOFILTER;
`;

const CLOSESECEVERY = new MySymbol();
CLOSESECEVERY.label = "CLOSESECEVERY";
CLOSESECEVERY.description = "距小节结束时间（秒）";
CLOSESECEVERY.insertText = "";
CLOSESECEVERY.body = "CLOSESECEVERY()";
CLOSESECEVERY.kind = MySymbolKind.Function;
CLOSESECEVERY.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSESECEVERY.functionType = MyFunctionType.TimeFunction;
CLOSESECEVERY.returnType = MyFunctionReturnType.None;
CLOSESECEVERY.parameters = MySymbol.createParametersFromStrings([]);
CLOSESECEVERY.detail = "距小节结束时间（秒）";
CLOSESECEVERY.documentation = `
CLOSESECEVERY(N),返回K线开始时间距离每个小节结束的时间（单位：秒），N为第几个小节，方便小节前及时平仓
CLOSESECEVERY(N) 返回K线开始时间距离小节结束的秒数

用法：
CLOSESECEVERY(N)，返回K线开始时间距离第N个小节结束的秒数。N为参数，表示第几个小节（交易时间段）
以沪金合约为例。N=1,第一小节为21：00到次日2点30;N=2，第二小节为上午9:00-10：15；N=3,第三小节为上午10：30到11:30；N=4,第四小节为13:00-15:00

注：
1、该函数只能用于收盘价模型。
2、该函数返回当根K线开始时间距离小节结束的秒数。
3、该函数需要加载到秒周期使用；不支持在TICK周期，量能周期，分钟及以上周期使用。
4、CLOSESECEVERY返回的是交易所的时间，不是本机的时间。
5、对于夜盘合约，第一个小节时间指加载合约的夜盘交易时间段
6、该函数不支持和CLOSEMINUTEEVERY同时使用。

例：
CROSS(C,MA(C,5)),BK;//十五秒周期上，收盘价上穿五周期均线，开仓
CLOSESECEVERY(1)<=15,SP;//15秒周期上，第一小节结束前平仓
CLOSEKLINE(1,5);//以收盘时间为结束时间的K线提前5秒判断K线走完
AUTOFILTER;
`;

const CLOSESECEVERY1 = new MySymbol();
CLOSESECEVERY1.label = "CLOSESECEVERY1";
CLOSESECEVERY1.description = "距小节结束时间（秒）";
CLOSESECEVERY1.insertText = "";
CLOSESECEVERY1.body = "CLOSESECEVERY1()";
CLOSESECEVERY1.kind = MySymbolKind.Function;
CLOSESECEVERY1.marketType = MyMarketType.TPlusZeroStrategyFunction;
CLOSESECEVERY1.functionType = MyFunctionType.TimeFunction;
CLOSESECEVERY1.returnType = MyFunctionReturnType.None;
CLOSESECEVERY1.parameters = MySymbol.createParametersFromStrings([]);
CLOSESECEVERY1.detail = "距小节结束时间（秒）";
CLOSESECEVERY1.documentation = `
CLOSESECEVERY1(N),返回当前时间距离每个小节结束的时间（单位：秒），N为第几个小节，方便小节前及时平仓
CLOSESECEVERY1(N) 返回距离小节结束前的秒数

用法：
CLOSESECEVERY1(N),返回距离第N个小节结束的秒数。N为参数，表示第几个小节（交易时间段）
以沪金合约为例。N=1,第一小节为21：00到次日2点30;N=2，第二小节为上午9:00-10：15；N=3,第三小节为上午10：30到11:30；N=4,第四小节为13:00-15:00

注：
1、该函数只能用于指令价模型。
2、
历史K线：该函数返回K线结束时间距离小节结束的秒数。
盘中：该函数返回K线当前时间距离小节结束的秒数。
3、该函数不支持在TICK周期，量能周期使用。
4、CLOSESECEVERY1返回的是交易所的时间，不是本机的时间。
5、对于夜盘合约，第一个小节时间指加载合约的夜盘交易时间段
6、该函数不支持和CLOSEMINUTEEVERY1同时使用。

例：
CROSS(C,MA(C,5)),BK;//最新价上穿五周期均线，买开
MULTSIG(0,0,1,0);//使用TICK数据回测，出信号立即下单，不复核
CLOSESECEVERY1(1)<=5,CLOSEOUT;//第一小节结束前五秒钟，清仓。
AUTOFILTER;
`;

const CODELIKE = new MySymbol();
CODELIKE.label = "CODELIKE";
CODELIKE.description = "模糊股票代码函数";
CODELIKE.insertText = "";
CODELIKE.body = "CODELIKE('')";
CODELIKE.kind = MySymbolKind.Function;
CODELIKE.marketType = MyMarketType.BasicFunction;
CODELIKE.functionType = MyFunctionType.LogicalJudgmentFunction;
CODELIKE.returnType = MyFunctionReturnType.None;
CODELIKE.parameters = MySymbol.createParametersFromStrings([]);
CODELIKE.detail = "模糊股票代码函数";
CODELIKE.documentation = `
CODELIKE('')模糊股票代码函数。CODELIKE('600')判断股票代码是否以600开头。是返回1（YES）,不是返回0（NO）。
CODELIKE('') 模糊股票代码函数。

用法：
CODELIKE('600') 判断股票代码是否以600开头。是返回1（YES）,不是返回0（NO）。

注：
1、判断的内容用单引号标注。 
2、该函数不支持美股、港股。

例：
C>O&&CODELIKE('300')=1;//最后一根K线为阳线并且代码以300开头（创业版）。
`;

const COEFFICIENTR = new MySymbol();
COEFFICIENTR.label = "COEFFICIENTR";
COEFFICIENTR.description = "皮尔森相关系数";
COEFFICIENTR.insertText = "";
COEFFICIENTR.body = "COEFFICIENTR( , , )";
COEFFICIENTR.kind = MySymbolKind.Function;
COEFFICIENTR.marketType = MyMarketType.BasicFunction;
COEFFICIENTR.functionType =
    MyFunctionType.MathematicalStatisticsFunction;
COEFFICIENTR.returnType = MyFunctionReturnType.None;
COEFFICIENTR.parameters = MySymbol.createParametersFromStrings([]);
COEFFICIENTR.detail = "皮尔森相关系数";
COEFFICIENTR.documentation = `
COEFFICIENTR(X,Y,N)求X、Y在N个周期内的皮尔森相关系数
COEFFICIENTR(X,Y,N) 求X、Y在N个周期内的皮尔森相关系数。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值。
3、N为0时，该函数返回空值。
4、N为空值，该函数返回空值。
5、N可以为变量。

算法举例：计算COEFFICIENTR(O,C,3);在最近一根K线上的值。
用麦语言函数可以表示如下：
(((O-MA(O,3))*(C-MA(C,3))+(REF(O,1)-MA(O,3))*(REF(C,1)-MA(C,3))+(REF(O,2)-MA(O,3))*(REF(C,2)-MA(C,3))) /(STD(O,3)*STD(C,3)))/(3-1);

例：
CC: C;//定义文华商品的收盘价
保存指标，命名为AA
加载豆粕合约的指标为：
#CALL[7186,AA]  AS  VAR
C1:VAR.CC;//跨合约引用文华商品的收盘价
COEFFICIENTR(C1,C,10);//求文华商品和豆粕在10个周期内的皮尔森相关系数。
//皮尔森相关系数是衡量两个随机变量之间的相关程度的指标
`;

const COLORSTICK = new MySymbol();
COLORSTICK.label = "COLORSTICK";
COLORSTICK.description = "画柱线";
COLORSTICK.insertText = "";
COLORSTICK.body = "COLORSTICK";
COLORSTICK.kind = MySymbolKind.Function;
COLORSTICK.marketType = MyMarketType.BasicFunction;
COLORSTICK.functionType = MyFunctionType.DrawingFunction;
COLORSTICK.returnType = MyFunctionReturnType.None;
COLORSTICK.parameters = MySymbol.createParametersFromStrings([]);
COLORSTICK.detail = "画柱线";
COLORSTICK.documentation = `
COLORSTICK画柱线，大于0为红色，小于0为青色
COLORSTICK 画柱线。

用法：X,COLORSTICK;画柱线，柱高为X的值，X大于0为红色柱线，X小于0为青色柱线。

注：不支持将该函数定义为变量，即不支持下面的写法：A:COLORSTICK；

例：
C-O,COLORSTICK;//画柱线，阳线时画红色向上柱线，阴线时画青色的向下柱线。
`;

const CONDBARS = new MySymbol();
CONDBARS.label = "CONDBARS";
CONDBARS.description = "取得最近满足A,B条件的K线间周期数";
CONDBARS.insertText = "";
CONDBARS.body = "CONDBARS(,)";
CONDBARS.kind = MySymbolKind.Function;
CONDBARS.marketType = MyMarketType.BasicFunction;
CONDBARS.functionType = MyFunctionType.FinancialStatisticsFunction;
CONDBARS.returnType = MyFunctionReturnType.None;
CONDBARS.parameters = MySymbol.createParametersFromStrings([]);
CONDBARS.detail = "取得最近满足A,B条件的K线间周期数";
CONDBARS.documentation = `
CONDBARS(A,B),取得最近满足A、B条件的k线间周期数
CONDBARS(A,B);取得最近的满足A、B条件的k线间周期数
注意：
1、该函数返回周期数不包含最后满足条件的K线
2、距离当前K线最近的满足的条件为B条件，则该函数返回值为最后一次满足A条件的K线到满足B条件的K线的周期数（A条件满足后的第一次满足B条件的K线)
距离当前K线最近的满足的条件为A条件，则该函数返回值为最后一次满足B条件的K线到满足A条件的K线的周期数（B条件满足后的第一次满足A条件的K线)

例1：
MA5:=MA(C,5);//5周期均线
MA10:=MA(C,10);//10周期均线
CONDBARS(CROSSUP(MA5,MA10),CROSSDOWN(MA5,MA10));//最近一次满足5周期均线上穿10周期均线与5周期均线下穿10周期均线之间的周期数
`;

const COS = new MySymbol();
COS.label = "COS";
COS.description = "余弦";
COS.insertText = "";
COS.body = "COS( )";
COS.kind = MySymbolKind.Function;
COS.marketType = MyMarketType.BasicFunction;
COS.functionType = MyFunctionType.MathFunction;
COS.returnType = MyFunctionReturnType.None;
COS.parameters = MySymbol.createParametersFromStrings([]);
COS.detail = "余弦";
COS.documentation = `
COS(X),求X的余弦值
COS(X)：返回X的余弦值。

注：
1、X的取值为R（实数集）
2、值域为[-1，1]

例1：
COS(-1.57);//返回-1.57的余弦值
例2：
COS(1.57);//返回1.57的余弦值
`;

const COST = new MySymbol();
COST.label = "COST";
COST.description = "成本分布情况";
COST.insertText = "";
COST.body = "COST( )";
COST.kind = MySymbolKind.Function;
COST.marketType = MyMarketType.BasicFunction;
COST.functionType = MyFunctionType.FinancialStatisticsFunction;
COST.returnType = MyFunctionReturnType.None;
COST.parameters = MySymbol.createParametersFromStrings([]);
COST.detail = "成本分布情况";
COST.documentation = `
COST(X)成本分布情况。
COST(X) 成本分布情况。
用法:
COST(X) 表示X%获利盘的价格,即有X%的持仓成本在该价格下，其余(100-X)%的持仓成本在该价格以上，是套牢盘。 
例如COST(1);返回10.5表示1%获利盘的价格是10.5。

注：
1、X的取值范围为(0-100)（0、100返回无效值），并且X可以为变量。
2、该函数仅对日线分析周期有效。

算法：
根据获利盘和套牢盘的比例求得价格。
`;

const COUNT = new MySymbol();
COUNT.label = "COUNT";
COUNT.description = "统计总数";
COUNT.insertText = "";
COUNT.body = "COUNT( , )";
COUNT.kind = MySymbolKind.Function;
COUNT.marketType = MyMarketType.BasicFunction;
COUNT.functionType = MyFunctionType.FinancialStatisticsFunction;
COUNT.returnType = MyFunctionReturnType.None;
COUNT.parameters = MySymbol.createParametersFromStrings([]);
COUNT.detail = "统计总数";
COUNT.documentation = `
COUNT(X,N),统计N周期中满足X条件的周期数。若N为0则从第一个周期开始
COUNT(COND,N)：统计N周期中满足COND条件的周期数。

注：
1、N包含当前k线。
2、若N为0则从第一个有效值算起；
3、当N为有效值，但当前的k线数不足N根，从第一根统计到当前周期。
4、N 为空值时返回值为空值 。
5、N可以为变量

例1：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，当日k线数。
M:COUNT(ISUP,N);//统计分钟周期上开盘以来阳线的根数。
例2：
MA5:=MA(C,5);//定义5周期均线
MA10:=MA(C,10);//定义10周期均线
M:COUNT(CROSSUP(MA5,MA10),0);//统计从申请到的行情数据以来到当前这段时间内，5周期均线上穿10周期均线的次数。
`;

const COUNTGROUPSIG = new MySymbol();
COUNTGROUPSIG.label = "COUNTGROUPSIG";
COUNTGROUPSIG.description = "统计N周期内，分组为group的X信号的数量";
COUNTGROUPSIG.insertText = "";
COUNTGROUPSIG.body = "COUNTGROUPSIG( , , )";
COUNTGROUPSIG.kind = MySymbolKind.Function;
COUNTGROUPSIG.marketType = MyMarketType.TPlusZeroStrategyFunction;
COUNTGROUPSIG.functionType = MyFunctionType.SignalLoggingFunction;
COUNTGROUPSIG.returnType = MyFunctionReturnType.None;
COUNTGROUPSIG.parameters = MySymbol.createParametersFromStrings([]);
COUNTGROUPSIG.detail = "统计N周期内，分组为group的X信号的数量";
COUNTGROUPSIG.documentation = `
COUNTGROUPSIG(X,N,'group');统计N周期内,分组为group的X信号的数量X可以为BK、SK、SP、BP、SPK、BPK、CLOSEOUT、STOP
COUNTGROUPSIG(X,N,'group'); 统计N周期内，分组为group的X信号的数量

用法：
X可以为BK、SK、SP、BP、SPK、BPK、CLOSEOUT、STOP

注：
1、统计周期时，
（1）包含当前k线； 
（2）若N为0则从第一个有效值算起；
（3）当N为有效值，但当前的k线数不足N根，从第一根统计到当前周期。
（4）N 为空值时返回值为空值 。
（5）N可以为变量
2、统计信号时：
（1）信号执行方式选择为K线走完确认信号或者K线走完复核（例如：在模型中写入CHECKSIG(SIG,'A',0,'D',0,0);），不包含当根K线上未固定的信号，即返回已经固定的信号个数
（2）信号执行方式选择为不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），包含当根K线上信号发出并且固定后的信号
3、由BPK指令产生的BK信号按BPK信号处理，SPK指令产生的SK信号同理。

例：
N:=BARSLAST(DATE<>REF(DATE,1))+1;
BKN:=COUNTGROUPSIG(BK,N,'A');
MA5:=MA(C,5);
BKN=0&&C>MA5,BK('A',1);//当日内日未出现过BK信号并且最新价大于5周期均线，则买开仓
`;

const COUNTSIG = new MySymbol();
COUNTSIG.label = "COUNTSIG";
COUNTSIG.description = "统计N周期内，X信号的数量";
COUNTSIG.insertText = "";
COUNTSIG.body = "COUNTSIG(,)";
COUNTSIG.kind = MySymbolKind.Function;
COUNTSIG.marketType = MyMarketType.TPlusZeroStrategyFunction;
COUNTSIG.functionType = MyFunctionType.SignalLoggingFunction;
COUNTSIG.returnType = MyFunctionReturnType.None;
COUNTSIG.parameters = MySymbol.createParametersFromStrings([]);
COUNTSIG.detail = "统计N周期内，X信号的数量";
COUNTSIG.documentation = `
COUNTSIG(X,N);统计N周期内,X信号的数量X可以为BK、SK、SP、BP、SPK、BPK、CLOSEOUT、STOP
COUNTSIG(X,N); 统计N周期内，X信号的数量

用法：
X可以为BK、SK、SP、BP、SPK、BPK、CLOSEOUT、STOP

注：
1、统计周期时，
（1）包含当前k线； 
（2）若N为0则从第一个有效值算起；
（3）当N为有效值，但当前的k线数不足N根，从第一根统计到当前周期。
（4）N 为空值时返回值为空值 。
（5）N可以为变量
2、统计信号时：
（1）信号执行方式选择为K线走完确认信号或者K线走完复核（例如：在模型中写入CHECKSIG(SIG,'A',0,'D',0,0);），不包含当根K线上未固定的信号，即返回已经固定的信号个数
（2）信号执行方式选择为不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），包含当根K线上信号发出并且固定后的信号
3、由BPK指令产生的BK信号按BPK信号处理，SPK指令产生的SK信号同理。

例：
N:=BARSLAST(DATE<>REF(DATE,1))+1;
BKN:=COUNTSIG(BK,N);
MA5:=MA(C,5);
BKN=0&&C>MA5,BK;//当日内日未出现过BK信号并且最新价大于5周期均线，则买开仓
`;

const COVAR = new MySymbol();
COVAR.label = "COVAR";
COVAR.description = "协方差";
COVAR.insertText = "";
COVAR.body = "COVAR( , , )";
COVAR.kind = MySymbolKind.Function;
COVAR.marketType = MyMarketType.BasicFunction;
COVAR.functionType = MyFunctionType.MathematicalStatisticsFunction;
COVAR.returnType = MyFunctionReturnType.None;
COVAR.parameters = MySymbol.createParametersFromStrings([]);
COVAR.detail = "协方差";
COVAR.documentation = `
COVAR(X,Y,N)求X、Y在N个周期内的协方差
COVAR(X,Y,N) 求X、Y在N个周期内的协方差。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值。
3、N为0时，该函数返回空值。
4、N为空值，该函数返回空值。
5、N可以为变量。

算法举例：计算COVAR(O,C,3);在最近一根K线上的值。
用麦语言函数可以表示如下：
(((O-MA(O,3))*(C-MA(C,3))+(REF(O,1)-MA(O,3))*(REF(C,1)-MA(C,3))+(REF(O,2)-MA(O,3))*(REF(C,2)-MA(C,3))) )/3;

例：
CC: C;//定义文华商品的收盘价
保存指标，命名为AA
加载豆粕合约的指标为：
#CALL[7186,AA]  AS  VAR
C1:VAR.CC;//跨合约引用文华商品的收盘价
COVAR(C1,C,10);//求文华商品和豆粕在10个周期内的协方差。
//两个不同变量之间的方差就是协方差，如果两个变量的变化趋势一致，那么两个变量之间的协方差就是正值；如果两个变量的变化趋势相反，那么两个变量之间的协方差就是负值。
`;

const CROSS = new MySymbol();
CROSS.label = "CROSS";
CROSS.description = "交叉函数";
CROSS.insertText = "";
CROSS.body = "CROSS( , )";
CROSS.kind = MySymbolKind.Function;
CROSS.marketType = MyMarketType.BasicFunction;
CROSS.functionType = MyFunctionType.LogicalJudgmentFunction;
CROSS.returnType = MyFunctionReturnType.None;
CROSS.parameters = MySymbol.createParametersFromStrings([]);
CROSS.detail = "交叉函数";
CROSS.documentation = `
CROSS(A,B),A从下方向上穿过B时取1(Yes)，否则取0(No)
CROSS(A,B) 表示A从下方向上穿过B，成立返回1(Yes)，否则返回0(No)

注：
1、满足穿越的条件必须上根k线满足A<=B，当根k线满足A>B才被认定为穿越。

例1：
CROSS(CLOSE,MA(CLOSE,5));//表示收盘线从下方向上穿过5周期均线
`;

const CROSS2 = new MySymbol();
CROSS2.label = "CROSS2";
CROSS2.description = "二次交叉函数";
CROSS2.insertText = "";
CROSS2.body = "CROSS2( , , )";
CROSS2.kind = MySymbolKind.Function;
CROSS2.marketType = MyMarketType.BasicFunction;
CROSS2.functionType = MyFunctionType.LogicalJudgmentFunction;
CROSS2.returnType = MyFunctionReturnType.None;
CROSS2.parameters = MySymbol.createParametersFromStrings([]);
CROSS2.detail = "二次交叉函数";
CROSS2.documentation = `
CROSS2(A,B,N),表示N个周期内当A从下方向上穿过B的次数为偶数次偶数次时返回1(Yes)，否则返回0(No)
CROSS2(A,B,N) 表示N个周期内当A从下方向上穿B偶数次。

注：
1、若N为0，则从第一个有效的值开始算。
2、当N为有效值，但当前的k线数不足N根，或者N空值的情况下，代表不成立，该函数返回0
3、N可以为变量

例1：
MA5:=MA(C,5);
CROSS2(C,MA5,10) 返回值为1(Yes)，表示当前周期是10个周期内(包含当前周期)收盘价从下方向上穿过5周期均线的第偶数次；返回值为0(No)，表示当前周期不是10个周期内(包含当前周期)收盘价从下方向上穿过5周期均线的第偶数次
`;

const CROSSDOT = new MySymbol();
CROSSDOT.label = "CROSSDOT";
CROSSDOT.description = "小圆圈线";
CROSSDOT.insertText = "";
CROSSDOT.body = "CROSSDOT";
CROSSDOT.kind = MySymbolKind.Function;
CROSSDOT.marketType = MyMarketType.BasicFunction;
CROSSDOT.functionType = MyFunctionType.DrawingFunction;
CROSSDOT.returnType = MyFunctionReturnType.None;
CROSSDOT.parameters = MySymbol.createParametersFromStrings([]);
CROSSDOT.detail = "小圆圈线";
CROSSDOT.documentation = `

小圆圈线。
用法：
CROSSDOT 画小圆圈线。

注：
1、该函数支持设置颜色。
2、不支持将函数定义为变量，即不支持下面的写法：A:CROSSDOT；

例：MA5:MA(C,5),CROSSDOT,COLORCYAN;//用小圆圈线画5周期均线，圆圈线显示为青色。
`;

const CROSSDOWN = new MySymbol();
CROSSDOWN.label = "CROSSDOWN";
CROSSDOWN.description = "向下穿越";
CROSSDOWN.insertText = "";
CROSSDOWN.body = "CROSSDOWN( , )";
CROSSDOWN.kind = MySymbolKind.Function;
CROSSDOWN.marketType = MyMarketType.BasicFunction;
CROSSDOWN.functionType = MyFunctionType.LogicalJudgmentFunction;
CROSSDOWN.returnType = MyFunctionReturnType.None;
CROSSDOWN.parameters = MySymbol.createParametersFromStrings([]);
CROSSDOWN.detail = "向下穿越";
CROSSDOWN.documentation = `
CROSSDOWN(A,B),表示当A从上方向下穿过B时返回1(Yes)，否则返回0(No)
CROSSDOWN(A,B)：表示当A从上方向下穿B，成立返回1(Yes)，否则返回0(No)

注：
1、CROSSDOWN(A,B)等同于CROSS(B,A)，CROSSDOWN(A,B)编写更利于理解

例1：
MA5:=MA(C,5);
MA10:=MA(C,10);
CROSSDOWN(MA5,MA10),SK;//MA5下穿MA10卖开仓
//CROSSDOWN(MA5,MA10),SK;  与  CROSSDOWN(MA5,MA10)=1,SK;表达同等意义
`;

const CROSSUP = new MySymbol();
CROSSUP.label = "CROSSUP";
CROSSUP.description = "向上穿越";
CROSSUP.insertText = "";
CROSSUP.body = "CROSSUP( , )";
CROSSUP.kind = MySymbolKind.Function;
CROSSUP.marketType = MyMarketType.BasicFunction;
CROSSUP.functionType = MyFunctionType.LogicalJudgmentFunction;
CROSSUP.returnType = MyFunctionReturnType.None;
CROSSUP.parameters = MySymbol.createParametersFromStrings([]);
CROSSUP.detail = "向上穿越";
CROSSUP.documentation = `
CROSSUP(A,B),表示当A从下方向上穿过B时返回1(Yes)，否则返回0(No)
CROSSUP(A,B) 表当A从下方向上穿过B，成立返回1(Yes)，否则返回0(No)

注：
1、CROSSUP(A,B)等同于CROSS(A,B)，CROSSUP(A,B)编写更利于理解。

例1：
MA5:=MA(C,5);
MA10:=MA(C,10);
CROSSUP(MA5,MA10),BK;//MA5上穿MA10，买开仓。
//CROSSUP(MA5,MA10),BK; 与  CROSSUP(MA5,MA10)=1,BK;表达同等意义
`;

const CUBE = new MySymbol();
CUBE.label = "CUBE";
CUBE.description = "立方函数";
CUBE.insertText = "";
CUBE.body = "CUBE( )";
CUBE.kind = MySymbolKind.Function;
CUBE.marketType = MyMarketType.BasicFunction;
CUBE.functionType = MyFunctionType.MathFunction;
CUBE.returnType = MyFunctionReturnType.None;
CUBE.parameters = MySymbol.createParametersFromStrings([]);
CUBE.detail = "立方函数";
CUBE.documentation = `
CUBE(X),求X的三次方
CUBE(X)：返回X的三次方。

例1：
CUBE(4);//求4的立方。
`;

const CURRENTDATE = new MySymbol();
CURRENTDATE.label = "CURRENTDATE";
CURRENTDATE.description = "返回当前的年月日";
CURRENTDATE.insertText = "";
CURRENTDATE.body = "CURRENTDATE";
CURRENTDATE.kind = MySymbolKind.Function;
CURRENTDATE.marketType = MyMarketType.BasicFunction;
CURRENTDATE.functionType = MyFunctionType.TimeFunction;
CURRENTDATE.returnType = MyFunctionReturnType.None;
CURRENTDATE.parameters = MySymbol.createParametersFromStrings([]);
CURRENTDATE.detail = "返回当前的年月日";
CURRENTDATE.documentation = `
CURRENTDATE返回当前的年月日
CURRENTDATE 返回当前的年月日。

注：
1、该日期是从1900年开始的日期，2000年以后的日期显示为1YYMMDD的形式，2000年以前的日期显示为YYDDMM的形式。例如2014年1月1日将返回1140101。
2、该函数返回的是计算当时的日期。
3、该函数返回的时间为本机时间。

例：
A:CURRENTDATE;//返回的是现在的本机时间。
`;

const CURRENTTIME = new MySymbol();
CURRENTTIME.label = "CURRENTTIME";
CURRENTTIME.description = "返回当前的时分秒";
CURRENTTIME.insertText = "";
CURRENTTIME.body = "CURRENTTIME";
CURRENTTIME.kind = MySymbolKind.Function;
CURRENTTIME.marketType = MyMarketType.BasicFunction;
CURRENTTIME.functionType = MyFunctionType.TimeFunction;
CURRENTTIME.returnType = MyFunctionReturnType.None;
CURRENTTIME.parameters = MySymbol.createParametersFromStrings([]);
CURRENTTIME.detail = "返回当前的时分秒";
CURRENTTIME.documentation = `
CURRENTTIME返回当前的时分秒
CURRENTTIME 返回当前的时分秒。

注：
1、返回值取值范围为0至235959。返回为HHMMSS的形式。
2、该函数返回的是计算当时的时间。
3、该函数返回的时间为本机时间。

例：
A:CURRENTTIME;//返回的是现在的本机时间。
`;

const DASH = new MySymbol();
DASH.label = "DASH";
DASH.description = "画虚线";
DASH.insertText = "";
DASH.body = "DASH";
DASH.kind = MySymbolKind.Function;
DASH.marketType = MyMarketType.BasicFunction;
DASH.functionType = MyFunctionType.DrawingFunction;
DASH.returnType = MyFunctionReturnType.None;
DASH.parameters = MySymbol.createParametersFromStrings([]);
DASH.detail = "画虚线";
DASH.documentation = `
DASH,画虚线
画虚线。
用法：
DASH 画虚线。

注：
1、该函数支持设置颜色。
2、不支持将函数定义为变量，即不支持下面的写法：A:DASH；

例：MA5:MA(C,5),DASH,COLORCYAN;//用虚线画5周期均线，显示为青色。
`;

const DASHDOT = new MySymbol();
DASHDOT.label = "DASHDOT";
DASHDOT.description = "画点虚线";
DASHDOT.insertText = "";
DASHDOT.body = "DASHDOT";
DASHDOT.kind = MySymbolKind.Function;
DASHDOT.marketType = MyMarketType.BasicFunction;
DASHDOT.functionType = MyFunctionType.DrawingFunction;
DASHDOT.returnType = MyFunctionReturnType.None;
DASHDOT.parameters = MySymbol.createParametersFromStrings([]);
DASHDOT.detail = "画点虚线";
DASHDOT.documentation = `
DASHDOT,画点虚线
画点虚线。
用法：
DASHDOT 画点虚线。

注：
1、该函数支持设置颜色。
2、不支持将函数定义为变量，即不支持下面的写法：A:DASHDOT；

例：MA5:MA(C,5),DASHDOT,COLORCYAN;//用点虚线画5周期均线，显示为青色。
`;

const DASHDOTDOT = new MySymbol();
DASHDOTDOT.label = "DASHDOTDOT";
DASHDOTDOT.description = "画双点虚线";
DASHDOTDOT.insertText = "";
DASHDOTDOT.body = "DASHDOTDOT";
DASHDOTDOT.kind = MySymbolKind.Function;
DASHDOTDOT.marketType = MyMarketType.BasicFunction;
DASHDOTDOT.functionType = MyFunctionType.DrawingFunction;
DASHDOTDOT.returnType = MyFunctionReturnType.None;
DASHDOTDOT.parameters = MySymbol.createParametersFromStrings([]);
DASHDOTDOT.detail = "画双点虚线";
DASHDOTDOT.documentation = `
DASHDOTDOT,画双点虚线
画双点虚线。
用法：
DASHDOTDOT 画双点虚线。

注：
1、该函数支持设置颜色。
2、不支持将函数定义为变量，即不支持下面的写法：A:DASHDOTDOT；

例：MA5:MA(C,5),DASHDOTDOT,COLORCYAN;//用双点虚线画5周期均线，显示为青色。
`;

const DATE = new MySymbol();
DATE.label = "DATE";
DATE.description = "取得某周期的日期数";
DATE.insertText = "";
DATE.body = "DATE";
DATE.kind = MySymbolKind.Function;
DATE.marketType = MyMarketType.BasicFunction;
DATE.functionType = MyFunctionType.TimeFunction;
DATE.returnType = MyFunctionReturnType.None;
DATE.parameters = MySymbol.createParametersFromStrings([]);
DATE.detail = "取得某周期的日期数";
DATE.documentation = `
DATE,取某周期的日期数（700101-331231）
DATE,返回某周期的日期数。

注：
1：DATE的取值范围为700101-331231(即1970年1月1日—2033年12月31日)。
2：DATE返回六位数字，YYMMDD，
3：DATE支持上海夜盘的使用，例如：2013年7月8日 21:00夜盘开盘，DATE返回值即为130709，返回的为收盘时对应的日期 ,即数据所属的交易的日期（周五周六晚上的数据返回的日期为下周一的日期）

例1：
BARSLAST(DATE<>REF(DATE,1))+1;//当天开盘以来共有多少根K线。
例2：
AA:DATE=130507&&TIME=1037;
HH:VALUEWHEN(AA=1,H);// 取201305071037分钟位置，同时取201305071037分钟k线位置最高价
`;

const DATE1 = new MySymbol();
DATE1.label = "DATE1";
DATE1.description = "返回某周期的日期数";
DATE1.insertText = "";
DATE1.body = "DATE1";
DATE1.kind = MySymbolKind.Function;
DATE1.marketType = MyMarketType.BasicFunction;
DATE1.functionType = MyFunctionType.TimeFunction;
DATE1.returnType = MyFunctionReturnType.None;
DATE1.parameters = MySymbol.createParametersFromStrings([]);
DATE1.detail = "返回某周期的日期数";
DATE1.documentation = `
DATE1返回某周期的日期数
DATE1：返回某周期的日期数。

注：
1、DATE1的取值范围为700101-1331231(即1970年1月1日-2033年12月31日)。
2、DATE1在2000年以前返回六位数字，YYMMDD，在2000年以后返回1YYMMDD的形式。
3、DATE1支持上海夜盘的使用，例如：2013年7月8日 21:00夜盘开盘，DATE1返回值即为1130709，返回的为收盘时对应的日期 ,即数据所属的交易的日期（周五周六晚上的数据返回的日期为下周一的日期）

例1：
A:=BARSLAST(DATE1<>REF(DATE1,1))+1;//定义变量A为当天开盘以来共有多少根K线。

例2：
AA:DATE1=1130507&&TIME=1037;
HH:VALUEWHEN(AA=1，H);// 取201305071037分钟位置，同时取201305071037分钟k线位置最高价
`;

const DAY = new MySymbol();
DAY.label = "DAY";
DAY.description = "取得某周期的日数";
DAY.insertText = "";
DAY.body = "DAY";
DAY.kind = MySymbolKind.Function;
DAY.marketType = MyMarketType.BasicFunction;
DAY.functionType = MyFunctionType.TimeFunction;
DAY.returnType = MyFunctionReturnType.None;
DAY.parameters = MySymbol.createParametersFromStrings([]);
DAY.detail = "取得某周期的日数";
DAY.documentation = `
DAY,取某周期的日数（1-31）
DAY,返回某一周期的日数。

注：
DAY取值范围为1-31。

例1：
DAY=3&&TIME=0915，BK;//当日起为3日，时间为9点15分时，买开。
例2：
N:BARSLAST(DATE<>REF(DATE,1))+1;
CC:IFELSE(DAY=1,VALUEWHEN(N=1,O),0);//当日期为1时，取开盘价，否则取值为0.
`;

const DAYBARPOS = new MySymbol();
DAYBARPOS.label = "DAYBARPOS";
DAYBARPOS.description = "当根k线为当天第几根k线";
DAYBARPOS.insertText = "";
DAYBARPOS.body = "DAYBARPOS";
DAYBARPOS.kind = MySymbolKind.Function;
DAYBARPOS.marketType = MyMarketType.BasicFunction;
DAYBARPOS.functionType = MyFunctionType.FinancialStatisticsFunction;
DAYBARPOS.returnType = MyFunctionReturnType.None;
DAYBARPOS.parameters = MySymbol.createParametersFromStrings([]);
DAYBARPOS.detail = "当根k线为当天第几根k线";
DAYBARPOS.documentation = `
DAYBARPOS当根k线为当天第几根k线
DAYBARPOS：返回当根k线是当天的第几根k线

注：
该函数返回当根k线是当天的第几根k线，日以上周期返回空值

例：
VALUEWHEN(DAYBARPOS=1,C);//取当天第一根K线的收盘价
`;

const DAYSTOEXPIRED = new MySymbol();
DAYSTOEXPIRED.label = "DAYSTOEXPIRED";
DAYSTOEXPIRED.description = "期货合约距最后交易日的天数";
DAYSTOEXPIRED.insertText = "";
DAYSTOEXPIRED.body = "DAYSTOEXPIRED()";
DAYSTOEXPIRED.kind = MySymbolKind.Function;
DAYSTOEXPIRED.marketType = MyMarketType.BasicFunction;
DAYSTOEXPIRED.functionType = MyFunctionType.TimeFunction;
DAYSTOEXPIRED.returnType = MyFunctionReturnType.None;
DAYSTOEXPIRED.parameters = MySymbol.createParametersFromStrings([]);
DAYSTOEXPIRED.detail = "期货合约距最后交易日的天数";
DAYSTOEXPIRED.documentation = `
DAYSTOEXPIRED(CODE)期货合约距最后交易日的天数,CODE为文华码
DAYSTOEXPIRED(CODE) 期货合约距最后交易日的天数。

用法：DAYSTOEXPIRED(CODE);取得合约的到期剩余天数。CODE为文华码。

注：
1、该函数返回期货合约距最后交易日的天数，其中包括最后交易日。
2、该函数只支持应用在日线及以下周期使用，在日周期以上的周期该函数返回值为0。

3、CODE位置：

  写入''时默认取当前合约。

  写入主连合约，返回对应的主力合约距最后交易日的天数。
  写入连续合约，返回对应的月份合约距最后交易日的天数。

  写入加权合约，返回值为0。

4、该函数不支持在外盘主连合约上使用。

例1：
A:DAYSTOEXPIRED('');//A返回当前加载合约的到期剩余天数。

例2：
A:=DAYSTOEXPIRED('')=1&&CLOSEMINUTE=5;//定义变量A为最后交易日收盘前五分钟。
`;

const DAYTRADE = new MySymbol();
DAYTRADE.label = "DAYTRADE";
DAYTRADE.description = "日内交易函数";
DAYTRADE.insertText = "";
DAYTRADE.body = "DAYTRADE";
DAYTRADE.kind = MySymbolKind.Function;
DAYTRADE.marketType = MyMarketType.TPlusZeroStrategyFunction;
DAYTRADE.functionType = MyFunctionType.CalculationControlFunction;
DAYTRADE.returnType = MyFunctionReturnType.None;
DAYTRADE.parameters = MySymbol.createParametersFromStrings([]);
DAYTRADE.detail = "日内交易函数";
DAYTRADE.documentation = `
DAYTRADE,日内交易函数
DAYTRADE 日内交易函数。

用法：
DAYTRADE 模型中写入该函数，信号和资金每天重新初始化进行计算，与历史割裂。

注：
1、该函数适用于小时、分钟以下周期，不支持日、自定义N日、周、月、季、年周期。
2、回测报告的出金/入金为日内的出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
4、（1）历史回测中，当日K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当日K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
DAYTRADE;//只用日内数据进行计算
`;

const DAYTRADE1 = new MySymbol();
DAYTRADE1.label = "DAYTRADE1";
DAYTRADE1.description = "日内交易函数";
DAYTRADE1.insertText = "";
DAYTRADE1.body = "DAYTRADE1";
DAYTRADE1.kind = MySymbolKind.Function;
DAYTRADE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
DAYTRADE1.functionType = MyFunctionType.CalculationControlFunction;
DAYTRADE1.returnType = MyFunctionReturnType.None;
DAYTRADE1.parameters = MySymbol.createParametersFromStrings([]);
DAYTRADE1.detail = "日内交易函数";
DAYTRADE1.documentation = `
DAYTRADE1,日内交易函数
DAYTRADE1 日内交易函数。

用法：
DAYTRADE1 模型中写入该函数，信号和资金每天重新初始化进行计算，与历史割裂，并且每一个函数只使用当日K线数据进行计算，历史数据不参与计算。

注：
1、该函数适用于小时、分钟以下周期，不支持日、自定义N日、周、月、季、年周期。
2、回测报告的出金/入金为日内的出金/入金的和。
3、不同函数对当天数据的引用不同，使用时需注意函数用法，如：
MA(X,N)函数N的取值：当天如果k线小于N根，则返回空值。如果k线为大于等于N根，则取N。
HHV(X,N)函数N的取值：当天如果k线小于N根，则返回实际根数，如果k线为大于等于N根，则取N。
4、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
5、（1）历史回测中，当日K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当日K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
DAYTRADE1;//只用日内数据进行计算
`;

const DEVSQ = new MySymbol();
DEVSQ.label = "DEVSQ";
DEVSQ.description = "取得数据偏差平方和";
DEVSQ.insertText = "";
DEVSQ.body = "DEVSQ( , )";
DEVSQ.kind = MySymbolKind.Function;
DEVSQ.marketType = MyMarketType.BasicFunction;
DEVSQ.functionType = MyFunctionType.MathematicalStatisticsFunction;
DEVSQ.returnType = MyFunctionReturnType.None;
DEVSQ.parameters = MySymbol.createParametersFromStrings([]);
DEVSQ.detail = "取得数据偏差平方和";
DEVSQ.documentation = `
DEVSQ(X,N),求X的N个周期的数据偏差平方和
DEVSQ(X,N)： 计算数据X的N个周期的数据偏差平方和。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值；
5、N不支持为变量

算法举例：计算DEVSQ(C,3);在最近一根K线上的值。

用麦语言函数可以表示如下：
SQUARE(C-(C+REF(C,1)+REF(C,2))/3)+SQUARE(REF(C,1)-(C+REF(C,1)+REF(C,2))/3)+SQUARE(REF(C,2)-(C+REF(C,1)+REF(C,2))/3);

例：
DEVSQ(C,5);计算数据收盘价5个周期的数据偏差平方和。
//表示收盘价与收盘价均值偏差分别平方之后求和，DEVSQ(C,5)表示5个周期的收盘价与收盘价均值偏差分别平方之后求和。
`;

const DIVERGENCE = new MySymbol();
DIVERGENCE.label = "DIVERGENCE";
DIVERGENCE.description = "变量X1与X2在指定周期内是否发生背离";
DIVERGENCE.insertText = "";
DIVERGENCE.body = "DIVERGENCE(,,,,)";
DIVERGENCE.kind = MySymbolKind.Function;
DIVERGENCE.marketType = MyMarketType.BasicFunction;
DIVERGENCE.functionType = MyFunctionType.LogicalJudgmentFunction;
DIVERGENCE.returnType = MyFunctionReturnType.None;
DIVERGENCE.parameters = MySymbol.createParametersFromStrings([]);
DIVERGENCE.detail = "变量X1与X2在指定周期内是否发生背离";
DIVERGENCE.documentation = `
DIVERGENCE(X1,X2,S,L,HL);变量X1与X2在指定周期内是否发生背离S:设置转折点两边需要的周期数；L:计算的总的范围的周期数HL为1，表示顶背离，HL为-1，表示底背离
DIVERGENCE(X1,X2,S,L,HL);变量X1与X2在指定周期内是否发生背离
用法：
S: 设置转折点两边需要的周期数，取值应小于L的四分之一;S不可以为变量； 
L: 计算的总的范围的周期数；L不可以为变量。
HL: 可以取值为1和-1
1表示根据X1的峰值判断背离情况；
X1在L周期内波峰取值创了新高，但X2在X1峰值对应的取值没有创新高，熊背离，或称顶背离 
-1表示计算波谷点，
X1在L周期内波谷取值创了新低，但X2在X1波谷对应的取值没有创新低，牛背离，或称底背离；

例1：
MA10:MA(C,10);
DIVERGENCE(C,MA10,2,20,1);//在20个周期内，收盘价与10周期均线存在顶背离
说明：收盘价峰值的判断标准--收盘价大于前2个周期的收盘价，并且大于后2个周期的收盘价，认为为收盘价的峰值；
即在当根K线前面的20个周期（不包含当根K线）内，收盘价存在两个这样的峰值，且峰值创了新高，但是在两个峰值对应K线取到的10周期均线的值未创新高
`;

const DIVIDEND = new MySymbol();
DIVIDEND.label = "DIVIDEND";
DIVIDEND.description = "返回之前第N次派息的每股派息数量";
DIVIDEND.insertText = "";
DIVIDEND.body = "DIVIDEND()";
DIVIDEND.kind = MySymbolKind.Function;
DIVIDEND.marketType = MyMarketType.BasicFunction;
DIVIDEND.functionType = MyFunctionType.StockDataFunction;
DIVIDEND.returnType = MyFunctionReturnType.None;
DIVIDEND.parameters = MySymbol.createParametersFromStrings([]);
DIVIDEND.detail = "返回之前第N次派息的每股派息数量";
DIVIDEND.documentation = `
DIVIDEND(N)返回之前第N次派息的每股派息数量
DIVIDEND(N) 返回之前第N次派息的每股派息数量。

用法：
1、该函数返回值为之前第N次派息（不包含最近一次派息）的每股派息数量
2、该函数返回值为每股派息数量，需要在发布的派息金额的基础上除以股数。
（例如：每10股，红利5.15元，则每股派息数量为5.15/10=0.515）

注：
1、当N为0时，返回最近一次的每股派息数量；
2、当N为有效值，但本地数据范围内不足N次派息时，返回无效值；
3、若N为无效值时，返回无效值；
4、N可以为变量；
5、该函数只支持加载在国内股票日线及日线以下周期使用。
`;

const DIVIDENDBARS = new MySymbol();
DIVIDENDBARS.label = "DIVIDENDBARS";
DIVIDENDBARS.description = "返回从之前第N个派息日到当前的周期数";
DIVIDENDBARS.insertText = "";
DIVIDENDBARS.body = "DIVIDENDBARS()";
DIVIDENDBARS.kind = MySymbolKind.Function;
DIVIDENDBARS.marketType = MyMarketType.BasicFunction;
DIVIDENDBARS.functionType = MyFunctionType.StockDataFunction;
DIVIDENDBARS.returnType = MyFunctionReturnType.None;
DIVIDENDBARS.parameters = MySymbol.createParametersFromStrings([]);
DIVIDENDBARS.detail = "返回从之前第N个派息日到当前的周期数";
DIVIDENDBARS.documentation = `
DIVIDENDBARS(N)返回从之前第N次派息到当前的周期数
DIVIDENDBARS(N) 返回从之前第N个派息日到当前的周期数。

用法：
返回从之前第N个派息日（不包含最近一次派息日）到当前的周期数；若当前K线为之前的N个派息日，返回值为0

注：
1、当N为0时，返回从最近的一个派息日到当前的周期数；
2、当N为有效值，但本地数据范围内不足N次派息时，返回无效值；
3、若N为无效值时，返回无效值；
4、N可以为变量；
5、该函数只支持加载在国内股票日线及日线以下周期使用。
`;

const DMA = new MySymbol();
DMA.label = "DMA";
DMA.description = "动态移动平均";
DMA.insertText = "";
DMA.body = "DMA( , )";
DMA.kind = MySymbolKind.Function;
DMA.marketType = MyMarketType.BasicFunction;
DMA.functionType = MyFunctionType.FinancialStatisticsFunction;
DMA.returnType = MyFunctionReturnType.None;
DMA.parameters = MySymbol.createParametersFromStrings([]);
DMA.detail = "动态移动平均";
DMA.documentation = `
DMA(X,A),求X的动态移动平均。A必须小于1大于0
DMA(X,A)：求X的动态移动平均，其中A必须小于1大于0。
注：
1、A可以为变量
2、如果A<=0或者A>=1，返回无效值

计算公式：DMA(X,A)=REF(DMA(X,A),1)*(1-A)+X*A

例1：
DMA3:=DMA(C,0.3);//计算结果为REF(DMA3,1)*(1-0.3)+C*0.3
`;

const DOT = new MySymbol();
DOT.label = "DOT";
DOT.description = "画点线";
DOT.insertText = "";
DOT.body = "DOT";
DOT.kind = MySymbolKind.Function;
DOT.marketType = MyMarketType.BasicFunction;
DOT.functionType = MyFunctionType.DrawingFunction;
DOT.returnType = MyFunctionReturnType.None;
DOT.parameters = MySymbol.createParametersFromStrings([]);
DOT.detail = "画点线";
DOT.documentation = `
DOT,画点线
画点线。
用法：
DOT 画点线。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:DOT;
例：MA5:MA(C,5),DOT;用点线画5日均线。
`;

const DRAWBARLINE = new MySymbol();
DRAWBARLINE.label = "DRAWBARLINE";
DRAWBARLINE.description = "绘制BAR线（美国线）";
DRAWBARLINE.insertText = "";
DRAWBARLINE.body = "DRAWBARLINE(,,,)";
DRAWBARLINE.kind = MySymbolKind.Function;
DRAWBARLINE.marketType = MyMarketType.BasicFunction;
DRAWBARLINE.functionType = MyFunctionType.DrawingFunction;
DRAWBARLINE.returnType = MyFunctionReturnType.None;
DRAWBARLINE.parameters = MySymbol.createParametersFromStrings([]);
DRAWBARLINE.detail = "绘制BAR线（美国线）";
DRAWBARLINE.documentation = `
DRAWBARLINE(H1,O1,L1,C1);在L1到H1之间绘制柱线，在O1位置绘制左侧横线，在C1位置绘制右侧横线
DRAWBARLINE(H1,O1,L1,C1);绘制BAR线（美国线）
用法：
在L1到H1之间绘制柱线，在O1位置绘制左侧横线，在C1位置绘制右侧横线。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：
A:DRAWBARLINE(H1,O1,L1,C1);

例： 
DRAWBARLINE(H,O,L,C); //在最高价和最低价之间绘制BAR线，在开盘价位置绘制左侧横线，在收盘价位置绘制右侧横线。
`;

const DRAWBKBMP = new MySymbol();
DRAWBKBMP.label = "DRAWBKBMP";
DRAWBKBMP.description = "设置背景图片";
DRAWBKBMP.insertText = "";
DRAWBKBMP.body = "DRAWBKBMP( , )";
DRAWBKBMP.kind = MySymbolKind.Function;
DRAWBKBMP.marketType = MyMarketType.BasicFunction;
DRAWBKBMP.functionType = MyFunctionType.DrawingFunction;
DRAWBKBMP.returnType = MyFunctionReturnType.None;
DRAWBKBMP.parameters = MySymbol.createParametersFromStrings([]);
DRAWBKBMP.detail = "设置背景图片";
DRAWBKBMP.documentation = `
DRAWBKBMP(COND,IMAGE);设置背景图片
DRAWBKBMP(COND,IMAGE) 设置背景图片。

用法：
DRAWBKBMP(COND,IMAGE);
当最后一根K线满足COND条件时，将图片IMAGE设置为背景。

注：
1、IMAGE指定的图片必须位于程序安装目录的Formula\\Image目录下(Image文件夹需要用户自己建立)
2、图片格式必须为.BMP格式。
3、不支持将函数定义为变量，即不支持下面的写法：
A:DRAWBKBMP(COND,IMAGE);

例1：
DRAWBKBMP(CLOSE>OPEN,'壁纸20140410112435');//当最后一根K线为阳线时，将Formula\\Image目录下的壁纸20140410112435图片设置为背景。
`;

const DRAWBMP = new MySymbol();
DRAWBMP.label = "DRAWBMP";
DRAWBMP.description = "输出图片";
DRAWBMP.insertText = "";
DRAWBMP.body = "DRAWBMP( , )";
DRAWBMP.kind = MySymbolKind.Function;
DRAWBMP.marketType = MyMarketType.BasicFunction;
DRAWBMP.functionType = MyFunctionType.DrawingFunction;
DRAWBMP.returnType = MyFunctionReturnType.None;
DRAWBMP.parameters = MySymbol.createParametersFromStrings([]);
DRAWBMP.detail = "输出图片";
DRAWBMP.documentation = `
DRAWBMP(COND,DATA,IMAGE);满足条件COND时，输出图片IMAGE
输出图片。

用法：
DRAWBMP(COND,DATA,IMAGE);
当满足COND条件时，在DATA位置，输出图片IMAGE。

注：
1、IMAGE指定的图片必须位于程序安装目录的Formula\\Image目录下(Image文件夹需要用户自己建立)
2、图片格式必须为.BMP格式
3、图片路径同时支持写.BMP后缀和不写后缀两种形式
4、不支持将函数定义为变量，即不支持下面的写法：
A:DRAWBMP(COND,DATA,IMAGE);
5、输出的图片不能过大，否则会影响显示速度。

例1：
DRAWBMP(CLOSE>OPEN,H,'壁纸20140410112435.BMP');//当K线为阳线时，在K线最高价位置显示Formula\\Image目录下的壁纸20140410112435图片。
`;

const DRAWCOLORKLINE = new MySymbol();
DRAWCOLORKLINE.label = "DRAWCOLORKLINE";
DRAWCOLORKLINE.description = "绘制K线";
DRAWCOLORKLINE.insertText = "";
DRAWCOLORKLINE.body = "DRAWCOLORKLINE";
DRAWCOLORKLINE.kind = MySymbolKind.Function;
DRAWCOLORKLINE.marketType = MyMarketType.BasicFunction;
DRAWCOLORKLINE.functionType = MyFunctionType.DrawingFunction;
DRAWCOLORKLINE.returnType = MyFunctionReturnType.None;
DRAWCOLORKLINE.parameters = MySymbol.createParametersFromStrings([]);
DRAWCOLORKLINE.detail = "绘制K线";
DRAWCOLORKLINE.documentation = `
DRAWCOLORKLINE(Cond,Color,Empty);绘制K线
DRAWCOLORKLINE 满足Cond条件绘制K线。

用法：
DRAWCOLORKLINE(Cond,Color,Empty);
满足Cond条件时，按照Color颜色绘制K线，根据Empty标志判断是空心还是实心，不满足条件时不绘制K线。COLOR代表颜色，Empty非0为空心。

注：
不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWCOLORKLINE(Cond,Color,Empty);

例：
DRAWCOLORKLINE(C>O,COLORBLUE,0);//收盘价大于开盘价，用蓝色绘制实心K线。
`;

const DRAWCOLORLINE = new MySymbol();
DRAWCOLORLINE.label = "DRAWCOLORLINE";
DRAWCOLORLINE.description = "根据条件画相应颜色的线";
DRAWCOLORLINE.insertText = "";
DRAWCOLORLINE.body = "DRAWCOLORLINE(,,,)";
DRAWCOLORLINE.kind = MySymbolKind.Function;
DRAWCOLORLINE.marketType = MyMarketType.BasicFunction;
DRAWCOLORLINE.functionType = MyFunctionType.DrawingFunction;
DRAWCOLORLINE.returnType = MyFunctionReturnType.None;
DRAWCOLORLINE.parameters = MySymbol.createParametersFromStrings([]);
DRAWCOLORLINE.detail = "根据条件画相应颜色的线";
DRAWCOLORLINE.documentation = `
DRAWCOLORLINE（COND,DATA,COLOR1,COLOR2）;根据条件画相应颜色的线当满足COND时，DATA为COLOR1颜色的线，不满足COND时，DATA为COLOR2颜色的线
DRAWCOLORLINE(COND,DATA,COLOR1,COLOR2);根据条件画相应颜色的线

用法：当满足COND时，DATA为COLOR1颜色的线，不满足COND时，DATA为COLOR2颜色的线

注：
1、不支持将该函数直接定义为变量，即不支持下面的写法：
A:DRAWCOLORLINE（COND,DATA,COLOR1,COLOR2）;
2、该函数支持在函数后设置线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的写法：
DRAWCOLORLINE(COND,DATA,COLOR1,COLOR2),LINETHICK;

例1： 
MA1:=MA(C,5);
DRAWCOLORLINE(MA1>REF(MA1,1),MA1,COLORRED,COLORGREEN); //如果当根5日均线的值大于前一根5日均线的值，MA1画红线，否则画绿线
`;

const DRAWCOLUMNCHART = new MySymbol();
DRAWCOLUMNCHART.label = "DRAWCOLUMNCHART";
DRAWCOLUMNCHART.description = "画双向柱形图";
DRAWCOLUMNCHART.insertText = "";
DRAWCOLUMNCHART.body = "DRAWCOLUMNCHART( , , )";
DRAWCOLUMNCHART.kind = MySymbolKind.Function;
DRAWCOLUMNCHART.marketType = MyMarketType.BasicFunction;
DRAWCOLUMNCHART.functionType = MyFunctionType.DrawingFunction;
DRAWCOLUMNCHART.returnType = MyFunctionReturnType.None;
DRAWCOLUMNCHART.parameters = MySymbol.createParametersFromStrings([]);
DRAWCOLUMNCHART.detail = "画双向柱形图";
DRAWCOLUMNCHART.documentation = `
DRAWCOLUMNCHART(X,C1,C2)，X表示柱高,C1判断柱的方向,C2判断柱的颜色C1条件满足时从0轴向上画柱，不满足时从0轴向下画柱，C2条件满足时柱为红色，不满足时柱为青色
DRAWCOLUMNCHART 画柱形图。

用法：
DRAWCOLUMNCHART(X,C1,C2);
X表示柱高，C1条件满足时从0轴向上画柱，不满足时从0轴向下画柱，C2条件满足时柱为红色，不满足时柱为青色

注：
1、C1、C2是判断条件。
2、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWCOLUMNCHART(X,C1,C2);
3、该函数画图为独立坐标显示，0轴为画面中央。
例1：
DRAWCOLUMNCHART(10,C>O,C>O);//满足收阳条件从0轴向上10个高度画红色柱，不满足条件从0轴向下10个高度画青色柱。
`;

const DRAWGBK = new MySymbol();
DRAWGBK.label = "DRAWGBK";
DRAWGBK.description = "设置渐变背景色";
DRAWGBK.insertText = "";
DRAWGBK.body = "DRAWGBK(,,,)";
DRAWGBK.kind = MySymbolKind.Function;
DRAWGBK.marketType = MyMarketType.BasicFunction;
DRAWGBK.functionType = MyFunctionType.DrawingFunction;
DRAWGBK.returnType = MyFunctionReturnType.None;
DRAWGBK.parameters = MySymbol.createParametersFromStrings([]);
DRAWGBK.detail = "设置渐变背景色";
DRAWGBK.documentation = `
DRAWGBK(COND,C1,C2,D);以C1至C2的渐变色填充背景,D指定渐变方向，0表示从左到右，1表示从上到下
DRAWGBK(COND,C1,C2,D) 设置渐变背景色。

用法：
DRAWGBK(COND,C1,C2,D);
当最后一根K线满足COND条件时，以C1至C2的渐变色填充背景。

注：
1、C1,C2可以用颜色函数定义，即可以支持下面的写法：
DRAWGBK(CLOSE>0,COLORRED,COLORGREEN,0);//用户可以在插入-插入颜色中选择
2、C1，C2也支持直接使用自定义颜色，即支持下面的写法：
DRAWGBK(CLOSE>0,RGB(0,255,255),RGB(128,128,255),0);//用户可以在插入-插入颜色中选择
3、D指定渐变方向，0表示从左到右，1表示从上到下。
4、不支持将函数定义为变量，即不支持下面的写法：
A:DRAWGBK(COND,C1,C2,D);

例1：
DRAWGBK(CLOSE>OPEN,COLORRED,COLORGREEN,1);//当最后一根K线为阳线时，将背景设置为从上到下，红色到绿色的渐变。
`;

const DRAWGBK1 = new MySymbol();
DRAWGBK1.label = "DRAWGBK1";
DRAWGBK1.description = "设置满足条件K线的背景颜色";
DRAWGBK1.insertText = "";
DRAWGBK1.body = "DRAWGBK1(,)";
DRAWGBK1.kind = MySymbolKind.Function;
DRAWGBK1.marketType = MyMarketType.BasicFunction;
DRAWGBK1.functionType = MyFunctionType.DrawingFunction;
DRAWGBK1.returnType = MyFunctionReturnType.None;
DRAWGBK1.parameters = MySymbol.createParametersFromStrings([]);
DRAWGBK1.detail = "设置满足条件K线的背景颜色";
DRAWGBK1.documentation = `
DRAWGBK1(COND,COLOR)当条件COND成立时，以K线宽度、COLOR颜色填充背景区域，高度为整个显示区域的最高到最低
DRAWGBK1(COND,COLOR) 设置满足条件K线的背景颜色。

用法：
DRAWGBK1(COND,COLOR);
当条件COND成立时，以K线宽度、COLOR颜色填充背景区域，高度为整个显示区域的最高到最低。

注：
1、COLOR可以用颜色函数定义，即可以支持下面的写法：
DRAWGBK1(C>O,COLORRED);//用户可以在颜色中选择
2、COLOR也支持直接使用自定义颜色，即支持下面的写法：
DRAWGBK1(C>O,RGB(252,209,218));//用户可以在颜色中选择

例1：
MA5:=MA(C,5);
DRAWGBK1(C>MA5,COLORRED);//表示在收盘价大于5周期均线的k线对应背景颜色设置为红色。
`;

const DRAWICON = new MySymbol();
DRAWICON.label = "DRAWICON";
DRAWICON.description = "画图标";
DRAWICON.insertText = "";
DRAWICON.body = "DRAWICON( , , )";
DRAWICON.kind = MySymbolKind.Function;
DRAWICON.marketType = MyMarketType.BasicFunction;
DRAWICON.functionType = MyFunctionType.DrawingFunction;
DRAWICON.returnType = MyFunctionReturnType.None;
DRAWICON.parameters = MySymbol.createParametersFromStrings([]);
DRAWICON.detail = "画图标";
DRAWICON.documentation = `
DRAWICON(COND,PRICE,ICON),当条件COND满足时,在PRICE位置画图标ICONICON图标用'ICO1'~'ICO105'表示
DRAWICON：绘制小图标。

用法：
DRAWICON(COND,PRICE,ICON);
当COND条件满足时,在PRICE位置画图标ICON。

注：
1、该函数可以指定位置PRICE标注图标ICON
2、ICON位置可以写成'ICON'的形式，也可以写为数字的形式，即DRAWICON(COND,PRICE,'ICO1');等价于DRAWICON(COND,PRICE,1);
3、该函数可以用ALIGN，VALIGN设置图标的对齐方式。
4、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWICON(COND,PRICE,ICON);

例1：
DRAWICON(CLOSE<OPEN,LOW,'ICO1'),ALIGN2,VALIGN2;//在阴线的最低价上画出图标ICO1。图标右下对齐。
写完“DRAWICON(CLOSE<OPEN,LOW,” 以后，点击插入图标按钮，再单击选中的图标插入到函数中，图标用'ICO1'~'ICO165'（或1~165）表示。

例2：
MA5:=MA(C,5);
DRAWICON(C>MA5,MA5,2),ALIGN0,VALIGN0;//表示在收盘价大于5周期均线的k线对应的MA5数值位置上画出图标ICO2，图标左上对齐。
写完“DRAWICON(C>MA5,MA5,” 以后，点击插入图标按钮，再单击选中的图标插入到函数中，图标用ICO1~ICO165（或1~165）表示。
`;

const DRAWKLINE = new MySymbol();
DRAWKLINE.label = "DRAWKLINE";
DRAWKLINE.description = "绘制K线";
DRAWKLINE.insertText = "";
DRAWKLINE.body = "DRAWKLINE( , , , , )";
DRAWKLINE.kind = MySymbolKind.Function;
DRAWKLINE.marketType = MyMarketType.BasicFunction;
DRAWKLINE.functionType = MyFunctionType.DrawingFunction;
DRAWKLINE.returnType = MyFunctionReturnType.None;
DRAWKLINE.parameters = MySymbol.createParametersFromStrings([]);
DRAWKLINE.detail = "绘制K线";
DRAWKLINE.documentation = `
DRAWKLINE(WidthRatio,COLOR1,EMPTY1,COLOR2,EMPTY2)按照宽度比例WidthRatio画线（WidthRadio从0到1），阳线以COLOR1和EMPTY1判断阴线以COLOR2和EMPTY2判断。（COLOR1、COLOR2代表颜色，Empty非0为空心）
DRAWKLINE 自定义K线颜色、实空心及宽度绘制K线。

用法：
DRAWKLINE(WidthRatio,COLOR1,EMPTY1,COLOR2,EMPTY2);
按照宽度比例WidthRatio画线，阳线以COLOR1和EMPTY1判断，阴线以COLOR2和EMPTY2判断。WidthRadio从0到1，COLOR1、COLOR2代表颜色，Empty非0为空心。

注：
不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWKLINE(WidthRatio,COLOR1,EMPTY1,COLOR2,EMPTY2);

例1：
DRAWKLINE(0.75,COLORRED,1,COLORCYAN,0);//绘制K线宽度比例为0.75,阳线为红色空心，阴线为青色实心。
例2：
DRAWKLINE(0.5,COLORYELLOW,0,COLORBLUE,1);//绘制K线宽度比例为0.5,阳线为黄色实心，阴线为蓝色空心。
`;

const DRAWKLINE1 = new MySymbol();
DRAWKLINE1.label = "DRAWKLINE1";
DRAWKLINE1.description = "绘制K线";
DRAWKLINE1.insertText = "";
DRAWKLINE1.body = "DRAWKLINE1( , , , )";
DRAWKLINE1.kind = MySymbolKind.Function;
DRAWKLINE1.marketType = MyMarketType.BasicFunction;
DRAWKLINE1.functionType = MyFunctionType.DrawingFunction;
DRAWKLINE1.returnType = MyFunctionReturnType.None;
DRAWKLINE1.parameters = MySymbol.createParametersFromStrings([]);
DRAWKLINE1.detail = "绘制K线";
DRAWKLINE1.documentation = `
DRAWKLINE1(H1,O1,L1,C1)以H1为最高价，L1为最低价，O1为开盘价，C1为收盘价绘制K线
DRAWKLINE1 自定义价格绘制K线。

用法：
DRAWKLINE1(H1,O1,L1,C1);
1、以H1为最高价，L1为最低价，O1为开盘价，C1为收盘价绘制K线。
2、参数写好后，系统会根据写入的高开低收绘制K线，阳线显示为红色空心，阴线显示为青色实心，不支持修改颜色。

注：
1、写入的参数要符合逻辑，即H1大于等于O1，L1，C1；L1小于等于H1，O1，C1。
2、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWKLINE1(H1,O1,L1,C1);

例：
O1:=REF(C,1);
L1:=MIN(L,REF(C,1));
H1:=MAX(H,REF(C,1));
DRAWKLINE1(H1,O1,L1,C);//以昨日收盘价作为开盘价绘制K线
`;

const DRAWKLINE2 = new MySymbol();
DRAWKLINE2.label = "DRAWKLINE2";
DRAWKLINE2.description = "绘制K线";
DRAWKLINE2.insertText = "";
DRAWKLINE2.body = "DRAWKLINE2( , , , , )";
DRAWKLINE2.kind = MySymbolKind.Function;
DRAWKLINE2.marketType = MyMarketType.BasicFunction;
DRAWKLINE2.functionType = MyFunctionType.DrawingFunction;
DRAWKLINE2.returnType = MyFunctionReturnType.None;
DRAWKLINE2.parameters = MySymbol.createParametersFromStrings([]);
DRAWKLINE2.detail = "绘制K线";
DRAWKLINE2.documentation = `
DRAWKLINE2(SET,COLOR1,EMPTY1,COLOR2,EMPTY2)绘制K线，黑色背景下，盘整时K线显示为黄色；白色背景下，盘整时K线显示为蓝色
DRAWKLINE2 绘制盘整区间K线，盘整区间以外k线自定义。

用法：
DRAWKLINE2(SET,COLOR1,EMPTY1,COLOR2,EMPTY2);
根据SET的设置绘制盘整K线，其他K线阳线以COLOR1和EMPTY1判断，阴线以COLOR2和EMPTY2判断。
COLOR1、COLOR2代表颜色，Empty 0为实心非0为空心。
（1）SET为1时，对盘整K线进行特殊处理，并在K线区域显示成交量柱状线；黑色背景下，盘整时K线显示为黄色；白色背景下，盘整时K线显示为蓝色。
（2）SET为0时，不特殊处理盘整K线，并且不显示成交量柱状线，K线根据COLOR和EMPTY的设置显示，用法同DRAWKLINE函数。

注：
1、绘制盘整K线的区间，根据函数PANZHENG进行计算；
2、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWKLINE2(SET,COLOR1,EMPTY1,COLOR2,EMPTY2);

例：
DRAWKLINE2(1,COLORRED,1,COLORCYAN,0);//处于盘整状态下的K线显示为黄色，非盘整K线阳线为红色空心，阴线为青色实心。
`;

const DRAWLASTBARICON = new MySymbol();
DRAWLASTBARICON.label = "DRAWLASTBARICON";
DRAWLASTBARICON.description = "在最后一根k线绘制图标";
DRAWLASTBARICON.insertText = "";
DRAWLASTBARICON.body = "DRAWLASTBARICON( , )";
DRAWLASTBARICON.kind = MySymbolKind.Function;
DRAWLASTBARICON.marketType = MyMarketType.BasicFunction;
DRAWLASTBARICON.functionType = MyFunctionType.DrawingFunction;
DRAWLASTBARICON.returnType = MyFunctionReturnType.None;
DRAWLASTBARICON.parameters = MySymbol.createParametersFromStrings([]);
DRAWLASTBARICON.detail = "在最后一根k线绘制图标";
DRAWLASTBARICON.documentation = `
DRAWLASTBARICON(PRICE,ICON)最后一根k线,在PRICE位置画图标ICON
DRAWLASTBARICON ：在最后一根k线绘制图标。

用法：
DRAWLASTBARICON(PRICE,ICON);
最后一根k线,在PRICE位置画图标ICON。

注：
1、该函数可以指定位置PRICE标注图标ICON
2、ICON位置可以写成'ICON'的形式，也可以写为数字的形式，即DRAWLASTBARICON(PRICE,'ICO1');等价于DRAWLASTBARICON(PRICE,1);
3、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWLASTBARICON(PRICE,ICON);
4、该函数可以用ALIGN，VALIGN设置图标的对齐方式。

例1：
DRAWLASTBARICON(LOW,'ICO1');//在最后一根k线最低价上画出图标ICON1。
写完“DRAWLASTBARICON(LOW,” 以后，点击插入图标按钮，再单击选中的图标插入到函数中，图标用'ICO1'~'ICO165'（或1~165）表示。

例2：
MA5:=MA(C,5);
DRAWLASTBARICON(MA5,2);//表示在最后一根k线对应的MA5数值位置上画出图标ICON2。
写完“DRAWLASTBARICON(MA5,” 以后，点击插入图标按钮，再单击选中的图标插入到函数中，图标用ICO1~ICO165（或1~165）表示。
`;

const DRAWLASTBARLINE = new MySymbol();
DRAWLASTBARLINE.label = "DRAWLASTBARLINE";
DRAWLASTBARLINE.description = "最后一根k线满足条件偏移周期画线";
DRAWLASTBARLINE.insertText = "";
DRAWLASTBARLINE.body = "DRAWLASTBARLINE(,,,,,,)";
DRAWLASTBARLINE.kind = MySymbolKind.Function;
DRAWLASTBARLINE.marketType = MyMarketType.BasicFunction;
DRAWLASTBARLINE.functionType = MyFunctionType.DrawingFunction;
DRAWLASTBARLINE.returnType = MyFunctionReturnType.None;
DRAWLASTBARLINE.parameters = MySymbol.createParametersFromStrings([]);
DRAWLASTBARLINE.detail = "最后一根k线满足条件偏移周期画线";
DRAWLASTBARLINE.documentation = `
DRAWLASTBARLINE(C1,P1,X1,C2,P2,X2,EXP);最后一根k线满足条件C1时向左偏移X1个周期及最后一根k线满足条件C2时向左偏移X2个周期从P1向P2画线。EXP为0表示画线不延伸，EXP不为0表示画线延伸
DRAWLASTBARLINE 最后一根k线满足条件偏移周期绘制直线段

用法：
DRAWLASTBARLINE(C1,P1,X1,C2,P2,X2,EXP);
最后一根k线满足条件C1时向左偏移X1个周期及最后一根k线满足条件C2时向左偏移X2个周期从P1向P2画线。EXP为0表示画线不延伸，EXP不为0表示画线延伸。

注：
1、画线连接的是最后一根k线满足C1条件向左偏移X1个周期的P1位置，和最后一根k线满足C2条件向左偏移X2个周期的P2位置。
2、EXP为0，画线不延伸，即画线段；EXP不为0，画线延伸，即画射线
3、X1,X2支持变量
4、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
DRAWLASTBARLINE(C1,P1,X1,C2,P2,X2,EXP),LINETHICK,COLOR;
DRAWLASTBARLINE(C1,P1,X1,C2,P2,X2,EXP),COLOR,LINETHICK;
5、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWLASTBARLINE(C1,P1,X1,C2,P2,X2,EXP);

例1:
DRAWLASTBARLINE(ISDOWN,REF(H,4),4,ISDOWN,REF(L,4),4,0);//最后一根k线满足阴线，倒数第五根k线从最高价绘制到最低价，画线不延伸。
例2：
DRAWLASTBARLINE(COD2,REF(L,2),2,COD1,REF(H,1),1,0),COLORRED;//最后一根k线满足COD2时向左偏移2个周期的最低价和最后一根k线满足COD1条件向左偏移个1周期的最高价画红色的线，画线不延伸。
`;

const DRAWLASTBARNUMBER = new MySymbol();
DRAWLASTBARNUMBER.label = "DRAWLASTBARNUMBER";
DRAWLASTBARNUMBER.description = "在最后一根k线输出数值";
DRAWLASTBARNUMBER.insertText = "";
DRAWLASTBARNUMBER.body = "DRAWLASTBARNUMBER( , , ,)";
DRAWLASTBARNUMBER.kind = MySymbolKind.Function;
DRAWLASTBARNUMBER.marketType = MyMarketType.BasicFunction;
DRAWLASTBARNUMBER.functionType = MyFunctionType.DrawingFunction;
DRAWLASTBARNUMBER.returnType = MyFunctionReturnType.None;
DRAWLASTBARNUMBER.parameters = MySymbol.createParametersFromStrings([]);
DRAWLASTBARNUMBER.detail = "在最后一根k线输出数值";
DRAWLASTBARNUMBER.documentation = `
DRAWLASTBARNUMBER(DATA,NUMBER,PRECISION,COLOR);最后一根k线,在DATA位置写数字NUMBER
DRAWLASTBARNUMBER：在最后一根k线输出数值。

用法：
DRAWLASTBARNUMBER(DATA,NUMBER,PRECISION,COLOR); 
最后一根k线在DATA位置写数字NUMBER。PRECISION为精度（小数点后有几位数字）。COLOR为颜色。

注：
该函数支持在函数后设置文字的大小和文字对齐方式。即支持下面的写法：
DRAWLASTBARNUMBER(DATA,NUMBER,PRECISION,COLOR),ALIGN,VALIGN;

例1：
DRAWLASTBARNUMBER(HIGH,(CLOSE-OPEN)/OPEN*100,2,COLORRED);//最后一根k线在最高价位置红色显示涨幅数值(相对开盘价的百分比，精确2位小数)。
例2：
DRAWLASTBARNUMBER(L,REF(C,1),2,COLORRED),ALIGN0,VALIGN0;//表示最后一根k线的最低价处以红色显示昨收盘价数值(精确2位小数)，标注文字居左，居上对齐。
`;

const DRAWLASTBARTEXT = new MySymbol();
DRAWLASTBARTEXT.label = "DRAWLASTBARTEXT";
DRAWLASTBARTEXT.description = "在最后一根k线显示文字";
DRAWLASTBARTEXT.insertText = "";
DRAWLASTBARTEXT.body = "DRAWLASTBARTEXT( , )";
DRAWLASTBARTEXT.kind = MySymbolKind.Function;
DRAWLASTBARTEXT.marketType = MyMarketType.BasicFunction;
DRAWLASTBARTEXT.functionType = MyFunctionType.DrawingFunction;
DRAWLASTBARTEXT.returnType = MyFunctionReturnType.None;
DRAWLASTBARTEXT.parameters = MySymbol.createParametersFromStrings([]);
DRAWLASTBARTEXT.detail = "在最后一根k线显示文字";
DRAWLASTBARTEXT.documentation = `
DRAWLASTBARTEXT(PRICE,TEXT)最后一根k线,在PRICE位置书写文字TEXT
DRAWLASTBARTEXT：在最后一根k线显示文字。

用法：
DRAWLASTBARTEXT(PRICE,TEXT);
最后一根k线,在PRICE位置书写文字TEXT。

注：
1、显示的汉字用单引号标注
2、可以设置文字显示的对齐方式，字体大小以及文字的颜色，即支持下面的写法：
DRAWLASTBARTEXT(PRICE,TEXT),COLOR,ALIGN,VALIGN;

例1：
DRAWLASTBARTEXT(LOW,'注');//最后一根k线，在最低价上写"注"字。
例2：
DRAWLASTBARTEXT(LOW,'低'),ALIGN0,FONTSIZE16,COLORRED;//在最后一根k线，在最低价写"低"字，文字左对齐，字体大小为16，文字颜色为红色。
`;

const DRAWLINE = new MySymbol();
DRAWLINE.label = "DRAWLINE";
DRAWLINE.description = "画线";
DRAWLINE.insertText = "";
DRAWLINE.body = "DRAWLINE( , , , , )";
DRAWLINE.kind = MySymbolKind.Function;
DRAWLINE.marketType = MyMarketType.BasicFunction;
DRAWLINE.functionType = MyFunctionType.DrawingFunction;
DRAWLINE.returnType = MyFunctionReturnType.None;
DRAWLINE.parameters = MySymbol.createParametersFromStrings([]);
DRAWLINE.detail = "画线";
DRAWLINE.documentation = `
DRAWLINE(C1,P1,C2,P2,COLOR)满足条件C1时及C2时从P1向P2画线
DRAWLINE 绘制直线段。

用法：
DRAWLINE(C1,P1,C2,P2,COLOR);
满足条件C1时及C2时从P1向P2画线。颜色为COLOR。

注：
1、画线所在的k线须C1、C2同时满足。
2、绘制的直线段是在满足的k线上从P1到P2位置画COLOR颜色的线段。
3、该函数支持在函数后设置线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的写法：
DRAWLINE(C1,P1,C2,P2,COLOR),LINETHICK;
4、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWLINE(C1,P1,C2,P2,COLOR);

例1：
MA5:=MA(C,5);
MA10:=MA(C,10);
DRAWLINE(MA10<CLOSE,OPEN,MA5>CLOSE,CLOSE,COLORCYAN);//表示当收盘价大于10日均线并且小于5日均线时，从开盘价画青色直线到收盘价。
例2：
DRAWLINE(ISUP,C,ISUP,H,COLORRED),LINETHICK7;//表示当前k线收阳时，从收盘价价画红色直线到最高价，线型粗细为7。
`;

const DRAWLINE1 = new MySymbol();
DRAWLINE1.label = "DRAWLINE1";
DRAWLINE1.description = "画线";
DRAWLINE1.insertText = "";
DRAWLINE1.body = "DRAWLINE1( , , , , )";
DRAWLINE1.kind = MySymbolKind.Function;
DRAWLINE1.marketType = MyMarketType.BasicFunction;
DRAWLINE1.functionType = MyFunctionType.DrawingFunction;
DRAWLINE1.returnType = MyFunctionReturnType.None;
DRAWLINE1.parameters = MySymbol.createParametersFromStrings([]);
DRAWLINE1.detail = "画线";
DRAWLINE1.documentation = `
DRAWLINE1(C1,P1,C2,P2,EXP)满足条件C1时及该K线后最近一个满足C2时从P1向P2画线。EXP为画线0不延伸，EXP不为0画线延伸
DRAWLINE1 绘制直线段。

用法：
DRAWLINE1(C1,P1,C2,P2,EXP);
满足条件C1时及该K线后最近一个满足C2时从P1向P2画线。EXP为0表示画线不延伸，EXP不为0表示画线延伸。

注：
1、画线连接的是满足C1条件的K线的P1位置，和该K线后最近一个满足C2条件的K线的P2位置。
2、EXP为0，画线不延伸，即画线段；EXP不为0，画线延伸，即画射线
3、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
DRAWLINE1(C1,P1,C2,P2,EXP),LINETHICK,COLOR;
DRAWLINE1(C1,P1,C2,P2,EXP),COLOR,LINETHICK;
4、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWLINE1(C1,P1,C2,P2,EXP);

例：
DRAWLINE1(ISUP,H,ISDOWN,L,0),COLORBLUE,LINETHICK7;//表示在阳线的最高价处到距离该阳线最近的一根阴线的最低价处画线，画线不延伸，画线颜色为蓝色，线型粗细为7。
`;

const DRAWLINE2 = new MySymbol();
DRAWLINE2.label = "DRAWLINE2";
DRAWLINE2.description = "画线";
DRAWLINE2.insertText = "";
DRAWLINE2.body = "DRAWLINE2( , , , , )";
DRAWLINE2.kind = MySymbolKind.Function;
DRAWLINE2.marketType = MyMarketType.BasicFunction;
DRAWLINE2.functionType = MyFunctionType.DrawingFunction;
DRAWLINE2.returnType = MyFunctionReturnType.None;
DRAWLINE2.parameters = MySymbol.createParametersFromStrings([]);
DRAWLINE2.detail = "画线";
DRAWLINE2.documentation = `
DRAWLINE2(C1,P1,C2,P2,EXP)满足条件C1时及之后最后一次满足C2时从P1向P2画线。EXP为画线0不延伸，EXP不为0画线延伸
DRAWLINE2 绘制直线段。

用法：
DRAWLINE2(C1,P1,C2,P2,EXP);
满足条件C1时及之后最后一次满足C2时从P1向P2画线。EXP为画线0不延伸，EXP不为0画线延伸。

注：
1、画线连接的是满足C1条件的K线的P1位置，和该K线后最后一个满足C2条件的K线的P2位置。
2、EXP为0，画线不延伸，即画线段；EXP不为0，画线延伸，即画射线
3、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
DRAWLINE2(C1,P1,C2,P2,EXP),LINETHICK,COLOR;
DRAWLINE2(C1,P1,C2,P2,EXP),COLOR,LINETHICK;
4、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWLINE2(C1,P1,C2,P2,EXP);

例：
DRAWLINE2(ISUP,H,ISDOWN,L,0),COLORBLUE,LINETHICK7;//表示在阳线的最高价处到距离该阳线之后连续出现阴线中最远的一根阴线的最低价处画线，画线不延伸，画线颜色为蓝色，线型粗细为7。
`;

const DRAWLINE3 = new MySymbol();
DRAWLINE3.label = "DRAWLINE3";
DRAWLINE3.description = "偏移周期画线";
DRAWLINE3.insertText = "";
DRAWLINE3.body = "DRAWLINE3(,,,,,,)";
DRAWLINE3.kind = MySymbolKind.Function;
DRAWLINE3.marketType = MyMarketType.BasicFunction;
DRAWLINE3.functionType = MyFunctionType.DrawingFunction;
DRAWLINE3.returnType = MyFunctionReturnType.None;
DRAWLINE3.parameters = MySymbol.createParametersFromStrings([]);
DRAWLINE3.detail = "偏移周期画线";
DRAWLINE3.documentation = `
DRAWLINE3(C1,P1,X1,C2,P2,X2,EXP);满足条件C1时向左偏移X1个周期及满足条件C2时向左偏移X2个周期从P1向P2画线。EXP为0表示画线不延伸，EXP不为0表示画线延伸
DRAWLINE3 偏移周期绘制直线段

用法：
DRAWLINE3(C1,P1,X1,C2,P2,X2,EXP);
满足条件C1时向左偏移X1个周期及满足条件C2时向左偏移X2个周期从P1向P2画线。EXP为0表示画线不延伸，EXP不为0表示画线延伸。

注：
1、画线连接的是满足C1条件的K线向左偏移X1个周期的P1位置，和满足C1条件后最近一个满足C2条件的k线向左偏移X2个周期的P2位置。
2、EXP为0，画线不延伸，即画线段；EXP不为0，画线延伸，即画射线
3、X1,X2支持变量
4、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
DRAWLINE3(C1,P1,X1,C2,P2,X2,EXP),LINETHICK,COLOR;
DRAWLINE3(C1,P1,X1,C2,P2,X2,EXP),COLOR,LINETHICK;
5、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWLINE3(C1,P1,X1,C2,P2,X2,EXP);

例1：
DRAWLINE3(ISUP,REF(H,3),3,ISDOWN,REF(L,3),3,0),COLORBLUE,LINETHICK7;//表示在阳线向左偏移3个周期的最高价处到距离该阳线最近的一根阴线向左偏移3个周期的最低价处画线，画线不延伸，画线颜色为蓝色，线型粗细为7。

例2：
COD1:=C<REF(C,2)&&REF(C,2)>REF(C,4);
COD2:=C>REF(C,2)&&REF(C,2)<REF(C,4);
DRAWLINE3(COD1,REF(H,2),2,COD2,REF(L,2),2,0),COLORGREEN;//满足COD1时向左偏移2个周期的最高价到满足COD2时向左偏移个2周期的最低价画绿色的线，画线不延伸
DRAWLINE3(COD2,REF(L,2),2,COD1,REF(H,2),2,0),COLORRED;//满足COD2时向左偏移2个周期的最低价到满足COD1时向左偏移个2周期的最高价画红色的线，画线不延伸
`;

const DRAWNUMBER = new MySymbol();
DRAWNUMBER.label = "DRAWNUMBER";
DRAWNUMBER.description = "写数字";
DRAWNUMBER.insertText = "";
DRAWNUMBER.body = "DRAWNUMBER( , , , , )";
DRAWNUMBER.kind = MySymbolKind.Function;
DRAWNUMBER.marketType = MyMarketType.BasicFunction;
DRAWNUMBER.functionType = MyFunctionType.DrawingFunction;
DRAWNUMBER.returnType = MyFunctionReturnType.None;
DRAWNUMBER.parameters = MySymbol.createParametersFromStrings([]);
DRAWNUMBER.detail = "写数字";
DRAWNUMBER.documentation = `
DRAWNUMBER(COND,DATA,NUMBER,PRECISION,COLOR)当条件COND满足时在DATA位置写数字NUMBERPRECISION为精度（小数点后有几位数字）。COLOR为颜色
DRAWNUMBER：输出数值。

用法：
DRAWNUMBER(COND,DATA,NUMBER,PRECISION,COLOR); 
当条件满足时在DATA位置写数字NUMBER。PRECISION为精度（小数点后有几位数字）。COLOR为颜色。

注：
1、该函数可以用ALIGN，VALIGN设置文字的对齐方式。
2、可以用FONTSIZE设置文字显示的字体大小。

例1：
DRAWNUMBER(CLOSE/OPEN>1.08,HIGH,(CLOSE-OPEN)/OPEN*100,2,COLORRED);//表示当日涨幅大于8%时在最高价位置红色显示涨幅数值(相对开盘价的百分比，精确2位小数)。
例2：
DRAWNUMBER(DATE<>REF(DATE,1),L,REF(C,1),2,COLORRED),ALIGN0,VALIGN0;//表示在当天第一根k线的最低价处以红色显示昨收盘价数值(精确2位小数)，标注文字居左，居上对齐。
`;

const DRAWNUMBER1 = new MySymbol();
DRAWNUMBER1.label = "DRAWNUMBER1";
DRAWNUMBER1.description = "写数字";
DRAWNUMBER1.insertText = "";
DRAWNUMBER1.body = "DRAWNUMBER1( , , , )";
DRAWNUMBER1.kind = MySymbolKind.Function;
DRAWNUMBER1.marketType = MyMarketType.BasicFunction;
DRAWNUMBER1.functionType = MyFunctionType.DrawingFunction;
DRAWNUMBER1.returnType = MyFunctionReturnType.None;
DRAWNUMBER1.parameters = MySymbol.createParametersFromStrings([]);
DRAWNUMBER1.detail = "写数字";
DRAWNUMBER1.documentation = `
DRAWNUMBER1(COND,DATA,NUMBER,PRECISION)当条件满足时在DATA位置写数字NUMBER
DRAWNUMBER1：输出数值。

用法：
DRAWNUMBER1(COND,DATA,NUMBER,PRECISION); 
当条件满足时在DATA位置写数字NUMBER。PRECISION为精度（小数点后有几位数字）。

注：
该函数支持在函数后设置文字的颜色、文字的大小和文字对齐方式。即支持下面的写法：
DRAWNUMBER1(COND,DATA,NUMBER,PRECISION),COLOR,ALIGN,VALIGN;

例1：
DRAWNUMBER1(CLOSE/OPEN>1.08,HIGH,(CLOSE-OPEN)/OPEN*100,2),COLORRED;//表示当日涨幅大于8%时在最高价位置红色显示涨幅数值(相对开盘价的百分比，精确2位小数)。

例2：
DRAWNUMBER1(DATE<>REF(DATE,1),L,REF(C,1),2),COLORRED,ALIGN0,VALIGN0;//表示在当天第一根k线的最低价处以红色显示昨收盘价数值(精确2位小数)，标注文字居左，居上对齐。
`;

const DRAWSHIFTNUMBER = new MySymbol();
DRAWSHIFTNUMBER.label = "DRAWSHIFTNUMBER";
DRAWSHIFTNUMBER.description = "输出数值";
DRAWSHIFTNUMBER.insertText = "";
DRAWSHIFTNUMBER.body = "DRAWSHIFTNUMBER( , , , , , , )";
DRAWSHIFTNUMBER.kind = MySymbolKind.Function;
DRAWSHIFTNUMBER.marketType = MyMarketType.BasicFunction;
DRAWSHIFTNUMBER.functionType = MyFunctionType.DrawingFunction;
DRAWSHIFTNUMBER.returnType = MyFunctionReturnType.None;
DRAWSHIFTNUMBER.parameters = MySymbol.createParametersFromStrings([]);
DRAWSHIFTNUMBER.detail = "输出数值";
DRAWSHIFTNUMBER.documentation = `
DRAWSHIFTNUMBER(COND,DATA,NUMBER,,PRECISION,COLOR,DIRECTION,X);当条件满足时在DATA位置写数字NUMBER。PRECISION为精度（小数点后有几位数字）。COLOR为颜色。DIRECTION为偏移的方向：0左1右,X为偏移的K线根数。
DRAWSHIFTNUMBER 输出数值

用法：DRAWSHIFTNUMBER(COND,DATA,NUMBER,PRECISION,COLOR,DIRECTION,X);当条件满足时在DATA位置写数字NUMBER。PRECISION为精度（小数点后有几位数字）。COLOR为颜色。DIRECTION 为偏移的方向： 0 左 1右 , X 为偏移的K线根数。

注：
1、该函数可以用ALIGN，VALIGN设置文字的对齐方式。
2、可以用FONTSIZE设置文字显示的字体大小。

例1：
DRAWSHIFTNUMBER(CLOSE/OPEN>1.08,HIGH,(CLOSE-OPEN)/OPEN*100,2,COLORRED,0,1);//表示当日涨幅大于8%时在最高价位置红色显示涨幅数值向左偏移一根k线(相对开盘价的百分比，精确2位小数)。

例2：
DRAWSHIFTNUMBER(DATE<>REF(DATE,1),L,REF(C,1),2,COLORRED,1,1),ALIGN0,VALIGN0;//表示在当天第一根k线的最低价处以红色显示昨收盘价数值(精确2位小数)向右偏移一根k线，标注文字居左，居上对齐。
`;

const DRAWSL = new MySymbol();
DRAWSL.label = "DRAWSL";
DRAWSL.description = "画线（段）";
DRAWSL.insertText = "";
DRAWSL.body = "DRAWSL( , , , , , )";
DRAWSL.kind = MySymbolKind.Function;
DRAWSL.marketType = MyMarketType.BasicFunction;
DRAWSL.functionType = MyFunctionType.DrawingFunction;
DRAWSL.returnType = MyFunctionReturnType.None;
DRAWSL.parameters = MySymbol.createParametersFromStrings([]);
DRAWSL.detail = "画线（段）";
DRAWSL.documentation = `
DRAWSL(COND,DATA,SLOPE,LEN,EXPAND,COLOR),当条件满足时，在DATA数据处以每个周期相差SLOPE个价位作为斜率画LEN个周期长的线段
DRAWSL 绘制直线（段）。

用法：
DRAWSL(COND,DATA,SLOPE,LEN,EXPAND,COLOR);
当条件COND满足时，在DATA数据处以每个周期相差SLOPE个价位作为斜率画LEN个周期长的线段。
EXPAND为画线延长方式0:不延伸；1:向左延伸；2:向右延伸；3:双向延伸。

注：
1、每根k线与每根k线（每个周期）的纵向高度差为SLOPE。
2、当SLOPE为0时,画的是水平线。
3、该函数支持在函数后设置线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的写法：
DRAWSL(COND,DATA,SLOPE,LEN,EXPAND,COLOR),LINETHICK;
4、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWSL(COND,DATA,SLOPE,LEN,EXPAND,COLOR);

例1：
DRAWSL(C>O,H,0,2,0,COLORYELLOW);//表示当前k线为阳线时，从最高价开始画长度为2个周期的水平线，颜色为黄色。

例2：
DRAWSL(LOW=LLV(LOW,50),LOW,5,3,2,COLORRED),LINETHICK5;//表示当前最低价等于50周期内的最小值时，从当前最低价开始以每隔5个点的斜率画长度为3个周期向右延伸的斜线，颜色为红色，线型粗细为5。
`;

const DRAWSL1 = new MySymbol();
DRAWSL1.label = "DRAWSL1";
DRAWSL1.description = "画线（段）";
DRAWSL1.insertText = "";
DRAWSL1.body = "DRAWSL1( , , , , )";
DRAWSL1.kind = MySymbolKind.Function;
DRAWSL1.marketType = MyMarketType.BasicFunction;
DRAWSL1.functionType = MyFunctionType.DrawingFunction;
DRAWSL1.returnType = MyFunctionReturnType.None;
DRAWSL1.parameters = MySymbol.createParametersFromStrings([]);
DRAWSL1.detail = "画线（段）";
DRAWSL1.documentation = `
DRAWSL1(COND,DATA,SLOPE,LEN,EXPAND),当条件满足时，在DATA数据处以每个周期相差SLOPE个价位作为斜率画LEN个周期长的线段
DRAWSL1 绘制直线（段）。

用法：
DRAWSL1(COND,DATA,SLOPE,LEN,EXPAND);
当COND条件满足时，在DATA数据处以每个周期相差SLOPE个价位作为斜率画LEN个周期长的线段。
EXPAND为延伸方向：0为向右，1为向左，2为双向。

注：
1、每根k线与每根k线（每个周期）的纵向高度差为SLOPE。
2、当SLOPE为0时,画的是水平线,LEN为负值或0则直线无限延伸。
3、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
DRAWSL1(COND,DATA,SLOPE,LEN,EXPAND),LINETHICK,COLOR;
DRAWSL1(COND,DATA,SLOPE,LEN,EXPAND),COLOR,LINETHICK;
4、不支持将该函数定义为变量，即不支持下面的写法：
A:DRAWSL1(COND,DATA,SLOPE,LEN,EXPAND);

例1：
DRAWSL1(C>O,H,0,2,0),COLORYELLOW;//表示当前k线为阳线时，从最高价开始画长度为2个周期的水平线，颜色为黄色。

例2：
DRAWSL1(LOW=LLV(LOW,50),LOW,5,3,1),COLORRED,LINETHICK5;//表示当前最低价等于50周期内的最小值时，从当前最低价开始以每隔5个点的斜率画长度为3个周期向左延伸的斜线，颜色为红色，线型粗细为5。
`;

const DRAWTEXT = new MySymbol();
DRAWTEXT.label = "DRAWTEXT";
DRAWTEXT.description = "显示文字";
DRAWTEXT.insertText = "";
DRAWTEXT.body = "DRAWTEXT( , , )";
DRAWTEXT.kind = MySymbolKind.Function;
DRAWTEXT.marketType = MyMarketType.BasicFunction;
DRAWTEXT.functionType = MyFunctionType.DrawingFunction;
DRAWTEXT.returnType = MyFunctionReturnType.None;
DRAWTEXT.parameters = MySymbol.createParametersFromStrings([]);
DRAWTEXT.detail = "显示文字";
DRAWTEXT.documentation = `
DRAWTEXT(COND,PRICE,TEXT),当COND条件满足时,在PRICE位置书写文字TEXT
DRAWTEXT：显示文字。

用法：
1、DRAWTEXT(COND,PRICE,TEXT);
当COND条件满足时,在PRICE位置书写文字TEXT。
2、DRAWTEXT(COND,PRICE,TEXT,COLOR);
当COND条件满足时,在PRICE位置书写文字TEXT,文字颜色为COLOR。

注：
1、显示的汉字用单引号标注
2、该函数可以用ALIGN，VALIGN设置文字的对齐方式。
3、该函数可以用FONTSIZE设置文字显示的字体大小
4、该函数可以用COLOR设置文字的颜色，即该函数支持如下写法：DRAWTEXT(COND,PRICE,TEXT),COLOR;

例1：
DRAWTEXT(CLOSE<OPEN&&REF(CLOSE,1)<REF(OPEN,1)&&REF(VOL,1)*1.1<VOL,LOW,'注');// 
表示连续两日收阴并且成交量比前一日至少多10%时，在最低价上写"注"字。
例2：
DRAWTEXT(L<=LLV(L,10),LOW,'新低'),ALIGN0,FONTSIZE16,COLORRED;//表示当根k线创10周期新低时，在最低价写"新低"字，文字左对齐，字体大小为16，文字颜色为红色。
`;

const DRAWVALID = new MySymbol();
DRAWVALID.label = "DRAWVALID";
DRAWVALID.description = "连接数据的有效值画折线";
DRAWVALID.insertText = "";
DRAWVALID.body = "DRAWVALID()";
DRAWVALID.kind = MySymbolKind.Function;
DRAWVALID.marketType = MyMarketType.TPlusZeroStrategyFunction;
DRAWVALID.functionType = MyFunctionType.DrawingFunction;
DRAWVALID.returnType = MyFunctionReturnType.None;
DRAWVALID.parameters = MySymbol.createParametersFromStrings([]);
DRAWVALID.detail = "连接数据的有效值画折线";
DRAWVALID.documentation = `
DRAWVALID(DATA);连接DATA中的有效值画折线
DRAWVALID 连接数据的有效值画折线

用法：
DRAWVALID(DATA);连接DATA中的有效值画折线
注：无效值指的是空值，该函数连接K线图中各个非空值的点

例1：DRAWVALID(IFELSE(C>O,H,NULL));//连接K线图中所有阳线的最高价
`;

const DUALVOLUME = new MySymbol();
DUALVOLUME.label = "DUALVOLUME";
DUALVOLUME.description = "多空量函数";
DUALVOLUME.insertText = "";
DUALVOLUME.body = "DUALVOLUME( )";
DUALVOLUME.kind = MySymbolKind.Function;
DUALVOLUME.marketType = MyMarketType.BasicFunction;
DUALVOLUME.functionType = MyFunctionType.CandlestickDataReference;
DUALVOLUME.returnType = MyFunctionReturnType.None;
DUALVOLUME.parameters = MySymbol.createParametersFromStrings([]);
DUALVOLUME.detail = "多空量函数";
DUALVOLUME.documentation = `
DUALVOLUME('M'),返回值代表一段时间内的（主动买-主动卖）的平均数值DUALVOLUME('N'),返回值代表主动买-主动卖的量差
DUALVOLUME 多空量函数

该函数有两种用法：
1、DUALVOLUME('M')：括号中填写M，则函数返回一定周期内的（主动买量-主动卖量）的平均数值。
2、DUALVOLUME('N')：括号中填写N，则函数返回K线图上主动买量-主动卖量的差。

注：
1、用法1：“一定周期”由参数P的数值决定，如果不定义P，默认为5周期。P不能直接定义，需要在参数列表中定义。
2、主动买量比例和主动卖量比例相等或者一边是100%，不画柱。
3、在日、周、月周期上考虑交割信息（即交割后，重新挂牌，要重新计算）。
4、在日线下以周期例如1分钟、3分钟不跨日计算（即新的交易日的第一根开始重新计算）。
5、指数没有主动买和主动卖的概念，所以该函数在指数合约日线周期的比例是根据该指数的所有合约计算的；并且指数合约日线以下周期不支持该函数。

例1：
M:=DUALVOLUME('M');//5周期（主动买量-主动卖量）的平均数值。
N:=DUALVOLUME('N');//主动买量-主动卖量的差
DRAWCOLUMNCHART(N,SCALE>=0.5,M>=0);
//当主动买大于主动卖的时候，向上画柱高为N的红柱。反之向下画柱高为N的绿柱

例2：
//在参数列表中定义P的缺省值为10。
M:=DUALVOLUME('M');//10周期（主动买量-主动卖量）的平均数值。
N:=DUALVOLUME('N');//主动买量-主动卖量的差
DRAWCOLUMNCHART(N,SCALE>=0.5,M>=0);
//当主动买大于主动卖的时候，向上画柱高为N的红柱。反之向下画柱高为N的绿柱
`;

const EMA = new MySymbol();
EMA.label = "EMA";
EMA.description = "指数加权移动平均";
EMA.insertText = "";
EMA.body = "EMA( , )";
EMA.kind = MySymbolKind.Function;
EMA.marketType = MyMarketType.BasicFunction;
EMA.functionType = MyFunctionType.FinancialStatisticsFunction;
EMA.returnType = MyFunctionReturnType.None;
EMA.parameters = MySymbol.createParametersFromStrings([]);
EMA.detail = "指数加权移动平均";
EMA.documentation = `
EMA(X,N),求X的N日指数加权移动平均值
EMA(X,N)：求N周期X值的指数加权移动平均（平滑移动平均）。

注：
1、N包含当前k线。
2、对距离当前较近的k线赋予了较大的权重。
3、当N为有效值，但当前的k线数不足N根，按N根计算。
4、N为0或空值时返回值为空值。
5、N可以为变量

EMA(X,N)=2*X/(N+1)+(N-1)*REF(EMA(X,N),1)/(N+1)

例1：
EMA10:=EMA(C,10);//求收盘价10周期指数加权移动平均值
`;

const EMA2 = new MySymbol();
EMA2.label = "EMA2";
EMA2.description = "线性加权移动平均";
EMA2.insertText = "";
EMA2.body = "EMA2( , )";
EMA2.kind = MySymbolKind.Function;
EMA2.marketType = MyMarketType.BasicFunction;
EMA2.functionType = MyFunctionType.FinancialStatisticsFunction;
EMA2.returnType = MyFunctionReturnType.None;
EMA2.parameters = MySymbol.createParametersFromStrings([]);
EMA2.detail = "线性加权移动平均";
EMA2.documentation = `
EMA2(X,N),求X的N个周期的线性加权平均值
EMA2(X,N);//求N周期X值的线性加权移动平均(也称WMA)

EMA2(X,N)=[N*X0+(N-1)*X1+(N-2)*X2+...+1*X(N-1)]/[N+(N-1)+(N-2)+...+1],X0表示本周期值，X1表示上一周期值 

注：
1、N包含当前k线。
2、当N为有效值，但当前的k线数不足N根，返回值为空值。
3、N为0或空值时返回值为空值。
4、N可以为变量

例1：
EMA2(H,5);//求最高价在5个周期的线性加权移动平均值。
`;

const EMAWH = new MySymbol();
EMAWH.label = "EMAWH";
EMAWH.description = "指数加权移动平均";
EMAWH.insertText = "";
EMAWH.body = "EMAWH( , )";
EMAWH.kind = MySymbolKind.Function;
EMAWH.marketType = MyMarketType.BasicFunction;
EMAWH.functionType = MyFunctionType.FinancialStatisticsFunction;
EMAWH.returnType = MyFunctionReturnType.None;
EMAWH.parameters = MySymbol.createParametersFromStrings([]);
EMAWH.detail = "指数加权移动平均";
EMAWH.documentation = `
EMAWH（X,N),求X的N日指数加权移动平均值
EMAWH(C,N)，指数加权移动平均，也叫平滑移动平均，采用指数加权方法，对距离当前较近的K线赋予了较大的权重。
注：
1、当N为有效值，当前的k线数不足N根时，或者前面周期的取值仍作用于当前周期时，EMAWH返回值为空值
因为EMAWH计算公式中着重考虑了当周期的权重，所以当周期较长，前面的周期取值对当前的影响越小，EMAWH从前面数据对当前周期不再影响时的取值开始显示，所以即使选择的数据起始时间不同，当前已经显示的K线的EMAWH的取值也不会发生变化
2、当N为0或空值时返回值均为空值
3、N不能为变量

EMAWH(C,N)=2*C/(N+1)+(N-1)*REF(EMAWH(C,N),1)/(N+1)

注：
EMAWH用法同EMA(C,N)
`;

const ENTRYSIG_PLACE = new MySymbol();
ENTRYSIG_PLACE.label = "ENTRYSIG_PLACE";
ENTRYSIG_PLACE.description = "取指定开仓信号的K线位置";
ENTRYSIG_PLACE.insertText = "";
ENTRYSIG_PLACE.body = "ENTRYSIG_PLACE()";
ENTRYSIG_PLACE.kind = MySymbolKind.Function;
ENTRYSIG_PLACE.marketType = MyMarketType.TPlusZeroStrategyFunction;
ENTRYSIG_PLACE.functionType = MyFunctionType.SignalLoggingFunction;
ENTRYSIG_PLACE.returnType = MyFunctionReturnType.None;
ENTRYSIG_PLACE.parameters = MySymbol.createParametersFromStrings([]);
ENTRYSIG_PLACE.detail = "取指定开仓信号的K线位置";
ENTRYSIG_PLACE.documentation = `
ENTRYSIG_PLACE(N)取一次完整交易第N个开仓信号距离当前K线的位置。
ENTRYSIG_PLACE(N) 取一次完整交易中第N个开仓信号所在K线的位置。

用法：ENTRYSIG_PLACE(N) 取一次完整交易中第N个开仓信号所在K线的位置。如果没有开仓信号，则该函数返回空值。

注：
1、开仓信号有：BK,SK,BPK,SPK
2、从开仓到持仓为0被视为一次完整交易。
3、一次完整交易中开仓信号个数小于N时，该函数返回空值。
4、K线位置是指当前K线到指定开仓信号所在K线的根数。
5、N为0或空值时，该函数返回空值。
6、参数N不支持为变量。

例：
ENTRYSIG_PLACE(3)=5&&BKVOL>0,SP(BKVOL);//如果第3个开仓信号所在K线距离当前K线有5根K线，并且多头持仓大于0，卖平仓
`;

const ENTRYSIG_PRICE = new MySymbol();
ENTRYSIG_PRICE.label = "ENTRYSIG_PRICE";
ENTRYSIG_PRICE.description = "取指定开仓信号的价格";
ENTRYSIG_PRICE.insertText = "";
ENTRYSIG_PRICE.body = "ENTRYSIG_PRICE()";
ENTRYSIG_PRICE.kind = MySymbolKind.Function;
ENTRYSIG_PRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
ENTRYSIG_PRICE.functionType = MyFunctionType.SignalLoggingFunction;
ENTRYSIG_PRICE.returnType = MyFunctionReturnType.None;
ENTRYSIG_PRICE.parameters = MySymbol.createParametersFromStrings([]);
ENTRYSIG_PRICE.detail = "取指定开仓信号的价格";
ENTRYSIG_PRICE.documentation = `
ENTRYSIG_PRICE(N)取一次完整交易第N个开仓信号的价格。
ENTRYSIG_PRICE(N) 取一次完整交易中第N个开仓信号的价格。

用法：ENTRYSIG_PRICE(N) 取一次完整交易中第N个开仓信号的价格。如果没有开仓信号，则该函数返回空值。

注：
1、开仓信号有：BK,SK,BPK,SPK
2、从开仓到持仓为0被视为一次完整交易。
3、一次完整交易中开仓信号个数小于N时，该函数返回空值。
4、N为0或空值时，该函数返回空值。
5、参数N不支持为变量。
6、该函数的计算包含滑点
7、收盘价模型：在指定信号的当根K线函数的取值不会发生变化；
  指令价模型：在指定信号的当根K线返回当次交易第N个开仓信号的价格。

例：
ENTRYSIG_PRICE(3)=3000&&BKVOL>0,SP(BKVOL);//如果第3个固定的开仓信号的开仓价位为3000，并且多头持仓大于0，卖平仓
`;

const ENTRYSIG_VOL = new MySymbol();
ENTRYSIG_VOL.label = "ENTRYSIG_VOL";
ENTRYSIG_VOL.description = "取指定开仓信号的信号手数";
ENTRYSIG_VOL.insertText = "";
ENTRYSIG_VOL.body = "ENTRYSIG_VOL()";
ENTRYSIG_VOL.kind = MySymbolKind.Function;
ENTRYSIG_VOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
ENTRYSIG_VOL.functionType = MyFunctionType.SignalLoggingFunction;
ENTRYSIG_VOL.returnType = MyFunctionReturnType.None;
ENTRYSIG_VOL.parameters = MySymbol.createParametersFromStrings([]);
ENTRYSIG_VOL.detail = "取指定开仓信号的信号手数";
ENTRYSIG_VOL.documentation = `
ENTRYSIG_VOL(N)取一次完整交易第N个开仓信号的信号手数。
ENTRYSIG_VOL(N) 取一次完整交易中第N个开仓信号的信号手数。

用法：ENTRYSIG_VOL(N) 取一次完整交易中第N个开仓信号的信号手数。如果没有开仓信号，则该函数返回空值。

注：
1、开仓信号有：BK,SK,BPK,SPK
2、从开仓到持仓为0被视为一次完整交易。
3、一次完整交易中开仓信号个数小于N时，该函数返回空值。
4、N为0或空值时，该函数返回空值。
5、参数N不支持为变量。
6、收盘价模型：在指定信号的当根K线函数的取值不会发生变化；
  指令价模型：在指定信号的当根K线返回当次交易第N个开仓信号的信号手数。

例：
ENTRYSIG_PRICE(3)=3000&&ENTRYSIG_VOL(3)>2,SP(BKVOL);//如果第3个固定的开仓信号的开仓价位为3000，并且第3个固定的开仓信号的信号手数大于2，卖平仓
`;

const EVERY = new MySymbol();
EVERY.label = "EVERY";
EVERY.description = "判断是否持续满足";
EVERY.insertText = "";
EVERY.body = "EVERY( , )";
EVERY.kind = MySymbolKind.Function;
EVERY.marketType = MyMarketType.BasicFunction;
EVERY.functionType = MyFunctionType.LogicalJudgmentFunction;
EVERY.returnType = MyFunctionReturnType.None;
EVERY.parameters = MySymbol.createParametersFromStrings([]);
EVERY.detail = "判断是否持续满足";
EVERY.documentation = `
EVERY(X,N),判断过去一定周期N内，是否一直满足条件X如果一直满足返回1，否则返回0
EVERY(COND,N)，判断N周期内，是否一直满足COND条件。若满足函数返回值为1，不满足函数返回值为0；

注：
1、N包含当前k线。
2、若N是有效数值，但前面没有那么多K线,或者N为空值，代表条件不满足，函数返回值为0。
3、N可以是变量

例1：
EVERY(CLOSE>OPEN,5);//表示5个周期内一直是阳线
例2：
MA5:=MA(C,5);//定义5周期均线
MA10:=MA(C,10);//定义10周期均线
EVERY(MA5>MA10,4),BK;//4个周期内MA5都大于MA10，则买开仓。
//EVERY(MA5>MA10,4),BK;   与   EVERY(MA5>MA10,4)=1,BK;    表达同等意义
`;

const EXIST = new MySymbol();
EXIST.label = "EXIST";
EXIST.description = "判断是否存在满足";
EXIST.insertText = "";
EXIST.body = "EXIST( , )";
EXIST.kind = MySymbolKind.Function;
EXIST.marketType = MyMarketType.BasicFunction;
EXIST.functionType = MyFunctionType.LogicalJudgmentFunction;
EXIST.returnType = MyFunctionReturnType.None;
EXIST.parameters = MySymbol.createParametersFromStrings([]);
EXIST.detail = "判断是否存在满足";
EXIST.documentation = `
EXIST(X,N),判断过去周期N内，是否有满足条件X如果有满足X条件的K线，返回1；如果没有满足X条件的K线，则返回0
EXIST(COND,N) 判断N个周期内是否有满足COND的条件

注:
1、N包含当前k线。
2、N可以是变量。
3、若N是有效数值，但前面没有那么多K线，按实际周期数计算

例1：
EXIST(CLOSE>REF(HIGH,1),10);表示10个周期中是否存在收盘价大于前一个周期的最高价，存在返回1，不存在则返回0.
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;
EXIST(C>MA(C,5),N);// 表示当天是否有满足收盘价大于5周期均线的k线，存在返回1，不存在返回0
`;

const EXITSIG_PLACE = new MySymbol();
EXITSIG_PLACE.label = "EXITSIG_PLACE";
EXITSIG_PLACE.description = "取指定平仓信号的K线位置";
EXITSIG_PLACE.insertText = "";
EXITSIG_PLACE.body = "EXITSIG_PLACE()";
EXITSIG_PLACE.kind = MySymbolKind.Function;
EXITSIG_PLACE.marketType = MyMarketType.TPlusZeroStrategyFunction;
EXITSIG_PLACE.functionType = MyFunctionType.SignalLoggingFunction;
EXITSIG_PLACE.returnType = MyFunctionReturnType.None;
EXITSIG_PLACE.parameters = MySymbol.createParametersFromStrings([]);
EXITSIG_PLACE.detail = "取指定平仓信号的K线位置";
EXITSIG_PLACE.documentation = `
EXITSIG_PLACE(N)取一次完整交易第N个平仓信号距离当前K线的位置。
EXITSIG_PLACE(N) 取一次完整交易中第N个平仓信号所在K线的位置。

用法：EXITSIG_PLACE(N) 取一次完整交易中第N个平仓信号所在K线的位置。如果没有平仓信号，则该函数返回空值。

注：
1、平仓信号有：BP,SP,CLOSEOUT,STOP
2、从开仓到持仓为0被视为一次完整交易。
3、平仓信号个数小于N时，该函数返回空值。
4、K线位置是指当前K线到指定平仓信号所在K线的根数。
5、N为0或空值时，该函数返回空值。
6、参数N不支持为变量。

例：
EXITSIG_PLACE(3)=5&&BKVOL<=0,BK(2);//如果第3个平仓信号所在K线距离当前K线有5根K线，并且没有多头持仓，买开仓2手
`;

const EXITSIG_PRICE = new MySymbol();
EXITSIG_PRICE.label = "EXITSIG_PRICE";
EXITSIG_PRICE.description = "取指定平仓信号的价格";
EXITSIG_PRICE.insertText = "";
EXITSIG_PRICE.body = "EXITSIG_PRICE()";
EXITSIG_PRICE.kind = MySymbolKind.Function;
EXITSIG_PRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
EXITSIG_PRICE.functionType = MyFunctionType.SignalLoggingFunction;
EXITSIG_PRICE.returnType = MyFunctionReturnType.None;
EXITSIG_PRICE.parameters = MySymbol.createParametersFromStrings([]);
EXITSIG_PRICE.detail = "取指定平仓信号的价格";
EXITSIG_PRICE.documentation = `
EXITSIG_PRICE(N)取一次完整交易第N个平仓信号的价格。
EXITSIG_PRICE(N) 取一次完整交易中第N个平仓信号的价格。

用法：EXITSIG_PRICE(N) 取一次完整交易中第N个平仓信号的价格。如果没有平仓信号，则该函数返回空值。

注：
1、平仓信号有：BP,SP,CLOSEOUT,STOP
2、从开仓到持仓为0被视为一次完整交易。
3、一次完整交易中平仓信号个数小于N时，该函数返回空值。
4、N为0或空值时，该函数返回0。
5、参数N不支持为变量。
6、该函数的计算包含滑点
7、收盘价模型：在指定信号的当根K线函数的取值不会发生变化；
  指令价模型：在指定信号的当根K线返回当次交易第N个平仓信号的价格。

例：
EXITSIG_PRICE(3)=3000&&BKVOL>0,SP(BKVOL);//如果第3个固定的平仓信号的平仓价位为3000，并且多头持仓大于0，卖平仓
`;

const EXITSIG_VOL = new MySymbol();
EXITSIG_VOL.label = "EXITSIG_VOL";
EXITSIG_VOL.description = "取指定平仓信号的信号手数";
EXITSIG_VOL.insertText = "";
EXITSIG_VOL.body = "EXITSIG_VOL()";
EXITSIG_VOL.kind = MySymbolKind.Function;
EXITSIG_VOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
EXITSIG_VOL.functionType = MyFunctionType.SignalLoggingFunction;
EXITSIG_VOL.returnType = MyFunctionReturnType.None;
EXITSIG_VOL.parameters = MySymbol.createParametersFromStrings([]);
EXITSIG_VOL.detail = "取指定平仓信号的信号手数";
EXITSIG_VOL.documentation = `
EXITSIG_VOL(N)取一次完整交易第N个平仓信号的信号手数。
EXITSIG_VOL(N) 取一次完整交易中第N个平仓信号的信号手数。

用法：EXITSIG_VOL(N) 取一次完整交易中第N个平仓信号的信号手数。如果没有平仓信号，则该函数返回空值。

注：
1、平仓信号有：BP,SP,CLOSEOUT,STOP
2、从开仓到持仓为0被视为一次完整交易。
3、一次完整交易中平仓信号个数小于N时，该函数返回空值。
4、N为0或空值时，该函数返回0。
5、参数N不支持为变量。
6、收盘价模型：在指定信号的当根K线函数的取值不会发生变化；
  指令价模型：在指定信号的当根K线返回当次交易第N个平仓信号的信号手数。

例：
EXITSIG_PRICE(3)=3000&&EXITSIG_VOL(3)>2,BK(2);//如果第3个固定的平仓信号的平仓价位为3000，并且第3个固定的平仓信号的信号手数大于2，买开仓2手
`;

const EXP = new MySymbol();
EXP.label = "EXP";
EXP.description = "指数";
EXP.insertText = "";
EXP.body = "EXP( )";
EXP.kind = MySymbolKind.Function;
EXP.marketType = MyMarketType.BasicFunction;
EXP.functionType = MyFunctionType.MathFunction;
EXP.returnType = MyFunctionReturnType.None;
EXP.parameters = MySymbol.createParametersFromStrings([]);
EXP.detail = "指数";
EXP.documentation = `
EXP(X),求e的X次幂
EXP(X)：求e的X次幂。

例1：
C*EXP(0.01);//求收盘价乘以e的0.01次幂
`;

const EXPIREDATE = new MySymbol();
EXPIREDATE.label = "EXPIREDATE";
EXPIREDATE.description = "返回期货合约的最后交易日";
EXPIREDATE.insertText = "";
EXPIREDATE.body = "EXPIREDATE()";
EXPIREDATE.kind = MySymbolKind.Function;
EXPIREDATE.marketType = MyMarketType.BasicFunction;
EXPIREDATE.functionType = MyFunctionType.TimeFunction;
EXPIREDATE.returnType = MyFunctionReturnType.None;
EXPIREDATE.parameters = MySymbol.createParametersFromStrings([]);
EXPIREDATE.detail = "返回期货合约的最后交易日";
EXPIREDATE.documentation = `
TIME0求当前周期自该日0点以来的秒数EXPIREDATE(CODE)返回期货合约的最后交易日,CODE为文华码
EXPIREDATE(CODE) 返回期货合约的最后交易日。

用法：EXPIREDATE(CODE);取得合约的最后交易日。CODE为文华码。

注：
1、该函数返回期货合约的最后交易日，返回YYMMDD的形式。
2、该函数只支持应用在日线及以下周期使用，在日周期以上的周期该函数返回值为0。

3、CODE位置：

  写入''时默认取当前合约。

  写入主连合约，返回对应的主力合约的最后交易日
。
  写入月份合约，返回对应的月份合约的最后交易日。

  写入加权合约，返回值为0。

4、该函数不支持在外盘主连合约上使用。

例：
EXPIREDATE('');//加载到IF1406上返回值为140620。
`;

const FEE = new MySymbol();
FEE.label = "FEE";
FEE.description = "手续费";
FEE.insertText = "";
FEE.body = "FEE";
FEE.kind = MySymbolKind.Function;
FEE.marketType = MyMarketType.TPlusZeroStrategyFunction;
FEE.functionType = MyFunctionType.PositionManagementFunction;
FEE.returnType = MyFunctionReturnType.None;
FEE.parameters = MySymbol.createParametersFromStrings([]);
FEE.detail = "手续费";
FEE.documentation = `
FEE返回当前合约的手续费
FEE手续费

用法：FEE返回当前合约的手续费，用于模型中资金、手数相关计算。

注：
1、主图加载、回测中，FEE取值为回测参数中，对手续费的设置
2、模组运行时，FEE取值为模组加载时单元参数中手续费的设置
3、当交易品种手续费为按手数收取，返回值为手续费数值
4、当交易品种手续费按比例收取,返回值为手续费比例，数值为小数

例：
K:=MONEYTOT*0.2/(C*MARGIN*UNIT+FEE); //理论权益的20%可以开仓的手数（此写法适用于按固定手数收取手续费的合约）
`;

const FILLRGN = new MySymbol();
FILLRGN.label = "FILLRGN";
FILLRGN.description = "填充函数";
FILLRGN.insertText = "";
FILLRGN.body = "FILLRGN( , , , )";
FILLRGN.kind = MySymbolKind.Function;
FILLRGN.marketType = MyMarketType.BasicFunction;
FILLRGN.functionType = MyFunctionType.DrawingFunction;
FILLRGN.returnType = MyFunctionReturnType.None;
FILLRGN.parameters = MySymbol.createParametersFromStrings([]);
FILLRGN.detail = "填充函数";
FILLRGN.documentation = `
FILLRGN(COND,DATA1,DATA2,COLOR),当条件满足时，以颜色COLOR填充DATA1及DATA2之间形成的区域
FILLRGN 条件满足时，填充某一区域。

用法：
FILLRGN(COND, DATA1, DATA2, COLOR); 
当条件COND满足时，以颜色COLOR填充DATA1及DATA2之间形成的区域。

注：
不支持将该函数定义为变量，即不支持下面的写法：
A:FILLRGN(COND,DATA1,DATA2,COLOR);

例1：
FILLRGN(ISUP,10,20,COLORRED);//当K线为阳线时，填充10到20之间的区域。
例2：
MA5:MA(C,5);
MA10:MA(C,10);
FILLRGN(MA5>MA10,MA5,MA10,COLORRED);//表示MA5>MA10时以红色填充MA5和MA10之间的区域。
`;

const FILLRGN1 = new MySymbol();
FILLRGN1.label = "FILLRGN1";
FILLRGN1.description = "填充函数";
FILLRGN1.insertText = "";
FILLRGN1.body = "FILLRGN1( , , )";
FILLRGN1.kind = MySymbolKind.Function;
FILLRGN1.marketType = MyMarketType.BasicFunction;
FILLRGN1.functionType = MyFunctionType.DrawingFunction;
FILLRGN1.returnType = MyFunctionReturnType.None;
FILLRGN1.parameters = MySymbol.createParametersFromStrings([]);
FILLRGN1.detail = "填充函数";
FILLRGN1.documentation = `
FILLRGN1(COND,DATA1,DATA2),当条件满足时，填充DATA1及DATA2之间的区域
FILLRGN1 条件满足时，填充某一区域。

用法：
FILLRGN1(COND, DATA1, DATA2); 
当条件COND满足时，填充DATA1及DATA2之间形成的区域。

注：
1、该函数支持在函数后设置颜色，即支持下面的写法：
FILLRGN1(COND, DATA1, DATA2), COLOR;
2、不支持将该函数定义为变量，即不支持下面的写法：
A:FILLRGN1(COND,DATA1,DATA2);

例1：
FILLRGN1(ISUP,10,20),COLORRED;//K线为阳线时，用红色填充10到20之间的区域。

例2：
MA5:MA(C,5);
MA10:MA(C,10);
FILLRGN1(MA5>MA10,MA5,MA10),COLORRED;//表示MA5>MA10时以红色填充MA5和MA10之间的区域。
`;

const FILTER = new MySymbol();
FILTER.label = "FILTER";
FILTER.description = "过滤";
FILTER.insertText = "";
FILTER.body = "FILTER( , )";
FILTER.kind = MySymbolKind.Function;
FILTER.marketType = MyMarketType.BasicFunction;
FILTER.functionType = MyFunctionType.LogicalJudgmentFunction;
FILTER.returnType = MyFunctionReturnType.None;
FILTER.parameters = MySymbol.createParametersFromStrings([]);
FILTER.detail = "过滤";
FILTER.documentation = `
FILTER(COND,N)当COND条件成立时，将其后N周期内的数据设置为0.
FILTER(COND,N) 当COND条件成立，将其后N周期内的数据设置为0.

注：
1、N为空值，返回空值。
2、N不能为变量

例1：
FILTER(CLOSE>OPEN,3);// 查找阳线，3天内再次出现的阳线不被记录在内
`;

const FINANCE_DATA = new MySymbol();
FINANCE_DATA.label = "FINANCE_DATA";
FINANCE_DATA.description = "取某一股票合约的财务数据";
FINANCE_DATA.insertText = "";
FINANCE_DATA.body = "FINANCE_DATA('')";
FINANCE_DATA.kind = MySymbolKind.Function;
FINANCE_DATA.marketType = MyMarketType.BasicFunction;
FINANCE_DATA.functionType = MyFunctionType.StockDataFunction;
FINANCE_DATA.returnType = MyFunctionReturnType.None;
FINANCE_DATA.parameters = MySymbol.createParametersFromStrings([]);
FINANCE_DATA.detail = "取某一股票合约的财务数据";
FINANCE_DATA.documentation = `
FINANCE_DATA('')取某一股票合约的财务数据。
FINANCE_DATA('') 取某一股票合约的财务数据。

用法：
FINANCE_DATA('每股收益');//加载后返回当前股票合约财务数据中每股收益的数据值。

注：
1、该函数只支持加载在股票合约上，在期货合约上返回空值。
2、该函数仅支持国内股票，不支持美国股票和香港股票。

例：
FINANCE_DATA('每股收益');//返回当前股票合约财务数据中每股收益的数据值。

//其中'每股收益'可以替换为以下
'每股净资产'
'净资产收益率(摊薄)%'
'净资产收益率(加权)%'
'每股经营现金'
'每股公积金'
'每股未分配'
'股东权益比%'
'净利润同比%'
'主营收入同比%'
'年每股收益'
'销售毛利率%'
'资产负债率%'
'营业总收入'
'营业利润'
'投资收益'
'营业外收支'
'利润总额'
'净利润'
'归母净利润'
'未分配利润'
'调整每股净资产'
'总资产'
'流动资产'
'固定资产'
'无形资产'
'流动负债'
'长期负债'
'总负债'
'股东权益'
'资本公积金'
'经营现金流量'
'投资现金流量'
'筹资现金流量'
'现金增加额'
'总股本'
'无限售股合计'
'A股'
'B股'
'流通股本'
'流通H股'
'其他流通股'
'自由流通股'
'限售股合计'
'国家持股'
'国有法人股'
'境内法人股'
'境内自然人股'
'其他发起人股'
'募集法人股'
'境外法人股'
'境外自然人股'

`;

const FLOOR = new MySymbol();
FLOOR.label = "FLOOR";
FLOOR.description = "向下舍入";
FLOOR.insertText = "";
FLOOR.body = "FLOOR( )";
FLOOR.kind = MySymbolKind.Function;
FLOOR.marketType = MyMarketType.BasicFunction;
FLOOR.functionType = MyFunctionType.MathFunction;
FLOOR.returnType = MyFunctionReturnType.None;
FLOOR.parameters = MySymbol.createParametersFromStrings([]);
FLOOR.detail = "向下舍入";
FLOOR.documentation = `
FLOOR(A),取沿A数值减小方向最接近的整数
FLOOR(A)：向数值减小方向舍入。

注：
FLOOR(A)返回沿A数值减小方向最接近的整数，若A为整数，则返回值为A。

例1：
FLOOR(2.1);//返回值为2；
例2：
FLOOR(-8.8);//返回值为-9；
例3：
FLOOR(5);//返回值为5；
例4：
IFELSE(C-INTPART(C)>=0.5,CEILING(C,1),FLOOR(C));//对收盘价四舍五入后取整数部分。
`;

const FONTSIZE = new MySymbol();
FONTSIZE.label = "FONTSIZE";
FONTSIZE.description = "设置字体大小";
FONTSIZE.insertText = "";
FONTSIZE.body = "FONTSIZE";
FONTSIZE.kind = MySymbolKind.Function;
FONTSIZE.marketType = MyMarketType.BasicFunction;
FONTSIZE.functionType = MyFunctionType.DrawingFunction;
FONTSIZE.returnType = MyFunctionReturnType.None;
FONTSIZE.parameters = MySymbol.createParametersFromStrings([]);
FONTSIZE.detail = "设置字体大小";
FONTSIZE.documentation = `

设置字体大小。
用法：
FONTSIZEX，X为8至72，表示字体由小到大。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:FONTSIZE9;

例1： 
DRAWTEXT(C>O,H,'阳线'),FONTSIZE10;//收盘价大于开盘价，则在K线最高价处以10的字体大小标注阳线。
例2： 
DRAWTEXT(C<O,L,'阴线'),ALIGN0,VALIGN2,FONTSIZE30;//收盘价小于开盘价，则在K线最低价处以30的字体大小，居左居上标注阴线。
`;

const FORCAST = new MySymbol();
FORCAST.label = "FORCAST";
FORCAST.description = "线性回归值";
FORCAST.insertText = "";
FORCAST.body = "FORCAST( , )";
FORCAST.kind = MySymbolKind.Function;
FORCAST.marketType = MyMarketType.BasicFunction;
FORCAST.functionType = MyFunctionType.MathematicalStatisticsFunction;
FORCAST.returnType = MyFunctionReturnType.None;
FORCAST.parameters = MySymbol.createParametersFromStrings([]);
FORCAST.detail = "线性回归值";
FORCAST.documentation = `
FORCAST(X,N),求X的N周期线性回归预测值
FORCAST(X,N)：为X的N周期线性回归预测值。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值；
5、N可以是变量

算法举例：用最小平方法计算FORCAST(C,3)在最近一根K线上的值
1、建立一元线性方程：y=a+b*i+m
2、y的估计值：y(i)^=a+b*i
3、求残差：m^=y(i)-y(i)^=y(i)-a-b*i
4、误差平方和：
Q=m(1)*m(1)+...+m(3)*m(3)=[y(1)-a-b*1]*[y(1)-a-b*1]+...+[y(3)-a-b*3]*[y(3)-a-b*3]
5、对线性方程中的参数a,b求一阶偏导:
2*{[y(1)-a-b*1]+...+[y(3)-a-b*3]}*(-1)=0
2*[y(1)-a-b*1]*(-1)+...+[y(3)-a-b*3]*(-3)=0
6、联立以上两个公式，解出a,b的值：
a=(y(1)+y(2)+y(3))/3-b(i(1)+i(2)+i(3))/3
b=(y(1)*i(1)+y(2)*i(2)+y(3)*i(3)-(3*((i(1)+i(2)+i(3))/3)*((y(1)+y(2)+y(3))/3))/((i(1)^2+i(2)^2+i(3)^2)-3*((i(1)+i(2)+i(3))/3)^2)
7、将a，b，i值带入1，求出y值

以上公式用麦语言函数可以表示如下：
BB:(3*C+2*REF(C,1)+REF(C,2)-(3*((1+2+3)/3)*MA(C,3)))/((SQUARE(1)+SQUARE(2)+SQUARE(3))-3*SQUARE((1+2+3)/3));
AA:MA(C,3)-BB*(1+2+3)/3;
YY:AA+BB*3;

例:
FORCAST(CLOSE,5);//表示求5周期线性回归预测值
`;

const GROUP = new MySymbol();
GROUP.label = "GROUP";
GROUP.description = "判断分组的组别";
GROUP.insertText = "";
GROUP.body = "GROUP()";
GROUP.kind = MySymbolKind.Function;
GROUP.marketType = MyMarketType.TPlusZeroStrategyFunction;
GROUP.functionType = MyFunctionType.SignalLoggingFunction;
GROUP.returnType = MyFunctionReturnType.None;
GROUP.parameters = MySymbol.createParametersFromStrings([]);
GROUP.detail = "判断分组的组别";
GROUP.documentation = `
GROUP判断分组的组别
GROUP('group') 判断分组的组别。

注：
1、参数group为A—I分别返回1-9。
2、与LASTSIGGROUP函数配合使用，可以判断最后一个信号所在的组别。

例：
CROSS(C,MA(C,5)),BK('A',1);//最新价上穿五周期均线，A组做多一手
CROSS(MA(C,5),C),SP('A',BKVOL);//最新价下穿五周期均线，A组平仓
CROSS(C,MA(C,10)),BK('B',2);//最新价上穿十周期均线，B组做多两手
LASTSIG=200&&LASTSIGGROUP=GROUP('B'),SP('B',BKVOL);//上一个信号是B组的BK信号，则B组平仓
`;

const GROUPBKPRICE = new MySymbol();
GROUPBKPRICE.label = "GROUPBKPRICE";
GROUPBKPRICE.description = "指令分组模型相应组别的最近一次买开信号价位";
GROUPBKPRICE.insertText = "";
GROUPBKPRICE.body = "GROUPBKPRICE";
GROUPBKPRICE.kind = MySymbolKind.Function;
GROUPBKPRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
GROUPBKPRICE.functionType = MyFunctionType.SignalLoggingFunction;
GROUPBKPRICE.returnType = MyFunctionReturnType.None;
GROUPBKPRICE.parameters = MySymbol.createParametersFromStrings([]);
GROUPBKPRICE.detail = "指令分组模型相应组别的最近一次买开信号价位";
GROUPBKPRICE.documentation = `
GROUPBKPRICE('X'),X为指令分组组别，A-I返回分组指令X组最近一次模型买开位置的买开信号价位
GROUPBKPRICE('letter') 指令分组模型letter组最近一次买开信号价位。

用法：
GROUPBKPRICE('A') 返回A组最近一次买开信号价位。

例：
C>O,BK('A');
BB:GROUPBKPRICE('A');//给BB赋值为A组指令中最近一次买开信号价位。
`;

const GROUPBKVOL = new MySymbol();
GROUPBKVOL.label = "GROUPBKVOL";
GROUPBKVOL.description = "指令分组模型买开信号手数";
GROUPBKVOL.insertText = "";
GROUPBKVOL.body = "BKVOL";
GROUPBKVOL.kind = MySymbolKind.Function;
GROUPBKVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
GROUPBKVOL.functionType = MyFunctionType.SignalLoggingFunction;
GROUPBKVOL.returnType = MyFunctionReturnType.None;
GROUPBKVOL.parameters = MySymbol.createParametersFromStrings([]);
GROUPBKVOL.detail = "指令分组模型买开信号手数";
GROUPBKVOL.documentation = `
GROUPBKVOL('X'),X为指令分组组别，A-I取指令分组模型X组的模组多头持仓.
GROUPBKVOL('letter') 取指令分组模型letter组的买开信号手数。

用法：
GROUPBKVOL('A')返回指令分组模型组A的多头模组持仓。
参数可以取从A-I

注：
相应组的买开信号后，GROUPBKVOL('A')增加，即BK('A'),BPK('A'),BK('A',1)后GROUPBKVOL('A')增加，其他组的开仓信号，GROUPBKVOL('A')取值不变
相应组的卖平信号后，GROUPBKVOL('A')取值相应的减少，即SP('A'),SPK('A'),SP('A',1)后，GROUPBKVOL('A')取值减少，其他组的平仓信号后，GROUPBKVOL('A')取值不变
全清信号后，GROUPBKVOL('A')取值减为0

例：
MA1:MA(C,5);
C>MA1,BK('A',1);
C>O,BK('B',1);
GROUPBKVOL('A')>0&&C>REF(H,1),BK('A',1);//A组多头持仓大于0并且最新价大于前一周前最高价，再买开一手
C<MA1,SP('A',GROUPBKVOL('A'));//最新价小于5日均线，卖平所有的A组的多头持仓
C<O,SP('B',GROUPBKVOL('B'));//K线收阴线，卖平所有的B组多头持仓
`;

const GROUPSKPRICE = new MySymbol();
GROUPSKPRICE.label = "GROUPSKPRICE";
GROUPSKPRICE.description = "指令分组模型相应组别的最近一次卖开信号价位";
GROUPSKPRICE.insertText = "";
GROUPSKPRICE.body = "GROUPSKPRICE";
GROUPSKPRICE.kind = MySymbolKind.Function;
GROUPSKPRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
GROUPSKPRICE.functionType = MyFunctionType.SignalLoggingFunction;
GROUPSKPRICE.returnType = MyFunctionReturnType.None;
GROUPSKPRICE.parameters = MySymbol.createParametersFromStrings([]);
GROUPSKPRICE.detail = "指令分组模型相应组别的最近一次卖开信号价位";
GROUPSKPRICE.documentation = `
GROUPSKPRICE('X'),X为指令分组组别，A-I,返回分组指令X组最近一次模型卖开位置的卖开信号价位
GROUPSKPRICE('letter')  指令分组模型letter组最近一次卖开信号价位。

用法：
GROUPSKPRICE('A') 返回A组最近一次卖开信号价位。

例：
C<O,SK('B');
SS:GROUPSKPRICE('B');//给SS赋值为B组指令中最近一次卖开信号价位。
`;

const GROUPSKVOL = new MySymbol();
GROUPSKVOL.label = "GROUPSKVOL";
GROUPSKVOL.description = "指令分组模型卖开信号手数";
GROUPSKVOL.insertText = "";
GROUPSKVOL.body = "GROUPSKVOL";
GROUPSKVOL.kind = MySymbolKind.Function;
GROUPSKVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
GROUPSKVOL.functionType = MyFunctionType.SignalLoggingFunction;
GROUPSKVOL.returnType = MyFunctionReturnType.None;
GROUPSKVOL.parameters = MySymbol.createParametersFromStrings([]);
GROUPSKVOL.detail = "指令分组模型卖开信号手数";
GROUPSKVOL.documentation = `
GROUPSKVOL('X'),X为指令分组组别，A-I取指令分组模型X组的模组空头持仓.
GROUPSKVOL('letter') 取指令分组模型letter组的卖开信号手数。

用法：
GROUPSKVOL('A')返回指令分组模型组A的空头模组持仓。
参数可以取从A-I

注：
相应组的卖开信号后，GROUPSKVOL('A')增加，即SK('A'),SPK('A'),SK('A',1)后GROUPSKVOL('A')增加，其他组的开仓信号，GROUPSKVOL('A')取值不变
相应组的买平信号后，GROUPSKVOL('A')取值减少，即BP('A'),BPK('A'),BP('A',1)后，GROUPSKVOL('A')取值减少，其他组的平仓信号后，GROUPSKVOL('A')取值不变
全清信号后，GROUPBKVOL('A')取值减为0

例：
MA1:MA(C,5);
C<MA1,SK('A',1);
C<O,SK('B',1);
GROUPSKVOL('A')>0&&C<REF(L,1),SK('A',1); //A组空头持仓大于0并且最新价大于前一周前最高价，再卖开一手
C>MA1,BP('A',GROUPSKVOL('A')); //最新价大于5日均线，买平所有的A组的空头持仓
C>O,BP('B',GROUPSKVOL('B')); //K线收阳线，买平所有的B组空头持仓
`;

const HARMEAN = new MySymbol();
HARMEAN.label = "HARMEAN";
HARMEAN.description = "调和平均值";
HARMEAN.insertText = "";
HARMEAN.body = "HARMEAN( , )";
HARMEAN.kind = MySymbolKind.Function;
HARMEAN.marketType = MyMarketType.BasicFunction;
HARMEAN.functionType = MyFunctionType.FinancialStatisticsFunction;
HARMEAN.returnType = MyFunctionReturnType.None;
HARMEAN.parameters = MySymbol.createParametersFromStrings([]);
HARMEAN.detail = "调和平均值";
HARMEAN.documentation = `
HARMEAN(X,N)求X在N个周期内的调和平均值
HARMEAN(X,N) 求X在N个周期内的调和平均值。

算法举例：HARMEAN(X,5)=1/[(1/X1+1/X2+1/X3+1/X4+1/X5)/5]

注：
1、N包含当前k线。
2、调和平均值与倒数的简单平均值互为倒数。
3、当N为有效值，但当前的k线数不足N根，函数返回空值。
4、N为0或空值的情况下，函数返回空值。
5、X为0或空值的情况下，函数返回空值。
6、N可以为变量。

例：
HM5:=HARMEAN(C,5);//求5周期收盘价的调和平均值。
`;

const HASTRADEDATA = new MySymbol();
HASTRADEDATA.label = "HASTRADEDATA";
HASTRADEDATA.description = "判断数据合约当根K线交易合约是否有数据";
HASTRADEDATA.insertText = "";
HASTRADEDATA.body = "HASTRADEDATA";
HASTRADEDATA.kind = MySymbolKind.Function;
HASTRADEDATA.marketType = MyMarketType.TPlusZeroStrategyFunction;
HASTRADEDATA.functionType = MyFunctionType.LogicalJudgmentFunction;
HASTRADEDATA.returnType = MyFunctionReturnType.None;
HASTRADEDATA.parameters = MySymbol.createParametersFromStrings([]);
HASTRADEDATA.detail = "判断数据合约当根K线交易合约是否有数据";
HASTRADEDATA.documentation = `
HASTRADEDATA判断数据合约当根K线交易合约是否有数据
HASTRADEDATA  判断数据合约当根K线交易合约是否有数据

用法：
HASTRADEDATA;  
1、判断数据合约当根K线交易合约是否有数据，有数据返回1，无数据返回0。
2、若数据合约和交易合约一致返回1
`;

const HHV = new MySymbol();
HHV.label = "HHV";
HHV.description = "最高值";
HHV.insertText = "";
HHV.body = "HHV( , )";
HHV.kind = MySymbolKind.Function;
HHV.marketType = MyMarketType.BasicFunction;
HHV.functionType = MyFunctionType.FinancialStatisticsFunction;
HHV.returnType = MyFunctionReturnType.None;
HHV.parameters = MySymbol.createParametersFromStrings([]);
HHV.detail = "最高值";
HHV.documentation = `
HHV(X,N),求X在N个周期内的最高值
HHV(X,N)：求X在N个周期内的最高值。

注：
1、N包含当前k线。
2、若N为0则从第一个有效值开始算起;
3、当N为有效值，但当前的k线数不足N根，按照实际的根数计算;
4、N为空值时，返回空值。
5、N可以是变量。

例1：
HH:HHV(H,4);//求4个周期最高价的最大值，即4周期高点（包含当前k线）。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
HH1:=HHV(H,N);//在分钟周期上，日内高点
`;

const HHVBARS = new MySymbol();
HHVBARS.label = "HHVBARS";
HHVBARS.description = "前一最高点位置";
HHVBARS.insertText = "";
HHVBARS.body = "HHVBARS( , )";
HHVBARS.kind = MySymbolKind.Function;
HHVBARS.marketType = MyMarketType.BasicFunction;
HHVBARS.functionType = MyFunctionType.FinancialStatisticsFunction;
HHVBARS.returnType = MyFunctionReturnType.None;
HHVBARS.parameters = MySymbol.createParametersFromStrings([]);
HHVBARS.detail = "前一最高点位置";
HHVBARS.documentation = `
HHVBARS(X,N),求N周期内X最高值到当前周期数
HHVBARS(X,N)： 求N周期内X最高值到当前周期数

注：
1、若N为0则从第一个有效值开始算起(不包含当前K线)；
2、当N为有效值，但当前的k线数不足N根，按照实际的根数计算，第一根k线返回空值；
3、N为空值时，返回空值。
4、N可以是变量。

例1：
HHVBARS(VOL,0); 求历史成交量最大的周期到当前的周期数（最大值那根k线上HHVBARS(VOL,0);的返回值为0，最大值后的第一根k线返回值为1，依次类推）。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
ZHBARS:REF(HHVBARS(H,N),N)+N;//在分钟周期上，求昨天最高价所在的k线到当前k线之间的周期数。
`;

const HIGH = new MySymbol();
HIGH.label = "HIGH";
HIGH.description = "取得K线图的最高价";
HIGH.insertText = "";
HIGH.body = "HIGH";
HIGH.kind = MySymbolKind.Function;
HIGH.marketType = MyMarketType.BasicFunction;
HIGH.functionType = MyFunctionType.CandlestickDataReference;
HIGH.returnType = MyFunctionReturnType.None;
HIGH.parameters = MySymbol.createParametersFromStrings([]);
HIGH.detail = "取得K线图的最高价";
HIGH.documentation = `
HIGH,取最高价
HIGH 取得K线图的最高价。

注：
1、可简写为H。

例1：
HH:H;//定义HH为最高价。
例2：
HH:HHV(H,5);//取的5个周期内最高价的最大值。
例3：
REF(H,1);//取的前一根K线的最高价
`;

const HISEXPDATE = new MySymbol();
HISEXPDATE.label = "HISEXPDATE";
HISEXPDATE.description = "返回当前周期期货合约的最后交易日";
HISEXPDATE.insertText = "";
HISEXPDATE.body = "HISEXPDATE";
HISEXPDATE.kind = MySymbolKind.Function;
HISEXPDATE.marketType = MyMarketType.BasicFunction;
HISEXPDATE.functionType = MyFunctionType.TimeFunction;
HISEXPDATE.returnType = MyFunctionReturnType.None;
HISEXPDATE.parameters = MySymbol.createParametersFromStrings([]);
HISEXPDATE.detail = "返回当前周期期货合约的最后交易日";
HISEXPDATE.documentation = `
HISEXPDATE返回当前周期期货合约的最后交易日
HISEXPDATE 返回当前周期期货合约的最后交易日。

用法：HISEXPDATE;取得当前周期期货合约的最后交易日。

注：
1、该函数返回期货合约的最后交易日，返回YYMMDD的形式。
2、该函数只支持应用在日线及以下周期使用，在日周期以上的周期该函数返回值为0。
3、应用到主连合约，返回对应的主力合约的最后交易日。
  应用到月份合约，返回对应的月份合约的最后交易日。
  应用到加权合约，返回值为0。
4、该函数不支持在外盘主连合约上使用。

例：
A:HISEXPDATE;
B:EXPIREDATE('');//A和B的返回值一样。加载到IF1406上返回值为140620。
`;

const HISEXPDAYS = new MySymbol();
HISEXPDAYS.label = "HISEXPDAYS";
HISEXPDAYS.description = "返回当前周期期货合约距离最后交易日的天数";
HISEXPDAYS.insertText = "";
HISEXPDAYS.body = "HISEXPDAYS";
HISEXPDAYS.kind = MySymbolKind.Function;
HISEXPDAYS.marketType = MyMarketType.BasicFunction;
HISEXPDAYS.functionType = MyFunctionType.TimeFunction;
HISEXPDAYS.returnType = MyFunctionReturnType.None;
HISEXPDAYS.parameters = MySymbol.createParametersFromStrings([]);
HISEXPDAYS.detail = "返回当前周期期货合约距离最后交易日的天数";
HISEXPDAYS.documentation = `
HISEXPDAYS返回当前周期期货合约距离最后交易日的天数
HISEXPDAYS 返回当前周期期货合约距离最后交易日的天数。

用法：HISEXPDAYS;取得当前周期期货合约距离最后交易日的天数。

注：
1、该函数只支持应用在日线及以下周期使用，在日周期以上的周期该函数返回值为0。
2、应用到主连合约，返回对应的主力合约距最后交易日的天数。
  应用到连续合约，返回对应的月份合约距最后交易日的天数。
  应用到加权合约，返回值为0。
3、该函数不支持在外盘主连合约上使用。

例：
A:=HISEXPDAYS=1&&CLOSEMINUTE=5;//定义变量A为最后交易日收盘前五分钟。
`;

const HOLLOW = new MySymbol();
HOLLOW.label = "HOLLOW";
HOLLOW.description = "空心显示";
HOLLOW.insertText = "";
HOLLOW.body = "HOLLOW";
HOLLOW.kind = MySymbolKind.Function;
HOLLOW.marketType = MyMarketType.BasicFunction;
HOLLOW.functionType = MyFunctionType.DrawingFunction;
HOLLOW.returnType = MyFunctionReturnType.None;
HOLLOW.parameters = MySymbol.createParametersFromStrings([]);
HOLLOW.detail = "空心显示";
HOLLOW.documentation = `
HOLLOW,画空心柱线
HOLLOW 空心显示。

用法：
用在VOLSTICK、VOLUMESTICK函数后面，表示柱线空心显示。

注：
仅支持与VOLSTICK、VOLUMESTICK函数连用。

例：
VOL,VOLUMESTICK,HOLLOW;//画成交量柱状线，柱线空心显示。
`;

const HOUR = new MySymbol();
HOUR.label = "HOUR";
HOUR.description = "小时";
HOUR.insertText = "";
HOUR.body = "HOUR";
HOUR.kind = MySymbolKind.Function;
HOUR.marketType = MyMarketType.BasicFunction;
HOUR.functionType = MyFunctionType.TimeFunction;
HOUR.returnType = MyFunctionReturnType.None;
HOUR.parameters = MySymbol.createParametersFromStrings([]);
HOUR.detail = "小时";
HOUR.documentation = `
HOUR取某周期的小时（0-23）
HOUR，返回某周期的小时数。

注：
HOUR的取值范围为0—23

例1：
NX:BARSLAST(CROSS(HOUR=9,0.5));
DRAWLINE3(CROSSDOWN(HOUR=14,0.5),REF(H,NX),NX,CROSSDOWN(HOUR=14,0.5),REF(H,1),1,0),COLORGREEN;
//连接9点到收盘前最后一根k线高点的连线。
例2：
HOUR=10;//在10:00的K线上返回值为1，其余K线上返回值为0。
`;

const HV = new MySymbol();
HV.label = "HV";
HV.description = "除当前K线外最高值";
HV.insertText = "";
HV.body = "HV( , )";
HV.kind = MySymbolKind.Function;
HV.marketType = MyMarketType.BasicFunction;
HV.functionType = MyFunctionType.FinancialStatisticsFunction;
HV.returnType = MyFunctionReturnType.None;
HV.parameters = MySymbol.createParametersFromStrings([]);
HV.detail = "除当前K线外最高值";
HV.documentation = `
HV(X,N)求X在N个周期内的最高值(不包含当前K线)
HV(X,N)： 求X在N个周期内（不包含当前k线）的最高值。

注：
1、若N为0则从第一个有效值开始算起(不包含当前K线)；
2、当N为有效值，但当前的k线数不足N根，按照实际的根数计算，第一根k线返回空值；
3、N为空值时，返回空值。
4、N可以是变量。

例1：
HH:HV(H,10);//求前10根k线的最高点。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;
NN:=REF(N,N);
ZH:VALUEWHEN(DATE<>REF(DATE,1),HV(H,NN));//在分钟周期上，求昨天最高价。
例3：
HV(H,5) 和 REF(HHV(H,5),1) 的结果是一样的，用HV编写更加方便。
`;

const ICON = new MySymbol();
ICON.label = "ICON";
ICON.description = "显示图标";
ICON.insertText = "";
ICON.body = "ICON( , )";
ICON.kind = MySymbolKind.Function;
ICON.marketType = MyMarketType.BasicFunction;
ICON.functionType = MyFunctionType.DrawingFunction;
ICON.returnType = MyFunctionReturnType.None;
ICON.parameters = MySymbol.createParametersFromStrings([]);
ICON.detail = "显示图标";
ICON.documentation = `
ICON(TYPE,ICON),在k线图上，显示小图标当TYPE为1，则在K线最高价位置显示图标ICON当TYPE为0，则在K线最低价位置显示图标ICON
ICON函数 在k线图上，显示小图标。

用法：ICON(TYPE,ICON);
当TYPE为1，则在K线最高价位置显示图标ICON，当TYPE为0，则在最低价位置显示图标ICON。

注：
1、该函数与判断条件连用，如：COND,ICON(TYPE,ICON);
2、不支持将函数定义为变量，即不支持下面的写法：A:ICON(TYPE,ICON);
3、该函数支持在函数后设置设置文字垂直对齐方式：VALIGN0（上对齐）、VALIGN1（中对齐）、VALIGN2（下对齐）
即可以写为如下格式：
CLOSE<OPEN,WORD(1,'阴'),VALIGN0

例1：
CLOSE>OPEN,ICON(1,'ICO1');//表示K线收盘大于开盘时，在最高价上显示图标1。
写完“ICON(1,” 以后，点击插入图标按钮，再单击选中的图标插入到函数中，图标用'ICO1'~'ICO105'表示
`;

const IDLE = new MySymbol();
IDLE.label = "IDLE";
IDLE.description = "限制开仓信号发出委托";
IDLE.insertText = "";
IDLE.body = "IDLE()";
IDLE.kind = MySymbolKind.Function;
IDLE.marketType = MyMarketType.TPlusZeroStrategyFunction;
IDLE.functionType = MyFunctionType.SignalExecutionFunction;
IDLE.returnType = MyFunctionReturnType.None;
IDLE.parameters = MySymbol.createParametersFromStrings([]);
IDLE.detail = "限制开仓信号发出委托";
IDLE.documentation = `
IDLE(CONE),限制开仓信号发出委托
IDLE(COND) 限制开仓信号发出委托

用法：IDLE(COND)，当开仓信号发出时，如果COND条件成立，该信号不委托。IDLE函数对平仓信号不起作用，有持仓时即使满足COND也可以平仓。

注：
1、模组加载运行：
（1）该函数不影响模型出现信号，满足开仓条件，图中仍然会出现信号
（2）COND条件满足后，只对开仓信号起作用，开仓信号发出时，如果COND条件成立，该信号不委托；平仓信号发出时，如果模组单元持仓>0，根据平仓信号正常进行委托
（3）COND条件满足后，理论持仓、理论资金的计算不受该函数的影响，仍然根据信号正常执行进行计算
（4）COND条件满足后，可以进行头寸同步、手动调仓、补仓的操作
2、回测：
（1）该函数不影响模型出现信号，满足开仓条件，图中仍然会出现信号
（2）模型中含有IDLE函数，信号仍然根据理论持仓、理论资金进行计算
（3）模型中含有IDLE函数，回测报告根据模组理论持仓、资金进行计算
3、该函数支持与反手指令同时使用。
4、该函数与反手指令同时使用CODE条件中不支持含有平仓盈亏相关的函数（例如连续亏损、盈利次数以及可用资金）。
5、该函数不支持加载到套利合约使用。
6、该函数只允许在模组中使用，不支持加载到盒子。

例:
MA10:MA(C,20);
MA30:MA(C,30);
GG:=HHV(MONEYTOT,0);//第一个有效值开始权益的最大值
C>MA30,BK;
C<MA30,SK;
C>MA10,BP;
C<MA10,SP;
IDLE(MONEYTOT<GG*0.95&&MONEYTOT>GG*0.92||MONEYTOT<GG*0.85);//权益回撤一定幅度停止交易
AUTOFILTER;
`;

const IF = new MySymbol();
IF.label = "IF";
IF.description = "条件函数";
IF.insertText = "";
IF.body = "IF( , , )";
IF.kind = MySymbolKind.Function;
IF.marketType = MyMarketType.BasicFunction;
IF.functionType = MyFunctionType.LogicalJudgmentFunction;
IF.returnType = MyFunctionReturnType.None;
IF.parameters = MySymbol.createParametersFromStrings([]);
IF.detail = "条件函数";
IF.documentation = `
IF(X,A,B),若满足条件X则取A，否则取B
IF(COND,A,B) 若COND条件成立，则返回A，否则返回B

注：
1、COND是判断条件;A、B可以是条件，也可以是数值。
2、该函数支持变量循环引用前一周期自身变量，即支持下面这样的写法Y: IF(CON,X,REF(Y,1));
例1：
IF(ISUP,H,L);//k线为阳线，取最高价，否则取最低价
例2：
A:=IF(MA5>MA10,CROSS(DIFF,DEA),IF(CROSS(D,K),2,0));//当MA5>MA10时，取是否满足DIFF上穿DEA，否则(MA5不大于MA10)，当K,D死叉时，令A赋值为2，若上述条件都不满足，A赋值为0
A=1,BPK;//当MA5>MA10，以DIFF上穿DEA作为开多仓条件
A=2,SPK;//当MA5不大于MA10，以K、D死叉作为开空仓条件
`;

const IFELSE = new MySymbol();
IFELSE.label = "IFELSE";
IFELSE.description = "条件函数";
IFELSE.insertText = "";
IFELSE.body = "IFELSE( , , )";
IFELSE.kind = MySymbolKind.Function;
IFELSE.marketType = MyMarketType.BasicFunction;
IFELSE.functionType = MyFunctionType.LogicalJudgmentFunction;
IFELSE.returnType = MyFunctionReturnType.None;
IFELSE.parameters = MySymbol.createParametersFromStrings([]);
IFELSE.detail = "条件函数";
IFELSE.documentation = `
IFELSE(X,A,B),若满足条件X则取A，否则取B
IFELSE(COND,A,B) 若COND条件成立，则返回A，否则返回B

注：
1、COND是判断条件;A、B可以是条件，也可以是数值。
2、该函数支持变量循环引用前一周期自身变量，即支持下面这样的写法Y: IFELSE(CON,X,REF(Y,1));
例1：
IFELSE(ISUP,H,L);//k线为阳线，取最高价，否则取最低价
例2：
A:=IFELSE(MA5>MA10,CROSS(DIFF,DEA),IFELSE(CROSS(D,K),2,0));//当MA5>MA10时，取是否满足DIFF上穿DEA，否则(MA5不大于MA10)，当K,D死叉时，令A赋值为2，若上述条件都不满足，A赋值为0
A=1,BPK;//当MA5>MA10，以DIFF上穿DEA作为开多仓条件
A=2,SPK;//当MA5不大于MA10，以K、D死叉作为开空仓条件
`;

const IMPLIEDVOLATILITY = new MySymbol();
IMPLIEDVOLATILITY.label = "IMPLIEDVOLATILITY";
IMPLIEDVOLATILITY.description = "取期权隐含波动率";
IMPLIEDVOLATILITY.insertText = "";
IMPLIEDVOLATILITY.body = "IMPLIEDVOLATILITY";
IMPLIEDVOLATILITY.kind = MySymbolKind.Function;
IMPLIEDVOLATILITY.marketType = MyMarketType.BasicFunction;
IMPLIEDVOLATILITY.functionType =
    MyFunctionType.CandlestickDataReference;
IMPLIEDVOLATILITY.returnType = MyFunctionReturnType.None;
IMPLIEDVOLATILITY.parameters = MySymbol.createParametersFromStrings([]);
IMPLIEDVOLATILITY.detail = "取期权隐含波动率";
IMPLIEDVOLATILITY.documentation = `
IMPLIEDVOLATILITY，取期权隐含波动率
IMPLIEDVOLATILITY  取期权隐含波动率

原理：
隐含波动率：根据期权市场当时价格倒推出的波动率，反映期权当前价格对未来波动率的预期。

注：
1、该函数仅支持加载在期权上，加载在其他合约返回空值；
2、该函数不支持加载在量能周期；
3、该函数不支持在跨周期、跨合约的引用模型中使用；
4、该函数不支持与运行优化函数一起使用。

例：
AA:IMPLIEDVOLATILITY;//AA返回期权的隐含波动率。

`;

const INITMONEY = new MySymbol();
INITMONEY.label = "INITMONEY";
INITMONEY.description = "初次加载时的起始资金";
INITMONEY.insertText = "";
INITMONEY.body = "INITMONEY";
INITMONEY.kind = MySymbolKind.Function;
INITMONEY.marketType = MyMarketType.TPlusZeroStrategyFunction;
INITMONEY.functionType = MyFunctionType.PositionManagementFunction;
INITMONEY.returnType = MyFunctionReturnType.None;
INITMONEY.parameters = MySymbol.createParametersFromStrings([]);
INITMONEY.detail = "初次加载时的起始资金";
INITMONEY.documentation = `
INITMONEY,返回初次加载时的起始资金
INITMONEY 初次加载时的起始资金

用法：INITMONEY 返回初次加载时的起始资金。

注：
1、回测时，该函数返回回测参数中设置的初始资金。
2、主图右键装入模组时，该函数返回回测参数中设置的初始资金。
3、新建模组时，该函数返回单元参数中设置的起始资金。
4、组合测试中该函数返回添加组合成员时设置的初始资金。
5、回测一篮子合约时，该函数返回主图回测参数中设置的初始资金。

例：
K:=INITMONEY*0.2/(C*MARGIN*UNIT+FEE); //初始资金的20%可以开仓的手数（此写法适用于按固定手数收取手续费的合约）
`;

const INTPART = new MySymbol();
INTPART.label = "INTPART";
INTPART.description = "取整";
INTPART.insertText = "";
INTPART.body = "INTPART( )";
INTPART.kind = MySymbolKind.Function;
INTPART.marketType = MyMarketType.BasicFunction;
INTPART.functionType = MyFunctionType.MathFunction;
INTPART.returnType = MyFunctionReturnType.None;
INTPART.parameters = MySymbol.createParametersFromStrings([]);
INTPART.detail = "取整";
INTPART.documentation = `
INTPART(X),取X的整数部分
INTPART(X)：取X的整数部分。

例1：
INTPART(12.3);//返回值为12；
例2：
INTPART(-3.5);//返回值为-3；
例3：
INTPART(10);//返回值为10；
例5：
INTPART(C);//求收盘价的整数部分。
`;

const ISCONTRACT = new MySymbol();
ISCONTRACT.label = "ISCONTRACT";
ISCONTRACT.description = "当前是否为指定的合约";
ISCONTRACT.insertText = "";
ISCONTRACT.body = "ISCONTRACT()";
ISCONTRACT.kind = MySymbolKind.Function;
ISCONTRACT.marketType = MyMarketType.BasicFunction;
ISCONTRACT.functionType = MyFunctionType.LogicalJudgmentFunction;
ISCONTRACT.returnType = MyFunctionReturnType.None;
ISCONTRACT.parameters = MySymbol.createParametersFromStrings([]);
ISCONTRACT.detail = "当前是否为指定的合约";
ISCONTRACT.documentation = `
ISCONTRACT('CODE')当前是否为指定的合约
ISCONTRACT() 当前是否为指定的合约。

用法：ISCONTRACT('CODE');是当前合约返回1，不是当前合约返回0。

注：
1、判断是否为指定合约时，CODE可以为合约的交易代码或者文华码
2、判断是否为指定品种时，CODE必须为品种的中文名称（只支持内盘品种）
3、对于国内期权合约判断是否为指定品种时，采用字符串从左开始匹配，CODE参数前N位与合约名称一致，认为是同一品种

例1：
ISCONTRACT('CLZ5');//加载到美原油12上返回值为1，加载到非美原油12上返回值为0。
例2：
ISCONTRACT('沪铜');//加载到沪铜合约上返回值为1，加载到非沪铜合约上返回值为0。
`;

const ISDELIVERYDAY = new MySymbol();
ISDELIVERYDAY.label = "ISDELIVERYDAY";
ISDELIVERYDAY.description = "判断该周期是不是最后交易日";
ISDELIVERYDAY.insertText = "";
ISDELIVERYDAY.body = "ISDELIVERYDAY";
ISDELIVERYDAY.kind = MySymbolKind.Function;
ISDELIVERYDAY.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISDELIVERYDAY.functionType = MyFunctionType.LogicalJudgmentFunction;
ISDELIVERYDAY.returnType = MyFunctionReturnType.None;
ISDELIVERYDAY.parameters = MySymbol.createParametersFromStrings([]);
ISDELIVERYDAY.detail = "判断该周期是不是最后交易日";
ISDELIVERYDAY.documentation = `
ISDELIVERYDAY,判断当根k线是否是最后交易日
ISDELIVERYDAY 判断该周期是否是最后交易日。当前k线是最后交易日则返回1(Yes)，否则返回0(No)

注：
1、只能使用在日线及小于日线的周期，在周线月线等大于日线的周期使用时返回值始终为0。
2、该函数应加载在可交易合约上。
3、该函数加载到主连合约上按照对应的主力合约的最后交易日期进行判断，因此不能在主连合约上使用。

例1：
ISDELIVERYDAY=1&&TIME>=1000,CLOSEOUT;//当根k线是最后交易日并且时间是10:00,全平。
`;

const ISDOWN = new MySymbol();
ISDOWN.label = "ISDOWN";
ISDOWN.description = "阴线";
ISDOWN.insertText = "";
ISDOWN.body = "ISDOWN";
ISDOWN.kind = MySymbolKind.Function;
ISDOWN.marketType = MyMarketType.BasicFunction;
ISDOWN.functionType = MyFunctionType.LogicalJudgmentFunction;
ISDOWN.returnType = MyFunctionReturnType.None;
ISDOWN.parameters = MySymbol.createParametersFromStrings([]);
ISDOWN.detail = "阴线";
ISDOWN.documentation = `
ISDOWN,判断该周期是否收阴。如果为阴线返回1，否则返回0
ISDOWN 判断该周期是否收阴

注：
1、ISDOWN等同于C<O

例：
ISDOWN=1&&C<REF(C,1),SK;//当根k线收阴并且收盘价小于前一周期收盘价，则开空
//ISDOWN=1&&C<REF(C,1),SK; 与 ISDOWN&&C<REF(C,1),SK; 表达同等意义
`;

const ISEQUAL = new MySymbol();
ISEQUAL.label = "ISEQUAL";
ISEQUAL.description = "平盘";
ISEQUAL.insertText = "";
ISEQUAL.body = "ISEQUAL";
ISEQUAL.kind = MySymbolKind.Function;
ISEQUAL.marketType = MyMarketType.BasicFunction;
ISEQUAL.functionType = MyFunctionType.LogicalJudgmentFunction;
ISEQUAL.returnType = MyFunctionReturnType.None;
ISEQUAL.parameters = MySymbol.createParametersFromStrings([]);
ISEQUAL.detail = "平盘";
ISEQUAL.documentation = `
ISEQUAL,判断该周期是否平盘，如果K线为平盘返回1，否则返回0
ISEQUAL 判断该周期是否平盘

注：
1、ISEQUAL等同于C=O

例1：
EVERY(ISEQUAL=1,2),CLOSEOUT;//持续2根k线都是平盘，则全平。
`;

const ISLASTBAR = new MySymbol();
ISLASTBAR.label = "ISLASTBAR";
ISLASTBAR.description = "判断该周期是否为最后一根K线";
ISLASTBAR.insertText = "";
ISLASTBAR.body = "ISLASTBAR";
ISLASTBAR.kind = MySymbolKind.Function;
ISLASTBAR.marketType = MyMarketType.BasicFunction;
ISLASTBAR.functionType = MyFunctionType.DrawingFunction;
ISLASTBAR.returnType = MyFunctionReturnType.None;
ISLASTBAR.parameters = MySymbol.createParametersFromStrings([]);
ISLASTBAR.detail = "判断该周期是否为最后一根K线";
ISLASTBAR.documentation = `
ISLASTBAR,判断是否是最后一个K线，如果为最后一根K线返回1，否则返回0
ISLASTBAR 判断该周期是否为最后一根k线。

注：
该函数仅支持在绘图函数中使用。

例1：
DRAWNUMBER(ISLASTBAR=1,HIGH,CLOSE,0,COLORRED);//当前k线是最后一根k线，则在最高价位置红色显示收盘价。
`;

const ISLASTBK = new MySymbol();
ISLASTBK.label = "ISLASTBK";
ISLASTBK.description = "判断上一个信号是否是BK";
ISLASTBK.insertText = "";
ISLASTBK.body = "ISLASTBK";
ISLASTBK.kind = MySymbolKind.Function;
ISLASTBK.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTBK.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTBK.returnType = MyFunctionReturnType.None;
ISLASTBK.parameters = MySymbol.createParametersFromStrings([]);
ISLASTBK.detail = "判断上一个信号是否是BK";
ISLASTBK.documentation = `
ISLASTBK，判断上一个指令是否是买开
ISLASTBK 判断上一个交易信号是否是BK。

用法：
ISLASTBK 上一个交易信号是BK则返回1（Yes），否则返回0（No）
a.信号执行方式选择K线走完确认信号下单及K线走完进行信号复核（例如：在模型中写入CHECKSIG(BK,'A',0,'D',0,3);）
BK信号未确认时，ISLASTBK返回值0；
BK信号确认后，ISLASTBK返回1
b.信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），BK信号当根ISLASTBK返回值为1

注：模型中含有BPK条件，且上一个信号为平仓信号时，由BPK指令产生的BK信号，ISLASTBK返回0，ISLASTBPK返回1。

例:
C>O,BK;
ISLASTBK&&C>BKPRICE,SP;
AUTOFILTER;//上一个信号是BK信号，且最新价大于开仓价格，卖平仓
`;

const ISLASTBP = new MySymbol();
ISLASTBP.label = "ISLASTBP";
ISLASTBP.description = "判断上一个信号是否是BP";
ISLASTBP.insertText = "";
ISLASTBP.body = "ISLASTBP";
ISLASTBP.kind = MySymbolKind.Function;
ISLASTBP.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTBP.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTBP.returnType = MyFunctionReturnType.None;
ISLASTBP.parameters = MySymbol.createParametersFromStrings([]);
ISLASTBP.detail = "判断上一个信号是否是BP";
ISLASTBP.documentation = `
ISLASTBP，判断上一个指令是否是买平
ISLASTBP 判断上一个交易信号是否是BP。

用法：
ISLASTBP 上一个交易信号是BP则返回1（Yes），否则返回0（No）
a.信号执行方式选择K线走完确认信号下单及K线走完进行信号复核（例如：在模型中写入CHECKSIG(BP,'A',0,'D',0,3);）
BP信号未确认时，ISLASTBP返回值0；
BP信号确认后，ISLASTBP返回1
b.信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），BP信号当根ISLASTBP返回值为1

例:
C<O,SK(2);
C>O,BP(1);
ISLASTBP,BP(1);//上一个信号是买平仓信号，则减仓一手
`;

const ISLASTBPK = new MySymbol();
ISLASTBPK.label = "ISLASTBPK";
ISLASTBPK.description = "判断上一个信号是否是BPK";
ISLASTBPK.insertText = "";
ISLASTBPK.body = "ISLASTBPK";
ISLASTBPK.kind = MySymbolKind.Function;
ISLASTBPK.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTBPK.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTBPK.returnType = MyFunctionReturnType.None;
ISLASTBPK.parameters = MySymbol.createParametersFromStrings([]);
ISLASTBPK.detail = "判断上一个信号是否是BPK";
ISLASTBPK.documentation = `
ISLASTBPK，判断上一个指令是否是买平开
ISLASTBPK判断上一个交易信号是否是BPK。

用法：
ISLASTBPK 上一个交易信号是BPK则返回1（Yes），否则返回0（No）
a.信号执行方式选择K线走完确认信号下单及K线走完进行信号复核（例如：在模型中写入CHECKSIG(BPK,'A',0,'D',0,3);）
BPK信号未确认时，ISLASTBPK返回值0；
BPK信号确认后，ISLASTBPK返回1
b.信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），BPK信号当根ISLASTBPK返回值为1

注：模型中含有BPK条件，且上一个信号为平仓信号时，由BPK指令产生的BK信号，ISLASTBK返回0，ISLASTBPK返回1。

例:
C>O,BPK;
ISLASTBPK&&C<O,SPK;
AUTOFILTER;//上一个信号是BPK信号，则反手SPK
`;

const ISLASTBUY = new MySymbol();
ISLASTBUY.label = "ISLASTBUY";
ISLASTBUY.description = "判断上一个交易信号是否是BUY";
ISLASTBUY.insertText = "";
ISLASTBUY.body = "ISLASTBUY";
ISLASTBUY.kind = MySymbolKind.Function;
ISLASTBUY.marketType = MyMarketType.TPlusOneStrategyFunction;
ISLASTBUY.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTBUY.returnType = MyFunctionReturnType.None;
ISLASTBUY.parameters = MySymbol.createParametersFromStrings([]);
ISLASTBUY.detail = "判断上一个交易信号是否是BUY";
ISLASTBUY.documentation = `
ISLASTBUY 判断上一个交易信号是否是BUY。
ISLASTBUY 判断上一个交易信号是否是BUY。

用法：
ISLASTBUY 上一个交易信号是BUY则返回1（Yes），否则返回0（No）

注：
1、该函数支持在股票T+1策略运行池中使用。

例:
C>O,BUY;
ISLASTBUY&&C>BUYPRICE,SELL;
AUTOFILTER;//上一个信号是BUY信号，且最新价大于买入价格，卖出持仓。
`;

const ISLASTCLOSEOUT = new MySymbol();
ISLASTCLOSEOUT.label = "ISLASTCLOSEOUT";
ISLASTCLOSEOUT.description = "判断上一个信号是否是CLOSEOUT";
ISLASTCLOSEOUT.insertText = "";
ISLASTCLOSEOUT.body = "ISLASTCLOSEOUT";
ISLASTCLOSEOUT.kind = MySymbolKind.Function;
ISLASTCLOSEOUT.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTCLOSEOUT.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTCLOSEOUT.returnType = MyFunctionReturnType.None;
ISLASTCLOSEOUT.parameters = MySymbol.createParametersFromStrings([]);
ISLASTCLOSEOUT.detail = "判断上一个信号是否是CLOSEOUT";
ISLASTCLOSEOUT.documentation = `
ISLASTCLOSEOUT，判断上一个指令是否是全平
ISLASTCLOSEOUT判断上一个信号是否CLOSEOUT 。

用法：
1、ISLASTCLOSEOUT 上一个交易信号是CLOSEOUT返回1（Yes），否则返回0（No）
2、CLOSEOUT默认为出信号立即下单不复核
a)收盘价模型中，CLOSEOUT信号下一根K线的ISLASTCLOSEOUT返回值为1
b)指令价模型中，CLOSEOUT信号当根K线的ISLASTCLOSEOUT返回值为1

例:
ISLASTCLOSEOUT&&C>O,BK(1);//上一个信号是清仓信号，并且当根K线是阳线，则买开一手
`;

const ISLASTKLINE = new MySymbol();
ISLASTKLINE.label = "ISLASTKLINE";
ISLASTKLINE.description = "判断该周期是否收盘前最后一根K线";
ISLASTKLINE.insertText = "";
ISLASTKLINE.body = "ISLASTKLINE";
ISLASTKLINE.kind = MySymbolKind.Function;
ISLASTKLINE.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTKLINE.functionType = MyFunctionType.LogicalJudgmentFunction;
ISLASTKLINE.returnType = MyFunctionReturnType.None;
ISLASTKLINE.parameters = MySymbol.createParametersFromStrings([]);
ISLASTKLINE.detail = "判断该周期是否收盘前最后一根K线";
ISLASTKLINE.documentation = `
ISLASTKLINE,判断该周期是否是当日收盘前最后一个K线，如果是返回1，否则返回0
ISLASTKLINE 判断该周期是否为每日收盘前最后一根k线，返回是1（Yes），否则返回0（No）。

注：
1、对于夜盘合约，夜盘收盘不是当日收盘，15点收盘才算作当日收盘。
2、夜盘合约只显示白盘数据时，白盘收盘前最后一根K线ISLASTKLINE返回1；只显示夜盘数据时，夜盘收盘前最后一根K线ISLASTKLINE返回1。

例1：
ISLASTKLINE=1,CLOSEOUT;//若该周期是当日收盘前最后一根k线，则全平。
`;

const ISLASTSELL = new MySymbol();
ISLASTSELL.label = "ISLASTSELL";
ISLASTSELL.description = "判断上一个交易信号是否是SELL";
ISLASTSELL.insertText = "";
ISLASTSELL.body = "ISLASTSELL";
ISLASTSELL.kind = MySymbolKind.Function;
ISLASTSELL.marketType = MyMarketType.TPlusOneStrategyFunction;
ISLASTSELL.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTSELL.returnType = MyFunctionReturnType.None;
ISLASTSELL.parameters = MySymbol.createParametersFromStrings([]);
ISLASTSELL.detail = "判断上一个交易信号是否是SELL";
ISLASTSELL.documentation = `
ISLASTSELL判断上一个交易信号是否是SELL。
ISLASTSELL判断上一个交易信号是否是SELL。

用法：
ISLASTSELL 上一个交易信号是SELL则返回1（Yes），否则返回0（No）

注：
1、该函数支持在股票T+1策略运行池中使用。

例:ISLASTSELL,BUY;//上一个信号是卖出信号，则买入。
`;

const ISLASTSK = new MySymbol();
ISLASTSK.label = "ISLASTSK";
ISLASTSK.description = "判断上一个信号是否是SK";
ISLASTSK.insertText = "";
ISLASTSK.body = "ISLASTSK";
ISLASTSK.kind = MySymbolKind.Function;
ISLASTSK.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTSK.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTSK.returnType = MyFunctionReturnType.None;
ISLASTSK.parameters = MySymbol.createParametersFromStrings([]);
ISLASTSK.detail = "判断上一个信号是否是SK";
ISLASTSK.documentation = `
ISLASTSK，判断上一个指令是否是卖开
ISLASTSK 判断上一个交易信号是否是SK。

用法：
ISLASTSK 上一个交易信号是SK则返回1（Yes），否则返回0（No）
a.信号执行方式选择K线走完确认信号下单及K线走完进行信号复核（例如：在模型中写入CHECKSIG_(SK,'A',0,'D',0,3);）
SK信号未确认时，ISLASTSK返回值0；
SK信号确认后，ISLASTSK返回1
b.信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），SK信号当根ISLASTSK返回值为1

注：模型中含有SPK条件，且上一个信号为平仓信号时，由SPK指令产生的SK信号，ISLASTSK返回0，ISLASTSPK返回1。

例:
C<O,SK;
ISLASTSK&&C<SKPRICE,BP;
AUTOFILTER;//上一个信号是SK信号，且最新价小于开仓价格，买平仓
`;

const ISLASTSP = new MySymbol();
ISLASTSP.label = "ISLASTSP";
ISLASTSP.description = "判断上一个信号是否是SP";
ISLASTSP.insertText = "";
ISLASTSP.body = "ISLASTSP";
ISLASTSP.kind = MySymbolKind.Function;
ISLASTSP.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTSP.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTSP.returnType = MyFunctionReturnType.None;
ISLASTSP.parameters = MySymbol.createParametersFromStrings([]);
ISLASTSP.detail = "判断上一个信号是否是SP";
ISLASTSP.documentation = `
ISLASTSP，判断上一个指令是否是卖平
ISLASTSP判断上一个交易信号是否是SP。

用法：
ISLASTSP 上一个交易信号是SP则返回1（Yes），否则返回0（No）
a.信号执行方式选择K线走完确认信号下单及K线走完进行信号复核（例如：在模型中写入CHECKSIG(SP,'A',0,'D',0,3);）
SP信号未确认时，ISLASTSP返回值0；
SP信号确认后，ISLASTSP返回1
b.信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），SP信号当根ISLASTSP返回值为1

例:
C>O,BK(2);
C<O,SP(1);
ISLASTSP,SP(1);//上一个信号是卖平仓信号，则减仓一手
`;

const ISLASTSPK = new MySymbol();
ISLASTSPK.label = "ISLASTSPK";
ISLASTSPK.description = "判断上一个信号是否是SPK";
ISLASTSPK.insertText = "";
ISLASTSPK.body = "ISLASTSPK";
ISLASTSPK.kind = MySymbolKind.Function;
ISLASTSPK.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTSPK.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTSPK.returnType = MyFunctionReturnType.None;
ISLASTSPK.parameters = MySymbol.createParametersFromStrings([]);
ISLASTSPK.detail = "判断上一个信号是否是SPK";
ISLASTSPK.documentation = `
ISLASTSPK，判断上一个指令是否是卖平开
ISLASTSPK判断上一个交易信号是否是SPK。

用法：
ISLASTSPK 上一个交易信号是SPK则返回1（Yes），否则返回0（No）
a.信号执行方式选择K线走完确认信号下单及K线走完进行信号复核（例如：在模型中写入CHECKSIG(SPK,'A',0,'D',0,3);）
SPK信号未确认时，ISLASTSPK返回值0；
SPK信号确认后，ISLASTSPK返回1
b.信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;），SPK信号当根ISLASTSPK返回值为1

注：模型中含有SPK条件，且上一个信号为平仓信号时，由SPK指令产生的SK信号，ISLASTSK返回0，ISLASTSPK返回1。

例:
C<O,SPK;
ISLASTSPK&&C>O,BPK;
AUTOFILTER;//上一个信号是SPK信号，则反手BPK
`;

const ISLASTSTOP = new MySymbol();
ISLASTSTOP.label = "ISLASTSTOP";
ISLASTSTOP.description = "判断上一个信号是否是STOP";
ISLASTSTOP.insertText = "";
ISLASTSTOP.body = "ISLASTSTOP";
ISLASTSTOP.kind = MySymbolKind.Function;
ISLASTSTOP.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISLASTSTOP.functionType = MyFunctionType.SignalLoggingFunction;
ISLASTSTOP.returnType = MyFunctionReturnType.None;
ISLASTSTOP.parameters = MySymbol.createParametersFromStrings([]);
ISLASTSTOP.detail = "判断上一个信号是否是STOP";
ISLASTSTOP.documentation = `
ISLASTSTOP，判断上一个指令是否是STOP指令
ISLASTSTOP 判断上一个交易信号是否是STOP。

用法：
ISLASTSTOP 上一个交易信号是STOP则返回1（Yes），否则返回0（No）

注：收盘价模型STOP信号下根K线ISLASTSTOP返回值为1；指令价模型STOP信号当根K线ISLASTSTOP返回值为1。

例:
CROSS(C,MA(C,5)),BK(2);
STOP(0,5);
ISLASTSTOP&&CROSS(C,MA(C,10)),BK(1);//上一个信号是STOP信号，且价格上穿10周期均线，开仓一手
`;

const ISMAINCONTRACT = new MySymbol();
ISMAINCONTRACT.label = "ISMAINCONTRACT";
ISMAINCONTRACT.description = "当前是否为主力合约";
ISMAINCONTRACT.insertText = "";
ISMAINCONTRACT.body = "ISMAINCONTRACT";
ISMAINCONTRACT.kind = MySymbolKind.Function;
ISMAINCONTRACT.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISMAINCONTRACT.functionType = MyFunctionType.LogicalJudgmentFunction;
ISMAINCONTRACT.returnType = MyFunctionReturnType.None;
ISMAINCONTRACT.parameters = MySymbol.createParametersFromStrings([]);
ISMAINCONTRACT.detail = "当前是否为主力合约";
ISMAINCONTRACT.documentation = `
ISMAINCONTRACT当前是否为主力合约
ISMAINCONTRACT 当前是否为主力合约。

用法：
ISMAINCONTRACT;取当前交易合约判断是否是主力合约，是返回1，否返回0

注：
1、若交易合约不是普通合约则返回空值
2、若没有指定交易合约，则取数据合约。

例：
ISMAINCONTRACT;//当前的交易合约为主力合约，返回1，否则返回0
`;

const ISMONTHEND = new MySymbol();
ISMONTHEND.label = "ISMONTHEND";
ISMONTHEND.description = "是否为本月最后一个交易日";
ISMONTHEND.insertText = "";
ISMONTHEND.body = "ISMONTHEND";
ISMONTHEND.kind = MySymbolKind.Function;
ISMONTHEND.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISMONTHEND.functionType = MyFunctionType.LogicalJudgmentFunction;
ISMONTHEND.returnType = MyFunctionReturnType.None;
ISMONTHEND.parameters = MySymbol.createParametersFromStrings([]);
ISMONTHEND.detail = "是否为本月最后一个交易日";
ISMONTHEND.documentation = `
ISMONTHEND是否为本月最后一个交易日
ISMONTHEND 是否为本月最后一个交易日
此函数为系统封装函数。

用法：
ISMONTHEND 是否为本月最后一个交易日

例：
CLOSE<MA(CLOSE,5) || ISMONTHEND,SP;//如果满足平仓条件或者当前为本月最后一个交易日，平仓
`;

const ISNEARHOLIDAY = new MySymbol();
ISNEARHOLIDAY.label = "ISNEARHOLIDAY";
ISNEARHOLIDAY.description = "判断下一交易日是否是交易合约的节假日";
ISNEARHOLIDAY.insertText = "";
ISNEARHOLIDAY.body = "ISNEARHOLIDAY";
ISNEARHOLIDAY.kind = MySymbolKind.Function;
ISNEARHOLIDAY.marketType = MyMarketType.BasicFunction;
ISNEARHOLIDAY.functionType = MyFunctionType.LogicalJudgmentFunction;
ISNEARHOLIDAY.returnType = MyFunctionReturnType.None;
ISNEARHOLIDAY.parameters = MySymbol.createParametersFromStrings([]);
ISNEARHOLIDAY.detail = "判断下一交易日是否是交易合约的节假日";
ISNEARHOLIDAY.documentation = `
ISNEARHOLIDAY，判断下一交易日是否是交易合约的节假日。
ISNEARHOLIDAY 判断下一交易日是否是交易合约的节假日。交易合约下一交易日是节假日，当前k线返回1（Yes）,否则返回0（N0）

注：
1、该函数不支持在外盘上使用
2、该函数依据交易合约判断。

例：
ISNEARHOLIDAY=1&&TIME>=1000,CLOSEOUT;//下一个交易日是节假日并且时间是10:00,全平。
`;

const ISNULL = new MySymbol();
ISNULL.label = "ISNULL";
ISNULL.description = "判断空值";
ISNULL.insertText = "";
ISNULL.body = "ISNULL";
ISNULL.kind = MySymbolKind.Function;
ISNULL.marketType = MyMarketType.BasicFunction;
ISNULL.functionType = MyFunctionType.LogicalJudgmentFunction;
ISNULL.returnType = MyFunctionReturnType.None;
ISNULL.parameters = MySymbol.createParametersFromStrings([]);
ISNULL.detail = "判断空值";
ISNULL.documentation = `
ISNULL(N)判断空值，如果N为空值返回1，否则返回0
ISNULL 判断空值

用法：ISNULL(N);如果N为空值，函数返回1；如果N为非空值，函数返回0。

例：MA5:IFELSE(ISNULL(MA(C,5))=1,C,MA(C,5));//定义五周期均线，K线数量不足五根时，返回当根K线的收盘价
`;

const ISRECORDDAY = new MySymbol();
ISRECORDDAY.label = "ISRECORDDAY";
ISRECORDDAY.description = "判断当根K线是否为股权登记日";
ISRECORDDAY.insertText = "";
ISRECORDDAY.body = "ISRECORDDAY";
ISRECORDDAY.kind = MySymbolKind.Function;
ISRECORDDAY.marketType = MyMarketType.BasicFunction;
ISRECORDDAY.functionType = MyFunctionType.StockDataFunction;
ISRECORDDAY.returnType = MyFunctionReturnType.None;
ISRECORDDAY.parameters = MySymbol.createParametersFromStrings([]);
ISRECORDDAY.detail = "判断当根K线是否为股权登记日";
ISRECORDDAY.documentation = `
ISRECORDDAY判断当根K线是否为股权登记日
ISRECORDDAY  判断当根K线是否为股权登记日

用法：ISRECORDDAY  判断当根K线是否为股权登记日，当根K线是股权登记日返回是1（Yes），否则返回0（No）。

注：
1、该函数只支持加载在国内股票日线及以下周期使用，加载在非国内股票合约或日以上周期时返回值为0；
2、跨合约/跨周期被引用指标中返回值为0。
`;

const ISTIMETOKLINEEND = new MySymbol();
ISTIMETOKLINEEND.label = "ISTIMETOKLINEEND";
ISTIMETOKLINEEND.description = "判断当前K线时间是否满足K线走完前N秒";
ISTIMETOKLINEEND.insertText = "";
ISTIMETOKLINEEND.body = "ISTIMETOKLINEEND";
ISTIMETOKLINEEND.kind = MySymbolKind.Function;
ISTIMETOKLINEEND.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISTIMETOKLINEEND.functionType =
    MyFunctionType.LogicalJudgmentFunction;
ISTIMETOKLINEEND.returnType = MyFunctionReturnType.None;
ISTIMETOKLINEEND.parameters = MySymbol.createParametersFromStrings([]);
ISTIMETOKLINEEND.detail = "判断当前K线时间是否满足K线走完前N秒";
ISTIMETOKLINEEND.documentation = `
ISTIMETOKLINEEND(N)判断当前K线时间是否满足K线走完前N秒满足返回1，不满足返回0。参数N为秒数。
ISTIMETOKLINEEND(N) 判断当前K线时间是否满足K线走完前N秒。

用法：
ISTIMETOKLINEEND(N) 判断当前K线时间是否满足K线走完前N秒,满足返回1，不满足返回0。
参数N为秒数。

注：
1、仅支持在日线及日线以下周期使用。
2、该函数不支持使用在跨周期模型的被引用指标中。

例：
C>O&&ISTIMETOKLINEEND(5),BK;//当前K线为阳线并且满足K线走完前5秒，买开
C<O&&ISTIMETOKLINEEND(5),SP;//当前K线为阴线并且满足K线走完前5秒，卖平
AUTOFILTER;
MULTSIG(0,0,3,0);
`;

const ISUP = new MySymbol();
ISUP.label = "ISUP";
ISUP.description = "阳线";
ISUP.insertText = "";
ISUP.body = "ISUP";
ISUP.kind = MySymbolKind.Function;
ISUP.marketType = MyMarketType.BasicFunction;
ISUP.functionType = MyFunctionType.LogicalJudgmentFunction;
ISUP.returnType = MyFunctionReturnType.None;
ISUP.parameters = MySymbol.createParametersFromStrings([]);
ISUP.detail = "阳线";
ISUP.documentation = `
ISUP,判断该周期是否收阳，如果K线为阳线返回1，否则返回0
ISUP 判断该周期是否收阳

注：
1、ISUP等同于C>O

例：
ISUP=1&&C>REF(C,1),BK;//若当根k线收阳并且收盘价大于前一周期收盘价，则开多
//ISUP=1&&C>REF(C,1),BK; 与 ISUP&&C>REF(C,1),BK;//表达同等意义
`;

const ISWEEKEND = new MySymbol();
ISWEEKEND.label = "ISWEEKEND";
ISWEEKEND.description = "是否为本周最后一个交易日";
ISWEEKEND.insertText = "";
ISWEEKEND.body = "ISWEEKEND";
ISWEEKEND.kind = MySymbolKind.Function;
ISWEEKEND.marketType = MyMarketType.TPlusZeroStrategyFunction;
ISWEEKEND.functionType = MyFunctionType.LogicalJudgmentFunction;
ISWEEKEND.returnType = MyFunctionReturnType.None;
ISWEEKEND.parameters = MySymbol.createParametersFromStrings([]);
ISWEEKEND.detail = "是否为本周最后一个交易日";
ISWEEKEND.documentation = `
ISWEEKEND判断是否为本周最后一个交易日
ISWEEKEND 判断是否为本周最后一个交易日
此函数为系统封装函数。

用法：
ISWEEKEND 判断是否为本周最后一个交易日

例：
C<MA(C,5) || ISWEEKEND,SP;//如果满足平仓条件或者当前为本周最后一个交易日，平仓
`;

const K_STATE = new MySymbol();
K_STATE.label = "K_STATE";
K_STATE.description = "判断k线形态";
K_STATE.insertText = "";
K_STATE.body = "K_STATE()";
K_STATE.kind = MySymbolKind.Function;
K_STATE.marketType = MyMarketType.BasicFunction;
K_STATE.functionType = MyFunctionType.LogicalJudgmentFunction;
K_STATE.returnType = MyFunctionReturnType.None;
K_STATE.parameters = MySymbol.createParametersFromStrings([]);
K_STATE.detail = "判断k线形态";
K_STATE.documentation = `
K_STATE()判断K线形态
K_STATE 判断k线形态

用法：
K_STATE('STATE');STATE为代表k线形态的字符串。加载到k线图后，符合该k线形态，返回1，否则返回0。

例：
K_STATE('红三兵');//判断当前k线形态是否为红三兵

该函数在k线形态源码中无参数的情况下进行判断是否满足
'STATE'可以为
'红三兵'
'跳高上扬'
'并排阳线'
'十字线'
'多方炮'
'空方炮'
'叠叠多方炮'
'叠叠空方炮'
'光头阳线'
'光头阴线'
'看跌提腰带线'
'看跌吞没线'
'看涨提腰带线'
'看涨吞没线'
'三只乌鸦'
'双飞乌鸦'
'向上跳空缺口'
'上涨分离线'
'下跌分离线'
'上涨汇合线'
'下跌汇合线'
'跳空上涨卷轴线'
'跳空下跌卷轴线'
'跳空并排阳线'
'跳空并排阴阳线'
'乌云盖顶'
'阳后双阴阳'
'阴后双阳阴'
'孕线'
`;

const K_STATE1 = new MySymbol();
K_STATE1.label = "K_STATE1";
K_STATE1.description = "判断k线形态";
K_STATE1.insertText = "";
K_STATE1.body = "K_STATE1()";
K_STATE1.kind = MySymbolKind.Function;
K_STATE1.marketType = MyMarketType.BasicFunction;
K_STATE1.functionType = MyFunctionType.LogicalJudgmentFunction;
K_STATE1.returnType = MyFunctionReturnType.None;
K_STATE1.parameters = MySymbol.createParametersFromStrings([]);
K_STATE1.detail = "判断k线形态";
K_STATE1.documentation = `
K_STATE1()判断K线形态
K_STATE1 判断k线形态

用法：
K_STATE1(N1,'STATE');N1为k线形态源码中的参数；STATE为代表k线形态的字符串。加载到k线图后，当前k线符合该k线形态，返回1，否则返回0。

例：
K_STATE1(3,'上升三法');//上升三法为股价持续上涨中，某日出现一根大阳线，隔日后连续出现三根小阴线，被视为另一波上涨的信号。N1:=3为上升三法源码中的参数，可以根据需要自行调整。该函数为判断当前k线是否满足上升三法形态。

该函数在k线形态源码中只有一个参数的情况下进行判断是否满足
'STATE'可以为
'上升三法'：参数N1表示实体大小比例，N1=3即实体比例为3%
'下降三法'：参数N1表示实体大小比例，N1=3即实体比例为3%
'曙光初现'：参数N1表示实体大小比例，N1=3即实体比例为3%
'平底'：参数N1表示2根K线最低价的变化幅度，N1=1即变化幅度为1%
'平顶'：参数N1表示两根K线最高价的误差比例，误差百分比由品种决定，N1=1即为1%
'双飞燕'：参数N1表示两根K线成交量误差比例，误差百分比由品种决定，N1=1即为1%
'上档盘旋'：参数N1表示整理期间最高收盘价的上涨最大限度，N1=3即上涨最大限度为3%
'V形反转'：参数N1表示连续N根K线保持一个趋势
'倒V形反转'：参数N1表示连续N根K线保持一个趋势
'T形线（蜻蜓）'：参数N1表示下影线的百分比，N1=1即下影线占比1%
'长上影线'：参数N1表示上影线占K线全长的比例，N1=667即上影线占k线全长的667/1000
'长下影线'：参数N1表示下影线占K线全长的比例，N1=667即下影线占k线全长的667/1000
'倒锤线'：参数N1表示(MAX(O,C)-L)的倍数
'射击之星'：参数N1表示(MAX(O,C)-L)的倍数
'吊颈线'：参数N1表示(H-MIN(O,C))的倍数
`;

const K_STATE2 = new MySymbol();
K_STATE2.label = "K_STATE2";
K_STATE2.description = "判断k线形态";
K_STATE2.insertText = "";
K_STATE2.body = "K_STATE2()";
K_STATE2.kind = MySymbolKind.Function;
K_STATE2.marketType = MyMarketType.BasicFunction;
K_STATE2.functionType = MyFunctionType.LogicalJudgmentFunction;
K_STATE2.returnType = MyFunctionReturnType.None;
K_STATE2.parameters = MySymbol.createParametersFromStrings([]);
K_STATE2.detail = "判断k线形态";
K_STATE2.documentation = `
K_STATE2()判断K线形态
K_STATE2 判断k线形态

用法：
K_STATE2(N1,N2,'STATE');N1,N2为k线形态源码中的参数；STATE为代表k线形态的字符串。加载到k线图后，符合该k线形态，返回1，否则返回0。

例：
K_STATE2(3,5,'早晨之星');//早晨之星为启示后市见底回升的阴阳烛组合形态，3和5分别为早晨之星源码中的两个默认参数，可以根据需要自行调整。该函数为判断当前k线是否满足早晨之星形态。

该函数在k线形态源码中有两个参数的情况下进行判断是否满足
'STATE'可以为
'早晨之星'：参数N1为两侧K线K线实体比例，参数N2为星线涨跌幅。N1=3即收盘价相当于开盘价上涨或下跌3%，N2=5即星线涨跌幅为5%
'黄昏之星'：参数N1为两侧K线K线实体比例，参数N2为星线涨跌幅。N1=5即收盘价相当于开盘价上涨或下跌5%，N2=3即星线涨跌幅为3%
'大阳线'：参数N1为K线实体比例，参数N2为高低价比值与收开价比值的差值上线。N1=5即收盘价相当于开盘价上涨或下跌5%，N2=18即高低价比值 与收开价比值的差值上线18/1000
'大阴线':参数N1为K线实体比例，参数N2为高低价比值与收开价比值的差值上线。N1=5即收盘价相当于开盘价上涨或下跌5%，N2=18即高低价比值与收开价比值的差值上线18/1000
`;

const K_STATE3 = new MySymbol();
K_STATE3.label = "K_STATE3";
K_STATE3.description = "判断k线形态";
K_STATE3.insertText = "";
K_STATE3.body = "K_STATE3()";
K_STATE3.kind = MySymbolKind.Function;
K_STATE3.marketType = MyMarketType.BasicFunction;
K_STATE3.functionType = MyFunctionType.LogicalJudgmentFunction;
K_STATE3.returnType = MyFunctionReturnType.None;
K_STATE3.parameters = MySymbol.createParametersFromStrings([]);
K_STATE3.detail = "判断k线形态";
K_STATE3.documentation = `
K_STATE3()判断K线形态
K_STATE3 判断k线形态

用法：
K_STATE3(N1,N2,N3,'STATE');N1,N2,N3为k线形态源码中的参数；STATE为代表k线形态的字符串。加载到k线图后，符合该k线形态，返回1，否则返回0。

例：
K_STATE3(5,10,20,'出水芙蓉');//一根大阳线上穿三条均线，均线为多头排列称为出水芙蓉。5,10,20分别为出水芙蓉源码中的三个默认参数，可以根据需要自行调整。该函数为判断当前k线是否满足出水芙蓉形态

该函数在k线形态源码中有三个参数的情况下进行判断是否满足
'STATE'可以为
'出水芙蓉'：参数N1、N2、N3为三条均线周期
'东方红大阳升'：参数N1、N2、N3为三条均线周期
'断头铡刀'：参数N1、N2、N3为三条均线周期
'金蜘蛛'：参数N1、N2、N3为三条均线周期
'死蜘蛛'：参数N1、N2、N3为三条均线周期
`;

const K_STATE4 = new MySymbol();
K_STATE4.label = "K_STATE4";
K_STATE4.description = "判断k线形态";
K_STATE4.insertText = "";
K_STATE4.body = "K_STATE4()";
K_STATE4.kind = MySymbolKind.Function;
K_STATE4.marketType = MyMarketType.BasicFunction;
K_STATE4.functionType = MyFunctionType.LogicalJudgmentFunction;
K_STATE4.returnType = MyFunctionReturnType.None;
K_STATE4.parameters = MySymbol.createParametersFromStrings([]);
K_STATE4.detail = "判断k线形态";
K_STATE4.documentation = `
K_STATE4()判断K线形态
K_STATE4 判断k线形态

用法：
K_STATE4(N1,N2,N3,N4,'STATE');N1,N2,N3,N4为k线形态源码中的参数；STATE为代表k线形态的字符串。加载到k线图后，符合该k线形态，返回1，否则返回0。

例：
K_STATE4(5,5,10,20,'九阴白骨爪')：参数N1为连续N根K线满足阴线，参数N2、N3、N4为三条均线的周期
`;

const KLINESIG = new MySymbol();
KLINESIG.label = "KLINESIG";
KLINESIG.description = "判断当根K线上最后一个固定的信号";
KLINESIG.insertText = "";
KLINESIG.body = "KLINESIG";
KLINESIG.kind = MySymbolKind.Function;
KLINESIG.marketType = MyMarketType.TPlusZeroStrategyFunction;
KLINESIG.functionType = MyFunctionType.SignalLoggingFunction;
KLINESIG.returnType = MyFunctionReturnType.None;
KLINESIG.parameters = MySymbol.createParametersFromStrings([]);
KLINESIG.detail = "判断当根K线上最后一个固定的信号";
KLINESIG.documentation = `
KLINESIG判断当根K线上最后一个固定的信号
KLINESIG 判断当根K线上最后一个固定的信号。

用法：KLINESIG 判断当根K线上最后一个固定的信号。如果最后一根K线上没有信号，或者没有固定的信号，则该函数返回0。

注：
1、该函数只能用于指令价模型
2、信号的返回值：
BK:200;
SK:201;
BP:202;
SP:203;
BPK:204;
SPK:205;
CLOSEOUT:206;
STOP:207;
3、由BPK指令产生的BK信号按BPK信号处理，SPK指令产生的SK信号同理。

例：
KLINESIG=200&&BKVOL>0,SP;//如果最后一个固定的信号是BK信号，并且多头持仓大于0，卖平仓
`;

const KLINESTART = new MySymbol();
KLINESTART.label = "KLINESTART";
KLINESTART.description = "判断K线当前状态是否是K线开始";
KLINESTART.insertText = "";
KLINESTART.body = "KLINESTART";
KLINESTART.kind = MySymbolKind.Function;
KLINESTART.marketType = MyMarketType.TPlusZeroStrategyFunction;
KLINESTART.functionType = MyFunctionType.LogicalJudgmentFunction;
KLINESTART.returnType = MyFunctionReturnType.None;
KLINESTART.parameters = MySymbol.createParametersFromStrings([]);
KLINESTART.detail = "判断K线当前状态是否是K线开始";
KLINESTART.documentation = `
KLINESTART,判断K线当前状态是否是K线开始
KLINESTART 判断K线当前状态是否是K线开始。

用法：
1、KLINESTART 当前K线状态为K线的开始，则返回1，否则返回0。
2、加载运行过程中，当根K线接收到第一笔数据时，判断当根K线开始；历史信号计算中该函数返回值为0。

例：
C>REF(C,1)&&KLINESTART=0,BPK;//价格大于前一周期收盘价做多，K线开始的第一笔数据不交易
C<REF(C,1)&&KLINESTART=0,SPK;//价格小于前一周期收盘价做空，K线开始的第一笔数据不交易
MULTSIG(0,0,1,0);
AUTOFILTER;
`;

const KTEXT = new MySymbol();
KTEXT.label = "KTEXT";
KTEXT.description = "在K线附近标注文字";
KTEXT.insertText = "";
KTEXT.body = "KTEXT( , , , , ,)";
KTEXT.kind = MySymbolKind.Function;
KTEXT.marketType = MyMarketType.BasicFunction;
KTEXT.functionType = MyFunctionType.DrawingFunction;
KTEXT.returnType = MyFunctionReturnType.None;
KTEXT.parameters = MySymbol.createParametersFromStrings([]);
KTEXT.detail = "在K线附近标注文字";
KTEXT.documentation = `
KTEXT(COND,POSITION,PRICE,LCR,COLOR,TEXT)在k线上标注文字当COND条件满足时,移动POSITION根K线,在PRICE位置书写COLOR色文字TEXTLCR是文字占K线左(0)中(1)右(2)位置
KTEXT函数 在k线上标注文字。

用法：
KTEXT(COND,POSITION,PRICE,LCR,COLOR,TEXT); 
当COND条件满足时,移动POSITION根K线,在PRICE位置书写COLOR色文字TEXT。LCR是文字占K线左(0)中(1)右(2)位置。

注：
1、POSITION 参数负数代表向前移动 0代表满足条件当根K线 正数代表向后移动。LCR代表显示在字符位置的左右中位置，0为左，1为中，2为右
2、显示的汉字用单引号标注。
3、不支持将该函数直接定义为变量，即不支持下面的写法：
A:KTEXT(COND,POSITION,PRICE,LCR,COLOR,TEXT);

例1：
KTEXT(O>C,2,H,1,COLORYELLOW,'注');//在阴线的后两根K线处，在最高价位置中心上写"注"字。
例2：
MA5:=MA(C,5);
KTEXT(CROSS(C,MA5),-3,MA5,2,COLORRED,'买入');//在收盘价金叉5周期均线的前三根K线处，在MA5位置右侧上写"买入"字。
`;

const KURTOSIS = new MySymbol();
KURTOSIS.label = "KURTOSIS";
KURTOSIS.description = "峰度系数";
KURTOSIS.insertText = "";
KURTOSIS.body = "KURTOSIS( , )";
KURTOSIS.kind = MySymbolKind.Function;
KURTOSIS.marketType = MyMarketType.BasicFunction;
KURTOSIS.functionType = MyFunctionType.MathematicalStatisticsFunction;
KURTOSIS.returnType = MyFunctionReturnType.None;
KURTOSIS.parameters = MySymbol.createParametersFromStrings([]);
KURTOSIS.detail = "峰度系数";
KURTOSIS.documentation = `
KURTOSIS(X,N)求X在N个周期内的峰度系数
KURTOSIS(X,N) 求X在N个周期内的峰度系数。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值。
3、N为0时，该函数返回空值。
4、N为空值，该函数返回空值。
5、N可以为变量。
6、N至少为4，少于4返回空值。

算法举例：计算KURTOSIS(C,4);在最近一根K线上的值。
用麦语言函数可以表示如下：
((POW(C-MA(C,4),4)+POW(REF(C,1)-MA(C,4),4)+POW(REF(C,2)-MA(C,4),4)+POW(REF(C,3)-MA(C,4),4)) /POW(STD(C,4),4))*(4*(4+1)/((4-1)*(4-2)*(4-3)))-3*SQUARE(4-1)/((4-2)*(4-3));

例：
KURTOSIS(C,10);
//表示收盘价的10周期峰值。峰值反映与正态分布相比某一分布的尖锐度或平坦度。正峰值表示相对尖锐的分布。负峰值表示相对平坦的分布。
`;

const LAST = new MySymbol();
LAST.label = "LAST";
LAST.description = "判断函数";
LAST.insertText = "";
LAST.body = "LAST( , , )";
LAST.kind = MySymbolKind.Function;
LAST.marketType = MyMarketType.BasicFunction;
LAST.functionType = MyFunctionType.LogicalJudgmentFunction;
LAST.returnType = MyFunctionReturnType.None;
LAST.parameters = MySymbol.createParametersFromStrings([]);
LAST.detail = "判断函数";
LAST.documentation = `
LAST(X,N1,N2),判断过去N1到N2周期内，是否一直满足条件X一直满足返回1，否则返回0
LAST(COND,N1,N2) 判断过去N1到N2周期内，是否一直满足COND条件。

注：
1、若N1与N2只相差一个周期（如N1=3，N2=2），则函数判断距离当前K线最近的那个周期上是否满足条件（即判断过去N2个周期的那根K线上是否满足条件）
2、当N1/N2为有效值，但当前的k线数不足N1/N2根，或者N1/N2空值的情况下，代表不成立，该函数返回0
3、N1、N2不可以是变量。

例1：
LAST(CLOSE>OPEN,10,5);//表示从过去第10个周期到第5个周期内一直是阳线
例2：
MA5:=MA(C,5);
LAST(C>MA5,4,3);//判断距离当前k线3个周期的那根k线上是否满足C大于MA5.
`;

const LASTOFFSETPROFIT = new MySymbol();
LASTOFFSETPROFIT.label = "LASTOFFSETPROFIT";
LASTOFFSETPROFIT.description = "最近一次交易的平仓盈亏";
LASTOFFSETPROFIT.insertText = "";
LASTOFFSETPROFIT.body = "LASTOFFSETPROFIT";
LASTOFFSETPROFIT.kind = MySymbolKind.Function;
LASTOFFSETPROFIT.marketType = MyMarketType.TPlusZeroStrategyFunction;
LASTOFFSETPROFIT.functionType =
    MyFunctionType.PositionManagementFunction;
LASTOFFSETPROFIT.returnType = MyFunctionReturnType.None;
LASTOFFSETPROFIT.parameters = MySymbol.createParametersFromStrings([]);
LASTOFFSETPROFIT.detail = "最近一次交易的平仓盈亏";
LASTOFFSETPROFIT.documentation = `
LASTOFFSETPROFIT最近一次交易的平仓盈亏
LASTOFFSETPROFIT 最近一次交易的平仓盈亏

用法：LASTOFFSETPROFIT返回当前距当前K线最近一次交易的平仓盈亏，用于风险控制。

注：
1、从开仓到持仓为0被视为一次交易。
2、信号执行方式为‘K线走完确认信号下单’：LASTOFFSETPROFIT根据信号当根K线的收盘价计算平仓盈亏，待下根K线时取值相应变化。
3、信号执行方式为‘XX下单，K线走完复核’：LASTOFFSETPROFIT根据下单当时的行情最新价计算平仓盈亏，复核后待下根K线时取值相应变化。
4、信号执行方式为‘出信号立即下单不复核’：LASTOFFSETPROFIT根据信号确认时的行情最新价计算平仓盈亏。
5、LASTOFFSETPROFIT与日志中记录的平仓盈亏不同，后者根据成交价计算。
6、LASTOFFSETPROFIT的计算不包含手续费。
7、因信号消失产生的盈亏未纳入LASTOFFSETPROFIT的计算。
8、股票T+1交易不支持统计平仓盈亏，该函数返回空值。

例：
LASTOFFSETPROFIT<=-40 && C<BKPRICE-60,CLOSEOUT;//最近一次交易的亏损额大于40并且当前亏损大于60，清仓
`;

const LASTSIG = new MySymbol();
LASTSIG.label = "LASTSIG";
LASTSIG.description = "判断最近一个信号";
LASTSIG.insertText = "";
LASTSIG.body = "LASTSIG";
LASTSIG.kind = MySymbolKind.Function;
LASTSIG.marketType = MyMarketType.TPlusZeroStrategyFunction;
LASTSIG.functionType = MyFunctionType.SignalLoggingFunction;
LASTSIG.returnType = MyFunctionReturnType.None;
LASTSIG.parameters = MySymbol.createParametersFromStrings([]);
LASTSIG.detail = "判断最近一个信号";
LASTSIG.documentation = `
LASTSIG，取上一次交易指令方向
LASTSIG判断最近一个信号

注：由BPK指令产生的BK信号按BPK信号处理，SPK指令产生的SK信号同理。

例：AA:LASTSIG=BK;//最近一个 稳定的信号为BK信号AA返回值为1，否则返回0.
LASTSIG的不同返回值代表的信号：
BK:200;
SK:201;
BP:202;
SP:203;
BPK:204;
SPK:205;
CLOSEOUT:206;
STOP:207;
`;

const LASTSIGGROUP = new MySymbol();
LASTSIGGROUP.label = "LASTSIGGROUP";
LASTSIGGROUP.description = "判断最近一个信号所在的分组";
LASTSIGGROUP.insertText = "";
LASTSIGGROUP.body = "LASTSIGGROUP";
LASTSIGGROUP.kind = MySymbolKind.Function;
LASTSIGGROUP.marketType = MyMarketType.TPlusZeroStrategyFunction;
LASTSIGGROUP.functionType = MyFunctionType.SignalLoggingFunction;
LASTSIGGROUP.returnType = MyFunctionReturnType.None;
LASTSIGGROUP.parameters = MySymbol.createParametersFromStrings([]);
LASTSIGGROUP.detail = "判断最近一个信号所在的分组";
LASTSIGGROUP.documentation = `
LASTSIGGROUP判断最近一个信号所在的分组
LASTSIGGROUP 判断最近一个信号所在的分组。

注：
1、"A"组返回1，"B"组返回2，"C"组返回3，"D"组返回4，"E"组返回5，"F"组返回6，"G"组返回7，"H"组返回8，"I"组返回9。
2、未设置过分组或者分组模型里面的无组别指令，返回0。
3、出信号的当根K线，信号固定后，LASTSIGGROUP返回该信号的分组，信号尚未固定时，LASTSIGGROUP返回上一个固定的信号的分组。

例：
CROSS(C,MA(C,5)),BK('A',1);//最新价上穿五周期均线，A组做多一手
CROSS(MA(C,5),C),SP('A',BKVOL);//最新价下穿五周期均线，A组平仓
CROSS(C,MA(C,10)),BK('B',2);//最新价上穿十周期均线，B组做多两手
LASTSIG=200&&LASTSIGGROUP=2,SP('B',BKVOL);//上一个信号是B组的BK信号，则B组平仓
`;

const LINETHICK = new MySymbol();
LINETHICK.label = "LINETHICK";
LINETHICK.description = "线型粗细控制";
LINETHICK.insertText = "";
LINETHICK.body = "LINETHICK";
LINETHICK.kind = MySymbolKind.Function;
LINETHICK.marketType = MyMarketType.BasicFunction;
LINETHICK.functionType = MyFunctionType.DrawingFunction;
LINETHICK.returnType = MyFunctionReturnType.None;
LINETHICK.parameters = MySymbol.createParametersFromStrings([]);
LINETHICK.detail = "线型粗细控制";
LINETHICK.documentation = `

添加线型粗细控制。
用法：
LINETHICK1  LINETHICK2————LINETHICK7 线型由细至粗。
注：
1、不支持将该函数直接定义为变量，即不支持下面的写法：A:LINETHICK1;
2、该函数可以和颜色函数一起使用，即支持下面的写法：AA:C,COLORBLUE,LINETHICK5;
例：MA5:MA(C,5),COLORRED,LINETHICK4; 给5日均线中度加粗,颜色为红色。
`;

const LLV = new MySymbol();
LLV.label = "LLV";
LLV.description = "最低值";
LLV.insertText = "";
LLV.body = "LLV( , )";
LLV.kind = MySymbolKind.Function;
LLV.marketType = MyMarketType.BasicFunction;
LLV.functionType = MyFunctionType.FinancialStatisticsFunction;
LLV.returnType = MyFunctionReturnType.None;
LLV.parameters = MySymbol.createParametersFromStrings([]);
LLV.detail = "最低值";
LLV.documentation = `
LLV(X,N),求X在N个周期内的最小值
LLV(X,N)： 求X在N个周期内的最小值。

注：
1、N包含当前k线。
2、若N为0则从第一个有效值开始算起;
3、当N为有效值，但当前的k线数不足N根，按照实际的根数计算;
4、N为空值时，返回空值。
5、N可以是变量。

例1：
LL:LLV(L,5);//求5根k线最低点（包含当前k线）。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
LL1:=LLV(L,N);//在分钟周期上，求当天第一根k线到当前周期内所有k线最低价的最小值。
`;

const LLVBARS = new MySymbol();
LLVBARS.label = "LLVBARS";
LLVBARS.description = "前一个最低点位置";
LLVBARS.insertText = "";
LLVBARS.body = "LLVBARS( , )";
LLVBARS.kind = MySymbolKind.Function;
LLVBARS.marketType = MyMarketType.BasicFunction;
LLVBARS.functionType = MyFunctionType.FinancialStatisticsFunction;
LLVBARS.returnType = MyFunctionReturnType.None;
LLVBARS.parameters = MySymbol.createParametersFromStrings([]);
LLVBARS.detail = "前一个最低点位置";
LLVBARS.documentation = `
LLVBARS(X,N),求N周期内X最低值到当前周期数
LLVBARS(X,N)： 求N周期内X最低值到当前周期数

注：
1、若N为0则从第一个有效值开始算起(不包含当前K线)；
2、当N为有效值，但当前的k线数不足N根，按照实际的根数计算，第一根k线返回空值；
3、N为空值时，返回空值。
4、N可以是变量。

例1：
LLVBARS(VOL,0); 求历史成交量最小的周期到当前的周期数（最小值那根k线上LLVBARS(VOL,0);的返回值为0，最小值后的第一根k线返回值为1，依次类推）。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
ZLBARS:REF(LLVBARS(L,N),N)+N;//在分钟周期上，求昨天最低价所在的k线到当前k线之间的周期数。
`;

const LN = new MySymbol();
LN.label = "LN";
LN.description = "自然对数";
LN.insertText = "";
LN.body = "LN( )";
LN.kind = MySymbolKind.Function;
LN.marketType = MyMarketType.BasicFunction;
LN.functionType = MyFunctionType.MathFunction;
LN.returnType = MyFunctionReturnType.None;
LN.parameters = MySymbol.createParametersFromStrings([]);
LN.detail = "自然对数";
LN.documentation = `
LN(X),求X的自然对数
LN(X)：求X的自然对数。
注：
1、X取值范围为非0自然数，即1、2、3、4、5……
2、若X取值为0或负数，返回值为空值。

例：
LN(OPEN);//求开盘价的对数。
`;

const LOG = new MySymbol();
LOG.label = "LOG";
LOG.description = "求以Y为底X的对数值";
LOG.insertText = "";
LOG.body = "LOG( )";
LOG.kind = MySymbolKind.Function;
LOG.marketType = MyMarketType.BasicFunction;
LOG.functionType = MyFunctionType.MathFunction;
LOG.returnType = MyFunctionReturnType.None;
LOG.parameters = MySymbol.createParametersFromStrings([]);
LOG.detail = "求以Y为底X的对数值";
LOG.documentation = `
LOG(X,Y)求以Y为底X的对数值。
LOG(X,Y) 求以Y为底X的对数值。

注：
1、该函数中X的取值范围为X>0
2、0和负数没有对数，X为0或负数时返回值为空值。
3、该函数中Y的取值范围为Y>0并且Y≠1。
4、为保证返回值在实数范围，Y为1或负数时返回值为空值。

例1：
LOG(100,10);//返回2.
例2：
LOG(0,7);//返回空值。
`;

const LOG10 = new MySymbol();
LOG10.label = "LOG10";
LOG10.description = "常用对数";
LOG10.insertText = "";
LOG10.body = "LOG10( )";
LOG10.kind = MySymbolKind.Function;
LOG10.marketType = MyMarketType.BasicFunction;
LOG10.functionType = MyFunctionType.MathFunction;
LOG10.returnType = MyFunctionReturnType.None;
LOG10.parameters = MySymbol.createParametersFromStrings([]);
LOG10.detail = "常用对数";
LOG10.documentation = `
LOG10(X)求X的常用对数。
LOG10(X) 求X的常用对数值。

注：
1、该函数中X的取值范围为X>0
2、0和负数没有对数，X为0或负数时返回值为空值。

例1：
LOG10(100);//返回2.
例2：
LOG10(0);//返回空值。
`;

const LONGCROSS = new MySymbol();
LONGCROSS.label = "LONGCROSS";
LONGCROSS.description = "维持交叉函数";
LONGCROSS.insertText = "";
LONGCROSS.body = "LONGCROSS( , , )";
LONGCROSS.kind = MySymbolKind.Function;
LONGCROSS.marketType = MyMarketType.BasicFunction;
LONGCROSS.functionType = MyFunctionType.LogicalJudgmentFunction;
LONGCROSS.returnType = MyFunctionReturnType.None;
LONGCROSS.parameters = MySymbol.createParametersFromStrings([]);
LONGCROSS.detail = "维持交叉函数";
LONGCROSS.documentation = `
LONGCROSS(A,B,N),判断A在是否在N个周期内都小于B如果是则返回1，否则返回0
LONGCROSS(A,B,N) 表示A在N个周期内都小于B，本周期A从下向上穿越B

注：
1、当N为有效值，但当前的k线数不足N根时，LONGCROSS函数返回空值
2、N不支持变量。

例1：
LONGCROSS(CLOSE,MA(CLOSE,10),20);//表示收盘线在10日均线之下持续20周期后从下向上穿过10日均线
`;

const LOOP1 = new MySymbol();
LOOP1.label = "LOOP1";
LOOP1.description = "循环统计函数";
LOOP1.insertText = "";
LOOP1.body = "LOOP1( , , )";
LOOP1.kind = MySymbolKind.Function;
LOOP1.marketType = MyMarketType.TPlusZeroStrategyFunction;
LOOP1.functionType = MyFunctionType.LoopExecutionFunction;
LOOP1.returnType = MyFunctionReturnType.None;
LOOP1.parameters = MySymbol.createParametersFromStrings([]);
LOOP1.detail = "循环统计函数";
LOOP1.documentation = `
LOOP1(X,N,TYPE)循环统计函数；对变量X在N个周期进行TYPE相应的操作
LOOP1(X,N,TYPE);循环统计函数 对X在N个周期进行TYPE相应的操作

注：
TYPE取值：
MAX_VALUE 最大值；
MIN_VALUE 最小值；
MAX_POS 最大值位置；
MIN_POS 最小值位置；
MAX1_VALUE 最大值（不包括自身周期）；
MIN1_VALUE 最小值（不包括自身周期）；
MAX1_POS 最大值位置(不包括自身周期)；
MIN1_POS 最小值位置（不包括自身周期）；
SECONDMAX_VALUE 次大值；
SECONDMIN_VALUE 次小值；
SECONDMAX_POS 次大值位置； 
SECONDMIN_POS 次小值位置；
SECONDMAX1_VALUE 次大值（不包括自身周期）；
SECONDMIN1_VALUE 次小值（不包括自身周期）；
SECONDMAX1_POS 次大值位置（不包括自身周期）；
SECONDMIN1_POS 次小值位置（不包括自身周期）；
TIMES 满足表达式的次数；
ADD 加和；
AVERAGE 均值。

例1：
HH:VALUEWHEN(CROSS(C,MA(C,5)),H);//取收盘价上穿五周期均线时的最高价
HH1:LOOP1(HH,50,SECONDMAX_VALUE);//50周期内收盘价上穿均线时的最高价的次高值
含义说明：
1、取包含当根K线内的50根K线内的收盘价上穿均线时的最高价
2、对最高价从大到小进行排序
3、当根K线的HH1返回值为排序中第二大的值

注：如果50个周期最高值为唯一值，即50个周期的HH取值相同，则最高值与次高值相等，HH1返回对应的HH值

例2：
HH1:LOOP1(H,10,SECONDMAX1_POS);
说明：不包含当根K线的前面10根K线的最高价中第二大的取值对应K线，距离当前K线的位置

例3：
POS1:LOOP1(H,30,SECONDMAX1_POS);
POS2:LOOP1(H,30,MAX1_POS);
POS1<POS2&&REF(VOL,POS1)<REF(VOL,POS2)&&C<LV(L,30)&&VOL>REF(VOL,1),SK;
说明：
30周期内次高点的位置比最高点的位置靠近当前位置，并且次高点的成交量比最高点的成交量低，当前价格跌破了30周期内的最低点并且成交量增加，M头形成反转形态，做空入场。

替代编写方法说明：
LOOP1(X,N,MAX_VALUE)=HHV(X,N)
LOOP1(X,N,MIN_VALUE)=LLV(X,N)
LOOP1(X,N, MAX_POS)=HHVBARS(X,N)
LOOP1(X,N, MIN_POS)=LLVBARS(X,N)
LOOP1(X,N, MAX1_VALUE)=HV(X,N)
LOOP1(X,N, MIN1_VALUE)=LV(X,N)
LOOP1(X,N, TIMES)=COUNT(X,N)
LOOP1(X,N, ADD)=SUM(X,N)
LOOP1(X,N, AVERAGE)=MA(X,N)
`;

const LOOP2 = new MySymbol();
LOOP2.label = "LOOP2";
LOOP2.description = "循环条件函数";
LOOP2.insertText = "";
LOOP2.body = "LOOP2( , , )";
LOOP2.kind = MySymbolKind.Function;
LOOP2.marketType = MyMarketType.TPlusZeroStrategyFunction;
LOOP2.functionType = MyFunctionType.LoopExecutionFunction;
LOOP2.returnType = MyFunctionReturnType.None;
LOOP2.parameters = MySymbol.createParametersFromStrings([]);
LOOP2.detail = "循环条件函数";
LOOP2.documentation = `
LOOP2(COND,A,B);循环条件函数；若COND条件成立，则返回A，否则返回B
LOOP2(COND,A,B);循环条件函数 若COND条件成立，则返回A，否则返回B

注：
1、COND是判断条件;A、B可以是条件，也可以是数值。
2、该函数支持变量循环引用前一周期自身变量，即支持下面这样的写法Y: LOOP2(CON,X,REF(Y,1));

例1：
X:  LOOP2(ISUP,H,REF(X,1));//k线为阳线，取当根K线的最高价，否则取上一次是阳线的K线的最高价;若之前未出现过阳线时，X返回为空值

例2：
BB:LOOP2(BARSBK=1,LOOP2(L>LV(L,4),L,LV(L,4)),LOOP2(L>REF(BB,1),L,REF(BB,1)));//持有多单时，开多单那根的前面4个周期内的最低价为起始止损点BB，后续K线最低价比前一个最低价高，取当前最低价为止损点，否则取前一个低点为止损点，
SS:LOOP2(BARSSK=1,LOOP2(H<HV(H,4),H,HV(H,4)),LOOP2(H<REF(SS,1),H,REF(SS,1)));//持有空单时，开空单那根的前面4个周期内的最高价为起始止损点SS，最高价比前一个最高价低，取当前最高价为止损点，否则取前一个高点为止损点
H>HV(H,20),BK;
L<LV(L,20),SK;
C<BB,SP;
C>SS,BP;
AUTOFILTER;
`;

const LOW = new MySymbol();
LOW.label = "LOW";
LOW.description = "取得K线图的最低价";
LOW.insertText = "";
LOW.body = "LOW";
LOW.kind = MySymbolKind.Function;
LOW.marketType = MyMarketType.BasicFunction;
LOW.functionType = MyFunctionType.CandlestickDataReference;
LOW.returnType = MyFunctionReturnType.None;
LOW.parameters = MySymbol.createParametersFromStrings([]);
LOW.detail = "取得K线图的最低价";
LOW.documentation = `
LOW取得当根K线的最低价
LOW 取得K线图的最低价。

注：
1、可简写为L。

例1：
LL:L;//定义LL为最低价。
例2：
LL:LLV(L,5);//取得5个周期内最低价的最小值。
例3：
REF(L,1);//取得前一根K线的最低价
`;

const LV = new MySymbol();
LV.label = "LV";
LV.description = "除当前K线外最低值";
LV.insertText = "";
LV.body = "LV( , )";
LV.kind = MySymbolKind.Function;
LV.marketType = MyMarketType.BasicFunction;
LV.functionType = MyFunctionType.FinancialStatisticsFunction;
LV.returnType = MyFunctionReturnType.None;
LV.parameters = MySymbol.createParametersFromStrings([]);
LV.detail = "除当前K线外最低值";
LV.documentation = `
LV(X,N)求X在N个周期内的最小值(不包含当前K线)
LV(X,N) 求X在N个周期内的最小值（不包含当前k线）

注：
1、若N为0则从第一个有效值开始算起;
2、当N为有效值，但当前的k线数不足N根，按照实际的根数计算;
3、N为空值时，返回空值。
4、N可以是变量。

例1：
LL:LV(L,10);//求前面10根k线的最低点。（不包含当前k线）
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
NN:=REF(N,N);
ZL:VALUEWHEN(DATE<>REF(DATE,1),LV(L,NN));//在分钟周期上，求昨天最低价。
例3：
LV(L,5) 和 REF(LLV(L,5),1) 的结果是一样的，用LV编写更加方便。
`;

const MA = new MySymbol();
MA.label = "MA";
MA.description = "算数移动平均";
MA.insertText = "";
MA.body = "MA( , )";
MA.kind = MySymbolKind.Function;
MA.marketType = MyMarketType.BasicFunction;
MA.functionType = MyFunctionType.FinancialStatisticsFunction;
MA.returnType = MyFunctionReturnType.None;
MA.parameters = MySymbol.createParametersFromStrings([]);
MA.detail = "算数移动平均";
MA.documentation = `
MA(X,N),求X在N个周期内的简单移动平均
MA(X,N) 求X在N个周期内的简单移动平均

算法：MA(X,5)=(X1+X2+X3+X4+X5)/5
注：
1、N包含当前k线。
2、简单移动平均线沿用最简单的统计学方式，将过去某特定时间内的价格取其平均值。
3、当N为有效值，但当前的k线数不足N根，函数返回空值。
4、N为0或空值的情况下，函数返回空值。
5、N可以为变量

例1：
MA5:=MA(C,5);//求5周期收盘价的简单移动平均。
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
M:=IFELSE(N>10,10,N);//k线超过10根，M取10，否则M取实际根数
MA10:MA(C,M);//在分钟周期上，当天k线不足10根，按照实际根数计算MA10，超过10根按照10周期计算MA10。
`;

const MARGIN = new MySymbol();
MARGIN.label = "MARGIN";
MARGIN.description = "保证金";
MARGIN.insertText = "";
MARGIN.body = "MARGIN";
MARGIN.kind = MySymbolKind.Function;
MARGIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
MARGIN.functionType = MyFunctionType.PositionManagementFunction;
MARGIN.returnType = MyFunctionReturnType.None;
MARGIN.parameters = MySymbol.createParametersFromStrings([]);
MARGIN.detail = "保证金";
MARGIN.documentation = `
MARGIN返回国内期货合约合约的保证金比率或者外盘期货合约的每手保证金
MARGIN 保证金

用法：MARGIN在国内期货合约上返回当前合约的保证金比率、在外盘期货合约上返回每手保证金，用于模型中资金、手数相关计算。

注：
1、MARGIN返回值为小数
2、主图加载、回测、模组运行中，MARGIN取值为设置保证金/手续费的量化交易参数中对保证金的设置

例1：
K:=MONEYTOT*0.2/(C*MARGIN*UNIT+FEE); //国内期货合约理论权益的20%可以开仓的手数（此写法适用于按固定手数收取手续费的合约）

例2：
K:=MONEYTOT*0.2/(MARGIN+FEE); //外盘期货合约理论权益的20%可以开仓的手数（此写法适用于按固定手数收取手续费的合约）
`;

const MAX = new MySymbol();
MAX.label = "MAX";
MAX.description = "最大值";
MAX.insertText = "";
MAX.body = "MAX( , )";
MAX.kind = MySymbolKind.Function;
MAX.marketType = MyMarketType.BasicFunction;
MAX.functionType = MyFunctionType.MathFunction;
MAX.returnType = MyFunctionReturnType.None;
MAX.parameters = MySymbol.createParametersFromStrings([]);
MAX.detail = "最大值";
MAX.documentation = `
MAX(A,B),取A，B中较大者
MAX(A,B)：取最大值。取A，B中较大者。

注：
若A=B，返回值为A或者B的值。

例1：
MAX(CLOSE,OPEN);//表示取开盘价和收盘价中较大者。
例2：
MAX(CLOSE-OPEN,0);//表示若收盘价大于开盘价返回它们的差值，否则返回0。
例3：
MAX(A,MAX(B,MAX(C,D)));//求 A B C D四者中的最大值
`;

const MAX1 = new MySymbol();
MAX1.label = "MAX1";
MAX1.description = "取最大值";
MAX1.insertText = "";
MAX1.body = "MAX1( )";
MAX1.kind = MySymbolKind.Function;
MAX1.marketType = MyMarketType.BasicFunction;
MAX1.functionType = MyFunctionType.MathFunction;
MAX1.returnType = MyFunctionReturnType.None;
MAX1.parameters = MySymbol.createParametersFromStrings([]);
MAX1.detail = "取最大值";
MAX1.documentation = `
MAX1(A1,...,A30),取A1...A30中的最大值（支持2-30个参数进行比较）
MAX1(A1,...,A30) 在A1到A30中取最大值。

注：
1、支持2-30个数值进行比较。
2、A1...A30可以为数字也可以为变量。

例1：
MAX1(CLOSE,OPEN);//表示取开盘价和收盘价中较大者。

例2：
MAX1(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);//表示取数字1-16中的最大值。
`;

const MAXBKVOL = new MySymbol();
MAXBKVOL.label = "MAXBKVOL";
MAXBKVOL.description = "多头最大持仓手数";
MAXBKVOL.insertText = "";
MAXBKVOL.body = "MAXBKVOL";
MAXBKVOL.kind = MySymbolKind.Function;
MAXBKVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
MAXBKVOL.functionType = MyFunctionType.SignalLoggingFunction;
MAXBKVOL.returnType = MyFunctionReturnType.None;
MAXBKVOL.parameters = MySymbol.createParametersFromStrings([]);
MAXBKVOL.detail = "多头最大持仓手数";
MAXBKVOL.documentation = `
MAXBKVOL相邻两次多头持仓为0之间的多头最大持仓手数
MAXBKVOL 多头最大持仓手数

用法：
MAXBKVOL 返回一次多头交易过程中最大的持仓手数。一次多头交易指有多头持仓到持仓为0。

注：
1、开仓信号当根K线，MAXBKVOL返回值增加多头开仓数量。
2、平全部多仓信号的当根K线，MAXBKVOL返回0。
3、非一次完整交易中平仓信号当根K线持仓不为0，MAXBKVOL返回值不变。
4、一根K线多信号的模型，平仓信号当根K线返回最新一次完整交易的持仓手数。

例：
CROSS(C,MA(C,5)),BK(1);//价格上穿五周期均线，买开一手
CROSS(C,MA(C,10)),BK(2);//价格上穿十周期均线，加仓两手
MAXBKVOL=3,SP(BKVOL);//多头最大持仓手数为3时，卖平多头持仓
`;

const MAXSKVOL = new MySymbol();
MAXSKVOL.label = "MAXSKVOL";
MAXSKVOL.description = "空头最大持仓手数";
MAXSKVOL.insertText = "";
MAXSKVOL.body = "MAXSKVOL";
MAXSKVOL.kind = MySymbolKind.Function;
MAXSKVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
MAXSKVOL.functionType = MyFunctionType.SignalLoggingFunction;
MAXSKVOL.returnType = MyFunctionReturnType.None;
MAXSKVOL.parameters = MySymbol.createParametersFromStrings([]);
MAXSKVOL.detail = "空头最大持仓手数";
MAXSKVOL.documentation = `
MAXBKVOL相邻两次空头持仓为0之间的空头最大持仓手数
MAXSKVOL 空头最大持仓手数

用法：
MAXSKVOL 返回一次空头交易过程中最大的持仓手数。一次空头交易指有空头持仓到持仓为0

注：
1、开仓信号当根K线，MAXSKVOL返回值增加空头开仓数量。
2、平全部空仓信号的当根K线，MAXSKVOL返回0。
3、非一次完整交易中平仓信号当根K线持仓不为0，MAXSKVOL返回值不变。
4、一根K线多信号的模型，平仓信号当根K线返回最新一次完整交易的持仓手数。

例：
CROSS(MA(C,5),C),SK(1);//价格下穿五周期均线，卖开一手
CROSS(MA(C,10),C),SK(2);//价格下穿十周期均线，加仓两手
MAXSKVOL=3,BP(SKVOL);//空头最大持仓手数为3时，买平空头持仓
`;

const MEDIAN = new MySymbol();
MEDIAN.label = "MEDIAN";
MEDIAN.description = "求中位数";
MEDIAN.insertText = "";
MEDIAN.body = "MEDIAN( , )";
MEDIAN.kind = MySymbolKind.Function;
MEDIAN.marketType = MyMarketType.BasicFunction;
MEDIAN.functionType = MyFunctionType.MathFunction;
MEDIAN.returnType = MyFunctionReturnType.None;
MEDIAN.parameters = MySymbol.createParametersFromStrings([]);
MEDIAN.detail = "求中位数";
MEDIAN.documentation = `
MEDIAN(X,N)求X在N个周期内的中位数
MEDIAN(X,N) 求X在N个周期内居于中间的数值。

注：
1、N个周期内所有X排序后，若N为奇数，则选择第（N+1）/2个为中位数，若N为偶数，则中位数是（N/2以及N/2+1）的平均数。
2、N可以为变量。
3、N周期内X只要存在空值，该函数返回值即为空值。 

例1：
豆粕2009最近3日的收盘价为2727、2754、2748，那么当前MEDIAN(C,3)的返回值是2748
例2：
豆粕2009最近4日的开盘价为2752、2743、2730、2728，那么当前MEDIAN(O,4)的返回值是2736.5
`;

const MEDIAN1 = new MySymbol();
MEDIAN1.label = "MEDIAN1";
MEDIAN1.description = "求中位数";
MEDIAN1.insertText = "";
MEDIAN1.body = "MEDIAN1()";
MEDIAN1.kind = MySymbolKind.Function;
MEDIAN1.marketType = MyMarketType.BasicFunction;
MEDIAN1.functionType = MyFunctionType.MathFunction;
MEDIAN1.returnType = MyFunctionReturnType.None;
MEDIAN1.parameters = MySymbol.createParametersFromStrings([]);
MEDIAN1.detail = "求中位数";
MEDIAN1.documentation = `
MEDIAN1(A1,..,A30),求A1...A30的中位数（支持最多30个参数）
MEDIAN1(A1,...,A30) 求A1到A30内居于中间的数值。

注：
1、支持2-30个数值进行计算。
2、A1...A30可以为数值也可以为变量。
3、若参数个数为N,对N个参数排序后，N为奇数，则选择第（N+1）/2个为中位数，若N为偶数，则中位数是（N/2以及N/2+1）的平均数。

例1:
AA:MEDIAN1(O,C,H);//开盘价、收盘价、最高价按数值排序，取居中的数值
例2：
BB:MEDIAN1(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);//表示取数字1-16的中位数,BB返回8.5
`;

const MIN = new MySymbol();
MIN.label = "MIN";
MIN.description = "最小值";
MIN.insertText = "";
MIN.body = "MIN( , )";
MIN.kind = MySymbolKind.Function;
MIN.marketType = MyMarketType.BasicFunction;
MIN.functionType = MyFunctionType.MathFunction;
MIN.returnType = MyFunctionReturnType.None;
MIN.parameters = MySymbol.createParametersFromStrings([]);
MIN.detail = "最小值";
MIN.documentation = `
MIN(A,B),取A，B中较小者
MIN(A,B)：取最小值。取A，B中较小者

注：
若A=B，返回值为A或者B的值。

例1：
MIN(OPEN,CLOSE);//表示取开盘价和收盘价中的较小者。
例2：
MIN(C,MIN(O,REF(C,1)));//求当前周期的开盘价，收盘价，以及上周期的收盘价间最小的数值
`;

const MIN1 = new MySymbol();
MIN1.label = "MIN1";
MIN1.description = "取最小值";
MIN1.insertText = "";
MIN1.body = "MIN1( )";
MIN1.kind = MySymbolKind.Function;
MIN1.marketType = MyMarketType.BasicFunction;
MIN1.functionType = MyFunctionType.MathFunction;
MIN1.returnType = MyFunctionReturnType.None;
MIN1.parameters = MySymbol.createParametersFromStrings([]);
MIN1.detail = "取最小值";
MIN1.documentation = `
MIN1(A1,...,A30),取A1...A30中的最小值（支持2-30个参数进行比较）
MIN1(A1,...,A30) 在A1到A30中取最小值。

注：
1、支持2-30个数值进行比较。
2、A1...A30可以为数字也可以为变量。

例1：
MIN1(CLOSE,OPEN);//表示取开盘价和收盘价中较小者。

例2：
MIN1(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);//表示取数字1-16中的最小值。
`;

const MINPRICE = new MySymbol();
MINPRICE.label = "MINPRICE";
MINPRICE.description = "数据合约的最小变动价位";
MINPRICE.insertText = "";
MINPRICE.body = "MINPRICE";
MINPRICE.kind = MySymbolKind.Function;
MINPRICE.marketType = MyMarketType.BasicFunction;
MINPRICE.functionType = MyFunctionType.CandlestickDataReference;
MINPRICE.returnType = MyFunctionReturnType.None;
MINPRICE.parameters = MySymbol.createParametersFromStrings([]);
MINPRICE.detail = "数据合约的最小变动价位";
MINPRICE.documentation = `
MINPRICE,取数据合约的最小变动价位
取数据合约的最小变动价位。
用法：
MINPRICE; 取加载数据合约的最小变动价位。
`;

const MINPRICE1 = new MySymbol();
MINPRICE1.label = "MINPRICE1";
MINPRICE1.description = "交易合约的最小变动价位";
MINPRICE1.insertText = "";
MINPRICE1.body = "MINPRICE1";
MINPRICE1.kind = MySymbolKind.Function;
MINPRICE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
MINPRICE1.functionType = MyFunctionType.CandlestickDataReference;
MINPRICE1.returnType = MyFunctionReturnType.None;
MINPRICE1.parameters = MySymbol.createParametersFromStrings([]);
MINPRICE1.detail = "交易合约的最小变动价位";
MINPRICE1.documentation = `
MINPRICE1,取交易合约的最小变动价位
MINPRICE1  取交易合约的最小变动价位。
用法：
MINPRICE1; 取交易合约的最小变动价位。
`;

const MINPRICED = new MySymbol();
MINPRICED.label = "MINPRICED";
MINPRICED.description = "最小变动价位";
MINPRICED.insertText = "";
MINPRICED.body = "MINPRICED";
MINPRICED.kind = MySymbolKind.Function;
MINPRICED.marketType = MyMarketType.TPlusZeroStrategyFunction;
MINPRICED.functionType = MyFunctionType.CandlestickDataReference;
MINPRICED.returnType = MyFunctionReturnType.None;
MINPRICED.parameters = MySymbol.createParametersFromStrings([]);
MINPRICED.detail = "最小变动价位";
MINPRICED.documentation = `
MINPRICED(N),返回N所对应合约的最小变动价位N只能为文华码
返回某品种的最小变动价位。
用法：
MINPRICED(N); 返回N所对应合约的最小变动价位。
N可以为参数，但不可以为变量。
例1：
MINPRICED(8603); 返回参数是文华码8603所对应IF1203合约的最小变动价位。
例2：
N:=8603;
MINPRICED(N);返回8603所对应IF1203合约的最小变动价位。
`;

const MINUTE = new MySymbol();
MINUTE.label = "MINUTE";
MINUTE.description = "分钟";
MINUTE.insertText = "";
MINUTE.body = "MINUTE";
MINUTE.kind = MySymbolKind.Function;
MINUTE.marketType = MyMarketType.BasicFunction;
MINUTE.functionType = MyFunctionType.TimeFunction;
MINUTE.returnType = MyFunctionReturnType.None;
MINUTE.parameters = MySymbol.createParametersFromStrings([]);
MINUTE.detail = "分钟";
MINUTE.documentation = `
MINUTE,取某个周期的分钟数（0-59）
MINUTE,返回某个周期的分钟数。

注：
1：MINUTE的取值范围为0—59
2：该函数返回当根K线开始的分钟数,日及日以上周期返回0。
例1：
MINUTE=0；//在分钟数为0的K线上返回值为1，其余K线返回值为0。
例2：
TIME>1400&&MINUTE=50,SP;//在14:50的时候卖平仓。
`;

const MOD = new MySymbol();
MOD.label = "MOD";
MOD.description = "取模";
MOD.insertText = "";
MOD.body = "MOD( , )";
MOD.kind = MySymbolKind.Function;
MOD.marketType = MyMarketType.BasicFunction;
MOD.functionType = MyFunctionType.MathFunction;
MOD.returnType = MyFunctionReturnType.None;
MOD.parameters = MySymbol.createParametersFromStrings([]);
MOD.detail = "取模";
MOD.documentation = `
MOD(A,B),A对B求模
MOD(A,B)：取模。返回A对B求模。

注：
第二个参数最多支持四位小数。

例1：
MOD(26,10);//返回6，26除以10所得余数为6，即26对10 的模为6。
例2：
DRAWICON(MOD(BARPOS,3)=0,H,'ICO1');//从数据开始第一根k线开始 分别在第3、6、9、
12等k线依次往后每隔3根k线标注一个笑脸图案
例3：
MOD(A,2)=0;//判断A为偶数。
`;

const MODE = new MySymbol();
MODE.label = "MODE";
MODE.description = "求众数";
MODE.insertText = "";
MODE.body = "MODE( , )";
MODE.kind = MySymbolKind.Function;
MODE.marketType = MyMarketType.BasicFunction;
MODE.functionType = MyFunctionType.MathFunction;
MODE.returnType = MyFunctionReturnType.None;
MODE.parameters = MySymbol.createParametersFromStrings([]);
MODE.detail = "求众数";
MODE.documentation = `
MODE(X,N)求X在N个周期内最常出现的值
MODE(X,N) 求X在N个周期内最常出现的值。

注：
1、如果N个周期内不含有重复的数值，则函数返回空值。
2、N可以为变量。
`;

const MONEY = new MySymbol();
MONEY.label = "MONEY";
MONEY.description = "理论可用资金";
MONEY.insertText = "";
MONEY.body = "MONEY";
MONEY.kind = MySymbolKind.Function;
MONEY.marketType = MyMarketType.TPlusZeroStrategyFunction;
MONEY.functionType = MyFunctionType.PositionManagementFunction;
MONEY.returnType = MyFunctionReturnType.None;
MONEY.parameters = MySymbol.createParametersFromStrings([]);
MONEY.detail = "理论可用资金";
MONEY.documentation = `
MONEY，理论可用资金
MONEY 理论可用资金

用法：MONEY返回当前理论可用资金，用于仓位、手数等计算。

计算方法：
1、模组中MONEY的初始值为单元参数中设置的起始资金。
2、历史回测中MONEY的初始值为回测参数中设置的初始资金。
3、开仓信号当根k线的MONEY值：开仓前可用资金-持仓保证金-手续费，其中持仓保证金=开仓价格*保证金比例*交易单位*手数
4、开仓后未平仓的k线的MONEY值=开仓信号前k线的MONEY值+浮动盈亏PROFIT
5、平仓信号当根k线的MONEY值：平仓前可用资金+平仓盈亏+平仓释放的保证金-手续费，其中平仓释放的保证金=开仓价格*保证金比例*交易单位*手数

注：
1、信号执行方式为，‘K线走完确认下单’或‘XX下单，K线走完复核’：
 a.开仓信号当根K线，MONEY返回值为上根K线的可用资金-开仓保证金-手续费。
 b.平仓信号当根K线，MONEY返回值为上根K线的可用资金+平仓盈亏+持仓释放的保证金-手续费。
2、信号执行方式选择，‘出信号下单，不进行复核’：
 a.开仓信号当根K线，MONEY返回值为当根k线开仓之前的可用资金-开仓保证金-手续费。
 b.平仓信号当根K线，MONEY返回值为当根K线平仓之前的可用资金+平仓盈亏+平仓释放的保证金-手续费。
3、信号执行方式为‘K线走完确认信号下单’时，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位-手续费。
4、信号执行方式为‘出信号立即下单，不复核’时，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位-手续费。
5、模组初始化后，MONEY返回值为初始化框中可用资金
6、模组监控K线图，十字光标所在K线左侧查价框中显示的资金数值等于MONEY函数返回值

例：
K:=MONEY*0.2/(C*MARGIN*UNIT+FEE); //理论可用资金的20%可以开仓的手数（此写法适用于按固定手数收取手续费的合约）
`;

const MONEYRATIO = new MySymbol();
MONEYRATIO.label = "MONEYRATIO";
MONEYRATIO.description = "理论资金使用率";
MONEYRATIO.insertText = "";
MONEYRATIO.body = "MONEYRATIO";
MONEYRATIO.kind = MySymbolKind.Function;
MONEYRATIO.marketType = MyMarketType.TPlusZeroStrategyFunction;
MONEYRATIO.functionType = MyFunctionType.PositionManagementFunction;
MONEYRATIO.returnType = MyFunctionReturnType.None;
MONEYRATIO.parameters = MySymbol.createParametersFromStrings([]);
MONEYRATIO.detail = "理论资金使用率";
MONEYRATIO.documentation = `
MONEYRATIO返回理论资金使用率
MONEYRATIO 理论资金使用率

用法：MONEYRATIO返回当前理论资金使用率，进行资金管理控制仓位时使用。

计算方法：资金使用率=动态的持仓保证金/权益。

注：
1、该函数返回值为小数。
2、开仓信号当根k线持仓保证金：
 a.信号执行方式为‘XX下单，K线走完复核’：持仓保证金=当根K线的收盘价*交易单位*持仓手数*保证金比例。
 b.信号执行方式为‘出信号立即下单，不复核’：持仓保证金=最新价*交易单位*持仓手数*保证金比例。
 c.信号执行方式为‘K线走完确认信号下单’：持仓保证金=当根K线的收盘价*交易单位*持仓手数*保证金比例。在出开仓信号之后的K线返回相应的值
3、开仓后平仓前K线持仓保证金=当根K线的收盘价*交易单位*持仓手数*保证金比例。开仓后未平仓的k线的保证金和开仓信号当根k线的保证金一样，保持不变，当日如果存在未被平掉的持仓并持仓过夜，第二日未平仓k线的保证金不会按照前一日结算价计算。
4、平仓信号，当平仓后无持仓时，MONEYRATIO在出平仓信号之后的k线上返回0

例：
A&&MONEYRATIO<0.3,BK;//A条件满足并资金使用率不超过30%时，买开仓
`;

const MONEYTOT = new MySymbol();
MONEYTOT.label = "MONEYTOT";
MONEYTOT.description = "理论权益";
MONEYTOT.insertText = "";
MONEYTOT.body = "MONEYTOT";
MONEYTOT.kind = MySymbolKind.Function;
MONEYTOT.marketType = MyMarketType.TPlusZeroStrategyFunction;
MONEYTOT.functionType = MyFunctionType.PositionManagementFunction;
MONEYTOT.returnType = MyFunctionReturnType.None;
MONEYTOT.parameters = MySymbol.createParametersFromStrings([]);
MONEYTOT.detail = "理论权益";
MONEYTOT.documentation = `
MONEYTOT理论权益
MONEYTOT 理论权益

用法：MONEYTOT返回当前理论权益，模型进行仓位控制、下单手数等资金管理时使用

计算方法：MONEYTOT=理论可用资金+持仓保证金

注：
1、模组中MONEYTOT的初始值为单元参数中设置的起始资金。
2、历史回测中MONEYTOT的初始值为回测参数中设置的初始资金。
3、模组初始化时：
 a.当前信号为开仓信号，MONEYTOT返回值为初始化框中模组理论可用资金；
 b.当前信号为平仓信号，则MONEYTOT返回初始化框中模组理论可用资金+持仓保证金。
4、开仓信号当根k线：MONEYTOT=模组理论可用资金+持仓保证金
5、开仓后平仓前：MONEYTOT返回模组理论可用资金+持仓保证金
6、平仓信号当根k线：持仓为0时，MONEYTOT=模组理论可用资金；持仓不为0时，MONEYTOT=模组理论可用资金+持仓占用的保证金。
注：
模组持仓列表可用资金为包含了浮动盈亏的可用资金（= 当前权益 - 持仓占用的保证金）。

例：
K:=MONEYTOT*0.2/(C*MARGIN*UNIT+FEE); //理论权益的20%可以开仓的手数（此写法适用于按固定手数收取手续费的合约）
`;

const MONTH = new MySymbol();
MONTH.label = "MONTH";
MONTH.description = "取月份";
MONTH.insertText = "";
MONTH.body = "MONTH";
MONTH.kind = MySymbolKind.Function;
MONTH.marketType = MyMarketType.BasicFunction;
MONTH.functionType = MyFunctionType.TimeFunction;
MONTH.returnType = MyFunctionReturnType.None;
MONTH.parameters = MySymbol.createParametersFromStrings([]);
MONTH.detail = "取月份";
MONTH.documentation = `
MONTH,取得某周期的月份（1-12）
MONTH，返回某个周期的月份。

注：
MONTH的取值范围为1—12.

例1：
VALUEWHEN(MONTH=3&&DAY=1,C);//在K线日期为三月一日时取其收盘价。
例2：
C>=VALUEWHEN(MONTH<REF(MONTH,1),O),SP;
`;

const MONTHTRADE = new MySymbol();
MONTHTRADE.label = "MONTHTRADE";
MONTHTRADE.description = "月内交易函数";
MONTHTRADE.insertText = "";
MONTHTRADE.body = "MONTHTRADE";
MONTHTRADE.kind = MySymbolKind.Function;
MONTHTRADE.marketType = MyMarketType.TPlusZeroStrategyFunction;
MONTHTRADE.functionType = MyFunctionType.CalculationControlFunction;
MONTHTRADE.returnType = MyFunctionReturnType.None;
MONTHTRADE.parameters = MySymbol.createParametersFromStrings([]);
MONTHTRADE.detail = "月内交易函数";
MONTHTRADE.documentation = `
MONTHTRADE,月内交易函数
MONTHTRADE 月内交易函数。

用法：
MONTHTRADE 模型中写入该函数，信号和资金每月重新初始化进行计算，与历史割裂。

注：
1、该函数不支持自定义N日、月、季、年周期，其他周期均支持。
2、回测报告中的出金/入金，为每月出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
4、（1）历史回测中，当月K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当月K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
MONTHTRADE;//使用每月数据计算
`;

const MONTHTRADE1 = new MySymbol();
MONTHTRADE1.label = "MONTHTRADE1";
MONTHTRADE1.description = "月内交易函数";
MONTHTRADE1.insertText = "";
MONTHTRADE1.body = "MONTHTRADE1";
MONTHTRADE1.kind = MySymbolKind.Function;
MONTHTRADE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
MONTHTRADE1.functionType = MyFunctionType.CalculationControlFunction;
MONTHTRADE1.returnType = MyFunctionReturnType.None;
MONTHTRADE1.parameters = MySymbol.createParametersFromStrings([]);
MONTHTRADE1.detail = "月内交易函数";
MONTHTRADE1.documentation = `
MONTHTRADE1月内交易函数，且历史数据不参与计算。
MONTHTRADE1 月内交易函数。

用法：
MONTHTRADE1 模型中写入该函数，信号和资金每月重新初始化进行计算，与历史割裂，并且每一个函数只使用当月K线数据进行计算，历史数据不参与计算。

注：
1、该函数不支持自定义N日、月、季、年周期，其他周期均支持。
2、回测报告中的出金/入金，为每月出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\MONTHTRADE1\\QUARTERTRADE\\QUARTERTRADE1\\YEARTRADE\\YEARTRADE1函数。
4、（1）历史回测中，当月K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当月K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
MONTHTRADE1;//使用每月数据计算
`;

const MULTSIG = new MySymbol();
MULTSIG.label = "MULTSIG";
MULTSIG.description =
    "设置一根k线多信号的指令价方式（TICK逐笔回测，可设置回测精度）";
MULTSIG.insertText = "";
MULTSIG.body = "MULTSIG( , , , )";
MULTSIG.kind = MySymbolKind.Function;
MULTSIG.marketType = MyMarketType.TPlusZeroStrategyFunction;
MULTSIG.functionType = MyFunctionType.PerformanceOptimizationFunction;
MULTSIG.returnType = MyFunctionReturnType.None;
MULTSIG.parameters = MySymbol.createParametersFromStrings([]);
MULTSIG.detail =
    "设置一根k线多信号的指令价方式（TICK逐笔回测，可设置回测精度）";
MULTSIG.documentation = `
MULTSIG(Sec1,Sec2,N,INTERVAL),设置一根k线多信号的指令价方式（TICK逐笔回测，可设置回测精度），开仓信号出信号Sec1秒下单，不复核；平仓信号出信号Sec2秒下单，不复核，一根K线最大的信号个数为N,INTERVAL代表数据时间间隔
MULTSIG(Sec1,Sec2,N,INTERVAL) 设置一根k线多信号的指令价方式（TICK逐笔回测，可设置回测精度）

用法：
MULTSIG(Sec1,Sec2,N,INTERVAL) 
1、当INTERVAL不为0时，INTERVAL为数据时间间隔,每隔INTERVAL秒计算一次信号，开仓信号在出信号后的第Sec1个数据时间间隔时下单不复核,平仓信号在出信号后的第Sec2个数据时间间隔下单不复核，一根K线上最大的信号个数为N。
（例：INTERVAL为10，豆粕合约开盘第一根K线21：00：09为第一次计算模型，21：00：19为第二次计算模型...）
2、当INTERVAL为0时，每笔TICK计算一次信号，开仓信号Sec1秒后下单不复核,平仓信号Sec2秒后下单不复核，一根K线上最大的信号个数为N。
（例：Sec1为0，则为开仓信号出信号立即下单，不复核；如果Sec1为1，则为开仓信号出信号1秒后下单，不复核）
3、通过调整INTERVAL参数，模型可设置不同数据快照频率进行回测。

注：
1、该函数支持在期货月份合约和股票上运行。
2、写了这个函数以后，模型会按照指令价方式运行。
3、Sec1设置的信号为：BK/SK；Sec2设置的信号为：BP/SP/BPK/SPK
4、含有该函数的模型，满足条件出信号下单后此信号固定，不随之后行情是否满足条件而变化
5、INTERVAL代表数据时间间隔
 1）支持0、3、5、10四个值，不支持变量。
 2）参数为3、5、10分别代表用每隔3秒、5秒、10秒，计算一次模型
 3）参数为3、5、10 ，回测速度可提升3-10倍，回测精度稍差
 4）参数为0的时候 为每笔TICK计算一次模型
 5）一个模型中只能写入一个INTERVAL值
6、出信号后如果未到Sec个数据时间间隔K线已经走完，则提前确认信号下单。
7、该函数不支持加载到页面盒子中使用。
8、该函数支持一根K线上多个信号，最大的信号个数为N。N取值范围为1-60，超过这个范围，N值按照60计算
9、CHECKSIG、MULTSIG、MULTSIG_MIN和CHECKSIG_MIN函数不能同时出现在一个模型中。
10、模型中不含有该函数，信号执行方式默认为K线走完确认信号下单
11、N支持写为变量。
12、该函数不支持量能周期
13、不支持与TRADE_OTHER、#CALL、#CALL_OTHER、#CALL_PLUS函数同时使用。

例：
C>REF(H,1),BK;//价格大于上一根k线最高价，开多仓
C<BKPRICE-3*MINPRICE,SP;//亏损3点止损
MULTSIG(2,0,4,10);//设置信号复核确认方式为开仓信号，出信号后第2个时间间隔下单不复核（例如09:00:09出现信号，09:00:29仍旧满足条件则确认信号并下单）。根据时间间隔计算出现平仓信号立即下单不复核（例如09:00:39出现平仓信号，则立即下单不复核）。一根K线上最大信号个数为4。每隔10秒计算一次信号。
AUTOFILTER;
`;

const MULTSIG_MIN = new MySymbol();
MULTSIG_MIN.label = "MULTSIG_MIN";
MULTSIG_MIN.description = "设置一根k线多信号的指令价方式（逐分钟回测）";
MULTSIG_MIN.insertText = "";
MULTSIG_MIN.body = "MULTSIG_MIN( , , )";
MULTSIG_MIN.kind = MySymbolKind.Function;
MULTSIG_MIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
MULTSIG_MIN.functionType =
    MyFunctionType.PerformanceOptimizationFunction;
MULTSIG_MIN.returnType = MyFunctionReturnType.None;
MULTSIG_MIN.parameters = MySymbol.createParametersFromStrings([]);
MULTSIG_MIN.detail = "设置一根k线多信号的指令价方式（逐分钟回测）";
MULTSIG_MIN.documentation = `
MULTSIG_MIN(min1,min2,N),设置一根k线多信号的指令价方式（逐分钟回测）开仓信号出信号min1分钟下单，不复核；平仓信号出信号min2分钟下单，不复核，一根K线最大的信号个数为N
设置一根k线多信号的指令价方式（逐分钟回测）

用法：
MULTSIG_MIN(min1,min2,N) 设置一根k线多信号的指令价方式（逐分钟回测），开仓信号出信号min1分钟下单不复核,平仓信号出信号min2分钟下单不复核，一根K线上最大的信号个数为N。

注：
1、写了这个函数以后，模型会按照指令价方式运行。
2、使用该函数时，基础数据为1分钟数据。
3、该函数不支持加载在15分钟以下周期使用
4、min1设置的信号为：BK/SK；min2设置的信号为：BP/SP/BPK/SPK
5、含有该函数的模型，满足条件后min分钟出信号立即下单，并且此信号固定，不随之后行情是否满足条件而变化。其中，min=0，出信号立即下单不复核；min>0 出信号min分钟下单不复核。
6、出信号后如果未到min分钟K线已经走完，则提前确认信号下单。
7、该函数不支持加载到页面盒子中使用。
8、该函数支持一根K线上多个信号，最大的信号个数为N。N取值范围为1-60，超过这个范围，N值按照60计算
9、CHECKSIG、MULTSIG、MULTSIG_MIN和CHECKSIG_MIN函数不能同时出现在一个模型中。
10、模型中含有该函数，效果测试中模型信号价位为模型满足条件时候行情的最新价。
11、模型中不含有该函数，信号执行方式默认为K线走完确认信号下单。
12、N支持写为变量。

例：
C>REF(H,1),BK;//价格大于上一根k线最高价，开多仓
C<BKPRICE-3*MINPRICE,SP;//亏损3点止损
MULTSIG_MIN(3,0,3);//设置信号复核确认方式为开仓信号，出信号后3分钟下单，不复核；平仓信号出信号立即下单，不复核。一根K线上最大信号个数为3。
AUTOFILTER;
`;

const MV = new MySymbol();
MV.label = "MV";
MV.description = "取均值";
MV.insertText = "";
MV.body = "MV(,)";
MV.kind = MySymbolKind.Function;
MV.marketType = MyMarketType.BasicFunction;
MV.functionType = MyFunctionType.FinancialStatisticsFunction;
MV.returnType = MyFunctionReturnType.None;
MV.parameters = MySymbol.createParametersFromStrings([]);
MV.detail = "取均值";
MV.documentation = `
MV(A,...P),取A到P的均值
MV(A,...P) 取A到P的均值。

注：
1、支持取2-16个数值的均值
2、A...P可以为数字也可以为变量

例1：
MV(CLOSE,OPEN);
//取收盘价和开盘价的平均值
`;

const MYVOL = new MySymbol();
MYVOL.label = "MYVOL";
MYVOL.description = "取下单手数";
MYVOL.insertText = "";
MYVOL.body = "MYVOL";
MYVOL.kind = MySymbolKind.Function;
MYVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
MYVOL.functionType = MyFunctionType.SignalLoggingFunction;
MYVOL.returnType = MyFunctionReturnType.None;
MYVOL.parameters = MySymbol.createParametersFromStrings([]);
MYVOL.detail = "取下单手数";
MYVOL.documentation = `
MYVOL,取下单手数
MYVOL 取下单手数

用法：取下单手数，多用于在加减仓模型加载多个合约的时候的手数计算。

注：
1、模组加载：
主图右键加载到模组：返回主图回测参数设置中设置的手数
新建模组：返回交易参数中设置的手数
2、主图回测：返回回测参数中设置的手数，回测时，如果加载的模型不含交易指令，该函数返回值为1。

例：
//加载参数中下单手数设置为3时，下面编写BK的下单手数为6；
C>O,BK(2*MYVOL);
C<O,SP(BKVOL);
`;

const NAMELIKE = new MySymbol();
NAMELIKE.label = "NAMELIKE";
NAMELIKE.description = "模糊合约名称函数";
NAMELIKE.insertText = "";
NAMELIKE.body = "NAMELIKE('')";
NAMELIKE.kind = MySymbolKind.Function;
NAMELIKE.marketType = MyMarketType.BasicFunction;
NAMELIKE.functionType = MyFunctionType.LogicalJudgmentFunction;
NAMELIKE.returnType = MyFunctionReturnType.None;
NAMELIKE.parameters = MySymbol.createParametersFromStrings([]);
NAMELIKE.detail = "模糊合约名称函数";
NAMELIKE.documentation = `
NAMELIKE('')模糊股票名称函数。NAMELIKE('ST')判断股票名称是否含有ST。是返回1（YES）,不是返回0（NO）。
NAMELIKE('') 模糊合约名称函数。

用法：
NAMELIKE('ST') 判断合约名称是否含有ST。是返回1（YES）,不是返回0（NO）。

注：
1、判断的内容用单引号标注。

例1：
NAMELIKE('沪铜');//判断期货名称是否含有沪铜。
NAMELIKE('浦发');//判断股票名称是否含有浦发。
NAMELIKE('cu');//判断期权名称是否含有cu。
例2：
C>O&&NAMELIKE('ST')=0;//最后一根K线为阳线并且名称不含有ST。
`;

const NEWHBARS = new MySymbol();
NEWHBARS.label = "NEWHBARS";
NEWHBARS.description = "创新高跨度";
NEWHBARS.insertText = "";
NEWHBARS.body = "NEWHBARS( , )";
NEWHBARS.kind = MySymbolKind.Function;
NEWHBARS.marketType = MyMarketType.BasicFunction;
NEWHBARS.functionType = MyFunctionType.FinancialStatisticsFunction;
NEWHBARS.returnType = MyFunctionReturnType.None;
NEWHBARS.parameters = MySymbol.createParametersFromStrings([]);
NEWHBARS.detail = "创新高跨度";
NEWHBARS.documentation = `
NEWHBARS(X,N)求高于当前X的第N个X的距离
NEWHBARS(X,N) 计算高于当前X的第N个X到现在K线的距离。

注：
1、计算距离时不包括当根K线。
2、参数N不支持写为变量。
例：
DISTH:=NEWHBARS(H,1);//上一次创新高距离当前的K线根数
HI20:=REF(H,DISTH);//上一次创新高的高点
CROSS(C,REF(HI20,1)),BK;//最新价突破上一次创新高的高点，多头开仓
C<=BKPRICE-5,SP;
AUTOFILTER;
`;

const NEWHBARS1 = new MySymbol();
NEWHBARS1.label = "NEWHBARS1";
NEWHBARS1.description = "创新高跨度";
NEWHBARS1.insertText = "";
NEWHBARS1.body = "NEWHBARS1( , , )";
NEWHBARS1.kind = MySymbolKind.Function;
NEWHBARS1.marketType = MyMarketType.BasicFunction;
NEWHBARS1.functionType = MyFunctionType.FinancialStatisticsFunction;
NEWHBARS1.returnType = MyFunctionReturnType.None;
NEWHBARS1.parameters = MySymbol.createParametersFromStrings([]);
NEWHBARS1.detail = "创新高跨度";
NEWHBARS1.documentation = `
NEWHBARS1(X,Y,N)，计算高于当前X的第N个Y到现在K线的距离
NEWHBARS1(X,Y,N) 计算高于当前X的第N个Y到现在K线的距离。

注：
1、计算距离时不包括当根K线。
2、参数N不支持写为变量。
例：
MA5:MA(CLOSE,5);
DISTH:=NEWHBARS1(MA5,C,1);//上一次高于当前MA5均线收盘价距离当前的K线根数
HI20:=REF(H,DISTH);//上一次创新高的高点
CROSS(C,HI20),BK;//最新价突破高点，多头开仓
C<=BKPRICE-5,SP;
AUTOFILTER;
`;

const NEWLBARS = new MySymbol();
NEWLBARS.label = "NEWLBARS";
NEWLBARS.description = "创新低跨度";
NEWLBARS.insertText = "";
NEWLBARS.body = "NEWLBARS( , )";
NEWLBARS.kind = MySymbolKind.Function;
NEWLBARS.marketType = MyMarketType.BasicFunction;
NEWLBARS.functionType = MyFunctionType.FinancialStatisticsFunction;
NEWLBARS.returnType = MyFunctionReturnType.None;
NEWLBARS.parameters = MySymbol.createParametersFromStrings([]);
NEWLBARS.detail = "创新低跨度";
NEWLBARS.documentation = `
NEWLBARS(X,N)求低于当前X的第N个X的距离
NEWLBARS(X,N) 计算低于当前X的第N个X到现在K线的距离。

注：
1、计算距离时不包括当根K线。
2、参数N不支持写为变量。
例：
DISTL:=NEWLBARS(L,1);//上一次创新低距离当前的K线根数
LI20:=REF(L,DISTL);//上一次创新低的低点
CROSS(REF(LI20,1),C),SK;//最新价跌破上一次创新低的低点，空头开仓
C>=SKPRICE+5,BP;
AUTOFILTER;
`;

const NEWLBARS1 = new MySymbol();
NEWLBARS1.label = "NEWLBARS1";
NEWLBARS1.description = "创新低跨度";
NEWLBARS1.insertText = "";
NEWLBARS1.body = "NEWLBARS1( , , )";
NEWLBARS1.kind = MySymbolKind.Function;
NEWLBARS1.marketType = MyMarketType.BasicFunction;
NEWLBARS1.functionType = MyFunctionType.FinancialStatisticsFunction;
NEWLBARS1.returnType = MyFunctionReturnType.None;
NEWLBARS1.parameters = MySymbol.createParametersFromStrings([]);
NEWLBARS1.detail = "创新低跨度";
NEWLBARS1.documentation = `
NEWLBARS1(X,Y,N)，计算低于当前X的第N个Y到现在K线的距离
NEWLBARS1(X,Y,N) 计算低于当前X的第N个Y到现在K线的距离。

注：
1、计算距离时不包括当根K线。
2、参数N不支持写为变量。
例：
MA5:MA(CLOSE,5);
DISTL:=NEWLBARS1(MA5,C,1);//上一次低于当前MA5均线收盘价距离当前的K线根数
LI20:=REF(L,DISTL);//上一次创新低的低点
CROSS(LI20,C),SK;//最新价跌破低点，空头开仓
C>=SKPRICE+5,BP;
AUTOFILTER;
`;

const NODRAW = new MySymbol();
NODRAW.label = "NODRAW";
NODRAW.description = "不画线";
NODRAW.insertText = "";
NODRAW.body = "NODRAW";
NODRAW.kind = MySymbolKind.Function;
NODRAW.marketType = MyMarketType.BasicFunction;
NODRAW.functionType = MyFunctionType.DrawingFunction;
NODRAW.returnType = MyFunctionReturnType.None;
NODRAW.parameters = MySymbol.createParametersFromStrings([]);
NODRAW.detail = "不画线";
NODRAW.documentation = `
NODRAW,不画线
NODRAW 只显示返回数值，不画线。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:NODRAW;

例：
MA5:MA(C,5), NODRAW;显示5周期均线的返回值，K线图上不显示均线。
`;

const NORMPDF = new MySymbol();
NORMPDF.label = "NORMPDF";
NORMPDF.description = "正态分布概率密度";
NORMPDF.insertText = "";
NORMPDF.body = "NORMPDF( , , )";
NORMPDF.kind = MySymbolKind.Function;
NORMPDF.marketType = MyMarketType.BasicFunction;
NORMPDF.functionType = MyFunctionType.MathematicalStatisticsFunction;
NORMPDF.returnType = MyFunctionReturnType.None;
NORMPDF.parameters = MySymbol.createParametersFromStrings([]);
NORMPDF.detail = "正态分布概率密度";
NORMPDF.documentation = `
NORMPDF(X,MU,SIGMA),返回参数为MU和SIGMA的正态分布密度函数在X处的值
NORMPDF(X,MU,SIGMA)：返回参数为MU和SIGMA的正态分布密度函数在X处的值

注：
1、MU或SIGMA为空值，该函数返回空值。
2、MU和SIGMA支持变量。

算法举例：随机变量X服从分布的算数平均值MU、分布的标准偏差SIGMA的概率分布，其概率密度为NORMPDF。

用麦语言函数可以近似的表示如下：
(1/(SQRT(2*3.14)*SIGMA))*EXP((-SQUARE(X-MU))/(2*SQUARE(SIGMA)));

例：
TR:=MAX(MAX((HIGH-LOW),ABS(REF(CLOSE,1)-HIGH)),ABS(REF(CLOSE,1)-LOW));

ATR:=MA(TR,26);//求26个周期内的TR的简单移动平均

Mu:=MA(ATR,10);//求10个周期内的ATR的简单移动平均

SIGMA:=STD(ATR,10);//求10个周期内的ATR的标准差

ZZ..NORMPDF(ATR,MU,SIGMA);//定义变量ZZ，返回ATR服从正态分布的概率密度。
`;

const NOT = new MySymbol();
NOT.label = "NOT";
NOT.description = "非";
NOT.insertText = "";
NOT.body = "NOT( )";
NOT.kind = MySymbolKind.Function;
NOT.marketType = MyMarketType.BasicFunction;
NOT.functionType = MyFunctionType.LogicalJudgmentFunction;
NOT.returnType = MyFunctionReturnType.None;
NOT.parameters = MySymbol.createParametersFromStrings([]);
NOT.detail = "非";
NOT.documentation = `
NOT(X),不满足条件X，不满足条件X返回1，否则返回0
NOT(X)：取非。当X＝0时返回1，否则返回0。
例1：
NOT(ISLASTBK);如果上一个信号不是BK信号，则NOT(ISLASTBK)返回值为1；上一个信号是BK信号，则NOT(ISLASTBK)返回值为0。
例2：
NOT(BARSBK>=1)=1;//BK信号发出的当根K线上满足条件。
//NOT(BARSBK>=1)=1 与 NOT(BARSBK>=1) 表达同等意义。
`;

const NOTEXT = new MySymbol();
NOTEXT.label = "NOTEXT";
NOTEXT.description = "不显示数值";
NOTEXT.insertText = "";
NOTEXT.body = "NOTEXT";
NOTEXT.kind = MySymbolKind.Function;
NOTEXT.marketType = MyMarketType.BasicFunction;
NOTEXT.functionType = MyFunctionType.DrawingFunction;
NOTEXT.returnType = MyFunctionReturnType.None;
NOTEXT.parameters = MySymbol.createParametersFromStrings([]);
NOTEXT.detail = "不显示数值";
NOTEXT.documentation = `
NOTEXT不显示数值
NOTEXT 只显示画线，不显示数值。

注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:NOTEXT;

例：
MA5:MA(C,5), NOTEXT;K线图上显示5周期均线，不显示均线的数值。
`;

const NULL = new MySymbol();
NULL.label = "NULL";
NULL.description = "返回空值";
NULL.insertText = "";
NULL.body = "NULL";
NULL.kind = MySymbolKind.Function;
NULL.marketType = MyMarketType.BasicFunction;
NULL.functionType = MyFunctionType.LogicalJudgmentFunction;
NULL.returnType = MyFunctionReturnType.None;
NULL.parameters = MySymbol.createParametersFromStrings([]);
NULL.detail = "返回空值";
NULL.documentation = `
NULL,返回空值
返回空值
用法：
MA5:=MA(C,5);
MA10:=MA(C,10);
A:IFELSE(MA5>MA10,MA5,NULL),COLORRED;//当MA5>MA10时，画五日均线MA5，不满足MA5>MA10时，返回空值，不画线。
`;

const NUMPOW = new MySymbol();
NUMPOW.label = "NUMPOW";
NUMPOW.description = "自然数幂方和";
NUMPOW.insertText = "";
NUMPOW.body = "NUMPOW(,,)";
NUMPOW.kind = MySymbolKind.Function;
NUMPOW.marketType = MyMarketType.BasicFunction;
NUMPOW.functionType = MyFunctionType.FinancialStatisticsFunction;
NUMPOW.returnType = MyFunctionReturnType.None;
NUMPOW.parameters = MySymbol.createParametersFromStrings([]);
NUMPOW.detail = "自然数幂方和";
NUMPOW.documentation = `
NUMPOW(X,N,M),自然数幂方和X为基础变量，N为自然数，M为实数
NUMPOW(X,N,M);自然数幂方和
算法：
NUMPOW(x,n,m)=n^m*x+(n-1)^m*ref(x,1)+(n-2)^m*ref(x,2)+...+2^m*ref(x,n-2)+1^m*ref(x,n-1)
注意:
1、N为自然数，M为实数；且N与M不能为变量
2、X为基础变量

例：
JZ:=NUMPOW(C,5,2);
`;

const OFFSETPROFIT = new MySymbol();
OFFSETPROFIT.label = "OFFSETPROFIT";
OFFSETPROFIT.description = "理论平仓盈亏";
OFFSETPROFIT.insertText = "";
OFFSETPROFIT.body = "OFFSETPROFIT";
OFFSETPROFIT.kind = MySymbolKind.Function;
OFFSETPROFIT.marketType = MyMarketType.TPlusZeroStrategyFunction;
OFFSETPROFIT.functionType = MyFunctionType.PositionManagementFunction;
OFFSETPROFIT.returnType = MyFunctionReturnType.None;
OFFSETPROFIT.parameters = MySymbol.createParametersFromStrings([]);
OFFSETPROFIT.detail = "理论平仓盈亏";
OFFSETPROFIT.documentation = `
OFFSETPROFIT,返回理论平仓盈亏
OFFSETPROFIT 理论平仓盈亏

用法：OFFSETPROFIT返回当前理论平仓盈亏，用于风险控制。

注：
1、模组初始化后，OFFSETPROFIT清零重新计算，从模组加载时刻开始计算平仓盈亏。
2、信号执行方式为‘K线走完确认信号下单’：OFFSETPROFIT根据信号当根K线的收盘价计算平仓盈亏，待下根K线时取值相应变化。
3、信号执行方式为‘XX下单，K线走完复核’：OFFSETPROFIT根据下单时行情的最新价计算平仓盈亏，复核后待下根K线时取值相应变化。
4、信号执行方式为‘出信号立即下单不复核’：OFFSETPROFIT根据信号确认时的行情最新价计算平仓盈亏。
5、OFFSETPROFIT与日志中记录的平仓盈亏不同，后者根据成交价计算。
6、OFFSETPROFIT的计算不包含手续费。
7、因信号消失产生的盈亏未纳入OFFSETPROFIT的计算
8、股票T+1交易不支持统计平仓盈亏，该函数返回空值。

例：
OFFSETPROFIT<-5000&&C>O,BK;//亏损大于5000，并且当前K线为阳线时，买开
`;

const OFFSETPROFIT1 = new MySymbol();
OFFSETPROFIT1.label = "OFFSETPROFIT1";
OFFSETPROFIT1.description = "累计平仓盈亏";
OFFSETPROFIT1.insertText = "";
OFFSETPROFIT1.body = "OFFSETPROFIT1";
OFFSETPROFIT1.kind = MySymbolKind.Function;
OFFSETPROFIT1.marketType = MyMarketType.TPlusZeroStrategyFunction;
OFFSETPROFIT1.functionType =
    MyFunctionType.PositionManagementFunction;
OFFSETPROFIT1.returnType = MyFunctionReturnType.None;
OFFSETPROFIT1.parameters = MySymbol.createParametersFromStrings([]);
OFFSETPROFIT1.detail = "累计平仓盈亏";
OFFSETPROFIT1.documentation = `
OFFSETPROFIT1累计平仓盈亏
OFFSETPROFIT1 累计平仓盈亏

用法：OFFSETPROFIT1返回加载的全部K线的累计平仓盈亏。

注：
1、模组初始化后，OFFSETPROFIT1不会清零，延续之前的信号计算累计平仓盈亏。
2、信号执行方式为‘K线走完确认信号下单’：OFFSETPROFIT1根据信号当根K线的收盘价计算平仓盈亏，待下根K线时取值相应变化。
3、信号执行方式为‘XX下单，K线走完复核’：OFFSETPROFIT1根据下单时行情最新价计算平仓盈亏，复核后待下根K线时取值相应变化。
4、信号执行方式为‘出信号立即下单不复核’：OFFSETPROFIT1根据信号确认时的行情最新价计算平仓盈亏。
5、OFFSETPROFIT1与日志中记录的平仓盈亏不同，后者根据成交价计算。
6、OFFSETPROFIT1的计算不包含手续费。
7、因信号消失产生的盈亏未纳入OFFSETPROFIT1的计算。
8、股票T+1交易不支持统计平仓盈亏，该函数返回空值。

例：
OFFSETPROFIT1<=-100,CLOSEOUT;//累计亏损大于100，清仓
`;

const OPEN = new MySymbol();
OPEN.label = "OPEN";
OPEN.description = "取得K线图的开盘价";
OPEN.insertText = "";
OPEN.body = "OPEN";
OPEN.kind = MySymbolKind.Function;
OPEN.marketType = MyMarketType.BasicFunction;
OPEN.functionType = MyFunctionType.CandlestickDataReference;
OPEN.returnType = MyFunctionReturnType.None;
OPEN.parameters = MySymbol.createParametersFromStrings([]);
OPEN.detail = "取得K线图的开盘价";
OPEN.documentation = `
OPEN取得开盘价
OPEN 取得K线图的开盘价。

注：
1、可简写为O。

例1：
OO:O;//定义OO为开盘价；
例2：
NN:=BARSLAST(DATE<>REF(DATE,1));
OO:REF(O,NN);//取的当日的开盘价
例3：
MA5:MA(O,5);//定义开盘价的5周期均线（O为OPEN简写）。
`;

const OPENMINUTE = new MySymbol();
OPENMINUTE.label = "OPENMINUTE";
OPENMINUTE.description = "开盘后经过的分钟数";
OPENMINUTE.insertText = "";
OPENMINUTE.body = "OPENMINUTE";
OPENMINUTE.kind = MySymbolKind.Function;
OPENMINUTE.marketType = MyMarketType.TPlusZeroStrategyFunction;
OPENMINUTE.functionType = MyFunctionType.TimeFunction;
OPENMINUTE.returnType = MyFunctionReturnType.None;
OPENMINUTE.parameters = MySymbol.createParametersFromStrings([]);
OPENMINUTE.detail = "开盘后经过的分钟数";
OPENMINUTE.documentation = `
OPENMINUTE,返回开盘后经过的分钟数
OPENMINUTE，返回开盘后经过的分钟数。

注：
1、该函数只能用于收盘价模型。
2、该函数返回开盘时间距离当根K线开始时间的分钟数。
3、该函数需要在秒周期，分钟，小时周期使用；不支持在量能周期，日线及以上周期使用。
4、该函数的返回值包含小结和午休的时间。
5、OPENMINUTE返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，白盘开盘不是当日开盘，夜盘开盘才算作当日开盘。

例：
CROSS(C,MA(C,5))&&OPENMINUTE>5,BPK;//当天开盘后五分钟内不开仓
CROSS(MA(C,5),C)&&OPENMINUTE>5,SPK;
AUTOFILTER;
`;

const OPENMINUTE1 = new MySymbol();
OPENMINUTE1.label = "OPENMINUTE1";
OPENMINUTE1.description = "开盘后经过的分钟数";
OPENMINUTE1.insertText = "";
OPENMINUTE1.body = "OPENMINUTE1";
OPENMINUTE1.kind = MySymbolKind.Function;
OPENMINUTE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
OPENMINUTE1.functionType = MyFunctionType.TimeFunction;
OPENMINUTE1.returnType = MyFunctionReturnType.None;
OPENMINUTE1.parameters = MySymbol.createParametersFromStrings([]);
OPENMINUTE1.detail = "开盘后经过的分钟数";
OPENMINUTE1.documentation = `
OPENMINUTE1,返回开盘后经过的分钟数
OPENMINUTE1，返回开盘后经过的分钟数。

注：
1、该函数只能用于指令价模型。
2、
历史K线：该函数返回K线结束时间距离开盘的分钟数。
盘中：该函数返回K线当前时间距离开盘的分钟数。
3、该函数需要在秒周期，分钟，小时，日线周期使用；不支持在量能周期，周线及以上周期使用。
4、该函数返回值包含小结和午休的时间。
5、OPENMINUTE1返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，白盘开盘不是当日开盘，夜盘开盘才算作当日开盘。

例：
CROSS(C,MA(C,5))&&OPENMINUTE1>5,BPK;//当天开盘后五分钟内不开仓
CROSS(MA(C,5),C)&&OPENMINUTE1>5,SPK;
MULTSIG(0,0,1,0);//出信号立即下单，不复核
AUTOFILTER;
`;

const OPENSEC = new MySymbol();
OPENSEC.label = "OPENSEC";
OPENSEC.description = "开盘后经过的秒数";
OPENSEC.insertText = "";
OPENSEC.body = "OPENSEC";
OPENSEC.kind = MySymbolKind.Function;
OPENSEC.marketType = MyMarketType.TPlusZeroStrategyFunction;
OPENSEC.functionType = MyFunctionType.TimeFunction;
OPENSEC.returnType = MyFunctionReturnType.None;
OPENSEC.parameters = MySymbol.createParametersFromStrings([]);
OPENSEC.detail = "开盘后经过的秒数";
OPENSEC.documentation = `
OPENSEC,返回开盘后经过的秒数
OPENSEC，返回开盘后经过的秒数。

注：
1、该函数只能用于收盘价模型。
2、该函数返回开盘时间距离当根K线开始时间的秒数。
3、该函数需要在秒周期，分钟，小时周期使用；不支持在量能周期，日线及以上周期使用。
4、该函数的返回值包含小结和午休的时间。
5、OPENSEC返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，白盘开盘不是当日开盘，夜盘开盘才算作当日开盘。

例：
CROSS(C,MA(C,5))&&OPENSEC>30,BPK;//当天开盘后30秒内不开仓
CROSS(MA(C,5),C)&&OPENSEC>30,SPK;
AUTOFILTER;
`;

const OPENSEC1 = new MySymbol();
OPENSEC1.label = "OPENSEC1";
OPENSEC1.description = "开盘后经过的秒数";
OPENSEC1.insertText = "";
OPENSEC1.body = "OPENSEC1";
OPENSEC1.kind = MySymbolKind.Function;
OPENSEC1.marketType = MyMarketType.TPlusZeroStrategyFunction;
OPENSEC1.functionType = MyFunctionType.TimeFunction;
OPENSEC1.returnType = MyFunctionReturnType.None;
OPENSEC1.parameters = MySymbol.createParametersFromStrings([]);
OPENSEC1.detail = "开盘后经过的秒数";
OPENSEC1.documentation = `
OPENSEC1,返回开盘后经过的秒数
OPENSEC1，返回开盘后经过的秒数。

注：
1、该函数只能用于指令价模型。
2、
历史K线：该函数返回K线结束时间距离开盘的秒数。
盘中：该函数返回K线当前时间距离开盘的秒数。
3、该函数需要在秒周期，分钟，小时，日线周期使用；不支持在量能周期，周线及以上周期使用。
4、该函数返回值包含小结和午休的时间。
5、OPENSEC1返回的是交易所的时间，不是本机的时间。
6、对于夜盘合约，白盘开盘不是当日开盘，夜盘开盘才算作当日开盘。

例：
CROSS(C,MA(C,5))&&OPENSEC1>30,BPK;//当天开盘后30秒内不开仓
CROSS(MA(C,5),C)&&OPENSEC1>30,SPK;
MULTSIG(0,0,1,0);//出信号立即下单，不复核
AUTOFILTER;
`;

const OPI = new MySymbol();
OPI.label = "OPI";
OPI.description = "取得K线图的持仓量";
OPI.insertText = "";
OPI.body = "OPI";
OPI.kind = MySymbolKind.Function;
OPI.marketType = MyMarketType.BasicFunction;
OPI.functionType = MyFunctionType.CandlestickDataReference;
OPI.returnType = MyFunctionReturnType.None;
OPI.parameters = MySymbol.createParametersFromStrings([]);
OPI.detail = "取得K线图的持仓量";
OPI.documentation = `
OPI取得持仓量
OPI 取得K线图的持仓量。

注：
OPI函数加载在股票合约上返回值为股票的成交额。

例1：
OPID:OPI;//定义OPID为持仓量。
例2：
OPI>=REF(OPI,1);//持仓量大于前一个周期的持仓量，表示持仓量增加。
例3：
NN:=BARSLAST(DATE<>REF(DATE,1))+1;
OPID:REF(OPI,NN);//取的昨天收盘时的持仓量
`;

const PANZHENG = new MySymbol();
PANZHENG.label = "PANZHENG";
PANZHENG.description = "判断是否为盘整";
PANZHENG.insertText = "";
PANZHENG.body = "PANZHENG";
PANZHENG.kind = MySymbolKind.Function;
PANZHENG.marketType = MyMarketType.TPlusZeroStrategyFunction;
PANZHENG.functionType = MyFunctionType.LogicalJudgmentFunction;
PANZHENG.returnType = MyFunctionReturnType.None;
PANZHENG.parameters = MySymbol.createParametersFromStrings([]);
PANZHENG.detail = "判断是否为盘整";
PANZHENG.documentation = `
PANZHENG,判断行情是否盘整，返回1时表示盘整，返回0时表示非盘整
PANZHENG 判断当前行情是否为盘整

用法：返回1:表示盘整，返回0:表示不是盘整。

注：
这个函数的目的是用于判断当根k线是否盘整状态，是否适合做开仓操作，从而优化趋势模型，避免在盘整阶段频繁交易。
这个函数不适合用于判断一段行情，也就是说不适合用来开发突破模型。

例：
MA1:MA(CLOSE,5);
MA2:MA(CLOSE,10);
CROSS(MA1,MA2)&&PANZHENG=0,BK;//盘整行情不开新仓，减少模型在盘整阶段的资金回撤
CROSS(MA2,MA1),SP;
AUTOFILTER;
`;

const PARTLINE = new MySymbol();
PARTLINE.label = "PARTLINE";
PARTLINE.description = "画线段";
PARTLINE.insertText = "";
PARTLINE.body = "PARTLINE( , , )";
PARTLINE.kind = MySymbolKind.Function;
PARTLINE.marketType = MyMarketType.BasicFunction;
PARTLINE.functionType = MyFunctionType.DrawingFunction;
PARTLINE.returnType = MyFunctionReturnType.None;
PARTLINE.parameters = MySymbol.createParametersFromStrings([]);
PARTLINE.detail = "画线段";
PARTLINE.documentation = `
PARTLINE(COND,DATA,COLOR)条件COND满足时，以COLOR颜色的直线连接DATA各点
PARTLINE 画线段。

用法：
PARTLINE(COND, DATA, COLOR); 
条件COND满足时，以COLOR颜色的直线连接DATA各点

注：
1、该函数是将满足条件的DATA以线段形式连接起来，连线并不连续。
2、该函数支持在函数后设置线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的写法：
PARTLINE(COND, DATA, COLOR),LINETHICK;
3、不支持将该函数定义为变量，即不支持下面的写法：
A:PARTLINE(COND,DATA,COLOR);

例1：
PARTLINE(HIGH>REF(HIGH,1),HIGH,COLORRED);//表示当期最高价大于前期最高价时用红色绘制最高价线段。
例2：
PARTLINE(LOW<REF(LOW,1),LOW,COLORBLUE),LINETHICK5;//表示当期最低价小于前期最低价时用蓝色绘制最低价线段，线型粗细为5。
`;

const PARTLINE1 = new MySymbol();
PARTLINE1.label = "PARTLINE1";
PARTLINE1.description = "画线段";
PARTLINE1.insertText = "";
PARTLINE1.body = "PARTLINE1( , )";
PARTLINE1.kind = MySymbolKind.Function;
PARTLINE1.marketType = MyMarketType.BasicFunction;
PARTLINE1.functionType = MyFunctionType.DrawingFunction;
PARTLINE1.returnType = MyFunctionReturnType.None;
PARTLINE1.parameters = MySymbol.createParametersFromStrings([]);
PARTLINE1.detail = "画线段";
PARTLINE1.documentation = `
PARTLINE1(COND,DATA)条件COND满足时，用直线段连接DATA各点
PARTLINE1 画线段。

用法：
PARTLINE1(COND,DATA);
条件COND满足时，用线段连接DATA各点。

注：
1、该函数是将满足条件的DATA以线段形式连接起来，连线并不连续。
2、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
PARTLINE1(COND,DATA),COLOR,LINETHICK;
PARTLINE1(COND,DATA),LINETHICK,COLOR;
3、不支持将该函数定义为变量，即不支持下面的写法：
A:PARTLINE1(COND,DATA);

例：
PARTLINE1(HIGH>REF(HIGH,1),HIGH),COLORRED,LINETHICK5;//表示当期最高价大于前期最高价时用红色绘制最高价线段，线型粗细为5。
`;

const PCRATE = new MySymbol();
PCRATE.label = "PCRATE";
PCRATE.description = "求N周期内Y值的趋势";
PCRATE.insertText = "";
PCRATE.body = "PCRATE(,)";
PCRATE.kind = MySymbolKind.Function;
PCRATE.marketType = MyMarketType.BasicFunction;
PCRATE.functionType = MyFunctionType.MathematicalStatisticsFunction;
PCRATE.returnType = MyFunctionReturnType.None;
PCRATE.parameters = MySymbol.createParametersFromStrings([]);
PCRATE.detail = "求N周期内Y值的趋势";
PCRATE.documentation = `
求N周期内Y值的趋势
PCRATE(Y,N)  求N周期内Y值的趋势

算法：根据N周期内Y值，通过最小二乘法线性拟合为一阶多项式，即y1=aN+b
对函数求一阶导数（斜率），即PCRATE(Y,N)=dy1/dN
通常和函数PCRATETREND(Y,N) 一起连用判断

当PCRATE(Y,N)>0时，Y为上涨趋势；
当PCRATE(Y,N)<0时，Y为下跌趋势；
当PCRATE(Y,N)=0时，无趋势。

注：
1、N包含当前K线。
2、N为有效值，但当前的K线数不足N根，该函数返回空值。
3、N<2，或者N为空值，该函数返回空值。
4、N支持为变量。
5、Y存在空值时，跳过空值。
6、该函数计算量较大，会导致计算时间变长。

例：
PCRATE(CLOSE,20);//20周期内收盘价的趋势变化
PCRATETREND(CLOSE,20);//20周期内收盘价趋势变化的速度
`;

const PCRATETREND = new MySymbol();
PCRATETREND.label = "PCRATETREND";
PCRATETREND.description = "求N周期内Y值的趋势变化速度";
PCRATETREND.insertText = "";
PCRATETREND.body = "PCRATETREND(,)";
PCRATETREND.kind = MySymbolKind.Function;
PCRATETREND.marketType = MyMarketType.BasicFunction;
PCRATETREND.functionType =
    MyFunctionType.MathematicalStatisticsFunction;
PCRATETREND.returnType = MyFunctionReturnType.None;
PCRATETREND.parameters = MySymbol.createParametersFromStrings([]);
PCRATETREND.detail = "求N周期内Y值的趋势变化速度";
PCRATETREND.documentation = `
求N周期内Y值的趋势变化速度
PCRATETREND(Y,N)  求N周期内Y值的趋势变化速度

算法:
根据N周期内Y值，通过最小二乘法线性拟合为二阶多项式，即y1=aN^2+bN+c
对函数求二阶导数，即PCRATETREND(Y,N)=d^2(y1)/dN^2
通常和函数PCRATE(Y,N)一起连用判断

当PCRATETREND(Y,N)>0时，价格曲线为凹型，趋势加速；
当PCRATETREND(Y,N)<0时，价格曲线为凸型，趋势减速。

注：
1、N包含当前K线。
2、N为有效值，但当前的K线数不足N根，该函数返回空值。
3、N<3，或者N为空值，该函数返回空值。
4、N支持为变量。
5、Y存在空值时，跳过空值。
6、该函数计算量较大，会导致计算时间变长。

例：
PCRATE(CLOSE,20);//20周期内收盘价的趋势变化
PCRATETREND(CLOSE,20);//20周期内收盘价趋势变化的速度
`;

const PERCENTILE = new MySymbol();
PERCENTILE.label = "PERCENTILE";
PERCENTILE.description = "百分位函数";
PERCENTILE.insertText = "";
PERCENTILE.body = "PERCENTILE";
PERCENTILE.kind = MySymbolKind.Function;
PERCENTILE.marketType = MyMarketType.BasicFunction;
PERCENTILE.functionType = MyFunctionType.FinancialStatisticsFunction;
PERCENTILE.returnType = MyFunctionReturnType.None;
PERCENTILE.parameters = MySymbol.createParametersFromStrings([]);
PERCENTILE.detail = "百分位函数";
PERCENTILE.documentation = `
PERCENTILE(Data,N,Per)百分位函数取最近N个周期Data数据处于Per百分位的数值。Data为需要排序的数据，N为需要排序的周期数，Per是百分位数值。
PERCENTILE 百分位函数。

用法：
PERCENTILE(Data,N,Per) 百分位函数
取最近N个周期Data数据处于Per百分位的数值。
Data为需要排序的数据，N为需要排序的周期数，Per是百分位数值。

注：
1、参数Data可以为变量。
2、参数N可以为变量。
3、百分位数值的有效范围为[0,100],不能整除时向上取整。


例：
HH:PERCENTILE(HIGH,50,95);//取最近50根k线最高价处于95%位置的数值
LL:PERCENTILE(LOW,50,5);//取最近50根k线最低价处于5%位置的数值
`;

const PERIOD = new MySymbol();
PERIOD.label = "PERIOD";
PERIOD.description = "自动读取当前技术分析图表周期";
PERIOD.insertText = "";
PERIOD.body = "PERIOD";
PERIOD.kind = MySymbolKind.Function;
PERIOD.marketType = MyMarketType.BasicFunction;
PERIOD.functionType = MyFunctionType.TimeFunction;
PERIOD.returnType = MyFunctionReturnType.None;
PERIOD.parameters = MySymbol.createParametersFromStrings([]);
PERIOD.detail = "自动读取当前技术分析图表周期";
PERIOD.documentation = `
PERIOD,自动读取当前技术图表周期
PERIOD，返回当前技术分析图表的周期。

注：
1：该函数支持自定义周期。
2：返回数字为1—11分别表示，1分钟，3分钟，5分钟，10分钟，15分钟，30分钟，1小时，1天，1周，1月，1年。
3：返回数字为12—27分别表示,TICK、量能、5秒、10秒、15秒、30秒、2小时、3小时、4小时、1季、自定义秒、自定义分、自定义小时、自定义日、自定义月、自定义年
例:
N:=BARSLAST(DATE<>REF(DATE,1))+1;
OO:VALUEWHEN(N=1,O);
IFELSE(PERIOD=1,OO,NULL);//取当天一分钟周期的开盘价。
`;

const PLAYSOUND = new MySymbol();
PLAYSOUND.label = "PLAYSOUND";
PLAYSOUND.description = "声音函数";
PLAYSOUND.insertText = "";
PLAYSOUND.body = "PLAYSOUND( , )";
PLAYSOUND.kind = MySymbolKind.Function;
PLAYSOUND.marketType = MyMarketType.BasicFunction;
PLAYSOUND.functionType = MyFunctionType.DrawingFunction;
PLAYSOUND.returnType = MyFunctionReturnType.None;
PLAYSOUND.parameters = MySymbol.createParametersFromStrings([]);
PLAYSOUND.detail = "声音函数";
PLAYSOUND.documentation = `
PLAYSOUND(COND,N),条件COND满足时播放指定声音N为自定义声音代码(可在设置声音文件中设置)
PLAYSOUND 条件满足时，播放指定声音。

用法：
PLAYSOUND(COND, 'N') 当条件满足时，播放声音'N'

注：
1、点击设置声音按钮，在弹出来的界面中设置声音，声音用字符'A'~'J'表示。
2、自定义声音可以在设置菜单的设置声音文件中设置
3、条件一直满足，则只播放一次，不重复播放。
4、不支持将该函数直接定义为变量，即不支持下面的写法：
A:PLAYSOUND(COND, 'N');
5、当前k线满足时才会播放声音，历史满足不会播放

例：
PLAYSOUND(CLOSE>OPEN,'A');表示CLOSE>OPEN时播放自定义声音'A'。
`;

const POINTDOT = new MySymbol();
POINTDOT.label = "POINTDOT";
POINTDOT.description = "画点线";
POINTDOT.insertText = "";
POINTDOT.body = "POINTDOT";
POINTDOT.kind = MySymbolKind.Function;
POINTDOT.marketType = MyMarketType.BasicFunction;
POINTDOT.functionType = MyFunctionType.DrawingFunction;
POINTDOT.returnType = MyFunctionReturnType.None;
POINTDOT.parameters = MySymbol.createParametersFromStrings([]);
POINTDOT.detail = "画点线";
POINTDOT.documentation = `

画点线。
用法：
POINTDOT 画点线。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:POINTDOT;
例：MA5:MA(C,5),POINTDOT;用点线画5日均线。
`;

const POLYLINE = new MySymbol();
POLYLINE.label = "POLYLINE";
POLYLINE.description = "画折线";
POLYLINE.insertText = "";
POLYLINE.body = "POLYLINE( , , )";
POLYLINE.kind = MySymbolKind.Function;
POLYLINE.marketType = MyMarketType.BasicFunction;
POLYLINE.functionType = MyFunctionType.DrawingFunction;
POLYLINE.returnType = MyFunctionReturnType.None;
POLYLINE.parameters = MySymbol.createParametersFromStrings([]);
POLYLINE.detail = "画折线";
POLYLINE.documentation = `
POLYLINE(COND,DATA,COLOR)，条件满足时，用颜色COLOR的直线连接DATA的值
POLYLINE函数 画折线。

用法：
POLYLINE(COND,DATA,COLOR); 
条件COND满足时，用颜色COLOR的折线连接DATA的值。

注：
1、该函数是将满足条件的DATA以折线形式连接起来，连线连续
2、该函数支持在函数后设置线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的写法：POLYLINE(COND,DATA,COLOR),LINETHICK; 
3、不支持将该函数定义为变量，即不支持下面的写法：
A:POLYLINE(COND,DATA,COLOR);

例1：
POLYLINE(CLOSE>=HHV(CLOSE,10),CLOSE,COLORRED);//表示在收盘价创10天新高点之间画折线。折线显示为红色。

例2：
POLYLINE(CLOSE<=LLV(CLOSE,10),CLOSE,COLORBLUE),LINETHICK7;//表示在收盘价创10天新低点之间画折线。折线显示为蓝色,线型粗细为7。
`;

const POLYLINE1 = new MySymbol();
POLYLINE1.label = "POLYLINE1";
POLYLINE1.description = "画折线";
POLYLINE1.insertText = "";
POLYLINE1.body = "POLYLINE1( , )";
POLYLINE1.kind = MySymbolKind.Function;
POLYLINE1.marketType = MyMarketType.BasicFunction;
POLYLINE1.functionType = MyFunctionType.DrawingFunction;
POLYLINE1.returnType = MyFunctionReturnType.None;
POLYLINE1.parameters = MySymbol.createParametersFromStrings([]);
POLYLINE1.detail = "画折线";
POLYLINE1.documentation = `
POLYLINE1(COND,DATA)，条件满足时，用折线连接DATA的值
POLYLINE1 画折线。

用法：
POLYLINE1(COND,DATA); 
条件COND满足时，用折线连接DATA的值。

注：
1、该函数是将满足条件的DATA以折线形式连接起来，连线连续
2、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
POLYLINE1(COND,DATA),LINETHICK,COLOR;
POLYLINE1(COND,DATA),COLOR,LINETHICK;

3、不支持将该函数定义为变量，即不支持下面的写法：
A:POLYLINE1(COND,DATA);

例1：
POLYLINE1(CLOSE>=HHV(CLOSE,10),CLOSE),COLORRED;//表示在收盘价创10天新高点之间画折线。折线显示为红色。

例2：
POLYLINE1(CLOSE<=LLV(CLOSE,10),CLOSE),COLORBLUE,LINETHICK7;//表示在收盘价创10天新低点之间画折线。折线显示为蓝色,线型粗细为7。
`;

const POW = new MySymbol();
POW.label = "POW";
POW.description = "幂";
POW.insertText = "";
POW.body = "POW( , )";
POW.kind = MySymbolKind.Function;
POW.marketType = MyMarketType.BasicFunction;
POW.functionType = MyFunctionType.MathFunction;
POW.returnType = MyFunctionReturnType.None;
POW.parameters = MySymbol.createParametersFromStrings([]);
POW.detail = "幂";
POW.documentation = `
POW(X,Y),求X的Y次幂
POW(X,Y)：求X的Y次幂。

注：
1、当X为负数时，Y必须为整数，因为底数为负时，不能进行开方运算，返回值为空值。
2、X,Y可以为数值，也可以为变量。

例1：
POW(CLOSE,2);//求得收盘价的2次方。
例2：
POW(10,2);//返回值为100
例3：
POW(1/2,-2);//返回值为4
例4：
POW(100,O-C);//返回100的O-C次方
`;

const PRECIS = new MySymbol();
PRECIS.label = "PRECIS";
PRECIS.description = "指定数值的输出精度（小数位数）";
PRECIS.insertText = "";
PRECIS.body = "PRECIS";
PRECIS.kind = MySymbolKind.Function;
PRECIS.marketType = MyMarketType.BasicFunction;
PRECIS.functionType = MyFunctionType.DrawingFunction;
PRECIS.returnType = MyFunctionReturnType.None;
PRECIS.parameters = MySymbol.createParametersFromStrings([]);
PRECIS.detail = "指定数值的输出精度（小数位数）";
PRECIS.documentation = `

指定数值的输出精度（小数位数）。
用法：
PRECISX，X为0至6，表示小数位数从0到6。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:PRECIS0;

例1： 
MA(C,5),PRECIS4;//计算五周期均线，数值精度为4位小数。
`;

const PRECISION = new MySymbol();
PRECISION.label = "PRECISION";
PRECISION.description = "设置小数位数";
PRECISION.insertText = "";
PRECISION.body = "PRECISION";
PRECISION.kind = MySymbolKind.Function;
PRECISION.marketType = MyMarketType.TPlusZeroStrategyFunction;
PRECISION.functionType = MyFunctionType.DrawingFunction;
PRECISION.returnType = MyFunctionReturnType.None;
PRECISION.parameters = MySymbol.createParametersFromStrings([]);
PRECISION.detail = "设置小数位数";
PRECISION.documentation = `
PRECISION()，设置小数位数(范围0-6)
PRECISION(N) 设置小数位数，N为位数范

注：
1、当N设置为具体数值是，N范围可以为0-6

例1：
C,PRECISION(3); //设置小数点位数为3位，即返回收盘价显示三位小数

例2：
C,PRECISION(PRICEPRECISION); //返回收盘价，设置小数点位数为当前合约的小数位数
`;

const PRICEPRECISION = new MySymbol();
PRICEPRECISION.label = "PRICEPRECISION";
PRICEPRECISION.description = "取当前合约小数点位数";
PRICEPRECISION.insertText = "";
PRICEPRECISION.body = "PRICEPRECISION";
PRICEPRECISION.kind = MySymbolKind.Function;
PRICEPRECISION.marketType = MyMarketType.TPlusZeroStrategyFunction;
PRICEPRECISION.functionType = MyFunctionType.DrawingFunction;
PRICEPRECISION.returnType = MyFunctionReturnType.None;
PRICEPRECISION.parameters = MySymbol.createParametersFromStrings([]);
PRICEPRECISION.detail = "取当前合约小数点位数";
PRICEPRECISION.documentation = `
PRICEPRECISION，取当前合约小数位数
PRICEPRECISION 取当前合约小数点位数

用法：
返回当前合约设置的小数点位数

例：
C,PRECISION(PRICEPRECISION); //返回收盘价，设置小数点位数为当前合约的小数位数
`;

const PRICEPRECISION1 = new MySymbol();
PRICEPRECISION1.label = "PRICEPRECISION1";
PRICEPRECISION1.description = "取指定合约设置的小数点位数";
PRICEPRECISION1.insertText = "";
PRICEPRECISION1.body = "PRICEPRECISION1";
PRICEPRECISION1.kind = MySymbolKind.Function;
PRICEPRECISION1.marketType = MyMarketType.TPlusZeroStrategyFunction;
PRICEPRECISION1.functionType = MyFunctionType.DrawingFunction;
PRICEPRECISION1.returnType = MyFunctionReturnType.None;
PRICEPRECISION1.parameters = MySymbol.createParametersFromStrings([]);
PRICEPRECISION1.detail = "取指定合约设置的小数点位数";
PRICEPRECISION1.documentation = `
PRICEPRECISION1()，取某合约小数位数
PRICEPRECISION1('CODE') 取指定合约设置的小数点位数

注：
1、CODE可以为文华码或合约名
2、CODE可缺省，支持如下写法：AA:PRICEPRECISION1(''); 取当前合约设置的小数点位数

例：
PRICEPRECISION1('8608');//返回文华码8608合约设置的小数点位数
C,PRECISION(PRICEPRECISION1('8608')); //返回收盘价，设置小数点位数为指定文华码8608的合约的小数位数
`;

const PROFIT = new MySymbol();
PROFIT.label = "PROFIT";
PROFIT.description = "理论逐笔浮盈";
PROFIT.insertText = "";
PROFIT.body = "PROFIT";
PROFIT.kind = MySymbolKind.Function;
PROFIT.marketType = MyMarketType.TPlusZeroStrategyFunction;
PROFIT.functionType = MyFunctionType.PositionManagementFunction;
PROFIT.returnType = MyFunctionReturnType.None;
PROFIT.parameters = MySymbol.createParametersFromStrings([]);
PROFIT.detail = "理论逐笔浮盈";
PROFIT.documentation = `
PROFIT理论逐笔浮盈
PROFIT 理论逐笔浮盈

用法：PROFIT返回当前理论逐笔浮动盈亏，用于交易策略风险控制。

计算方法：
多头：PROFIT=（最新价-开仓价格）*手数*交易单位
空头：PROFIT=（开仓价格-最新价）*手数*交易单位

注：
1、模组初始化多头持仓后，PROFIT返回值为（最新价-开仓价格）*手数*交易单位，空头返回值为（开仓价格-最新价）*手数*交易单位。
2、开仓信号当根K线，信号确认后，多头持仓PROFIT返回（最新价-开仓价格）*手数*交易单位，空头持仓PROFIT返回（开仓价格-最新价）*手数*交易单位。
3、开仓后平仓前多头持仓PROFIT返回值为（最新价-开仓价格）*手数*交易单位，空头持仓返回值为（开仓价格-最新价）*手数*交易单位。
4、持仓为0，PROFIT返回值为0。
5、模组开仓价格的算法：
 a.信号执行方式为‘K线走完确认信号下单’开仓价格为开仓信号当根K线的收盘价
 b.信号执行方式为‘XXX下单，K线走完复核’开仓价格为开仓信号指令价
 c.信号执行方式为‘XXX下单，不进行信号复核’开仓价格为开仓信号指令价
6、加减仓模型加仓后，开仓价格按照‘5’中不同信号执行方式取值后再进行平均。
7、加减仓模型减仓按先开先平原则，平最先开的仓位，PROFIT计算公式中，用现有持仓的开仓价格计算，手数减少。

例：
PROFIT<-2000,SP;//亏损2000元止损
`;

const QUARTER = new MySymbol();
QUARTER.label = "QUARTER";
QUARTER.description = "取得某周期的季度数";
QUARTER.insertText = "";
QUARTER.body = "QUARTER";
QUARTER.kind = MySymbolKind.Function;
QUARTER.marketType = MyMarketType.BasicFunction;
QUARTER.functionType = MyFunctionType.TimeFunction;
QUARTER.returnType = MyFunctionReturnType.None;
QUARTER.parameters = MySymbol.createParametersFromStrings([]);
QUARTER.detail = "取得某周期的季度数";
QUARTER.documentation = `
QUARTER取得某周期的季度数
QUARTER,返回某周期的季度数。

注：
当前周期的月份为1~3月返回1，4~6月返回2，7~9月返回3，10~12月返回4。

例1：
CROSS(C,MA(C,5))&&QUARTER<3,BK;//在一二季度，最新价上穿5周期均线做多
CROSS(MA(C,5),C)&&QUARTER<3,SP;//在一二季度，最新价下穿5周期均线平多
TRADE_OTHER('AUTO');//交易合约为主力合约
AUTOFILTER;
`;

const QUARTERTRADE = new MySymbol();
QUARTERTRADE.label = "QUARTERTRADE";
QUARTERTRADE.description = "季内交易函数";
QUARTERTRADE.insertText = "";
QUARTERTRADE.body = "QUARTERTRADE";
QUARTERTRADE.kind = MySymbolKind.Function;
QUARTERTRADE.marketType = MyMarketType.TPlusZeroStrategyFunction;
QUARTERTRADE.functionType = MyFunctionType.CalculationControlFunction;
QUARTERTRADE.returnType = MyFunctionReturnType.None;
QUARTERTRADE.parameters = MySymbol.createParametersFromStrings([]);
QUARTERTRADE.detail = "季内交易函数";
QUARTERTRADE.documentation = `
QUARTERTRADE,季内交易函数
QUARTERTRADE 季内交易函数。

用法：
QUARTERTRADE 模型中写入该函数，信号和资金每季度重新初始化进行计算，与历史割裂。

注：
1、该函数不支持自定义N日、季、年周期，其他周期均支持。
2、回测报告中的出金/入金，为每季度出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
4、（1）历史回测中，当季K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当季K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
QUARTERTRADE;//使用每季度数据计算
`;

const QUARTERTRADE1 = new MySymbol();
QUARTERTRADE1.label = "QUARTERTRADE1";
QUARTERTRADE1.description = "季内交易函数";
QUARTERTRADE1.insertText = "";
QUARTERTRADE1.body = "QUARTERTRADE1";
QUARTERTRADE1.kind = MySymbolKind.Function;
QUARTERTRADE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
QUARTERTRADE1.functionType =
    MyFunctionType.CalculationControlFunction;
QUARTERTRADE1.returnType = MyFunctionReturnType.None;
QUARTERTRADE1.parameters = MySymbol.createParametersFromStrings([]);
QUARTERTRADE1.detail = "季内交易函数";
QUARTERTRADE1.documentation = `
QUARTERTRADE1季内交易函数，且历史数据不参与计算。
QUARTERTRADE1 季内交易函数。

用法：
QUARTERTRADE1 模型中写入该函数，信号和资金每季重新初始化进行计算，与历史割裂，并且每一个函数只使用当季K线数据进行计算，历史数据不参与计算。

注：
1、该函数不支持自定义N日、季、年周期，其他周期均支持。
2、回测报告中的出金/入金，为每季度出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\MONTHTRADE1\\QUARTERTRADE\\QUARTERTRADE1\\YEARTRADE\\YEARTRADE1函数。
4、（1）历史回测中，当季K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当季K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
QUARTERTRADE1;//使用每季度数据计算
`;

const RAND = new MySymbol();
RAND.label = "RAND";
RAND.description = "产生随机数的随机函数";
RAND.insertText = "";
RAND.body = "RAND";
RAND.kind = MySymbolKind.Function;
RAND.marketType = MyMarketType.BasicFunction;
RAND.functionType = MyFunctionType.MathFunction;
RAND.returnType = MyFunctionReturnType.None;
RAND.parameters = MySymbol.createParametersFromStrings([]);
RAND.detail = "产生随机数的随机函数";
RAND.documentation = `
RAND(X,Y)产生随机数的随机函数,返回范围在X到Y之间的随机数。
RAND(X,Y) 产生随机数的随机函数,返回范围在X到Y之间的随机数。

注：
1、X、Y参数均支持设置为变量。
2、该函数仅支持返回整数
3、当X>Y时，函数返回空值。
4、当X与Y的范围小于1时，函数返回无效值。

例1：
RAND(1,60);//返回1到60之间的随机数值
例2：
RAND(C,O);//返回收盘价到开盘价之间的随机数值
`;

const RANGE = new MySymbol();
RANGE.label = "RANGE";
RANGE.description = "范围";
RANGE.insertText = "";
RANGE.body = "RANGE( , , )";
RANGE.kind = MySymbolKind.Function;
RANGE.marketType = MyMarketType.BasicFunction;
RANGE.functionType = MyFunctionType.MathFunction;
RANGE.returnType = MyFunctionReturnType.None;
RANGE.parameters = MySymbol.createParametersFromStrings([]);
RANGE.detail = "范围";
RANGE.documentation = `
RANGE(A,B,C),判断是否A大于B同时小于C，如果是则返回1，否则返回0
RANGE(X,Y,Z)：介于某个范围之内。表示X大于Y同时小于Z时返回1，否则返回0
例1：
RANGE(5,4,6);//返回值为1；
例2：
RANGE(8,3,6);//返回值为0；
例3：
MA5:MA(C,5);
MA10:MA(C,10);
MA20:MA(C,20);
RANGE(MA10,MA20,MA5),BK;//10周期均线在5周期均线与20周期均线之间买开仓

//RANGE(MA10,MA20,MA5)=1,BK; 与 RANGE(MA10,MA20,MA5),BK; 表达同等意义
`;

const RAWDATA = new MySymbol();
RAWDATA.label = "RAWDATA";
RAWDATA.description = "取原始数据的值";
RAWDATA.insertText = "";
RAWDATA.body = "RAWDATA(  )";
RAWDATA.kind = MySymbolKind.Function;
RAWDATA.marketType = MyMarketType.BasicFunction;
RAWDATA.functionType = MyFunctionType.CandlestickDataReference;
RAWDATA.returnType = MyFunctionReturnType.None;
RAWDATA.parameters = MySymbol.createParametersFromStrings([]);
RAWDATA.detail = "取原始数据的值";
RAWDATA.documentation = `
RAWDATA()，取原始数据的高开低收
RAWDATA 取原始数据的高开低收
注：
1、该函数与STOCKDIVD或TRADE_SMOOTHING连用
2、如未使用STOCKDIVD或TRADE_SMOOTHING，该函数返回无效值

用法：
RAWDATA('O');//取原始数据的开盘价
STOCKDIVD(1);//设置股票向后复权

//其中'OPEN'可以替换为以下
'HIGH':最高
'LOW':最低
'CLOSE'收盘价
均可为简写
`;

const REF = new MySymbol();
REF.label = "REF";
REF.description = "向前引用";
REF.insertText = "";
REF.body = "REF( , )";
REF.kind = MySymbolKind.Function;
REF.marketType = MyMarketType.BasicFunction;
REF.functionType = MyFunctionType.CandlestickDataReference;
REF.returnType = MyFunctionReturnType.None;
REF.parameters = MySymbol.createParametersFromStrings([]);
REF.detail = "向前引用";
REF.documentation = `
REF(X,N),取X在N个周期前的值
引用X在N个周期前的值。

注：
1、当N为有效值，但当前的k线数不足N根，返回空值；
2、N为0时返回当前X值；
3、N为空值时返回空值。
4、N可以为变量

例1:
REF(CLOSE,5);表示引用当前周期前第5个周期的收盘价
例2：
AA:IFELSE(BARSBK>=1,REF(C,BARSBK),C);//取最近一次买开仓信号K线的收盘价
//1）发出BK信号的当根k线BARSBK返回空值,则发出BK信号的当根k线REF(C,BARSBK)返回
空值；
//2）发出BK信号的当根k线BARSBK返回空值,不满足BARSBK>=1,则当根k线的收盘价。
//3）发出BK信号之后的k线BARSBK返回买开仓的K线距离当前K线的周期数，REF(C,BARSBK) 
返回开仓k线的收盘价。
//4）例：1、2、3 三根k线，1 K线为开仓信号的当根k线，则返回当根k线的收盘价，2、3 
K线返回 1 K线的收盘价。
`;

const REFLINE = new MySymbol();
REFLINE.label = "REFLINE";
REFLINE.description = "设定指标参考线";
REFLINE.insertText = "";
REFLINE.body = "REFLINE";
REFLINE.kind = MySymbolKind.Function;
REFLINE.marketType = MyMarketType.BasicFunction;
REFLINE.functionType = MyFunctionType.DrawingFunction;
REFLINE.returnType = MyFunctionReturnType.None;
REFLINE.parameters = MySymbol.createParametersFromStrings([]);
REFLINE.detail = "设定指标参考线";
REFLINE.documentation = `
REFLINE设定指标参考线
设定指标参考线。

用法：
REFLINE:A,B,C...;
在A,B,C的位置画出指标参考线。

注：
1、A、B、C等均为常数。
2、最多支持16个参数,如果超过16个参数，自动截取前16个参数。
3、该函数连写，则只会显示最后一次设定的指标线。
4、不支持将函数定义为变量，即不支持下面的写法：A:REFLINE;
5、该指标参考线完全根据设置的坐标显示，不随其他指标值的最值调整坐标范围

例1：
REFLINE:-100,0,100;//在-100,0,100的位置画出指标参考线。
`;

const REFLINE1 = new MySymbol();
REFLINE1.label = "REFLINE1";
REFLINE1.description = "设定指标参考线";
REFLINE1.insertText = "";
REFLINE1.body = "REFLINE1";
REFLINE1.kind = MySymbolKind.Function;
REFLINE1.marketType = MyMarketType.BasicFunction;
REFLINE1.functionType = MyFunctionType.DrawingFunction;
REFLINE1.returnType = MyFunctionReturnType.None;
REFLINE1.parameters = MySymbol.createParametersFromStrings([]);
REFLINE1.detail = "设定指标参考线";
REFLINE1.documentation = `
REFLINE1设定指标参考线
设定指标参考线。

用法：
REFLINE1:A,B,C...;
在A,B,C的位置画出指标参考线。

注：
1、A、B、C等均为常数。
2、最多支持16个参数,如果超过16个参数，自动截取前16个参数。
3、该函数连写，则只会显示最后一次设定的指标线。
4、不支持将函数定义为变量，即不支持下面的写法：A:REFLINE1;
5、该函数编写指标参考线会与指标中最值取交集调整坐标范围显示

例1：
REFLINE1:-100,0,100;//在-100,0,100的位置画出指标参考线。
`;

const REFSIG_PLACE = new MySymbol();
REFSIG_PLACE.label = "REFSIG_PLACE";
REFSIG_PLACE.description = "判断指定信号的K线位置";
REFSIG_PLACE.insertText = "";
REFSIG_PLACE.body = "REFSIG_PLACE( , )";
REFSIG_PLACE.kind = MySymbolKind.Function;
REFSIG_PLACE.marketType = MyMarketType.TPlusZeroStrategyFunction;
REFSIG_PLACE.functionType = MyFunctionType.SignalLoggingFunction;
REFSIG_PLACE.returnType = MyFunctionReturnType.None;
REFSIG_PLACE.parameters = MySymbol.createParametersFromStrings([]);
REFSIG_PLACE.detail = "判断指定信号的K线位置";
REFSIG_PLACE.documentation = `
REFSIG_PLACE(Sig,N)判断从当根K线开始倒数第N个固定的Sig信号所在K线的位置
REFSIG_PLACE(Sig,N) 判断从当根K线开始倒数第N个固定的Sig信号所在K线的位置。

用法：REFSIG_PLACE(Sig,N) 判断从当根K线开始倒数第N个固定的Sig信号所在K线的位置。如果没有Sig信号，或者没有固定的Sig信号，则该函数返回空值。

注：
1、Sig位置支持的信号有：BK,SK,BP,SP,BPK,SPK,CLOSEOUT,STOP
2、K线位置是指当前K线到指定信号所在K线的根数。
3、如果倒数第N个固定的Sig信号在当根K线上，那么该函数返回0。
4、N为0或空值时，该函数返回空值。
5、参数N支持变量。

例：
REFSIG_PLACE(BK,3)=5&&BKVOL>0,SP;//如果从当根K线开始倒数第3个固定的BK信号所在的距离当前K线有5根K线，并且多头持仓大于0，卖平仓
`;

const REFSIG_PRICE = new MySymbol();
REFSIG_PRICE.label = "REFSIG_PRICE";
REFSIG_PRICE.description = "判断指定信号的信号价位";
REFSIG_PRICE.insertText = "";
REFSIG_PRICE.body = "REFSIG_PRICE( , )";
REFSIG_PRICE.kind = MySymbolKind.Function;
REFSIG_PRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
REFSIG_PRICE.functionType = MyFunctionType.SignalLoggingFunction;
REFSIG_PRICE.returnType = MyFunctionReturnType.None;
REFSIG_PRICE.parameters = MySymbol.createParametersFromStrings([]);
REFSIG_PRICE.detail = "判断指定信号的信号价位";
REFSIG_PRICE.documentation = `
REFSIG_PRICE(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号的信号价位
REFSIG_PRICE(Sig,N) 返回从当根K线开始倒数第N个固定的Sig信号的信号价位。

用法：REFSIG_PRICE(Sig,N) 判断从当根K线开始倒数第N个固定的Sig信号的信号价位。如果没有Sig信号，或者没有固定的Sig信号，则该函数返回空值。

注：
1、Sig位置支持的信号有：BK,SK,BP,SP,BPK,SPK,CLOSEOUT,STOP
2、如果当根K线上有固定的Sig信号，那么该函数计算信号时，包括当根K线的信号。
3、N为0或空值时，该函数返回空值。
4、参数N支持变量。

例：
REFSIG_PRICE(BK,3)=3000&&BKVOL>0,SP;//如果从当根K线开始倒数第3个固定的BK信号的开仓价位为3000，并且多头持仓大于0，卖平仓
`;

const REFSIG_PRICE1 = new MySymbol();
REFSIG_PRICE1.label = "REFSIG_PRICE1";
REFSIG_PRICE1.description = "判断指定信号的委托价格";
REFSIG_PRICE1.insertText = "";
REFSIG_PRICE1.body = "REFSIG_PRICE1( , )";
REFSIG_PRICE1.kind = MySymbolKind.Function;
REFSIG_PRICE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
REFSIG_PRICE1.functionType = MyFunctionType.SignalLoggingFunction;
REFSIG_PRICE1.returnType = MyFunctionReturnType.None;
REFSIG_PRICE1.parameters = MySymbol.createParametersFromStrings([]);
REFSIG_PRICE1.detail = "判断指定信号的委托价格";
REFSIG_PRICE1.documentation = `
REFSIG_PRICE1(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号的委托价格
REFSIG_PRICE1(Sig,N) 返回从当根K线开始倒数第N个固定的Sig信号的委托价格。

用法：REFSIG_PRICE1(Sig,N) 判断从当根K线开始倒数第N个固定的Sig信号的委托价格。如果没有Sig信号，或者没有固定的Sig信号，则该函数返回空值。

注：
1、
盘中运行：
REFSIG_PRICE1(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号的委托价格。
回测：
1)模型中含有信号控制函数：REFSIG_PRICE1(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号发出时的行情最新价。
2)模型中不含有信号控制函数：REFSIG_PRICE1(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号当根K线的收盘价。
3)设置指定价格下单时，委托价为指定的价格。
2、Sig位置支持的信号有：BK,SK,BP,SP,BPK,SPK,CLOSEOUT,STOP
3、如果当根K线上有固定的Sig信号，那么该函数计算信号时，包括当根K线的信号。
4、N为0或空值时，该函数返回空值。
5、参数N支持变量。

例：
REFSIG_PRICE1(BK,3)=3000&&BKVOL>0,SP;//如果从当根K线开始倒数第3个固定的BK信号的委托价格为3000，并且多头持仓大于0，卖平仓
`;

const REFSIG_PRICE2 = new MySymbol();
REFSIG_PRICE2.label = "REFSIG_PRICE2";
REFSIG_PRICE2.description = "判断指定信号的成交价格";
REFSIG_PRICE2.insertText = "";
REFSIG_PRICE2.body = "REFSIG_PRICE2( , )";
REFSIG_PRICE2.kind = MySymbolKind.Function;
REFSIG_PRICE2.marketType = MyMarketType.TPlusZeroStrategyFunction;
REFSIG_PRICE2.functionType = MyFunctionType.SignalLoggingFunction;
REFSIG_PRICE2.returnType = MyFunctionReturnType.None;
REFSIG_PRICE2.parameters = MySymbol.createParametersFromStrings([]);
REFSIG_PRICE2.detail = "判断指定信号的成交价格";
REFSIG_PRICE2.documentation = `
REFSIG_PRICE2(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号的成交价格
REFSIG_PRICE2(Sig,N) 返回从当根K线开始倒数第N个固定的Sig信号的成交价格。

用法：REFSIG_PRICE2(Sig,N) 判断从当根K线开始倒数第N个固定的Sig信号的成交价格。如果没有Sig信号，或者没有固定的Sig信号，则该函数返回空值。

注：
1、
盘中运行：
REFSIG_PRICE2(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号的成交价格。
回测：
1)模型中含有信号控制函数：REFSIG_PRICE2(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号发出时的行情最新价。
2)模型中不含有信号控制函数：REFSIG_PRICE2(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号当根K线的收盘价。
3)设置指定价格下单时，成交价为指定的价格。
2、Sig位置支持的信号有：BK,SK,BP,SP,BPK,SPK,CLOSEOUT,STOP
3、如果当根K线上有固定的Sig信号，那么该函数计算信号时，包括当根K线的信号。
4、如果信号发出了委托，但还未成交时，该函数返回空值。
5、如果信号发出了委托，部分成交时，该函数返回部分成交价。
6、如果反手信号SPK、BPK发出了委托，在开仓委托全部成交后，则该函数返回开仓成交均价。
7、N为0或空值时，该函数返回空值。
8、参数N支持变量。

例：
REFSIG_PRICE2(BK,3)=3000&&BKVOL>0,SP;//如果从当根K线开始倒数第3个固定的BK信号的成交价位为3000，并且多头持仓大于0，卖平仓
`;

const REFSIG_VOL = new MySymbol();
REFSIG_VOL.label = "REFSIG_VOL";
REFSIG_VOL.description = "判断指定信号的手数";
REFSIG_VOL.insertText = "";
REFSIG_VOL.body = "REFSIG_VOL( , )";
REFSIG_VOL.kind = MySymbolKind.Function;
REFSIG_VOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
REFSIG_VOL.functionType = MyFunctionType.SignalLoggingFunction;
REFSIG_VOL.returnType = MyFunctionReturnType.None;
REFSIG_VOL.parameters = MySymbol.createParametersFromStrings([]);
REFSIG_VOL.detail = "判断指定信号的手数";
REFSIG_VOL.documentation = `
REFSIG_VOL(Sig,N)返回从当根K线开始倒数第N个固定的Sig信号的信号手数(反手指令取开仓手数)
REFSIG_VOL(Sig,N) 返回从当根K线开始倒数第N个固定的Sig信号的信号手数(反手指令取开仓手数)。

用法：REFSIG_VOL(Sig,N) 判断从当根K线开始倒数第N个固定的Sig信号的手数。如果没有Sig信号，或者没有固定的Sig信号，则该函数返回0。

注：
1、Sig位置支持的信号有：BK,SK,BP,SP,BPK,SPK,CLOSEOUT,STOP
2、如果倒数第N个固定的Sig信号在当根K线上，那么该函数返回当前信号手数。
4、N为0或空值时，该函数返回0。
5、参数N支持变量。

例：
REFSIG_PLACE(BK,3)=5&&REFSIG_VOL(BK,3)>2,SP(BKVOL);//如果从当根K线开始倒数第3个固定的BK信号所在的距离当前K线有5根K线，并且信号手数大于2，平掉所有持仓
`;

const REFWH = new MySymbol();
REFWH.label = "REFWH";
REFWH.description = "向前引用";
REFWH.insertText = "";
REFWH.body = "REFWH( , )";
REFWH.kind = MySymbolKind.Function;
REFWH.marketType = MyMarketType.BasicFunction;
REFWH.functionType = MyFunctionType.CandlestickDataReference;
REFWH.returnType = MyFunctionReturnType.None;
REFWH.parameters = MySymbol.createParametersFromStrings([]);
REFWH.detail = "向前引用";
REFWH.documentation = `
REFWH(X,N),取X在N个周期前的值
引用N周期前的数据。

用法：
REFWH(X,N)引用X在N个周期前的值。
1、当N为有效值，但当前的k线数不足N根，按照实际的根数计算；
2、N为0时返回当前X值；
3、N为空值时返回空值。
4、N可以为变量
注：
算法跟REF一样，区别在于：在不足N根的时候，按照实际的根数计算；
`;

const REVERSE = new MySymbol();
REVERSE.label = "REVERSE";
REVERSE.description = "取相反值";
REVERSE.insertText = "";
REVERSE.body = "REVERSE( )";
REVERSE.kind = MySymbolKind.Function;
REVERSE.marketType = MyMarketType.BasicFunction;
REVERSE.functionType = MyFunctionType.MathFunction;
REVERSE.returnType = MyFunctionReturnType.None;
REVERSE.parameters = MySymbol.createParametersFromStrings([]);
REVERSE.detail = "取相反值";
REVERSE.documentation = `
REVERSE(X)，取－X
REVERSE(X)：取相反值，返回－X。

例1：
REVERSE(LOW);//返回-LOW。
例2：
REVERSE(-55);//返回值为55
例3：
REVERSE(0);//返回值为0
`;

const ROUND = new MySymbol();
ROUND.label = "ROUND";
ROUND.description = "指定位数四舍五入";
ROUND.insertText = "";
ROUND.body = "ROUND( , )";
ROUND.kind = MySymbolKind.Function;
ROUND.marketType = MyMarketType.BasicFunction;
ROUND.functionType = MyFunctionType.MathFunction;
ROUND.returnType = MyFunctionReturnType.None;
ROUND.parameters = MySymbol.createParametersFromStrings([]);
ROUND.detail = "指定位数四舍五入";
ROUND.documentation = `
ROUND(N,M),对N指定M位小数进行四舍五入
ROUND(N,M) 对数字N进行位数为M的四舍五入。

注：
1、N支持写为变量和参数；M不支持写为变量，可以写为参数。
2、M>0，则对数字N小数点后M位小数进行四舍五入。
3、M=0，则将数字N四舍五入为整数。
4、M<0，则在数字N小数点左侧前M位进行四舍五入。

例1：
ROUND(125.345,2);//返回125.35。
例2：
ROUND(125.345,0);//返回125。
例3：
ROUND(125.345,-1);//返回130
`;

const SAR = new MySymbol();
SAR.label = "SAR";
SAR.description = "抛物转向";
SAR.insertText = "";
SAR.body = "SAR( , , )";
SAR.kind = MySymbolKind.Function;
SAR.marketType = MyMarketType.BasicFunction;
SAR.functionType = MyFunctionType.FinancialStatisticsFunction;
SAR.returnType = MyFunctionReturnType.None;
SAR.parameters = MySymbol.createParametersFromStrings([]);
SAR.detail = "抛物转向";
SAR.documentation = `
SAR(N,Step,Max)，取抛物转向值N为周期数，Step为步长，Max为极值
SAR(N,STEP,MAX) 返回抛物转向值。

根据公式SAR(n)=SAR(n-1)+AF*(EP(n-1)-SAR(n-1))计算 

其中： 
SAR(n-1)：上根K线SAR的绝对值 
AF：加速因子，当AF小于MAX时，逐根的通过AF+STEP累加，涨跌发生转换时，AF重新计算 
EP：一个涨跌内的极值，在上涨行情中为上根K线的最高价；下跌行情中为上根K线的最低价 

注：
1、参数N,Step,Max均不支持变量

例1：
SAR(17,0.03,0.3);//表示计算17个周期抛物转向，步长为3%，极限值为30%

例2：
STEP1:=2/100;
MVALUE1:=20/100;
SARLINE:SAR(4,STEP1,MVALUE1),NODRAW;
IF(SARLINE>0,SARLINE,NULL),CIRCLEDOT,COLORRED,NOTEXT;//SARLINE>0画红色小圆点线
IF(SARLINE>0,NULL,ABS(SARLINE)),CIRCLEDOT,COLORCYAN,NOTEXT;//SARLINE不大于0画绿色小圆点线
`;

const SAR1 = new MySymbol();
SAR1.label = "SAR1";
SAR1.description = "抛物转向";
SAR1.insertText = "";
SAR1.body = "SAR1( , , )";
SAR1.kind = MySymbolKind.Function;
SAR1.marketType = MyMarketType.BasicFunction;
SAR1.functionType = MyFunctionType.FinancialStatisticsFunction;
SAR1.returnType = MyFunctionReturnType.None;
SAR1.parameters = MySymbol.createParametersFromStrings([]);
SAR1.detail = "抛物转向";
SAR1.documentation = `
SAR1(N,Step,Max)，取抛物转向值N为周期数，Step为步长，Max为极值
SAR1(N,STEP,MAX) 返回抛物转向值。

根据公式SAR1(n)=SAR1(n-1)+AF*(EP(n-1)-SAR1(n-1))计算 

其中： 
SAR1(n-1)：上根K线SAR1的绝对值 

AF：加速因子，当AF小于MAX时，
上涨行情，H>HV(H,N)   AF = AF+STEP; H<=HV(H,N) AF = AF;
下跌行情，L<lV(L,N)   AF = AF+STEP; L>=LV(L,N) AF = AF;
涨跌发生转换时，AF重新计算 
EP：一个涨跌内的极值，在上涨行情中为前N根K线的最高价；下跌行情中为前N根K线的最低价 

注：
1、参数N,Step,Max均不支持变量

例1：
SAR1(17,0.03,0.3);//表示计算17个周期抛物转向，步长为3%，极限值为30%

例2：
STEP1:=2/100;
MVALUE1:=2/10;
SARLINE:SAR1(4,STEP1,MVALUE1),NODRAW;
IF(SARLINE>0,SARLINE,NULL),CIRCLEDOT,COLORRED,NOTEXT;//SARLINE>0画红色小圆点线
IF(SARLINE>0,NULL,ABS(SARLINE)),CIRCLEDOT,COLORCYAN,NOTEXT;//SARLINE不大于0画绿色小圆点线
`;

const SCALE = new MySymbol();
SCALE.label = "SCALE";
SCALE.description = "取得K线图主动买占总成交量的比例";
SCALE.insertText = "";
SCALE.body = "SCALE";
SCALE.kind = MySymbolKind.Function;
SCALE.marketType = MyMarketType.BasicFunction;
SCALE.functionType = MyFunctionType.CandlestickDataReference;
SCALE.returnType = MyFunctionReturnType.None;
SCALE.parameters = MySymbol.createParametersFromStrings([]);
SCALE.detail = "取得K线图主动买占总成交量的比例";
SCALE.documentation = `
SCALE返回主动买占总成交量的比例
SCALE 取得K线图主动买占总成交量的比例。

注：
指数没有主动买和主动卖的概念，所以该函数在指数合约日线周期的比例是根据该指数的所有合约计算的；并且指数合约日线以下周期不支持该函数。
例1：
AA:=SCALE*VOL;//主动买
BB:=(1-SCALE)*VOL;//主动卖
`;

const SEEK = new MySymbol();
SEEK.label = "SEEK";
SEEK.description = "标签统计函数";
SEEK.insertText = "";
SEEK.body = "Seek";
SEEK.kind = MySymbolKind.Function;
SEEK.marketType = MyMarketType.TPlusZeroStrategyFunction;
SEEK.functionType = MyFunctionType.FinancialStatisticsFunction;
SEEK.returnType = MyFunctionReturnType.None;
SEEK.parameters = MySymbol.createParametersFromStrings([]);
SEEK.detail = "标签统计函数";
SEEK.documentation = `
SEEK(Cond)标签统计函数Cond为需要满足的条件
SEEK 标签统计函数
此函数为系统封装函数。

用法：
SEEK(Cond) 标签统计函数
Cond为需要满足的条件

注：
1、图表中加载了含有SEEK函数的模型，可以图表右键选择SEEK统计查看结果
2、一个模型中只能含有一个SEEK函数。
3、一个图表中只能加载一个含有SEEK函数的模型。

例：
SEEK(C>O);
`;

const SELECT = new MySymbol();
SELECT.label = "SELECT";
SELECT.description = "公式选股";
SELECT.insertText = "";
SELECT.body = "SELECT";
SELECT.kind = MySymbolKind.Function;
SELECT.marketType = MyMarketType.StockSelectionFunction;
SELECT.functionType = MyFunctionType.FormulaBasedSelection;
SELECT.returnType = MyFunctionReturnType.None;
SELECT.parameters = MySymbol.createParametersFromStrings([]);
SELECT.detail = "公式选股";
SELECT.documentation = `
SELECT公式选股
SELECT 公式选股

用法：
COND,SELECT;
用SELECT进行公式选股，选出最后一根K线满足条件的合约。COND为选股条件
SELECT函数支持公式选股、选股回测

如有多个选股条件，例如：
COND1,SELECT;
COND2,SELECT;
则选出最后一根K线满足COND1条件或COND2条件的合约

注：
1、SELECT函数不能与未来函数一起使用。
2、SELECT函数不能与跨合约、跨周期函数一起使用。

例：
FINANCE_DATA('每股收益')>0,SELECT;//选出每股收益大于0的股票
`;

const SETDEALPERCENT = new MySymbol();
SETDEALPERCENT.label = "SETDEALPERCENT";
SETDEALPERCENT.description = "按理论资金比例下单";
SETDEALPERCENT.insertText = "";
SETDEALPERCENT.body = "SETDEALPERCENT";
SETDEALPERCENT.kind = MySymbolKind.Function;
SETDEALPERCENT.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETDEALPERCENT.functionType =
    MyFunctionType.PositionManagementFunction;
SETDEALPERCENT.returnType = MyFunctionReturnType.None;
SETDEALPERCENT.parameters = MySymbol.createParametersFromStrings([]);
SETDEALPERCENT.detail = "按理论资金比例下单";
SETDEALPERCENT.documentation = `
SETDEALPERCENT(fPercent,N)，每次按当前理论资金的fPercent比例下单，且最大为N手。
SETDEALPERCENT  按理论资金比例下单

用法：
SETDEALPERCENT(fPercent,N)：每次按当前理论资金的fPercent比例下单，且最大为N手。

注：
1、fPercent比例可下单手数=（前期可用资金+平仓释放的保证金+平仓盈亏）*fPercent/（最新价*保证金比例*交易单位）
2、fPercent取值范围1-100的整数，并且支持变量，如果fPercent为小数，向下取整，取整数部分参与计算
3、当N<=fPercent比例可下单手数时，取N作为下单手数
；参数N写为0或者缺省，表示不设置最大下单手数
4、SETDEALPERCENT计算出的下单手数非整数时，遵循自动向下取整的规则；如果手数小于1，不进行开仓操作
5、SETDEALPERCENT只作用于开仓指令，不作用于平仓指令。含有该函数的过滤模型，平仓信号默认全平
6、加减仓模型中如果写了该函数，则开仓按照该函数设置的资金比例下单，默认下单手数及信号后写入的手数均无效；平仓信号按照信号后写入的手数进行下单
7、模组中用单元参数中设置的初始资金、保证金比例计算下单手数
8、历史回测用回测参数中设置的初始资金、保证金比例计算下单手数

例：
SETDEALPERCENT(20,10); //每次按理论资金比例的20%下单，并设置最大下单手数阈值为10手
`;

const SETEXPIREDATE = new MySymbol();
SETEXPIREDATE.label = "SETEXPIREDATE";
SETEXPIREDATE.description = "设置加密模型的使用有效期的到期时间";
SETEXPIREDATE.insertText = "";
SETEXPIREDATE.body = "SETEXPIREDATE()";
SETEXPIREDATE.kind = MySymbolKind.Function;
SETEXPIREDATE.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETEXPIREDATE.functionType = MyFunctionType.EncryptionOutputFunction;
SETEXPIREDATE.returnType = MyFunctionReturnType.None;
SETEXPIREDATE.parameters = MySymbol.createParametersFromStrings([]);
SETEXPIREDATE.detail = "设置加密模型的使用有效期的到期时间";
SETEXPIREDATE.documentation = `
SETEXPIREDATE('yyyymmdd')设置加密模型的使用有效期的到期时间
SETEXPIREDATE 设置加密模型的使用有效期的到期时间。

用法：SETEXPIREDATE('yyyymmdd'); 设置加密模型的使用有效期的到期时间为yyyymmdd。

注：
1、写入该函数的模型加密输出后，只有在写入的日期前是有效的。
2、参数位置写入的日期格式必须为八位数，即必须为yyyymmdd的形式。
3、如果不写入该函数，默认没有到期日期，一直有效。
4、该函数只对输出的可执行副本起作用。

例：
C>REF(H,1),BK;//价格大于上一根k线最高价，开多仓
C<BKPRICE-3*MINPRICE,SP;//亏损3点止损
MULTSIG(0,0,3,0);//设置信号复核确认方式为出信号立即下单，不复核。一根K线上最大信号个数为3
SETEXPIREDATE('20141001');//该加密模型的使用有效期的到期时间为2014年10月1日
AUTOFILTER;
`;

const SETMOVEOPIPRICE = new MySymbol();
SETMOVEOPIPRICE.label = "SETMOVEOPIPRICE";
SETMOVEOPIPRICE.description = "设置模组换月移仓的委托方式";
SETMOVEOPIPRICE.insertText = "";
SETMOVEOPIPRICE.body = "SETMOVEOPIPRICE()";
SETMOVEOPIPRICE.kind = MySymbolKind.Function;
SETMOVEOPIPRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETMOVEOPIPRICE.functionType = MyFunctionType.SignalExecutionFunction;
SETMOVEOPIPRICE.returnType = MyFunctionReturnType.None;
SETMOVEOPIPRICE.parameters = MySymbol.createParametersFromStrings([]);
SETMOVEOPIPRICE.detail = "设置模组换月移仓的委托方式";
SETMOVEOPIPRICE.documentation = `
SETMOVEOPIPRICE(PRICE),设置模组换月移仓的委托方式，PRICE为价格方式
SETMOVEOPIPRICE(PRICE),设置模组换月移仓的委托方式。

用法：SETMOVEOPIPRICE(PRICE)，模组中如果设置为自动换月移仓，则主力合约切换时以PRICE的委托方式进行移仓。

注：
1、PRICE位置可以填写以下五种委托方式：
（1）NEW_ORDER 最新价
（2）PASSIVE_ORDER 排队价
（3）ACTIVE_ORDER 对价
（4）CMPETITV_ORDER 超价
超价参数在下单主界面-参数设置-超价参数中设置
（5）LIMIT_ORDER 市价
2、模型中未使用该函数设置换月移仓委托价格方式，换月移仓平旧的主力合约，开新主力合约均按照市价委托。
3、模型中使用该函数设置换月移仓委托价格方式，换月移仓平旧的主力合约按市价委托，SETMOVEOPIPRICE(PRICE) 只对移仓开仓委托有效。
4、该函数只在模组中生效。

例：
C>HV(H,20),BPK;//价格大于前20周期高点平空反手做多
C<LV(L,20),SPK;//价格小于前20周期低点是平多反手做空
TRADE_OTHER('AUTO');//加载到主连合约上，主力换月时自动进行移仓
SETMOVEOPIPRICE(ACTIVE_ORDER);//主力合约切换时，以对价方式进行移仓
AUTOFILTER;
`;

const SETQUOTACCOUNT = new MySymbol();
SETQUOTACCOUNT.label = "SETQUOTACCOUNT";
SETQUOTACCOUNT.description = "设置模型加密输出使用者的文华行情账号";
SETQUOTACCOUNT.insertText = "";
SETQUOTACCOUNT.body = "SETQUOTACCOUNT()";
SETQUOTACCOUNT.kind = MySymbolKind.Function;
SETQUOTACCOUNT.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETQUOTACCOUNT.functionType = MyFunctionType.EncryptionOutputFunction;
SETQUOTACCOUNT.returnType = MyFunctionReturnType.None;
SETQUOTACCOUNT.parameters = MySymbol.createParametersFromStrings([]);
SETQUOTACCOUNT.detail = "设置模型加密输出使用者的文华行情账号";
SETQUOTACCOUNT.documentation = `
SETQUOTACCOUNT('ACCOUNT1')设置模型加密输出使用者的文华行情账号
SETQUOTACCOUNT 设置模型加密输出使用者的文华行情账号。

用法：SETQUOTACCOUNT('ACCOUNT1'); 设置该模型加密输出给文华行情账号为ACCOUNT1的使用者。

注：
1、写入该函数的模型加密输出后，需要登录该函数指定的行情账号才可以使用。
2、如果不写入该函数，则任何账号登录后都可以使用加密输出的模型。
3、该函数支持加密输出给对多个行情账号使用，即支持SETQUOTACCOUNT('ACCOUNT1', 'ACCOUNT2');这样的写法，最大支持50个参数
4、模型中支持同时写入SETTRADEACCOUNT和SETQUOTACCOUNT函数，即支持同时设置授权的行情账号和资金账号。
5、该函数只对输出的可执行副本起作用。

例：
C>REF(H,1),BK;//价格大于上一根k线最高价，开多仓
C<BKPRICE-3*MINPRICE,SP;//亏损3点止损
MULTSIG(0,0,3,0);//设置信号复核确认方式为出信号立即下单，不复核。一根K线上最大信号个数为3
SETQUOTACCOUNT('ACCOUNT1');//将该模型加密输出给文华行情账号为ACCOUNT1的使用者。
AUTOFILTER;
`;

const SETSIGPRICE = new MySymbol();
SETSIGPRICE.label = "SETSIGPRICE";
SETSIGPRICE.description = "指定信号的下单价格";
SETSIGPRICE.insertText = "";
SETSIGPRICE.body = "SETSIGPRICE( , )";
SETSIGPRICE.kind = MySymbolKind.Function;
SETSIGPRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETSIGPRICE.functionType = MyFunctionType.SignalExecutionFunction;
SETSIGPRICE.returnType = MyFunctionReturnType.None;
SETSIGPRICE.parameters = MySymbol.createParametersFromStrings([]);
SETSIGPRICE.detail = "指定信号的下单价格";
SETSIGPRICE.documentation = `
SETSIGPRICE(SIG,PRICE),设置SIG指令的下单价格，PRICE为下单价格。
SETSIGPRICE(SIG,PRICE),指定信号的下单价格

用法：
SETSIGPRICE(SIG,PRICE),设置SIG指令的下单委托价格，PRICE为委托价格。

注：
1、SIG位置为交易指令，包括BK\\SK\\BP\\SP\\BPK\\SPK 六种指令。
2、PRICE位置为下单价格，包括以下五种：
（1）CUR_CLOSE 当根收盘价
（2）NEXT_OPEN 下根开盘价
（3）MAX_CLOSE_NEXT_OPEN 收盘价和开盘价二者较大值
（4）MIN_CLOSE_NEXT_OPEN 收盘价和开盘价二者较小值
（5）指定价 可以为具体的数值，也可以为表达式，即支持如下的写法：
A:HHV(H,3);//定义A为3个周期内的最高价
SETSIGPRICE(BK,A);//BK信号按照3个周期的最高价委托
3、该函数支持回测。
4、该函数用于指令价模型，委托价格只能设置为指定价。
5、模型中未设置指令委托价格和委托方式时，按照下单主界面-参数设置-程序化参数中的设置进行委托。

例：
C>HV(H,20),BK;//价格大于前20周期高点买开仓
C<LV(L,20),SK;//价格小于前20周期低点卖开仓
C>HV(H,10),BP;//价格大于前10周期高点平空仓
C<LV(L,10),SP;//价格小于前10周期低点平多仓
SETSIGPRICE(BK,CUR_CLOSE);//买开的委托以当根收盘价委托
SETSIGPRICE(SK,NEXT_OPEN);//卖开的委托以下根开盘价委托
SETSIGPRICE(BP,MAX_CLOSE_NEXT_OPEN);//买平的委托以收盘价和开盘价二者较大值委托
SETSIGPRICE(SP,MIN_CLOSE_NEXT_OPEN);//卖平的委托以收盘价和开盘价二者较小值委托
AUTOFILTER;


`;

const SETSIGPRICETYPE = new MySymbol();
SETSIGPRICETYPE.label = "SETSIGPRICETYPE";
SETSIGPRICETYPE.description = "设置信号的委托价格方式";
SETSIGPRICETYPE.insertText = "";
SETSIGPRICETYPE.body = "SETSIGPRICETYPE( , , )";
SETSIGPRICETYPE.kind = MySymbolKind.Function;
SETSIGPRICETYPE.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETSIGPRICETYPE.functionType = MyFunctionType.SignalExecutionFunction;
SETSIGPRICETYPE.returnType = MyFunctionReturnType.None;
SETSIGPRICETYPE.parameters = MySymbol.createParametersFromStrings([]);
SETSIGPRICETYPE.detail = "设置信号的委托价格方式";
SETSIGPRICETYPE.documentation = `
SETSIGPRICETYPE(SIG,PRICE,IsCancel),设置SIG指令的委托价格方式，PRICE为委托价格方式，IsCancel为是否启用终止下单。
SETSIGPRICETYPE(SIG,PRICE,IsCancel),设置信号的委托价格方式

用法：SETSIGPRICETYPE(SIG,PRICE,IsCancel),设置SIG指令的委托价格方式，PRICE为委托价格方式，IsCancel为是否启用终止下单。

注：
1、SIG位置为交易指令，包括BK\\SK\\BP\\SP\\BPK\\SPK六种指令。
2、PRICE位置为委托价格方式，包括以下六种：
（1）NEW_ORDER 最新价
（2）PASSIVE_ORDER 排队价
（3）ACTIVE_ORDER 对价
（4）CMPETITV_ORDER 超价
超价参数在下单主界面-参数设置-超价参数中设置
（5）LIMIT_ORDER 市价
（6）SIGPRICE_ORDER 触发价
3、IsCance位置写入参数CANCEL_ORDER表示启用终止下单，不写则表示不启用。
启用终止下单时，根据PRICE设置价格委托后，N秒不成交对该笔委托自动撤单并终止下单
启用终止下单时，PRICE位置委托价格必须编写设置，不能缺省
例：SETSIGPRICETYPE(BK,NEW_ORDER,CANCEL_ORDER); //BK指令以最新价委托，设置N秒不成交终止下单
注：
（1）参数N秒，在下单主界面-参数设置-程序化参数中进行设置。
（2）终止下单不考虑小节休息。
（3）BP、SP、BPK、SPK信号不支持CANCEL_ORDER设置。
4、在进行历史回测时
A：收盘价模型回测，信号价格为信号所在K线的收盘价。
B：指令价模型回测，信号价格为出现信号时的最新价。
5、模型中未设置指令委托价格和委托方式时，按照下单主界面-参数设置-程序化参数中的设置进行委托。
6、因信号消失产生的指令用市价委托。

例：
C>HV(H,20),BK;//价格大于前20周期高点买开仓
C<LV(L,20),SK;//价格小于前20周期低点卖开仓
C>HV(H,10),BP;//价格大于前10周期高点平空仓
C<LV(L,10),SP;//价格小于前10周期低点平多仓
SETSIGPRICETYPE(BK,SIGPRICE_ORDER,CANCEL_ORDER);//买开的委托以触发价委托，启用中止下单
SETSIGPRICETYPE(SK,PASSIVE_ORDER);//卖开的委托以排队价委托
SETSIGPRICETYPE(BP,ACTIVE_ORDER);//买平的委托以对价委托
SETSIGPRICETYPE(SP,CMPETITV_ORDER);//卖平的委托以超价委托
AUTOFILTER;
`;

const SETSTYLECOLOR = new MySymbol();
SETSTYLECOLOR.label = "SETSTYLECOLOR";
SETSTYLECOLOR.description = "线型的粗细和颜色控制";
SETSTYLECOLOR.insertText = "";
SETSTYLECOLOR.body = "SETSTYLECOLOR( , )";
SETSTYLECOLOR.kind = MySymbolKind.Function;
SETSTYLECOLOR.marketType = MyMarketType.BasicFunction;
SETSTYLECOLOR.functionType = MyFunctionType.DrawingFunction;
SETSTYLECOLOR.returnType = MyFunctionReturnType.None;
SETSTYLECOLOR.parameters = MySymbol.createParametersFromStrings([]);
SETSTYLECOLOR.detail = "线型的粗细和颜色控制";
SETSTYLECOLOR.documentation = `
SETSTYLECOLOR(LINETHICK,COLOR);设置线型的粗细和颜色LINETHICK表示线形的粗细，可以使用LINETHICK1——LINETHICK7；COLOR为颜色
SETSTYLECOLOR函数 设置线型的粗细和颜色。

用法：
SETSTYLECOLOR(STYLE,COLOR);

注：
1、参数STYLE可以使用LINETHICK1——LINETHICK7,数值越大，线型越粗;
2、参数STYLE可以使用DOT,设置线形为虚线。
3、参数STYLE可以使用NODRAW，不画线只显示数值
4、参数COLOR可以使用插入颜色中的所有颜色和颜色函数。(如:COLORRED或RGB(255,255,0));
5、不支持将该函数直接定义为变量，即不支持下面的写法：A:SETSTYLECOLOR(LINETHICK5,COLORGREEN);

例1：
A:C,SETSTYLECOLOR(LINETHICK5,COLORGREEN);//以绿色LINETHICK5的粗细大小画收盘价连线。
`;

const SETTLE = new MySymbol();
SETTLE.label = "SETTLE";
SETTLE.description = "取得K线图的结算价或者取得当日成交均价";
SETTLE.insertText = "";
SETTLE.body = "SETTLE";
SETTLE.kind = MySymbolKind.Function;
SETTLE.marketType = MyMarketType.BasicFunction;
SETTLE.functionType = MyFunctionType.CandlestickDataReference;
SETTLE.returnType = MyFunctionReturnType.None;
SETTLE.parameters = MySymbol.createParametersFromStrings([]);
SETTLE.detail = "取得K线图的结算价或者取得当日成交均价";
SETTLE.documentation = `
SETTLE求到某根k线的结算价
SETTLE 取得K线图的结算价或者取得当日成交均价

注：
1、日线周期，盘中返回的是全天成交均价；收盘后返回交易所公布的结算价。
2、分钟周期，返回的是截止到当前k线的全天成交均价。

例1：
SS:SETTLE;//定义SS为结算价
例2：
CROSS(C,SETTLE);//收盘价上穿结算价
`;

const SETTRADEACCOUNT = new MySymbol();
SETTRADEACCOUNT.label = "SETTRADEACCOUNT";
SETTRADEACCOUNT.description = "设置模型加密输出使用者交易的资金账号";
SETTRADEACCOUNT.insertText = "";
SETTRADEACCOUNT.body = "SETTRADEACCOUNT()";
SETTRADEACCOUNT.kind = MySymbolKind.Function;
SETTRADEACCOUNT.marketType = MyMarketType.TPlusZeroStrategyFunction;
SETTRADEACCOUNT.functionType =
    MyFunctionType.EncryptionOutputFunction;
SETTRADEACCOUNT.returnType = MyFunctionReturnType.None;
SETTRADEACCOUNT.parameters = MySymbol.createParametersFromStrings([]);
SETTRADEACCOUNT.detail = "设置模型加密输出使用者交易的资金账号";
SETTRADEACCOUNT.documentation = `
SETTRADEACCOUNT('ACCOUNT1')设置模型加密输出使用者交易的资金账号
SETTRADEACCOUNT 设置模型加密输出使用者交易的资金账号。

用法：SETTRADEACCOUNT('ACCOUNT1'); 设置该模型加密输出给交易资金账号为ACCOUNT1的使用者。

注：
1、写入该函数的模型加密输出后，需要登录该函数指定的资金账号才可以使用。
2、如果不写入该函数，则任何账号登录后都可以使用加密输出的模型。
3、该函数支持加密输出给对多个资金账号使用，即支持SETTRADEACCOUNT('ACCOUNT1', 'ACCOUNT2');这样的写法，最大支持50个参数
4、模型中支持同时写入SETTRADEACCOUNT和SETQUOTACCOUNT函数，即支持同时设置授权的行情账号和资金账号。
5、该函数只对输出的可执行副本起作用。

例：
C>REF(H,1),BK;//价格大于上一根k线最高价，开多仓
C<BKPRICE-3*MINPRICE,SP;//亏损3点止损
MULTSIG(0,0,3,0);//设置信号复核确认方式为出信号立即下单，不复核。一根K线上最大信号个数为3
SETTRADEACCOUNT('ACCOUNT1');//将该模型加密输出给交易资金账号为ACCOUNT1的使用者。
AUTOFILTER;
`;

const SGN = new MySymbol();
SGN.label = "SGN";
SGN.description = "取符号";
SGN.insertText = "";
SGN.body = "SGN( )";
SGN.kind = MySymbolKind.Function;
SGN.marketType = MyMarketType.BasicFunction;
SGN.functionType = MyFunctionType.MathFunction;
SGN.returnType = MyFunctionReturnType.None;
SGN.parameters = MySymbol.createParametersFromStrings([]);
SGN.detail = "取符号";
SGN.documentation = `
SGN(X)，判断X正负数（若X>0返回1,若X<0返回-1,否则返回0）
SGN(X)：取符号。若X>0返回1,若X<0返回-1,否则返回0。

例1：
SGN(5);//返回值为1
例2：
SGN(-5);//返回值为-1
例3：
SGN(0);//返回值为0
`;

const SIGNUM = new MySymbol();
SIGNUM.label = "SIGNUM";
SIGNUM.description = "定位一次交易过程中的信号位置";
SIGNUM.insertText = "";
SIGNUM.body = "SIGNUM";
SIGNUM.kind = MySymbolKind.Function;
SIGNUM.marketType = MyMarketType.TPlusZeroStrategyFunction;
SIGNUM.functionType = MyFunctionType.SignalLoggingFunction;
SIGNUM.returnType = MyFunctionReturnType.None;
SIGNUM.parameters = MySymbol.createParametersFromStrings([]);
SIGNUM.detail = "定位一次交易过程中的信号位置";
SIGNUM.documentation = `
SIGNUM，返回值为当前信号为一次交易过程中的第几个信号
SIGNUM，返回值为当前信号为一次交易过程中的第几个信号

注：
1、一次交易过程指的是首次开仓到持仓为0的交易过程
2、如果信号为反手信号，则该函数返回值为1

例1：
C>O,BK(1);
SIGNUM>3&&C<O,SP(BKVOL);//如果本次交易前面已经出现大于3个信号，K线为阴线，全部平仓
SIGNUM<=3&&C<O,SP(BKVOL/2);//如果本次交易前面已经出现小于等于3个信号，K线为阴线，平仓一半
TRADE_AGAIN(4);
`;

const SIGVOL = new MySymbol();
SIGVOL.label = "SIGVOL";
SIGVOL.description = "一次交易中指定信号的下单手数";
SIGVOL.insertText = "";
SIGVOL.body = "SIGVOL()";
SIGVOL.kind = MySymbolKind.Function;
SIGVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
SIGVOL.functionType = MyFunctionType.SignalLoggingFunction;
SIGVOL.returnType = MyFunctionReturnType.None;
SIGVOL.parameters = MySymbol.createParametersFromStrings([]);
SIGVOL.detail = "一次交易中指定信号的下单手数";
SIGVOL.documentation = `
SIGVOL(N),返回一次交易中第N个信号的下单手数
SIGVOL(N),返回一次交易中第N个信号的下单手数。

注：
1、一次交易过程指的是首次开仓到持仓为0的交易过程
2、在一次交易中，当前位置信号不足N个时，该函数返回无效值

例1：
TR:=MAX(MAX((HIGH-LOW),ABS(REF(CLOSE,1)-HIGH)),ABS(REF(CLOSE,1)-LOW));//真实波幅
ATR..MA(TR,26); //求26个周期内真实波幅的简单移动平均
TC..INTPART((MONEYTOT*0.01/(UNIT*ATR)));//根据权益的1%计算下单手数
HH:=HHV(H,20);
LL:=LLV(L,20);
MID:=(HH +LL)/2;
CROSSUP(C,HH),BK(TC);
SIGVOL(1)<12&&CROSSDOWN(C,MID),SP(BKVOL);//如果首次开仓手数小于12手，下穿中轨，全部平仓
SIGVOL(1)>12&&CROSSDOWN(C,MID),SP(BKVOL/2);//如果首次开仓手数大于12手，下穿中轨，平仓一半
CROSSDOWN(C,LL),SP(BKVOL);
TRADE_AGAIN(10);
`;

const SIN = new MySymbol();
SIN.label = "SIN";
SIN.description = "求正弦";
SIN.insertText = "";
SIN.body = "SIN( )";
SIN.kind = MySymbolKind.Function;
SIN.marketType = MyMarketType.BasicFunction;
SIN.functionType = MyFunctionType.MathFunction;
SIN.returnType = MyFunctionReturnType.None;
SIN.parameters = MySymbol.createParametersFromStrings([]);
SIN.detail = "求正弦";
SIN.documentation = `
SIN(X)，求X的正弦值
SIN(X)：求X的正弦值。

注：
1、X的取值为R（实数集）；
2、值域为(-1，1)。

例1：
SIN(-1.57);//返回-1.57的正弦值
例2：
SIN(1.57);//返回1.57的正弦值
`;

const SKEWNESS = new MySymbol();
SKEWNESS.label = "SKEWNESS";
SKEWNESS.description = "偏度系数";
SKEWNESS.insertText = "";
SKEWNESS.body = "SKEWNESS( , )";
SKEWNESS.kind = MySymbolKind.Function;
SKEWNESS.marketType = MyMarketType.BasicFunction;
SKEWNESS.functionType = MyFunctionType.MathematicalStatisticsFunction;
SKEWNESS.returnType = MyFunctionReturnType.None;
SKEWNESS.parameters = MySymbol.createParametersFromStrings([]);
SKEWNESS.detail = "偏度系数";
SKEWNESS.documentation = `
SKEWNESS(X,N)求X在N个周期内的偏度系数
SKEWNESS(X,N) 求X在N个周期内的偏度系数。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值。
3、N为0时，该函数返回空值。
4、N为空值，该函数返回空值。
5、N可以为变量。
6、N至少为3，少于3返回空值。

算法举例：计算SKEWNESS(C,3);在最近一根K线上的值。
用麦语言函数可以表示如下：
((POW(C-MA(C,3),3)+POW(REF(C,1)-MA(C,3),3)+POW(REF(C,2)-MA(C,3),3)) /POW(STD(C,3),3))*3/((3-1)*(3-2));

例：
SKEWNESS(C,10);
//表示收盘价的10周期偏度。偏度反映分布的不对称度。不对称度反映以平均值为中心的分布的不对称程度。正不对称度表示不对称部分的分布更趋向正值。负不对称度表示不对称部分的分布更趋向负值。
`;

const SKHIGH = new MySymbol();
SKHIGH.label = "SKHIGH";
SKHIGH.description = "返回数据合约卖开仓以来的最高价";
SKHIGH.insertText = "";
SKHIGH.body = "SKHIGH";
SKHIGH.kind = MySymbolKind.Function;
SKHIGH.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKHIGH.functionType = MyFunctionType.SignalLoggingFunction;
SKHIGH.returnType = MyFunctionReturnType.None;
SKHIGH.parameters = MySymbol.createParametersFromStrings([]);
SKHIGH.detail = "返回数据合约卖开仓以来的最高价";
SKHIGH.documentation = `
SKHIGH,返回数据合约卖开仓以来的最高价
返回数据合约卖开仓以来的最高价
用法：
SKHIGH返回数据合约最近一次模型卖开位置到当前的最高价。
1、不同信号执行方式，其返回值分别为：
（1）K线走完确认信号下单
  a.历史信号计算中，SK(SPK)信号之后的K线返回委托以来的数据合约行情的最高价
  b.加载运行过程中，SK(SPK)信号当根K线返回上个SK(SPK)信号发出以来的数据合约行情最高价，SK之后的K线返回委托以来的数据合约行情最高价
（2）信号执行方式选择K线走完复核（例如：在模型中写入CHECKSIG(SK,'A',0,'D',0,0);）
从SK(SPK)信号发出时开始统计数据合约行情的最高价；信号消失，返回上次卖开以来的数据合约行情的最高价，信号确认存在，返回当根K线记录的数据合约行情的最高价
注：SK信号发出后，中间出了信号消失，从最后一次信号出现开始统计数据合约最高价
（3）信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
SK(SPK)信号的当根K线返回的从信号发出到K线走完时数据合约行情的最高价；SK(SPK)信号之后的K线返回信号发出以来数据合约行情的最高价。
2、主连合约使用换月移仓函数，主力合约切换后，从新的主力合约第一根K线开盘价重新开始统计
3、模组重新初始化后，数据合约和交易合约相同，则SKHIGH返回初始化后的最高价与初始化弹出框中填入的持仓价相比较后较大的数值；数据合约与交易合约不同时，则SKHIGH返回初始化后的最高价与初始化弹出框中填入的数据合约信号价相比较后较大的数值。

例：
C<O,SK;
C<SKHIGH-5*MINPRICE,BP;
AUTOFILTER;//最新价低于卖开仓以来数据合约的最高价5个点，平仓。
`;

const SKLOW = new MySymbol();
SKLOW.label = "SKLOW";
SKLOW.description = "返回数据合约卖开仓以来的最低价";
SKLOW.insertText = "";
SKLOW.body = "SKLOW";
SKLOW.kind = MySymbolKind.Function;
SKLOW.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKLOW.functionType = MyFunctionType.SignalLoggingFunction;
SKLOW.returnType = MyFunctionReturnType.None;
SKLOW.parameters = MySymbol.createParametersFromStrings([]);
SKLOW.detail = "返回数据合约卖开仓以来的最低价";
SKLOW.documentation = `
SKLOW,返回数据合约卖开仓以来的最低价
返回数据合约卖开仓以来的最低价
用法：
SKLOW返回数据合约最近一次模型卖开位置到当前的最低价。
1、不同信号执行方式，其返回值分别为：
（1）K线走完确认信号下单
  a.历史信号计算中，SK(SPK)信号之后的K线返回委托以来的数据合约行情的最低价
  b.加载运行过程中，SK(SPK)信号当根K线返回上个SK(SPK)信号发出以来的数据合约行情最低价，SK之后的K线返回委托以来的数据合约行情最低价
（2）信号执行方式选择K线走完复核（例如：在模型中写入CHECKSIG(SK,'A',0,'D',0,0);），从SK(SPK)信号发出时行情时开始统计数据合约行情的最低价；信号消失，返回上次卖开以来的数据合约行情的最低价，信号确认存在，返回当根K线记录的数据合约行情的最低价
注：SK信号发出后，中间出了信号消失，从最后一次信号出现开始统计数据合约最低价
（3）信号执行方式选择不进行信号复核（例如：在模型中写入MULTSIG或MULTSIG_MIN;）
SK(SPK)信号的当根K线返回的从信号发出到K线走完时数据合约行情的最低价；SK(SPK)信号之后的K线返回信号发出以来数据合约行情的最低价
2、主连合约使用换月移仓函数，主力合约切换后，从新的主力合约第一根K线开盘价重新开始统计
3、模组重新初始化后，数据合约和交易合约相同，则SKLOW返回初始化后的最低价与初始化弹出框中填入的持仓价相比较后较小的数值；数据合约与交易合约不同时，则SKLOW返回初始化后的最低价与初始化弹出框中填入的数据合约信号价相比较后较小的数值。

例：
C<O,SK;
C<SKPRICE&&C>SKLOW+5*MINPRICE,BP;
AUTOFILTER;//最新价高于卖开仓以来数据合约的最低价5个点，止盈平仓。
`;

const SKPRICE = new MySymbol();
SKPRICE.label = "SKPRICE";
SKPRICE.description = "返回数据合约最近一次卖开信号价位";
SKPRICE.insertText = "";
SKPRICE.body = "SKPRICE";
SKPRICE.kind = MySymbolKind.Function;
SKPRICE.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKPRICE.functionType = MyFunctionType.SignalLoggingFunction;
SKPRICE.returnType = MyFunctionReturnType.None;
SKPRICE.parameters = MySymbol.createParametersFromStrings([]);
SKPRICE.detail = "返回数据合约最近一次卖开信号价位";
SKPRICE.documentation = `
SKPRICE，返回数据合约最近一次卖开信号价位
SKPRICE 返回数据合约最近一次卖开信号价位。

用法：
SKPRICE 返回数据合约最近一次卖开信号发出时的行情的最新价。

注：
1、当数据合约和交易合约相同时SKPRICE值和SKPRICE1值相等。
2、当模型存在连续多个开仓信号(加仓)的情况下，该函数返回的是最近一次开仓信号的价格,而不是开仓均价。
3、不同信号执行方式，其返回值分别为：
（1）信号执行方式为不进行信号复核
   a.历史回测：SKPRICE返回信号发出时的数据合约行情最新价
   b.模组运行：SKPRICE返回信号发出时的数据合约行情最新价
（2）信号执行方式选择K线走完确认信号下单
   a.历史回测：SKPRICE返回信号发出时数据合约当根K线的收盘价
   b.模组运行：SKPRICE返回信号发出时数据合约当根K线的收盘价
（3）信号执行方式设置为K线走完进行信号复核
   a.历史回测：SKPRICE返回信号发出时数据合约当根K线的收盘价
   b.模组运行：复核前，返回上一次SK信号当根K线数据合约的行情最新价；复核后，返回本次SK信号当根K线数据合约的行情最新价
4、当模组自动初始化时，SKPRICE返回的为上一次卖开信号时数据合约行情的最新价。
5、模组重新初始化后，数据合约和交易合约相同，则SKPRICE返回为初始化弹出框中填入的持仓价格；数据合约与交易合约不同时，则SKPRICE返回初始化弹出框中填入的数据合约信号价。
6、加载在主连合约上，使用了换月移仓函数，主力换月后SKPRCIE取值为新的主力合约的第一根K线的开盘价

例:
CLOSE-SKPRICE>60 && SKPRICE>0 && SKVOL>0, BP;//如果卖开价位比当前价位低出60,且空头持仓存在，买平仓。
`;

const SKPRICE1 = new MySymbol();
SKPRICE1.label = "SKPRICE1";
SKPRICE1.description = "返回交易合约最近一次卖开信号价位";
SKPRICE1.insertText = "";
SKPRICE1.body = "SKPRICE1";
SKPRICE1.kind = MySymbolKind.Function;
SKPRICE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKPRICE1.functionType = MyFunctionType.SignalLoggingFunction;
SKPRICE1.returnType = MyFunctionReturnType.None;
SKPRICE1.parameters = MySymbol.createParametersFromStrings([]);
SKPRICE1.detail = "返回交易合约最近一次卖开信号价位";
SKPRICE1.documentation = `
SKPRICE1，返回交易合约最近一次卖开信号价位
SKPRICE1 返回交易合约最近一次卖开信号价位。

用法：
SKPRICE1：返回交易合约最近一次卖开信号发出时的行情的最新价。

注：
1、当数据合约和交易合约相同时SKPRICE值和SKPRICE1值相等。
2、当数据合约和交易合约不同时，不同信号执行方式，其返回值分别为：
（1）信号执行方式为不进行信号复核
  a.历史回测：SKPRICE1返回信号发出时的交易合约行情最新价
  b.模组运行：SKPRICE1返回信号发出时的交易合约行情最新价
（2）信号执行方式选择K线走完确认信号下单
   a.历史回测：SKPRICE1返回信号发出时交易合约当根K线的收盘价
   b.模组运行：SKPRICE1返回信号发出时交易合约当根K线的收盘价
（3）信号执行方式设置为K线走完进行信号复核
   a.历史回测：SKPRICE1返回信号发出时交易合约当根K线的收盘价
   b.模组运行：复核前，返回上一次SK信号当根K线交易合约的行情最新价；复核后，返回本次SK信号当根K线交易合约的行情最新价
3、当模组自动初始化时，SKPRICE1取最近的SK信号发出时的交易合约行情的最新价；手动初始化时，SKPRICE1取初始化弹出框中填入的持仓价格。
4、加载在加权/主连合约上，使用了换月移仓函数，主力换月后SKPRCIE1取值为新的主力合约的第一根K线的开盘价
`;

const SKPRICEAV = new MySymbol();
SKPRICEAV.label = "SKPRICEAV";
SKPRICEAV.description = "返回数据合约空头开仓均价";
SKPRICEAV.insertText = "";
SKPRICEAV.body = "SKPRICEAV";
SKPRICEAV.kind = MySymbolKind.Function;
SKPRICEAV.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKPRICEAV.functionType = MyFunctionType.PositionManagementFunction;
SKPRICEAV.returnType = MyFunctionReturnType.None;
SKPRICEAV.parameters = MySymbol.createParametersFromStrings([]);
SKPRICEAV.detail = "返回数据合约空头开仓均价";
SKPRICEAV.documentation = `
SKPRICEAV返回数据合约空头开仓均价
SKPRICEAV 返回数据合约空头开仓均价。

用法：
SKPRICEAV 返回返回数据合约空头开仓均价。

注：
1、过滤模型：
（1）开仓信号后，未出平仓信号时：SKPRICEAV取值和SKPRICE取值相同。
（2）平仓信号后：SKPRICEAV返回值为0。
2、加减仓模型：
（1）持仓不为0时：SKPRICEAV返回数据合约理论持仓的开仓均价。
（2）加减仓模型持仓为0时：SKPRICEAV返回值为0。
3、该函数在模组运行和回测中都读取的是模组理论持仓的开仓均价，非实际持仓开仓均价。
4、模组重新初始化后，数据合约和交易合约相同，则SKPRICEAV计算取初始化弹出框中填入的持仓价格；数据合约与交易合约不同时，则SKPRICEAV计算取初始化弹出框中填入的数据合约信号价。

注：
该函数的计算考虑滑点。

例：
SKPRICEAV-CLOSE>60,BP(SKVOL);//当前价位比空头开仓均价低出60,平掉所有空头持仓
`;

const SKPRICEAV1 = new MySymbol();
SKPRICEAV1.label = "SKPRICEAV1";
SKPRICEAV1.description = "返回交易合约空头开仓均价";
SKPRICEAV1.insertText = "";
SKPRICEAV1.body = "SKPRICEAV1";
SKPRICEAV1.kind = MySymbolKind.Function;
SKPRICEAV1.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKPRICEAV1.functionType = MyFunctionType.PositionManagementFunction;
SKPRICEAV1.returnType = MyFunctionReturnType.None;
SKPRICEAV1.parameters = MySymbol.createParametersFromStrings([]);
SKPRICEAV1.detail = "返回交易合约空头开仓均价";
SKPRICEAV1.documentation = `
SKPRICEAV1交易合约空头开仓均价
SKPRICEAV1 返回交易合约空头开仓均价

用法：
SKPRICEAV1 返回返回交易合约空头开仓均价。

注：
1、当模型存在连续多个开仓信号(加仓)的情况下，该函数返回的是交易合约开仓均价。
2、当数据合约和交易合约相同时SKPRICEAV值和SKPRICEAV1值相等。
3、过滤模型：
（1）开仓信号后，未出平仓信号时：SKPRICEAV1取值和SKPRICE1取值相同。
（2）平仓信号后：SKPRICEAV1返回值为0。
4、加减仓模型：
（1）持仓不为0时：SKPRICEAV1返回交易合约理论持仓的开仓均价。
（2）加减仓模型持仓为0时：SKPRICEAV1返回值为0。

注：
该函数的计算考虑滑点。

例：
SKPRICEAV1-CLOSE>60,BP(SKVOL);//当前价位比交易合约空头开仓均价低出60,平掉所有空头持仓
`;

const SKVOL = new MySymbol();
SKVOL.label = "SKVOL";
SKVOL.description = "卖开信号手数";
SKVOL.insertText = "";
SKVOL.body = "SKVOL";
SKVOL.kind = MySymbolKind.Function;
SKVOL.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKVOL.functionType = MyFunctionType.PositionManagementFunction;
SKVOL.returnType = MyFunctionReturnType.None;
SKVOL.parameters = MySymbol.createParametersFromStrings([]);
SKVOL.detail = "卖开信号手数";
SKVOL.documentation = `
SKVOL返回模型当前的空头理论持仓
卖开信号手数
用法：
SKVOL返回模型当前的空头理论持仓。
1、加载运行：
（1）模组初始化后，SKVOL仍然返回根据信号下单手数计算的理论持仓，不受账户持仓的影响。
（2）模组运行中手动调仓，头寸同步修改持仓，SKVOL返回值不变，仍然返回根据信号下单手数计算的理论持仓。
（3）页面盒子运行中，SKVOL不受资金情况的限制，按照信号显示开仓手数。
2、回测、模组运行中：
（1）如果资金不够开仓，开仓手数为0，SKVOL返回值为0。
（2）SK（SPK）信号出现并且确认固定后，SKVOL的取值增加开仓手数的数值；BP（BPK）信号出现并且确认固定后，SKVOL的取值减少平仓手数的数值。

例：
SKVOL=0&&C<O,SK(1);//空头理论持仓为0并且收盘价小于开盘价时，卖开一手
SKVOL>=1&&L<LV(L,5),SK(2); //空头持仓大于等于1，并且当根K线的最低价小于前面5个周期中最低价中最小值时，加仓2手
SKVOL>0&&H>REF(H,5),BP(SKVOL); //空头持仓大于0，并且当根K线的最高价大于5个周期前K线的最高价时，买平所有空头持仓
`;

const SKVOL2 = new MySymbol();
SKVOL2.label = "SKVOL2";
SKVOL2.description = "卖开信号手数";
SKVOL2.insertText = "";
SKVOL2.body = "SKVOL2";
SKVOL2.kind = MySymbolKind.Function;
SKVOL2.marketType = MyMarketType.TPlusZeroStrategyFunction;
SKVOL2.functionType = MyFunctionType.PositionManagementFunction;
SKVOL2.returnType = MyFunctionReturnType.None;
SKVOL2.parameters = MySymbol.createParametersFromStrings([]);
SKVOL2.detail = "卖开信号手数";
SKVOL2.documentation = `
SKVOL2模组空头持仓
卖开信号手数
用法：
SKVOL2返回模型当前的空头持仓。
1、加载运行：
（1）模组初始化后，SKVOL2返回的理论持仓仍然延续，返回模型信号手数，不受账户持仓的影响。
（2）页面盒子和模组加载中，SKVOL2不受资金情况的限制，按照信号显示开仓手数。
（3）模组运行过程中SK（SPK）信号出现并且确认固定后，SKVOL2的取值增加开仓手数的数值；BP（BPK）信号出现并且确认固定后，SKVOL2的取值减少平仓手数的数值。
2、回测：
（1）SKVOL2不受资金情况的限制，按照信号显示开仓手数。
（2）SK（SPK）信号出现并且确认固定后，SKVOL2的取值增加开仓手数的数值；BP（BPK）信号出现并且确认固定后，SKVOL2的取值减少平仓手数的数值。

例：
SKVOL2=0&&C<O,SK(1);//空头持仓为0并且收盘价小于开盘价时，卖开一手
SKVOL2>=1&&L>LV(L,5),SK(2); //空头持仓大于等于1，并且当根K线的最低价小于前面5个周期中最低价中最小值时，加仓2手
SKVOL2>0&&H<REF(H,5),BP(SKVOL2); //空头持仓大于0，并且当根K线的最高价大于5个周期前K线的最高价时，买平所有空头持仓
`;

const SLOPE = new MySymbol();
SLOPE.label = "SLOPE";
SLOPE.description = "线性回归的斜率";
SLOPE.insertText = "";
SLOPE.body = "SLOPE( , )";
SLOPE.kind = MySymbolKind.Function;
SLOPE.marketType = MyMarketType.BasicFunction;
SLOPE.functionType = MyFunctionType.MathematicalStatisticsFunction;
SLOPE.returnType = MyFunctionReturnType.None;
SLOPE.parameters = MySymbol.createParametersFromStrings([]);
SLOPE.detail = "线性回归的斜率";
SLOPE.documentation = `
SLOPE(X,N)，求X的N周期的线型回归的斜率
SLOPE(X,N)：得到X的N周期的线型回归的斜率。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值,该函数返回空值；
5、N可以为变量。

举例：
用最小平方法计算SLOPE(CLOSE,5)在最近一根K线上的的值：
1、建立一元线性方程：close=a+slope*i+m
2、close的估计值：close(i)^=a+slope*i
3、求残差：m^=close(i)-close(i)^=close(i)-a-slope*i
4、误差平方和：
Q=m(1)*m(1)+...+m(5)*m(5)=[close(1)-a-slope*1]*[close(1)-a-slope*1]+...+[close(5)-a-slope*5]*[close(5)-a-slope*5]
5、对线性方程中的参数a,slope求一阶偏导:
2*{[close(1)-a-slope*1]+...+[close(5)-a-slope*5]}*(-1)=0
2*{[close(1)-a-slope*1]+...+[close(5)-a-slope*5]}*(-5)=0
6、联立以上两个公式，反解出slope的值：
slope={[5*close(1))+...+1*close(5)]-[close(1)+...+close(5)]*(1+2+3+4+5)/5}/[(1*1+...+5*5)-(1+...+5)(1+...+5)/5]

以上公式用麦语言函数可以表示如下：
((5*C+4*REF(C,1)+3*REF(C,2)+2*REF(C,3)+1*REF(C,4))-SUM(C,5)*(1+2+3+4+5)/5)/((SQUARE(1)+SQUARE(2)+SQUARE(3)+SQUARE(4)+SQUARE(5))-SQUARE(1+2+3+4+5)/5);

例：
SLOPE(CLOSE,5);表示求收盘价5个周期线性回归线的斜率
`;

const SMA = new MySymbol();
SMA.label = "SMA";
SMA.description = "扩展指数加权移动平均";
SMA.insertText = "";
SMA.body = "SMA( , , )";
SMA.kind = MySymbolKind.Function;
SMA.marketType = MyMarketType.BasicFunction;
SMA.functionType = MyFunctionType.FinancialStatisticsFunction;
SMA.returnType = MyFunctionReturnType.None;
SMA.parameters = MySymbol.createParametersFromStrings([]);
SMA.detail = "扩展指数加权移动平均";
SMA.documentation = `
SMA(X,N,M)，求X的N个周期内的扩展指数加权移动平均。M为权重，N为周期数
SMA(X,N,M) 求X的N个周期内的扩展指数加权移动平均。M为权重。

计算公式：SMA(X,N,M)=REF(SMA(X,N,M),1)*(N-M)/N+X(N)*M/N
注：
1、当N为有效值，但当前的k线数不足N根，按N根计算。
2、 N为0或空值的情况下，函数返回空值。

例1：
SMA10:=SMA(C,10,3);//求的10周期收盘价的扩展指数加权移动平均。权重为3。
`;

const SMMA = new MySymbol();
SMMA.label = "SMMA";
SMMA.description = "通畅移动平均";
SMMA.insertText = "";
SMMA.body = "SMMA(,)";
SMMA.kind = MySymbolKind.Function;
SMMA.marketType = MyMarketType.BasicFunction;
SMMA.functionType = MyFunctionType.FinancialStatisticsFunction;
SMMA.returnType = MyFunctionReturnType.None;
SMMA.parameters = MySymbol.createParametersFromStrings([]);
SMMA.detail = "通畅移动平均";
SMMA.documentation = `
SMMA(X,N),表示当前K线上X在N个周期的通畅移动平均线
SMMA(X,N)，X为变量,N为周期，SMMA(X,N)表示当前K线上X在N个周期的通畅移动平均线
算法：SMMA(X,N)=(SUM1-MMA+X)/N
其中SUM1=X1+X2+.....+XN 
MMA=SUM1/N
例1：
SMMA(C,5);//收盘价的5周期通畅移动平均线
`;

const SOLID = new MySymbol();
SOLID.label = "SOLID";
SOLID.description = "实心显示";
SOLID.insertText = "";
SOLID.body = "SOLID";
SOLID.kind = MySymbolKind.Function;
SOLID.marketType = MyMarketType.BasicFunction;
SOLID.functionType = MyFunctionType.DrawingFunction;
SOLID.returnType = MyFunctionReturnType.None;
SOLID.parameters = MySymbol.createParametersFromStrings([]);
SOLID.detail = "实心显示";
SOLID.documentation = `
SOLID,画实心柱线
SOLID 实心显示。

用法：
用在VOLSTICK、VOLUMESTICK函数后面，表示柱线实心显示。

注：
仅支持与VOLSTICK、VOLUMESTICK函数连用。

例：
VOL,VOLUMESTICK,SOLID;//画成交量柱状线，柱线实心显示。
`;

const SORT = new MySymbol();
SORT.label = "SORT";
SORT.description = "取排序在相应位置的值";
SORT.insertText = "";
SORT.body = "SORT";
SORT.kind = MySymbolKind.Function;
SORT.marketType = MyMarketType.BasicFunction;
SORT.functionType = MyFunctionType.FinancialStatisticsFunction;
SORT.returnType = MyFunctionReturnType.None;
SORT.parameters = MySymbol.createParametersFromStrings([]);
SORT.detail = "取排序在相应位置的值";
SORT.documentation = `
SORT(TYPE,POS,N1,N2,...,N30);按升(降)序排列，取第POS个参数对应的数值
SORT(Type,POS,N1,N2,...,N30); 按升(降)序排列，取第POS个参数对应的值

注：
1、当Type为0按升序排列，当Type为1按降序排列；
2、TYPE,POS,不支持变量
3、N1,...,N30为参数，支持常量、变量，最多支持30个参数

例：
SORT(0,3,2,1,5,3);//2、1、5、3按升序排列，取排列第三的数字3
`;

const SORTPOS = new MySymbol();
SORTPOS.label = "SORTPOS";
SORTPOS.description = "取排序后数值的位置";
SORTPOS.insertText = "";
SORTPOS.body = "SORTPOS";
SORTPOS.kind = MySymbolKind.Function;
SORTPOS.marketType = MyMarketType.BasicFunction;
SORTPOS.functionType = MyFunctionType.FinancialStatisticsFunction;
SORTPOS.returnType = MyFunctionReturnType.None;
SORTPOS.parameters = MySymbol.createParametersFromStrings([]);
SORTPOS.detail = "取排序后数值的位置";
SORTPOS.documentation = `
SORTPOS(Type,POS,N1,N2,...,N30);按升(降)序排列，取第POS个参数的原始位置
SORTPOS(Type,POS,N1,N2,...,N30); 按升(降)序排列，取第POS个数据的原始位置

注：
1、当Type为0按升序排列，当Type为1按降序排列；
2、TYPE,POS,不支持变量；
3、N1,...,N30为参数，支持常量、变量，最多支持30个参数
4、如存在两个或两个以上相同的值，保持原有的顺序排列。如SORTPOS(1,3,2,1,2,5,3);返回值为1，取第一个2的位置；SORTPOS(1,4,2,1,2,5,3);返回值为3，取第二个2的位置
5、返回的原始位置，从1开始

例：
SORTPOS(0,3,2,1,5,3);//2、1、5、3按升序排列，排列第三的数字3，所对应的原始位置。函数返回值为4
`;

const SOUND = new MySymbol();
SOUND.label = "SOUND";
SOUND.description = "播放声音";
SOUND.insertText = "";
SOUND.body = "SOUND( )";
SOUND.kind = MySymbolKind.Function;
SOUND.marketType = MyMarketType.BasicFunction;
SOUND.functionType = MyFunctionType.DrawingFunction;
SOUND.returnType = MyFunctionReturnType.None;
SOUND.parameters = MySymbol.createParametersFromStrings([]);
SOUND.detail = "播放声音";
SOUND.documentation = `
SOUND('N')，播放声音'N'
SOUND 播放声音。

用法：SOUND(NAME)，播放NAME

注：
1、点击设置声音按钮，在弹出来的界面中设置声音，声音用字符'A'~'J'表示。
2、自定义声音可以在设置菜单的设置声音文件中设置
3、条件一直满足，则只播放一次，不重复播放。
4、不支持将函数定义为变量，即不支持下面的写法：A:SOUND(NAME);
5、当前k线满足时才会播放声音，历史满足不会播放

例：
CLOSE>OPEN,SOUND('A');表示K线收盘大于开盘时，播放声音"A"
`;

const SPLIT = new MySymbol();
SPLIT.label = "SPLIT";
SPLIT.description = "返回之前第N次除权(送股或配股)的除权比例";
SPLIT.insertText = "";
SPLIT.body = "SPLIT()";
SPLIT.kind = MySymbolKind.Function;
SPLIT.marketType = MyMarketType.BasicFunction;
SPLIT.functionType = MyFunctionType.StockDataFunction;
SPLIT.returnType = MyFunctionReturnType.None;
SPLIT.parameters = MySymbol.createParametersFromStrings([]);
SPLIT.detail = "返回之前第N次除权(送股或配股)的除权比例";
SPLIT.documentation = `
SPLIT(N)返回之前第N次除权(送股或配股)的除权比例
SPLIT(N) 返回之前第N次除权(送股或配股)的除权比例，表示除权后股价的下跌比例。

用法：
1、该函数返回值为之前第N次除权(送股或配股)的除权比例（不包含最近一次除权）
2、如果只有派发红利没有送股或者配股信息，则不计算除权比例

计算方法：
除权比例=除权参考价/股权登记日的收盘价；
除权参考价=(股权登记日收盘价+配股价*配股率-派息率)/(1+送股率+配股率)；

例：股权登记日收盘价为7.98 除权信息为：每10股配股1.5股 配股价5.6元
除权参考价=(7.98+5.6*1.5/10)/(1+1.5/10)=7.6696
除权比例=7.6696/7.98=0.9611

注：
1、当N为0时，返回最近一次的除权比例；
2、当N为有效值，但本地数据范围内不足N次除权时，返回无效值；
3、若N为无效值时，返回无效值；
4、N可以为变量；
5、该函数只支持加载在国内股票日线及日线以下周期使用。
`;

const SPLITBARS = new MySymbol();
SPLITBARS.label = "SPLITBARS";
SPLITBARS.description = "返回从之前第N个除权日到当前的周期数";
SPLITBARS.insertText = "";
SPLITBARS.body = "SPLITBARS()";
SPLITBARS.kind = MySymbolKind.Function;
SPLITBARS.marketType = MyMarketType.BasicFunction;
SPLITBARS.functionType = MyFunctionType.StockDataFunction;
SPLITBARS.returnType = MyFunctionReturnType.None;
SPLITBARS.parameters = MySymbol.createParametersFromStrings([]);
SPLITBARS.detail = "返回从之前第N个除权日到当前的周期数";
SPLITBARS.documentation = `
SPLITBARS(N)返回从之前第N次除权到当前的周期数
SPLITBARS(N) 返回从之前第N个除权日到当前的周期数。

用法：
1、返回从之前第N个除权日（不包含最近一次除权日）到当前的周期数；
2、若当前K线为之前的N个除权日，返回值为0；
3、如果只有派发红利没有送股或者配股信息，则不计算到当前的周期数。

注：
1、当N为0时，返回从最近的一个除权日到当前的周期数；
2、当N为有效值，但本地数据范围内不足N个除权日时，返回无效值；
3、若N为无效值时，返回无效值；
4、N可以为变量；
5、该函数只支持加载在国内股票日线及日线以下周期使用。
`;

const SQRT = new MySymbol();
SQRT.label = "SQRT";
SQRT.description = "平方根";
SQRT.insertText = "";
SQRT.body = "SQRT( )";
SQRT.kind = MySymbolKind.Function;
SQRT.marketType = MyMarketType.BasicFunction;
SQRT.functionType = MyFunctionType.MathFunction;
SQRT.returnType = MyFunctionReturnType.None;
SQRT.parameters = MySymbol.createParametersFromStrings([]);
SQRT.detail = "平方根";
SQRT.documentation = `
SQRT(X)，求X的平方根
SQRT(X)：求X的平方根。

注：
X的取值为正数，X为负数时返回空值。

例1：
SQRT(CLOSE);//收盘价的平方根。
`;

const SQUARE = new MySymbol();
SQUARE.label = "SQUARE";
SQUARE.description = "平方";
SQUARE.insertText = "";
SQUARE.body = "SQUARE( )";
SQUARE.kind = MySymbolKind.Function;
SQUARE.marketType = MyMarketType.BasicFunction;
SQUARE.functionType = MyFunctionType.MathFunction;
SQUARE.returnType = MyFunctionReturnType.None;
SQUARE.parameters = MySymbol.createParametersFromStrings([]);
SQUARE.detail = "平方";
SQUARE.documentation = `
SQUARE(X)，求X的平方
SQUARE(X)求X的平方。

例1：
SQUARE(C);//收盘价的平方。
例2：
SQUARE(2);//2的平方。
`;

const STD = new MySymbol();
STD.label = "STD";
STD.description = "样本标准差";
STD.insertText = "";
STD.body = "STD( , )";
STD.kind = MySymbolKind.Function;
STD.marketType = MyMarketType.BasicFunction;
STD.functionType = MyFunctionType.MathematicalStatisticsFunction;
STD.returnType = MyFunctionReturnType.None;
STD.parameters = MySymbol.createParametersFromStrings([]);
STD.detail = "样本标准差";
STD.documentation = `
STD(X,N)，求X在N个周期内的样本标准差
STD(X,N)：求X在N个周期内的样本标准差。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值。
5、N可以为变量

算法举例：计算STD(C,3);在最近一根K线上的值。

用麦语言函数可以表示如下：
SQRT((SQUARE(C-MA(C,3))+SQUARE(REF(C,1)-MA(C,3))+SQUARE(REF(C,2)-MA(C,3)))/2);

例：
STD(C,10)求收盘价在10个周期内的样本标准差。
//标准差表示总体各单位标准值与其平均数离差平方的算术平均数的平方根，它反映一个数据集的离散程度。STD(C,10)表示收盘价与收盘价的10周期均线之差的平方和的平均数的算术平方根。样本标准差是样本方差的平方根。
`;

const STDP = new MySymbol();
STDP.label = "STDP";
STDP.description = "总体标准差";
STDP.insertText = "";
STDP.body = "STDP( , )";
STDP.kind = MySymbolKind.Function;
STDP.marketType = MyMarketType.BasicFunction;
STDP.functionType = MyFunctionType.MathematicalStatisticsFunction;
STDP.returnType = MyFunctionReturnType.None;
STDP.parameters = MySymbol.createParametersFromStrings([]);
STDP.detail = "总体标准差";
STDP.documentation = `
STDP(X,N)，求X的N日总体标准差
STDP(X,N)：为X的N周期总体标准差。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值。
5、N可以为变量

算法举例：计算STDP(C,3);在最近一根K线上的值。

用麦语言函数可以表示如下：
SQRT((SQUARE(C-MA(C,3))+SQUARE(REF(C,1)-MA(C,3))+SQUARE(REF(C,2)-MA(C,3)))/3);

例：
STDP(C,10)为收盘价的10周期总体标准差。

//总体标准差是反映研究总体内个体之间差异程度的一种统计指标，总体方差是一组资料中各数值与其算术平均数离差平方和的平均数，总体标准差则是总体方差的平方根。
`;

const STICK = new MySymbol();
STICK.label = "STICK";
STICK.description = "画指定粗细的柱线";
STICK.insertText = "";
STICK.body = "STICK(,,,,,)";
STICK.kind = MySymbolKind.Function;
STICK.marketType = MyMarketType.BasicFunction;
STICK.functionType = MyFunctionType.DrawingFunction;
STICK.returnType = MyFunctionReturnType.None;
STICK.parameters = MySymbol.createParametersFromStrings([]);
STICK.detail = "画指定粗细的柱线";
STICK.documentation = `
STICK(COND,P1,P2,N,COLOR,Empty);画指定粗细的柱线当满足COND时，在P1与P2之间画一条粗细为N、颜色为COLOR的柱状图若Empty不为0，则为空心柱；Empty为0，则为实心柱；N取值0-9
STICK(COND,P1,P2,N,COLOR,Empty);画不同粗细的柱线
用法：当满足COND时，在P1与P2之间画一条粗细为N、颜色为COLOR的柱状图；若Empty不为0，则为空心柱；Empty为 0，则为实心柱。。用法和STICKLINE函数类似。
注：
1、参数N取值在0~9之间，为3时和主图K线宽度一致；
2、不支持将该函数直接定义为变量，即不支持下面的写法：A:STICK(OPEN-CLOSE>0,OPEN,CLOSE,3,COLORCYAN,0);

例1： 
STICK(OPEN-CLOSE>0,OPEN,CLOSE,3,COLORCYAN,0);//表示当开盘价大于收盘价时，从开盘价到收盘价画宽度为3的青色的实心柱，即K线阴线的实体部分。
`;

const STICKLINE = new MySymbol();
STICKLINE.label = "STICKLINE";
STICKLINE.description = "画柱线";
STICKLINE.insertText = "";
STICKLINE.body = "STICKLINE( , , , , )";
STICKLINE.kind = MySymbolKind.Function;
STICKLINE.marketType = MyMarketType.BasicFunction;
STICKLINE.functionType = MyFunctionType.DrawingFunction;
STICKLINE.returnType = MyFunctionReturnType.None;
STICKLINE.parameters = MySymbol.createParametersFromStrings([]);
STICKLINE.detail = "画柱线";
STICKLINE.documentation = `
STICKLINE(C,P1,P2,Color,Empty)当C条件满足时，从P1画到P2柱线
STICKLINE 在图形上画柱线。

用法：
STICKLINE(COND,P1,P2,Color,Empty); 
当COND条件满足时，从P1到P2画柱,颜色为Color。若Empty不为0，则为空心柱；Empty为0，则为实心柱，其中Empty不支持设置为变量。

注：
不支持将该函数定义为变量，即不支持下面的写法：
A:STICKLINE(COND,P1,P2,Color,Empty);

例1：
STICKLINE(OPEN-CLOSE>0,OPEN,CLOSE,COLORCYAN,0);//表示当开盘价大于收盘价时，从开盘价到收盘价画青色的实心柱，即K线阴线的实体部分。
`;

const STICKLINE1 = new MySymbol();
STICKLINE1.label = "STICKLINE1";
STICKLINE1.description = "画柱线";
STICKLINE1.insertText = "";
STICKLINE1.body = "STICKLINE1( , , , , )";
STICKLINE1.kind = MySymbolKind.Function;
STICKLINE1.marketType = MyMarketType.BasicFunction;
STICKLINE1.functionType = MyFunctionType.DrawingFunction;
STICKLINE1.returnType = MyFunctionReturnType.None;
STICKLINE1.parameters = MySymbol.createParametersFromStrings([]);
STICKLINE1.detail = "画柱线";
STICKLINE1.documentation = `
STICKLINE1(C,P1,P2,Width,Empty)当C条件满足时，从P1画到P2柱线，Width为宽度，若Empty不为0，则为空心柱
STICKLINE1 在图形上画柱线。

用法：
STICKLINE1(COND,P1,P2,Width,Empty); 
当COND条件满足时，从P1到P2画柱,宽度为Width。若Empty不为0，则为空心柱；Empty为0，则为实心柱。

注：
1、该函数支持在函数后设置颜色，即支持下面的写法：
STICKLINE1(COND,P1,P2,Width,Empty),COLOR;
2、不支持将该函数定义为变量，即不支持下面的写法：
A:STICKLINE1(COND,P1,P2,Width,Empty);

例：
STICKLINE1(OPEN-CLOSE>0,OPEN,CLOSE,4,0),COLORCYAN;//表示当开盘价大于收盘价时，从开盘价到收盘价画青色的实心柱，宽度为4，即K线阴线的实体部分。
`;

const STKTYPE = new MySymbol();
STKTYPE.label = "STKTYPE";
STKTYPE.description = "取市场类型";
STKTYPE.insertText = "";
STKTYPE.body = "STKTYPE";
STKTYPE.kind = MySymbolKind.Function;
STKTYPE.marketType = MyMarketType.BasicFunction;
STKTYPE.functionType = MyFunctionType.LogicalJudgmentFunction;
STKTYPE.returnType = MyFunctionReturnType.None;
STKTYPE.parameters = MySymbol.createParametersFromStrings([]);
STKTYPE.detail = "取市场类型";
STKTYPE.documentation = `
STKTYPE取市场类型，1为国内股票、2为美国股票、6为外汇、7为国内期货、8为国内期权、9为外盘、5为其它
STKTYPE 取市场类型。

注：
1、STKTYPE取当前交易合约的市场类型。
2、返回值1为国内股票、2为美国股票、6为外汇、7为国内期货、8为国内期权、9为外盘、5为其它。

例：
A:STKTYPE;//加载到期货合约上，A返回值为7。
`;

const STOCKDIVD = new MySymbol();
STOCKDIVD.label = "STOCKDIVD";
STOCKDIVD.description = "设置股票复权";
STOCKDIVD.insertText = "";
STOCKDIVD.body = "STOCKDIVD";
STOCKDIVD.kind = MySymbolKind.Function;
STOCKDIVD.marketType = MyMarketType.BasicFunction;
STOCKDIVD.functionType = MyFunctionType.StockDataFunction;
STOCKDIVD.returnType = MyFunctionReturnType.None;
STOCKDIVD.parameters = MySymbol.createParametersFromStrings([]);
STOCKDIVD.detail = "设置股票复权";
STOCKDIVD.documentation = `
STOCKDIVD()设置股票除权复权
STOCKDIVD()  设置股票复权

用法：
STOCKDIVD(0);表示设置向前复权；STOCKDIVD(1);表示设置向后复权

注：
1、该函数只支持加载在国内股票使用；
2、该函数不支持TICK周期和量能周期；
3、同一K线图不能同时加载不同参数的STOCKDIVD模型；
4、该函数是只对K线价格（H、O、L、C）、成交量和成交额的复权处理。

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK;
CROSSDOWN(MA5,MA10),SP;
STOCKDIVD(0);//设置股票向前复权
AUTOFILTER;
`;

const SUM = new MySymbol();
SUM.label = "SUM";
SUM.description = "求和";
SUM.insertText = "";
SUM.body = "SUM( , )";
SUM.kind = MySymbolKind.Function;
SUM.marketType = MyMarketType.BasicFunction;
SUM.functionType = MyFunctionType.FinancialStatisticsFunction;
SUM.returnType = MyFunctionReturnType.None;
SUM.parameters = MySymbol.createParametersFromStrings([]);
SUM.detail = "求和";
SUM.documentation = `
SUM(X,N)，求X在N个周期内的总和
SUM(X,N) 求X在N个周期内的总和。

注：
1、N包含当前k线。
2、若N为0则从第一个有效值开始算起。
3、当N为有效值，但当前的k线数不足N根，按照实际的根数计算。
4、N为空值时，返回空值。
5、N可以为变量。

例1：
SUM(VOL,25);表示统计25周期内的成交量总和
例2：
N:=BARSLAST(DATE<>REF(DATE,1))+1;//分钟周期，日内k线根数
SUM(VOL,N);//分钟周期上，取当天成交量总和。
`;

const SUMBARS = new MySymbol();
SUMBARS.label = "SUMBARS";
SUMBARS.description = "累加到指定值的周期数";
SUMBARS.insertText = "";
SUMBARS.body = "SUMBARS( , )";
SUMBARS.kind = MySymbolKind.Function;
SUMBARS.marketType = MyMarketType.BasicFunction;
SUMBARS.functionType = MyFunctionType.FinancialStatisticsFunction;
SUMBARS.returnType = MyFunctionReturnType.None;
SUMBARS.parameters = MySymbol.createParametersFromStrings([]);
SUMBARS.detail = "累加到指定值的周期数";
SUMBARS.documentation = `
SUMBARS(X,A):求多少个周期的X向前累加能够大于等于A
SUMBARS(X,A)：求累加到指定值的周期数

注：
参数A支持变量

例1：
SUMBARS(VOL,20000); 将成交量向前累加直到大于等于20000，返回这个区间的周期数。
`;

const T_CLOSE = new MySymbol();
T_CLOSE.label = "T_CLOSE";
T_CLOSE.description = "取交易合约收盘价";
T_CLOSE.insertText = "";
T_CLOSE.body = "T_CLOSE";
T_CLOSE.kind = MySymbolKind.Function;
T_CLOSE.marketType = MyMarketType.TPlusZeroStrategyFunction;
T_CLOSE.functionType = MyFunctionType.CandlestickDataReference;
T_CLOSE.returnType = MyFunctionReturnType.None;
T_CLOSE.parameters = MySymbol.createParametersFromStrings([]);
T_CLOSE.detail = "取交易合约收盘价";
T_CLOSE.documentation = `
T_CLOSE 取交易合约收盘价。
T_CLOSE 取交易合约收盘价。

注：
1、当盘中k线没有走完的时候，取交易合约最新价。

例1：
A:T_CLOSE;//定义变量A为交易合约收盘价（盘中k线没有走完的时候A为交易合约最新价）。
`;

const T_MAX = new MySymbol();
T_MAX.label = "T_MAX";
T_MAX.description = "设置模组最大开仓手数";
T_MAX.insertText = "";
T_MAX.body = "T_MAX";
T_MAX.kind = MySymbolKind.Function;
T_MAX.marketType = MyMarketType.TPlusZeroStrategyFunction;
T_MAX.functionType = MyFunctionType.PositionManagementFunction;
T_MAX.returnType = MyFunctionReturnType.None;
T_MAX.parameters = MySymbol.createParametersFromStrings([]);
T_MAX.detail = "设置模组最大开仓手数";
T_MAX.documentation = `
T_MAX(TYPE,N),根据设置的资金占用百分比计算模组最大可开仓手数，用于模组资金风控
T_MAX(TYPE,N) 设置模组最大开仓手数

用法：T_MAX(TYPE,N),根据设置的资金占用百分比计算模组最大可开仓手数，用于模组资金风控
根据设置的资金占用百分比计算模组最大可开仓手数，下单时与理论开仓手数进行比较，模组实际下单手数不能超过该函数计算的手数

注：
1、TYPE为风控类型参数，只能写为RATIO_CODE或RATIO_ACCOUNT，不支持变量
TYPE写为RATIO_CODE：单品种资金使用率=当前交易合约占用的保证金/账户权益
TYPE写为RATIO_ACCOUNT：账户资金使用率=全部合约占用的保证金/账户权益
另：保证金包含持仓占用保证金和挂单占用的保证金
2、N为百分比，支持写为变量或参数；
3、计算最大可开仓手数时，取模组单元参数中设置的保证金比率计算；
4、该函数仅适用于模组运行，不支持回测；
5、模组运行时，取交易账户的实际权益计算；
6、该函数仅支持国内期货合约，不支持外盘；
7、不支持将函数定义为变量，即不支持下面的写法：
A:T_MAX(1,30);
8、同一个模型中支持写入多行T_MAX函数：
多行T_MAX函数的风控类型参数不同：取不同的风控类型计算的最大开仓手数的最小值，进行资金风控
多行T_MAX函数的风控类型参数相同：取最后一行T_MAX计算的最大开仓手数，进行资金风控

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSS(MA5,MA10),BPK;
CROSSDOWN(MA5,MA10),SPK;
T_MAX(RATIO_CODE,5);//模组当前品种仓位占总资金的5%以下
T_MAX(RATIO_ACCOUNT,25);//全部合约总仓位占总资金的25%以下
AUTOFILTER;
`;

const T_PLUS = new MySymbol();
T_PLUS.label = "T_PLUS";
T_PLUS.description = "设置开仓手数为默认手数的N倍";
T_PLUS.insertText = "";
T_PLUS.body = "T_PLUS()";
T_PLUS.kind = MySymbolKind.Function;
T_PLUS.marketType = MyMarketType.TPlusZeroStrategyFunction;
T_PLUS.functionType = MyFunctionType.SignalExecutionFunction;
T_PLUS.returnType = MyFunctionReturnType.None;
T_PLUS.parameters = MySymbol.createParametersFromStrings([]);
T_PLUS.detail = "设置开仓手数为默认手数的N倍";
T_PLUS.documentation = `
T_PLUS(N)当条件满足时，过滤模型的开仓手数为默认手数
T_PLUS 设置开仓手数为默认手数的N倍

用法：COND,T_PLUS(N) 当条件满足时，过滤模型的开仓手数为默认手数*N倍。

注：
1、该函数只能用于设置过滤模型的手数，不能用于设置加减仓模型的手数。
2、N支持设置为参数，不支持设置为变量。
3、
该函数加载到模组中：满足条件时，下单手数为模组下单手数的N倍
该函数加载到盒子中：满足条件时，下单手数为盒子右键中设置的默认下单手数的N倍。

例：
CROSS(C,MA(C,5)),BK;
CROSS(MA(C,5),C),SP;
CROSS(MA(C,5),MA(C,10)),T_PLUS(2);//开仓条件满足时，五周期均线上穿十周期均线，开仓手数增加为原来的2倍
AUTOFILTER;
`;

const T0TOTIME = new MySymbol();
T0TOTIME.label = "T0TOTIME";
T0TOTIME.description = "秒数转换为时间";
T0TOTIME.insertText = "";
T0TOTIME.body = "T0TOTIME()";
T0TOTIME.kind = MySymbolKind.Function;
T0TOTIME.marketType = MyMarketType.BasicFunction;
T0TOTIME.functionType = MyFunctionType.TimeFunction;
T0TOTIME.returnType = MyFunctionReturnType.None;
T0TOTIME.parameters = MySymbol.createParametersFromStrings([]);
T0TOTIME.detail = "秒数转换为时间";
T0TOTIME.documentation = `
T0TOTIME(X)返回自该日0点以来的X秒处的时间。X可为变量或常数
T0TOTIME(X) 秒数转换为时间。

用法：T0TOTIME(X);返回自该日0点以来的X秒处的时间。X可为变量或常数。

注：该函数返回值为HHMMSS（时，分，秒）的形式。

例：
A:=T0TOTIME(60);//变量A返回值为100，表示1分钟
`;

const TAN = new MySymbol();
TAN.label = "TAN";
TAN.description = "正切";
TAN.insertText = "";
TAN.body = "TAN( )";
TAN.kind = MySymbolKind.Function;
TAN.marketType = MyMarketType.BasicFunction;
TAN.functionType = MyFunctionType.MathFunction;
TAN.returnType = MyFunctionReturnType.None;
TAN.parameters = MySymbol.createParametersFromStrings([]);
TAN.detail = "正切";
TAN.documentation = `
TAN(X)，求X的正切值
TAN(X)：返回X的正切值。
例1：
TAN(0);//返回0的正切值；
例2：
TAN(-3.14);//返回-3.14的正切值。
`;

const TAVLOSS = new MySymbol();
TAVLOSS.label = "TAVLOSS";
TAVLOSS.description = "返回平均亏损额";
TAVLOSS.insertText = "";
TAVLOSS.body = "TAVLOSS";
TAVLOSS.kind = MySymbolKind.Function;
TAVLOSS.marketType = MyMarketType.TPlusZeroStrategyFunction;
TAVLOSS.functionType = MyFunctionType.PositionManagementFunction;
TAVLOSS.returnType = MyFunctionReturnType.None;
TAVLOSS.parameters = MySymbol.createParametersFromStrings([]);
TAVLOSS.detail = "返回平均亏损额";
TAVLOSS.documentation = `
TAVLOSS平均亏损额
TAVLOSS 返回平均亏损额

注：
1、平均亏损额=总亏损/总亏损次数
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TAVLOSS的计算不包含手续费。
5、因信号消失产生的盈亏、交易次数未纳入TAVLOSS的计算。

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK;
CROSSDOWN(MA5,MA10),SP;
IDLE(TAVLOSS>550);//平均亏损额大于550限制开仓
AUTOFILTER;
`;

const TAVWIN = new MySymbol();
TAVWIN.label = "TAVWIN";
TAVWIN.description = "返回平均盈利额";
TAVWIN.insertText = "";
TAVWIN.body = "TAVWIN";
TAVWIN.kind = MySymbolKind.Function;
TAVWIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
TAVWIN.functionType = MyFunctionType.PositionManagementFunction;
TAVWIN.returnType = MyFunctionReturnType.None;
TAVWIN.parameters = MySymbol.createParametersFromStrings([]);
TAVWIN.detail = "返回平均盈利额";
TAVWIN.documentation = `
TAVWIN平均盈利额
TAVWIN 返回平均盈利额

注：
1、平均盈利额=总盈利/总盈利次数
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TAVWIN的计算不包含手续费。
5、因信号消失产生的盈亏、交易次数未纳入TAVWIN的计算。

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK;
CROSSDOWN(MA5,MA10),SP;
IDLE(TAVWIN<700);//平均盈利额小于700限制开仓
AUTOFILTER;
`;

const TAVWINLOSS = new MySymbol();
TAVWINLOSS.label = "TAVWINLOSS";
TAVWINLOSS.description = "返回平均盈亏额";
TAVWINLOSS.insertText = "";
TAVWINLOSS.body = "TAVWINLOSS";
TAVWINLOSS.kind = MySymbolKind.Function;
TAVWINLOSS.marketType = MyMarketType.TPlusZeroStrategyFunction;
TAVWINLOSS.functionType = MyFunctionType.PositionManagementFunction;
TAVWINLOSS.returnType = MyFunctionReturnType.None;
TAVWINLOSS.parameters = MySymbol.createParametersFromStrings([]);
TAVWINLOSS.detail = "返回平均盈亏额";
TAVWINLOSS.documentation = `
TAVWINLOSS平均盈亏额
TAVWINLOSS 返回平均盈亏额

注：
1、平均盈亏额=总盈亏/交易次数
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TAVWINLOSS的计算不包含手续费。
5、因信号消失产生的盈亏、交易次数未纳入TAVWINLOSS的计算。

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK;
CROSSDOWN(MA5,MA10),SP;
IDLE(TAVWINLOSS<100);//平均盈亏额小于100限制开仓
AUTOFILTER;
`;

const TIME = new MySymbol();
TIME.label = "TIME";
TIME.description = "取K线的时间";
TIME.insertText = "";
TIME.body = "TIME";
TIME.kind = MySymbolKind.Function;
TIME.marketType = MyMarketType.BasicFunction;
TIME.functionType = MyFunctionType.TimeFunction;
TIME.returnType = MyFunctionReturnType.None;
TIME.parameters = MySymbol.createParametersFromStrings([]);
TIME.detail = "取K线的时间";
TIME.documentation = `
TIME取周期的时数，分钟周期表示为0900，秒周期表示为090000
TIME，取K线时间。

注：
1、该函数在盘中实时返回，在K线走完后返回K线的起始时间。
2、该函数返回的是交易所数据接收时间，也就是交易所时间。
3、TIME函数在秒周期使用时返回六位数的形式，即：HHMMSS，在其他周期上显示为四位数的形式，即：HHMM.
4、该函数在指令价模型中使用，支持日线及日线以上周期，返回当时的分钟时间，收盘价模型使用该函数，只能加载在日周期以下的周期中，在日周期及日周期以上的周期中该函数返回值始终为1500。
5、使用TIME函数进行尾盘平仓的操作需要注意
（1）尾盘平仓设置的时间建议设置为K线返回值中实际可以取到的时间（如：螺纹加权 5分钟周期 最后一根K线返回时间为1455，尾盘平仓设置为TIME>=1458,SP;则效果测试中不能出现尾盘平仓的信号）
（2）使用TIME函数作为尾盘平仓的条件的，建议开仓条件也要做相应的时间限制（如设置尾盘平仓条件为TIME>=1458,CLOSEOUT;则相应的开仓条件中需要添加条件TIME<1458；避免平仓后再次开仓的情况）

例1:
C>O&&TIME<1450,BK;
C<O&&TIME<1450,SK;
TIME>=1450,SP;
TIME>=1450,BP;
AUTOFILTER;
//在14:50后平仓。
例2：
ISLASTSK=0&&C>O&&TIME>=0915,SK;
`;

const TIME0 = new MySymbol();
TIME0.label = "TIME0";
TIME0.description = "求当前周期自该日0点以来的秒数";
TIME0.insertText = "";
TIME0.body = "TIME0";
TIME0.kind = MySymbolKind.Function;
TIME0.marketType = MyMarketType.BasicFunction;
TIME0.functionType = MyFunctionType.TimeFunction;
TIME0.returnType = MyFunctionReturnType.None;
TIME0.parameters = MySymbol.createParametersFromStrings([]);
TIME0.detail = "求当前周期自该日0点以来的秒数";
TIME0.documentation = `

TIME0 求当前周期自该日0点以来的秒数。

用法：TIME0;求当前周期自该日0点以来的秒数。

注：该函数返回值为0-86400

例：
AA:TIME0;//AA在商品合约当天最后一根K线上的返回值为54000，表示0点到15点之间的秒数为54000秒
`;

const TIMETOT0 = new MySymbol();
TIMETOT0.label = "TIMETOT0";
TIMETOT0.description = "时间转换为秒数";
TIMETOT0.insertText = "";
TIMETOT0.body = "TIMETOT0()";
TIMETOT0.kind = MySymbolKind.Function;
TIMETOT0.marketType = MyMarketType.BasicFunction;
TIMETOT0.functionType = MyFunctionType.TimeFunction;
TIMETOT0.returnType = MyFunctionReturnType.None;
TIMETOT0.parameters = MySymbol.createParametersFromStrings([]);
TIMETOT0.detail = "时间转换为秒数";
TIMETOT0.documentation = `
TIMETOT0(X)返回时间X自该日0点以来的秒数。X可为变量或常数
TIMETOT0(X) 时间转换为秒数。

用法：TIMETOT0(X);返回时间X自该日0点以来的秒数。X可为变量或常数。

注：该函数返回值为时间X距离0点的秒数，X为HHMMSS的形式。

例：
A:=TIMETOT0(100);//变量A返回值为60，表示60秒
`;

const TMAXLOSS = new MySymbol();
TMAXLOSS.label = "TMAXLOSS";
TMAXLOSS.description = "返回单次亏损最大额";
TMAXLOSS.insertText = "";
TMAXLOSS.body = "TMAXLOSS";
TMAXLOSS.kind = MySymbolKind.Function;
TMAXLOSS.marketType = MyMarketType.TPlusZeroStrategyFunction;
TMAXLOSS.functionType = MyFunctionType.PositionManagementFunction;
TMAXLOSS.returnType = MyFunctionReturnType.None;
TMAXLOSS.parameters = MySymbol.createParametersFromStrings([]);
TMAXLOSS.detail = "返回单次亏损最大额";
TMAXLOSS.documentation = `
TMAXLOSS单次亏损最大额
TMAXLOSS 返回单次亏损最大额

注：
1、该函数返回交易以来，亏损最大的一次交易的亏损额
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TMAXLOSS的计算不包含手续费。
5、因信号消失产生的盈亏未纳入TMAXLOSS的计算。

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK;
CROSSDOWN(MA5,MA10),SP;
IDLE(TMAXLOSS>1000);//单次最大亏损额大于1000限制开仓
AUTOFILTER;
`;

const TMAXSEQLOSS = new MySymbol();
TMAXSEQLOSS.label = "TMAXSEQLOSS";
TMAXSEQLOSS.description = "返回连续亏损交易的最大次数";
TMAXSEQLOSS.insertText = "";
TMAXSEQLOSS.body = "TMAXSEQLOSS";
TMAXSEQLOSS.kind = MySymbolKind.Function;
TMAXSEQLOSS.marketType = MyMarketType.TPlusZeroStrategyFunction;
TMAXSEQLOSS.functionType = MyFunctionType.PositionManagementFunction;
TMAXSEQLOSS.returnType = MyFunctionReturnType.None;
TMAXSEQLOSS.parameters = MySymbol.createParametersFromStrings([]);
TMAXSEQLOSS.detail = "返回连续亏损交易的最大次数";
TMAXSEQLOSS.documentation = `
TMAXSEQLOSS当前位置之前，连续亏损交易的最大次数
TMAXSEQLOSS 返回连续亏损交易的最大次数。

注：
1、该函数返回当前位置之前，连续亏损交易的最大次数。
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TMAXSEQLOSS的计算不包含手续费。
5、因信号消失产生的盈亏、交易次数未纳入TMAXSEQLOSS的计算。

例：
CROSS(C,MA(C,5)),BK(2);//最新价上穿五周期均线，开仓两手
CROSS(MA(C,5),C),SP(1);//最新价下穿五周期均线，卖平1手
TSEQLOSS>60||TMAXSEQLOSS>3,SP(BKVOL);//最大连续亏损额大于60时或最大连续亏损次数大于3次时，平掉全部多头持仓
`;

const TMAXSEQWIN = new MySymbol();
TMAXSEQWIN.label = "TMAXSEQWIN";
TMAXSEQWIN.description = "返回连续赢利交易的最大次数";
TMAXSEQWIN.insertText = "";
TMAXSEQWIN.body = "TMAXSEQWIN";
TMAXSEQWIN.kind = MySymbolKind.Function;
TMAXSEQWIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
TMAXSEQWIN.functionType = MyFunctionType.PositionManagementFunction;
TMAXSEQWIN.returnType = MyFunctionReturnType.None;
TMAXSEQWIN.parameters = MySymbol.createParametersFromStrings([]);
TMAXSEQWIN.detail = "返回连续赢利交易的最大次数";
TMAXSEQWIN.documentation = `
TMAXSEQWIN当前位置之前，连续盈利交易的最大次数
TMAXSEQWIN 返回连续赢利交易的最大次数。

注：
1、该函数返回当前位置之前，连续赢利交易的最大次数。
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TMAXSEQWIN的计算不包含手续费。
5、因信号消失产生的盈亏、交易次数未纳入TMAXSEQWIN的计算。

例：
CROSS(C,MA(C,5)),BK(2);//最新价上穿五周期均线，开仓两手
CROSS(MA(C,5),C),SP(1);//最新价下穿五周期均线，卖平1手
TSEQWIN>20||TMAXSEQWIN>3,BK(2);//最大连续赢利额大于20时或最大连续赢利次数大于3次时，加仓2手
`;

const TMAXWIN = new MySymbol();
TMAXWIN.label = "TMAXWIN";
TMAXWIN.description = "返回单次盈利最大额";
TMAXWIN.insertText = "";
TMAXWIN.body = "TMAXWIN";
TMAXWIN.kind = MySymbolKind.Function;
TMAXWIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
TMAXWIN.functionType = MyFunctionType.PositionManagementFunction;
TMAXWIN.returnType = MyFunctionReturnType.None;
TMAXWIN.parameters = MySymbol.createParametersFromStrings([]);
TMAXWIN.detail = "返回单次盈利最大额";
TMAXWIN.documentation = `
TMAXWIN单次盈利最大额
TMAXWIN 返回单次盈利最大额

注：
1、该函数返回交易以来，盈利最大的一次交易的盈利额
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TMAXWIN的计算不包含手续费。
5、因信号消失产生的盈亏未纳入TMAXWIN的计算。

例：
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BK;
CROSSDOWN(MA5,MA10),SP;
IDLE(TMAXWIN<1000);//单次最大盈利额小于1000限制开仓
AUTOFILTER;
`;

const TNUMSEQLOSS = new MySymbol();
TNUMSEQLOSS.label = "TNUMSEQLOSS";
TNUMSEQLOSS.description = "返回持续亏损的次数";
TNUMSEQLOSS.insertText = "";
TNUMSEQLOSS.body = "TNUMSEQLOSS";
TNUMSEQLOSS.kind = MySymbolKind.Function;
TNUMSEQLOSS.marketType = MyMarketType.TPlusZeroStrategyFunction;
TNUMSEQLOSS.functionType = MyFunctionType.PositionManagementFunction;
TNUMSEQLOSS.returnType = MyFunctionReturnType.None;
TNUMSEQLOSS.parameters = MySymbol.createParametersFromStrings([]);
TNUMSEQLOSS.detail = "返回持续亏损的次数";
TNUMSEQLOSS.documentation = `
TNUMSEQLOSS返回持续亏损的次数
TNUMSEQLOSS 返回持续亏损的次数。

注：
1、从开仓到持仓为0被视为一次交易。
2、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
3、TNUMSEQLOSS的计算不包含手续费。
4、当根k线上是反手信号，反手信号开仓时，该函数返回上一次信号发出时的持续亏损次数（即此次反手信号的平仓部分的盈亏不计算在内）
5、因信号消失产生的盈亏、交易次数未纳入TNUMSEQLOSS的计算。

例：
CROSS(C,MA(C,5)),BK(2);//最新价上穿五周期均线，开仓两手
CROSS(MA(C,5),C),SP(1);//最新价下穿五周期均线，卖平1手
TNUMSEQLOSS>2,SP(BKVOL);//连续亏损的次数大于2时，平掉全部多头持仓
`;

const TNUMSEQWIN = new MySymbol();
TNUMSEQWIN.label = "TNUMSEQWIN";
TNUMSEQWIN.description = "返回持续赢利的次数";
TNUMSEQWIN.insertText = "";
TNUMSEQWIN.body = "TNUMSEQWIN";
TNUMSEQWIN.kind = MySymbolKind.Function;
TNUMSEQWIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
TNUMSEQWIN.functionType = MyFunctionType.PositionManagementFunction;
TNUMSEQWIN.returnType = MyFunctionReturnType.None;
TNUMSEQWIN.parameters = MySymbol.createParametersFromStrings([]);
TNUMSEQWIN.detail = "返回持续赢利的次数";
TNUMSEQWIN.documentation = `
TNUMSEQWIN返回持续赢利的次数
TNUMSEQWIN 返回持续赢利的次数。

注：
1、从开仓到持仓为0被视为一次交易。
2、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
3、TNUMSEQWIN的计算不包含手续费。
4、当根k线上是反手信号，反手信号开仓时，该函数返回上一次信号发出时的持续赢利次数（即此次反手信号的平仓部分的盈亏不计算在内）
5、因信号消失产生的盈亏、交易次数未纳入TNUMSEQWIN的计算。

例：
CROSS(C,MA(C,5)),BK(2);//最新价上穿五周期均线，开仓两手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平多头持仓
TNUMSEQWIN>=2,BK(1);//连续赢利的次数大于等于2次时，加仓一手
`;

const TODAYDEUCETIMES = new MySymbol();
TODAYDEUCETIMES.label = "TODAYDEUCETIMES";
TODAYDEUCETIMES.description = "返回当日平出次数";
TODAYDEUCETIMES.insertText = "";
TODAYDEUCETIMES.body = "TODAYDEUCETIMES";
TODAYDEUCETIMES.kind = MySymbolKind.Function;
TODAYDEUCETIMES.marketType = MyMarketType.TPlusZeroStrategyFunction;
TODAYDEUCETIMES.functionType =
    MyFunctionType.PositionManagementFunction;
TODAYDEUCETIMES.returnType = MyFunctionReturnType.None;
TODAYDEUCETIMES.parameters = MySymbol.createParametersFromStrings([]);
TODAYDEUCETIMES.detail = "返回当日平出次数";
TODAYDEUCETIMES.documentation = `
TODAYDEUCETIMES返回当日平出次数
TODAYDEUCETIMES 返回当日平出次数。

注：
1、该函数返回当日平出的次数，平出指平仓盈亏为0。
2、当日是以交易日计算的，不是自然日。
3、从开仓到持仓为0被视为一次交易。
4、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
5、TODAYDEUCETIMES的计算不包含手续费。
6、因信号消失产生的盈亏、交易次数未纳入TODAYDEUCETIMES的计算。

例：
TODAYDEUCETIMES<3&&CROSS(C,MA(C,5)),BK(1);//当日平出次数小于三次且最新价上穿五周期均线，开仓一手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平多头持仓
`;

const TODAYLOSSTIMES = new MySymbol();
TODAYLOSSTIMES.label = "TODAYLOSSTIMES";
TODAYLOSSTIMES.description = "返回当日亏损次数";
TODAYLOSSTIMES.insertText = "";
TODAYLOSSTIMES.body = "TODAYLOSSTIMES";
TODAYLOSSTIMES.kind = MySymbolKind.Function;
TODAYLOSSTIMES.marketType = MyMarketType.TPlusZeroStrategyFunction;
TODAYLOSSTIMES.functionType =
    MyFunctionType.PositionManagementFunction;
TODAYLOSSTIMES.returnType = MyFunctionReturnType.None;
TODAYLOSSTIMES.parameters = MySymbol.createParametersFromStrings([]);
TODAYLOSSTIMES.detail = "返回当日亏损次数";
TODAYLOSSTIMES.documentation = `
TODAYLOSSTIMES返回当日亏损次数
TODAYLOSSTIMES 返回当日亏损次数。

注：
1、该函数返回当日亏损的次数。
2、当日是以交易日计算的，不是自然日。
3、从开仓到持仓为0被视为一次交易。
4、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
5、TODAYLOSSTIMES的计算不包含手续费。
6、因信号消失产生的盈亏、交易次数未纳入TODAYLOSSTIMES的计算。

例：
TODAYLOSSTIMES<3&&CROSS(C,MA(C,5)),BK(1);//当日亏损次数小于三次且最新价上穿五周期均线，开仓一手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平多头持仓
`;

const TODAYWINTIMES = new MySymbol();
TODAYWINTIMES.label = "TODAYWINTIMES";
TODAYWINTIMES.description = "返回当日赢利次数";
TODAYWINTIMES.insertText = "";
TODAYWINTIMES.body = "TODAYWINTIMES";
TODAYWINTIMES.kind = MySymbolKind.Function;
TODAYWINTIMES.marketType = MyMarketType.TPlusZeroStrategyFunction;
TODAYWINTIMES.functionType =
    MyFunctionType.PositionManagementFunction;
TODAYWINTIMES.returnType = MyFunctionReturnType.None;
TODAYWINTIMES.parameters = MySymbol.createParametersFromStrings([]);
TODAYWINTIMES.detail = "返回当日赢利次数";
TODAYWINTIMES.documentation = `
TODAYWINTIMES返回当日赢利次数
TODAYWINTIMES 返回当日赢利次数。

注：
1、该函数返回当日赢利的次数。
2、当日是以交易日计算的，不是自然日。
3、从开仓到持仓为0被视为一次交易。
4、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
5、TODAYWINTIMES的计算不包含手续费。
6、因信号消失产生的盈亏、交易次数未纳入TODAYWINTIMES的计算。

例：
CROSS(C,MA(C,5)),BK(1);//最新价上穿五周期均线，开仓一手
TODAYWINTIMES=3,BK(2);//当日赢利3次时，加仓2手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平多头持仓
`;

const TPROFIT_REF = new MySymbol();
TPROFIT_REF.label = "TPROFIT_REF";
TPROFIT_REF.description = "取得前第N次交易的盈亏额";
TPROFIT_REF.insertText = "";
TPROFIT_REF.body = "TPROFIT_REF( )";
TPROFIT_REF.kind = MySymbolKind.Function;
TPROFIT_REF.marketType = MyMarketType.TPlusZeroStrategyFunction;
TPROFIT_REF.functionType = MyFunctionType.PositionManagementFunction;
TPROFIT_REF.returnType = MyFunctionReturnType.None;
TPROFIT_REF.parameters = MySymbol.createParametersFromStrings([]);
TPROFIT_REF.detail = "取得前第N次交易的盈亏额";
TPROFIT_REF.documentation = `
TPROFIT_REF(N)取得前第N次交易的盈亏额
TPROFIT_REF(N) 取得前第N次交易的盈亏额。

注：
1、该函数返回当前位置之前第N次交易的盈亏额，如果赢利该函数返回正数，亏损返回负数。
2、从开仓到持仓为0被视为一次交易。
3、N支持写为变量或者参数。
4、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
5、TPROFIT_REF的计算不包含手续费
6、按交易合约计算

例：
CROSS(C,MA(C,5)),BK(1);//最新价上穿五周期均线，开仓一手
TPROFIT_REF(1)>0&&TPROFIT_REF(2)>0&&TPROFIT_REF(1)>TPROFIT_REF(2),BK(2);//最近连续两笔交易都是赢利的，且赢利额是增长的，加仓2手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平多头持仓
`;

const TRACING_ORDER = new MySymbol();
TRACING_ORDER.label = "TRACING_ORDER";
TRACING_ORDER.description = "设置信号进行追价下单";
TRACING_ORDER.insertText = "";
TRACING_ORDER.body = "TRACING_ORDER( , , )";
TRACING_ORDER.kind = MySymbolKind.Function;
TRACING_ORDER.marketType = MyMarketType.TPlusZeroStrategyFunction;
TRACING_ORDER.functionType = MyFunctionType.SignalExecutionFunction;
TRACING_ORDER.returnType = MyFunctionReturnType.None;
TRACING_ORDER.parameters = MySymbol.createParametersFromStrings([]);
TRACING_ORDER.detail = "设置信号进行追价下单";
TRACING_ORDER.documentation = `
TRACING_ORDER(Sig,PriceType,Time);设置SIG指令按照追价方式委托，PriceType为首次下单委托价格，Time 秒不成交市价追
TRACING_ORDER(Sig,PriceType,Time);设置信号进行追价下单

用法：
TRACING_ORDER(Sig,PriceType,Time)，设置SIG指令按照追价方式委托
PriceType为首次下单委托价格，Time 秒不成交市价追

1、SIG位置为交易指令，包括BK\\SK\\BP\\SP\\BPK\\SPK六种指令
2、PriceType位置为追价首次下单价格，包括以下五种：
（1）NEW_ORDER 最新价
（2）PASSIVE_ORDER 排队价
（3）ACTIVE_ORDER 对价
（4）CMPETITV_ORDER 超价
超价参数在下单主界面-参数设置-超价参数中设置
（5）SIGPRICE_ORDER 触发价
3、time位置数字的有效范围为1-1000，超过这个时间即撤掉委托，改为市价追
4、在进行历史回测时：
A：收盘价模型回测，信号价格为信号所在K线的收盘价。
B：指令价模型回测，信号价格为出现信号时的最新价。
5、该函数不支持加载在股票合约上

例：
C>HV(H,20),BK;//价格大于前20周期高点买开仓
C<LV(L,20),SK;//价格小于前20周期低点卖开仓
C>HV(H,10),BP;//价格大于前10周期高点平空仓
C<LV(L,10),SP;//价格小于前10周期低点平多仓
TRACING_ORDER(BK,NEW_ORDER,2);//买开的委托以最新价委托，2秒未成交市价追
TRACING_ORDER(SK,PASSIVE_ORDER,2);//卖开的委托以排队价委托，2秒未成交市价追
TRACING_ORDER(BP,SIGPRICE_ORDER,2);//买平的委托以触发价委托，2秒未成交市价追
TRACING_ORDER(SP,CMPETITV_ORDER,2);//卖平的委托以超价委托，2秒未成交市价追
AUTOFILTER;
`;

const TRADE_AGAIN = new MySymbol();
TRADE_AGAIN.label = "TRADE_AGAIN";
TRADE_AGAIN.description = "限制信号函数";
TRADE_AGAIN.insertText = "";
TRADE_AGAIN.body = "TRADE_AGAIN()";
TRADE_AGAIN.kind = MySymbolKind.Function;
TRADE_AGAIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
TRADE_AGAIN.functionType = MyFunctionType.CalculationControlFunction;
TRADE_AGAIN.returnType = MyFunctionReturnType.None;
TRADE_AGAIN.parameters = MySymbol.createParametersFromStrings([]);
TRADE_AGAIN.detail = "限制信号函数";
TRADE_AGAIN.documentation = `
TRADE_AGAIN(N),含有该函数的加减仓模型中,同一指令行可以连续出N个信号
TRADE_AGAIN(N) 同一指令行可以连续出N个信号。

用法：
TRADE_AGAIN(N) 含有该函数的加减仓模型中,同一指令行可以连续出N个信号。

注：
1、该函数只适用于加减仓模型
2、模型中写入该函数，一根K线只支持一个信号。不可以和MULTSIG、MULTSIG_MIN函数同时使用。
3、N个信号必须连续执行，如果期间出现其他信号，则N从新计算。
4、N不可以写为变量。

例：
C>O,BK(1);//K线为阳线，买开1手
C<O,SP(BKVOL);//K线为阴线，卖平多头持仓
TRADE_AGAIN(3);//同一指令行可以连续执行3次（如果连续三根阳线，则连续三次买开仓）
`;

const TRADE_OTHER = new MySymbol();
TRADE_OTHER.label = "TRADE_OTHER";
TRADE_OTHER.description = "指定交易合约";
TRADE_OTHER.insertText = "";
TRADE_OTHER.body = "TRADE_OTHER()";
TRADE_OTHER.kind = MySymbolKind.Function;
TRADE_OTHER.marketType = MyMarketType.TPlusZeroStrategyFunction;
TRADE_OTHER.functionType = MyFunctionType.SignalExecutionFunction;
TRADE_OTHER.returnType = MyFunctionReturnType.None;
TRADE_OTHER.parameters = MySymbol.createParametersFromStrings([]);
TRADE_OTHER.detail = "指定交易合约";
TRADE_OTHER.documentation = `
TRADE_OTHER('CODE')，指定CODE合约为交易合约
TRADE_OTHER('CODE') 指定CODE合约为交易合约
模型出现信号后，下单时交易指定的CODE合约

注：
1、CODE位置可写为'AUTO'、'XX主连'、'SEMIAUTO'或具体合约的交易代码，不支持写入文华码
（1）该函数写为TRADE_OTHER('AUTO')时，可以加载到加权合约上，自动交易主力合约，实现自动换月移仓。
（2）该函数写为TRADE_OTHER('SEMIAUTO')时，可以加载到加权合约上，自动交易主力合约，主力切换时不自动移仓，需手动处理。
（3）该函数写为TRADE_OTHER('XX主连')时，可以加载到商品加权、中金所加权、文华指数、全球股票指数上，自动交易主力合约，实现自动移仓换月。
（4）该函数写为TRADE_OTHER('交易代码')时，可以加载到除主连的其他所有合约上，交易指定合约。
2、
（1）CODE位置写为'AUTO'、'SEMIAUTO'、'XX主连'时：
A、模型加载在加权合约上时，从主连数据开始时间开始计算信号。
B、不支持加载到量能周期、秒周期、日线以上周期使用。
（2）CODE位置写为具体合约时：
A、从该合约数据开始时间开始计算信号。
B、不支持加载到量能周期、秒周期上使用。
3、回测时：
（1）信号价格取值为该函数定义的交易合约的信号价格。
（2）移仓换月：在换月当天，旧主力以前一根K线的收盘价平仓，新主力以当前K线开盘价开新仓。
4、模组运行时：
（1）数据合约为加载模组时选择的数据合约，交易合约为该函数指定的合约。不写入该函数时，交易和数据合约一致。
（2）移仓换月：
A、CODE位置写为'AUTO'、'XX主连'：主力切换时，模组单元持仓自动切换为新主力合约；模组自动平旧主力合约，开新主力合约，委托价格均默认为市价。
B、CODE位置写为'SEMIAUTO'：主力切换时，模组不自动移仓，模组单元持仓需点击模组界面“'SEMIAUTO移仓”按钮进行手动移仓。
5、数据合约和交易合约的数据不对齐时，交易合约的信号价格取交易合约最后一根K线的收盘价。
6、该函数必须在有信号的模型中使用。
7、该函数不支持加载到副图中。
8、该函数不支持加载到页面盒子中使用。
9、该函数不支持与逐笔计算的运行优化函数连用，即不支持与CHECKSIG、MULTSIG连用。
例：
CROSS(C,MA(C,5)),BK;//最新价上穿5周期均线做多
CROSS(MA(C,5),C),SP;//最新价下穿5周期均线平多
TRADE_OTHER('AUTO');//自动移仓换月
AUTOFILTER;
`;

const TRADE_REF = new MySymbol();
TRADE_REF.label = "TRADE_REF";
TRADE_REF.description = "判断前N次交易是否赢利";
TRADE_REF.insertText = "";
TRADE_REF.body = "TRADE_REF( )";
TRADE_REF.kind = MySymbolKind.Function;
TRADE_REF.marketType = MyMarketType.TPlusZeroStrategyFunction;
TRADE_REF.functionType = MyFunctionType.PositionManagementFunction;
TRADE_REF.returnType = MyFunctionReturnType.None;
TRADE_REF.parameters = MySymbol.createParametersFromStrings([]);
TRADE_REF.detail = "判断前N次交易是否赢利";
TRADE_REF.documentation = `
TRADE_REF(N)判断前N次交易是否赢利
TRADE_REF(N) 判断前N次交易是否赢利。

注：
1、该函数返回当前位置之前的第N次交易是否赢利，如果赢利返回1，亏损返回0。
2、从开仓到持仓为0被视为一次交易。
3、N支持写为变量或者参数。
4、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
5、TRADE_REF的计算不包含手续费
6、按交易合约计算

例：
CROSS(C,MA(C,5)),BK(1);//最新价上穿五周期均线，开仓一手
TRADE_REF(1)=1&&TRADE_REF(2)=1&&TRADE_REF(3)=1,BK(2);//最近连续三笔交易都是赢利的，加仓2手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平多头持仓
`;

const TRADE_SMOOTHING = new MySymbol();
TRADE_SMOOTHING.label = "TRADE_SMOOTHING";
TRADE_SMOOTHING.description = "消除隔日跳空函数";
TRADE_SMOOTHING.insertText = "";
TRADE_SMOOTHING.body = "TRADE_SMOOTHING";
TRADE_SMOOTHING.kind = MySymbolKind.Function;
TRADE_SMOOTHING.marketType = MyMarketType.TPlusZeroStrategyFunction;
TRADE_SMOOTHING.functionType =
    MyFunctionType.CandlestickDataReference;
TRADE_SMOOTHING.returnType = MyFunctionReturnType.None;
TRADE_SMOOTHING.parameters = MySymbol.createParametersFromStrings([]);
TRADE_SMOOTHING.detail = "消除隔日跳空函数";
TRADE_SMOOTHING.documentation = `
TRADE_SMOOTHING;消除隔夜跳空函数
TRADE_SMOOTHING 消除隔日跳空函数

用法：
模型中含有TRADE_SMOOTHING函数，主图K线为消除跳空后计算得到的K线，模型根据消除跳空后K线取值计算

注：
1、该函数只支持加载在分钟或小时周期使用
2、该函数只能加载在具体合约上使用，不支持加载在加权、主连等虚拟合约上使用
3、该函数支持加载在国内期货品种上使用
3、该函数不可以与TRADE_OTHER一起使用
4、该函数不支持加载到盒子中使用
5、模型中含有该函数，会叠加蓝色K线，蓝色K线为未消除跳空的真实K线数据
6、消除跳空机制说明：
（1）该函数只消除两个交易日之间的跳空
（2）合约上市首日数据为该合约真实数据，之后数据为进行消除跳空处理后拟合数据；
（3）模型含有该函数，K线图数据与盘口数据不一致

例1
MA5:MA(C,5);
MA10:MA(C,10);
CROSSUP(MA5,MA10),BPK;
CROSSDOWN(MA5,MA10),SPK;
TRADE_SMOOTHING;//消除跳空后的K线的均线满足上穿、下穿条件后执行信号
AUTOFILTER;
`;

const TREND = new MySymbol();
TREND.label = "TREND";
TREND.description = "获取K线趋势";
TREND.insertText = "";
TREND.body = "TREND";
TREND.kind = MySymbolKind.Function;
TREND.marketType = MyMarketType.TPlusZeroStrategyFunction;
TREND.functionType = MyFunctionType.LogicalJudgmentFunction;
TREND.returnType = MyFunctionReturnType.None;
TREND.parameters = MySymbol.createParametersFromStrings([]);
TREND.detail = "获取K线趋势";
TREND.documentation = `
TREND,获取K线趋势默认返回0，最高最低同时出现为1，最低先出现为2，最高先出现为3
TREND 获取K线趋势。

用法：
TREND  K线的形成过程中最高价先出现，则返回值为3；最低价先出现，则返回值为2；若最高和最低一起出现，则返回值为1；默认为0。
`;

const TRMA = new MySymbol();
TRMA.label = "TRMA";
TRMA.description = "三角移动平均";
TRMA.insertText = "";
TRMA.body = "TRMA( , )";
TRMA.kind = MySymbolKind.Function;
TRMA.marketType = MyMarketType.BasicFunction;
TRMA.functionType = MyFunctionType.FinancialStatisticsFunction;
TRMA.returnType = MyFunctionReturnType.None;
TRMA.parameters = MySymbol.createParametersFromStrings([]);
TRMA.detail = "三角移动平均";
TRMA.documentation = `
TRMA(X,N)，求X在N周期内的三角移动平均
TRMA(X,N)： 求X在N个周期的三角移动平均值。

算法：三角移动平均线公式，是采用算数移动平均，并且对第一个移动平均线再一次应用算数移动平均。
TRMA(X,N) 算法如下
ma_half= MA(X,N/2)
trma=MA(ma_half,N/2)

注：
1、N包含当前k线。
2、当N为有效值，但当前的k线数不足N根，函数返回空值。
3、N为0或空值的情况下，函数返回空值。
4、N支持使用变量

例1：
TRMA5:TRMA(CLOSE,5);//计算5个周期内收盘价的三角移动平均。(N不能被2整除)
TRMA(CLOSE,5)=MA(MA(CLOSE,(5+1)/2),(5+1)/2);
例2:
TRMA10:TRMA(CLOSE,10);// 计算10个周期内收盘价的三角移动平均。(N能被2整除)
TRMA(CLOSE,10)=MA(MA(CLOSE,10/2),(10/2)+1);
`;

const TSEQLOSS = new MySymbol();
TSEQLOSS.label = "TSEQLOSS";
TSEQLOSS.description = "返回最大连续亏损额";
TSEQLOSS.insertText = "";
TSEQLOSS.body = "TSEQLOSS";
TSEQLOSS.kind = MySymbolKind.Function;
TSEQLOSS.marketType = MyMarketType.TPlusZeroStrategyFunction;
TSEQLOSS.functionType = MyFunctionType.PositionManagementFunction;
TSEQLOSS.returnType = MyFunctionReturnType.None;
TSEQLOSS.parameters = MySymbol.createParametersFromStrings([]);
TSEQLOSS.detail = "返回最大连续亏损额";
TSEQLOSS.documentation = `
TSEQLOSS返回最大连续亏损额
TSEQLOSS 返回最大连续亏损额。

注：
1、该函数返回当前位置之前，连续亏损额的最大值。
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TSEQLOSS的计算不包含手续费。
5、因信号消失产生的盈亏未纳入TSEQLOSS的计算。

例：
CROSS(C,MA(C,5)),BK(2);//最新价上穿五周期均线，开仓两手
CROSS(MA(C,5),C),SP(BKVOL);//最新价下穿五周期均线，卖平全部持仓
TSEQLOSS<-5000,SK(2);//最大连续亏损额达到5000时，反向开仓2手
`;

const TSEQWIN = new MySymbol();
TSEQWIN.label = "TSEQWIN";
TSEQWIN.description = "返回最大连续赢利额";
TSEQWIN.insertText = "";
TSEQWIN.body = "TSEQWIN";
TSEQWIN.kind = MySymbolKind.Function;
TSEQWIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
TSEQWIN.functionType = MyFunctionType.PositionManagementFunction;
TSEQWIN.returnType = MyFunctionReturnType.None;
TSEQWIN.parameters = MySymbol.createParametersFromStrings([]);
TSEQWIN.detail = "返回最大连续赢利额";
TSEQWIN.documentation = `
TSEQWIN返回最大连续赢利额
TSEQWIN 返回最大连续赢利额。

注：
1、该函数返回当前位置之前，连续赢利额的最大值。
2、从开仓到持仓为0被视为一次交易。
3、收盘价模型，平仓盈亏=（平仓信号当根K线的收盘价-开仓价格）*手数*交易单位。
指令价模型，平仓盈亏=（平仓信号的指令价-开仓价格）*手数*交易单位。
4、TSEQWIN的计算不包含手续费。
5、因信号消失产生的盈亏未纳入TSEQWIN的计算。

例：
CROSS(C,MA(C,5)),BK(2);//最新价上穿五周期均线，开仓两手
CROSS(MA(C,5),C),SP(1);//最新价下穿五周期均线，卖平1手
TSEQWIN>20,BK(2);//最大连续赢利额大于20时，加仓2手
`;

const TSMA = new MySymbol();
TSMA.label = "TSMA";
TSMA.description = "时间序列移动平均";
TSMA.insertText = "";
TSMA.body = "TSMA( , )";
TSMA.kind = MySymbolKind.Function;
TSMA.marketType = MyMarketType.BasicFunction;
TSMA.functionType = MyFunctionType.FinancialStatisticsFunction;
TSMA.returnType = MyFunctionReturnType.None;
TSMA.parameters = MySymbol.createParametersFromStrings([]);
TSMA.detail = "时间序列移动平均";
TSMA.documentation = `
TSMA(X,N)，求X在N周期内的时间序列三角移动平均
TSMA(X,N)：求X在N个周期内的时间序列三角移动平均
TSMA(a,n) 算法如下：
ysum=a[i]+a[i-1]+...+a[i-n+1]
xsum=i+i-1+..+i-n+1
xxsum=i*i+(i-1)*(i-1)+...+(i-n+1)*(i-n+1)
xysum=i*a[i]+(i-1)*a[i-1]+...+(i-n+1)*a[i-n+1]
k=(xysum -(ysum/n)*xsum)/(xxsum- xsum/n * xsum) //斜率
b= ysum/n - k*xsum/n
forcast[i]=k*i+b //线性回归
tsma[i] = forcast[i]+k  //线性回归+斜率

注：
1、当N为有效值，但当前的k线数不足N根，函数返回空值。
2、N为0或空值的情况下，函数返回空值。
3、N支持使用变量
例1：
TSMA5:TSMA(CLOSE,5);//计算5个周期内收盘价的序列三角移动平均
`;

const UNIT = new MySymbol();
UNIT.label = "UNIT";
UNIT.description = "取数据合约的交易单位";
UNIT.insertText = "";
UNIT.body = "UNIT";
UNIT.kind = MySymbolKind.Function;
UNIT.marketType = MyMarketType.BasicFunction;
UNIT.functionType = MyFunctionType.CandlestickDataReference;
UNIT.returnType = MyFunctionReturnType.None;
UNIT.parameters = MySymbol.createParametersFromStrings([]);
UNIT.detail = "取数据合约的交易单位";
UNIT.documentation = `
UNIT,取加载数据合约的交易单位
取数据合约的交易单位。
用法：
UNIT 取加载数据合约的交易单位。
`;

const UNIT1 = new MySymbol();
UNIT1.label = "UNIT1";
UNIT1.description = "取交易合约的交易单位";
UNIT1.insertText = "";
UNIT1.body = "UNIT1";
UNIT1.kind = MySymbolKind.Function;
UNIT1.marketType = MyMarketType.TPlusZeroStrategyFunction;
UNIT1.functionType = MyFunctionType.CandlestickDataReference;
UNIT1.returnType = MyFunctionReturnType.None;
UNIT1.parameters = MySymbol.createParametersFromStrings([]);
UNIT1.detail = "取交易合约的交易单位";
UNIT1.documentation = `
UNIT1,取交易合约的交易单位
UNIT1  取交易合约的交易单位。
用法：
UNIT1 取交易合约的交易单位。
`;

const UNITLIMIT = new MySymbol();
UNITLIMIT.label = "UNITLIMIT";
UNITLIMIT.description = "取交易合约的限制拥有持仓数";
UNITLIMIT.insertText = "";
UNITLIMIT.body = "UNITLIMIT";
UNITLIMIT.kind = MySymbolKind.Function;
UNITLIMIT.marketType = MyMarketType.TPlusZeroStrategyFunction;
UNITLIMIT.functionType = MyFunctionType.CandlestickDataReference;
UNITLIMIT.returnType = MyFunctionReturnType.None;
UNITLIMIT.parameters = MySymbol.createParametersFromStrings([]);
UNITLIMIT.detail = "取交易合约的限制拥有持仓数";
UNITLIMIT.documentation = `
UNITLIMIT，取交易合约的限制拥有持仓数
UNITLIMIT 取交易合约的限制拥有持仓数

用法：UNITLIMIT自动取该合约交易所规定的限制拥有持仓数，避免违规。

注：
取不到时返回100000（如加权合约）

例:
(BKVOL+1)<=UNITLIMIT&&C>O,BK(1);//多头持仓再增加一手仍然小于交易合约的限制拥有的持仓数，并且满足收盘价大于开盘价的开仓条件时，买开一手。
`;

const VALIGN = new MySymbol();
VALIGN.label = "VALIGN";
VALIGN.description = "设置文字对齐方式（上中下）";
VALIGN.insertText = "";
VALIGN.body = "VALIGN";
VALIGN.kind = MySymbolKind.Function;
VALIGN.marketType = MyMarketType.BasicFunction;
VALIGN.functionType = MyFunctionType.DrawingFunction;
VALIGN.returnType = MyFunctionReturnType.None;
VALIGN.parameters = MySymbol.createParametersFromStrings([]);
VALIGN.detail = "设置文字对齐方式（上中下）";
VALIGN.documentation = `
VALIGN0,VALIGN1,VALIGN2,分别表示文字上对齐，居中对齐，下对齐
设置文字对齐方式（上中下）。

用法：DRAWTEXT(COND,PRICE,TEXT),VALIGNX;

COND条件满足时，在PRICE的位置，标注TEXT，文字按照VALIGNX写入的方式对齐。VALIGN0，VALIGN1，VALIGN2，分别表示上对齐，居中对齐，下对齐。

例：
DRAWTEXT(C>O,H,'涨'),ALIGN1,VALIGN1,FONTSIZE20,COLORGREEN;//在阳线的最高价标注文字“涨”，文字居中对齐，字体大小为20，颜色为绿色。
`;

const VALUEWHEN = new MySymbol();
VALUEWHEN.label = "VALUEWHEN";
VALUEWHEN.description = "取值";
VALUEWHEN.insertText = "";
VALUEWHEN.body = "VALUEWHEN( , )";
VALUEWHEN.kind = MySymbolKind.Function;
VALUEWHEN.marketType = MyMarketType.BasicFunction;
VALUEWHEN.functionType = MyFunctionType.LogicalJudgmentFunction;
VALUEWHEN.returnType = MyFunctionReturnType.None;
VALUEWHEN.parameters = MySymbol.createParametersFromStrings([]);
VALUEWHEN.detail = "取值";
VALUEWHEN.documentation = `
VALUEWHEN(COND,X)，取满足条件COND时的X值
VALUEWHEN(COND,X) 当COND条件成立时，取X的当前值。如COND条件不成立，则取上一次COND条件成立时X的值。

注：
X可以是数值也可以是条件。

例1
VALUEWHEN(HIGH>REF(HHV(HIGH,5),1),HIGH);表示当前最高价大于前五个周期最高价的最大值时返回当前最高价
例2：
VALUEWHEN(DATE<>REF(DATE,1),O);表示取当天第一根k线的开盘价（即当天开盘价）
例3：
VALUEWHEN(DATE<>REF(DATE,1),L>REF(H,1));//表示在当天第一根k线上判断当前最低价是否大于昨天最后一根K线的最高价。返回1，说明当天跳空高开。返回0，说明当天不满足跳空高开条件。
`;

const VAR = new MySymbol();
VAR.label = "VAR";
VAR.description = "样本方差";
VAR.insertText = "";
VAR.body = "VAR( , )";
VAR.kind = MySymbolKind.Function;
VAR.marketType = MyMarketType.BasicFunction;
VAR.functionType = MyFunctionType.MathematicalStatisticsFunction;
VAR.returnType = MyFunctionReturnType.None;
VAR.parameters = MySymbol.createParametersFromStrings([]);
VAR.detail = "样本方差";
VAR.documentation = `
VAR(X,N)，求X在N周期内的样本方差
VAR(X,N)求X在N周期内的样本方差。

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值；
5、N支持使用变量

算法举例：计算VAR(C,3);在最近一根K线上的值。
用麦语言函数可以表示如下：

(SQUARE(C-MA(C,3))+SQUARE(REF(C,1)-MA(C,3))+SQUARE(REF(C,2)-MA(C,3)))/(3-1);

例：
VAR(C,5)求收盘价在5周期内的样本方差。
//表示总体方差的N/(N-1)倍，VAR(C,5)表示收盘价的5周期总体样本方差的5/4倍。
`;

const VARP = new MySymbol();
VARP.label = "VARP";
VARP.description = "总体方差";
VARP.insertText = "";
VARP.body = "VARP( , )";
VARP.kind = MySymbolKind.Function;
VARP.marketType = MyMarketType.BasicFunction;
VARP.functionType = MyFunctionType.MathematicalStatisticsFunction;
VARP.returnType = MyFunctionReturnType.None;
VARP.parameters = MySymbol.createParametersFromStrings([]);
VARP.detail = "总体方差";
VARP.documentation = `
VARP(X,N)，求X的N周期总体方差
VARP(X,N)：为X的N周期总体方差

注：
1、N包含当前k线。
2、N为有效值，但当前的k线数不足N根，该函数返回空值；
3、N为0时，该函数返回空值；
4、N为空值，该函数返回空值；
5、N支持使用变量

算法举例：计算VARP(C,3);在最近一根K线上的值。
用麦语言函数可以表示如下：
(SQUARE(C-MA(C,3))+SQUARE(REF(C,1)-MA(C,3))+SQUARE(REF(C,2)-MA(C,3)))/3;

例：
VARP(C,5)为收盘价的5周期总体方差
//表示数据偏差平方和除以总周期数N，VARP(C,5)表示收盘价5个周期的数据偏差平方和除以5.
`;

const VERTLINE = new MySymbol();
VERTLINE.label = "VERTLINE";
VERTLINE.description = "画垂直线";
VERTLINE.insertText = "";
VERTLINE.body = "VERTLINE( , )";
VERTLINE.kind = MySymbolKind.Function;
VERTLINE.marketType = MyMarketType.BasicFunction;
VERTLINE.functionType = MyFunctionType.DrawingFunction;
VERTLINE.returnType = MyFunctionReturnType.None;
VERTLINE.parameters = MySymbol.createParametersFromStrings([]);
VERTLINE.detail = "画垂直线";
VERTLINE.documentation = `
VERTLINE(COND,COLOR)，条件COND满足时，以颜色COLOR画垂直线
VERTLINE 画垂直线。

用法：
VERTLINE(COND,COLOR); 
条件COND满足时，以颜色COLOR画垂直线。

注：
1、该函数支持在函数后设置线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的写法：
VERTLINE(COND,COLOR),LINETHICK;
2、不支持将该函数定义为变量，即不支持下面的写法：
A:VERTLINE(COND,COLOR);

例1：
VERTLINE(HIGH>=HHV(HIGH,30),COLORRED);//表示在价格创30天新高时画红色垂直线

例2：
VERTLINE(LOW<=LLV(LOW,30),COLORBLUE),LINETHICK3;//表示在价格创30天新低时画蓝色垂直线，线型粗细为3。
`;

const VERTLINE1 = new MySymbol();
VERTLINE1.label = "VERTLINE1";
VERTLINE1.description = "画垂直线";
VERTLINE1.insertText = "";
VERTLINE1.body = "VERTLINE1( )";
VERTLINE1.kind = MySymbolKind.Function;
VERTLINE1.marketType = MyMarketType.BasicFunction;
VERTLINE1.functionType = MyFunctionType.DrawingFunction;
VERTLINE1.returnType = MyFunctionReturnType.None;
VERTLINE1.parameters = MySymbol.createParametersFromStrings([]);
VERTLINE1.detail = "画垂直线";
VERTLINE1.documentation = `
VERTLINE1(COND)条件COND满足时，画垂直线
VERTLINE1 画垂直线。

用法：
VERTLINE1(COND); 
条件COND满足时，画垂直线。

注：
1、该函数支持在函数后设置颜色、线型（LINETHICK1 - LINETHICK7、POINTDOT、DOT），即支持下面的两种写法：
VERTLINE1(COND),LINETHICK,COLOR;
VERTLINE1(COND),COLOR,LINETHICK;
2、不支持将该函数定义为变量，即不支持下面的写法：
A:VERTLINE1(COND);

例1：
VERTLINE1(HIGH>=HHV(HIGH,30)),COLORRED;//表示在价格创30天新高时画红色垂直线。
例2：
VERTLINE1(LOW<=LLV(LOW,30)),COLORBLUE,LINETHICK3;//表示在价格创30天新低时画蓝色垂直线,线型粗细为3。
`;

const VOL = new MySymbol();
VOL.label = "VOL";
VOL.description = "取得K线图的成交量";
VOL.insertText = "";
VOL.body = "VOL";
VOL.kind = MySymbolKind.Function;
VOL.marketType = MyMarketType.BasicFunction;
VOL.functionType = MyFunctionType.CandlestickDataReference;
VOL.returnType = MyFunctionReturnType.None;
VOL.parameters = MySymbol.createParametersFromStrings([]);
VOL.detail = "取得K线图的成交量";
VOL.documentation = `
VOL取成交量
VOL 取得K线图的成交量。

注：
可简写为V。
VOL加载到非TICK图中，返回当根K线的成交量；VOL加载到TICK图中，在当根TICK上的返回值为当天所有TICK成交量的累计值。

例1：
VV:V;//定义VV为成交量
例2：
REF(V,1);//表示前一个周期的成交量
例3：
V>=REF(V,1);//成交量大于前一个周期的成交量，表示成交量增加(V为VOL的简写)。
`;

const VOLATILITY = new MySymbol();
VOLATILITY.label = "VOLATILITY";
VOLATILITY.description = "取期权历史波动率";
VOLATILITY.insertText = "";
VOLATILITY.body = "VOLATILITY()";
VOLATILITY.kind = MySymbolKind.Function;
VOLATILITY.marketType = MyMarketType.BasicFunction;
VOLATILITY.functionType = MyFunctionType.CandlestickDataReference;
VOLATILITY.returnType = MyFunctionReturnType.None;
VOLATILITY.parameters = MySymbol.createParametersFromStrings([]);
VOLATILITY.detail = "取期权历史波动率";
VOLATILITY.documentation = `
VOLATILITY(N)，取期权历史波动率
VOLATILITY(N)，取期权历史波动率

原理：
历史波动率：标的合约的波动率，反映过去N个周期标的合约的波动率值。

注：
1、该函数仅支持加载在期权上，加载在其他合约返回空值；
2、该函数不支持加载在量能周期；
3、参数N取大于1的整数，不支持设置为变量；即不支持：
A:VOLATILITY(DAY);
4、该函数不支持在跨周期、跨合约的引用模型中使用；
5、该函数不支持与运行优化函数一起使用。

例1：
AA:VOLATILITY(60);//AA返回过去60个周期的历史波动率。



`;

const VOLMARGIN = new MySymbol();
VOLMARGIN.label = "VOLMARGIN";
VOLMARGIN.description = "理论持仓保证金";
VOLMARGIN.insertText = "";
VOLMARGIN.body = "VOLMARGIN";
VOLMARGIN.kind = MySymbolKind.Function;
VOLMARGIN.marketType = MyMarketType.TPlusZeroStrategyFunction;
VOLMARGIN.functionType = MyFunctionType.PositionManagementFunction;
VOLMARGIN.returnType = MyFunctionReturnType.None;
VOLMARGIN.parameters = MySymbol.createParametersFromStrings([]);
VOLMARGIN.detail = "理论持仓保证金";
VOLMARGIN.documentation = `
VOLMARGIN理论持仓保证金
VOLMARGIN 理论持仓保证金

用法：VOLMARGIN返回当前理论持仓保证金，用于资金管理。

计算公式：VOLMARGIN=价格*交易单位*手数*保证金比例

注：
1、该保证金为动态的保证金，随价格变化而变化
2、模组中手动调仓会影响VOLMARGIN的返回值
3、开仓信号当根k线VOLMARGIN=开仓价*交易单位*手数*保证金比例，根据不同信号执行方式，开仓价为：
信号执行方式为‘k线走完确认信号下单’开仓为当根K线的收盘价
信号执行方式为‘XXX下单，K线走完进行信号复核’，开仓价为信号发出时行情的最新价
信号执行方式为‘出信号立即下单，不进行复核’，开仓价为信号发出时行情的最新价
4、平仓信号当根k线和无持仓k线，VOLMARGIN返回值为0。
`;

const VOLSTICK = new MySymbol();
VOLSTICK.label = "VOLSTICK";
VOLSTICK.description = "画柱线";
VOLSTICK.insertText = "";
VOLSTICK.body = "VOLSTICK";
VOLSTICK.kind = MySymbolKind.Function;
VOLSTICK.marketType = MyMarketType.BasicFunction;
VOLSTICK.functionType = MyFunctionType.DrawingFunction;
VOLSTICK.returnType = MyFunctionReturnType.None;
VOLSTICK.parameters = MySymbol.createParametersFromStrings([]);
VOLSTICK.detail = "画柱线";
VOLSTICK.documentation = `
VOLSTICK画柱线，K线为阳线为红色，K线为阴线为青色
VOLSTICK 画柱线，K线为阳线画红色空心柱，K线为阴线画青色实心柱。

注：
1、柱高表示数值大小。
2、K线为阳线，则对应的柱显示为红色空心，K线为阴线，则对应的柱显示为青色实心。
3、默认红柱为空心柱，画实心柱需要加入SOLID函数。

例1：
VOL,VOLSTICK;//画成交量柱状线，柱高表示成交量大小，阳线对应红色空心柱，阴线对应青色实心柱。

例2：
VOL,VOLSTICK,SOLID;//画成交量柱状线，柱线实心显示。
`;

const VOLTICK = new MySymbol();
VOLTICK.label = "VOLTICK";
VOLTICK.description = "返回K线是由多少笔TICK生成";
VOLTICK.insertText = "";
VOLTICK.body = "VOLTICK";
VOLTICK.kind = MySymbolKind.Function;
VOLTICK.marketType = MyMarketType.TPlusZeroStrategyFunction;
VOLTICK.functionType = MyFunctionType.TimeFunction;
VOLTICK.returnType = MyFunctionReturnType.None;
VOLTICK.parameters = MySymbol.createParametersFromStrings([]);
VOLTICK.detail = "返回K线是由多少笔TICK生成";
VOLTICK.documentation = `
VOLTICK返回K线是由多少笔TICK生成
量能周期返回这根K线形成的TICK笔数，单位：笔。
用法：
VOLTICK 量能周期时，返回当前K线形成的TICK笔数。
`;

const VOLTIME = new MySymbol();
VOLTIME.label = "VOLTIME";
VOLTIME.description = "取K线形成的时间（秒）";
VOLTIME.insertText = "";
VOLTIME.body = "VOLTIME";
VOLTIME.kind = MySymbolKind.Function;
VOLTIME.marketType = MyMarketType.TPlusZeroStrategyFunction;
VOLTIME.functionType = MyFunctionType.TimeFunction;
VOLTIME.returnType = MyFunctionReturnType.None;
VOLTIME.parameters = MySymbol.createParametersFromStrings([]);
VOLTIME.detail = "取K线形成的时间（秒）";
VOLTIME.documentation = `
VOLTIME取K线形成的时间（秒）
量能周期返回这根K线形成的时间，单位：秒。
用法：
VOLTIME 量能周期时，返回当前K线形成的时间。
`;

const VOLUMESTICK = new MySymbol();
VOLUMESTICK.label = "VOLUMESTICK";
VOLUMESTICK.description = "画柱线";
VOLUMESTICK.insertText = "";
VOLUMESTICK.body = "VOLUMESTICK";
VOLUMESTICK.kind = MySymbolKind.Function;
VOLUMESTICK.marketType = MyMarketType.BasicFunction;
VOLUMESTICK.functionType = MyFunctionType.DrawingFunction;
VOLUMESTICK.returnType = MyFunctionReturnType.None;
VOLUMESTICK.parameters = MySymbol.createParametersFromStrings([]);
VOLUMESTICK.detail = "画柱线";
VOLUMESTICK.documentation = `
VOLUMESTICK画柱线，K线为阳线为红色，K线为阴线为青色
VOLUMESTICK 画柱线，K线为阳线画红色空心柱，K线为阴线画青色实心柱。

注：
1、柱高表示数值大小。
2、K线为阳线，则对应的柱显示为红色空心，K线为阴线，则对应的柱显示为青色实心。
3、默认红柱为空心柱，画实心柱需要加入SOLID函数。

例1：
VOL,VOLUMESTICK;//画成交量柱状线，柱高表示成交量大小，阳线对应红色空心柱，阴线对应青色实心柱。

例2：
VOL,VOLUMESTICK,SOLID;//画成交量柱状线，柱线实心显示。
`;

const WEEKDAY = new MySymbol();
WEEKDAY.label = "WEEKDAY";
WEEKDAY.description = "取得星期数";
WEEKDAY.insertText = "";
WEEKDAY.body = "WEEKDAY";
WEEKDAY.kind = MySymbolKind.Function;
WEEKDAY.marketType = MyMarketType.BasicFunction;
WEEKDAY.functionType = MyFunctionType.TimeFunction;
WEEKDAY.returnType = MyFunctionReturnType.None;
WEEKDAY.parameters = MySymbol.createParametersFromStrings([]);
WEEKDAY.detail = "取得星期数";
WEEKDAY.documentation = `
WEEKDAY取得星期数（0-6）
WEEKDAY,取得星期数。

注：
1：WEEKDAY的取值范围是0—6。
2：该函数在周周期上显示的值始终为5，在月周期上返回K线结束当天的星期数。

例1：
N:=BARSLAST(MONTH<>REF(MONTH,1))+1;
COUNT(WEEKDAY=5,N)=3&&TIME>=1450,BP;
COUNT(WEEKDAY=5,N)=3&&TIME>=1450,SP;
AUTOFILTER;//每个月部分交易日尾盘自动平仓。
例2：
C>VALUEWHEN(WEEKDAY<REF(WEEKDAY,1),O)+10,BK; 
AUTOFILTER;
`;

const WEEKTRADE = new MySymbol();
WEEKTRADE.label = "WEEKTRADE";
WEEKTRADE.description = "周内交易函数";
WEEKTRADE.insertText = "";
WEEKTRADE.body = "WEEKTRADE";
WEEKTRADE.kind = MySymbolKind.Function;
WEEKTRADE.marketType = MyMarketType.TPlusZeroStrategyFunction;
WEEKTRADE.functionType = MyFunctionType.CalculationControlFunction;
WEEKTRADE.returnType = MyFunctionReturnType.None;
WEEKTRADE.parameters = MySymbol.createParametersFromStrings([]);
WEEKTRADE.detail = "周内交易函数";
WEEKTRADE.documentation = `
WEEKTRADE,周内交易函数
WEEKTRADE 周内交易函数。

用法：
模型中写入该函数，信号和资金每周重新初始化进行计算，与历史割裂。

注：
1、该函数不支持自定义N日、周、月、季、年周期，其他周期均支持。
2、回测报告中的出金/入金，为每周出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
4、（1）历史回测中，当周K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当周K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
WEEKTRADE;//使用每周数据计算
`;

const WEEKTRADE1 = new MySymbol();
WEEKTRADE1.label = "WEEKTRADE1";
WEEKTRADE1.description = "周内交易函数";
WEEKTRADE1.insertText = "";
WEEKTRADE1.body = "WEEKTRADE1";
WEEKTRADE1.kind = MySymbolKind.Function;
WEEKTRADE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
WEEKTRADE1.functionType = MyFunctionType.CalculationControlFunction;
WEEKTRADE1.returnType = MyFunctionReturnType.None;
WEEKTRADE1.parameters = MySymbol.createParametersFromStrings([]);
WEEKTRADE1.detail = "周内交易函数";
WEEKTRADE1.documentation = `
WEEKTRADE1周内交易函数，且历史数据不参与计算。
WEEKTRADE1 周内交易函数。

用法：
WEEKTRADE1 模型中写入该函数，信号和资金每周重新初始化进行计算，与历史割裂，并且每一个函数只使用当周K线数据进行计算，历史数据不参与计算。

注：
1、该函数适用于周以下周期，不支持自定义日、周、月、季、年周期。
2、回测报告的出金/入金为周内的出金/入金的和。
3、不同函数对当周数据的引用不同，使用时需注意函数用法，如：
MA(X,N)函数N的取值：当周如果k线小于N根，则返回空值。如果k线为大于等于N根，则取N。
HHV(X,N)函数N的取值：当天如果k线小于N根，则返回实际根数，如果k线为大于等于N根，则取N。
4、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
5、（1）历史回测中，当周K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当周K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
WEEKTRADE1;//只用周内数据进行计算
`;

const WINNER = new MySymbol();
WINNER.label = "WINNER";
WINNER.description = "获利盘比例";
WINNER.insertText = "";
WINNER.body = "WINNER( )";
WINNER.kind = MySymbolKind.Function;
WINNER.marketType = MyMarketType.BasicFunction;
WINNER.functionType = MyFunctionType.FinancialStatisticsFunction;
WINNER.returnType = MyFunctionReturnType.None;
WINNER.parameters = MySymbol.createParametersFromStrings([]);
WINNER.detail = "获利盘比例";
WINNER.documentation = `
WINNER()，获利盘比例
WINNER 获利盘比例
用法:
WINNER(CLOSE),表示以当前收市价卖出的获利盘比例,例如返回0.1表示10%获利盘;WINNER(10.5)表示10.5元价格的获利盘比例

注：
该函数仅对日线分析周期有效

算法：
统计小于等于当前收盘价的K线成交量之和与所有K线成交量之和的比值；
`;

const WORD = new MySymbol();
WORD.label = "WORD";
WORD.description = "显示文字";
WORD.insertText = "";
WORD.body = "WORD( , )";
WORD.kind = MySymbolKind.Function;
WORD.marketType = MyMarketType.BasicFunction;
WORD.functionType = MyFunctionType.DrawingFunction;
WORD.returnType = MyFunctionReturnType.None;
WORD.parameters = MySymbol.createParametersFromStrings([]);
WORD.detail = "显示文字";
WORD.documentation = `
WORD,显示文字
WORD,显示文字。

用法：WORD(TYPE,TEXT) 当TYPE为1，则在K线最高价位置书写文字TEXT；不为1则在最低价位置书写文字TEXT。
注：
1：该函数与判断条件连用，如COND,WORD(TYPE,TEXT)。
2、该函数可以用ALIGN，VALIGN设置文字的对齐方式。
3、该函数可以用FONTSIZE设置文字显示的字体大小。
4、该函数可以用COLOR来设置文字显示的颜色。

例1：
CLOSE>OPEN,WORD(1,'阳'),ALIGN0,VALIGN0,FONTSIZE54,COLORRED;//表示K线收盘大于开盘时，在最高价上写"阳"字，文字左上对齐，字体大小为54，颜色为红色。
`;

const YCLOSE = new MySymbol();
YCLOSE.label = "YCLOSE";
YCLOSE.description = "取得K线图的昨收盘价";
YCLOSE.insertText = "";
YCLOSE.body = "YCLOSE";
YCLOSE.kind = MySymbolKind.Function;
YCLOSE.marketType = MyMarketType.TPlusZeroStrategyFunction;
YCLOSE.functionType = MyFunctionType.CandlestickDataReference;
YCLOSE.returnType = MyFunctionReturnType.None;
YCLOSE.parameters = MySymbol.createParametersFromStrings([]);
YCLOSE.detail = "取得K线图的昨收盘价";
YCLOSE.documentation = `
YCLOSE求某根K线的昨收盘价。
取得K线图的昨收盘价。
用法：
YCLOSE求某根K线的昨收盘价。
注：
1、用在周期小于'日'的K线上如5分钟K线，一小时k线，每根K线返回的值为前一天的收盘价
2、该函数不支持跨周期或跨合约引用。
3、主要用于股票合约取昨收盘价。
`;

const YEAR = new MySymbol();
YEAR.label = "YEAR";
YEAR.description = "年份";
YEAR.insertText = "";
YEAR.body = "YEAR";
YEAR.kind = MySymbolKind.Function;
YEAR.marketType = MyMarketType.BasicFunction;
YEAR.functionType = MyFunctionType.TimeFunction;
YEAR.returnType = MyFunctionReturnType.None;
YEAR.parameters = MySymbol.createParametersFromStrings([]);
YEAR.detail = "年份";
YEAR.documentation = `
YEAR取得年份（1970-2033）
YEAR，取得年份。

注：
YEAR的取值范围为1970—2033。

例1：
N:=BARSLAST(YEAR<>REF(YEAR,1))+1; 
HH:=REF(HHV(H,N),N);
LL:=REF(LLV(L,N),N); 
OO:=REF(VALUEWHEN(N=1,O),N);
CC:=REF(C,N);//取上一年的最高价，最低价，开盘价，收盘价。
例2：
NN:=IFELSE(YEAR>=2000 AND MONTH>=1,0,1);
`;

const YEARTRADE = new MySymbol();
YEARTRADE.label = "YEARTRADE";
YEARTRADE.description = "年内交易函数";
YEARTRADE.insertText = "";
YEARTRADE.body = "YEARTRADE";
YEARTRADE.kind = MySymbolKind.Function;
YEARTRADE.marketType = MyMarketType.TPlusZeroStrategyFunction;
YEARTRADE.functionType = MyFunctionType.CalculationControlFunction;
YEARTRADE.returnType = MyFunctionReturnType.None;
YEARTRADE.parameters = MySymbol.createParametersFromStrings([]);
YEARTRADE.detail = "年内交易函数";
YEARTRADE.documentation = `
YEARTRADE,年内交易函数
YEARTRADE 年内交易函数。

用法：
YEARTRADE 模型中写入该函数，信号和资金每年重新初始化进行计算，与历史割裂。

注：
1、该函数不支持年周期，其他周期均支持。
2、回测报告中的出金/入金，为每年出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\QUARTERTRADE\\YEARTRADE函数。
4、（1）历史回测中，当年K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当年K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
YEARTRADE;//使用每年数据计算
`;

const YEARTRADE1 = new MySymbol();
YEARTRADE1.label = "YEARTRADE1";
YEARTRADE1.description = "年内交易函数";
YEARTRADE1.insertText = "";
YEARTRADE1.body = "YEARTRADE1";
YEARTRADE1.kind = MySymbolKind.Function;
YEARTRADE1.marketType = MyMarketType.TPlusZeroStrategyFunction;
YEARTRADE1.functionType = MyFunctionType.CalculationControlFunction;
YEARTRADE1.returnType = MyFunctionReturnType.None;
YEARTRADE1.parameters = MySymbol.createParametersFromStrings([]);
YEARTRADE1.detail = "年内交易函数";
YEARTRADE1.documentation = `
YEARTRADE1年内交易函数，且历史数据不参与计算。
YEARTRADE1 年内交易函数。

用法：
YEARTRADE1 模型中写入该函数，信号和资金每年重新初始化进行计算，与历史割裂，并且每一个函数只使用当年K线数据进行计算，历史数据不参与计算。

注：
1、该函数不支持年周期，其他周期均支持。
2、回测报告中的出金/入金，为每年出金/入金的和。
3、模型中不能同时使用DAYTRADE1\\DAYTRADE\\WEEKTRADE\\WEEKTRADE1\\MONTHTRADE\\MONTHTRADE1\\QUARTERTRADE\\QUARTERTRADE1\\YEARTRADE\\YEARTRADE1函数。
4、（1）历史回测中，当年K线走完持仓大于0，会对持仓进行全清处理。
  （2）模组运行中，当年K线走完持仓大于0，信号和资金会重新初始化进行计算，但不会自动对持仓进行全清处理，需要在模型中编写实现全清。

例：
MA5^^MA(C,5);
MA10^^MA(C,10);
CROSSUP(MA5,MA10),BK;//5周期均线上穿10周期均线，买开仓
CROSSDOWN(MA5,MA10),SK;//5周期均线下穿10周期均线，卖开仓
C<BKPRICE-10*MINPRICE,SP;//亏损10点平多
C>SKPRICE+10*MINPRICE,BP;//亏损10点平空
CLOSEMINUTE<=1,CLOSEOUT;//收盘前一分钟，清仓。
AUTOFILTER;//过滤模型
YEARTRADE1;//使用每年数据计算
`;

const YSETTLE = new MySymbol();
YSETTLE.label = "YSETTLE";
YSETTLE.description = "取得K线图的昨结算价";
YSETTLE.insertText = "";
YSETTLE.body = "YSETTLE";
YSETTLE.kind = MySymbolKind.Function;
YSETTLE.marketType = MyMarketType.TPlusZeroStrategyFunction;
YSETTLE.functionType = MyFunctionType.CandlestickDataReference;
YSETTLE.returnType = MyFunctionReturnType.None;
YSETTLE.parameters = MySymbol.createParametersFromStrings([]);
YSETTLE.detail = "取得K线图的昨结算价";
YSETTLE.documentation = `
YSETTLE,求某根k线的昨结算价
取得K线图的昨结算价。
用法：
YSETTLE求某根k线的昨结算价
说明：
1、用在周期小于'日'的K线上如5分钟K线，1小时k线，每根k线返回的值为前一天的结算价
2、该函数支持跨周期或跨合约引用
`;

export const functions = [
    ABS,
    ACOS,
    ADMA,
    ALIGN,
    ASIN,
    ATAN,
    AUTOFILTER,
    AUTOFINANCING,
    AVAILABLE_OPI,
    AVEDEV,
    AVPRICE,
    BACKGROUNDSTYLE,
    BARINTERVAL,
    BARPOS,
    BARSBK,
    BARSBP,
    BARSBUY,
    BARSCOUNT,
    BARSLAST,
    BARSLASTCOUNT,
    BARSSELL,
    BARSSINCE,
    BARSSINCEN,
    BARSSK,
    BARSSP,
    BARSTATUS,
    BARTYPE,
    BETWEEN,
    BKHIGH,
    BKLOW,
    BKPRICE,
    BKPRICE1,
    BKPRICEAV,
    BKPRICEAV1,
    BKVOL,
    BKVOL2,
    BUYPRICE,
    CEILING,
    CHECKSIG,
    CHECKSIG_MIN,
    CIRCLEDOT,
    CJLVOL,
    CLOSE,
    CLOSEKLINE,
    CLOSEMINUTE,
    CLOSEMINUTE1,
    CLOSEMINUTEEVERY,
    CLOSEMINUTEEVERY1,
    CLOSESEC,
    CLOSESEC1,
    CLOSESECEVERY,
    CLOSESECEVERY1,
    CODELIKE,
    COEFFICIENTR,
    COLORSTICK,
    CONDBARS,
    COS,
    COST,
    COUNT,
    COUNTGROUPSIG,
    COUNTSIG,
    COVAR,
    CROSS,
    CROSS2,
    CROSSDOT,
    CROSSDOWN,
    CROSSUP,
    CUBE,
    CURRENTDATE,
    CURRENTTIME,
    DASH,
    DASHDOT,
    DASHDOTDOT,
    DATE,
    DATE1,
    DAY,
    DAYBARPOS,
    DAYSTOEXPIRED,
    DAYTRADE,
    DAYTRADE1,
    DEVSQ,
    DIVERGENCE,
    DIVIDEND,
    DIVIDENDBARS,
    DMA,
    DOT,
    DRAWBARLINE,
    DRAWBKBMP,
    DRAWBMP,
    DRAWCOLORKLINE,
    DRAWCOLORLINE,
    DRAWCOLUMNCHART,
    DRAWGBK,
    DRAWGBK1,
    DRAWICON,
    DRAWKLINE,
    DRAWKLINE1,
    DRAWKLINE2,
    DRAWLASTBARICON,
    DRAWLASTBARLINE,
    DRAWLASTBARNUMBER,
    DRAWLASTBARTEXT,
    DRAWLINE,
    DRAWLINE1,
    DRAWLINE2,
    DRAWLINE3,
    DRAWNUMBER,
    DRAWNUMBER1,
    DRAWSHIFTNUMBER,
    DRAWSL,
    DRAWSL1,
    DRAWTEXT,
    DRAWVALID,
    DUALVOLUME,
    EMA,
    EMA2,
    EMAWH,
    ENTRYSIG_PLACE,
    ENTRYSIG_PRICE,
    ENTRYSIG_VOL,
    EVERY,
    EXIST,
    EXITSIG_PLACE,
    EXITSIG_PRICE,
    EXITSIG_VOL,
    EXP,
    EXPIREDATE,
    FEE,
    FILLRGN,
    FILLRGN1,
    FILTER,
    FINANCE_DATA,
    FLOOR,
    FONTSIZE,
    FORCAST,
    GROUP,
    GROUPBKPRICE,
    GROUPBKVOL,
    GROUPSKPRICE,
    GROUPSKVOL,
    HARMEAN,
    HASTRADEDATA,
    HHV,
    HHVBARS,
    HIGH,
    HISEXPDATE,
    HISEXPDAYS,
    HOLLOW,
    HOUR,
    HV,
    ICON,
    IDLE,
    IF,
    IFELSE,
    IMPLIEDVOLATILITY,
    INITMONEY,
    INTPART,
    ISCONTRACT,
    ISDELIVERYDAY,
    ISDOWN,
    ISEQUAL,
    ISLASTBAR,
    ISLASTBK,
    ISLASTBP,
    ISLASTBPK,
    ISLASTBUY,
    ISLASTCLOSEOUT,
    ISLASTKLINE,
    ISLASTSELL,
    ISLASTSK,
    ISLASTSP,
    ISLASTSPK,
    ISLASTSTOP,
    ISMAINCONTRACT,
    ISMONTHEND,
    ISNEARHOLIDAY,
    ISNULL,
    ISRECORDDAY,
    ISTIMETOKLINEEND,
    ISUP,
    ISWEEKEND,
    K_STATE,
    K_STATE1,
    K_STATE2,
    K_STATE3,
    K_STATE4,
    KLINESIG,
    KLINESTART,
    KTEXT,
    KURTOSIS,
    LAST,
    LASTOFFSETPROFIT,
    LASTSIG,
    LASTSIGGROUP,
    LINETHICK,
    LLV,
    LLVBARS,
    LN,
    LOG,
    LOG10,
    LONGCROSS,
    LOOP1,
    LOOP2,
    LOW,
    LV,
    MA,
    MARGIN,
    MAX,
    MAX1,
    MAXBKVOL,
    MAXSKVOL,
    MEDIAN,
    MEDIAN1,
    MIN,
    MIN1,
    MINPRICE,
    MINPRICE1,
    MINPRICED,
    MINUTE,
    MOD,
    MODE,
    MONEY,
    MONEYRATIO,
    MONEYTOT,
    MONTH,
    MONTHTRADE,
    MONTHTRADE1,
    MULTSIG,
    MULTSIG_MIN,
    MV,
    MYVOL,
    NAMELIKE,
    NEWHBARS,
    NEWHBARS1,
    NEWLBARS,
    NEWLBARS1,
    NODRAW,
    NORMPDF,
    NOT,
    NOTEXT,
    NULL,
    NUMPOW,
    OFFSETPROFIT,
    OFFSETPROFIT1,
    OPEN,
    OPENMINUTE,
    OPENMINUTE1,
    OPENSEC,
    OPENSEC1,
    OPI,
    PANZHENG,
    PARTLINE,
    PARTLINE1,
    PCRATE,
    PCRATETREND,
    PERCENTILE,
    PERIOD,
    PLAYSOUND,
    POINTDOT,
    POLYLINE,
    POLYLINE1,
    POW,
    PRECIS,
    PRECISION,
    PRICEPRECISION,
    PRICEPRECISION1,
    PROFIT,
    QUARTER,
    QUARTERTRADE,
    QUARTERTRADE1,
    RAND,
    RANGE,
    RAWDATA,
    REF,
    REFLINE,
    REFLINE1,
    REFSIG_PLACE,
    REFSIG_PRICE,
    REFSIG_PRICE1,
    REFSIG_PRICE2,
    REFSIG_VOL,
    REFWH,
    REVERSE,
    ROUND,
    SAR,
    SAR1,
    SCALE,
    SEEK,
    SELECT,
    SETDEALPERCENT,
    SETEXPIREDATE,
    SETMOVEOPIPRICE,
    SETQUOTACCOUNT,
    SETSIGPRICE,
    SETSIGPRICETYPE,
    SETSTYLECOLOR,
    SETTLE,
    SETTRADEACCOUNT,
    SGN,
    SIGNUM,
    SIGVOL,
    SIN,
    SKEWNESS,
    SKHIGH,
    SKLOW,
    SKPRICE,
    SKPRICE1,
    SKPRICEAV,
    SKPRICEAV1,
    SKVOL,
    SKVOL2,
    SLOPE,
    SMA,
    SMMA,
    SOLID,
    SORT,
    SORTPOS,
    SOUND,
    SPLIT,
    SPLITBARS,
    SQRT,
    SQUARE,
    STD,
    STDP,
    STICK,
    STICKLINE,
    STICKLINE1,
    STKTYPE,
    STOCKDIVD,
    SUM,
    SUMBARS,
    T_CLOSE,
    T_MAX,
    T_PLUS,
    T0TOTIME,
    TAN,
    TAVLOSS,
    TAVWIN,
    TAVWINLOSS,
    TIME,
    TIME0,
    TIMETOT0,
    TMAXLOSS,
    TMAXSEQLOSS,
    TMAXSEQWIN,
    TMAXWIN,
    TNUMSEQLOSS,
    TNUMSEQWIN,
    TODAYDEUCETIMES,
    TODAYLOSSTIMES,
    TODAYWINTIMES,
    TPROFIT_REF,
    TRACING_ORDER,
    TRADE_AGAIN,
    TRADE_OTHER,
    TRADE_REF,
    TRADE_SMOOTHING,
    TREND,
    TRMA,
    TSEQLOSS,
    TSEQWIN,
    TSMA,
    UNIT,
    UNIT1,
    UNITLIMIT,
    VALIGN,
    VALUEWHEN,
    VAR,
    VARP,
    VERTLINE,
    VERTLINE1,
    VOL,
    VOLATILITY,
    VOLMARGIN,
    VOLSTICK,
    VOLTICK,
    VOLTIME,
    VOLUMESTICK,
    WEEKDAY,
    WEEKTRADE,
    WEEKTRADE1,
    WINNER,
    WORD,
    YCLOSE,
    YEAR,
    YEARTRADE,
    YEARTRADE1,
    YSETTLE,
];
