"use strict";
/**
 * 这篇文章描述了如何在TypeScript里使用命名空间
 * （之前叫做“内部模块”）来组织你的代码。
 * 就像我们在术语说明里提到的那样，“内部模块”现在叫做“命名空间”。
 *   另外，任何使用 module关键字来声明一个内部模块的地方
 * 都应该使用namespace关键字来替换。
 * 这就避免了让新的使用者被相似的名称所迷惑。
 *
 *
 * namespace 在ts 称为'外部模块' 命名空间 主要用于组织代码。 避免命名冲突
 * module 在 ts 称为'外部模块' 侧重代码的复用，一个模块里可能有多个命名空间
 */
exports.__esModule = true;
var A;
(function (A) {
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
    A.MinClass = MinClass;
})(A = exports.A || (exports.A = {}));
var B;
(function (B) {
    var a = "B";
})(B || (B = {}));
