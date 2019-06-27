"use strict";
/**
 * 关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。
 * “内部模块”现在称做“命名空间”。
 * “外部模块”现在则简称为“模块”，这是为了与 ECMAScript 2015里的术语保持一致，
 * (也就是说 module X { 相当于现在推荐的写法 namespace X {)。
 *
 * es6: export import
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (foot) {
        return this.name + 'like' + foot;
    };
    return Animal;
}());
exports.default = {
    Animal: Animal
};
