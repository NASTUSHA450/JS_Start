// // Functional Programing eto podhod pri kotorom funktsii mojno peredavat'
// // drugim funktsiyam v kachestve parametrov i ispol'zovat' v kachestve znacheni.

// // First-class functions - funktsii pervovo klassa
// // V JS funktsii  rassmatrivautsia kak obiekti pervogo klassa.(iz za podderjki
// //funktsional'nogo programmirovania yazikom JS).
// // funktsii predostavleni v JS v vide ob'ektov osobovo tipa Function.

// function greeting(){
//     console.log('Hello World');
// }
// greeting();

// //Proverka togo chto funktsia est' obiekt v JS
// //K funktsiyam mojno dobavliat svoistva kak i k lubim obiektam
// //(ho tak delat' ne rekomenduet'sya, smotri nije)
// greeting.lang = 'English';

// console.log(greeting.lang);
// // Otsuda sleduet chto s funktsiyami mimojem delay' te je deistvia
// //chto i s sushnostiami drugih tipov, takih kak object, string, number.
// // Funktsii mojno peredavat' kak parametri drugin funktsiyam.
// // Obichno takie funktsii vistupaut v roli funktsi' obratnogo viziva-callback function

// // Funktsii mojno naznachit peremennim i konstantam
// // Function expression
// const square = function(x){
//     return x*x;
// }

// console.log(square(5));

//===Practice===

//function statement
function greet(){
    console.log('Hello');
}

function bye(){
    console.log('goodbye');
}

// Peredacha funktsii v videparametrov
//dlia drugih fuktsii
//functions are first-class
function logGreetings(fn){
    fn();
}

logGreetings(greet);
logGreetings(bye);

// Mojem peredat' neskol'ko funktsi'
function formalGreet(){
    console.log('How are you?');
}

function casualGreet(){
    console.log('Wat\'s up?');
}

function greet(type, greetFormal, greetUnformal){
    if(type === 'formal'){
        greetFormal();
    }
    else if(type === 'casual'){
        greetUnformal();
    }
}

// Vivodimzadav parametr pervim argumentam 'casual' ili 'formal'
greet('formal',formalGreet,casualGreet);

// //function expression
// let greetMe = function(){
//     console.log('Hi Nastya');
// }

// logGreetings(greetMe);

// logGreetings(function(){
//     console.log('hello Nastya');
// })