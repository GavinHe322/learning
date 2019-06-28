/**
 *  decorator: 是一种特殊类型的声明。 它能够被附加到类声明， 方法， 属性或参数上， 可以修改类的行为。
 * 通俗的将装饰器就是一种方法， 可以注入到类， 方法，属性参数上来拓展类、属性、方法。参数的功能。
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
 * 装饰器是过去几年中 js 最大的成就之一， 意识 es7 标准之一
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  1. 类装饰器
// function logClass(params: any): void {
//     console.log(params)
//     params.prototype.apiUrl = 'xxxx'
// }
// @logClass
// class HttpClient{
//     constructor() {
//     }
//     getData() {
//     }
// }
// var http: any = new HttpClient()
// console.log(http.apiUrl)
// 2. 类装饰器 (传参)
// function logClass(params: string) {
//     return function( target: any) {
//         console.log(
//             target, 'target'
//         )
//         console.log(
//             params, 'params'
//         )
//         target.prototype.apiUrl = params
//     }
// }
// @logClass('hello decorators')
// class HttpClient{
//     constructor() {
//     }
//     getData() {
//     }
// }
// var http: any = new HttpClient()
// console.log(http.apiUrl, 'apiUrl')
// 3. 修饰器 重载构造函数
// function decorators1(target: any) {
//     console.log(target)
//     return class extends target {
//         apiUrl: any = '修改后的 apiUrl'
//         getUrl() {
//             console.log(this.apiUrl + 'decorator')
//         }
//     }
// }
// @decorators1
// class Http {
//     public apiUrl: string | undefined
//     constructor() {
//         this.apiUrl = 'apiUrl'
//     }
//     getUrl() {
//         console.log(this.apiUrl)
//     }
// }
// var http = new Http()
// http.getUrl()
// 4. 属性装饰器
// 类装饰器
// function decorators1(params: any) {
//     return function(target: any) {
//         console.log(target)
//         console.log(params)
//     }
// }
// // 属性装饰器
// function logProperty(params: any) {
//     return function (target: any, attr: any) {
//         console.log(target)
//         console.log(attr)
//         target[attr] = params
//     }
// }
// // @decorators1('传参')
// class Http {
//     @logProperty('logProperty')
//     public apiUrl: string | undefined
//     constructor() {
//         // this.apiUrl = 'apiUrl'
//     }
//     getUrl() {
//         console.log(this.apiUrl)
//     }
// }
// var http = new Http()
// http.getUrl()
// 5. 方法修饰器
/**
 * 方法修饰器会在运行时传入系列三个参数
 *  1. 对于静态成员来说是类的构造函数，对于实例成员是类的远行对象。
 *  2. 成员的名字
 *  3. 成员的属性描述符。
 */
function get(params) {
    return function (target, methodName, desc) {
        console.log(params, 'parm', target, 'target', methodName, 'methodName', desc, 'desc');
        target.apiUrl = 'get ---> apiUrl';
        target.run = function () {
            console.log('get ---> run');
        };
    };
}
var Http = /** @class */ (function () {
    function Http() {
        // this.apiUrl = 'contructor apiUrl'
    }
    Http.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    __decorate([
        get('https://www.baidu.com')
    ], Http.prototype, "getData");
    return Http;
}());
var http = new Http();
console.log(http.apiUrl);
http.run();
