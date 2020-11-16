//подключаем установленный модуль через команду reguire
const { Console } = require('console');
let express = require('express');
//создаём новый обьект  экземпляр класса express
let app = express();

const port = 3000;
const framework = 'express';
//%s строка переноситься
app.listen(port, function(){
    console.log(`node %s work on %s`,framework,port);
});

//public -имя папки где храниться статика
app.use(express.static('public'));

//прописываем путь до папки
app.set('views', './views');
//запуск шаблонизатора
app.set('view engine','pug');

//Далее, чтобы запустить первое приложение
//get - метод обращения, первый параметр url адрес куда идет обратно

app.get('/',function(req,res){
    res.render('main');
});



