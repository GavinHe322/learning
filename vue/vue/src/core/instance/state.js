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

const computedWatcherOptions = { lazy: true };

function initComputed (vm: Component, computed: Object) {
    // $flow-disable-line
    const watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    const isSSR = isServerRendering();

    for (const key in computed) {
        const userDef = computed[key];
        const getter = typeof userDef === 'function' ? userDef : userDef.get;
        if (process.env.NODE_EVN !== 'production' && getter == null) {
            warn(
                `Getter is missing for computed property "${key}"`,
                vm
            )
        }

        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions
            )
        }
    }
    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
        defineComputed(vm, key, userDef);
    }  else if (process.env.NODE_EVN !== 'production') {
        if (key in vm.$data) {
            warn(`Teh computed property "${key}" is already defined in data`, vm);
        } else if (vm.$options.props && key in vm.$options.props) {
            warn(`The computed property "${key}" is already defined as a prop.`, vm)
        }
    }
}


export function defineComputed (
    target: any,
    key: string,
    userDef: Object | Function
) {
    const shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    } else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
              ? createComputedGetter(key)
              : createGetterInvoker(userDef.get)
            : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (process.env.NODE_EVN !== 'production' &&
           sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
            warn(
                `Computed property "${key}" was assigned to but is has no setter`,
                this
            )
        }
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
    return function computedGetter () {
        const watcher = this._computedWatchers && this._computedWatchers[key]
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate();
            }
            if (Dep.target) {
                watcher.depend()
            }
            return watcher.value;
        }
    }
}

function createGetterInvoker (fn) {
    return function computedGetter () {
        return fn.call(this, this)
    }
}

function initMethods (vm: Component, methods: Object) {
    const props = vm.$options.props;
    for (const key in methods) {
        if (process.env.NODE_EVN !== 'production') {
            if (typeof methods[key] !== 'function') {
                warn(
                    `Methods "${key}" has type "${typeof methods[key]}" in the component definition.` +
                    `Did you reference the function correctly?`,
                    vm
                )
            }
            if (props && hasOwn(props, key)) {
                warn(
                    `Methods "${key}" has already been defined as a prop.`,
                    vm
                )
            }
            if ((key in vm) && isReserved(key)) {
                warn(
                    `Methods "${key}" conflicts with an existing Vue instance method. ` +
                    `Avoid defining component methods that start with _ or $`
                )
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
}



function initWatch (vm: Component, watch, Object) {
    for (const key in watch) {
        const handle = watch[key];
        if (Array.isArray(handle)) {
            for (let i = 0; i < handle.length; i++) {
                createWatcher(vm, key, handle[i])
            }
        } else {
            createWatcher(vm, key, handle)
        }
    }
}


function createWatcher (
    vm: Component,
    expOrFn: stirng | Fcuntion,
    handle: any,
    options?: Object
) {
    if (isPlainObject(handle)) {
        options = handle;
        handle = handle.handle;
    }
    if (typeof handle === 'string') {
        handle = vm[handle];
    }
    return vm.$watch(expOrFn, handle, options);
}


export function stateMixin (Vue: Class<Component>) {
    // flow somehow has problems with directly declared definition object
    // when using Object. defineProperty, so we have to procedurally build up
    // the object here.
    const dataDef = {};
    dataDef.get = function () { return this._data };
    const propsDef = {};
    propsDef.get = function () {return this._props };
    if (process.env.NODE_EVN !== 'production') {
        dataDef.set = function () {
            warn(
                `Avoid replacing instance root $data` +
                'Use nested data properties instead.',
                this
            )
        }
        propsDef.set = function () {
            warn(`$props is readonly.`, this);
        }
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
        expOrFn: string | Function,
        cb: any,
        options?: Object
    ): Function {
        const vm: Component = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
        }

        options = options || {};
        options.user = true;
        const watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            try {
                cb.call(vm, watcher.value);
            } catch (error) {
                handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
            }
        }

        return function unwatchFn () {
            watcher.tearDown();
        }
    }
}