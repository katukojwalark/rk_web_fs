funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
To combine a method to an object.

The call, bind and apply methods can be used to set the this keyword independent of how a function is called. Hence the function becomes generic for compatible objects.
The bind method creates a copy of the function and sets the this keyword, while the call and apply methods sets the this keyword and calls the function immediately.

Remember that call, apply, and bind are from ES5.  ES6 provides efficient ways to do it using the arrow functions.

call: https://www.w3schools.com/js/js_function_call.asp
apply: https://www.w3schools.com/js/js_function_apply.asp
bind: https://www.w3schools.com/js/js_function_bind.asp

*/

// Example:
var movieInfo = {
    _name : "MovieName",
    year : "2020"
};

var studentInfo = {
    _name : "StudentName",
    year : "2022"
}

console.log(movieInfo);
console.log(studentInfo);

console.log(window);

var printInfo = function() {
    console.log(this._name, " is out in the year ", this.year);
};

// Using 'call'
console.log("calling the printInfo using 'call' : ");

printInfo.call();   // Equivalent to printInfo.call(this). But this object is the window object now which do not have _name and year properties 'bound' to it.
printInfo.call(movieInfo);
printInfo.call(studentInfo);

// Using 'apply'
console.log("calling the printInfo using 'apply' : ");

printInfo.apply(movieInfo);
printInfo.apply(studentInfo);

// Using 'bind'
let fInfo = printInfo.bind(movieInfo);  // will return a printInfo function which is bound to movieInfo object.

console.log("calling the printInfo using 'bind' : ");

fInfo();

fInfo = printInfo.bind(studentInfo);    // Now I am binding the printInfo to studentInfo.

fInfo();

// What if your function has parameters?
// You need to pass over the params, but call and bind takes them by comma separation where as the apply takes them in an array form.
// Example:

var printInfoResult = function(rating, outOf) {
    console.log(this._name, " is out in the year ", this.year, " with a rating: ", rating, "/", outOf);
}

printInfoResult.call(movieInfo, 8, 10);
printInfoResult.call(studentInfo, 9, 10);

printInfoResult.apply(movieInfo, [8, 10]);
printInfoResult.apply(studentInfo, [9, 10]);

fInfo = printInfoResult.bind(movieInfo, 9.1, 10);
fInfo();

printInfoResult.bind(studentInfo, 9.5, 10)();   // Here I'm calling the function directly.  We can follow this way when we do not really need the binding function later.
