import {
    MyCompletion,
    MyCompletionMarketType,
    MyCompletionType,
} from "../common";

const ABS = new MyCompletion();
ABS.label = "ABS";
ABS.insertText = "";
ABS.body = "ABS( )";
ABS.marketType = MyCompletionMarketType.BasicFunction;
ABS.type = MyCompletionType.MathFunction;
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

const ACOS = new MyCompletion();
ACOS.label = "ACOS";
ACOS.insertText = "";
ACOS.body = "ACOS( )";
ACOS.marketType = MyCompletionMarketType.BasicFunction;
ACOS.type = MyCompletionType.MathFunction;
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

const ADMA = new MyCompletion();
ADMA.label = "ADMA";
ADMA.insertText = "";
ADMA.body = "ADMA(,,,)";
ADMA.marketType = MyCompletionMarketType.BasicFunction;
ADMA.type = MyCompletionType.MathematicalStatisticsFunction;
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

const ALIGN = new MyCompletion();
ALIGN.label = "ALIGN";
ALIGN.insertText = "";
ALIGN.body = "ALIGN";
ALIGN.marketType = MyCompletionMarketType.BasicFunction;
ALIGN.type = MyCompletionType.DrawingFunction;
ALIGN.detail = "设置文字对齐方式（左中右）";
ALIGN.documentation = `
ALIGN0,ALIGN1,ALIGN2,分别表示文字左对齐，居中对齐，右对齐
设置文字对齐方式（左中右）。

用法：DRAWTEXT(COND,PRICE,TEXT),ALIGNX;

COND条件满足时，在PRICE的位置，标注TEXT，文字按照ALIGNX写入的方式对齐。ALIGN0，ALIGN1，ALIGN2，分别表示左对齐，居中对齐，右对齐。

例：
DRAWTEXT(C>O,H,'涨'),ALIGN1,VALIGN1,FONTSIZE20,COLORGREEN;//在阳线的最高价标注文字“涨”，文字居中对齐，字体大小为20，颜色为绿色。
`;

const ASIN = new MyCompletion();
ASIN.label = "ASIN";
ASIN.insertText = "";
ASIN.body = "ASIN( )";
ASIN.marketType = MyCompletionMarketType.BasicFunction;
ASIN.type = MyCompletionType.MathFunction;
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

const ATAN = new MyCompletion();
ATAN.label = "ATAN";
ATAN.insertText = "";
ATAN.body = "ATAN( )";
ATAN.marketType = MyCompletionMarketType.BasicFunction;
ATAN.type = MyCompletionType.MathFunction;
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

const AUTOFILTER = new MyCompletion();
AUTOFILTER.label = "AUTOFILTER";
AUTOFILTER.insertText = "";
AUTOFILTER.body = "AUTOFILTER";
AUTOFILTER.marketType = MyCompletionMarketType.BasicFunction;
AUTOFILTER.type = MyCompletionType.CalculationControlFunction;
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

const AUTOFINANCING = new MyCompletion();
AUTOFINANCING.label = "AUTOFINANCING";
AUTOFINANCING.insertText = "";
AUTOFINANCING.body = "AUTOFINANCING";
AUTOFINANCING.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
AUTOFINANCING.type = MyCompletionType.CalculationControlFunction;
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

const AVAILABLE_OPI = new MyCompletion();
AVAILABLE_OPI.label = "AVAILABLE_OPI";
AVAILABLE_OPI.insertText = "";
AVAILABLE_OPI.body = "AVAILABLE_OPI";
AVAILABLE_OPI.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
AVAILABLE_OPI.type = MyCompletionType.PositionManagementFunction;
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

const AVEDEV = new MyCompletion();
AVEDEV.label = "AVEDEV";
AVEDEV.insertText = "";
AVEDEV.body = "AVEDEV( , )";
AVEDEV.marketType = MyCompletionMarketType.BasicFunction;
AVEDEV.type = MyCompletionType.MathematicalStatisticsFunction;
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

const AVPRICE = new MyCompletion();
AVPRICE.label = "AVPRICE";
AVPRICE.insertText = "";
AVPRICE.body = "AVPRICE";
AVPRICE.marketType = MyCompletionMarketType.BasicFunction;
AVPRICE.type = MyCompletionType.CandlestickDataReference;
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

const BACKGROUNDSTYLE = new MyCompletion();
BACKGROUNDSTYLE.label = "BACKGROUNDSTYLE";
BACKGROUNDSTYLE.insertText = "";
BACKGROUNDSTYLE.body = "BACKGROUNDSTYLE( )";
BACKGROUNDSTYLE.marketType = MyCompletionMarketType.BasicFunction;
BACKGROUNDSTYLE.type = MyCompletionType.DrawingFunction;
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

const BARINTERVAL = new MyCompletion();
BARINTERVAL.label = "BARINTERVAL";
BARINTERVAL.insertText = "";
BARINTERVAL.body = "BARINTERVAL";
BARINTERVAL.marketType = MyCompletionMarketType.BasicFunction;
BARINTERVAL.type = MyCompletionType.CandlestickDataReference;
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

const BARPOS = new MyCompletion();
BARPOS.label = "BARPOS";
BARPOS.insertText = "";
BARPOS.body = "BARPOS";
BARPOS.marketType = MyCompletionMarketType.BasicFunction;
BARPOS.type = MyCompletionType.TimeFunction;
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

const BARSBK = new MyCompletion();
BARSBK.label = "BARSBK";
BARSBK.insertText = "";
BARSBK.body = "BARSBK";
BARSBK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BARSBK.type = MyCompletionType.SignalLoggingFunction;
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

const BARSBP = new MyCompletion();
BARSBP.label = "BARSBP";
BARSBP.insertText = "";
BARSBP.body = "BARSBP";
BARSBP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BARSBP.type = MyCompletionType.SignalLoggingFunction;
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

const BARSBUY = new MyCompletion();
BARSBUY.label = "BARSBUY";
BARSBUY.insertText = "";
BARSBUY.body = "BARSBUY";
BARSBUY.marketType = MyCompletionMarketType.TPlusOneStrategyFunction;
BARSBUY.type = MyCompletionType.SignalLoggingFunction;
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

const BARSCOUNT = new MyCompletion();
BARSCOUNT.label = "BARSCOUNT";
BARSCOUNT.insertText = "";
BARSCOUNT.body = "BARSCOUNT()";
BARSCOUNT.marketType = MyCompletionMarketType.BasicFunction;
BARSCOUNT.type = MyCompletionType.FinancialStatisticsFunction;
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

const BARSLAST = new MyCompletion();
BARSLAST.label = "BARSLAST";
BARSLAST.insertText = "";
BARSLAST.body = "BARSLAST( )";
BARSLAST.marketType = MyCompletionMarketType.BasicFunction;
BARSLAST.type = MyCompletionType.FinancialStatisticsFunction;
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

const BARSLASTCOUNT = new MyCompletion();
BARSLASTCOUNT.label = "BARSLASTCOUNT";
BARSLASTCOUNT.insertText = "";
BARSLASTCOUNT.body = "BARSLASTCOUNT()";
BARSLASTCOUNT.marketType = MyCompletionMarketType.BasicFunction;
BARSLASTCOUNT.type = MyCompletionType.FinancialStatisticsFunction;
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

const BARSSELL = new MyCompletion();
BARSSELL.label = "BARSSELL";
BARSSELL.insertText = "";
BARSSELL.body = "BARSSELL";
BARSSELL.marketType = MyCompletionMarketType.TPlusOneStrategyFunction;
BARSSELL.type = MyCompletionType.SignalLoggingFunction;
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

const BARSSINCE = new MyCompletion();
BARSSINCE.label = "BARSSINCE";
BARSSINCE.insertText = "";
BARSSINCE.body = "BARSSINCE()";
BARSSINCE.marketType = MyCompletionMarketType.BasicFunction;
BARSSINCE.type = MyCompletionType.FinancialStatisticsFunction;
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

const BARSSINCEN = new MyCompletion();
BARSSINCEN.label = "BARSSINCEN";
BARSSINCEN.insertText = "";
BARSSINCEN.body = "BARSSINCEN";
BARSSINCEN.marketType = MyCompletionMarketType.BasicFunction;
BARSSINCEN.type = MyCompletionType.FinancialStatisticsFunction;
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

const BARSSK = new MyCompletion();
BARSSK.label = "BARSSK";
BARSSK.insertText = "";
BARSSK.body = "BARSSK";
BARSSK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BARSSK.type = MyCompletionType.SignalLoggingFunction;
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

const BARSSP = new MyCompletion();
BARSSP.label = "BARSSP";
BARSSP.insertText = "";
BARSSP.body = "BARSSP";
BARSSP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BARSSP.type = MyCompletionType.SignalLoggingFunction;
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

const BARSTATUS = new MyCompletion();
BARSTATUS.label = "BARSTATUS";
BARSTATUS.insertText = "";
BARSTATUS.body = "BARSTATUS";
BARSTATUS.marketType = MyCompletionMarketType.BasicFunction;
BARSTATUS.type = MyCompletionType.DrawingFunction;
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

const BARTYPE = new MyCompletion();
BARTYPE.label = "BARTYPE";
BARTYPE.insertText = "";
BARTYPE.body = "BARTYPE";
BARTYPE.marketType = MyCompletionMarketType.BasicFunction;
BARTYPE.type = MyCompletionType.CandlestickDataReference;
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

const BETWEEN = new MyCompletion();
BETWEEN.label = "BETWEEN";
BETWEEN.insertText = "";
BETWEEN.body = "BETWEEN( , , )";
BETWEEN.marketType = MyCompletionMarketType.BasicFunction;
BETWEEN.type = MyCompletionType.LogicalJudgmentFunction;
BETWEEN.detail = "介于";
BETWEEN.documentation = `
BETWEEN(A,B,C),A处于B和C之间时取1(Yes)，否则取0(No)
BETWEEN(X,Y,Z) 表示X是否处于Y和Z之间，成立返回1(Yes)，否则返回0(No)。

注：
1、其中若X=Y、X=Z、或X=Y且Y=Z时函数返回值为1(Yse)。

例1：
BETWEEN(CLOSE,MA5,MA10); //表示收盘价介于5日均线与10日均线之间。
`;

const BKHIGH = new MyCompletion();
BKHIGH.label = "BKHIGH";
BKHIGH.insertText = "";
BKHIGH.body = "BKHIGH";
BKHIGH.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKHIGH.type = MyCompletionType.SignalLoggingFunction;
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

const BKLOW = new MyCompletion();
BKLOW.label = "BKLOW";
BKLOW.insertText = "";
BKLOW.body = "BKLOW";
BKLOW.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKLOW.type = MyCompletionType.SignalLoggingFunction;
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

const BKPRICE = new MyCompletion();
BKPRICE.label = "BKPRICE";
BKPRICE.insertText = "";
BKPRICE.body = "BKPRICE";
BKPRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKPRICE.type = MyCompletionType.SignalLoggingFunction;
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

const BKPRICE1 = new MyCompletion();
BKPRICE1.label = "BKPRICE1";
BKPRICE1.insertText = "";
BKPRICE1.body = "BKPRICE1";
BKPRICE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKPRICE1.type = MyCompletionType.SignalLoggingFunction;
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

const BKPRICEAV = new MyCompletion();
BKPRICEAV.label = "BKPRICEAV";
BKPRICEAV.insertText = "";
BKPRICEAV.body = "BKPRICEAV";
BKPRICEAV.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKPRICEAV.type = MyCompletionType.PositionManagementFunction;
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

const BKPRICEAV1 = new MyCompletion();
BKPRICEAV1.label = "BKPRICEAV1";
BKPRICEAV1.insertText = "";
BKPRICEAV1.body = "BKPRICEAV1";
BKPRICEAV1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKPRICEAV1.type = MyCompletionType.PositionManagementFunction;
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

const BKVOL = new MyCompletion();
BKVOL.label = "BKVOL";
BKVOL.insertText = "";
BKVOL.body = "BKVOL";
BKVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKVOL.type = MyCompletionType.PositionManagementFunction;
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

const BKVOL2 = new MyCompletion();
BKVOL2.label = "BKVOL2";
BKVOL2.insertText = "";
BKVOL2.body = "BKVOL2";
BKVOL2.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
BKVOL2.type = MyCompletionType.PositionManagementFunction;
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

const BUYPRICE = new MyCompletion();
BUYPRICE.label = "BUYPRICE";
BUYPRICE.insertText = "";
BUYPRICE.body = "BUYPRICE";
BUYPRICE.marketType = MyCompletionMarketType.TPlusOneStrategyFunction;
BUYPRICE.type = MyCompletionType.SignalLoggingFunction;
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

const CEILING = new MyCompletion();
CEILING.label = "CEILING";
CEILING.insertText = "";
CEILING.body = "CEILING( , )";
CEILING.marketType = MyCompletionMarketType.BasicFunction;
CEILING.type = MyCompletionType.MathFunction;
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

const CHECKSIG = new MyCompletion();
CHECKSIG.label = "CHECKSIG";
CHECKSIG.insertText = "";
CHECKSIG.body = "CHECKSIG( , , , , ,)";
CHECKSIG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CHECKSIG.type = MyCompletionType.PerformanceOptimizationFunction;
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

const CHECKSIG_MIN = new MyCompletion();
CHECKSIG_MIN.label = "CHECKSIG_MIN";
CHECKSIG_MIN.insertText = "";
CHECKSIG_MIN.body = "CHECKSIG_MIN( , , , ,)";
CHECKSIG_MIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CHECKSIG_MIN.type = MyCompletionType.PerformanceOptimizationFunction;
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

const CIRCLEDOT = new MyCompletion();
CIRCLEDOT.label = "CIRCLEDOT";
CIRCLEDOT.insertText = "";
CIRCLEDOT.body = "CIRCLEDOT";
CIRCLEDOT.marketType = MyCompletionMarketType.BasicFunction;
CIRCLEDOT.type = MyCompletionType.DrawingFunction;
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

const CJLVOL = new MyCompletion();
CJLVOL.label = "CJLVOL";
CJLVOL.insertText = "";
CJLVOL.body = "CJLVOL( )";
CJLVOL.marketType = MyCompletionMarketType.BasicFunction;
CJLVOL.type = MyCompletionType.DrawingFunction;
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

const CLOSE = new MyCompletion();
CLOSE.label = "CLOSE";
CLOSE.insertText = "";
CLOSE.body = "CLOSE";
CLOSE.marketType = MyCompletionMarketType.BasicFunction;
CLOSE.type = MyCompletionType.CandlestickDataReference;
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

const CLOSEKLINE = new MyCompletion();
CLOSEKLINE.label = "CLOSEKLINE";
CLOSEKLINE.insertText = "";
CLOSEKLINE.body = "CLOSEKLINE( , )";
CLOSEKLINE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSEKLINE.type = MyCompletionType.SignalExecutionFunction;
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

const CLOSEMINUTE = new MyCompletion();
CLOSEMINUTE.label = "CLOSEMINUTE";
CLOSEMINUTE.insertText = "";
CLOSEMINUTE.body = "CLOSEMINUTE";
CLOSEMINUTE.marketType = MyCompletionMarketType.BasicFunction;
CLOSEMINUTE.type = MyCompletionType.TimeFunction;
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

const CLOSEMINUTE1 = new MyCompletion();
CLOSEMINUTE1.label = "CLOSEMINUTE1";
CLOSEMINUTE1.insertText = "";
CLOSEMINUTE1.body = "CLOSEMINUTE1";
CLOSEMINUTE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSEMINUTE1.type = MyCompletionType.TimeFunction;
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

const CLOSEMINUTEEVERY = new MyCompletion();
CLOSEMINUTEEVERY.label = "CLOSEMINUTEEVERY";
CLOSEMINUTEEVERY.insertText = "";
CLOSEMINUTEEVERY.body = "CLOSEMINUTEEVERY()";
CLOSEMINUTEEVERY.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSEMINUTEEVERY.type = MyCompletionType.TimeFunction;
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

const CLOSEMINUTEEVERY1 = new MyCompletion();
CLOSEMINUTEEVERY1.label = "CLOSEMINUTEEVERY1";
CLOSEMINUTEEVERY1.insertText = "";
CLOSEMINUTEEVERY1.body = "CLOSEMINUTEEVERY1()";
CLOSEMINUTEEVERY1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSEMINUTEEVERY1.type = MyCompletionType.TimeFunction;
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

const CLOSESEC = new MyCompletion();
CLOSESEC.label = "CLOSESEC";
CLOSESEC.insertText = "";
CLOSESEC.body = "CLOSESEC";
CLOSESEC.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSESEC.type = MyCompletionType.TimeFunction;
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

const CLOSESEC1 = new MyCompletion();
CLOSESEC1.label = "CLOSESEC1";
CLOSESEC1.insertText = "";
CLOSESEC1.body = "CLOSESEC1";
CLOSESEC1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSESEC1.type = MyCompletionType.TimeFunction;
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

const CLOSESECEVERY = new MyCompletion();
CLOSESECEVERY.label = "CLOSESECEVERY";
CLOSESECEVERY.insertText = "";
CLOSESECEVERY.body = "CLOSESECEVERY()";
CLOSESECEVERY.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSESECEVERY.type = MyCompletionType.TimeFunction;
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

const CLOSESECEVERY1 = new MyCompletion();
CLOSESECEVERY1.label = "CLOSESECEVERY1";
CLOSESECEVERY1.insertText = "";
CLOSESECEVERY1.body = "CLOSESECEVERY1()";
CLOSESECEVERY1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
CLOSESECEVERY1.type = MyCompletionType.TimeFunction;
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

const CODELIKE = new MyCompletion();
CODELIKE.label = "CODELIKE";
CODELIKE.insertText = "";
CODELIKE.body = "CODELIKE('')";
CODELIKE.marketType = MyCompletionMarketType.BasicFunction;
CODELIKE.type = MyCompletionType.LogicalJudgmentFunction;
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

