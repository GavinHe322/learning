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

/**
 * 
 * @param value 
 * 泛型的定义
 * 泛型函数
 * 泛型类
 * 泛型接口
 */


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


// 泛型类 比如有个最小堆算法， 需要通知支持str num 两种类型， 通过泛型实现

class MinClass {
    public list: number[] = []
    add(num: number) {
        this.list.push(num)
    }
    min() {
        return Math.min.apply(this, this.list)
    }
}

var min = new MinClass()

min.add(11)
min.add(12)
min.add(13)
min.add(10)

console.log(
    min.min()
)

class MinClass2<T> {
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value)
    }
    min():T {
        return Math.min.apply(this, this.list)
    }
}

var min2 = new MinClass2<number>()
var min3 = new MinClass2<string>()

min2.add(2)
min2.add(32)
min2.add(0)

min3.add('b')
min3.add('a')
min3.add('c')

console.log(
    min2.min(),
    min3.min()
)


// 泛型接口

interface Config {
    (value1: string, value2: string): string
}


var fn1: Config = function(value1: string, value2: string): string {
        return value1 + value2
}

console.log(
    fn1('账号', '很好')
)

// 第一种
interface ConfigFn {
    <T>(value:T): T
}

var fn2: ConfigFn = function<T>(string:T): T {
    return string
}
console.log(
    fn2<string>('string fn2')
)

// 第二种

interface ConfigFn3 <T> {
    (value: T): T;
}

function getData4<T> (value: T): T {
    return value
}


var fn3: ConfigFn3<string> = getData4
console.log(
    fn3('fn3 通过赋值 函数 输出')
)


class MysqlDB<T> {
    add(info:T): boolean {
        console.log(info)
        return true
    }
    update(info:T, id: number ): boolean {
        console.log(info, id, 'update')
        return true
    }
}

class User {
    name: string | undefined
    pwd: string | undefined
    constructor(
        parms: {
            name: string | undefined,
            pwd: string | undefined
        }
    ) {
        this.name = parms.name
        this.pwd = parms.pwd
    }
}

var user = new User(
    {name:'gavin',pwd: '124'}
)

console.log(user)

var DB = new MysqlDB<User>()

DB.add(user)

DB.update(user, 1)