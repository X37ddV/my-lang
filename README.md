# Visual Studio Code 的“麦语言”支持

[![GitHub package.json version](https://img.shields.io/github/package-json/v/X37ddV/my-lang)](https://marketplace.visualstudio.com/items?itemName=X37ddV.my-lang)
[![GitHub License](https://img.shields.io/github/license/X37ddV/my-lang)](https://marketplace.visualstudio.com/items?itemName=X37ddV.my-lang)

欢迎使用 `麦语言` VS Code 扩展！ `麦语言` 是 [文华财经](https://www.wenhua.com.cn/) 旗下的一款量化交易软件 [麦语言量化交易软件 (**T8**)](https://wt8.wenhua.com.cn/) 中的量化交易模型开发编程语言。

## 功能

将 `麦语言` 代码文件的后缀名设置为 `.my`，并在 VS Code 中打开，`MyLang` 扩展将会自动激活。该扩展提供了一系列功能，旨在提高您的编程体验：

- **语法高亮**: 为您的 `麦语言` 代码着色，以提高可读性并减少眼睛的疲劳
- **智能感知**: 根据变量类型、函数定义和导入的模块，获得智能的补全
- **悬浮提示**: 在鼠标悬浮在变量、函数等上时，显示变量、函数等的信息
- **语法检查**: 检查您的 `麦语言` 代码中的语法错误
- **代码格式化**: 格式化您的 `麦语言` 代码，自动补全 `;` 号等

## 执行命令

在 VS Code 中按 `Ctrl+Shift+P`，在 `>` 后面输入命令名称（允许输入中文）并执行相应命令：

| 命令名称                             | 中文名称                    | 说明                                       |
| ------------------------------------ | --------------------------- | ------------------------------------------ |
| `MyLang: Import models from TQuant8` | `麦语言: 导入 TQuant8 模型` | 将 **T8** 中的模型全部导入到当前工作目录中 |
| `MyLang: Run model at TQuant8`       | `麦语言: 在 TQuant8 中运行` | 在 **T8** 中运行当前 `.my` 模型文件        |

## 扩展设置

| 设置项目                     | 说明                  | 默认值 |
| ---------------------------- | --------------------- | ------ |
| `myLang.localTQuant8Path`    | 本机 TQuant8 安装目录 | `""`   |
| `myLang.maxNumberOfProblems` | 要报告的最大问题数    | `100`  |

## 模型注释

在导入模型时，原模型中的参数会自动转换为 `模型注释`，注释内容包括描述、基本信息、作者信息、参数列表及其默认参数组等：

```js
/**
 * 指数平滑异同移动平均线
 *
 * @version 130112
 *
 * @briefDescription 平滑移动平均线
 * @property 0
 * @editTime 2017年03月06日09:28:24
 *
 * @author data0000
 * @signature 1234567890
 * @telephone 1234567890
 * @mail 1234567890@abc.com
 * @infoVersion INFOVERSION
 *
 * @param SHORT 1, 40, 12 [0, 0, 0, 0]
 * @param LONG 1, 100, 26 [0, 0, 0, 0]
 * @param M 1, 60, 9 [0, 0, 0, 0]
 */
```

| 注释参数            | 模型标签                          | 说明                     |
| ------------------- | --------------------------------- | ------------------------ |
| `/** ... */`        | `<DESCRIPTION />`                 | 模型文件的描述           |
| `@version`          | `<VERSION />`                     | 模型文件的版本           |
| `@briefDescription` | `<BRIEFDESCRIPTION />`            | 基本信息中的描述         |
| `@property`         | `<PROPERTY />`                    | 基本信息中的属性         |
| `@editTime`         | `<EDITTIME />`                    | 基本信息中的最后更新时间 |
| `@author`           | `<AUTHOR />`                      | 作者信息中的作者         |
| `@signature`        | `<SIGNATURE />`                   | 作者信息中的数字签名     |
| `@telephone`        | `<TELEPHONE />`                   | 作者信息中的电话         |
| `@mail`             | `<MAIL />`                        | 作者信息中的 Email       |
| `@infoVersion`      | `<INFOVERSION />`                 | 作者信息中的版本号       |
| `@param`            | `<PARAM />` `<PARAMDEFAULTSET />` | **模型参数**列表         |

> **模型参数**: `@param 参数名称 最小, 最大, 缺省 [备选参数组1, 备选参数组2, 备选参数组3, 备选参数组4]`

## 已知问题

- 函数提示内容待完善
- 语法检查不完整
- 代码格式化支持 IF THEN ELSE 语句的格式化
- 支持代码折叠
- 函数签名提示内容待完善
- 代码补全待完善
- 要支持变量名重构
- 要支持代码导航
- 有其他问题请提交 [GitHub Issues](https://github.com/X37ddV/my-lang/issues)
