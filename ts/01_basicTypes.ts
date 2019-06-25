// // basic Types

// // introduction

// // for programs to be useful, we need to be able to work with some of the simplest units of data;
// // numbers, strings, structures, boolean values, and the like, in typeScript, we support much the same
// // types as you would expect in js, with a convenient enumeration type thrown in to help things along


// // boolean

// // the most basic datatype the simple true/false, with js and ts call, a boolean value

// let idDone: boolean = false



// /**
//     * Number
//     As in JavaScript, all numbers in TypeScript are floating point values. 
//     These floating point numbers get the type number. 
//     In addition to hexadecimal and decimal literals, 
//     TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
//  */

// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;



// /**
//      *String
//     Another fundamental part of creating programs in JavaScript for 
//     webpages and servers alike is working with textual data. 
//     As in other languages, we use the type string to refer to these textual datatypes. 
//     Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
//  */

// let color: string = "blue";
// color = 'red';

// /**
//      You can also use template strings, which can span multiple lines and have embedded expressions. 
//     These strings are surrounded by the backtick/backquote (`) character, 
//     and embedded expressions are of the form ${ expr }. 
//  */

// let fullName: string = `Bob Bobbington`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${ fullName }.

// I'll be ${ age + 1 } years old next month.`;

// // This is equivalent to declaring sentence like so:


// // Array
// /**
//     TypeScript, like JavaScript, allows you to work with arrays of values. 
//     Array types can be written in one of two ways. 
//     In the first, you use the type of the elements followed by [] to denote an array of that element type:
//  */

// var list:number[] = [1, 2, 3];


// //  The second way uses a generic array type, Array<elemType>:

// var list: Array<number> = [1, 2, 3]

// // Tuple
// /**
//     Tuple types allow you to express an array where the type of a fixed number of elements is known, 
//     but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
//  */

// // Declare a tuple type
// var x: [string, number];
// // Initialize it
// x = ["hello", 10]; // OK
// // Initialize it incorrectly
// // x = [10, "hello"]; // Error 

// // When accessing an element with a known index, the correct type is retrieved:

// /**
//     console.log(x[0].substr(1)); // OK
//     console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//  */

// //  When accessing an element outside the set of known indices, a union type is used instead:

// // x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

// // console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// // x[6] = true; // Error, 'boolean' isn't 'string | number'


// // Union types are an advanced topic that we’ll cover in a later chapter.

// // Enum
// // A helpful addition to the standard set of datatypes from javascript is the enum, As in languages like C#,
// // an enum is a way of giving more friendly names to sets of numeric values.

// // enum Color {Red, Green, Blue}

// // let c: Color = Color.Green

// // 默认情况下， 从0 开始为元素编号，你也可以手动的指定成员的数值。例如，我们将上面的例子改成1 开始编号

// // enum Color {Red = 1, Green, Blue}

// // let c: Color = Color.Green

// // console.log(c)


// // 或者，全部都采用手动赋值：
// // enum Color {Red = 1, Green = 2, Blue = 4}
// // let c: Color = Color.Green


// // console.log(c)


// // 枚举类型提供的一个遍历是你可以由枚举的值得到它的名字。例如，我们知道数值为2， 
// // 但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

// enum Color {
//    Red = 1,
//    Green,
//    Blue
// }

// let ColorName: string = Color[2]

// console.log(ColorName)

// // we may need to describe the type of variables that we do not know when we are writing an application, these values
// // may come from dynamic content, e.g. from the user or 3rd party libraty, in these cases, we want to
// // opt-out of type checking and let the values pass throught compile-time checks, To do so, we label these with the
// // any type

// let notSure: any = 4
// notSure = 'maybe a string instead'

// // notSure.ifItExists(); //okay, ifItExists might exist at runtime

// // notSure.toFixed()

// let prettySure: Object = 4

// // prettySure.toFixed() //error: Property 'toFixed' doesn't exist on type 'Object'

// // 当你知道一部分数据的类型时，any类型也是有用的。比如，你有一个数组，它包含了不同的类型的数据：
// // var list: any[] = [1, true, 'free']

// // list[1] = 100

// /**
//    在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 
//    你可能认为 Object有相似的作用，就像它在其它语言中那样。 
//    但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
// */


// // void
// // 某种成都上来说，void 类型像是与any类型相反，他表示没有任何类型。

// function warnUser(): void {
//    console.log('this is my warning message')
// }

// // 声明一个void类型的变量没有声明大勇，因为你只能它赋予undefine 和nul；
// var unusable: void = undefined
// // var unusable: void = 1 //error
// console.log(unusable)


// // Null 和 undefined

// /**
//  * TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
//  * 和 void相似，它们的本身的类型用处不是很大：
//  */

//  var u: undefined = undefined

// var n: null = null

// console.log(undefined,null)

// /**
//  * 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 
//  * 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，
//  * 你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
//  */

// //  注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的。

// // Never

// // never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// // 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// // never类型是任何类型的子类型，也可以赋值给任何类型；
// // 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

// // 下面是一些返回never类型的函数：

// // 返回never的函数必须存在无法达到的终点

// function error(message: string): never {
//    throw new Error(message)
// }

// // 推断的返回值类型为never
// function fail(){
//    return error('Something failed')
// }

// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//    while (true) {
//       console.log(111)
//    }
// }

// // fail()


// // object 
// // object标示非原始类型，也就是number, string, boolean, symbol, null 或undefined 之外的类型。
// // 使用object类型，就可以更好的表示像Object.create这样的Api。例如：

// declare function create(o: object | null): void;

// // create({ prop: 0 }); // OK
// // create(null); // OK

// // create(42); // Error
// // create("string"); // Error
// // create(false); // Error
// // create(undefined); // Error

// // 类型断言

// // 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 
// // 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// /**
//  * 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
//  * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
//  * 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
//  */


// // 类型断言有两种形式。 其一是“尖括号”语法：

// var someValue: any = 'this is a string'

// var strLength: number = (<string>someValue).length

// // 另一个为as语法：

// var someValue: any = "this is a string"

// var strLength: number = (someValue as string).length 

// // 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；
// // 然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
// console.log(
//    someValue,
//    strLength
// )

// 总结 定义类型
var str: string = '124'

var num: number = 14

var bool: boolean = false

// 1. 定义数组
var numArray:number[] = [1,2,3]

var strArray:string[] = ['123', '124']

// 2. 定义数组
var array1: Array<number> = [1,23,4]
var array2: Array<string> = ["1","23","4"]

// 3. 定义数组
var array3: any[] = [1,2,3, '325']


console.log(
   str,
   num,
   bool,
   numArray,
   strArray,
   array1,
   array2
)

// 定义 元组类型

var tuple: [number, string] = [123, 'string']

console.log(tuple)

// 定义枚举 

// 比如 错误的状态码

enum Flag {
   success = 1,
   error = 0
}

var falg: Flag = Flag.success

console.log(falg);

enum Color {Red = 1, Green}


var c: Color = Color.Red
var g: Color = Color.Green  // 如果没有赋值 则返回下标
console.log(
   c,
   g
)

// 任意类型

// var box: any = document.getElementById("box")

// box.style.color = "red"


// null 和 undefined  其他（never 类型） 数据类型的类型

var num1: number | null | undefined

console.log(num1, 'num??')  //输入: undefined
// void 类型： 表示没有任何类型，一般用于方法没有返回值

function run(): void {
   console.log("i'm run !")
}

run()

function runString(): string {
   return "i'm running !"
}

console.log(runString())


// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// never类型是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

var a: never;

// a = 1 // error

// a = (() => {
//    throw new Error('这样就不会报错')
// }) ()