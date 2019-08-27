/* flow */

import { isDef } from 'shared/util';
import { isAsyncPlaceholder } from './is-async-placeholder';

export function getFirstComponentChild (children: ?Array<VNode>): ?VNode {
    if (Array.isArray(children)) {
        for (let i = 0, l = children.length; i < l; i++) {
            const c = children[i];
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
            }
        }
    }
}