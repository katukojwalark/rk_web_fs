funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

