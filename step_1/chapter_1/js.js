//0variable-string
let name = " Vasya";
let number = 6;

let c = `Hello`;  
//concatination
console.log("Hello"+name+"\nyou are the best!");

/*Одинарные ковычки на букву ё */
console.log(`number = ${number}`);

/*Перенос кода на новую строку "\" */
console.log("Hello you are the best! Hello you are the best! Hello you are the best! Hello you are the best!\
 Hello you are the best! ");

/*Quote(Экранирование)*/
console.log("Hello \'quote\' you are the best")
console.log("Hello \"quote\" you are the best")

//1variable-number
const a = 1;
const pi = 8;
const str = "8";

console.log(a);
console.log(pi);

//variable type
console.log(typeof a);
console.log(typeof str);

let num =7;
//convert string to number(конвертируем из текста в цисло)
let num2 = +str;
let res = num2 + 7;

console.log(res);
console.log(typeof res);


let zero = 0;
console.log(res/zero);