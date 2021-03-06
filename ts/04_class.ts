
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


// class Person {
//     public name: string
//     protected age: number
//     constructor(name: string, age: number) { //构造函数 
//         this.name = name
//         this.age = age
//     }

//     getName():string {
//         return this.name
//     }
//     getAge():number {
//         return this.age
//     }
//     setName(name: string) {
//         this.name = name
//     }
// }

// var child = new Person('childName', 15)

// console.log(child)
// console.log(
//     child.getName()
// )
// console.log(
//     child.getAge()
// )

// console.log(
//     child.name,
//     // child.age
// )


// 静态方法 / 实例方法
/**
 * 静态方法是放在 构造函数 中的， 无需创建子类就能访问
 * 实例方法是放在 原型 中， 需要实例一个对象才能调用
 */
class Person {
    public name: string;
    static age: number =  124;
    constructor(name: string) {
        this.name = name
    }
    // 实例方法
    getName() {
        console.log(this.name)
    }

    static print() {
        // console.log(`print ${this.name}`)
        // 只能访问静态属性
        console.log(`print ${this.age}`)
    }
}

Person.print()




// ts中的抽象类， 它是提供其他类继承的基类，不能直接被实例化。
// 用 abstract 关键字定义抽象类和抽象发放，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

// abstract 抽象方法只能放在抽象类里面

// 标准化  就定义了  你子类就要创建， 不然就让你报错
abstract class hahaha{
    abstract eat():any;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
// var animal = new hahaha()  //错误写法

class Dog extends hahaha {
    // 抽象类的子类必须实现父类的抽象方法
    eat() {
        console.log(this.name, '吃狗粮')
    }
}

var dog = new Dog('dog')

dog.eat()