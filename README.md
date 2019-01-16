# bpmn
1. подготовка бд (файл diagramdb) (postgresql)
var connectionString = "postgres://myRole:admin@localhost/diagramdb";
роль:myRole
пароль:admin
название бд:diagramdb
поля: id(ключ),diagram, username(имя владельца диаграммы),diagramname
текущий пользователь задан явно имя записано в app.js в currentusername=user1
2.запуск
открыть репозиторий с программой 
выолнить команду npm i
выолнить команду node app
открыть http://localhost:3000

