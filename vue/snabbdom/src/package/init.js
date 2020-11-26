"use strict";
exports.__esModule = true;
exports.init = void 0;
var vnode_1 = require("./vnode");
var is = require("./is");
var htmldomapi_1 = require("./htmldomapi");
function isUndef(s) {
    return s === undefined;
}
function isDef(s) {
    return s !== undefined;
}
var emptyNode = vnode_1.vnode('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function init() {
    var api = htmldomapi_1.htmlDomApi;
    function createElm(vnode) {
        var i;
        var children = vnode.children;
        var sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // 原先有解析选择器的逻辑 eg: div.class 之类
            var tag = vnode.sel;
            var elm = api.createElement(tag);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch), before);
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var elmToMove;
        var before;
        // 新旧节点有一个遍历完，就结束
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            // 开始结束节点为空的话，就移动
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx];
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[-newEndIdx];
                /**
                 * 开始结束节点相同，位移
                 */
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, oldEndVnode);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
                /**
                 * 假设
                 * 旧节点 1 2 3
                 * 新节点 2 1
                 *
                 * 将旧节点 1 移动到 3 之后
                 * 旧节点变成 2 3 1，
                 * 然后继续位移
                 *
                 * 结束循环后 oldStartIdx = 2 endStartIdx = 2
                 * 删除 oldCh 中范围在 2 ~ 2 中间的，也就是 3
                 */
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
                /**
                 * 假设
                 * 旧节点 1 2 3
                 * 新节点 3 2
                 *
                 * 将结束旧节点 3 移动到 开始旧节点 1 之前
                 * 旧节点变成 3 1 2
                 * 然后继续位移
                 *
                 * 结束循环后 oldStartIdx = 0 endStartIdx = 0
                 * 删除 oldCh 中范围在 0 ~ 0 之间的，也就是 1
                 */
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // 如果新旧节点没有相同的
                api.insertBefore(parentElm, createElm(newStartVnode), oldStartVnode.elm);
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
            }
        }
    }
    function patchVnode(oldVnode, vnode) {
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) {
                    updateChildren(elm, oldCh, ch);
                }
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
            }
        }
        return vnode;
    };
}
exports.init = init;
