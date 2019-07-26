var obj = {
    count: 0,
    cool() {
        if (this.count < 1) {
            setTimeout( function(){
                this.count ++;
                console.log(this.count, 'more cool')
            }.bind(this), 100)
        }
    }
}
obj.cool()

function indentify(){
    return this.name.toUpperCase()
}

function speak(){
    var greeting = 'hello, i\'m' + indentify.call(this)
    return greeting
}

var me = {
    name: 'kyle'
}
var you = {
    name: 'reader'
}

// console.log(indentify.call(me))
// console.log(indentify.call(you))

// console.log(speak.call(me))
// console.log(speak.call(you))

// 随着你的使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用this则不会这样。
// 当我们介绍对象和原型时，你就会明白函数可以自动引用合适的上下文对象有多重要。

// 除了函数对象还有许多更合适存储状态的地方


// function foo(num){
//     console.log('foo' + num)
//     // 记录foo被调用的次数
//     this.count++
// }

// foo.count = 0
// var i;
// for (i=0; i < 10; i++){
//     if (i > 5) {
//         foo(i)
//     }
// }

// console.log(foo.count);

// function foo(num) {
//     console.log('foo' + num)
//     // 记录foo被调用的次数
//     data.count++
// }

// var data = {
//     count: 0
// }
// var i

// for(i=0; i< 10; i++ ) {
//     if (i > 5){
//         foo(i)
//     } 
// }

// console.log(data)

// function foo(i,count) {
//     this.count ++
// }

// var i
// var data = new foo()

// for(i = 0; i < 10; i++) {
//     if (i > 5) {
//         data(i)
//     }
// } 

// console.log(data)
// console.log(
//     Object.keys({a:1,b:2})
// )

function foo(num) {
    console.log('foo' + num)
    // 记录foo被调用次数
    // 注意，在当前的调用方式下，this确实指向foo
    this.count ++
}

foo.count = 0;
for (var i = 0; i < 10; i++) {
    if (i > 5) {
        foo.call(foo, i)
    }
}

console.log(foo)

// 强制this指向foo函数对象

