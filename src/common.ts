import * as fs from "fs";
import * as path from "path";

export enum MyCompletionFunctionType {
    CandlestickDataReference, // K线数据引用
    FinancialStatisticsFunction, // 金融统计函数
    MathematicalStatisticsFunction, // 数理统计函数
    MathFunction, // 数学函数
    LogicalJudgmentFunction, // 逻辑判断函数
    LoopExecutionFunction, // 循环执行函数
    TimeFunction, // 时间函数
    DrawingFunction, // 绘图函数
    CalculationControlFunction, // 计算控制函数
    SignalLoggingFunction, // 信号记录函数
    SignalExecutionFunction, // 信号执行函数
    PositionManagementFunction, // 头寸管理函数
    PerformanceOptimizationFunction, // 运行优化函数
    EncryptionOutputFunction, // 加密输出函数
    StockDataFunction, // 股票数据函数
    FormulaBasedSelection, // 公式选股
}

export enum MyCompletionMarketType {
    BasicFunction, // 基础函数
    TPlusZeroStrategyFunction, // T+0策略函数
    TPlusOneStrategyFunction, // T+1策略函数
    StockSelectionFunction, // 选股函数
}

export enum MyCompletionType {
    Keyword,
    Function,
}

export enum MyCompletionReturnType {
    None,
    Number,
    Boolean,
}

export enum MyCompletionArgumentType {
    Any,
    // TODO: Add more types
}

export class MyCompletionArgument {
    public label: string = "";
    public type: MyCompletionArgumentType = MyCompletionArgumentType.Any;
    public description: string = "";
}

export class MyCompletion {
    public label: string = "";
    public insertText: string = "";
    public detail: string = "";
    public documentation: string = "";
    public body: string = "";
    public type: MyCompletionType = MyCompletionType.Keyword;
    public marketType: MyCompletionMarketType = MyCompletionMarketType.BasicFunction;
    public functionType: MyCompletionFunctionType = MyCompletionFunctionType.CandlestickDataReference;
    public returnType: MyCompletionReturnType = MyCompletionReturnType.None;
    public arguments: MyCompletionArgument[] = [];
    static fromLabelAndDetail(label: string, detail: string): MyCompletion {
        const result = new MyCompletion();
        result.label = label;
        result.detail = detail;
        return result;
    }
}

export function getLanguageId(context: { extensionPath: string }): string {
    const packageJSONPath = path.join(context.extensionPath, "package.json");
    let languageId = "";

    try {
        const data = fs.readFileSync(packageJSONPath, "utf8");
        const packageJSON = JSON.parse(data);
        languageId = packageJSON.contributes.languages[0].id;
    } catch (error) {
        console.error("Error reading or parsing package.json:", error);
    }

    return languageId;
}

export function getIcons(context: { extensionPath: string }): {
    [key: string]: string;
} {
    const iconsPath = path.join(context.extensionPath, "images/icons");
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

    return icons;
}
