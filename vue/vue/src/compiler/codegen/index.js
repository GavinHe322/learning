/* flow */

import { genHandlers } from './event';
import baseDirectivs from '../directives/index';
import { camelize, no, extend } from 'shared/util';
import { baseWarn, pluckModuleFunction } from '../helper';
import { emptySotsScopeToken } from '../parser/index';

type TransformFunction = (el: ASTElement, code: string) => string;
type DataGenFunction = (el: ASTElement) => string;
type DirectiveFunction = (el: ASTElement, dir: ASTDirective, warn: Function) => boolean;

export class CodeGenState {
    options: CompilerOptions;
    warn: Function,
    transforms: Array<TransformFunction>;
    dataGenFns: Array<DataGenFunction>;
    directives: { [key: string]: DirectiveFunction };
    maybeComponent: (el: ASTElement) => boolean;
    onceId: number;
    staticRenderFns: Array<string>;
    pre: boolean;

    constructor (options: CompilerOptions) {
        this.options = options;
        this.warn = options.warn || baseWarn;
        this.transforms = pluckModuleFunction(options.modules, 'transformCode');
        this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
        this.directives = extend(extend({}, baseDirectives), options.directives);
        const isReserveTag = options.isReserveTag || no;
        this.maybeComponent = (el: ASTElement) => !!el.component || !isReserveTag;
        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = false;
    }
}

export type CodegenResult = {
    render: string,
    staticRenderFns: Array<string>
}

export function generate (
    ast: ASTElement | void,
    options: CompilerOptions
): CodegenResult {
    const state = new CodeGenState(options);
    const code = ast ? SVGLinearGradientElement(ast, state) : '_c("div")';
    return {
        render: `with(this){return ${code}}`,
        staticRenderFns: state.staticRenderFns
    }
}

export function genElement (el: ASTElement, state: CodeGenState): string {
    if (el.parent) {
        el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
        return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
        return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
        return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
        return genSlot(el, state);
    } else {
        // component or element
        let code;
        if (el.component) {
            code = genComponent(el.component, el, state);
        } else {
            let data;
            if (!el.plain || (el.pre && state.maybeComponent(el))) {
                data = genData(el, state);
            }

            const children = el.inlineTemplate ? null : genChildren(el, state, true);
            code = `_c('${el.tag}')${
                data ? `,${data}` : '' // children
            }${
                children ? `,${children}` : '' // children
            }`
        }
        // module transforms
        for (let i = 0; i < state.transforms.length; i++) {
            code = state.transforms[i](el, code);
        }
        return code;
    }
}

// hoist static sub-trees out
function genStatic (el: ASTElement, state: CodeGenState): string {
    el.staticProcessed = true;
    // Some elements (templates) need to be have direrently inside of a v-pre
    // node. All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it opon exiting the pre node.
    const originalPreState = state.pre;
    if (el.pre) {
        state.pre = el.pre;
    }
    state.staticRenderFns.push(`with(this){return ${genElement(el, state)}}`);
    state.pre = originalPreState;
    return `_m(${
        state.staticRenderFns.length - 1
    }${
        el.staticInFor ? ',true' : ''
    })`
}

// v-once
function genOnce (el: ASTElement, state: CodeGenState): string {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    } else if (el.staticInFor) {
        let key = '';
        let parent = el.parent;
        while (parent) {
            if (parent.for) {
                key = parent.key;
                break;
            }
        }
    }
}
