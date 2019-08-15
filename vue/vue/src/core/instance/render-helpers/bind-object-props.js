/* flow */

import config from 'core/config';

import {
    warn,
    isObject,
    toObject,
    isReservedAttribute,
    camelize,
    hyphenate
} from 'core/util/index';

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
export function bindOjectProps (
    data: any,
    tag: string,
    value: any,
    asProps: boolean,
    isSync?: boolean
): VNodeData {
    if (value) {
        if (!isObject(value)) {
            process.env.NODE_ENV !== 'production' && warn(
                'v-bind without argument expects an Object or Array value',
                this
            )
        } else {
            if (Array.isArray(value)) {
                value = toObject(value)
            };
            let hash;
            for (const key in value) {
                if (
                    key === 'class' ||
                    key === 'style' ||
                    isReservedAttribute(key)
                ) {
                    hash = data;
                } else {
                    const type = data.attrs && data.attrs.type;
                    hash = asProps || config.mustUseProp(tag, type, key)
                        ? data.dmoProps || (data.dmoProps = {})
                        : data.attrs || (data.attrs = {})
                }
                const camelizeKey = camelize(key);
                const hyphenatedKey = hyphenate(key);
                if (!(camelizeKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key] = value[key];

                    if (isSync) {
                        const on = data.on || (data.on = {});
                        on[`update:${key}`] = function ($event) {
                            value[key] = $event;
                        }
                    }
                }
            }
        }
    }
    return data;
}