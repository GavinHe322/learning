/**
 * Virtual Dom patching algorithm based on Snabbdom by 
 * Simon Firis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com
 * 
 * modified by Evan You (@yyx990803);
 * 
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

 import VNode, { cloneVNode } from './vnode';
 import config from '../config';
 import { SSR_ATTR } from 'shared/constants';
 import { registerRef } from '../observer/traverse';
 import { traverse } from '../observer/traverse';
 import { activeInstance } from '../instance/lifecycle';
 import { isTextInputTpye } from 'web/util/element';

 import {
     warn,
     isDef,
     isUndef,
     isTrue,
     makeMap,
     isRegExp,
     isPrmitive
 } from '../util/index';

 export const emptyNode = new VNode('', {} ,[]);

 const hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

 function sameVnode (a, b) {
     return (
         a.key === b.key && (
             (
                 a.tag === b.tag &&
                 a.isComment === b.isComment &&
                 isDef(a.data) === isDef(b.data) &&
                 sameInputType(a, b)
             ) || (
                 isTrue(a.isAsyncPlaceholder) &&
                 a.asyncFactory === b.asyncFactory &&
                 isUndef(b.asyncFactory.error)
             )
         )
     )
 }

 function sameInputType (a, b) {
     if (a.tag !== 'input') return true;
     let i;
     const tpyeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
     const typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
     return tpyeA == typeB || isTextInputTpye(tpyeA) && isTextInputTpye(typeB);
 }


 function createKeyToOldIdx (children, beginIdx, endIdx) {
     let i, key;
     const map = {};
     for (i = beginIdx; i < endIdx; ++i) {
         key = children[i].key;
         if (isDef(key)) map[key] = i;
     }
     return map;
 }

 export function createPatchFunction (backend) {
     let i, j;
     const cbs = {};

     const { modules, nodeOps } = backend;

     for (i = 0; i < hooks.length; ++i) {
         cbs[hooks[i]] = [];
         for (j = 0; j < modules.length; ++j) {
             cbs[hooks[i]].push(modules[j][hooks[i]])
         }
     }

     function emptyNodeAt (elm) {
         return new VNode(nodeOps, tagName(elm).toLowerCase(), {}, [], undefined, elm);
     }

     function createEmCb (childElm, listeners) {
         function remove () {
             if (--remove.listeners === 0) {
                 removeNode(childElm);
             }
         }
         return remove;
     }

     function isUnknownElement (vnode, inVPre) {
         return (
             !inVPre &&
             !vnode.ns &&
             !(
                 config.ignoredElements.length &&
                 config.ignoredElements.some(ignore => {
                     return isRegExp(ignore)
                        ? ignore.test(vnode.tag)
                        : ignore === vnode.tag
                 })
             )&&
             config.isUnknownElement(vnode.tag)
         )
     }

     let creatingElmInVPre = 0;

     function createElm (
         vnode,
         issertedVnodeQueue,
         parentElm,
         refElm,
         nestead,
         ownerArray,
         index
     ) {
         if (isDef(vnode.elm) && isDef(ownerArray)) {
            //  this vnode wat used in  a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode);
         }

         vnode.isRootInsert = !nestead // for transition enter check
         if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
             return;
         }
     }

     const data = vnode.data;
     const children = vnode.children;
     const tag = vnode.tag;
     if (isDef(tag)) {
         if (process.env.NODE_ENV !== 'production') {
             if (data && data.pre) {
                 creatingElmInVPre++
             }
             if (isUnknownElement(vnode, creatingElmInVPre)) {
                 warn(
                     `Unknown custom element: <${tag}> - did you `+
                     `register the component correctly? For recursive components, ` +
                     `meke sure to provide the "name" option.`,
                     vnode.context
                 );
             }
         }

         vnode.elm = vnode.ns
            ? nodeOps.createElementNS(vnode.ns, tag)
            : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        if (__WEEX__) {
            // in Weex, the default insertion order is parent-first.
            // List items can be optimized to use children-first insertion
            // with append="tree".
            const appendAsTree = isDef(data) && isTrue(data.appendAsTree);
            if (!appendAsTree) {
                if (isDef(data)) {
                    invokeCreateHooks(vnode, insertedVnodeQueue)
                }
                insert(parentElm, vnode.elm, refElm);
            }
            createChildren(vnode, children, insertedVnodeQueue);
            if (appendAsTree) {
                if(isDef(data)) {
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                }
                insert(parentElm, vnode.elm, refElm);
            }
        } else {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
        }

        if (process.env.NODE_ENV !== 'production' && data && data.pre) {
            creatingElmInVPre--
        }
     } else if (isTrue(vnode.isComment)) {
         vnode.elm = nodeOps.createComponent(vnode.text);
         insert(parentElm, vnode.elm, refElm);
     } else {
         vnode.elm = nodeOps.createTextNode(vnode.text);
         insert(parentElm, vnode.elm, refElm);
     }
 }

 function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
     let i = vnode.data;
     if (isDef(i)) {
         const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
         if (isDef(i = i.hook) && isDef(i = i.init)) {
             i(vnode, false /* hydrating */)
         }
        //  after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            insert(parentElm, vnode.elm, refElm);
            if (isTrue(isReactivated)) {
                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true;
        }
     }
 }


 function initComponent (vnode, insertedVnodeQueue) {
     if (isDef(vnode, data.pendingInsert)) {
         insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
         vnode.data.pendingInsert = null;
     }
     vnode.elm = vnode.componentInstance.$el;
     if (isPatchable(vnode)) {
         invokeCreateHooks(vnode, insertedVnodeQueue);
         setScope(vnode);
     } else {
        //  empty component root.
        // skip all element-related modules except for ref (#3455);
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
     }
 }