const COEFFICIENTR = new MyCompletion();
COEFFICIENTR.label = "COEFFICIENTR";
COEFFICIENTR.insertText = "";
COEFFICIENTR.body = "COEFFICIENTR( , , )";
COEFFICIENTR.marketType = MyCompletionMarketType.BasicFunction;
COEFFICIENTR.type = MyCompletionType.MathematicalStatisticsFunction;
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

const COLORSTICK = new MyCompletion();
COLORSTICK.label = "COLORSTICK";
COLORSTICK.insertText = "";
COLORSTICK.body = "COLORSTICK";
COLORSTICK.marketType = MyCompletionMarketType.BasicFunction;
COLORSTICK.type = MyCompletionType.DrawingFunction;
COLORSTICK.detail = "画柱线";
COLORSTICK.documentation = `
COLORSTICK画柱线，大于0为红色，小于0为青色
COLORSTICK 画柱线。

用法：X,COLORSTICK;画柱线，柱高为X的值，X大于0为红色柱线，X小于0为青色柱线。

注：不支持将该函数定义为变量，即不支持下面的写法：A:COLORSTICK；

例：
C-O,COLORSTICK;//画柱线，阳线时画红色向上柱线，阴线时画青色的向下柱线。
`;

const CONDBARS = new MyCompletion();
CONDBARS.label = "CONDBARS";
CONDBARS.insertText = "";
CONDBARS.body = "CONDBARS(,)";
CONDBARS.marketType = MyCompletionMarketType.BasicFunction;
CONDBARS.type = MyCompletionType.FinancialStatisticsFunction;
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

const COS = new MyCompletion();
COS.label = "COS";
COS.insertText = "";
COS.body = "COS( )";
COS.marketType = MyCompletionMarketType.BasicFunction;
COS.type = MyCompletionType.MathFunction;
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

const COST = new MyCompletion();
COST.label = "COST";
COST.insertText = "";
COST.body = "COST( )";
COST.marketType = MyCompletionMarketType.BasicFunction;
COST.type = MyCompletionType.FinancialStatisticsFunction;
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

const COUNT = new MyCompletion();
COUNT.label = "COUNT";
COUNT.insertText = "";
COUNT.body = "COUNT( , )";
COUNT.marketType = MyCompletionMarketType.BasicFunction;
COUNT.type = MyCompletionType.FinancialStatisticsFunction;
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

const COUNTGROUPSIG = new MyCompletion();
COUNTGROUPSIG.label = "COUNTGROUPSIG";
COUNTGROUPSIG.insertText = "";
COUNTGROUPSIG.body = "COUNTGROUPSIG( , , )";
COUNTGROUPSIG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
COUNTGROUPSIG.type = MyCompletionType.SignalLoggingFunction;
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

const COUNTSIG = new MyCompletion();
COUNTSIG.label = "COUNTSIG";
COUNTSIG.insertText = "";
COUNTSIG.body = "COUNTSIG(,)";
COUNTSIG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
COUNTSIG.type = MyCompletionType.SignalLoggingFunction;
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

const COVAR = new MyCompletion();
COVAR.label = "COVAR";
COVAR.insertText = "";
COVAR.body = "COVAR( , , )";
COVAR.marketType = MyCompletionMarketType.BasicFunction;
COVAR.type = MyCompletionType.MathematicalStatisticsFunction;
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

const CROSS = new MyCompletion();
CROSS.label = "CROSS";
CROSS.insertText = "";
CROSS.body = "CROSS( , )";
CROSS.marketType = MyCompletionMarketType.BasicFunction;
CROSS.type = MyCompletionType.LogicalJudgmentFunction;
CROSS.detail = "交叉函数";
CROSS.documentation = `
CROSS(A,B),A从下方向上穿过B时取1(Yes)，否则取0(No)
CROSS(A,B) 表示A从下方向上穿过B，成立返回1(Yes)，否则返回0(No)

注：
1、满足穿越的条件必须上根k线满足A<=B，当根k线满足A>B才被认定为穿越。

例1：
CROSS(CLOSE,MA(CLOSE,5));//表示收盘线从下方向上穿过5周期均线
`;

const CROSS2 = new MyCompletion();
CROSS2.label = "CROSS2";
CROSS2.insertText = "";
CROSS2.body = "CROSS2( , , )";
CROSS2.marketType = MyCompletionMarketType.BasicFunction;
CROSS2.type = MyCompletionType.LogicalJudgmentFunction;
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

const CROSSDOT = new MyCompletion();
CROSSDOT.label = "CROSSDOT";
CROSSDOT.insertText = "";
CROSSDOT.body = "CROSSDOT";
CROSSDOT.marketType = MyCompletionMarketType.BasicFunction;
CROSSDOT.type = MyCompletionType.DrawingFunction;
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

const CROSSDOWN = new MyCompletion();
CROSSDOWN.label = "CROSSDOWN";
CROSSDOWN.insertText = "";
CROSSDOWN.body = "CROSSDOWN( , )";
CROSSDOWN.marketType = MyCompletionMarketType.BasicFunction;
CROSSDOWN.type = MyCompletionType.LogicalJudgmentFunction;
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

const CROSSUP = new MyCompletion();
CROSSUP.label = "CROSSUP";
CROSSUP.insertText = "";
CROSSUP.body = "CROSSUP( , )";
CROSSUP.marketType = MyCompletionMarketType.BasicFunction;
CROSSUP.type = MyCompletionType.LogicalJudgmentFunction;
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

const CUBE = new MyCompletion();
CUBE.label = "CUBE";
CUBE.insertText = "";
CUBE.body = "CUBE( )";
CUBE.marketType = MyCompletionMarketType.BasicFunction;
CUBE.type = MyCompletionType.MathFunction;
CUBE.detail = "立方函数";
CUBE.documentation = `
CUBE(X),求X的三次方
CUBE(X)：返回X的三次方。

例1：
CUBE(4);//求4的立方。
`;

const CURRENTDATE = new MyCompletion();
CURRENTDATE.label = "CURRENTDATE";
CURRENTDATE.insertText = "";
CURRENTDATE.body = "CURRENTDATE";
CURRENTDATE.marketType = MyCompletionMarketType.BasicFunction;
CURRENTDATE.type = MyCompletionType.TimeFunction;
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

const CURRENTTIME = new MyCompletion();
CURRENTTIME.label = "CURRENTTIME";
CURRENTTIME.insertText = "";
CURRENTTIME.body = "CURRENTTIME";
CURRENTTIME.marketType = MyCompletionMarketType.BasicFunction;
CURRENTTIME.type = MyCompletionType.TimeFunction;
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

const DASH = new MyCompletion();
DASH.label = "DASH";
DASH.insertText = "";
DASH.body = "DASH";
DASH.marketType = MyCompletionMarketType.BasicFunction;
DASH.type = MyCompletionType.DrawingFunction;
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

const DASHDOT = new MyCompletion();
DASHDOT.label = "DASHDOT";
DASHDOT.insertText = "";
DASHDOT.body = "DASHDOT";
DASHDOT.marketType = MyCompletionMarketType.BasicFunction;
DASHDOT.type = MyCompletionType.DrawingFunction;
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

const DASHDOTDOT = new MyCompletion();
DASHDOTDOT.label = "DASHDOTDOT";
DASHDOTDOT.insertText = "";
DASHDOTDOT.body = "DASHDOTDOT";
DASHDOTDOT.marketType = MyCompletionMarketType.BasicFunction;
DASHDOTDOT.type = MyCompletionType.DrawingFunction;
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

const DATE = new MyCompletion();
DATE.label = "DATE";
DATE.insertText = "";
DATE.body = "DATE";
DATE.marketType = MyCompletionMarketType.BasicFunction;
DATE.type = MyCompletionType.TimeFunction;
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

const DATE1 = new MyCompletion();
DATE1.label = "DATE1";
DATE1.insertText = "";
DATE1.body = "DATE1";
DATE1.marketType = MyCompletionMarketType.BasicFunction;
DATE1.type = MyCompletionType.TimeFunction;
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

const DAY = new MyCompletion();
DAY.label = "DAY";
DAY.insertText = "";
DAY.body = "DAY";
DAY.marketType = MyCompletionMarketType.BasicFunction;
DAY.type = MyCompletionType.TimeFunction;
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

const DAYBARPOS = new MyCompletion();
DAYBARPOS.label = "DAYBARPOS";
DAYBARPOS.insertText = "";
DAYBARPOS.body = "DAYBARPOS";
DAYBARPOS.marketType = MyCompletionMarketType.BasicFunction;
DAYBARPOS.type = MyCompletionType.FinancialStatisticsFunction;
DAYBARPOS.detail = "当根k线为当天第几根k线";
DAYBARPOS.documentation = `
DAYBARPOS当根k线为当天第几根k线
DAYBARPOS：返回当根k线是当天的第几根k线

注：
该函数返回当根k线是当天的第几根k线，日以上周期返回空值

例：
VALUEWHEN(DAYBARPOS=1,C);//取当天第一根K线的收盘价
`;

const DAYSTOEXPIRED = new MyCompletion();
DAYSTOEXPIRED.label = "DAYSTOEXPIRED";
DAYSTOEXPIRED.insertText = "";
DAYSTOEXPIRED.body = "DAYSTOEXPIRED()";
DAYSTOEXPIRED.marketType = MyCompletionMarketType.BasicFunction;
DAYSTOEXPIRED.type = MyCompletionType.TimeFunction;
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

const DAYTRADE = new MyCompletion();
DAYTRADE.label = "DAYTRADE";
DAYTRADE.insertText = "";
DAYTRADE.body = "DAYTRADE";
DAYTRADE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
DAYTRADE.type = MyCompletionType.CalculationControlFunction;
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

const DAYTRADE1 = new MyCompletion();
DAYTRADE1.label = "DAYTRADE1";
DAYTRADE1.insertText = "";
DAYTRADE1.body = "DAYTRADE1";
DAYTRADE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
DAYTRADE1.type = MyCompletionType.CalculationControlFunction;
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

const DEVSQ = new MyCompletion();
DEVSQ.label = "DEVSQ";
DEVSQ.insertText = "";
DEVSQ.body = "DEVSQ( , )";
DEVSQ.marketType = MyCompletionMarketType.BasicFunction;
DEVSQ.type = MyCompletionType.MathematicalStatisticsFunction;
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

const DIVERGENCE = new MyCompletion();
DIVERGENCE.label = "DIVERGENCE";
DIVERGENCE.insertText = "";
DIVERGENCE.body = "DIVERGENCE(,,,,)";
DIVERGENCE.marketType = MyCompletionMarketType.BasicFunction;
DIVERGENCE.type = MyCompletionType.LogicalJudgmentFunction;
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

const DIVIDEND = new MyCompletion();
DIVIDEND.label = "DIVIDEND";
DIVIDEND.insertText = "";
DIVIDEND.body = "DIVIDEND()";
DIVIDEND.marketType = MyCompletionMarketType.BasicFunction;
DIVIDEND.type = MyCompletionType.StockDataFunction;
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

const DIVIDENDBARS = new MyCompletion();
DIVIDENDBARS.label = "DIVIDENDBARS";
DIVIDENDBARS.insertText = "";
DIVIDENDBARS.body = "DIVIDENDBARS()";
DIVIDENDBARS.marketType = MyCompletionMarketType.BasicFunction;
DIVIDENDBARS.type = MyCompletionType.StockDataFunction;
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

const DMA = new MyCompletion();
DMA.label = "DMA";
DMA.insertText = "";
DMA.body = "DMA( , )";
DMA.marketType = MyCompletionMarketType.BasicFunction;
DMA.type = MyCompletionType.FinancialStatisticsFunction;
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

const DOT = new MyCompletion();
DOT.label = "DOT";
DOT.insertText = "";
DOT.body = "DOT";
DOT.marketType = MyCompletionMarketType.BasicFunction;
DOT.type = MyCompletionType.DrawingFunction;
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

const DRAWBARLINE = new MyCompletion();
DRAWBARLINE.label = "DRAWBARLINE";
DRAWBARLINE.insertText = "";
DRAWBARLINE.body = "DRAWBARLINE(,,,)";
DRAWBARLINE.marketType = MyCompletionMarketType.BasicFunction;
DRAWBARLINE.type = MyCompletionType.DrawingFunction;
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

const DRAWBKBMP = new MyCompletion();
DRAWBKBMP.label = "DRAWBKBMP";
DRAWBKBMP.insertText = "";
DRAWBKBMP.body = "DRAWBKBMP( , )";
DRAWBKBMP.marketType = MyCompletionMarketType.BasicFunction;
DRAWBKBMP.type = MyCompletionType.DrawingFunction;
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

const DRAWBMP = new MyCompletion();
DRAWBMP.label = "DRAWBMP";
DRAWBMP.insertText = "";
DRAWBMP.body = "DRAWBMP( , )";
DRAWBMP.marketType = MyCompletionMarketType.BasicFunction;
DRAWBMP.type = MyCompletionType.DrawingFunction;
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

const DRAWCOLORKLINE = new MyCompletion();
DRAWCOLORKLINE.label = "DRAWCOLORKLINE";
DRAWCOLORKLINE.insertText = "";
DRAWCOLORKLINE.body = "DRAWCOLORKLINE";
DRAWCOLORKLINE.marketType = MyCompletionMarketType.BasicFunction;
DRAWCOLORKLINE.type = MyCompletionType.DrawingFunction;
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

const DRAWCOLORLINE = new MyCompletion();
DRAWCOLORLINE.label = "DRAWCOLORLINE";
DRAWCOLORLINE.insertText = "";
DRAWCOLORLINE.body = "DRAWCOLORLINE(,,,)";
DRAWCOLORLINE.marketType = MyCompletionMarketType.BasicFunction;
DRAWCOLORLINE.type = MyCompletionType.DrawingFunction;
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

const DRAWCOLUMNCHART = new MyCompletion();
DRAWCOLUMNCHART.label = "DRAWCOLUMNCHART";
DRAWCOLUMNCHART.insertText = "";
DRAWCOLUMNCHART.body = "DRAWCOLUMNCHART( , , )";
DRAWCOLUMNCHART.marketType = MyCompletionMarketType.BasicFunction;
DRAWCOLUMNCHART.type = MyCompletionType.DrawingFunction;
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

const DRAWGBK = new MyCompletion();
DRAWGBK.label = "DRAWGBK";
DRAWGBK.insertText = "";
DRAWGBK.body = "DRAWGBK(,,,)";
DRAWGBK.marketType = MyCompletionMarketType.BasicFunction;
DRAWGBK.type = MyCompletionType.DrawingFunction;
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

const DRAWGBK1 = new MyCompletion();
DRAWGBK1.label = "DRAWGBK1";
DRAWGBK1.insertText = "";
DRAWGBK1.body = "DRAWGBK1(,)";
DRAWGBK1.marketType = MyCompletionMarketType.BasicFunction;
DRAWGBK1.type = MyCompletionType.DrawingFunction;
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

const DRAWICON = new MyCompletion();
DRAWICON.label = "DRAWICON";
DRAWICON.insertText = "";
DRAWICON.body = "DRAWICON( , , )";
DRAWICON.marketType = MyCompletionMarketType.BasicFunction;
DRAWICON.type = MyCompletionType.DrawingFunction;
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

const DRAWKLINE = new MyCompletion();
DRAWKLINE.label = "DRAWKLINE";
DRAWKLINE.insertText = "";
DRAWKLINE.body = "DRAWKLINE( , , , , )";
DRAWKLINE.marketType = MyCompletionMarketType.BasicFunction;
DRAWKLINE.type = MyCompletionType.DrawingFunction;
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

const DRAWKLINE1 = new MyCompletion();
DRAWKLINE1.label = "DRAWKLINE1";
DRAWKLINE1.insertText = "";
DRAWKLINE1.body = "DRAWKLINE1( , , , )";
DRAWKLINE1.marketType = MyCompletionMarketType.BasicFunction;
DRAWKLINE1.type = MyCompletionType.DrawingFunction;
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

const DRAWKLINE2 = new MyCompletion();
DRAWKLINE2.label = "DRAWKLINE2";
DRAWKLINE2.insertText = "";
DRAWKLINE2.body = "DRAWKLINE2( , , , , )";
DRAWKLINE2.marketType = MyCompletionMarketType.BasicFunction;
DRAWKLINE2.type = MyCompletionType.DrawingFunction;
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

const DRAWLASTBARICON = new MyCompletion();
DRAWLASTBARICON.label = "DRAWLASTBARICON";
DRAWLASTBARICON.insertText = "";
DRAWLASTBARICON.body = "DRAWLASTBARICON( , )";
DRAWLASTBARICON.marketType = MyCompletionMarketType.BasicFunction;
DRAWLASTBARICON.type = MyCompletionType.DrawingFunction;
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

const DRAWLASTBARLINE = new MyCompletion();
DRAWLASTBARLINE.label = "DRAWLASTBARLINE";
DRAWLASTBARLINE.insertText = "";
DRAWLASTBARLINE.body = "DRAWLASTBARLINE(,,,,,,)";
DRAWLASTBARLINE.marketType = MyCompletionMarketType.BasicFunction;
DRAWLASTBARLINE.type = MyCompletionType.DrawingFunction;
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

const DRAWLASTBARNUMBER = new MyCompletion();
DRAWLASTBARNUMBER.label = "DRAWLASTBARNUMBER";
DRAWLASTBARNUMBER.insertText = "";
DRAWLASTBARNUMBER.body = "DRAWLASTBARNUMBER( , , ,)";
DRAWLASTBARNUMBER.marketType = MyCompletionMarketType.BasicFunction;
DRAWLASTBARNUMBER.type = MyCompletionType.DrawingFunction;
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

const DRAWLASTBARTEXT = new MyCompletion();
DRAWLASTBARTEXT.label = "DRAWLASTBARTEXT";
DRAWLASTBARTEXT.insertText = "";
DRAWLASTBARTEXT.body = "DRAWLASTBARTEXT( , )";
DRAWLASTBARTEXT.marketType = MyCompletionMarketType.BasicFunction;
DRAWLASTBARTEXT.type = MyCompletionType.DrawingFunction;
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

