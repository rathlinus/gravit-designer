@echo off
REM Registers the Gravit Designer thumbnail handler for .gvdesign files.
REM Must be run as Administrator (writes to HKEY_CLASSES_ROOT).
setlocal
net session >nul 2>&1
if errorlevel 1 (
    echo This script must be run as Administrator.
    echo Right-click register.bat -^> "Run as administrator".
    pause
    exit /b 1
)
regsvr32 "%~dp0GravitThumbnail.dll"
REM Drop cached thumbnails so the new handler is picked up immediately.
if exist "%LocalAppData%\Microsoft\Windows\Explorer\thumbcache_*.db" (
    taskkill /f /im explorer.exe >nul 2>&1
    del /f /q "%LocalAppData%\Microsoft\Windows\Explorer\thumbcache_*.db" >nul 2>&1
    start explorer.exe
)
endlocal
