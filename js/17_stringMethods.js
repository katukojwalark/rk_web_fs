funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
string comparision:
    indexOf(serchStr), lastIndexOf(serchStr), search(serchStr): return the index of match otherwise -1
    startsWith, includes: true/false

trim(): trim of extra spaces before and after the string content.

*/

var str = "my string example";
var strExtra = "     my string example     ";

let srch = str.search("dex");

console.log(strExtra.trim());

let tooBigData = "{a1: val1} | {a2: val2} | {a3: val3} | {a4: val4}";

console.log("Original String before slicing: ", str);

let slicedStr = str.slice(4,6);

console.log("Sliced String: ", slicedStr);
console.log("Original String after slicing: ", str);
