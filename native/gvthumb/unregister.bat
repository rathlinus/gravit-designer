@echo off
REM Unregisters the Gravit Designer thumbnail handler. Run as Administrator.
setlocal
net session >nul 2>&1
if errorlevel 1 (
    echo This script must be run as Administrator.
    pause
    exit /b 1
)
regsvr32 /u "%~dp0GravitThumbnail.dll"
endlocal
