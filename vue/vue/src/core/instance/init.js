import config from '../config';
import { initProxy } from './proxy';
import { initState } from './state';
import { initRender } from './render';
import { initEvents } from './events';
import { mark, measure } from '../util/perf';
import { initLifecycle, callHook } from './lifecycle';
import { initProvide, initInjections } from './inject';
import { extend, mergeOptions, formaComponentName } from '../util/index';


let uid = 0;

export function initMixin (Vue: Class<Component>) {
    Vue.prototype._init = function (options?: Object) {
        const vm: Component = this;
        // a uid
        vm._uid = uid++;
        let startTag, endTag;
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
            startTag = `vue-perf-start:${vm._uid}`;
            endTag = `vue-perf-end:${vm._uid}`;
            mark(startTag);
        }

        // a flag to avoid this being observed
        vm._isVue = true;
        // merge options
        if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options)
        } else {
            vm.$options = mergeOptions(
                resolveConstructorOptions(vm.constructor),
                options || {},
                vm
            )
        }
        
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
            initProxy(vm);
        } else {
            vm._renderProxy = vm;
        }
        // expose real self
        
    }
}