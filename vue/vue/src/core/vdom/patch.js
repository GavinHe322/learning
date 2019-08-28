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


 