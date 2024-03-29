;
; Copyright (c) X37ddV. All rights reserved.
; Licensed under the MIT License. See License.md in the project root for license information.
;

Global $sStdErr = ""
Global $sStdOut = ""

Main()

If $sStdErr <> "" Then
    ConsoleWriteError($sStdErr)
ElseIf $sStdOut <> "" Then
    ConsoleWrite($sStdOut)
EndIf

Exit

; Finished!

Func Main()
    ; 主函数

    ; 查找窗口句柄
    Local $hWindow = FindWindowHandle("^TQuant8|WT8", "Afx:")
    If $hWindow <> "" Then
        ; 如果窗口最小化，则恢复窗口
        If IsMinimized($hWindow) Then
            WinSetState($hWindow, "", @SW_RESTORE)
        EndIf

        ; 激活主窗口
        ControlFocus($hWindow, "", "[CLASS:ToolbarWindow32; INSTANCE:1]")
        WinActive($hWindow)
        WinWaitActive($hWindow)
        SendKeepActive($hWindow)

        ; 关闭所有弹出窗口
        CloseAllWindows("^My\sLanguage|编辑", "#32770", 1000)
        
        ; 编写模型（快捷键Ctrl+F）
        Send("^f")

        ; 等待弹出窗口出现
        Local $hDialog = WaitWindowHandle("^My\sLanguage|编辑", "#32770", 2000)
        If $hDialog <> "" Then
            ; 激活弹出窗口
            ControlFocus($hDialog, "", "[CLASS:SysTreeView32; INSTANCE:1]")
            WinActive($hDialog)
            WinWaitActive($hDialog)
            SendKeepActive($hDialog)

            ; 定位到第一个根节点的子节点
            Send("{HOME}")
            Sleep(100)
            Send("{RIGHT}")
            Sleep(100)
            Send("{RIGHT}")
            Sleep(100)

            ; 激活主视图中的 K 线图
            ControlFocus($hWindow, "", "[CLASS:Afx:0000000140000000:8:0000000000010005:00000000001000A2:0000000000000000; INSTANCE:8]")
            Sleep(100)

            ; 更新主图
            ControlClick($hDialog, "", "[CLASS:Button; INSTANCE:17]")
            Sleep(100)

            ; 如果没有提示窗口，则认为成功
            If WinExists("提示") Then
                Sleep(100)
                ; 获取提示窗口的文本
                Local $sText = WinGetText("提示")
                $sText = StringReplace($sText, "确定", "")
                $sText = StringRegExpReplace($sText, "\r?\n", " ")
                $sText = StringStripWS($sText, 3) ; 移除前导和尾随空格
                $sStdOut = $sText
            EndIf
            
            ; 关闭弹出窗口
            SendKeepActive("")
            WinClose($hDialog)
        Else
            ; 没有找到弹出窗口
            SendKeepActive("")
            $sStdErr = "未找到`TQuant8`的`编写模型`窗口"
        EndIf
    Else
        ; 没有找到主窗口
        $sStdErr = "未找到`TQuant8`的主窗口"
    EndIf
EndFunc ; => Main

Func IsVisible($hWnd)
    ; 如果窗口可见，则返回True
    If BitAND(WinGetState($hWnd), 2) Then
        Return True
    EndIf
    Return False
EndFunc ; => IsVisible

Func IsMinimized($hWnd)
    ; 如果窗口最小化，则返回True
    If BitAND(WinGetState($hWnd), 16) Then
        Return True
    EndIf
    Return False
EndFunc ; => IsMinimized

Func FindWindowHandle($sTitlePattern, $sExpectedClassName)
    ; 根据窗口标题和类名查找窗口句柄，标题可以是正则表达式，类名可以是部分匹配

    ; 返回找到的窗口句柄，如果没有找到，则返回空字符串
    Local $hWindow = ""

    ; 使用WinList获取所有窗口
    Local $aWinList = WinList()
    For $i = 1 To $aWinList[0][0]
        ; 检查窗口标题是否匹配正则表达式
        If StringRegExp($aWinList[$i][0], $sTitlePattern) Then
            ; 获取窗口的类名
            Local $hWnd = $aWinList[$i][1]
            Local $sClassList = WinGetClassList($hWnd)
            If StringInStr($sClassList, $sExpectedClassName) Then
                ; 如果类名匹配预期，则找到了正确的窗口
                $hWindow = $hWnd
                ExitLoop
            EndIf
        EndIf
    Next
    Return $hWindow
EndFunc ; => FindWindowHandle

Func WaitWindowHandle($sTitlePattern, $sExpectedClassName, $nTimeout)
    ; 等待窗口出现，直到超时(毫秒)

    ; 返回找到的窗口句柄，如果没有找到，则返回空字符串
    Local $hWindow = ""

    Local $nStartTime = TimerInit() ; 开始计时
    While TimerDiff($nStartTime) < $nTimeout ; 检查是否超时
        Local $hWnd = FindWindowHandle($sTitlePattern, $sExpectedClassName)
        If $hWnd <> "" Then
            $hWindow = $hWnd
            ExitLoop
        EndIf
        Sleep(100) ; 短暂等待后继续循环，防止CPU过度使用
    WEnd
    Return $hWindow
EndFunc ; => WaitWindowHandle

Func CloseAllWindows($sTitlePattern, $sExpectedClassName, $nTimeout)
    ; 关闭所有匹配的窗口，直到超时(毫秒)

    Local $nStartTime = TimerInit() ; 开始计时
    While True
        ; 检查是否已达到超时时间
        If TimerDiff($nStartTime) > $nTimeout Then
            Return False
        EndIf
        ; 查找匹配的窗口
        Local $hWnd = FindWindowHandle($sTitlePattern, $sExpectedClassName)
        If $hWnd = "" Then
            ; 如果没有找到匹配的窗口，退出循环
            ExitLoop
        EndIf
        ; 关闭找到的窗口
        WinClose($hWnd)
    WEnd
    Return True
EndFunc ; => CloseAllWindows
