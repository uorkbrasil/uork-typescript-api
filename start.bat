@title Uork
@echo Uork - API
@echo 1 - Consultar Status de um serviço
@echo 2 - Consultar Conta
@echo 3 - Consultar Notícias
@echo 4 - Instalar Dependências

@set /p option=Qual a escolha desejada: 

if "%option%"=="1" (
   cls
   npm run status
   timeout /t 60
  
) else if "%option%"=="2" (
  cls
  npm run conta
  timeout /t 60
 
) else if "%option%"=="3" (
  cls
  npm run noticias
  timeout /t 60
 
) else if "%option%"=="4" (
  cls
  npm install
) else (
    echo Opção inválida.
    timeout /t 60
                      

)

pause
