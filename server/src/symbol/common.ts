/* --------------------------------------------------------------------------------------------
 * Copyright (c) X37ddV. All rights reserved.
 * Licensed under the MIT License. See License.md in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export enum MyFunctionType {
    None,
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

export enum MyMarketType {
    None,
    BasicFunction, // 基础函数
    TPlusZeroStrategyFunction, // T+0策略函数
    TPlusOneStrategyFunction, // T+1策略函数
    StockSelectionFunction, // 选股函数
}

export enum MySymbolKind {
    Keyword,
    Function,
    Enum,
    Reference,
    Snippet,
    Operator,
    Text,
}

export enum MyFunctionReturnType {
    None,
    Number,
    Boolean,
}

export enum MyFunctionParameterType {
    Number,
    Boolean,
}

export class MyFunctionParameter {
    public label: string = "";
    public type: MyFunctionParameterType = MyFunctionParameterType.Number;
    public immutable: boolean = false; // 参数是否只能是常量
    public documentation: string = "";
}

export class MySymbol {
    public label: string = "";
    public description: string = "";
    public insertText: string = "";
    public body: string = "";
    public detail: string = "";
    public documentation: string = "";
    public kind: MySymbolKind = MySymbolKind.Keyword;
    public marketType: MyMarketType = MyMarketType.None;
    public functionType: MyFunctionType = MyFunctionType.None;
    public returnType: MyFunctionReturnType = MyFunctionReturnType.None;
    public parameters: MyFunctionParameter[] = [];
    public get parameter(): { [key: string]: MyFunctionParameter } {
        const result: { [key: string]: MyFunctionParameter } = {};
        this.parameters.forEach((p) => {
            result[p.label] = p;
        });
        return result;
    }
    static fromLabelAndDetail(label: string, detail: string, kind: MySymbolKind): MySymbol {
        const result = new MySymbol();
        result.label = label;
        result.detail = detail;
        result.description = detail;
        result.documentation = detail;
        result.kind = kind;
        return result;
    }
    static createParametersFromStrings(parameters: string[]): MyFunctionParameter[] {
        return parameters.map((p) => {
            const result = new MyFunctionParameter();
            result.label = p;
            return result;
        });
    }
}