const DRAWLINE = new MyCompletion();
DRAWLINE.label = "DRAWLINE";
DRAWLINE.insertText = "";
DRAWLINE.body = "DRAWLINE( , , , , )";
DRAWLINE.marketType = MyCompletionMarketType.BasicFunction;
DRAWLINE.type = MyCompletionType.DrawingFunction;
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

const DRAWLINE1 = new MyCompletion();
DRAWLINE1.label = "DRAWLINE1";
DRAWLINE1.insertText = "";
DRAWLINE1.body = "DRAWLINE1( , , , , )";
DRAWLINE1.marketType = MyCompletionMarketType.BasicFunction;
DRAWLINE1.type = MyCompletionType.DrawingFunction;
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

const DRAWLINE2 = new MyCompletion();
DRAWLINE2.label = "DRAWLINE2";
DRAWLINE2.insertText = "";
DRAWLINE2.body = "DRAWLINE2( , , , , )";
DRAWLINE2.marketType = MyCompletionMarketType.BasicFunction;
DRAWLINE2.type = MyCompletionType.DrawingFunction;
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

const DRAWLINE3 = new MyCompletion();
DRAWLINE3.label = "DRAWLINE3";
DRAWLINE3.insertText = "";
DRAWLINE3.body = "DRAWLINE3(,,,,,,)";
DRAWLINE3.marketType = MyCompletionMarketType.BasicFunction;
DRAWLINE3.type = MyCompletionType.DrawingFunction;
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

const DRAWNUMBER = new MyCompletion();
DRAWNUMBER.label = "DRAWNUMBER";
DRAWNUMBER.insertText = "";
DRAWNUMBER.body = "DRAWNUMBER( , , , , )";
DRAWNUMBER.marketType = MyCompletionMarketType.BasicFunction;
DRAWNUMBER.type = MyCompletionType.DrawingFunction;
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

const DRAWNUMBER1 = new MyCompletion();
DRAWNUMBER1.label = "DRAWNUMBER1";
DRAWNUMBER1.insertText = "";
DRAWNUMBER1.body = "DRAWNUMBER1( , , , )";
DRAWNUMBER1.marketType = MyCompletionMarketType.BasicFunction;
DRAWNUMBER1.type = MyCompletionType.DrawingFunction;
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

const DRAWSHIFTNUMBER = new MyCompletion();
DRAWSHIFTNUMBER.label = "DRAWSHIFTNUMBER";
DRAWSHIFTNUMBER.insertText = "";
DRAWSHIFTNUMBER.body = "DRAWSHIFTNUMBER( , , , , , , )";
DRAWSHIFTNUMBER.marketType = MyCompletionMarketType.BasicFunction;
DRAWSHIFTNUMBER.type = MyCompletionType.DrawingFunction;
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

const DRAWSL = new MyCompletion();
DRAWSL.label = "DRAWSL";
DRAWSL.insertText = "";
DRAWSL.body = "DRAWSL( , , , , , )";
DRAWSL.marketType = MyCompletionMarketType.BasicFunction;
DRAWSL.type = MyCompletionType.DrawingFunction;
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

const DRAWSL1 = new MyCompletion();
DRAWSL1.label = "DRAWSL1";
DRAWSL1.insertText = "";
DRAWSL1.body = "DRAWSL1( , , , , )";
DRAWSL1.marketType = MyCompletionMarketType.BasicFunction;
DRAWSL1.type = MyCompletionType.DrawingFunction;
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

const DRAWTEXT = new MyCompletion();
DRAWTEXT.label = "DRAWTEXT";
DRAWTEXT.insertText = "";
DRAWTEXT.body = "DRAWTEXT( , , )";
DRAWTEXT.marketType = MyCompletionMarketType.BasicFunction;
DRAWTEXT.type = MyCompletionType.DrawingFunction;
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

const DRAWVALID = new MyCompletion();
DRAWVALID.label = "DRAWVALID";
DRAWVALID.insertText = "";
DRAWVALID.body = "DRAWVALID()";
DRAWVALID.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
DRAWVALID.type = MyCompletionType.DrawingFunction;
DRAWVALID.detail = "连接数据的有效值画折线";
DRAWVALID.documentation = `
DRAWVALID(DATA);连接DATA中的有效值画折线
DRAWVALID 连接数据的有效值画折线

用法：
DRAWVALID(DATA);连接DATA中的有效值画折线
注：无效值指的是空值，该函数连接K线图中各个非空值的点

例1：DRAWVALID(IFELSE(C>O,H,NULL));//连接K线图中所有阳线的最高价
`;

const DUALVOLUME = new MyCompletion();
DUALVOLUME.label = "DUALVOLUME";
DUALVOLUME.insertText = "";
DUALVOLUME.body = "DUALVOLUME( )";
DUALVOLUME.marketType = MyCompletionMarketType.BasicFunction;
DUALVOLUME.type = MyCompletionType.CandlestickDataReference;
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

const EMA = new MyCompletion();
EMA.label = "EMA";
EMA.insertText = "";
EMA.body = "EMA( , )";
EMA.marketType = MyCompletionMarketType.BasicFunction;
EMA.type = MyCompletionType.FinancialStatisticsFunction;
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

const EMA2 = new MyCompletion();
EMA2.label = "EMA2";
EMA2.insertText = "";
EMA2.body = "EMA2( , )";
EMA2.marketType = MyCompletionMarketType.BasicFunction;
EMA2.type = MyCompletionType.FinancialStatisticsFunction;
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

const EMAWH = new MyCompletion();
EMAWH.label = "EMAWH";
EMAWH.insertText = "";
EMAWH.body = "EMAWH( , )";
EMAWH.marketType = MyCompletionMarketType.BasicFunction;
EMAWH.type = MyCompletionType.FinancialStatisticsFunction;
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

const ENTRYSIG_PLACE = new MyCompletion();
ENTRYSIG_PLACE.label = "ENTRYSIG_PLACE";
ENTRYSIG_PLACE.insertText = "";
ENTRYSIG_PLACE.body = "ENTRYSIG_PLACE()";
ENTRYSIG_PLACE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ENTRYSIG_PLACE.type = MyCompletionType.SignalLoggingFunction;
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

const ENTRYSIG_PRICE = new MyCompletion();
ENTRYSIG_PRICE.label = "ENTRYSIG_PRICE";
ENTRYSIG_PRICE.insertText = "";
ENTRYSIG_PRICE.body = "ENTRYSIG_PRICE()";
ENTRYSIG_PRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ENTRYSIG_PRICE.type = MyCompletionType.SignalLoggingFunction;
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

const ENTRYSIG_VOL = new MyCompletion();
ENTRYSIG_VOL.label = "ENTRYSIG_VOL";
ENTRYSIG_VOL.insertText = "";
ENTRYSIG_VOL.body = "ENTRYSIG_VOL()";
ENTRYSIG_VOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ENTRYSIG_VOL.type = MyCompletionType.SignalLoggingFunction;
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

const EVERY = new MyCompletion();
EVERY.label = "EVERY";
EVERY.insertText = "";
EVERY.body = "EVERY( , )";
EVERY.marketType = MyCompletionMarketType.BasicFunction;
EVERY.type = MyCompletionType.LogicalJudgmentFunction;
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

const EXIST = new MyCompletion();
EXIST.label = "EXIST";
EXIST.insertText = "";
EXIST.body = "EXIST( , )";
EXIST.marketType = MyCompletionMarketType.BasicFunction;
EXIST.type = MyCompletionType.LogicalJudgmentFunction;
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

const EXITSIG_PLACE = new MyCompletion();
EXITSIG_PLACE.label = "EXITSIG_PLACE";
EXITSIG_PLACE.insertText = "";
EXITSIG_PLACE.body = "EXITSIG_PLACE()";
EXITSIG_PLACE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
EXITSIG_PLACE.type = MyCompletionType.SignalLoggingFunction;
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

const EXITSIG_PRICE = new MyCompletion();
EXITSIG_PRICE.label = "EXITSIG_PRICE";
EXITSIG_PRICE.insertText = "";
EXITSIG_PRICE.body = "EXITSIG_PRICE()";
EXITSIG_PRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
EXITSIG_PRICE.type = MyCompletionType.SignalLoggingFunction;
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

const EXITSIG_VOL = new MyCompletion();
EXITSIG_VOL.label = "EXITSIG_VOL";
EXITSIG_VOL.insertText = "";
EXITSIG_VOL.body = "EXITSIG_VOL()";
EXITSIG_VOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
EXITSIG_VOL.type = MyCompletionType.SignalLoggingFunction;
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

const EXP = new MyCompletion();
EXP.label = "EXP";
EXP.insertText = "";
EXP.body = "EXP( )";
EXP.marketType = MyCompletionMarketType.BasicFunction;
EXP.type = MyCompletionType.MathFunction;
EXP.detail = "指数";
EXP.documentation = `
EXP(X),求e的X次幂
EXP(X)：求e的X次幂。

例1：
C*EXP(0.01);//求收盘价乘以e的0.01次幂
`;

const EXPIREDATE = new MyCompletion();
EXPIREDATE.label = "EXPIREDATE";
EXPIREDATE.insertText = "";
EXPIREDATE.body = "EXPIREDATE()";
EXPIREDATE.marketType = MyCompletionMarketType.BasicFunction;
EXPIREDATE.type = MyCompletionType.TimeFunction;
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

const FEE = new MyCompletion();
FEE.label = "FEE";
FEE.insertText = "";
FEE.body = "FEE";
FEE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
FEE.type = MyCompletionType.PositionManagementFunction;
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

const FILLRGN = new MyCompletion();
FILLRGN.label = "FILLRGN";
FILLRGN.insertText = "";
FILLRGN.body = "FILLRGN( , , , )";
FILLRGN.marketType = MyCompletionMarketType.BasicFunction;
FILLRGN.type = MyCompletionType.DrawingFunction;
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

const FILLRGN1 = new MyCompletion();
FILLRGN1.label = "FILLRGN1";
FILLRGN1.insertText = "";
FILLRGN1.body = "FILLRGN1( , , )";
FILLRGN1.marketType = MyCompletionMarketType.BasicFunction;
FILLRGN1.type = MyCompletionType.DrawingFunction;
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

const FILTER = new MyCompletion();
FILTER.label = "FILTER";
FILTER.insertText = "";
FILTER.body = "FILTER( , )";
FILTER.marketType = MyCompletionMarketType.BasicFunction;
FILTER.type = MyCompletionType.LogicalJudgmentFunction;
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

const FINANCE_DATA = new MyCompletion();
FINANCE_DATA.label = "FINANCE_DATA";
FINANCE_DATA.insertText = "";
FINANCE_DATA.body = "FINANCE_DATA('')";
FINANCE_DATA.marketType = MyCompletionMarketType.BasicFunction;
FINANCE_DATA.type = MyCompletionType.StockDataFunction;
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

const FLOOR = new MyCompletion();
FLOOR.label = "FLOOR";
FLOOR.insertText = "";
FLOOR.body = "FLOOR( )";
FLOOR.marketType = MyCompletionMarketType.BasicFunction;
FLOOR.type = MyCompletionType.MathFunction;
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

const FONTSIZE = new MyCompletion();
FONTSIZE.label = "FONTSIZE";
FONTSIZE.insertText = "";
FONTSIZE.body = "FONTSIZE";
FONTSIZE.marketType = MyCompletionMarketType.BasicFunction;
FONTSIZE.type = MyCompletionType.DrawingFunction;
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

const FORCAST = new MyCompletion();
FORCAST.label = "FORCAST";
FORCAST.insertText = "";
FORCAST.body = "FORCAST( , )";
FORCAST.marketType = MyCompletionMarketType.BasicFunction;
FORCAST.type = MyCompletionType.MathematicalStatisticsFunction;
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

const GROUP = new MyCompletion();
GROUP.label = "GROUP";
GROUP.insertText = "";
GROUP.body = "GROUP()";
GROUP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
GROUP.type = MyCompletionType.SignalLoggingFunction;
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

const GROUPBKPRICE = new MyCompletion();
GROUPBKPRICE.label = "GROUPBKPRICE";
GROUPBKPRICE.insertText = "";
GROUPBKPRICE.body = "GROUPBKPRICE";
GROUPBKPRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
GROUPBKPRICE.type = MyCompletionType.SignalLoggingFunction;
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

const GROUPBKVOL = new MyCompletion();
GROUPBKVOL.label = "GROUPBKVOL";
GROUPBKVOL.insertText = "";
GROUPBKVOL.body = "BKVOL";
GROUPBKVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
GROUPBKVOL.type = MyCompletionType.SignalLoggingFunction;
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

const GROUPSKPRICE = new MyCompletion();
GROUPSKPRICE.label = "GROUPSKPRICE";
GROUPSKPRICE.insertText = "";
GROUPSKPRICE.body = "GROUPSKPRICE";
GROUPSKPRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
GROUPSKPRICE.type = MyCompletionType.SignalLoggingFunction;
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

const GROUPSKVOL = new MyCompletion();
GROUPSKVOL.label = "GROUPSKVOL";
GROUPSKVOL.insertText = "";
GROUPSKVOL.body = "GROUPSKVOL";
GROUPSKVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
GROUPSKVOL.type = MyCompletionType.SignalLoggingFunction;
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

const HARMEAN = new MyCompletion();
HARMEAN.label = "HARMEAN";
HARMEAN.insertText = "";
HARMEAN.body = "HARMEAN( , )";
HARMEAN.marketType = MyCompletionMarketType.BasicFunction;
HARMEAN.type = MyCompletionType.FinancialStatisticsFunction;
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

const HASTRADEDATA = new MyCompletion();
HASTRADEDATA.label = "HASTRADEDATA";
HASTRADEDATA.insertText = "";
HASTRADEDATA.body = "HASTRADEDATA";
HASTRADEDATA.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
HASTRADEDATA.type = MyCompletionType.LogicalJudgmentFunction;
HASTRADEDATA.detail = "判断数据合约当根K线交易合约是否有数据";
HASTRADEDATA.documentation = `
HASTRADEDATA判断数据合约当根K线交易合约是否有数据
HASTRADEDATA  判断数据合约当根K线交易合约是否有数据

用法：
HASTRADEDATA;  
1、判断数据合约当根K线交易合约是否有数据，有数据返回1，无数据返回0。
2、若数据合约和交易合约一致返回1
`;

const HHV = new MyCompletion();
HHV.label = "HHV";
HHV.insertText = "";
HHV.body = "HHV( , )";
HHV.marketType = MyCompletionMarketType.BasicFunction;
HHV.type = MyCompletionType.FinancialStatisticsFunction;
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

const HHVBARS = new MyCompletion();
HHVBARS.label = "HHVBARS";
HHVBARS.insertText = "";
HHVBARS.body = "HHVBARS( , )";
HHVBARS.marketType = MyCompletionMarketType.BasicFunction;
HHVBARS.type = MyCompletionType.FinancialStatisticsFunction;
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

const HIGH = new MyCompletion();
HIGH.label = "HIGH";
HIGH.insertText = "";
HIGH.body = "HIGH";
HIGH.marketType = MyCompletionMarketType.BasicFunction;
HIGH.type = MyCompletionType.CandlestickDataReference;
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

const HISEXPDATE = new MyCompletion();
HISEXPDATE.label = "HISEXPDATE";
HISEXPDATE.insertText = "";
HISEXPDATE.body = "HISEXPDATE";
HISEXPDATE.marketType = MyCompletionMarketType.BasicFunction;
HISEXPDATE.type = MyCompletionType.TimeFunction;
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

const HISEXPDAYS = new MyCompletion();
HISEXPDAYS.label = "HISEXPDAYS";
HISEXPDAYS.insertText = "";
HISEXPDAYS.body = "HISEXPDAYS";
HISEXPDAYS.marketType = MyCompletionMarketType.BasicFunction;
HISEXPDAYS.type = MyCompletionType.TimeFunction;
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

const HOLLOW = new MyCompletion();
HOLLOW.label = "HOLLOW";
HOLLOW.insertText = "";
HOLLOW.body = "HOLLOW";
HOLLOW.marketType = MyCompletionMarketType.BasicFunction;
HOLLOW.type = MyCompletionType.DrawingFunction;
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

const HOUR = new MyCompletion();
HOUR.label = "HOUR";
HOUR.insertText = "";
HOUR.body = "HOUR";
HOUR.marketType = MyCompletionMarketType.BasicFunction;
HOUR.type = MyCompletionType.TimeFunction;
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

const HV = new MyCompletion();
HV.label = "HV";
HV.insertText = "";
HV.body = "HV( , )";
HV.marketType = MyCompletionMarketType.BasicFunction;
HV.type = MyCompletionType.FinancialStatisticsFunction;
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

const ICON = new MyCompletion();
ICON.label = "ICON";
ICON.insertText = "";
ICON.body = "ICON( , )";
ICON.marketType = MyCompletionMarketType.BasicFunction;
ICON.type = MyCompletionType.DrawingFunction;
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

const IDLE = new MyCompletion();
IDLE.label = "IDLE";
IDLE.insertText = "";
IDLE.body = "IDLE()";
IDLE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
IDLE.type = MyCompletionType.SignalExecutionFunction;
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

const IF = new MyCompletion();
IF.label = "IF";
IF.insertText = "";
IF.body = "IF( , , )";
IF.marketType = MyCompletionMarketType.BasicFunction;
IF.type = MyCompletionType.LogicalJudgmentFunction;
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

const IFELSE = new MyCompletion();
IFELSE.label = "IFELSE";
IFELSE.insertText = "";
IFELSE.body = "IFELSE( , , )";
IFELSE.marketType = MyCompletionMarketType.BasicFunction;
IFELSE.type = MyCompletionType.LogicalJudgmentFunction;
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

const IMPLIEDVOLATILITY = new MyCompletion();
IMPLIEDVOLATILITY.label = "IMPLIEDVOLATILITY";
IMPLIEDVOLATILITY.insertText = "";
IMPLIEDVOLATILITY.body = "IMPLIEDVOLATILITY";
IMPLIEDVOLATILITY.marketType = MyCompletionMarketType.BasicFunction;
IMPLIEDVOLATILITY.type = MyCompletionType.CandlestickDataReference;
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

