// basic Types

// introduction

// for programs to be useful, we need to be able to work with some of the simplest units of data;
// numbers, strings, structures, boolean values, and the like, in typeScript, we support much the same
// types as you would expect in js, with a convenient enumeration type thrown in to help things along


// boolean

// the most basic datatype the simple true/false, with js and ts call, a boolean value

let idDone: boolean = false



/**
    * Number
    As in JavaScript, all numbers in TypeScript are floating point values. 
    These floating point numbers get the type number. 
    In addition to hexadecimal and decimal literals, 
    TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
 */

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;



/**
     *String
    Another fundamental part of creating programs in JavaScript for 
    webpages and servers alike is working with textual data. 
    As in other languages, we use the type string to refer to these textual datatypes. 
    Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
 */

let color: string = "blue";
color = 'red';

/**
     You can also use template strings, which can span multiple lines and have embedded expressions. 
    These strings are surrounded by the backtick/backquote (`) character, 
    and embedded expressions are of the form ${ expr }. 
 */

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

// This is equivalent to declaring sentence like so:


// Array
/**
    TypeScript, like JavaScript, allows you to work with arrays of values. 
    Array types can be written in one of two ways. 
    In the first, you use the type of the elements followed by [] to denote an array of that element type:
 */

var list:number[] = [1, 2, 3];


//  The second way uses a generic array type, Array<elemType>:

var list: Array<number> = [1, 2, 3]

// Tuple
/**
    Tuple types allow you to express an array where the type of a fixed number of elements is known, 
    but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
 */

// Declare a tuple type
var x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error 

// When accessing an element with a known index, the correct type is retrieved:

/**
    console.log(x[0].substr(1)); // OK
    console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
 */

//  When accessing an element outside the set of known indices, a union type is used instead:

// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'


// Union types are an advanced topic that we’ll cover in a later chapter.

// Enum
// A helpful addition to the standard set of datatypes from javascript is the enum, As in languages like C#,
// an enum is a way of giving more friendly names to sets of numeric values.

// enum Color {Red, Green, Blue}

// let c: Color = Color.Green

// 默认情况下， 从0 开始为元素编号，你也可以手动的指定成员的数值。例如，我们将上面的例子改成1 开始编号

// enum Color {Red = 1, Green, Blue}

// let c: Color = Color.Green

// console.log(c)


// 或者，全部都采用手动赋值：
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green


// console.log(c)


// 枚举类型提供的一个遍历是你可以由枚举的值得到它的名字。例如，我们知道数值为2， 
// 但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

enum Color {
   Red = 1,
   Green,
   Blue
}

let ColorName: string = Color[2]

console.log(ColorName)

// we may need to describe the type of variables that we do not know when we are writing an application, these values
// may come from dynamic content, e.g. from the user or 3rd party libraty, in these cases, we want to
// opt-out of type checking and let the values pass throught compile-time checks, To do so, we label these with the
// any type

let notSure: any = 4
notSure = 'maybe a string instead'
