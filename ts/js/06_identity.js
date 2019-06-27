"use strict";
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
function getData(value) {
    return value;
}
// 如果使用 any 就等于放弃了类型检查
function getVal2(value) {
    return value;
}
// 需求： 传入什么 返回什么
function getData3(value) {
    return value;
}
console.log(getData3('泛型'));
// 泛型类 比如有个最小堆算法， 需要通知支持str num 两种类型， 通过泛型实现
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        return Math.min.apply(this, this.list);
    };
    return MinClass;
}());
var min = new MinClass();
min.add(11);
min.add(12);
min.add(13);
min.add(10);
console.log(min.min());
var MinClass2 = /** @class */ (function () {
    function MinClass2() {
        this.list = [];
    }
    MinClass2.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass2.prototype.min = function () {
        return Math.min.apply(this, this.list);
    };
    return MinClass2;
}());
var min2 = new MinClass2();
var min3 = new MinClass2();
min2.add(2);
min2.add(32);
min2.add(0);
min3.add('b');
min3.add('a');
min3.add('c');
console.log(min2.min(), min3.min());
var fn2 = function (string) {
    return string;
};
console.log(fn2('string fn2'));
function getData4(value) {
    return value;
}
var fn3 = getData4;
console.log(fn3('fn3 通过赋值 函数 输出'));
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        console.log(info, id, 'update');
        return true;
    };
    return MysqlDB;
}());
var User = /** @class */ (function () {
    function User(parms) {
        this.name = parms.name;
        this.pwd = parms.pwd;
    }
    return User;
}());
var user = new User({ name: 'gavin', pwd: '124' });
console.log(user);
var DB = new MysqlDB();
DB.add(user);
DB.update(user, 1);
