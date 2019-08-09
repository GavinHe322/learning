// 柯里化函数
const curry = (fn, ...args) => {
    console.log(fn, args)
    return args.length < fn.length
    // 参数长度不足时，重新科柯里化该函数,等待接受新参数
    ? (...arguments) => curry(fn, ...args, ...arguments)
    // 参数长度满足时，执行该函数
    : fn(...args)
}




function sumFn(a, b, c, d) {
    return a + b + c + d;
}

var sum = curry(sumFn);
console.log(
    // sum(2)(3)(5),
    // sum(2, 3, 5),
    // sum(2,3)(5)(5),
)



// 如果让 (a == 1 && a == 2 && a == 3)
var a = [1, 2, 3];
a.join = a.shift;
console.log(
    (a == 1 && a == 2 && a == 3)
)


var a = new Proxy({}, {
    i: 1,
    get: function() {
        return () => this.i++
    }
})

console.log(
    (a == 1 && a == 2 && a == 3)
)