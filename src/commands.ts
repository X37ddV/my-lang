import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as funcDef from "./configs/funcDes";

const funcDes: any = funcDef.default;
const functionOrder = funcDes["FUNCTION_ORDER"]
const functionType = funcDes["FUNCTION_TYPE"]
const keyword = funcDes["KEYWORD"]
const markettype = funcDes["MARKET_TYPE"]
delete funcDes["FUNCTION_ORDER"]
delete funcDes["FUNCTION_TYPE"]
delete funcDes["KEYWORD"]
delete funcDes["MARKET_TYPE"]
delete funcDes["IS_WH9"]
const functionOrders: string[] = []
for (let i = 1; i <= functionOrder["NUM"]; i++) {
    functionOrders.push(functionOrder["function"+i]);
}
const functionTypes: string[] = []
for (let i = 1; i <= functionType["NUM"]; i++) {
    functionTypes.push(functionType["type"+i]);
}
const keywords: string[] = []
for (let i = 1; i <= keyword["NUM"]; i++) {
    keywords.push(keyword["keyword"+i]);
}
const markettypes: string[] = []
for (let i = 0; i < markettype["NUM"]; i++) {
    markettypes.push(markettype["markettype"+i]);
}

const MarketType = [
    "MyCompletionMarketType.BasicFunction", // 基础函数
    "MyCompletionMarketType.TPlusZeroStrategyFunction", // T+0策略函数
    "MyCompletionMarketType.TPlusOneStrategyFunction", // T+1策略函数
    "MyCompletionMarketType.StockSelectionFunction", // 选股函数
]

const FuncType = [
    "",
    "MyCompletionType.CandlestickDataReference", // K线数据引用
    "MyCompletionType.FinancialStatisticsFunction", // 金融统计函数
    "MyCompletionType.MathematicalStatisticsFunction", // 数理统计函数
    "MyCompletionType.MathFunction", // 数学函数
    "MyCompletionType.LogicalJudgmentFunction", // 逻辑判断函数
    "MyCompletionType.LoopExecutionFunction", // 循环执行函数
    "MyCompletionType.TimeFunction", // 时间函数
    "MyCompletionType.DrawingFunction", // 绘图函数
    "MyCompletionType.CalculationControlFunction", // 计算控制函数
    "MyCompletionType.SignalLoggingFunction", // 信号记录函数
    "MyCompletionType.SignalExecutionFunction", // 信号执行函数
    "MyCompletionType.PositionManagementFunction", // 头寸管理函数
    "MyCompletionType.PerformanceOptimizationFunction", // 运行优化函数
    "MyCompletionType.EncryptionOutputFunction", // 加密输出函数
    "MyCompletionType.StockDataFunction", // 股票数据函数
    "MyCompletionType.FormulaBasedSelection", // 公式选股
]

let a: string = `
import { MyCompletion, MyCompletionMarketType, MyCompletionType } from "../common";

`;
let s: string = "";
const funcKeys: string[] = [];
const funcMap: { [key: string]: any } = {};
for (const [_key, value] of Object.entries(funcDef)) {
    for (const [k, v] of Object.entries(value)) {
        funcMap[k] = v
    }
}
for (const fk of functionOrders) {
    const func = funcMap[fk];
    const label = fk;
    let key = fk;
    if (fk[0] === "#") {
        key = fk.replace("#", "_");
    } else if (fk === "$") {
        key = "_$_";
    } else if (fk === "$ $") {
        key = "_$_$_";
    }
    funcKeys.push(key);
    a += `const ${key} = new MyCompletion()\n`;
    a += `${key}.label = "${label}"\n`;
    a += `${key}.insertText = ""\n`;
    // if (func["tip"] !== undefined) {
    //     const oo = func["tip"];
    //     a += `${key}.tip = "${oo}"\n`;
    // }
    if (func["body"] !== undefined) {
        a += `${key}.body = "${func["body"]}"\n`;
    }
    if (func["markettype"] !== undefined) {
        const oo = func["markettype"];
        const oos = MarketType[oo] || "";
        a += `${key}.marketType = ${oos}\n`;
    }
    if (func["type"] !== undefined) {
        const oo = func["type"];
        const oos = FuncType[oo] || "";
        a += `${key}.type = ${oos}\n`;
    }
    if (func["explanation"] !== undefined) {
        const oo = func["explanation"];
        a += `${key}.detail = "${oo}"\n`;
    }
    if (func["description"] !== undefined) {
        let oot = func["tip"];
        oot = oot.replace(/\\r\\n/g, "\n");
        let oo = func["description"];
        oo = oo.replace(/\\r\\n/g, "\n");
        oo = oot + "\n" + oo;
        a += `${key}.documentation = \`\n${oo}\n\`\n`;
    }
    a += "\n";
}
for (const kk of keywords) {
    const keyword = funcMap[kk];
    let key = kk;
    s += `const ${key} = "${keyword}"\n`;
}

function saveStringToFile(filePath: string, content: string): void {
    try {
        fs.writeFileSync(filePath, content, "utf8");
        // 显示一个信息性消息以确认文件已保存
        vscode.window.showInformationMessage(`File saved: ${filePath}`);
    } catch (err: any) {
        // 错误处理：如果文件无法保存，显示一个错误消息
        vscode.window.showErrorMessage(
            `Failed to save the file: ${err.message}`
        );
    }
}

export function activateCommands(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "extension.saveString",
        () => {
            // 指定要保存的文件路径和内容
            // 检查是否有打开的工作区文件夹
            if (
                vscode.workspace.workspaceFolders &&
                vscode.workspace.workspaceFolders.length > 0
            ) {
                // 获取第一个工作区文件夹的路径
                const workspaceFolder = vscode.workspace.workspaceFolders[0];
                const workspaceFolderPath = workspaceFolder.uri.fsPath;
                a += `export const functions = [ ${funcKeys.join(", ")} ]\n`;
                saveStringToFile(path.join(workspaceFolderPath, "a.ts"), a);
                saveStringToFile(path.join(workspaceFolderPath, "s.ts"), s);
            } else {
                vscode.window.showErrorMessage("No workspace folder is open.");
            }
        }
    );

    context.subscriptions.push(disposable);
}