const INITMONEY = new MyCompletion();
INITMONEY.label = "INITMONEY";
INITMONEY.insertText = "";
INITMONEY.body = "INITMONEY";
INITMONEY.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
INITMONEY.type = MyCompletionType.PositionManagementFunction;
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

const INTPART = new MyCompletion();
INTPART.label = "INTPART";
INTPART.insertText = "";
INTPART.body = "INTPART( )";
INTPART.marketType = MyCompletionMarketType.BasicFunction;
INTPART.type = MyCompletionType.MathFunction;
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

const ISCONTRACT = new MyCompletion();
ISCONTRACT.label = "ISCONTRACT";
ISCONTRACT.insertText = "";
ISCONTRACT.body = "ISCONTRACT()";
ISCONTRACT.marketType = MyCompletionMarketType.BasicFunction;
ISCONTRACT.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISDELIVERYDAY = new MyCompletion();
ISDELIVERYDAY.label = "ISDELIVERYDAY";
ISDELIVERYDAY.insertText = "";
ISDELIVERYDAY.body = "ISDELIVERYDAY";
ISDELIVERYDAY.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISDELIVERYDAY.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISDOWN = new MyCompletion();
ISDOWN.label = "ISDOWN";
ISDOWN.insertText = "";
ISDOWN.body = "ISDOWN";
ISDOWN.marketType = MyCompletionMarketType.BasicFunction;
ISDOWN.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISEQUAL = new MyCompletion();
ISEQUAL.label = "ISEQUAL";
ISEQUAL.insertText = "";
ISEQUAL.body = "ISEQUAL";
ISEQUAL.marketType = MyCompletionMarketType.BasicFunction;
ISEQUAL.type = MyCompletionType.LogicalJudgmentFunction;
ISEQUAL.detail = "平盘";
ISEQUAL.documentation = `
ISEQUAL,判断该周期是否平盘，如果K线为平盘返回1，否则返回0
ISEQUAL 判断该周期是否平盘

注：
1、ISEQUAL等同于C=O

例1：
EVERY(ISEQUAL=1,2),CLOSEOUT;//持续2根k线都是平盘，则全平。
`;

const ISLASTBAR = new MyCompletion();
ISLASTBAR.label = "ISLASTBAR";
ISLASTBAR.insertText = "";
ISLASTBAR.body = "ISLASTBAR";
ISLASTBAR.marketType = MyCompletionMarketType.BasicFunction;
ISLASTBAR.type = MyCompletionType.DrawingFunction;
ISLASTBAR.detail = "判断该周期是否为最后一根K线";
ISLASTBAR.documentation = `
ISLASTBAR,判断是否是最后一个K线，如果为最后一根K线返回1，否则返回0
ISLASTBAR 判断该周期是否为最后一根k线。

注：
该函数仅支持在绘图函数中使用。
 
例1：
DRAWNUMBER(ISLASTBAR=1,HIGH,CLOSE,0,COLORRED);//当前k线是最后一根k线，则在最高价位置红色显示收盘价。
`;

const ISLASTBK = new MyCompletion();
ISLASTBK.label = "ISLASTBK";
ISLASTBK.insertText = "";
ISLASTBK.body = "ISLASTBK";
ISLASTBK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTBK.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTBP = new MyCompletion();
ISLASTBP.label = "ISLASTBP";
ISLASTBP.insertText = "";
ISLASTBP.body = "ISLASTBP";
ISLASTBP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTBP.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTBPK = new MyCompletion();
ISLASTBPK.label = "ISLASTBPK";
ISLASTBPK.insertText = "";
ISLASTBPK.body = "ISLASTBPK";
ISLASTBPK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTBPK.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTBUY = new MyCompletion();
ISLASTBUY.label = "ISLASTBUY";
ISLASTBUY.insertText = "";
ISLASTBUY.body = "ISLASTBUY";
ISLASTBUY.marketType = MyCompletionMarketType.TPlusOneStrategyFunction;
ISLASTBUY.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTCLOSEOUT = new MyCompletion();
ISLASTCLOSEOUT.label = "ISLASTCLOSEOUT";
ISLASTCLOSEOUT.insertText = "";
ISLASTCLOSEOUT.body = "ISLASTCLOSEOUT";
ISLASTCLOSEOUT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTCLOSEOUT.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTKLINE = new MyCompletion();
ISLASTKLINE.label = "ISLASTKLINE";
ISLASTKLINE.insertText = "";
ISLASTKLINE.body = "ISLASTKLINE";
ISLASTKLINE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTKLINE.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISLASTSELL = new MyCompletion();
ISLASTSELL.label = "ISLASTSELL";
ISLASTSELL.insertText = "";
ISLASTSELL.body = "ISLASTSELL";
ISLASTSELL.marketType = MyCompletionMarketType.TPlusOneStrategyFunction;
ISLASTSELL.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTSK = new MyCompletion();
ISLASTSK.label = "ISLASTSK";
ISLASTSK.insertText = "";
ISLASTSK.body = "ISLASTSK";
ISLASTSK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTSK.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTSP = new MyCompletion();
ISLASTSP.label = "ISLASTSP";
ISLASTSP.insertText = "";
ISLASTSP.body = "ISLASTSP";
ISLASTSP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTSP.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTSPK = new MyCompletion();
ISLASTSPK.label = "ISLASTSPK";
ISLASTSPK.insertText = "";
ISLASTSPK.body = "ISLASTSPK";
ISLASTSPK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTSPK.type = MyCompletionType.SignalLoggingFunction;
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

const ISLASTSTOP = new MyCompletion();
ISLASTSTOP.label = "ISLASTSTOP";
ISLASTSTOP.insertText = "";
ISLASTSTOP.body = "ISLASTSTOP";
ISLASTSTOP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISLASTSTOP.type = MyCompletionType.SignalLoggingFunction;
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

const ISMAINCONTRACT = new MyCompletion();
ISMAINCONTRACT.label = "ISMAINCONTRACT";
ISMAINCONTRACT.insertText = "";
ISMAINCONTRACT.body = "ISMAINCONTRACT";
ISMAINCONTRACT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISMAINCONTRACT.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISMONTHEND = new MyCompletion();
ISMONTHEND.label = "ISMONTHEND";
ISMONTHEND.insertText = "";
ISMONTHEND.body = "ISMONTHEND";
ISMONTHEND.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISMONTHEND.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISNEARHOLIDAY = new MyCompletion();
ISNEARHOLIDAY.label = "ISNEARHOLIDAY";
ISNEARHOLIDAY.insertText = "";
ISNEARHOLIDAY.body = "ISNEARHOLIDAY";
ISNEARHOLIDAY.marketType = MyCompletionMarketType.BasicFunction;
ISNEARHOLIDAY.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISNULL = new MyCompletion();
ISNULL.label = "ISNULL";
ISNULL.insertText = "";
ISNULL.body = "ISNULL";
ISNULL.marketType = MyCompletionMarketType.BasicFunction;
ISNULL.type = MyCompletionType.LogicalJudgmentFunction;
ISNULL.detail = "判断空值";
ISNULL.documentation = `
ISNULL(N)判断空值，如果N为空值返回1，否则返回0
ISNULL 判断空值

用法：ISNULL(N);如果N为空值，函数返回1；如果N为非空值，函数返回0。

例：MA5:IFELSE(ISNULL(MA(C,5))=1,C,MA(C,5));//定义五周期均线，K线数量不足五根时，返回当根K线的收盘价
`;

const ISRECORDDAY = new MyCompletion();
ISRECORDDAY.label = "ISRECORDDAY";
ISRECORDDAY.insertText = "";
ISRECORDDAY.body = "ISRECORDDAY";
ISRECORDDAY.marketType = MyCompletionMarketType.BasicFunction;
ISRECORDDAY.type = MyCompletionType.StockDataFunction;
ISRECORDDAY.detail = "判断当根K线是否为股权登记日";
ISRECORDDAY.documentation = `
ISRECORDDAY判断当根K线是否为股权登记日
ISRECORDDAY  判断当根K线是否为股权登记日

用法：ISRECORDDAY  判断当根K线是否为股权登记日，当根K线是股权登记日返回是1（Yes），否则返回0（No）。

注：
1、该函数只支持加载在国内股票日线及以下周期使用，加载在非国内股票合约或日以上周期时返回值为0；
2、跨合约/跨周期被引用指标中返回值为0。
`;

const ISTIMETOKLINEEND = new MyCompletion();
ISTIMETOKLINEEND.label = "ISTIMETOKLINEEND";
ISTIMETOKLINEEND.insertText = "";
ISTIMETOKLINEEND.body = "ISTIMETOKLINEEND";
ISTIMETOKLINEEND.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISTIMETOKLINEEND.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISUP = new MyCompletion();
ISUP.label = "ISUP";
ISUP.insertText = "";
ISUP.body = "ISUP";
ISUP.marketType = MyCompletionMarketType.BasicFunction;
ISUP.type = MyCompletionType.LogicalJudgmentFunction;
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

const ISWEEKEND = new MyCompletion();
ISWEEKEND.label = "ISWEEKEND";
ISWEEKEND.insertText = "";
ISWEEKEND.body = "ISWEEKEND";
ISWEEKEND.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
ISWEEKEND.type = MyCompletionType.LogicalJudgmentFunction;
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

const K_STATE = new MyCompletion();
K_STATE.label = "K_STATE";
K_STATE.insertText = "";
K_STATE.body = "K_STATE()";
K_STATE.marketType = MyCompletionMarketType.BasicFunction;
K_STATE.type = MyCompletionType.LogicalJudgmentFunction;
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

const K_STATE1 = new MyCompletion();
K_STATE1.label = "K_STATE1";
K_STATE1.insertText = "";
K_STATE1.body = "K_STATE1()";
K_STATE1.marketType = MyCompletionMarketType.BasicFunction;
K_STATE1.type = MyCompletionType.LogicalJudgmentFunction;
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

const K_STATE2 = new MyCompletion();
K_STATE2.label = "K_STATE2";
K_STATE2.insertText = "";
K_STATE2.body = "K_STATE2()";
K_STATE2.marketType = MyCompletionMarketType.BasicFunction;
K_STATE2.type = MyCompletionType.LogicalJudgmentFunction;
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

const K_STATE3 = new MyCompletion();
K_STATE3.label = "K_STATE3";
K_STATE3.insertText = "";
K_STATE3.body = "K_STATE3()";
K_STATE3.marketType = MyCompletionMarketType.BasicFunction;
K_STATE3.type = MyCompletionType.LogicalJudgmentFunction;
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

const K_STATE4 = new MyCompletion();
K_STATE4.label = "K_STATE4";
K_STATE4.insertText = "";
K_STATE4.body = "K_STATE4()";
K_STATE4.marketType = MyCompletionMarketType.BasicFunction;
K_STATE4.type = MyCompletionType.LogicalJudgmentFunction;
K_STATE4.detail = "判断k线形态";
K_STATE4.documentation = `
K_STATE4()判断K线形态
K_STATE4 判断k线形态

用法：
K_STATE4(N1,N2,N3,N4,'STATE');N1,N2,N3,N4为k线形态源码中的参数；STATE为代表k线形态的字符串。加载到k线图后，符合该k线形态，返回1，否则返回0。

例：
K_STATE4(5,5,10,20,'九阴白骨爪')：参数N1为连续N根K线满足阴线，参数N2、N3、N4为三条均线的周期
`;

const KLINESIG = new MyCompletion();
KLINESIG.label = "KLINESIG";
KLINESIG.insertText = "";
KLINESIG.body = "KLINESIG";
KLINESIG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
KLINESIG.type = MyCompletionType.SignalLoggingFunction;
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

const KLINESTART = new MyCompletion();
KLINESTART.label = "KLINESTART";
KLINESTART.insertText = "";
KLINESTART.body = "KLINESTART";
KLINESTART.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
KLINESTART.type = MyCompletionType.LogicalJudgmentFunction;
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

const KTEXT = new MyCompletion();
KTEXT.label = "KTEXT";
KTEXT.insertText = "";
KTEXT.body = "KTEXT( , , , , ,)";
KTEXT.marketType = MyCompletionMarketType.BasicFunction;
KTEXT.type = MyCompletionType.DrawingFunction;
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

const KURTOSIS = new MyCompletion();
KURTOSIS.label = "KURTOSIS";
KURTOSIS.insertText = "";
KURTOSIS.body = "KURTOSIS( , )";
KURTOSIS.marketType = MyCompletionMarketType.BasicFunction;
KURTOSIS.type = MyCompletionType.MathematicalStatisticsFunction;
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

const LAST = new MyCompletion();
LAST.label = "LAST";
LAST.insertText = "";
LAST.body = "LAST( , , )";
LAST.marketType = MyCompletionMarketType.BasicFunction;
LAST.type = MyCompletionType.LogicalJudgmentFunction;
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

const LASTOFFSETPROFIT = new MyCompletion();
LASTOFFSETPROFIT.label = "LASTOFFSETPROFIT";
LASTOFFSETPROFIT.insertText = "";
LASTOFFSETPROFIT.body = "LASTOFFSETPROFIT";
LASTOFFSETPROFIT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
LASTOFFSETPROFIT.type = MyCompletionType.PositionManagementFunction;
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

const LASTSIG = new MyCompletion();
LASTSIG.label = "LASTSIG";
LASTSIG.insertText = "";
LASTSIG.body = "LASTSIG";
LASTSIG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
LASTSIG.type = MyCompletionType.SignalLoggingFunction;
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

const LASTSIGGROUP = new MyCompletion();
LASTSIGGROUP.label = "LASTSIGGROUP";
LASTSIGGROUP.insertText = "";
LASTSIGGROUP.body = "LASTSIGGROUP";
LASTSIGGROUP.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
LASTSIGGROUP.type = MyCompletionType.SignalLoggingFunction;
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

const LINETHICK = new MyCompletion();
LINETHICK.label = "LINETHICK";
LINETHICK.insertText = "";
LINETHICK.body = "LINETHICK";
LINETHICK.marketType = MyCompletionMarketType.BasicFunction;
LINETHICK.type = MyCompletionType.DrawingFunction;
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

const LLV = new MyCompletion();
LLV.label = "LLV";
LLV.insertText = "";
LLV.body = "LLV( , )";
LLV.marketType = MyCompletionMarketType.BasicFunction;
LLV.type = MyCompletionType.FinancialStatisticsFunction;
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

const LLVBARS = new MyCompletion();
LLVBARS.label = "LLVBARS";
LLVBARS.insertText = "";
LLVBARS.body = "LLVBARS( , )";
LLVBARS.marketType = MyCompletionMarketType.BasicFunction;
LLVBARS.type = MyCompletionType.FinancialStatisticsFunction;
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

const LN = new MyCompletion();
LN.label = "LN";
LN.insertText = "";
LN.body = "LN( )";
LN.marketType = MyCompletionMarketType.BasicFunction;
LN.type = MyCompletionType.MathFunction;
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

const LOG = new MyCompletion();
LOG.label = "LOG";
LOG.insertText = "";
LOG.body = "LOG( )";
LOG.marketType = MyCompletionMarketType.BasicFunction;
LOG.type = MyCompletionType.MathFunction;
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

const LOG10 = new MyCompletion();
LOG10.label = "LOG10";
LOG10.insertText = "";
LOG10.body = "LOG10( )";
LOG10.marketType = MyCompletionMarketType.BasicFunction;
LOG10.type = MyCompletionType.MathFunction;
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

const LONGCROSS = new MyCompletion();
LONGCROSS.label = "LONGCROSS";
LONGCROSS.insertText = "";
LONGCROSS.body = "LONGCROSS( , , )";
LONGCROSS.marketType = MyCompletionMarketType.BasicFunction;
LONGCROSS.type = MyCompletionType.LogicalJudgmentFunction;
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

const LOOP1 = new MyCompletion();
LOOP1.label = "LOOP1";
LOOP1.insertText = "";
LOOP1.body = "LOOP1( , , )";
LOOP1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
LOOP1.type = MyCompletionType.LoopExecutionFunction;
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

const LOOP2 = new MyCompletion();
LOOP2.label = "LOOP2";
LOOP2.insertText = "";
LOOP2.body = "LOOP2( , , )";
LOOP2.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
LOOP2.type = MyCompletionType.LoopExecutionFunction;
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

const LOW = new MyCompletion();
LOW.label = "LOW";
LOW.insertText = "";
LOW.body = "LOW";
LOW.marketType = MyCompletionMarketType.BasicFunction;
LOW.type = MyCompletionType.CandlestickDataReference;
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

const LV = new MyCompletion();
LV.label = "LV";
LV.insertText = "";
LV.body = "LV( , )";
LV.marketType = MyCompletionMarketType.BasicFunction;
LV.type = MyCompletionType.FinancialStatisticsFunction;
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

const MA = new MyCompletion();
MA.label = "MA";
MA.insertText = "";
MA.body = "MA( , )";
MA.marketType = MyCompletionMarketType.BasicFunction;
MA.type = MyCompletionType.FinancialStatisticsFunction;
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

const MARGIN = new MyCompletion();
MARGIN.label = "MARGIN";
MARGIN.insertText = "";
MARGIN.body = "MARGIN";
MARGIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MARGIN.type = MyCompletionType.PositionManagementFunction;
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

const MAX = new MyCompletion();
MAX.label = "MAX";
MAX.insertText = "";
MAX.body = "MAX( , )";
MAX.marketType = MyCompletionMarketType.BasicFunction;
MAX.type = MyCompletionType.MathFunction;
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

const MAX1 = new MyCompletion();
MAX1.label = "MAX1";
MAX1.insertText = "";
MAX1.body = "MAX1( )";
MAX1.marketType = MyCompletionMarketType.BasicFunction;
MAX1.type = MyCompletionType.MathFunction;
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

