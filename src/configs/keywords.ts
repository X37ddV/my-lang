import { MyCompletion } from "../common";

const keywordList = Object.entries({
    AND: "AND 逻辑与",
    AS: "AS 与#IMPORT函数连用",
    BEGIN: "BEGIN",
    ELSE: "ELSE",
    END: "END",
    OR: "OR 逻辑或",
    THEN: "THEN",
    VARIABLE: "VARIABLE 定义全局变量并初始化",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const periodList = Object.entries({
    SEC: "秒",
    WEEK: "周",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const drawList = Object.entries({
    BOLD: "加粗",
    OPISTICK: "画竖线，K线为阳线为红色，K线为阴线为青色",
    STICK1: "画柱线",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const orderOpList = Object.entries({
    BK: "买开仓",
    BP: "买平仓",
    SK: "卖开仓",
    SP: "卖平仓",
    BPK: "买平后买开新仓",
    SPK: "卖平后卖开新仓",
    STOP: "STOP(type, N) 限价止损指令，N为止损点数",
    CLOSEOUT: "清仓指令",
    BUY: "买入",
    SELL: "卖出",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const ratioList = Object.entries({
    RATIO_ACCOUNT: "账户资金使用率",
    RATIO_CODE: "单品种资金使用率",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const periodCustomList = Object.entries({
    CUSTOM_DAY: "自定义日",
    CUSTOM_HOUR: "自定义小时",
    CUSTOM_MIN: "自定义分钟",
    CUSTOM_SEC: "自定义秒",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const loopTypeList = Object.entries({
    ADD: "加和",
    AVERAGE: "均值",
    MAX1_POS: "最大值位置(不包括自身周期)",
    MAX1_VALUE: "最大值(不包括自身周期)",
    MAX_POS: "最大值位置",
    MAX_VALUE: "最大值",
    MIN1_POS: "最小值位置(不包括自身周期)",
    MIN1_VALUE: "最小值(不包括自身周期)",
    MIN_POS: "最小值位置",
    MIN_VALUE: "最小值",
    SECONDMAX1_POS: "次大值位置(不包括自身周期)",
    SECONDMAX1_VALUE: "次大值(不包括自身周期)",
    SECONDMAX_POS: "次大值位置",
    SECONDMAX_VALUE: "次大值",
    SECONDMIN1_POS: "次小值位置(不包括自身周期)",
    SECONDMIN1_VALUE: "次小值(不包括自身周期)",
    SECONDMIN_POS: "次小值位置",
    SECONDMIN_VALUE: "次小值",
    TIMES: "满足表达式的次数",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const dataList = Object.entries({
    C: "收盘价",
    H: "最高价",
    L: "最低价",
    O: "开盘价",
    V: "成交量",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const alignList = Object.entries({
    ALIGN0: "左对齐",
    ALIGN1: "居中对齐",
    ALIGN2: "右对齐",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const valignList = Object.entries({
    VALIGN0: "上对齐",
    VALIGN1: "居中对齐",
    VALIGN2: "下对齐",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const colorList = Object.entries({
    COLORBLACK: "黑色",
    COLORBLUE: "蓝色",
    COLORCYAN: "青色",
    COLORGRAY: "灰色",
    COLORGREEN: "绿色",
    COLORLIGHTBLUE: "浅蓝色",
    COLORLIGHTGREEN: "浅绿色",
    COLORLIGHTGREY: "浅灰色",
    COLORLIGHTRED: "浅红色",
    COLORMAGENTA: "紫红色",
    COLORRED: "红色",
    COLORWHITE: "白色",
    COLORYELLOW: "黄色",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const orderList = Object.entries({
    ACTIVE_ORDER: "对价",
    CANCEL_ORDER: "启用自动撤单并终止下单",
    CMPETITV_ORDER: "超价",
    LIMIT_ORDER: "市价",
    NEW_ORDER: "最新价",
    PASSIVE_ORDER: "排队价",
    SIGPRICE_ORDER: "触发价",
}).map(([label, detail]) => MyCompletion.fromLabelAndDetail(label, detail));

const precisList = Array.from({ length: 7 }, (_, i) => i).map((i) =>
    MyCompletion.fromLabelAndDetail(
        `PRECIS${i}`,
        `数值精度为${i}(${i === 0 ? "不显示小数" : `显示${i}位小数`})`
    )
);

const lineThickList = Array.from({ length: 7 }, (_, i) => i + 1).map((i) =>
    MyCompletion.fromLabelAndDetail(`LINETHICK${i}`, `实线 粗细度为${i}`)
);

const fontSizeList = Array.from({ length: 65 }, (_, i) => i + 8).map((i) =>
    MyCompletion.fromLabelAndDetail(`FONTSIZE${i}`, `字体大小为${i}`)
);

export const keywords = [
    ...keywordList,
    ...periodList,
    ...drawList,
    ...orderOpList,
    ...ratioList,
    ...periodCustomList,
    ...loopTypeList,
    ...dataList,
    ...alignList,
    ...valignList,
    ...colorList,
    ...orderList,
    ...precisList,
    ...lineThickList,
    ...fontSizeList,
];
