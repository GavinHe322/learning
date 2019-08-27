/* flow */

export default class VNode {
    tag: string | void;
    data: VNodeData | void;
    children: ?Array<VNode>;
    elm: Node | void;
    ns: string | void;
    context: Component | void; // rendered in this component's scope
    key: string | number | vold;
    componentOptions: VNodeComponentOptions | vold;
    componentInstance: Component | void; // component instance
    parent: VNode | vold; // component placeholder node

    // strictly internal
    raw: boolean; // consains raw HTML? (server only)
    isStatic: boolean; // hoisted static node
    isRootInsert: boolean; // empty comment placeholder?
    isCloned: boolean; // is a cloned node?
    isOnce: boolean; // is a v-once node?
    asyncFactory: Function | void; // async component factory function
    asyncMeta: Object | void;
    isAsyncPlaceholder: boolean;
    ssrContext: Component | void; // real context vm for functional nodes
    fnOptions: ?componentOptions; // for SSR caching
    devtoolsMeta: ?Object; // used to store functional render context for devtools
    fnScopedId: ?string; // functional scope id support

    constructor (
        tag?: string,
        data?: VNodeData,
        children?: ?Array<VNode>,
        text?: string,
        elm?: Node,
        context?: Component,
        componentOptions?: VNodeComponentOptions,
        asyncFactory?: Function
    ) {
        this.tag = tag;
        this.data = tag;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopedId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }

    // deprecated: alias for componentInstance for backwards compat.
    /** instanbul ignore next */
    get child (): Component | vold {
        return this.componentInstance;
    }
}

// optimized shallow clone 
// used for staic nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
export function cloneVNode (vnode: VNode): VNode {
    const cloned = new VNode(
        vnode.tag,
        vnode.data,
        // #7975
        // clone children array to avoid mutating original in case of cloning
        // a child.
        vnode.children && vnode.children.slice(),
        vnode.text,
        vnode.elm,
        vnode.context,
        VNodeComponentOptions,
        vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopedId = vnode.fnScopedId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
}