const MAXBKVOL = new MyCompletion();
MAXBKVOL.label = "MAXBKVOL";
MAXBKVOL.insertText = "";
MAXBKVOL.body = "MAXBKVOL";
MAXBKVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MAXBKVOL.type = MyCompletionType.SignalLoggingFunction;
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

const MAXSKVOL = new MyCompletion();
MAXSKVOL.label = "MAXSKVOL";
MAXSKVOL.insertText = "";
MAXSKVOL.body = "MAXSKVOL";
MAXSKVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MAXSKVOL.type = MyCompletionType.SignalLoggingFunction;
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

const MEDIAN = new MyCompletion();
MEDIAN.label = "MEDIAN";
MEDIAN.insertText = "";
MEDIAN.body = "MEDIAN( , )";
MEDIAN.marketType = MyCompletionMarketType.BasicFunction;
MEDIAN.type = MyCompletionType.MathFunction;
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

const MEDIAN1 = new MyCompletion();
MEDIAN1.label = "MEDIAN1";
MEDIAN1.insertText = "";
MEDIAN1.body = "MEDIAN1()";
MEDIAN1.marketType = MyCompletionMarketType.BasicFunction;
MEDIAN1.type = MyCompletionType.MathFunction;
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

const MIN = new MyCompletion();
MIN.label = "MIN";
MIN.insertText = "";
MIN.body = "MIN( , )";
MIN.marketType = MyCompletionMarketType.BasicFunction;
MIN.type = MyCompletionType.MathFunction;
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

const MIN1 = new MyCompletion();
MIN1.label = "MIN1";
MIN1.insertText = "";
MIN1.body = "MIN1( )";
MIN1.marketType = MyCompletionMarketType.BasicFunction;
MIN1.type = MyCompletionType.MathFunction;
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

const MINPRICE = new MyCompletion();
MINPRICE.label = "MINPRICE";
MINPRICE.insertText = "";
MINPRICE.body = "MINPRICE";
MINPRICE.marketType = MyCompletionMarketType.BasicFunction;
MINPRICE.type = MyCompletionType.CandlestickDataReference;
MINPRICE.detail = "数据合约的最小变动价位";
MINPRICE.documentation = `
MINPRICE,取数据合约的最小变动价位
取数据合约的最小变动价位。
用法：
MINPRICE; 取加载数据合约的最小变动价位。
`;

const MINPRICE1 = new MyCompletion();
MINPRICE1.label = "MINPRICE1";
MINPRICE1.insertText = "";
MINPRICE1.body = "MINPRICE1";
MINPRICE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MINPRICE1.type = MyCompletionType.CandlestickDataReference;
MINPRICE1.detail = "交易合约的最小变动价位";
MINPRICE1.documentation = `
MINPRICE1,取交易合约的最小变动价位
MINPRICE1  取交易合约的最小变动价位。
用法：
MINPRICE1; 取交易合约的最小变动价位。
`;

const MINPRICED = new MyCompletion();
MINPRICED.label = "MINPRICED";
MINPRICED.insertText = "";
MINPRICED.body = "MINPRICED";
MINPRICED.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MINPRICED.type = MyCompletionType.CandlestickDataReference;
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

const MINUTE = new MyCompletion();
MINUTE.label = "MINUTE";
MINUTE.insertText = "";
MINUTE.body = "MINUTE";
MINUTE.marketType = MyCompletionMarketType.BasicFunction;
MINUTE.type = MyCompletionType.TimeFunction;
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

const MOD = new MyCompletion();
MOD.label = "MOD";
MOD.insertText = "";
MOD.body = "MOD( , )";
MOD.marketType = MyCompletionMarketType.BasicFunction;
MOD.type = MyCompletionType.MathFunction;
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

const MODE = new MyCompletion();
MODE.label = "MODE";
MODE.insertText = "";
MODE.body = "MODE( , )";
MODE.marketType = MyCompletionMarketType.BasicFunction;
MODE.type = MyCompletionType.MathFunction;
MODE.detail = "求众数";
MODE.documentation = `
MODE(X,N)求X在N个周期内最常出现的值
MODE(X,N) 求X在N个周期内最常出现的值。

注：
1、如果N个周期内不含有重复的数值，则函数返回空值。
2、N可以为变量。
`;

const MONEY = new MyCompletion();
MONEY.label = "MONEY";
MONEY.insertText = "";
MONEY.body = "MONEY";
MONEY.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MONEY.type = MyCompletionType.PositionManagementFunction;
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

const MONEYRATIO = new MyCompletion();
MONEYRATIO.label = "MONEYRATIO";
MONEYRATIO.insertText = "";
MONEYRATIO.body = "MONEYRATIO";
MONEYRATIO.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MONEYRATIO.type = MyCompletionType.PositionManagementFunction;
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

const MONEYTOT = new MyCompletion();
MONEYTOT.label = "MONEYTOT";
MONEYTOT.insertText = "";
MONEYTOT.body = "MONEYTOT";
MONEYTOT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MONEYTOT.type = MyCompletionType.PositionManagementFunction;
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

const MONTH = new MyCompletion();
MONTH.label = "MONTH";
MONTH.insertText = "";
MONTH.body = "MONTH";
MONTH.marketType = MyCompletionMarketType.BasicFunction;
MONTH.type = MyCompletionType.TimeFunction;
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

const MONTHTRADE = new MyCompletion();
MONTHTRADE.label = "MONTHTRADE";
MONTHTRADE.insertText = "";
MONTHTRADE.body = "MONTHTRADE";
MONTHTRADE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MONTHTRADE.type = MyCompletionType.CalculationControlFunction;
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

const MONTHTRADE1 = new MyCompletion();
MONTHTRADE1.label = "MONTHTRADE1";
MONTHTRADE1.insertText = "";
MONTHTRADE1.body = "MONTHTRADE1";
MONTHTRADE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MONTHTRADE1.type = MyCompletionType.CalculationControlFunction;
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

const MULTSIG = new MyCompletion();
MULTSIG.label = "MULTSIG";
MULTSIG.insertText = "";
MULTSIG.body = "MULTSIG( , , , )";
MULTSIG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MULTSIG.type = MyCompletionType.PerformanceOptimizationFunction;
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

const MULTSIG_MIN = new MyCompletion();
MULTSIG_MIN.label = "MULTSIG_MIN";
MULTSIG_MIN.insertText = "";
MULTSIG_MIN.body = "MULTSIG_MIN( , , )";
MULTSIG_MIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MULTSIG_MIN.type = MyCompletionType.PerformanceOptimizationFunction;
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

const MV = new MyCompletion();
MV.label = "MV";
MV.insertText = "";
MV.body = "MV(,)";
MV.marketType = MyCompletionMarketType.BasicFunction;
MV.type = MyCompletionType.FinancialStatisticsFunction;
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

const MYVOL = new MyCompletion();
MYVOL.label = "MYVOL";
MYVOL.insertText = "";
MYVOL.body = "MYVOL";
MYVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
MYVOL.type = MyCompletionType.SignalLoggingFunction;
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

const NAMELIKE = new MyCompletion();
NAMELIKE.label = "NAMELIKE";
NAMELIKE.insertText = "";
NAMELIKE.body = "NAMELIKE('')";
NAMELIKE.marketType = MyCompletionMarketType.BasicFunction;
NAMELIKE.type = MyCompletionType.LogicalJudgmentFunction;
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

const NEWHBARS = new MyCompletion();
NEWHBARS.label = "NEWHBARS";
NEWHBARS.insertText = "";
NEWHBARS.body = "NEWHBARS( , )";
NEWHBARS.marketType = MyCompletionMarketType.BasicFunction;
NEWHBARS.type = MyCompletionType.FinancialStatisticsFunction;
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

const NEWHBARS1 = new MyCompletion();
NEWHBARS1.label = "NEWHBARS1";
NEWHBARS1.insertText = "";
NEWHBARS1.body = "NEWHBARS1( , , )";
NEWHBARS1.marketType = MyCompletionMarketType.BasicFunction;
NEWHBARS1.type = MyCompletionType.FinancialStatisticsFunction;
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

const NEWLBARS = new MyCompletion();
NEWLBARS.label = "NEWLBARS";
NEWLBARS.insertText = "";
NEWLBARS.body = "NEWLBARS( , )";
NEWLBARS.marketType = MyCompletionMarketType.BasicFunction;
NEWLBARS.type = MyCompletionType.FinancialStatisticsFunction;
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

const NEWLBARS1 = new MyCompletion();
NEWLBARS1.label = "NEWLBARS1";
NEWLBARS1.insertText = "";
NEWLBARS1.body = "NEWLBARS1( , , )";
NEWLBARS1.marketType = MyCompletionMarketType.BasicFunction;
NEWLBARS1.type = MyCompletionType.FinancialStatisticsFunction;
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

const NODRAW = new MyCompletion();
NODRAW.label = "NODRAW";
NODRAW.insertText = "";
NODRAW.body = "NODRAW";
NODRAW.marketType = MyCompletionMarketType.BasicFunction;
NODRAW.type = MyCompletionType.DrawingFunction;
NODRAW.detail = "不画线";
NODRAW.documentation = `
NODRAW,不画线
NODRAW 只显示返回数值，不画线。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:NODRAW;

例：
 MA5:MA(C,5), NODRAW;显示5周期均线的返回值，K线图上不显示均线。
`;

const NORMPDF = new MyCompletion();
NORMPDF.label = "NORMPDF";
NORMPDF.insertText = "";
NORMPDF.body = "NORMPDF( , , )";
NORMPDF.marketType = MyCompletionMarketType.BasicFunction;
NORMPDF.type = MyCompletionType.MathematicalStatisticsFunction;
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

const NOT = new MyCompletion();
NOT.label = "NOT";
NOT.insertText = "";
NOT.body = "NOT( )";
NOT.marketType = MyCompletionMarketType.BasicFunction;
NOT.type = MyCompletionType.LogicalJudgmentFunction;
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

const NOTEXT = new MyCompletion();
NOTEXT.label = "NOTEXT";
NOTEXT.insertText = "";
NOTEXT.body = "NOTEXT";
NOTEXT.marketType = MyCompletionMarketType.BasicFunction;
NOTEXT.type = MyCompletionType.DrawingFunction;
NOTEXT.detail = "不显示数值";
NOTEXT.documentation = `
NOTEXT不显示数值
NOTEXT 只显示画线，不显示数值。

注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:NOTEXT;

例：
 MA5:MA(C,5), NOTEXT;K线图上显示5周期均线，不显示均线的数值。
`;

const NULL = new MyCompletion();
NULL.label = "NULL";
NULL.insertText = "";
NULL.body = "NULL";
NULL.marketType = MyCompletionMarketType.BasicFunction;
NULL.type = MyCompletionType.LogicalJudgmentFunction;
NULL.detail = "返回空值";
NULL.documentation = `
NULL,返回空值
返回空值
用法：
MA5:=MA(C,5);
MA10:=MA(C,10);
A:IFELSE(MA5>MA10,MA5,NULL),COLORRED;//当MA5>MA10时，画五日均线MA5，不满足MA5>MA10时，返回空值，不画线。
`;

const NUMPOW = new MyCompletion();
NUMPOW.label = "NUMPOW";
NUMPOW.insertText = "";
NUMPOW.body = "NUMPOW(,,)";
NUMPOW.marketType = MyCompletionMarketType.BasicFunction;
NUMPOW.type = MyCompletionType.FinancialStatisticsFunction;
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

const OFFSETPROFIT = new MyCompletion();
OFFSETPROFIT.label = "OFFSETPROFIT";
OFFSETPROFIT.insertText = "";
OFFSETPROFIT.body = "OFFSETPROFIT";
OFFSETPROFIT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
OFFSETPROFIT.type = MyCompletionType.PositionManagementFunction;
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

const OFFSETPROFIT1 = new MyCompletion();
OFFSETPROFIT1.label = "OFFSETPROFIT1";
OFFSETPROFIT1.insertText = "";
OFFSETPROFIT1.body = "OFFSETPROFIT1";
OFFSETPROFIT1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
OFFSETPROFIT1.type = MyCompletionType.PositionManagementFunction;
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

const OPEN = new MyCompletion();
OPEN.label = "OPEN";
OPEN.insertText = "";
OPEN.body = "OPEN";
OPEN.marketType = MyCompletionMarketType.BasicFunction;
OPEN.type = MyCompletionType.CandlestickDataReference;
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

const OPENMINUTE = new MyCompletion();
OPENMINUTE.label = "OPENMINUTE";
OPENMINUTE.insertText = "";
OPENMINUTE.body = "OPENMINUTE";
OPENMINUTE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
OPENMINUTE.type = MyCompletionType.TimeFunction;
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

const OPENMINUTE1 = new MyCompletion();
OPENMINUTE1.label = "OPENMINUTE1";
OPENMINUTE1.insertText = "";
OPENMINUTE1.body = "OPENMINUTE1";
OPENMINUTE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
OPENMINUTE1.type = MyCompletionType.TimeFunction;
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

const OPENSEC = new MyCompletion();
OPENSEC.label = "OPENSEC";
OPENSEC.insertText = "";
OPENSEC.body = "OPENSEC";
OPENSEC.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
OPENSEC.type = MyCompletionType.TimeFunction;
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

const OPENSEC1 = new MyCompletion();
OPENSEC1.label = "OPENSEC1";
OPENSEC1.insertText = "";
OPENSEC1.body = "OPENSEC1";
OPENSEC1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
OPENSEC1.type = MyCompletionType.TimeFunction;
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

const OPI = new MyCompletion();
OPI.label = "OPI";
OPI.insertText = "";
OPI.body = "OPI";
OPI.marketType = MyCompletionMarketType.BasicFunction;
OPI.type = MyCompletionType.CandlestickDataReference;
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

const PANZHENG = new MyCompletion();
PANZHENG.label = "PANZHENG";
PANZHENG.insertText = "";
PANZHENG.body = "PANZHENG";
PANZHENG.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
PANZHENG.type = MyCompletionType.LogicalJudgmentFunction;
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

const PARTLINE = new MyCompletion();
PARTLINE.label = "PARTLINE";
PARTLINE.insertText = "";
PARTLINE.body = "PARTLINE( , , )";
PARTLINE.marketType = MyCompletionMarketType.BasicFunction;
PARTLINE.type = MyCompletionType.DrawingFunction;
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

const PARTLINE1 = new MyCompletion();
PARTLINE1.label = "PARTLINE1";
PARTLINE1.insertText = "";
PARTLINE1.body = "PARTLINE1( , )";
PARTLINE1.marketType = MyCompletionMarketType.BasicFunction;
PARTLINE1.type = MyCompletionType.DrawingFunction;
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

const PCRATE = new MyCompletion();
PCRATE.label = "PCRATE";
PCRATE.insertText = "";
PCRATE.body = "PCRATE(,)";
PCRATE.marketType = MyCompletionMarketType.BasicFunction;
PCRATE.type = MyCompletionType.MathematicalStatisticsFunction;
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

const PCRATETREND = new MyCompletion();
PCRATETREND.label = "PCRATETREND";
PCRATETREND.insertText = "";
PCRATETREND.body = "PCRATETREND(,)";
PCRATETREND.marketType = MyCompletionMarketType.BasicFunction;
PCRATETREND.type = MyCompletionType.MathematicalStatisticsFunction;
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

const PERCENTILE = new MyCompletion();
PERCENTILE.label = "PERCENTILE";
PERCENTILE.insertText = "";
PERCENTILE.body = "PERCENTILE";
PERCENTILE.marketType = MyCompletionMarketType.BasicFunction;
PERCENTILE.type = MyCompletionType.FinancialStatisticsFunction;
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

const PERIOD = new MyCompletion();
PERIOD.label = "PERIOD";
PERIOD.insertText = "";
PERIOD.body = "PERIOD";
PERIOD.marketType = MyCompletionMarketType.BasicFunction;
PERIOD.type = MyCompletionType.TimeFunction;
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

const PLAYSOUND = new MyCompletion();
PLAYSOUND.label = "PLAYSOUND";
PLAYSOUND.insertText = "";
PLAYSOUND.body = "PLAYSOUND( , )";
PLAYSOUND.marketType = MyCompletionMarketType.BasicFunction;
PLAYSOUND.type = MyCompletionType.DrawingFunction;
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

const POINTDOT = new MyCompletion();
POINTDOT.label = "POINTDOT";
POINTDOT.insertText = "";
POINTDOT.body = "POINTDOT";
POINTDOT.marketType = MyCompletionMarketType.BasicFunction;
POINTDOT.type = MyCompletionType.DrawingFunction;
POINTDOT.detail = "画点线";
POINTDOT.documentation = `

画点线。
用法：
POINTDOT 画点线。
注：
不支持将该函数直接定义为变量，即不支持下面的写法：A:POINTDOT;
例：MA5:MA(C,5),POINTDOT;用点线画5日均线。
`;

const POLYLINE = new MyCompletion();
POLYLINE.label = "POLYLINE";
POLYLINE.insertText = "";
POLYLINE.body = "POLYLINE( , , )";
POLYLINE.marketType = MyCompletionMarketType.BasicFunction;
POLYLINE.type = MyCompletionType.DrawingFunction;
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

const POLYLINE1 = new MyCompletion();
POLYLINE1.label = "POLYLINE1";
POLYLINE1.insertText = "";
POLYLINE1.body = "POLYLINE1( , )";
POLYLINE1.marketType = MyCompletionMarketType.BasicFunction;
POLYLINE1.type = MyCompletionType.DrawingFunction;
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

const POW = new MyCompletion();
POW.label = "POW";
POW.insertText = "";
POW.body = "POW( , )";
POW.marketType = MyCompletionMarketType.BasicFunction;
POW.type = MyCompletionType.MathFunction;
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

const PRECIS = new MyCompletion();
PRECIS.label = "PRECIS";
PRECIS.insertText = "";
PRECIS.body = "PRECIS";
PRECIS.marketType = MyCompletionMarketType.BasicFunction;
PRECIS.type = MyCompletionType.DrawingFunction;
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

