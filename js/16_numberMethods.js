funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Functions to convert string into number: parseInt(String), parseFloat(String)
Math.round(num):
Math.ceil(num): 
Math.floor(num):
Math.random(): returns a random numer in the range (1,9)
*/

console.log("typeof NaN: ", typeof NaN);
console.log("typeof Infinity", typeof Infinity);

let strNum = "10";

console.log(strNum + 20);   // 1020

let num = parseInt(strNum);

console.log(num + 20);    // 30

console.log('123' + 20);    // 12320
console.log(20 + '123');    // 20123

// So..Whenever one operand is a string, the + operator implicitly converts the other operand into strand and then concatenates them.

let numFloat = 123.12;
let numString = '123.12';

let numInt = parseInt(numFloat);
console.log(numInt);    // 123

numInt = parseInt(numString);
console.log(numInt);    // 123
