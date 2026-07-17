@echo off
echo ========================================
echo   OCR代理服务器连接测试
echo ========================================
echo.
echo 正在测试连接...
echo.

cd /d "%~dp0"
node test-connection.js

echo.
pause