function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    let i;
    // hack for #433: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to invole module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    let innerNode = vnode;
    while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
            for (i = 0; i < cbs.activate.length; ++i) {
                cbs.activate[i](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break
        }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
}

function insert (parent, elm, ref) {
    if (isDef(parent)) {
        if (isDef(ref)) {
            if (nodeOps.parentNode(ref) === parent) {
                nodeOps.insertBefore(parent, elm, ref);
            }
        } else {
            nodeOps.appendChild(parent, elm);
        }
    }
}

function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
        if (process.env.NODE_ENV !== 'production') {
            checkDuplicateKeys(children);
        }
        for (let i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null ,true, children, i);
        }
    } else if (isPrmitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
}


function isPatchable (vnode) {
    while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.config);
}

function isPatchable (vnode) {
    while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
}

function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (let i = 0; i < cbs.create.length; ++i) {
        cbs.create[i](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
        if (isDef(i.create)) i.create(emptyNode, vnode);
        if (isDef(i.insert)) insertedVnodeQueue.push(vnode);
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
        let i;
        if (isDef(i = vnode.fnScopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
        } else {
            let ancestor = vnode;
            while (ancestor) {
                if (isDef(i = ancestor.centext) && isDef(i = i.$options._scopeId)) {
                    nodeOps.setStyleScope(vnode.elm, i);
                }
                ancestor = ancestor.parent;
            }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef(i = activeInstance) &&
            i !== vnode.context &&
            i !== vnode.fnContext &&
            isDef(i = i.$options._scopeId)
        ) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
    }

    function invokeDestoryHook (vnode) {
        let i, j;
        const data = vnode.data;
        if(isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destory)) i(vnode);
            for (i = 0; i < cbs.destory.length; ++i) cbs.destory[i](vnode);
        }
        if (isDef(i = vnode.children)) {
            for (j = 0; j < vnode.children.length; ++j) {
                invokeDestoryHook(vnode.children[j]);
            }
        }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            const ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestoryHook(ch);
                } else { // Text node
                    removeNode(ch.elm);
                }
            }
        }
    }
}



