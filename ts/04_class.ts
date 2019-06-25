
/**
 * 继承
 * 多态
 * 封装
 */
// class 写法继承
// class Person {
//     name: string
//     constructor(name: string) { //构造函数 
//         this.name = name
//     }

//     getName():string {
//         return this.name
//     }
//     setName(name: string) {
//         this.name = name
//     }
// }


// var p = new Person('Gavin')
// console.log(p.getName())
// p.setName('Lily')
// console.log(p.getName())


// 2. ts 中实现继承 extends、 super

// class Child extends Person {
//     constructor(name: string) {
//         super(name)
//     }
// }

// var child = new Child('childName')

// console.log(child)
// console.log(
//     child.getName()
// )


// 类里面的修饰器 ts 里面定义属性的时候给我们提供了 三种修饰符

/**
 *  public    共有    在类里面 子类都能访问
 *  protected 保护类型 在类里面、子类都可以访问，在类外部没法访问
 *  private   私有属性 在类里面可以访问，子类外部都不能访问
 * 
 * 属性如果不加修饰符 默认为 public
 */


class Person {
    public name: string
    protected age: number
    constructor(name: string, age: number) { //构造函数 
        this.name = name
        this.age = age
    }

    getName():string {
        return this.name
    }
    getAge():number {
        return this.age
    }
    setName(name: string) {
        this.name = name
    }
}

var child = new Person('childName', 15)

console.log(child)
console.log(
    child.getName()
)
console.log(
    child.getAge()
)

console.log(
    child.name,
    // child.age
)