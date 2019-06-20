// the bind() mtehod creates a mew function that, when called, has its this keyword
// set to the provided value, with a given sequence of arguments preceding
// any provided when the new function is called.
var module = {
    x: 24,
    fn: function() {
        console.log(this.x)
        return this.x
    }
}

var unboundGetX = module.fn

console.log(
    unboundGetX()
)

var unboundGetX = unboundGetX.bind(module)
console.log(
    unboundGetX()
)

this.x = 9; // this refers to global 'window' object here in the browser

// the simples use of bind() is to make a function that, no matter how it is called,
// is called with a particular this value. A common mistake for new js programmers is
// to extract a method from an object. then to later call that function and
// expect it to use the original object as its this (e.g. by using that method in callback-based code).
// without special care. however, the original object is usually lost. Creating a bound function
// from the function, using the original object, neatly solves this problem.

var module = {
    x: 91,
    getX: function() {
        console.log(this.x)
        return this.x
    }
}

var retriveX = module.getX
retriveX()

retriveX = retriveX.bind(module)
retriveX()
// return 9 - the function gets invoked at the global scope