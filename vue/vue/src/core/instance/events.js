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


export