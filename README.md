# Visual Studio Code 的“麦语言”支持

[![GitHub package.json version](https://img.shields.io/github/package-json/v/X37ddV/my-lang)](https://marketplace.visualstudio.com/items?itemName=X37ddV.my-lang)
[![GitHub License](https://img.shields.io/github/license/X37ddV/my-lang)](https://marketplace.visualstudio.com/items?itemName=X37ddV.my-lang)

欢迎使用 `麦语言` VS Code 扩展！ `麦语言` 是 [文华财经](https://www.wenhua.com.cn/) 旗下的一款量化交易软件 [麦语言量化交易软件 (**T8**)](https://wt8.wenhua.com.cn/) 中的量化交易模型开发编程语言。

## 功能

将 `麦语言` 代码文件的后缀名设置为 `.my`，并在 VS Code 中打开，`MyLang` 扩展将会自动激活。该扩展提供了一系列功能，旨在提高您的编程体验：

-   **语法高亮**: 为您的 `麦语言` 代码着色，以提高可读性并减少眼睛的疲劳
-   **智能感知**: 根据变量类型、函数定义和导入的模块，获得智能的补全
-   **悬浮提示**: 在鼠标悬浮在变量、函数等上时，显示变量、函数等的信息
-   **语法检查**: 检查您的 `麦语言` 代码中的语法错误
-   **代码格式化**: 格式化您的 `麦语言` 代码，自动补全 `;` 号等

## 扩展设置

| 设置项目                     | 说明                  | 默认值 |
| ---------------------------- | --------------------- | ------ |
| `myLang.localTQuant8Path`    | 本机 TQuant8 安装目录 | `""`   |
| `myLang.maxNumberOfProblems` | 要报告的最大问题数    | `100`  |

## 执行命令

在 VS Code 中按 `Ctrl+Shift+P`，在 `>` 后面输入命令名称（允许输入中文）并执行相应命令：

| 命令名称                             | 中文名称                    | 说明                                       |
| ------------------------------------ | --------------------------- | ------------------------------------------ |
| `MyLang: Import models from TQuant8` | `麦语言: 导入 TQuant8 模型` | 将 **T8** 中的模型全部导入到当前工作目录中 |
| `MyLang: Run model at TQuant8`       | `麦语言: 在 TQuant8 中运行` | 在 **T8** 中运行当前 `.my` 模型文件        |

## 已知问题

-   函数提示内容待完善
-   语法检查不完整
-   代码格式化支持 IF THEN ELSE 语句的格式化
-   支持代码折叠
-   函数签名提示内容待完善
-   代码补全待完善
-   要支持变量名重构
-   要支持代码导航
-   有其他问题请提交 [GitHub Issues](https://github.com/X37ddV/my-lang/issues)