const PRECISION = new MyCompletion();
PRECISION.label = "PRECISION";
PRECISION.insertText = "";
PRECISION.body = "PRECISION";
PRECISION.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
PRECISION.type = MyCompletionType.DrawingFunction;
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

const PRICEPRECISION = new MyCompletion();
PRICEPRECISION.label = "PRICEPRECISION";
PRICEPRECISION.insertText = "";
PRICEPRECISION.body = "PRICEPRECISION";
PRICEPRECISION.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
PRICEPRECISION.type = MyCompletionType.DrawingFunction;
PRICEPRECISION.detail = "取当前合约小数点位数";
PRICEPRECISION.documentation = `
PRICEPRECISION，取当前合约小数位数
PRICEPRECISION 取当前合约小数点位数

用法：
返回当前合约设置的小数点位数

例：
C,PRECISION(PRICEPRECISION); //返回收盘价，设置小数点位数为当前合约的小数位数
`;

const PRICEPRECISION1 = new MyCompletion();
PRICEPRECISION1.label = "PRICEPRECISION1";
PRICEPRECISION1.insertText = "";
PRICEPRECISION1.body = "PRICEPRECISION1";
PRICEPRECISION1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
PRICEPRECISION1.type = MyCompletionType.DrawingFunction;
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

const PROFIT = new MyCompletion();
PROFIT.label = "PROFIT";
PROFIT.insertText = "";
PROFIT.body = "PROFIT";
PROFIT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
PROFIT.type = MyCompletionType.PositionManagementFunction;
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

const QUARTER = new MyCompletion();
QUARTER.label = "QUARTER";
QUARTER.insertText = "";
QUARTER.body = "QUARTER";
QUARTER.marketType = MyCompletionMarketType.BasicFunction;
QUARTER.type = MyCompletionType.TimeFunction;
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

const QUARTERTRADE = new MyCompletion();
QUARTERTRADE.label = "QUARTERTRADE";
QUARTERTRADE.insertText = "";
QUARTERTRADE.body = "QUARTERTRADE";
QUARTERTRADE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
QUARTERTRADE.type = MyCompletionType.CalculationControlFunction;
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

const QUARTERTRADE1 = new MyCompletion();
QUARTERTRADE1.label = "QUARTERTRADE1";
QUARTERTRADE1.insertText = "";
QUARTERTRADE1.body = "QUARTERTRADE1";
QUARTERTRADE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
QUARTERTRADE1.type = MyCompletionType.CalculationControlFunction;
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

const RAND = new MyCompletion();
RAND.label = "RAND";
RAND.insertText = "";
RAND.body = "RAND";
RAND.marketType = MyCompletionMarketType.BasicFunction;
RAND.type = MyCompletionType.MathFunction;
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

const RANGE = new MyCompletion();
RANGE.label = "RANGE";
RANGE.insertText = "";
RANGE.body = "RANGE( , , )";
RANGE.marketType = MyCompletionMarketType.BasicFunction;
RANGE.type = MyCompletionType.MathFunction;
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

const RAWDATA = new MyCompletion();
RAWDATA.label = "RAWDATA";
RAWDATA.insertText = "";
RAWDATA.body = "RAWDATA(  )";
RAWDATA.marketType = MyCompletionMarketType.BasicFunction;
RAWDATA.type = MyCompletionType.CandlestickDataReference;
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

const REF = new MyCompletion();
REF.label = "REF";
REF.insertText = "";
REF.body = "REF( , )";
REF.marketType = MyCompletionMarketType.BasicFunction;
REF.type = MyCompletionType.CandlestickDataReference;
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

const REFLINE = new MyCompletion();
REFLINE.label = "REFLINE";
REFLINE.insertText = "";
REFLINE.body = "REFLINE";
REFLINE.marketType = MyCompletionMarketType.BasicFunction;
REFLINE.type = MyCompletionType.DrawingFunction;
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

const REFLINE1 = new MyCompletion();
REFLINE1.label = "REFLINE1";
REFLINE1.insertText = "";
REFLINE1.body = "REFLINE1";
REFLINE1.marketType = MyCompletionMarketType.BasicFunction;
REFLINE1.type = MyCompletionType.DrawingFunction;
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

const REFSIG_PLACE = new MyCompletion();
REFSIG_PLACE.label = "REFSIG_PLACE";
REFSIG_PLACE.insertText = "";
REFSIG_PLACE.body = "REFSIG_PLACE( , )";
REFSIG_PLACE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
REFSIG_PLACE.type = MyCompletionType.SignalLoggingFunction;
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

const REFSIG_PRICE = new MyCompletion();
REFSIG_PRICE.label = "REFSIG_PRICE";
REFSIG_PRICE.insertText = "";
REFSIG_PRICE.body = "REFSIG_PRICE( , )";
REFSIG_PRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
REFSIG_PRICE.type = MyCompletionType.SignalLoggingFunction;
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

const REFSIG_PRICE1 = new MyCompletion();
REFSIG_PRICE1.label = "REFSIG_PRICE1";
REFSIG_PRICE1.insertText = "";
REFSIG_PRICE1.body = "REFSIG_PRICE1( , )";
REFSIG_PRICE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
REFSIG_PRICE1.type = MyCompletionType.SignalLoggingFunction;
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

const REFSIG_PRICE2 = new MyCompletion();
REFSIG_PRICE2.label = "REFSIG_PRICE2";
REFSIG_PRICE2.insertText = "";
REFSIG_PRICE2.body = "REFSIG_PRICE2( , )";
REFSIG_PRICE2.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
REFSIG_PRICE2.type = MyCompletionType.SignalLoggingFunction;
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

const REFSIG_VOL = new MyCompletion();
REFSIG_VOL.label = "REFSIG_VOL";
REFSIG_VOL.insertText = "";
REFSIG_VOL.body = "REFSIG_VOL( , )";
REFSIG_VOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
REFSIG_VOL.type = MyCompletionType.SignalLoggingFunction;
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

const REFWH = new MyCompletion();
REFWH.label = "REFWH";
REFWH.insertText = "";
REFWH.body = "REFWH( , )";
REFWH.marketType = MyCompletionMarketType.BasicFunction;
REFWH.type = MyCompletionType.CandlestickDataReference;
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

const REVERSE = new MyCompletion();
REVERSE.label = "REVERSE";
REVERSE.insertText = "";
REVERSE.body = "REVERSE( )";
REVERSE.marketType = MyCompletionMarketType.BasicFunction;
REVERSE.type = MyCompletionType.MathFunction;
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

const ROUND = new MyCompletion();
ROUND.label = "ROUND";
ROUND.insertText = "";
ROUND.body = "ROUND( , )";
ROUND.marketType = MyCompletionMarketType.BasicFunction;
ROUND.type = MyCompletionType.MathFunction;
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

const SAR = new MyCompletion();
SAR.label = "SAR";
SAR.insertText = "";
SAR.body = "SAR( , , )";
SAR.marketType = MyCompletionMarketType.BasicFunction;
SAR.type = MyCompletionType.FinancialStatisticsFunction;
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

const SAR1 = new MyCompletion();
SAR1.label = "SAR1";
SAR1.insertText = "";
SAR1.body = "SAR1( , , )";
SAR1.marketType = MyCompletionMarketType.BasicFunction;
SAR1.type = MyCompletionType.FinancialStatisticsFunction;
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

const SCALE = new MyCompletion();
SCALE.label = "SCALE";
SCALE.insertText = "";
SCALE.body = "SCALE";
SCALE.marketType = MyCompletionMarketType.BasicFunction;
SCALE.type = MyCompletionType.CandlestickDataReference;
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

const SEEK = new MyCompletion();
SEEK.label = "SEEK";
SEEK.insertText = "";
SEEK.body = "Seek";
SEEK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SEEK.type = MyCompletionType.FinancialStatisticsFunction;
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

const SELECT = new MyCompletion();
SELECT.label = "SELECT";
SELECT.insertText = "";
SELECT.body = "SELECT";
SELECT.marketType = MyCompletionMarketType.StockSelectionFunction;
SELECT.type = MyCompletionType.FormulaBasedSelection;
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

const SETDEALPERCENT = new MyCompletion();
SETDEALPERCENT.label = "SETDEALPERCENT";
SETDEALPERCENT.insertText = "";
SETDEALPERCENT.body = "SETDEALPERCENT";
SETDEALPERCENT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETDEALPERCENT.type = MyCompletionType.PositionManagementFunction;
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

const SETEXPIREDATE = new MyCompletion();
SETEXPIREDATE.label = "SETEXPIREDATE";
SETEXPIREDATE.insertText = "";
SETEXPIREDATE.body = "SETEXPIREDATE()";
SETEXPIREDATE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETEXPIREDATE.type = MyCompletionType.EncryptionOutputFunction;
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

const SETMOVEOPIPRICE = new MyCompletion();
SETMOVEOPIPRICE.label = "SETMOVEOPIPRICE";
SETMOVEOPIPRICE.insertText = "";
SETMOVEOPIPRICE.body = "SETMOVEOPIPRICE()";
SETMOVEOPIPRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETMOVEOPIPRICE.type = MyCompletionType.SignalExecutionFunction;
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

const SETQUOTACCOUNT = new MyCompletion();
SETQUOTACCOUNT.label = "SETQUOTACCOUNT";
SETQUOTACCOUNT.insertText = "";
SETQUOTACCOUNT.body = "SETQUOTACCOUNT()";
SETQUOTACCOUNT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETQUOTACCOUNT.type = MyCompletionType.EncryptionOutputFunction;
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

const SETSIGPRICE = new MyCompletion();
SETSIGPRICE.label = "SETSIGPRICE";
SETSIGPRICE.insertText = "";
SETSIGPRICE.body = "SETSIGPRICE( , )";
SETSIGPRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETSIGPRICE.type = MyCompletionType.SignalExecutionFunction;
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

const SETSIGPRICETYPE = new MyCompletion();
SETSIGPRICETYPE.label = "SETSIGPRICETYPE";
SETSIGPRICETYPE.insertText = "";
SETSIGPRICETYPE.body = "SETSIGPRICETYPE( , , )";
SETSIGPRICETYPE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETSIGPRICETYPE.type = MyCompletionType.SignalExecutionFunction;
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

const SETSTYLECOLOR = new MyCompletion();
SETSTYLECOLOR.label = "SETSTYLECOLOR";
SETSTYLECOLOR.insertText = "";
SETSTYLECOLOR.body = "SETSTYLECOLOR( , )";
SETSTYLECOLOR.marketType = MyCompletionMarketType.BasicFunction;
SETSTYLECOLOR.type = MyCompletionType.DrawingFunction;
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

const SETTLE = new MyCompletion();
SETTLE.label = "SETTLE";
SETTLE.insertText = "";
SETTLE.body = "SETTLE";
SETTLE.marketType = MyCompletionMarketType.BasicFunction;
SETTLE.type = MyCompletionType.CandlestickDataReference;
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

const SETTRADEACCOUNT = new MyCompletion();
SETTRADEACCOUNT.label = "SETTRADEACCOUNT";
SETTRADEACCOUNT.insertText = "";
SETTRADEACCOUNT.body = "SETTRADEACCOUNT()";
SETTRADEACCOUNT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SETTRADEACCOUNT.type = MyCompletionType.EncryptionOutputFunction;
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

const SGN = new MyCompletion();
SGN.label = "SGN";
SGN.insertText = "";
SGN.body = "SGN( )";
SGN.marketType = MyCompletionMarketType.BasicFunction;
SGN.type = MyCompletionType.MathFunction;
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

const SIGNUM = new MyCompletion();
SIGNUM.label = "SIGNUM";
SIGNUM.insertText = "";
SIGNUM.body = "SIGNUM";
SIGNUM.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SIGNUM.type = MyCompletionType.SignalLoggingFunction;
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

const SIGVOL = new MyCompletion();
SIGVOL.label = "SIGVOL";
SIGVOL.insertText = "";
SIGVOL.body = "SIGVOL()";
SIGVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SIGVOL.type = MyCompletionType.SignalLoggingFunction;
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

const SIN = new MyCompletion();
SIN.label = "SIN";
SIN.insertText = "";
SIN.body = "SIN( )";
SIN.marketType = MyCompletionMarketType.BasicFunction;
SIN.type = MyCompletionType.MathFunction;
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

const SKEWNESS = new MyCompletion();
SKEWNESS.label = "SKEWNESS";
SKEWNESS.insertText = "";
SKEWNESS.body = "SKEWNESS( , )";
SKEWNESS.marketType = MyCompletionMarketType.BasicFunction;
SKEWNESS.type = MyCompletionType.MathematicalStatisticsFunction;
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

const SKHIGH = new MyCompletion();
SKHIGH.label = "SKHIGH";
SKHIGH.insertText = "";
SKHIGH.body = "SKHIGH";
SKHIGH.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKHIGH.type = MyCompletionType.SignalLoggingFunction;
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

const SKLOW = new MyCompletion();
SKLOW.label = "SKLOW";
SKLOW.insertText = "";
SKLOW.body = "SKLOW";
SKLOW.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKLOW.type = MyCompletionType.SignalLoggingFunction;
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

const SKPRICE = new MyCompletion();
SKPRICE.label = "SKPRICE";
SKPRICE.insertText = "";
SKPRICE.body = "SKPRICE";
SKPRICE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKPRICE.type = MyCompletionType.SignalLoggingFunction;
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

const SKPRICE1 = new MyCompletion();
SKPRICE1.label = "SKPRICE1";
SKPRICE1.insertText = "";
SKPRICE1.body = "SKPRICE1";
SKPRICE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKPRICE1.type = MyCompletionType.SignalLoggingFunction;
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

const SKPRICEAV = new MyCompletion();
SKPRICEAV.label = "SKPRICEAV";
SKPRICEAV.insertText = "";
SKPRICEAV.body = "SKPRICEAV";
SKPRICEAV.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKPRICEAV.type = MyCompletionType.PositionManagementFunction;
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

const SKPRICEAV1 = new MyCompletion();
SKPRICEAV1.label = "SKPRICEAV1";
SKPRICEAV1.insertText = "";
SKPRICEAV1.body = "SKPRICEAV1";
SKPRICEAV1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKPRICEAV1.type = MyCompletionType.PositionManagementFunction;
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

const SKVOL = new MyCompletion();
SKVOL.label = "SKVOL";
SKVOL.insertText = "";
SKVOL.body = "SKVOL";
SKVOL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKVOL.type = MyCompletionType.PositionManagementFunction;
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

const SKVOL2 = new MyCompletion();
SKVOL2.label = "SKVOL2";
SKVOL2.insertText = "";
SKVOL2.body = "SKVOL2";
SKVOL2.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
SKVOL2.type = MyCompletionType.PositionManagementFunction;
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

const SLOPE = new MyCompletion();
SLOPE.label = "SLOPE";
SLOPE.insertText = "";
SLOPE.body = "SLOPE( , )";
SLOPE.marketType = MyCompletionMarketType.BasicFunction;
SLOPE.type = MyCompletionType.MathematicalStatisticsFunction;
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

const SMA = new MyCompletion();
SMA.label = "SMA";
SMA.insertText = "";
SMA.body = "SMA( , , )";
SMA.marketType = MyCompletionMarketType.BasicFunction;
SMA.type = MyCompletionType.FinancialStatisticsFunction;
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

const SMMA = new MyCompletion();
SMMA.label = "SMMA";
SMMA.insertText = "";
SMMA.body = "SMMA(,)";
SMMA.marketType = MyCompletionMarketType.BasicFunction;
SMMA.type = MyCompletionType.FinancialStatisticsFunction;
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

const SOLID = new MyCompletion();
SOLID.label = "SOLID";
SOLID.insertText = "";
SOLID.body = "SOLID";
SOLID.marketType = MyCompletionMarketType.BasicFunction;
SOLID.type = MyCompletionType.DrawingFunction;
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

const SORT = new MyCompletion();
SORT.label = "SORT";
SORT.insertText = "";
SORT.body = "SORT";
SORT.marketType = MyCompletionMarketType.BasicFunction;
SORT.type = MyCompletionType.FinancialStatisticsFunction;
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

const SORTPOS = new MyCompletion();
SORTPOS.label = "SORTPOS";
SORTPOS.insertText = "";
SORTPOS.body = "SORTPOS";
SORTPOS.marketType = MyCompletionMarketType.BasicFunction;
SORTPOS.type = MyCompletionType.FinancialStatisticsFunction;
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

const SOUND = new MyCompletion();
SOUND.label = "SOUND";
SOUND.insertText = "";
SOUND.body = "SOUND( )";
SOUND.marketType = MyCompletionMarketType.BasicFunction;
SOUND.type = MyCompletionType.DrawingFunction;
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

const SPLIT = new MyCompletion();
SPLIT.label = "SPLIT";
SPLIT.insertText = "";
SPLIT.body = "SPLIT()";
SPLIT.marketType = MyCompletionMarketType.BasicFunction;
SPLIT.type = MyCompletionType.StockDataFunction;
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

const SPLITBARS = new MyCompletion();
SPLITBARS.label = "SPLITBARS";
SPLITBARS.insertText = "";
SPLITBARS.body = "SPLITBARS()";
SPLITBARS.marketType = MyCompletionMarketType.BasicFunction;
SPLITBARS.type = MyCompletionType.StockDataFunction;
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

const SQRT = new MyCompletion();
SQRT.label = "SQRT";
SQRT.insertText = "";
SQRT.body = "SQRT( )";
SQRT.marketType = MyCompletionMarketType.BasicFunction;
SQRT.type = MyCompletionType.MathFunction;
SQRT.detail = "平方根";
SQRT.documentation = `
SQRT(X)，求X的平方根
SQRT(X)：求X的平方根。

注：
X的取值为正数，X为负数时返回空值。

例1：
SQRT(CLOSE);//收盘价的平方根。
`;

const SQUARE = new MyCompletion();
SQUARE.label = "SQUARE";
SQUARE.insertText = "";
SQUARE.body = "SQUARE( )";
SQUARE.marketType = MyCompletionMarketType.BasicFunction;
SQUARE.type = MyCompletionType.MathFunction;
SQUARE.detail = "平方";
SQUARE.documentation = `
SQUARE(X)，求X的平方
SQUARE(X)求X的平方。

例1：
SQUARE(C);//收盘价的平方。
例2：
SQUARE(2);//2的平方。
`;

