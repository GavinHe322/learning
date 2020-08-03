// 高级类型

// 交叉类型

function extend<T, U> (first: T, second: U): T & U {
  let result = <T & U>{ }

  for (let id in first) {
    (<any>result[id]) = (<any>first[id])
  }

  for (let id in second) {
    (<any>result[id]) = (<any>second[id])
  }

  return result
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(msg?: string): void | string
}

class ConsoleLogger implements Loggable {
  log(msg: string) {
    console.log(this)
    console.log(msg)
    return msg
  }
}

var jim = extend(new Person("JIM"), new ConsoleLogger())

var n = jim.name

jim.log(n)


function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 类型保护和类型断言

function f(sn: string | null): string {
  return sn || 'default'
}

function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name?.charAt(0) + '. the' + epithet
  }
  name = name || 'bod'
  return postfix('great')
}

console.log(broken('broken'))

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') return n

  return n()
}

console.log(getName('123'))
console.log(getName(() => '456'))


// 索引访问操作符
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

interface Person2 {
  name: string;
  age: number;
}
let person: Person2 = {
  name: 'name1',
  age: 10
}

let name2: string = getProperty(person, 'name')

console.log(name2)

// 索引类型和字符串索引签名
interface Map<T> {
  [key: string]: T
}
let keys: keyof Map<number>
let value: Map<number>['foo']

// console.log(keys, value)

// 映射类型
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P]
// }

// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }

// // type PersonPartial = Partial<Person>
// // type ReadonlyPerson = Readonly<Person>

// type Proxy<T> = {
//   get(): T;
//   set(value: T): void;
// }


// 预定义的条件类型

/**
 * Exclude<T, U> -- 从 T 中剔除可以赋值给 U 的类型
 * Extract<T, U> -- 提取 T 中可以赋值给 U 的类型
 * NonNullable<T> -- 从 T 中剔除 null 和 undefined
 * ReturnType<T> -- 获取函数返回值类型
 * InstanceType<T> -- 获取构造函数类型的实例类型
 */

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
const t00: T00 = 'b'
console.log(t00)

type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"
const t01: T01 = 'a'
console.log(t01)

type T02 = Exclude<string | number | (() => void), Function>
const t02: T02 = 2

type T03 = Extract<string | number | (() => void), Function>
function fun(): void {
}
const t03: T03 = fun

type T04 = NonNullable<string | number | undefined>
const t04: Array<T04> = ['1', '1', 2]
console.log(t04)

function returnType(): string {
  return 'string??'
}
type T05 = ReturnType<typeof returnType>
const t05: T05 = 'string'
console.log(t05)

class C {
  x = 0;
  y = 0;
}
type T06 = InstanceType<typeof C>
const t06: T06 = new C()
console.log(t06)