/* @flow */

import {
    warn,
    nextTick,
    emptyObject,
    handleObject,
    handleError,
    defineReactive
} from '../util/index';

import { createElement } from '../vdom/create-element';
import { installRenderHelpers } from './render-helpers/index';
import { resolveSlots } from './render-helpers/resolve-slots';
import VNode, { createEmptyVNode } from '../vdom/vnode';

import { isUpdatingChildComponent } from './lifecycle';

export function initReader (vm: Component) {
    vm._vnode = null; // the root of the child tree;
    vm._staticTrees = null // v-once cached trees;
    const options = vm.$options;
    const parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree;
    const renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize;
    // internal version is used by render functions compiled from templates;
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);

    // $attrs & $listeners are exposed for easier HOC creation.
    const parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, () => {
            !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm)
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, () => {
            !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm)
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, () => {
            !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm)
        }, true);
    } else {
        defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
    }
}

export let currentReaderingInstance: Component || null = null;