const STD = new MyCompletion();
STD.label = "STD";
STD.insertText = "";
STD.body = "STD( , )";
STD.marketType = MyCompletionMarketType.BasicFunction;
STD.type = MyCompletionType.MathematicalStatisticsFunction;
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

const STDP = new MyCompletion();
STDP.label = "STDP";
STDP.insertText = "";
STDP.body = "STDP( , )";
STDP.marketType = MyCompletionMarketType.BasicFunction;
STDP.type = MyCompletionType.MathematicalStatisticsFunction;
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

const STICK = new MyCompletion();
STICK.label = "STICK";
STICK.insertText = "";
STICK.body = "STICK(,,,,,)";
STICK.marketType = MyCompletionMarketType.BasicFunction;
STICK.type = MyCompletionType.DrawingFunction;
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

const STICKLINE = new MyCompletion();
STICKLINE.label = "STICKLINE";
STICKLINE.insertText = "";
STICKLINE.body = "STICKLINE( , , , , )";
STICKLINE.marketType = MyCompletionMarketType.BasicFunction;
STICKLINE.type = MyCompletionType.DrawingFunction;
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

const STICKLINE1 = new MyCompletion();
STICKLINE1.label = "STICKLINE1";
STICKLINE1.insertText = "";
STICKLINE1.body = "STICKLINE1( , , , , )";
STICKLINE1.marketType = MyCompletionMarketType.BasicFunction;
STICKLINE1.type = MyCompletionType.DrawingFunction;
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

const STKTYPE = new MyCompletion();
STKTYPE.label = "STKTYPE";
STKTYPE.insertText = "";
STKTYPE.body = "STKTYPE";
STKTYPE.marketType = MyCompletionMarketType.BasicFunction;
STKTYPE.type = MyCompletionType.LogicalJudgmentFunction;
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

const STOCKDIVD = new MyCompletion();
STOCKDIVD.label = "STOCKDIVD";
STOCKDIVD.insertText = "";
STOCKDIVD.body = "STOCKDIVD";
STOCKDIVD.marketType = MyCompletionMarketType.BasicFunction;
STOCKDIVD.type = MyCompletionType.StockDataFunction;
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

const SUM = new MyCompletion();
SUM.label = "SUM";
SUM.insertText = "";
SUM.body = "SUM( , )";
SUM.marketType = MyCompletionMarketType.BasicFunction;
SUM.type = MyCompletionType.FinancialStatisticsFunction;
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

const SUMBARS = new MyCompletion();
SUMBARS.label = "SUMBARS";
SUMBARS.insertText = "";
SUMBARS.body = "SUMBARS( , )";
SUMBARS.marketType = MyCompletionMarketType.BasicFunction;
SUMBARS.type = MyCompletionType.FinancialStatisticsFunction;
SUMBARS.detail = "累加到指定值的周期数";
SUMBARS.documentation = `
SUMBARS(X,A):求多少个周期的X向前累加能够大于等于A
SUMBARS(X,A)：求累加到指定值的周期数

注：
参数A支持变量

例1：
SUMBARS(VOL,20000); 将成交量向前累加直到大于等于20000，返回这个区间的周期数。
`;

const T_CLOSE = new MyCompletion();
T_CLOSE.label = "T_CLOSE";
T_CLOSE.insertText = "";
T_CLOSE.body = "T_CLOSE";
T_CLOSE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
T_CLOSE.type = MyCompletionType.CandlestickDataReference;
T_CLOSE.detail = "取交易合约收盘价";
T_CLOSE.documentation = `
T_CLOSE 取交易合约收盘价。
T_CLOSE 取交易合约收盘价。

注：
1、当盘中k线没有走完的时候，取交易合约最新价。

例1：
A:T_CLOSE;//定义变量A为交易合约收盘价（盘中k线没有走完的时候A为交易合约最新价）。
`;

const T_MAX = new MyCompletion();
T_MAX.label = "T_MAX";
T_MAX.insertText = "";
T_MAX.body = "T_MAX";
T_MAX.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
T_MAX.type = MyCompletionType.PositionManagementFunction;
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

const T_PLUS = new MyCompletion();
T_PLUS.label = "T_PLUS";
T_PLUS.insertText = "";
T_PLUS.body = "T_PLUS()";
T_PLUS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
T_PLUS.type = MyCompletionType.SignalExecutionFunction;
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

const T0TOTIME = new MyCompletion();
T0TOTIME.label = "T0TOTIME";
T0TOTIME.insertText = "";
T0TOTIME.body = "T0TOTIME()";
T0TOTIME.marketType = MyCompletionMarketType.BasicFunction;
T0TOTIME.type = MyCompletionType.TimeFunction;
T0TOTIME.detail = "秒数转换为时间";
T0TOTIME.documentation = `
T0TOTIME(X)返回自该日0点以来的X秒处的时间。X可为变量或常数
T0TOTIME(X) 秒数转换为时间。

用法：T0TOTIME(X);返回自该日0点以来的X秒处的时间。X可为变量或常数。

注：该函数返回值为HHMMSS（时，分，秒）的形式。

例：
A:=T0TOTIME(60);//变量A返回值为100，表示1分钟
`;

const TAN = new MyCompletion();
TAN.label = "TAN";
TAN.insertText = "";
TAN.body = "TAN( )";
TAN.marketType = MyCompletionMarketType.BasicFunction;
TAN.type = MyCompletionType.MathFunction;
TAN.detail = "正切";
TAN.documentation = `
TAN(X)，求X的正切值
TAN(X)：返回X的正切值。
例1：
TAN(0);//返回0的正切值；
例2：
TAN(-3.14);//返回-3.14的正切值。
`;

const TAVLOSS = new MyCompletion();
TAVLOSS.label = "TAVLOSS";
TAVLOSS.insertText = "";
TAVLOSS.body = "TAVLOSS";
TAVLOSS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TAVLOSS.type = MyCompletionType.PositionManagementFunction;
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

const TAVWIN = new MyCompletion();
TAVWIN.label = "TAVWIN";
TAVWIN.insertText = "";
TAVWIN.body = "TAVWIN";
TAVWIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TAVWIN.type = MyCompletionType.PositionManagementFunction;
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

const TAVWINLOSS = new MyCompletion();
TAVWINLOSS.label = "TAVWINLOSS";
TAVWINLOSS.insertText = "";
TAVWINLOSS.body = "TAVWINLOSS";
TAVWINLOSS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TAVWINLOSS.type = MyCompletionType.PositionManagementFunction;
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

const TIME = new MyCompletion();
TIME.label = "TIME";
TIME.insertText = "";
TIME.body = "TIME";
TIME.marketType = MyCompletionMarketType.BasicFunction;
TIME.type = MyCompletionType.TimeFunction;
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

const TIME0 = new MyCompletion();
TIME0.label = "TIME0";
TIME0.insertText = "";
TIME0.body = "TIME0";
TIME0.marketType = MyCompletionMarketType.BasicFunction;
TIME0.type = MyCompletionType.TimeFunction;
TIME0.detail = "求当前周期自该日0点以来的秒数";
TIME0.documentation = `

TIME0 求当前周期自该日0点以来的秒数。

用法：TIME0;求当前周期自该日0点以来的秒数。

注：该函数返回值为0-86400

例：
AA:TIME0;//AA在商品合约当天最后一根K线上的返回值为54000，表示0点到15点之间的秒数为54000秒
`;

const TIMETOT0 = new MyCompletion();
TIMETOT0.label = "TIMETOT0";
TIMETOT0.insertText = "";
TIMETOT0.body = "TIMETOT0()";
TIMETOT0.marketType = MyCompletionMarketType.BasicFunction;
TIMETOT0.type = MyCompletionType.TimeFunction;
TIMETOT0.detail = "时间转换为秒数";
TIMETOT0.documentation = `
TIMETOT0(X)返回时间X自该日0点以来的秒数。X可为变量或常数
TIMETOT0(X) 时间转换为秒数。

用法：TIMETOT0(X);返回时间X自该日0点以来的秒数。X可为变量或常数。

注：该函数返回值为时间X距离0点的秒数，X为HHMMSS的形式。

例：
A:=TIMETOT0(100);//变量A返回值为60，表示60秒
`;

const TMAXLOSS = new MyCompletion();
TMAXLOSS.label = "TMAXLOSS";
TMAXLOSS.insertText = "";
TMAXLOSS.body = "TMAXLOSS";
TMAXLOSS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TMAXLOSS.type = MyCompletionType.PositionManagementFunction;
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

const TMAXSEQLOSS = new MyCompletion();
TMAXSEQLOSS.label = "TMAXSEQLOSS";
TMAXSEQLOSS.insertText = "";
TMAXSEQLOSS.body = "TMAXSEQLOSS";
TMAXSEQLOSS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TMAXSEQLOSS.type = MyCompletionType.PositionManagementFunction;
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

const TMAXSEQWIN = new MyCompletion();
TMAXSEQWIN.label = "TMAXSEQWIN";
TMAXSEQWIN.insertText = "";
TMAXSEQWIN.body = "TMAXSEQWIN";
TMAXSEQWIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TMAXSEQWIN.type = MyCompletionType.PositionManagementFunction;
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

const TMAXWIN = new MyCompletion();
TMAXWIN.label = "TMAXWIN";
TMAXWIN.insertText = "";
TMAXWIN.body = "TMAXWIN";
TMAXWIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TMAXWIN.type = MyCompletionType.PositionManagementFunction;
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

const TNUMSEQLOSS = new MyCompletion();
TNUMSEQLOSS.label = "TNUMSEQLOSS";
TNUMSEQLOSS.insertText = "";
TNUMSEQLOSS.body = "TNUMSEQLOSS";
TNUMSEQLOSS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TNUMSEQLOSS.type = MyCompletionType.PositionManagementFunction;
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

const TNUMSEQWIN = new MyCompletion();
TNUMSEQWIN.label = "TNUMSEQWIN";
TNUMSEQWIN.insertText = "";
TNUMSEQWIN.body = "TNUMSEQWIN";
TNUMSEQWIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TNUMSEQWIN.type = MyCompletionType.PositionManagementFunction;
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

const TODAYDEUCETIMES = new MyCompletion();
TODAYDEUCETIMES.label = "TODAYDEUCETIMES";
TODAYDEUCETIMES.insertText = "";
TODAYDEUCETIMES.body = "TODAYDEUCETIMES";
TODAYDEUCETIMES.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TODAYDEUCETIMES.type = MyCompletionType.PositionManagementFunction;
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

const TODAYLOSSTIMES = new MyCompletion();
TODAYLOSSTIMES.label = "TODAYLOSSTIMES";
TODAYLOSSTIMES.insertText = "";
TODAYLOSSTIMES.body = "TODAYLOSSTIMES";
TODAYLOSSTIMES.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TODAYLOSSTIMES.type = MyCompletionType.PositionManagementFunction;
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

const TODAYWINTIMES = new MyCompletion();
TODAYWINTIMES.label = "TODAYWINTIMES";
TODAYWINTIMES.insertText = "";
TODAYWINTIMES.body = "TODAYWINTIMES";
TODAYWINTIMES.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TODAYWINTIMES.type = MyCompletionType.PositionManagementFunction;
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

const TPROFIT_REF = new MyCompletion();
TPROFIT_REF.label = "TPROFIT_REF";
TPROFIT_REF.insertText = "";
TPROFIT_REF.body = "TPROFIT_REF( )";
TPROFIT_REF.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TPROFIT_REF.type = MyCompletionType.PositionManagementFunction;
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

const TRACING_ORDER = new MyCompletion();
TRACING_ORDER.label = "TRACING_ORDER";
TRACING_ORDER.insertText = "";
TRACING_ORDER.body = "TRACING_ORDER( , , )";
TRACING_ORDER.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TRACING_ORDER.type = MyCompletionType.SignalExecutionFunction;
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

const TRADE_AGAIN = new MyCompletion();
TRADE_AGAIN.label = "TRADE_AGAIN";
TRADE_AGAIN.insertText = "";
TRADE_AGAIN.body = "TRADE_AGAIN()";
TRADE_AGAIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TRADE_AGAIN.type = MyCompletionType.CalculationControlFunction;
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

const TRADE_OTHER = new MyCompletion();
TRADE_OTHER.label = "TRADE_OTHER";
TRADE_OTHER.insertText = "";
TRADE_OTHER.body = "TRADE_OTHER()";
TRADE_OTHER.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TRADE_OTHER.type = MyCompletionType.SignalExecutionFunction;
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

const TRADE_REF = new MyCompletion();
TRADE_REF.label = "TRADE_REF";
TRADE_REF.insertText = "";
TRADE_REF.body = "TRADE_REF( )";
TRADE_REF.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TRADE_REF.type = MyCompletionType.PositionManagementFunction;
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

const TRADE_SMOOTHING = new MyCompletion();
TRADE_SMOOTHING.label = "TRADE_SMOOTHING";
TRADE_SMOOTHING.insertText = "";
TRADE_SMOOTHING.body = "TRADE_SMOOTHING";
TRADE_SMOOTHING.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TRADE_SMOOTHING.type = MyCompletionType.CandlestickDataReference;
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

const TREND = new MyCompletion();
TREND.label = "TREND";
TREND.insertText = "";
TREND.body = "TREND";
TREND.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TREND.type = MyCompletionType.LogicalJudgmentFunction;
TREND.detail = "获取K线趋势";
TREND.documentation = `
TREND,获取K线趋势默认返回0，最高最低同时出现为1，最低先出现为2，最高先出现为3
TREND 获取K线趋势。

用法：
TREND  K线的形成过程中最高价先出现，则返回值为3；最低价先出现，则返回值为2；若最高和最低一起出现，则返回值为1；默认为0。
`;

const TRMA = new MyCompletion();
TRMA.label = "TRMA";
TRMA.insertText = "";
TRMA.body = "TRMA( , )";
TRMA.marketType = MyCompletionMarketType.BasicFunction;
TRMA.type = MyCompletionType.FinancialStatisticsFunction;
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

const TSEQLOSS = new MyCompletion();
TSEQLOSS.label = "TSEQLOSS";
TSEQLOSS.insertText = "";
TSEQLOSS.body = "TSEQLOSS";
TSEQLOSS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TSEQLOSS.type = MyCompletionType.PositionManagementFunction;
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

const TSEQWIN = new MyCompletion();
TSEQWIN.label = "TSEQWIN";
TSEQWIN.insertText = "";
TSEQWIN.body = "TSEQWIN";
TSEQWIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
TSEQWIN.type = MyCompletionType.PositionManagementFunction;
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

const TSMA = new MyCompletion();
TSMA.label = "TSMA";
TSMA.insertText = "";
TSMA.body = "TSMA( , )";
TSMA.marketType = MyCompletionMarketType.BasicFunction;
TSMA.type = MyCompletionType.FinancialStatisticsFunction;
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

const UNIT = new MyCompletion();
UNIT.label = "UNIT";
UNIT.insertText = "";
UNIT.body = "UNIT";
UNIT.marketType = MyCompletionMarketType.BasicFunction;
UNIT.type = MyCompletionType.CandlestickDataReference;
UNIT.detail = "取数据合约的交易单位";
UNIT.documentation = `
UNIT,取加载数据合约的交易单位
取数据合约的交易单位。
用法：
UNIT 取加载数据合约的交易单位。
`;

const UNIT1 = new MyCompletion();
UNIT1.label = "UNIT1";
UNIT1.insertText = "";
UNIT1.body = "UNIT1";
UNIT1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
UNIT1.type = MyCompletionType.CandlestickDataReference;
UNIT1.detail = "取交易合约的交易单位";
UNIT1.documentation = `
UNIT1,取交易合约的交易单位
UNIT1  取交易合约的交易单位。
用法：
UNIT1 取交易合约的交易单位。
`;

const UNITLIMIT = new MyCompletion();
UNITLIMIT.label = "UNITLIMIT";
UNITLIMIT.insertText = "";
UNITLIMIT.body = "UNITLIMIT";
UNITLIMIT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
UNITLIMIT.type = MyCompletionType.CandlestickDataReference;
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

const VALIGN = new MyCompletion();
VALIGN.label = "VALIGN";
VALIGN.insertText = "";
VALIGN.body = "VALIGN";
VALIGN.marketType = MyCompletionMarketType.BasicFunction;
VALIGN.type = MyCompletionType.DrawingFunction;
VALIGN.detail = "设置文字对齐方式（上中下）";
VALIGN.documentation = `
VALIGN0,VALIGN1,VALIGN2,分别表示文字上对齐，居中对齐，下对齐
设置文字对齐方式（上中下）。

用法：DRAWTEXT(COND,PRICE,TEXT),VALIGNX;

COND条件满足时，在PRICE的位置，标注TEXT，文字按照VALIGNX写入的方式对齐。VALIGN0，VALIGN1，VALIGN2，分别表示上对齐，居中对齐，下对齐。

例：
DRAWTEXT(C>O,H,'涨'),ALIGN1,VALIGN1,FONTSIZE20,COLORGREEN;//在阳线的最高价标注文字“涨”，文字居中对齐，字体大小为20，颜色为绿色。
`;

const VALUEWHEN = new MyCompletion();
VALUEWHEN.label = "VALUEWHEN";
VALUEWHEN.insertText = "";
VALUEWHEN.body = "VALUEWHEN( , )";
VALUEWHEN.marketType = MyCompletionMarketType.BasicFunction;
VALUEWHEN.type = MyCompletionType.LogicalJudgmentFunction;
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

const VAR = new MyCompletion();
VAR.label = "VAR";
VAR.insertText = "";
VAR.body = "VAR( , )";
VAR.marketType = MyCompletionMarketType.BasicFunction;
VAR.type = MyCompletionType.MathematicalStatisticsFunction;
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

