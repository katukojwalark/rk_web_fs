/*
this: is used inside a function, and will always refer to a single object - the object that invokes the function where 'this' is used.
    But life isn’t perfect. Sometimes, we lose our this reference. Ex: when event listeners are added.
    When that happens, we end up using confusing hacks to save our reference to this. 

By default the this refers to the global window object, until overridden.
When is this overridden? : 
*/

// In the following example we alway refer to the global this object.
console.log(this);

(function foo() {
    console.log(this);
    function fooIn() {
        console.log(this);
    }
})();

console.log(this);

// In the following case we have this different in different contexts.
// The following commented code we are adding a new button to empty the cart when there is atleast one item added to the shopping cart.
// We also add an event listener to handle the logic to empty the cart.

// Do not worry if you do not understand the following code reasoning.
// It's just about 'this'.
/*
if(this.isEmpty()) {
    var emptyCartBtn = document.createElement("button");
    emptyCartBtn.innerHTML = "Empty Cart";
    emptyCartBtn.className = "empty";

    var myCart = this;
    // When calling method on emptyCartBtn, 'this' becomes emptyCartBtn and we lose the context of myCart version of 'this'. Hence I copied it into a var myCart.
    emptyCartBtn.addEventListener("click", function() {
        myCart.clearCart();
        // here this referst to emptyCartBtn.
    });
    cartDom.appendChild(emptyCartBtn);
}
*/