/* 
The following code is to display the current .js file info on the console.
I have added this piece of code for debug purpose only.
*/
var filepath;
function funLogFilePath(){ 
    var scripts = document.getElementsByTagName('script'); 
    filepath = scripts[ scripts.length-1 ].src; 
    console.log("########## ", filepath, " ##########");
};

funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
Premitive datatypes: string, numbner, null boolean, undefined 
To log to the console: console.log("ghdgkhd")
*/

console.log("Im logging this");

var persons = {num:24242,"First Name":"sname", age: 30, favColors: ["red", "green", "blue"]};

console.log(persons["First Name"])

