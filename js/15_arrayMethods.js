/*

*/

var arr = [1,2,3];
let dataBase = [];

dataBase.push(0);
dataBase.push({name: 'BalaKrishna'});
dataBase.push(4);
dataBase.push("some value");
dataBase.push(5);
dataBase.push(6);
dataBase.push(6);
dataBase.push(8);

dataBase.push("last pushed element.");

console.log(dataBase);

// unshift adds the elements at the front.
dataBase.unshift(-1);
dataBase.unshift(-2);
dataBase.unshift(-3);

console.log(dataBase);

// Remove the elements:

// pop : removes the elements from the end.

var removedElement = dataBase.pop();

console.log(dataBase);

console.log("Removed Element: ", removedElement)

console.log(dataBase);

// shift : removes the elements from the front.

removedElement = dataBase.shift();
console.log("Removed Element: ", removedElement)

console.log(dataBase);

// How to remove the element at an index position?
// splice(index, no_elements_from_index) : splice is slice from a position. but unlike slice, splice removes the elements from the original array.

removedElement = dataBase.splice(2, 3);   // removes 3 elements starting including from index pos 2;

console.log("Removed Element: ", removedElement);

console.log(dataBase);

// To extract some part of the array.
// slice(start_index, end_index). slice does not change the actual array.

var extractedEle = dataBase.slice(1, 3);

console.log("Extracted/slieced Element: ", extractedEle);

console.log(dataBase);
