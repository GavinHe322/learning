"use strict";
// // type compatible
// // introduce
// // TypeScript里的类型兼容性是基于结构子类型的。结构类型是一种只使用其成员来描述类型的方式。它正和与名义
// // (norminal)类型形成对比。(译者注: 在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/
// // 或类型的名称来决定的)。这与结构类型系统不同，它是基于类型的组成结构，且不要求明确地声明。看下面的例子：
// // interface Named {
// //     name: string
// // }
// // class Person {
// //     name: string
// // }
// // var p: Named;
// // ok, because of structural typing
// // 在使用基于名义类型的语言，比如C#或Java中，这段代码会报错，因为Peron类没有明确说明其实现了Named接口
// // TypeScript的机构性子类型是根据JavaScript代码的典型写法来设计的。因为JavaScript里广泛地使用匿名对象，例如函数表达式
// // 和对象字面量，所以使用机构类型系统来描述这些类型比使用名义类型系统更好。
// // 关于可靠性的注意事项
// // TypeScript的类型系统允许某些在编译阶段预付确认其安全性的操作。当一个类型系统具此属性时，被当做是 '不可靠'的。TypeScript允许这种不可靠行为的发生是经过仔细考虑的。
// // 通过这篇文章，我们会解释什么时候会发生这种情况和其有利的一面。
// // 开始
// // 不是很懂这里，interface有无相同值，编译成js代码一样
// // TypeScript结构话类型系统的基本规则是，如果x要兼容y，那么y至少具有x相同的属性。比如：
// interface Named {
//     name: string
// }
// var x: Named
// // y's inferred type is {name: string; location: string;}
// var y = {
//     name: 'Alice',
//     location: "Seattle"
// }
// x = y
// console.log(x, y)
// // 相对来讲，在比较原始类型和对象类型的时候是比较容易理解的，问题是如果判断这两个函数是兼容的。
// var a = (a: number) => 0
// var b = (b: number, s: string)  => 0
// b = a
// console.log(b,'bbbbbbbbbbbbbbbbbb', a, 'aaaaaaaaaaaaaaaaa')
// // a = b //error
// // typeScript
// // 第二个赋值错误，因为y有个必需的第二个参数，但是x并没有，所以不允许赋值。
// // 你可能疑惑为什么允许忽略参数，list example y = x some。this reson is 忽略 额外的 参数在javascript里很常见。
// // 例如，Array#forEach给回调函数传三个参数：数组元素，索引和整个数组。尽管如此。传入一个只是用第一个参数的回调函数也是很有用的：
// var items = [1, 2, 3]
// // Don't force these extra aruguments
// items.forEach((item, index, array) => {
//     console.log(item)
// })
// // should be ok;
// items.forEach(item => console.log(item))
// // 下面来看看如何处理返回值类型，窗机两个仅是返回值类型不同的函数:
// // var a = () => ({
// //     name: 'Alice'
// // })
// // var y = () => ({
// //     name: 'Alice',
// //     location: 'Seattle'
// // })
// // x = y //ok
// // y = x //Error,because x() lacks a location property
// // 函数参数双向协变
// // 当比较函数参数类型时，只有当原函数参数能够赋值给目标函数或者反过来才能赋值成功，这是不稳定的，
// // 因为调用者可能传入了一个具有更精确类型信息，但是调用这个传入的函数的时候却使用了不那么精确的类型信息。
// // in fact 这极少会发生错误，并且能够实现javaScript里的常见模式。例如：
// enum EventType {
//     Mouse, Keyboard
// }
// interface Event {
//     timestamp: number
// }
// // interface MouseEvent extends Event {
// //     x: Number;
// //     y: number
// // }
// // interface Keyboard extends Event {
// //     keyCode: number
// // }
// // function listenEvent (eventType: EventType, handle: (n:Event) => void) {
// //     /**
// //      * 
// //      */
// // }
// // unsound, but useful and comon
// // listenEvent(EventType.Mouse, (e:MouseEvent) => console.log(e.x + ',' + e.y))
// // Undesirable alternatives in presence of soundness
// // listenEvent(EventType.Mouse, (e:Event) => console.log('123'))
// // 可选参数及剩余参数
// // 比较函数兼容性的时候，可选参数与必选参数是可呼唤的。源类型有上额外的可选参数不是错误，目标类型的可选参数
// // 在元类型里没有对应的参数也不是错误
// // 当一个函数有剩余参数时，它被当做无线可选参数
// // 这对于类型系统来说不稳定的，但运行时，
// // 这对于类型系统来说是不稳定的，单从运行角度来看，可选参数一般来说是不强调，因为对于大多数来说相当于传递了一些undefined
// // 有一个好的例子，常见的函数接收一个回调函数并用于程序员来说是可预见的参数但对类型系统说是不确定的参数来调用：
// function invokeLater(args: any[], calllback: (...args: any[]) => void) {
//     calllback(1, 2)
//     /** */
// }
// // unnsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2],(x?, y?) => console.log(x + ',' + y));
// // 函数重载
// // 对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。这确保了目标函数可以在所有函数可调用的地方调用。
// // 枚举
// // 枚举类型与数字类型兼容，并且与数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如
// enum Status { Ready, Waiting };
// enum Color { Red, Blue, Green };
// console.log(Status)
// // let status = Status.Ready;
// // status = Color.Green;  // Error
// // 类
// // 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。比较两个类类型的对象时，只有实例的成员
// // 会比较。静态成员和构造函数不在比较的范围内。
// class Animal {
//     feet: number;
//     constructor(name: string, numFeet: number) {}
// }
// class Size {
//     feet: number;
//     constructor(numFeet: number) {}
// }
// var z: Animal
// var s: Size
// z = s
// s = z
// console.log(z,s)
// interface Empty<T> {
// }
// let q: Empty<number>;
// let w: Empty<string>;
// q = w;  // OK, because y matches structure of x
// console.log(q,w)
// // 上面代码里，x和y是兼容的，因为它们的机构使用类型参数时并没有上面不同。把这个例子改变一个，增加一个成员，
// // 就能看出是如何工作的了；
// interface NotEmpty<T> {
//     data: T
// }
// let e: NotEmpty<string>
// let r: NotEmpty<number>
// // e = r // error, beause x and y are not compatible
// console.log(e, r)
// // 在这里，泛型类型在使用
// // 对于没制定泛型类型的泛型参数时，会把所有泛型参数当成any比较。然后用结果类型进行比较，就像上面第一个例子
// // 比如
// let identity = function<T>(x: T): T {
//     // ...
// }
// let reverse = function<U>(y: U): U {
//     // ...
// }
// identity =reverse //ok, beause (x: any) => any matches (y: any) => any
// // 高级主题
// // 子类型与赋值
// // 目前位置，我们使用了"兼容性",它在语言规范中没有定义。在ts里，有两种兼容性：子类型和赋值。它们的不同点在于，
// // 赋值扩展了子类型兼容性，增加了一些规则，允许和any来回赋值，一级enum和对应数字值之间的来回赋值。
// // 语言里的不同地方分别使用了它们之中的机制。实际上，类型兼容性是由赋值兼容性来控制的，
// // 即使在implements和extends语句也不例外。
