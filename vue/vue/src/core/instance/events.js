/* @flow */

import {
    tip,
    toArray,
    hyphenate,
    formatComponentName, 
    invokeWithErrorHandling
}  from '../util/index';
import { updateListeners } from '../vdom/helpers/index';

export function initEvents (vm: Component) {
    vm._events = Object.create(null);
    vm._hashHookEvent = false;
    // init parent attached events;
    const listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}


let target: any;

function add (event, fn) {
    target.$on(event, fn);
}


function remove (event, fn) {
    target.$off(event, fn);
}

function createOnceHandler (event, fn) {
    const _target = target;
    return function onceHandler () {
        const res = fn.apply(null, arguments);
        if (res !== null) {
            _target.$off(event, onceHandler);
        }
    }
}

export function updateComponentListeners (
    vm: Component,
    listeners: Object,
    oldListeners: ?Object
) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove, createOnceHandler, vm);
    target = undefined;
}


export function eventsMixin (Vue: Class<Component>) {
    const hookRE = /^hook:/;
    Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
        const vm: Component = this;
        if (Array.isArray(event)) {
            for (let i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
            }
        } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of hash loopup
            if (hookRE.test(event)) {
                vm._hashHookEvent = true;
            }
        }
    }
    return vm;
}