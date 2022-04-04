/*

https://www.w3schools.com/js/js_htmldom.asp
https://javascript.info/dom-nodes
Info on Documents: https://javascript.info/document

With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
document object is a property of the window object.
If you check for the members of document all are on html.

Similar to CSS the selectors in JS to manipulate a Dom Object are: id (for unique element), class (for a group of elements), element name (for all elements with the name)
*/

console.log("Accessing the Dom elements from javascript.")
console.log(document.getElementsByClassName("divByClassExample"));
console.log(document.getElementsByTagName("divBynameExample"));

console.log(document.getElementById("divByIdExample"));

console.log(document.getElementById("divByIdExample"))