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
        // istanbul ignore if
        
    }
}