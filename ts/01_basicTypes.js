// basic Types
// introduction
// for programs to be useful, we need to be able to work with some of the simplest units of data;
// numbers, strings, structures, boolean values, and the like, in typeScript, we support much the same
// types as you would expect in js, with a convenient enumeration type thrown in to help things along
// boolean
// the most basic datatype the simple true/false, with js and ts call, a boolean value
var idDone = false;
/**
    * Number
    As in JavaScript, all numbers in TypeScript are floating point values.
    These floating point numbers get the type number.
    In addition to hexadecimal and decimal literals,
    TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
 */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
/**
     *String
    Another fundamental part of creating programs in JavaScript for
    webpages and servers alike is working with textual data.
    As in other languages, we use the type string to refer to these textual datatypes.
    Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
 */
var color = "blue";
color = 'red';
/**
     You can also use template strings, which can span multiple lines and have embedded expressions.
    These strings are surrounded by the backtick/backquote (`) character,
    and embedded expressions are of the form ${ expr }.
 */
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// This is equivalent to declaring sentence like so:
// Array
/**
    TypeScript, like JavaScript, allows you to work with arrays of values.
    Array types can be written in one of two ways.
    In the first, you use the type of the elements followed by [] to denote an array of that element type:
 */
var list = [1, 2, 3];
//  The second way uses a generic array type, Array<elemType>:
var list = [1, 2, 3];
// Tuple
/**
    Tuple types allow you to express an array where the type of a fixed number of elements is known,
    but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
 */
// Declare a tuple type
var x;
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
