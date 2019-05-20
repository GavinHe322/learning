// type compatible
var x;
// y's inferred type is {name: string; location: string;}
var y = {
    name: 'Alice',
    location: "Seattle"
};
x = y;
console.log(x, y);
// 相对来讲，在比较原始类型和对象类型的时候是比较容易理解的，问题是如果判断这两个函数是兼容的。
var a = function (a) { return 0; };
var b = function (b, s) { return 0; };
b = a;
console.log(b, 'bbbbbbbbbbbbbbbbbb', a, 'aaaaaaaaaaaaaaaaa');
// a = b //error
// typeScript
// 第二个赋值错误，因为y有个必需的第二个参数，但是x并没有，所以不允许赋值。
// 你可能疑惑为什么允许忽略参数，list example y = x some。this reson is 忽略 额外的 参数在javascript里很常见。
// 例如，Array#forEach给回调函数传三个参数：数组元素，索引和整个数组。尽管如此。传入一个只是用第一个参数的回调函数也是很有用的：
var items = [1, 2, 3];
// Don't force these extra aruguments
items.forEach(function (item, index, array) {
    console.log(item);
});
// should be ok;
items.forEach(function (item) { return console.log(item); });
// 下面来看看如何处理返回值类型，窗机两个仅是返回值类型不同的函数:
// var a = () => ({
//     name: 'Alice'
// })
// var y = () => ({
//     name: 'Alice',
//     location: 'Seattle'
// })
// x = y //ok
// y = x //Error,because x() lacks a location property
// 函数参数双向协变
// 当比较函数参数类型时，只有当原函数参数能够赋值给目标函数或者反过来才能赋值成功，这是不稳定的，
// 因为调用者可能传入了一个具有更精确类型信息，但是调用这个传入的函数的时候却使用了不那么精确的类型信息。
// in fact 这极少会发生错误，并且能够实现javaScript里的常见模式。例如：
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
// interface MouseEvent extends Event {
//     x: Number;
//     y: number
// }
// interface Keyboard extends Event {
//     keyCode: number
// }
// function listenEvent (eventType: EventType, handle: (n:Event) => void) {
//     /**
//      * 
//      */
// }
// unsound, but useful and comon
// listenEvent(EventType.Mouse, (e:MouseEvent) => console.log(e.x + ',' + e.y))
// Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e:Event) => console.log('123'))
// 可选参数及剩余参数
// 比较函数兼容性的时候，可选参数与必选参数是可呼唤的。源类型有上额外的可选参数不是错误，目标类型的可选参数
// 在元类型里没有对应的参数也不是错误
// 当一个函数有剩余参数时，它被当做无线可选参数
// 这对于类型系统来说不稳定的，但运行时，
// 这对于类型系统来说是不稳定的，单从运行角度来看，可选参数一般来说是不强调，因为对于大多数来说相当于传递了一些undefined
// 有一个好的例子，常见的函数接收一个回调函数并用于程序员来说是可预见的参数但对类型系统说是不确定的参数来调用：
function invokeLater(args, calllback) {
    calllback(1, 2);
    /** */
}
// unnsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ',' + y); });
// 函数重载
// 对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。这确保了目标函数可以在所有函数可调用的地方调用。
// 枚举
// 枚举类型与数字类型兼容，并且与数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
console.log(Status);
// let status = Status.Ready;
// status = Color.Green;  // Error
// 类
// 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。比较两个类类型的对象时，只有实例的成员
// 会比较。静态成员和构造函数不在比较的范围内。
var Animal = /** @class */ (function () {
    function Animal(name, numFeet) {
    }
    return Animal;
}());
var Size = /** @class */ (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var z;
var s;
z = s;
s = z;
console.log(z, s);
var q;
var w;
q = w; // OK, because y matches structure of x
console.log(q, w);
var e;
var r;
// e = r // error, beause x and y are not compatible
console.log(e, r);
// 在这里，泛型类型在使用
// 对于没制定泛型类型的泛型参数时，会把所有泛型参数当成any比较。然后用结果类型进行比较，就像上面第一个例子
// 比如
var identity = function (x) {
    // ...
};
var reverse = function (y) {
    // ...
};
