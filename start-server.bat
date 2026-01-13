@echo off  
echo Starting local server...  
echo.  
echo Your site will be available at:  
echo http://localhost:3000/full-site.html  
echo.  
echo Press Ctrl+C to stop the server  
echo.  
cd public  
npx serve@latest . -l 3000  
pause 
