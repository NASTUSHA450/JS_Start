//0variable-string
// let name = " Vasya";
// let number = 6;

// let c = `Hello`;  
//concatination
// console.log("Hello"+name+"\nyou are the best!");

/*Одинарные ковычки на букву ё */
// console.log(`number = ${number}`);

/*Перенос кода на новую строку "\" */
// console.log("Hello you are the best! Hello you are the best! Hello you are the best! Hello you are the best!\
//  Hello you are the best! ");

/*Quote(Экранирование)*/
// console.log("Hello \'quote\' you are the best")
// console.log("Hello \"quote\" you are the best")

//1variable-number
// const a = 1;
// const pi = 8;
// const str = "8";

// console.log(a);
// console.log(pi);

//variable type
// console.log(typeof a);
// console.log(typeof str);

// let num =7;
//convert string to number(конвертируем из текста в цисло)
// let num2 = +str;
// let res = num2 + 7;

// console.log(res);
// console.log(typeof res);

//Infinity
// let zero = 0;
// console.log(res/-zero);

// STEP_1 LESS_1

// let a = 5;
// console.log(typeof a);
// a = 7;
// console.log(typeof a);
// a = "Hello";
// console.log(typeof a);
// alert(a);
//break point

// string to number
// let a,b; 
// a = b = "3.14";
// a = parseInt("3.14")
// b = parseFloat("3.14")
// console.log(`Pi equals after int ${a},\
// Pi after float ${b}`);
// // не округление, а откидывание
// a = parseInt("3px");
// b = parseFloat("3.14px");
// console.log(`Pi equals after int ${a},\
// Pi after float ${b}`);

//data type
/*
//string 
    let name = "VASIA";
//number
    letage =7;
//boolean
    const a = true;
    const b = false;
//null
    const a = null;
    console.log(typeof )
//undefined
    let_new;
    console.log(typeof_new);

//symbol
*/

//сщставные типы данных - объекты
const myObject = {
    //ключ : знвчение
    myKey: "Hello",
    age: 120
}

let Greetings = myObject.myKey;
console.log(Greetings);
let number = myObject['age'];
console.log(number);

let anyAnswer = prompt();
console.log(anyAnswer);