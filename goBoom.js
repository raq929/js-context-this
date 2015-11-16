//IN STRICT MODE, this will point to undefined
//when we invoke a function that does not have a context, it will refer to the global scope.

function goBoom() {
    console.log(this);
}

goBoom();
// this === window

// This is the same as:
window.goBoom();
