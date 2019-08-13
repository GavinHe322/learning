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

function initProps (vm: Component, propsOptions: Object) {
    const propsData = vm.$options.initProps || {};
    const props = vm._props = {};
    // cache prop keys so that future props unpdate can iterate using Array
    // instead of dynamic object key enumeration.
    const keys = vm.$options._proKeys = [];
    const isRoot = !vm.$parent
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false)
    }

    for (const key in propsOptions) {
        keys.push(key);
        const value = validateProp(key, propsOptions, propsData, vm);
        /** instanbul ignore else */ 
        if (process.env.NODE_EVN !== 'production') {
            const hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenate) || 
                config.isReservedAttribute(hyphenatedKey)) {
              warn(
                  `"${hyphenatedKey}" is a reserved attrubute and cannot be used as component prop`,
                  vm
              )
            }
            defineReactive(props, key, value, () => {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn(
                        `Avoud mutating a prop directly since the value will be` +
                        `overwritten whenvver the parent component re-renders.` +
                        `Instead, use a data or computed peoperty based on the props's` +
                        `value. Prop being mutated: "${key}"`
                    )
                } else {
                    defineReactive(props, key, value)
                }
                // static props are already proxied on the componet's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                if (!(key in vm)) {
                    proxy(vm, `_props`, key)
                }
            })
            toggleObserving(true)
        }
    }
}

function initData (vm: Component) {
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
        data = {};
        process.env.NODE_EVN !== 'production' && warn(
            'data functions should return an object:\n' +
            '官网，',
            vm
        )
    }
    // proxy data an instance
    const keys = Object.keys(data);
    const props = vm.$options.props;
    const methods = vm.$options.methods;
    let i = keys.length;
    while (i--) {
        const key = keys[i];
        if (process.env.NODE_EVN !== 'production') {
            if (methods && hasOwn(methods, key)) {
                warn(
                    `Method "${key}" has already been defined as a data property`,
                    vm
                )
            }
            if (props && hasOwn(props, key)) {
                process.env.NODE_EVN !== 'production' && warn(
                    `The data property "${key}" is already declared as a prop.` +
                    `Use prop default value instead.`,
                    vm
                )
            } else if (!isReserved(key)) {
                proxy(vm, '_data', key);
            }
        }
    }
    // observe data
    observe(data, true /** asRootData */)
}