const VARP = new MyCompletion();
VARP.label = "VARP";
VARP.insertText = "";
VARP.body = "VARP( , )";
VARP.marketType = MyCompletionMarketType.BasicFunction;
VARP.type = MyCompletionType.MathematicalStatisticsFunction;
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

const VERTLINE = new MyCompletion();
VERTLINE.label = "VERTLINE";
VERTLINE.insertText = "";
VERTLINE.body = "VERTLINE( , )";
VERTLINE.marketType = MyCompletionMarketType.BasicFunction;
VERTLINE.type = MyCompletionType.DrawingFunction;
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

const VERTLINE1 = new MyCompletion();
VERTLINE1.label = "VERTLINE1";
VERTLINE1.insertText = "";
VERTLINE1.body = "VERTLINE1( )";
VERTLINE1.marketType = MyCompletionMarketType.BasicFunction;
VERTLINE1.type = MyCompletionType.DrawingFunction;
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

const VOL = new MyCompletion();
VOL.label = "VOL";
VOL.insertText = "";
VOL.body = "VOL";
VOL.marketType = MyCompletionMarketType.BasicFunction;
VOL.type = MyCompletionType.CandlestickDataReference;
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

const VOLATILITY = new MyCompletion();
VOLATILITY.label = "VOLATILITY";
VOLATILITY.insertText = "";
VOLATILITY.body = "VOLATILITY()";
VOLATILITY.marketType = MyCompletionMarketType.BasicFunction;
VOLATILITY.type = MyCompletionType.CandlestickDataReference;
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

const VOLMARGIN = new MyCompletion();
VOLMARGIN.label = "VOLMARGIN";
VOLMARGIN.insertText = "";
VOLMARGIN.body = "VOLMARGIN";
VOLMARGIN.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
VOLMARGIN.type = MyCompletionType.PositionManagementFunction;
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

const VOLSTICK = new MyCompletion();
VOLSTICK.label = "VOLSTICK";
VOLSTICK.insertText = "";
VOLSTICK.body = "VOLSTICK";
VOLSTICK.marketType = MyCompletionMarketType.BasicFunction;
VOLSTICK.type = MyCompletionType.DrawingFunction;
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

const VOLTICK = new MyCompletion();
VOLTICK.label = "VOLTICK";
VOLTICK.insertText = "";
VOLTICK.body = "VOLTICK";
VOLTICK.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
VOLTICK.type = MyCompletionType.TimeFunction;
VOLTICK.detail = "返回K线是由多少笔TICK生成";
VOLTICK.documentation = `
VOLTICK返回K线是由多少笔TICK生成
量能周期返回这根K线形成的TICK笔数，单位：笔。
用法：
VOLTICK 量能周期时，返回当前K线形成的TICK笔数。
`;

const VOLTIME = new MyCompletion();
VOLTIME.label = "VOLTIME";
VOLTIME.insertText = "";
VOLTIME.body = "VOLTIME";
VOLTIME.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
VOLTIME.type = MyCompletionType.TimeFunction;
VOLTIME.detail = "取K线形成的时间（秒）";
VOLTIME.documentation = `
VOLTIME取K线形成的时间（秒）
量能周期返回这根K线形成的时间，单位：秒。
用法：
VOLTIME 量能周期时，返回当前K线形成的时间。
`;

const VOLUMESTICK = new MyCompletion();
VOLUMESTICK.label = "VOLUMESTICK";
VOLUMESTICK.insertText = "";
VOLUMESTICK.body = "VOLUMESTICK";
VOLUMESTICK.marketType = MyCompletionMarketType.BasicFunction;
VOLUMESTICK.type = MyCompletionType.DrawingFunction;
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

const WEEKDAY = new MyCompletion();
WEEKDAY.label = "WEEKDAY";
WEEKDAY.insertText = "";
WEEKDAY.body = "WEEKDAY";
WEEKDAY.marketType = MyCompletionMarketType.BasicFunction;
WEEKDAY.type = MyCompletionType.TimeFunction;
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

const WEEKTRADE = new MyCompletion();
WEEKTRADE.label = "WEEKTRADE";
WEEKTRADE.insertText = "";
WEEKTRADE.body = "WEEKTRADE";
WEEKTRADE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
WEEKTRADE.type = MyCompletionType.CalculationControlFunction;
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

const WEEKTRADE1 = new MyCompletion();
WEEKTRADE1.label = "WEEKTRADE1";
WEEKTRADE1.insertText = "";
WEEKTRADE1.body = "WEEKTRADE1";
WEEKTRADE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
WEEKTRADE1.type = MyCompletionType.CalculationControlFunction;
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

const WINNER = new MyCompletion();
WINNER.label = "WINNER";
WINNER.insertText = "";
WINNER.body = "WINNER( )";
WINNER.marketType = MyCompletionMarketType.BasicFunction;
WINNER.type = MyCompletionType.FinancialStatisticsFunction;
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

const WORD = new MyCompletion();
WORD.label = "WORD";
WORD.insertText = "";
WORD.body = "WORD( , )";
WORD.marketType = MyCompletionMarketType.BasicFunction;
WORD.type = MyCompletionType.DrawingFunction;
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

const YCLOSE = new MyCompletion();
YCLOSE.label = "YCLOSE";
YCLOSE.insertText = "";
YCLOSE.body = "YCLOSE";
YCLOSE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
YCLOSE.type = MyCompletionType.CandlestickDataReference;
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

const YEAR = new MyCompletion();
YEAR.label = "YEAR";
YEAR.insertText = "";
YEAR.body = "YEAR";
YEAR.marketType = MyCompletionMarketType.BasicFunction;
YEAR.type = MyCompletionType.TimeFunction;
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

const YEARTRADE = new MyCompletion();
YEARTRADE.label = "YEARTRADE";
YEARTRADE.insertText = "";
YEARTRADE.body = "YEARTRADE";
YEARTRADE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
YEARTRADE.type = MyCompletionType.CalculationControlFunction;
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

const YEARTRADE1 = new MyCompletion();
YEARTRADE1.label = "YEARTRADE1";
YEARTRADE1.insertText = "";
YEARTRADE1.body = "YEARTRADE1";
YEARTRADE1.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
YEARTRADE1.type = MyCompletionType.CalculationControlFunction;
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

const YSETTLE = new MyCompletion();
YSETTLE.label = "YSETTLE";
YSETTLE.insertText = "";
YSETTLE.body = "YSETTLE";
YSETTLE.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
YSETTLE.type = MyCompletionType.CandlestickDataReference;
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

const _CALL = new MyCompletion();
_CALL.label = "#CALL";
_CALL.insertText = "";
_CALL.body = "#CALL [ , ] AS";
_CALL.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
_CALL.type = MyCompletionType.CandlestickDataReference;
_CALL.detail = "跨合约引用指标";
_CALL.documentation = `
#CALL[CODE,FORMULA]ASVAR引用CODE合约的指标FORMULA的数据
#CALL [CODE, FORMULA] AS VAR 引用CODE合约的指标FORMULA的数据。

注：
1、参数CODE支持传入下列指定代码以获取数据：
CODE写为文华码或交易代码，即引用指定文华码或交易代码合约的数据
CODE写为VIXINDEX，即引用当前合约对应VIX指数的数据
CODE写为MAININDEX，即引用当前合约对应主连合约的数据
CODE写为WEIGHTINDEX或者#CALL[,指标名]AS VAR 表示自动获取加载合约对应的加权合约。
2、FORMULA为引用指标名，VAR为定义变量名（此变量名不能以数字开头）。
2、默认只能引用同一周期的数据。
3、支持加载到自定义周期中使用。
4、
该函数支持1分钟数据逐笔回测，即该函数可以和MULTSIG_MIN、CHECKSIG_MIN函数连用；
该函数不支持TICK数据逐笔回测，即该函数不可以和MULTSIG、CHECKSIG函数连用。
5、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个；

例1：
CC:REF(C,1);//定义一个周期前的收盘价
保存指标，命名为AA
#CALL[1201,AA] AS VAR
CC:VAR.CC;//跨合约引用豆粕1501昨天的收盘价

例2：
CC:REF(C,1);//定义一个周期前的收盘价
保存指标，命名为BB
#CALL[VIXINDEX,BB] AS VAR
CC:VAR.CC;//跨合约引用当前合约对应品种VIX指数一个周期前的收盘价
`;

const _CALL_OTHER = new MyCompletion();
_CALL_OTHER.label = "#CALL_OTHER";
_CALL_OTHER.insertText = "";
_CALL_OTHER.body = "#CALL_OTHER [ ] AS";
_CALL_OTHER.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
_CALL_OTHER.type = MyCompletionType.CandlestickDataReference;
_CALL_OTHER.detail = "跨指标引用";
_CALL_OTHER.documentation = `
#CALL_OTHER[FORMULA]ASVAR跨指标引用
#CALL_OTHER [FORMULA] AS VAR 引用当前合约，当前周期的，指标FORMULA的数据

注：
1、FORMULA为引用指标名，VAR为定义变量名（变量名不能以数字开头）。
2、默认只能引用同一周期的数据。
3、支持加载到自定义周期中使用。
4、默认引用当前合约
5、
该函数支持1分钟数据逐笔回测，即该函数可以和MULTSIG_MIN、CHECKSIG_MIN函数连用；
该函数不支持TICK数据逐笔回测，即该函数不可以和MULTSIG、CHECKSIG函数连用。
6、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个；

例1：
CC:REF(C,1);//定义一个周期前的收盘价
保存指标，命名为AA
#CALL_OTHER[AA] AS VAR
CC:VAR.CC;//跨指标引用当前合约的一个周期前的收盘价
`;

const _CALL_PLUS = new MyCompletion();
_CALL_PLUS.label = "#CALL_PLUS";
_CALL_PLUS.insertText = "";
_CALL_PLUS.body = "#CALL_PLUS [ , , , ] AS";
_CALL_PLUS.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
_CALL_PLUS.type = MyCompletionType.CandlestickDataReference;
_CALL_PLUS.detail = "跨合约跨周期引用指标";
_CALL_PLUS.documentation = `
#CALL_PLUS[CODE,PERIOD,N,FORMULA]ASVAR引用CODE合约PERIOD参数为N的周期下的指标FORMULA的数据
#CALL_PLUS[CODE,PERIOD,N,FORMULA] AS VAR 引用CODE合约，PERIOD参数为N的周期，指标FORMULA的数据。

注：
1、参数CODE支持传入下列指定代码以获取数据：
CODE写为VIXINDEX，即引用当前合约对应VIX指数的数据
CODE写为MAININDEX，即引用当前合约对应主连合约的数据
CODE写为WEIGHTINDEX或者CODE位置为空，表示自动获取加载合约对应的加权合约数据。例如：#CALL_PLUS[,DAY,1,AA] AS VAR//自动获取加载合约对应的加权合约一天的AA指标的数值；
2、PERIOD为周期，支持如下周期：MIN（分钟周期），HOUR（小时周期），CUSHOUR（自定义小时周期），DAY（日周期），WEEK（一周），MONTH（月周期），QUARTER（一季度），YEAR（年周期）。
3、N为具体的参数，N必须为大于等于1的整数，周、季周期，N写入大于1的数，按照1计算。例如：#CALL_PLUS[8600,WEEK,2,FORMULA] AS VAR//默认引用的是一周的指标；
4、FORMULA为引用指标名，FORMULA引用指标名可以为字母、汉字或数字命名的指标。
5、VAR为定义变量名（此变量名不能以数字开头）。
6、该函数支持与1分钟数据为基础数据的信号控制函数连用。
7、支持引用自定义周期；
如#CALL_PLUS[8600,MIN,2,MACD] AS VAR//引用文华码8600的合约两分钟周期MACD指标数值
8、引用常规小时周期使用HOUR，引用自定义小时周期需要使用CUSHOUR。
9、不支持加载到秒周期、量能周期。
10、该函数可以小周期引用大周期，也可以大周期引用小周期。
11、被引用的指标中不能存在引用。
12、定义变量名不能与函数名重复。
13、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个。
14、使用该函数编写末尾不能编写分号。

例1：
CC:REF(C,1);//定义一个周期前的收盘价
保存指标，命名为AA
#CALL_PLUS[8600,DAY,1,AA] AS VAR
CC:VAR.CC;//跨周期引用IF加权昨天的收盘价

例2：
CC:REF(C,1);//定义一个周期前的收盘价
保存指标，命名为BB
#CALL_PLUS[VIXINDEX,DAY,1,BB] AS VAR
CC:VAR.CC;//跨周期引用当前合约对应品种VIX指数昨天的收盘价
`;

const _IMPORT = new MyCompletion();
_IMPORT.label = "#IMPORT";
_IMPORT.insertText = "";
_IMPORT.body = "#IMPORT [ , , ] AS";
_IMPORT.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
_IMPORT.type = MyCompletionType.CandlestickDataReference;
_IMPORT.detail = "跨周期引用指标";
_IMPORT.documentation = `
#IMPORT[PERIOD,N,FORMULA]ASVAR引用PERIOD参数为N的周期下的指标FORMULA的数据
#IMPORT [PERIOD,N,FORMULA] AS VAR 引用当前合约，PERIOD参数为N的周期，指标FORMULA的数据。

注：
1、PERIOD为周期，N为具体的参数，FORMULA为引用指标名，VAR为定义变量名（此变量名不能以数字开头）；
2、PERIOD支持如下周期：MIN（分钟周期），HOUR（小时周期），CUSHOUR（自定义小时周期），DAY（日周期），WEEK（一周），MONTH（月周期），QUARTER（一季度），YEAR（年周期）；
3、支持引用自定义周期；
如#IMPORT [MIN,2,MACD] AS VAR//引用两分钟周期MACD指标数值
4、N必须为大于等于1的整数，周、季周期，N写入大于1的数，按照1计算；
例如：#IMPORT [WEEK,2,FORMULA] AS VAR//默认引用的是一周的指标；
5、引用常规小时周期使用HOUR，引用自定义小时周期需要使用CUSHOUR。
6、该函数不支持加载到量能周期使用；
7、该函数可以小周期引用大周期，也可以大周期引用小周期；
8、被引用的指标中不能存在引用；
9、FORMULA引用指标名可以为字母、汉字或数字命名的指标；
10、定义变量名不能与函数名重复；
11、一个模型中#IMPORT、#CALL、#CALL_PLUS、#CALL_OTHER总的语句个数不能超过6个；
12、使用该函数编写末尾不能编写分号。

例1：
CC:REF(C,1);//定义一个周期前的收盘价
保存指标，命名为AA
#IMPORT[DAY,1,AA] AS VAR
CC:VAR.CC;//跨周期引用昨天的收盘价

例2：
CC:C;//定义收盘价
保存指标，命名为CC
#IMPORT[DAY,1,CC] AS VAR
CC:=VAR.CC;//跨周期引用日周期上的收盘价
CC1:REF(CC,1);
//要引用的数据需要写在被引用的指标里，不能写在IMPORT模型中。
//例1中的CC指标引用日周期上前一个周期的收盘价，需要在被引用的指标中取一个周期前的收盘价，
例2中写在IMPORT模型中则表示取小周期上一个周期前的值

例3：
CC:=REF(C,1);//定义一个周期前的收盘价
保存指标，命名为AA
#IMPORT[CUSHOUR,6,AA]AS S
CC1:=S.CC;//跨周期引用自定义6小时周期的一个周期前的收盘价
#IMPORT[MIN,1,AA]AS R
CC2:=R.CC;//跨周期引用自定义1分钟周期的一个周期前的收盘价
`;

const _$_ = new MyCompletion();
_$_.label = "$";
_$_.insertText = "";
_$_.body = " $ ";
_$_.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
_$_.type = MyCompletionType.CandlestickDataReference;
_$_.detail = "引用其他合约的K线数据";
_$_.documentation = `

" $ " 简化的跨合约函数，调用其他合约的K线数据。

用法："CODE$PRICE"引用CODE合约的PRICE数据，CODE为文华码。

注：
1、PRICE的位置可以替换为TIME、OPEN、O、HIGH、H、LOW、L、CLOSE、C、OPI、VOL、V、AVPRICE、SETTLE、SCALE
2、默认只能引用同一周期的数据。
3、CODE的位置不可以为空。
4、一个模型中&跨合约、&&跨周期引用语句个数不能超过6个。

例1：
A:"1209$CLOSE";//返回文华码为1209合约的收盘价。

例2：
A:"8606$OPI";//返回文华码为8606合约的持仓量。
`;

const _$_$_ = new MyCompletion();
_$_$_.label = "$ $";
_$_$_.insertText = "";
_$_$_.body = " $ $ ";
_$_$_.marketType = MyCompletionMarketType.TPlusZeroStrategyFunction;
_$_$_.type = MyCompletionType.CandlestickDataReference;
_$_$_.detail = "引用其他周期的K线数据";
_$_$_.documentation = `

" $ $ " 简化的跨周期函数，调用另外一个周期上一根k线的数据。

用法："MIN$15$PRICE"引用15分钟K线的PRICE数据，PERIOD为周期类型。PRICE为引用的数据。

注：
1、PRICE的位置可以替换为TIME、OPEN、O、HIGH、H、LOW、L、CLOSE、C、OPI、VOL、V、AVPRICE、SETTLE、SCALE
2、引用的是上一根K线的值。
示例 TEST:"MIN$3$CLOSE";  //引用3分钟周期K线CLOSE
即引用的上一根3分钟K线的CLOSE。
3、只支持小周期引用大周期，被引用周期不支持秒周期及自定义周期，支持的被引用周期：1MIN,3MIN,5MIN,10MIN,15MIN,30MIN,1HOUR,2HOUR,3HOUR,4HOUR,DAY,WEEK,MONTH。
4、一个模型中&跨合约、&&跨周期引用语句个数不能超过6个。

例1：
A:"MIN$5$CLOSE";//返回上一根5分钟周期K线的收盘价。

例2：
A:"HOUR$4$OPI";//返回上一根4小时周期K线的持仓量。
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
    _CALL,
    _CALL_OTHER,
    _CALL_PLUS,
    _IMPORT,
    _$_,
    _$_$_,
];
