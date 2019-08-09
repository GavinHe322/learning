
var person = {
    name: 'gavin',
    age: 21,
    sex: 1
}

var me = JSON.stringify(person, ['name', 'age'])

console.log(
    me, // output "{'name':'gavin', 'age': '21'}"
)

// 1. 对象的属性值是函数时，无法拷贝。
// 2. 原型链上的属性无法拷贝
// 3. 不能正确的处理 date 类型的数据
// 4. 不能处理 RegExp
// 5. 会忽略 symbol
// 6. 会忽略 undefined


// 实现一个 deepClone 函数
// 1. 如果是基础类型，直接返回
// 2. 如果是 ```RegExp``` 或者 ```Date``` 类型，返回对应类型
// 3. 如果是复杂数据类型，递归。
// 4. 考虑循环引用的问题

function deepClone(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (obj === null || typeof obj !== 'object') {
        // 如果不是复杂类型
        return obj
    }
    if (hash.has(obj)) {
        return hash.get(obj)
    }
    /**
     * 如果 obj 是数组，那么 obj.constructor 是 [function: Array]
     * 如果 obj 是对象，那么 obj.constructor 是 [function: Object];
     */
    let t = new obj.constructor();
    hash.has(obj, t);
    for (let key in obj) {
        // 递归
        if (obj.hasOwnProperty(key)) {//是否是自身的属性
            t[key] = deepClone(obj[key], hash)
        }
    }
    return t
}


var obj = {
    name: 'Yvette',
    age: 15,
    hobbies: ['reading', 'phtotography']
}


var copyObj = deepClone(obj);
obj.hobbies.push('change?');

console.log(copyObj)