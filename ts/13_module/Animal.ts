/**
 * 关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。 
 * “内部模块”现在称做“命名空间”。 
 * “外部模块”现在则简称为“模块”，这是为了与 ECMAScript 2015里的术语保持一致，
 * (也就是说 module X { 相当于现在推荐的写法 namespace X {)。
 * 
 * es6: export import
 */

 class Animal {
     name: string
     constructor(name: string) {
         this.name = name
     }
     eat(foot: string): string {
        return this.name + 'like' + foot
     }
 }


 export default {
    Animal
 }