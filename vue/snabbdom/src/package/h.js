"use strict";
exports.__esModule = true;
exports.h = void 0;
var vnode_1 = require("./vnode");
var is = require("./is");
function h(sel, b, c) {
    var data = {};
    var children;
    var text;
    var i;
    if (c !== undefined) {
        if (b !== null) {
            data = b;
        }
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined && b !== null) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (children !== undefined) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i])) {
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i], undefined);
            }
        }
    }
    // 原逻辑这里有个处理 SVG 标签的
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
