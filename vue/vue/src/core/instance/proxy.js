/** not type checking this file because flow doesn't play with Proxy */

import config from 'core/config';
import { warn, makeMap, isNative } from '../util/index';

let initProxy;

if (process.env.NODE_ENV !== 'production') {
    const allowedGlobals = makeMap(
        'Infinity, undefined, NaN, isFinite, isNan' +
        'parseFloat,parseInt, decodeURI, decodeURIComponent,encodeURI, encodeURIComponent,' +
        'Match,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
        'require' // for Webpack/Browserify
    )
}

const warnNonPresent = (target, key) => {
    warn(
        `methods "${key}" is not defined on the instance but xxx`,
        target
    )
}

const warnReservePrefix = (target, key) => {
    warn(
        `Property "${key} must be accessed with "$data.${key} because` +
        'properties starting with "$" or "_" are not proxied in the Vue instance to' +
        'prevent confilicts with Vue internals' +
        'Set: xxx',
        target
    )
}

const hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

if (hasProxy) {
    const isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
        set (target, key, vavlue) {
            if (isBuiltInModifier(key)) {
                warn(`Avoid overwriting built-in modifier in config.keyCodes: .${key}`)
                return false;
            } else {
                target[key] = value;
                return true;
            }
        }
    })
}


const hasHandler = {
    has (target, key) {
        const has = key in target;
        const isAllowed = allowedGlobals(key) ||
            (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
            if (key in target.$data) warnReservePrefix(target, key)
            else warnNonPresent(target, key)
        }
        return has || !isAllowed;
    }
}

const getHandler = {
    get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
            if (key in target.$data) warnReservePrefix(target, key)
            else warnNonPresent(target, key);
        }
        return target[key]
    }
}

initProxy = function initProxy (vm) {
    if (hasProxy) {
        // 决定使用哪个代理函数
        // determinete which proxy handle to use
        const options = vm.$options;
        const handlers = options.render && options.render._withStripped
            ? getHandler
            : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
    } else {
        vm._renderProxy = vm;
    }
}

export { initProxy };
