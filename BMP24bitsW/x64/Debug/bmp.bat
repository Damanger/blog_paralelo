@echo off
setlocal enabledelayedexpansion

for /l %%i in (1,1,50) do (
	BMP24bitsW.exe
)
endlocal