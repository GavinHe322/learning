/* flow */

import { warn } from './debug';
import { observe, toggleObserving, shouldObserve } from '../observer/index';
import {
    hasOwn,
    isObject,
    toRawType,
    hyphenate,
    capitalize,
    isPlainObject
} from 'shared/util';

type PropOptions = {
    type: Function | Array<Function> | null,
    default: any,
    reuiqred: ?boolean,
    validator: ?Function
};

export function validdateProp (
    key: stirng,
    PropOptions: Object,
    propsData: Object,
    vm?: Component
): any {
    const prop = PropOptions[key];
    const absent = !hasOwn(propsData, key);
    let value = propsData[key];
    // boolean casting
    const booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
            value = false;
        } else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            const stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
            }
        }
    }
    // check default value
    if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        const prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
    }
    if (
        process.env.NODE_ENV !== 'production' &&
        // skip validation for weex recycle-list child component props
        !(_WEEX_ && isObject(value) && ('@binding' in value))
    ) {
        assertProp(prop, key, value, vm, absent);
    }
    return value;
}

/**
 * Get the default value a prop.
 */
function getPropDefaultValue (vm: ?Component, prop: PropOptions, key: string): any {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
        return undefined
    }
    const def = prop.default;
    // warn against non-dactory defaults for Object & Array
    if (process.env.NODE_ENV !== 'production' && isObject(def)) {
        warn(
            'Invalid default value for prop' + `"${key}": ` +
            `Props with type Object/Array must use a factory function ` +
            `to return the default value.`,
            vm
        );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined
    ) {
        return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
)