funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
var:
let: 
const:

Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.

The scope of a var variable is functional scope.	The scope of a let variable is block scope.	The scope of a const variable is block scope.
var can be updated and re-declared into the scope.	let can be updated but cannot be re-declared into the scope.	const cannot be updated or re-declared into the scope.
var can be declared without initialization.	let can be declared without initialization.	const cannot be declared without initialization.
var can be accessed without initialization as its default value is “undefined”.	let cannot be accessed without initialization, as it returns an error. const cannot be accessed without initialization, as it cannot be declared without initialization.

To be consise the variables declared inside the curly braces are called as within block scope.

Coming back to the use of keywords,
var is called as function scope that is if a variable is declared using var keyword it will be accessible throughout the function.
let & const are also called as block scope that is they are accessible within that particular block. Here let is used for variable which can be changed as we proceed through the program whereas const is used for a variable which doesn’t change till the program ends, that is it remains constant throughout the program.
*/

var a = 10;

(function() {
    a = 20;
    var a = 30;
    console.log("Within the foo a: ", a);  // Prints 20
    console.log("Within the foo this.a: ", this.a);  // Prints 10

    var bLocal = 30;    // bLocal cannot be accessed outside the block.
})();

console.log("Global a: ", a);  // Prints 20
console.log("Global this.a: ", this.a);  // Prints 10

// console.log(bLocal);    // This is an error.

(()=> {
    a = 20;
    var a = 30;
    //this.a = 30;
    console.log("Within the Arrow a: ", a);  // Prints 30. this has it's own context/scope.
    console.log("Within the Arrow this.a: ", this.a);  // Prints 10. this has it's own context/scope.
})();

console.log("Global a: ", a);  // Prints 10
console.log("Global this.a: ", this.a);  // Prints 10

let b = 5;