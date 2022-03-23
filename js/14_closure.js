funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Closure: https://www.javascripttutorial.net/javascript-closure/#:~:text=In%20JavaScript%2C%20a%20closure%20is,the%20lexical%20scoping%20works%20first.

A closure is a function that references variables in the outer scope from its inner scope. 
The closure preserves the outer scope inside its inner scope.
To understand the closures, you need to know how the lexical scoping works first.

*/

// Problem: In the following code, how can you access the functions add, subtract, and multply from outside _Math?
// For example, console.log(_Math.add(2,2)); throws Uncaught TypeError.

var _Math = (function() {
    function add(a, b) { return a+b;}
    function subtract(a, b) { return a-b;}
    function multiply(a, b) { return a*b;}
})();

// Solution:
var _MathLib = (function() {
    return {                                       // An Object of functions we are returning. Here Each property is a function.
        add : function(a, b) { return a+b; },      // add(a, b) { return a+b; },
        subtract : function(a, b) { return a-b; }, // subtract(a, b) { return a-b; },
        multiply : function(a, b) { return a*b; }  // multiply(a, b) { return a*b; }
    };
}());

console.log(_MathLib.add(5,2));
console.log(_MathLib.subtract(5,2));
console.log(_MathLib.multiply(5,2));

// Closure
(function foo() {
    var a = 10;

    var res = function() {
        var sum = a+b;
    }
    // console.log("sum: ", sum);   // This is an error. Cannot access sum outside the scope.
})();