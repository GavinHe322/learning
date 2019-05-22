// 枚举

// 使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。
// ts支持数字和基于字符串的枚举

// 数字枚举
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }

// // 
// console.log(Direction)

// 我们定义了一个数字枚举，up使用初始值为1，其余的成员会从1开始自增。
// 换句话说 Direction.up的值为1，Down为2，Left为3，Right4.

// 我们还可以完全不适用初始化器：
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction)

// 我们也可以不适用初始值，down的值为1等等。当我们不在乎成员的值的时候，这种自增的行为是很有用处的，但是要注意每个枚举成员的值都是不同的


// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
enum Respose {
    No = 0,
    Yes = 1
}

function respose(recipient: string, message: Respose): void {
    console.log(recipient, message)
}

respose('Princess Caroline', Respose.Yes)


// 数字枚举可以被混入到计算过的敞亮成员（如下所示）。简短地说，不带初始化的枚举或者被放在第一的位置，
// 或者被放在使用了数字敞亮或其他常量初始化了的枚举后面。换句话说，下面的情况是不被允许的：
// function getSomeValue () {}
// enum E {
//     A = getSomeValue(),
//     B, //error 'a' is not constant-initaializedm, so 'b' needs an initializer
// }


// 字符串枚举

// 字符串枚举的概念很简单，但是有细微的运行时的差别。在一个字符串枚举里，
// 每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化

enum Directionq {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(Directionq)

// 字符串没有自增，字符串枚举可以很好的序列化。换句话说，如果你正在调试并且必须读一个数字枚举的运行时的值，
// 这个值通常是很难的-它并不能表达有用的信息（尽管反向映射会有所帮组），
// 字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字

// 异构枚举（heterogeneous enums)
// 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做
enum BooleanLikeHeteroenneousEnum {
    No = 0,
    Yes = 'yes'
}
console.log(BooleanLikeHeteroenneousEnum)

// 除非你真的想要利用js运行时的ing为，否则不建议这么做

// 计算的和常亮成员
// 每个枚举成员都带有一个值，它可以是 常亮或计算出来的。当满足如下条件时，枚举成员被当作是常亮

// 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
// E.X is constant
enum E { X }

console.log(E)

// 它不带有初始化器且之前的枚举成员是一个 数字常亮。这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。

// All enum members in 'E1' and "E2" are constant.

enum E1 {
    X,
    Y,
    Z
}

enum E2 {
    A = 1,
    B,
    C
}

console.log(E1, E2)

/**
 * 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 
 * 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
    一个枚举表达式字面量（主要是字符串字面量或数字字面量）
    一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
    带括号的常量枚举表达式
    一元运算符 +, -, ~其中之一应用在了常量枚举表达式
    常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
 * 
 */

//  所有其它情况的枚举成员被当做是需要计算得出来的值。
enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWwite = Read | Write,
    G = '123'.length
}

console.log(FileAccess)


// 联合枚举与枚举成员的类型

// 存在一种特殊的非计算的常亮枚举成员的子集：字面量枚举成员。字面量枚举成员是值不带有初始值的常亮枚举成员，
// 或者是值被初始化为
// 任何字符串字面（例如：'foo', 'bar', 'baz'）
// 任何数字字面量（例如：1,100）
// 应用了一元-符号的数字字面量（例如：-1， -100）

// 当所有枚举成员都拥有字面量枚举值时，他就带有了一种特殊的语义

// 首先，枚举成员成为了类型！ 例如，我们可以说某些成员，只能是枚举成员的值。

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle
    radius: number
}

interface Square {
    kind: ShapeKind.Square
    sideLength: number
}

// let e: Circle = {
//     kind: ShapeKind.Square,
//     radius: 100
// }


/**
 * 另一个变化是枚举类型本身变成了每个枚举成员的 联合。 
 * 虽然我们还没有讨论[联合类型](./Advanced Types.md#union-types)，但你只要知道通过联合枚举，类型系统能够利用这样一个事实，它可以知道枚举里的值的集合。 因此，TypeScript能够捕获在比较值的时候犯的愚蠢的错误。 例如：
 */


//  enum E {
//      Foo,
//      Bar
//  }

//  function f(x: E) {
//      if (x !== E.Foo || x !== E.Bar) {
//          console.log(123)
//      }
//  }

//  这个例子里，我们先检查x是否不是E.Foo。如果通过了这个检查，然后 || 会发生段落效果，if语句体力的内容
// 会被执行。然而，这个检查没有通过，那么x则只能为E.Foo， 因此没理由再去检查它是否为 E.Bar

// 运行时的枚举

enum E {
    X, Y, Z
}
// can actually be passed around to functions

function f(obj: {X: Number}) {
    return obj.X
}

// Works, since 'e' has a property named 'x' which is a number.
f(E)


// 生成的代码中，枚举类型被编译成一个对象，它包含了正想映射（name-> value) 和反向映射（value -> name）。
// 引用枚举成员总会