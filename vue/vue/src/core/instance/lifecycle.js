/* @flow */

import config from '../config';
import Watcher from '../observer/watcher';
import { mark, measure } from '../util/perf';
import { createEmptyNode } from '../vdom/vnode';
import { updateComponentListeners } from './events';
import { resolveSlots } from './render-helpers/resolve-slots';
import { toggleObserving } from '../observer/index';
import { pushTarget, popTarget } from '../observer/dep';


import {
    warn,
    noop,
    remove,
    emptyObject,
    validateProp,
    invokeWithErrorHandling
} from '../util/index';

export let activeInstance: any = null;
export let isUpdatingChildComponent: boolean =false;


export function setActiveInstance(vm: Comment) {
    const prevActiveInstance = activeInstance;
    activeInstance = vm;
    return () => {
        activeInstance = prevActiveInstance;
    }
}


export function initLifecycle (vm: Component) {
    const options = vm.$options;
    // 定位第一个非顽固父对象
    // locate first non-obstract parent
    let parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;t
}

export function lifecycleMixin (Vue: Class<Component>) {
    Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
        const vm: Component = this;
        const prevEl = vm.$el;
        const prevVnode = vm._vnode;
        const restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__path__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        } else {
            // update
            vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
            prevEl.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
    }

    Vue.prototype.$forceUpdate = function () {
        const vm: Component = this;
        if (vm._watcher) {
            vm._watcher.update();
        }
    }

    Vue.prototype.$destroy = function () {
        const vm: Component = this;
        if (vm._isBeingDestroyed) {
            return;
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        const parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove(parent.$children, vm);
        }
        // teardown watchers
        if (vm._watcher) {
            vm._watcher.teardown();
        }
        let i = vm._watcher.length;
        while (i--) {
            vm._watcher[i].teardown();
        }
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
            vm._data_.__ob__.vmCount--
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook(vm, 'destroyed');
        // turn off all instance insteners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
            vm.$el.__vue__ = null;
        }
        // release circular reference (#6759);
        if (vm.$vnode) {
            vm.$vnode.parent = null;
        }
    }
}