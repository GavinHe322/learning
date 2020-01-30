// base example
var handler = {
    get(target, name) {
        return name in target ? target[name] : '不存在哦'
    }
}

var p = new Proxy({}, handler)

p.a = 1
p.b = undefined

// console.log(
//     p.a, // 1,
//     p.b, // undefined
//     p.c  // 不存在哦
// )

// 无操作转发代理
var target = {}
var p = new Proxy(target, {})

p.a = 37 // 操作转发到目标

// console.log(
//     target.a,  // 37 操作已被正确地转发
//     target.b,  // undefined
// )

// text
let validator = {
    set(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer')
            }
            if (value > 100) {
                throw new RangeError('The age seems invalid')
            }
        }

        // Tee default behavior to store the value
        obj[prop] = value
    }
}

let person = new Proxy({}, validator)

// person.age = '你好啊' // error
// person.age = 200     // 
person.age = 99

function extend(sup, base) {
    var descriptor = Object.getOwnPropertyDescriptor(
        base.prototype, 'constructor'
    )
    base.prototype = Object.create(sup.prototype)

    var handler = {
        construct(target, args) {
            var obj = Object.create(base.prototype)
            console.log(this,' this')
            this.apply(target, obj, args)
            return obj
        },
        
        apply(target, that, args) {
            console.log(args, 'args', that)
            sup.apply(that, args)
            base.apply(that, args)
        }
    }

    var proxy = new Proxy(base, handler)
    descriptor.value = proxy
    Object.defineProperty(base.prototype, 'constructor', descriptor)
    return proxy
}

var Person = function(name) {
    this.name = name
}

var Boy = extend(Person, function(name, age) {
    console.log(name, age)
    this.age = age
})

Boy.prototype.sex = 'M'
var Peter = new Boy('Peter', 13)

console.log(
    Peter.sex,   // 'M'
    Peter.name,  // 'Peter'
    Peter.age    //  13
)



