@echo off
echo ========================================
echo   藏文OCR识别小程序 - 代理服务器
echo ========================================
echo.
echo 正在启动代理服务器...
echo.

cd /d "%~dp0"

:: 检查Node.js是否安装
node --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到Node.js，请先安装Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

:: 启动代理服务器
echo [✓] Node.js 已安装
echo [✓] 启动代理服务器...
echo.
node proxy-server.js

pause
