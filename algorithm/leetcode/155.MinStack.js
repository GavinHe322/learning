/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.tempStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
 
    if(this.tempStack.length) {
        var a = this.tempStack
        debugger
        this.tempStack[this.tempStack.length - 1] < x ? '' : this.tempStack.push(x)
        debugger
    } else {
        this.tempStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let pop = this.stack.pop()
    if(pop == this.tempStack[this.tempStack.length - 1]) {
        this.tempStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.tempStack[this.tempStack.length - 1]
};

var obj = new MinStack();
obj.push(-2)
obj.push(-2)
obj.push(-2)
obj.push(-1)
// obj.push(0)
// obj.push(2)
// obj.pop()
console.log(
    obj.stack
)
// console.log(
//     obj.stack
// )

// console.log(
//     obj.top()
// )

// console.log(
//     obj.getMin()
// )
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */