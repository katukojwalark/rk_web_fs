funLogFilePath();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Premitive datatypes are always copied as values. 
Objects always copied as references by default. It's a shallow copy.

Same applies for the function calls.  Objects are always copied by reference and premitive datatypes by value.

You can copy objects by deep copy using JSON.parse(JSON.stringify(srcObj)) 
*/

let iniVal = 10;

let copVal = iniVal;

console.log("iniVal: ", iniVal);
console.log("copVal: ", copVal);

copVal = 20;

console.log("iniVal: ", iniVal);
console.log("copVal: ", copVal);

let iniObj = {
    name: "Bala Krishna",
    role: "Actor"
}

let refObj = iniObj;

console.log("iniObj: ", iniObj);
console.log("refObj: ", refObj);

refObj.role = "Comedian";

console.log("iniObj: ", iniObj);
console.log("refObj: ", refObj);

iniObj.role = "Hero";

console.log("iniObj: ", iniObj);
console.log("refObj: ", refObj);

// How to deep copy an object?

let deepCopObj = JSON.stringify(iniObj); // create a string

console.log("iniObj: ", iniObj);
console.log("deepCopObj: ", deepCopObj);
console.log("type of deepCopObj: ", typeof deepCopObj);

deepCopObj = JSON.parse(deepCopObj);  // convert the string into an object

console.log("iniObj: ", iniObj);
console.log("deepCopObj: ", deepCopObj);
console.log("type of deepCopObj: ", typeof deepCopObj);

deepCopObj.role = "villain";

console.log("iniObj: ", iniObj);
console.log("deepCopObj: ", deepCopObj);

// In short you can deep copy an object as follows,

let deepCopObj_ = JSON.parse(JSON.stringify(iniObj));

console.log("iniObj: ", iniObj);
console.log("deepCopObj_: ", deepCopObj_);
console.log("type of deepCopObj_: ", typeof deepCopObj_);

deepCopObj_.role = "No Roles";

console.log("iniObj: ", iniObj);
console.log("deepCopObj_: ", deepCopObj_);

// Function Parameters: Function parameters when object type are always copied by reference.

(function(par) {
par.isActive = true;
}(iniObj))

console.log("iniObj: ", iniObj);  // Notice that the isActive property gets added to the original iniObj.

// How to deep copy function parameters then?
// create a deep copy somehow and work on that.
// you can consider writing a separate function that creates a deepcopied object.

function cloner(par) {
    var deepCopyCloned = JSON.parse(JSON.stringify(par));
    return deepCopyCloned;
};

(function(par) {
    par.gender = 'male';

    console.log(par);
}(cloner(iniObj)));

// or when you know you always want to work on the cloned withing the function.
(function(par) {
    parCloned = cloner(par);
    parCloned.gender = 'male';

    console.log(parCloned);
}(iniObj))

console.log("iniObj: ", iniObj);  // Notice that the gender property NOT added to the original iniObj.
