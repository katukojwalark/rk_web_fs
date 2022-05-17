/* 
+ - * / % ++ += -= > < <= >= !
= == === 
& && | ||
[] : .
typeof
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(typeof i);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
= is used for assigning values to a variable in JavaScript. 
== is used for comparison between two variables irrespective of the datatype of variable. 
=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
*/

console.log("2" == 2);  //true
console.log("2" === 2);  //false

console.log("2" == 2 & typeof("2")==typeof(2));  //& returns 0 or 1
console.log("2" == 2 && typeof("2")==typeof(2)); // && returns true or false

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrays. Arrays can be of heterogenous type, unlike C lang.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var nam = "Rajesh";
var age  = 30;
var phone = 9866098706;

var person = [nam, age, phone];

console.log(person);
console.log(typeof(person));

var arr = ['rose', 'jasmine', 'lotus', ['violet', 'yellow']];

console.log(arr[3][1]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Objects. Key Name
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var person = {
     name: "Rajesh",
     age: 30,
     number: 900000000,
     "pin code": 500000,
     favColors: ["red", "green", "blue"],
     favMovies: {genre: {comedy: ["movie1", "movie2", "movie3"]}}
 };

 console.log(person);
 console.log(person.number);
 console.log(person["pin code"]);

 console.log(person.favMovies.genre.comedy[2]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Functions.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Declaration
function add(v1, v2) {
return v1+v2;
}

console.log(add(10, 20));

// Anonymous functions. No name.
// Anonymous functions are useful when we do not want to call them specifically or we want to call it only once as in case of IIFEs.
// Often they are callback functions, where we do not wish to call them explicitly.

var fExpression = function() {
    console.log("Ananomous Function");
}

// Function call
fExpression();

// Anonymous function as a function parameter.
// Note that function expressions gives us a handle to reuse an anonymous functions multiple times.
function foo(fExpression) {
    console.log("I have passed an anonymous function as an argument to this function");
}

foo();

// When we want the function to NO more useable.
fExpression = null;

/* 
    Note: Once you declare a function you can call it even before its declaration. But This is not the case with Anonymous functions, which act like variables.
    Reason: Named functions are added to global address space, hence can be called from lines before the declaration.
    Anonymous functions have their own this object which overrides the one in the context where the function is used.
*/

// IIFE: Immediately Invoked Function Expressions. No explicit calling is required. 
// Its a function defined as an expression and executed immediately after creation.
/* 
    https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/
    IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.

    A few helpful reasons to use anonymous functions and IIFE in your code:
    1. to perform a task for event handlers, listeners, and callbacks — anonymous functions
    2. to maintain data privacy — IIFE
    3. to use as an argument when a function is called — anonymous functions & IIFE
    4. prevent conflicts between script files that could have the same variable names — anonymous functions & IIFE
*/

let productExp = function(v1, v2) {
    return v1*v2;
} (2, 3)

console.log(productExp);

(function(v1, v2) { //This is an Anonymous IIFE
    prod = v1*v2;
    console.log(prod);
    return prod;
})(4,5);

(function foo() {   // This is a named IIFE
    // Do something;
})()

// Arrow Functions: https://www.javascripttutorial.net/es6/javascript-arrow-function/

productExp = (v1, v2) => {v1*v2;}  // (v1, v2) => v1*v2;  When there is only one statement in the block we can omit the curly braces.

let square = (x) => x*x;  // When single paramater you can even omit the parentheses. Ex:  square = x => x*x;

console.log(square(5));

let arrFn = () => {
    console.log("My first Arrow Function");
}

arrFn();

// IIFE can be defined using Arrow functions as follows.
((param1, param2)=> {
    // Do something;
})(10, 20);

// Default Parameters to a function
function sum(a=2, b=3) {
    return a+b;
}

console.log(sum());
console.log(sum(10, 20));

// Object Constructor Functions:  Before ES6 there were no classes in JS we used object constructor functions, then.
// Later classes arrived.
// we follow a notation of first letter as capatal called Pascal notation - just to differentiate from a regular function.

function Student(fname, sname, standard) {
    this.fname = fname;
    this.sname = sname;
    this.standard = standard;

    //return this;  // not required. This is implicitly added by js engine.
};

var student1 = new Student("Bala", "Krishna", 4);
var student2 = new Student("Balaya", "Babu", 4);

console.log("student1", student1);
console.log("student2", student2);

// Modifying the student1 and student2
student1.fullName = function() { return this.fname + this.sname;}

student2.nationality = "Indian";

console.log("After adding property to student2. student1 and student2: ");

console.log("student1.nationality: ", student1.nationality);  // Undefined property logged.
console.log("student2.nationality: ", student2.nationality);
console.log("student1.fullName()", student1.fullName());
//console.log("student2", student2.fullName());  // This will give an error.

// If you want to add any properties to all the objects of Student type, you can add it in the constructor function i.e. Student.
// Is there a way to modify the constructor function from outside, in a similar way we added more properties to student1 and sutdent2 separately?
// Ans: Yes.
// How??


// ES6. Function Arguments:

(function(a, b, c,) {
    console.log(a);
    console.log(b);
    console.log(c);

    console.log("arguments: ", arguments);
    
    console.log("arguments['3']", arguments['3']);
    console.log("arguments['4']", arguments['4']);

})(10, 20, 30, 40);

