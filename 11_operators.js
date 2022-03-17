// Operators in Java script

/* 
+ - * / % ++ += -= > < <= >= !
= == === 
& && | ||
[] : .
typeof
*/

var i = 10 % 3; 

console.log(i);
console.log(typeof(i));

/*
= is used for assigning values to a variable in JavaScript. 
== is used for comparison between two variables irrespective of the datatype of variable. 
=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
*/

console.log("2" == 2)  //true
console.log("2" === 2)  //false

console.log("2" == 2 & typeof("2")==typeof(2))  //& returns 0 or 1
console.log("2" == 2 && typeof("2")==typeof(2))  // && returns true or false

//Arrays. Arrays can be of heterogenous type, unlike C lang.
var nam = "Rajesh";
var age  = 30;
var phone = 9866098706;

var person = [nam, age, phone];

console.log(person)
console.log(typeof(person))

var arr = ['rose', 'jasmine', 'lotus', ['violet', 'yellow']]

console.log(arr[3][1])

var map = {flowers:['rose', 'jasmine', 'lotus'],
            colors: ['violet', 'yellow']}

console.log(map.colors[0])