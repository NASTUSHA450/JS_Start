//подключаем установленный модуль через команду reguire
const { Console } = require('console');
let express = require('express');
//создаём новый обьект  экземпляр класса express
let app = express();

let port = 3000;

app.listen(3000,function(){
    console.log(`node express work on ${port}`);
});

//Далее, чтобы запустить первое приложение
//get - метод обращения 

app.get('/cat',function(request,response){
    response.end('<h1>Category</h1> mi mi mi mi');
});