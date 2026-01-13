@echo off  
echo Starting live server...  
echo.  
echo ========================================  
echo   DARIUS CUBED - LIVE SERVER  
echo ========================================  
echo.  
echo Your site is now live at:  
echo   http://localhost:3000  
echo.  
echo Open this URL in your browser!  
echo.  
echo Press Ctrl+C to stop the server  
echo ========================================  
echo.  
cd /d "%~dp0"  
node server.js  
pause 
