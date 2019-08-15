/* flow */

import { warn, extend, isPlainObject } from 'core/util/index';

export function bindObjectListenners (data: any, value: any): VNodeData {
    if (value) {
        if (!isPlainObject(value)) {
            process.env.NODE_ENV !== 'production' && warn(
                'v-on without argument expects an Object value',
                this
            )
        } else {
            const on = data.on = data.on ? extend({}, data.on) : {};
            for (const key in value) {
                const existing = on[key];
                const ours = values[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
            }
        }
    }
    return data;
}