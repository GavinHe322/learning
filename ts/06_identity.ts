/**
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，
 * 这在创建大型系统时为你提供了十分灵活的功能。
 */

 /**
  * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，
  * 一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
  */

//   主要解决 类、接口、方法的复用性。以及对不确定数据类型的支持


// 只能返回 string 类型的数据

function getData(value: string): string {
    return value
}
// 如果使用 any 就等于放弃了类型检查
function getVal2(value: any): any {
    return value
}

// 需求： 传入什么 返回什么

function getData3<T> (value: T):T {
    return value
}

console.log(
    getData3<string>('泛型')
)



// 同时返回 任何类型

