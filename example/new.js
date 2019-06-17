// 手工实现一个 new 操作符
// new 的几个作用

// new 操作符会返回一个对象， 所以沃恩需要内部创建一个对象
// 这个对象， 也就是构造函数中的this， 可以访问到挂载在 this 上的任意属性
// 这个对象可以访问到构造函数圆形上的属性， 所以需要将对象与构造函数链接起来
// 返回原始值需要忽略， 返回对象需要正常处理

// 所以来实现这些功能
function  create(Con, ...args) {
    let obj = {};
    Object.setPrototypeOf(obj, Con.prototype)
    let result = Con.apply(obj, args)
    console.log(result, 'result')
    console.log(obj, 'obj')
    return result instanceof Object ? result : obj
}

// 上面这个函数 第一个参数为构造函数， 接下来的参数被构造函数使用
// 然后内部创建一个空对象 obj
//     因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeof 将两者
//     联系起来。 这段代码等同于 obj.__proto__ = Con.prototype
//  将 obj 绑定到构造函数上， 并且传入剩余的参数
//  判断构造函数返回值是否为对象， 如果为对象就使用构造函数返回的值， 否则使用 obj，这样就实现了忽略构造函数返回的原始值

function Test(name, age) {
    this.name = name
    this.age = age
}

Test.prototype.intr = function () {
    console.log(`my name is ${this.name}, i'm ${this.age} years old`)
}

const me = create(Test, 'gavin', '21')
console.log(me.name) 
console.log(me.age)

me.intr()
