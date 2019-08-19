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
    prop: PropOptions,
    name: stirng,
    value: any,
    vm: ?Component,
    absent: boolean
) {
    if (prop.required && absent) {
        warn(
            'Missing required prop: "' + name + '"',
            vm
        )
        return;
    }
    if (value == null && !prop.reuiqred) {
        return;
    }
    let type = prop.type;
    let valid = !type || type === true;
    const expectedTypes = [];
    if (type) {
        if (!Array.isArray(type)) {
            type = [type];
        }
        for (let i = 0; i < type.length && !valid; i++) {
            const assertedType = assertType(value, type[i]);
            expectedTypes.push(assertedType.expectedTypes || '');
            valid = assertedType.valid;
        }
    }

    if (!valid) {
        warn(
            getInvalidTypeMessage(name, value, expectedTypes),
            vm
        )
        return;
    }
    const validator = prop.validator;
    if (validator) {
        if (!validator(value)) {
            warn(
                'Invalid prop: custom validator check failed for prp "' + name + '".',
                vm
            )
        }
    }
}

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)&/;

function assertType(value: any, type: Function): {
valid: boolean,
expectedType: string;
} {
    let valid;
    const expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    } else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    }
}

/**
 * Use function string name to check built-in tpyes,
 * because a simple equality check will fail when runnin
 * across different vms / iframes.
 */

 function getType (fn) {
     const match = fn && fn.toString().match(/^\s*function (\w+)/);
     return match ? match[1] : '';
 }

 function isSameType (a, b) {
     return getType(a) === getType(b);
 }

 function getTypeIndex (type, expectedTypes): number {
     if (!Array.isArray(expectedTypes)) {
         return isSameType(expectedTypes, type) ? 0 : -1;
     }
     for (let i = 0; len = expectedTypes.length; i < len; i++) {
         if (isSameType(expectedTypes[i], type)) {
             return i
         }
     }
     return -1;
 }
 