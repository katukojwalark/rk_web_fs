funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*

*/

var arr = [1,2,3];
let dataBase = [];


dataBase = arr;
dataBase.push(4);

for(item of dataBase) {
    console.log(item);
}
for(item of arr) {
    console.log(item);
}