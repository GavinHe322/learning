/** @flow */

import config from '../config';
import Watcher from '../observer/watcher';
import Dep, { pushTarget, popTarget } from '../observer/dep';
import { isUpdatingChildComponent } from './lifecycle';

import {
    set,
    del,
    observe,
    defineReactive,
    toggleObserving    
} from '../observer/index';

import {
    warn,
    bind,
    noop,
    hasOwn,
    hyphenate,
    isReserved,
    nativeWatch,
    validateProp,
    isPlainObject,
    isServerRendering,
    isReservedAttribute
} from '../util/index';

const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};

export function proxy (target: Object, sourceKey: string, key: string) {
    sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key];
    }
    sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

export function initState (vm: Component) {
    vm._watchers = [];
    const opts = vm.$options;
    if (opts.props) initProps(vm, opts.props);
    if (opts.methods) initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    } else {
        observe(vm._data = {}, true /**asRootData */)
    }
    if (opts.computed) initComputed(vm, opts.computed);
    if (opts.watch && opts.watch != nativeWatch) {
        initWatch(vm, opts.watch);
    }
}


