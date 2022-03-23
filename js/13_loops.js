funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
for, for-in, for-of, while.


*/
var shoppingList = [
    'vegetables',
    'fruits',
    'grains'
];

// for(let i=0; i<condition; i++) {}

// for-in
console.log("for-in");

for(index in shoppingList) {
    console.log(shoppingList[index]);
}

// for-of
console.log("for-of");

for(var item of shoppingList) {
    console.log(item);
}

// while
console.log("while");

let j=0;
while(j<shoppingList.length) {
    console.log(shoppingList[j]);
    j++;
}