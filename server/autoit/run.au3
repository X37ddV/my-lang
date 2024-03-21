;
; Copyright (c) X37ddV. All rights reserved.
; Licensed under the MIT License. See License.md in the project root for license information.
;

Local $nCode = Main()

Local $mMessage[]
$mMessage["-2"] = "Failed to find the `My Language` dialog of TQuant8."
$mMessage["-1"] = "Failed to find the `TQuant8` window of TQuant8."
$mMessage["0"] = "Success."
$mMessage["1"] = "Please switch the main window to the K-line chart."
$mMessage["2"] = "Unknown error."

Local $sCode =  String(($nCode >= -2 And $nCode <= 1) ? $nCode : 2)
Local $sMessage = "{ code: " & $nCode & ", message: '" & $mMessage[$sCode] & "'}"
If $nCode >= 0 Then
    ConsoleWrite($sMessage)
Else
    ConsoleWriteError($sMessage)
EndIf

Exit

; Finished!

Func Main()
    ; 主函数

    ; 返回值
    Local $nCode = 0

    ; 查找窗口句柄
    Local $hWindow = FindWindowHandle("^TQuant8", "Afx:")
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
        
        ; 编写模型（快捷键Ctrl+F）
        Send("^f")

        ; 等待弹出窗口出现
        Local $hDialog = WaitWindowHandle("^My\sLanguage", "#32770", 2000)
        If $hDialog <> "" Then
            ; 激活弹出窗口
            ControlFocus($hDialog, "", "[CLASS:SysTreeView32; INSTANCE:1]")
            WinActive($hDialog)
            WinWaitActive($hDialog)
            SendKeepActive($hDialog)

            ; 定位到第一个根节点的子节点
            Send("{HOME}")
            Send("{RIGHT}")
            Send("{RIGHT}")

            ; 激活主视图中的 K 线图
            ControlFocus($hWindow, "", "[CLASS:Afx:0000000140000000:8:0000000000010005:00000000001000A2:0000000000000000; INSTANCE:8]")

            ; 更新主图
            ControlClick($hDialog, "", "[CLASS:Button; INSTANCE:17]")

            ; 等待 100 毫秒，如果没有提示窗口，则认为成功
            Sleep(100)
            If WinExists("提示") Then
                $nCode = 1
            EndIf
            
            ; 关闭弹出窗口
            SendKeepActive("")
            WinClose($hDialog)
        Else
            ; 没有找到弹出窗口
            SendKeepActive("")
            $nCode = -2
        EndIf
    Else
        ; 没有找到主窗口
        $nCode = -1
    EndIf
    Return $nCode
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
