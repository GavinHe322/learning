/* flow */

import VNode from './vnode';
import { resolveConstructorOptions } from 'core/instance/init';
import { queueActivatedComponent } from 'core/observer/scheduler';
import { createFunctionalComponent } from './create-functional-component';

import {
    warn,
    isDef,
    isUndef,
    isTrue,
    isObject
} from '../util/index';

import {
    resolveAsyncComponent,
    createAsyncPlaceholder,
    extracPropsFromVNodeData
} from './helpers/index';

import {
    callHook,
    activeInstance,
    updateChildCompoennt,
    activateChildComponent,
    deactivateChildComponent
} from '../instance/lifecycle';

import {
    isRecyclableComponent,
    renderRecyclableComponentTemplate
} from 'weex/runtime/recycke-list/render-component-template';

// inline hooks to be invoked on component VNodes during patch
const componentVNodeHooks = {
    init (vnode: VNodeWithData, hydrating: boolean): ?boolean {
        if (
            vnode.componentInstance &&
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive
        ) {
            // kept-alive components, treat as a patch
            const mountedNode: any = vnode // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
            const child = vnode.componentInstance = createComponentInstanceForVnode(
                vnode,
                activeInstance
            );
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
    }
}