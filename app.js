//подключаем установленный модуль через команду reguire
const { Console } = require('console');
let express = require('express');
//создаём новый обьект  экземпляр класса express
let app = express();

let port = 3000;

app.listen(port, function(){
    console.log(`node express work on ${port}`);
});

//public -имя папки где храниться статика
app.use(express.static('public'));

//Далее, чтобы запустить первое приложение
//get - метод обращения, первый параметр url адрес куда идет обратно

app.get('/',function(req,res){
    res.render('index.html');
});

app.get('/cat',function(req,res){
    res.render('category.html');
});

