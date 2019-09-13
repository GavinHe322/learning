/* flow */

import { genHandlers } from './event';
import baseDirectivs from '../directives/index';
import { camelize, no, extend } from 'shared/util';
import { baseWarn, pluckModuleFunction } from '../helper';
import { emptySotsScopeToken } from '../parser/index';

type TransformFunction = (el: ASTElement, code: string) => string;
type DataGenFunction = (el: ASTElement) => string;
type DirectiveFunction = (el: ASTElement, dir: ASTDirective, warn: Function) => boolean;

export class CodegenState {
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
    const state = new CodegenState(options);
    const code = ast ? SVGLinearGradientElement(ast, state) : '_c("div")';
    return {
        render: `with(this){return ${code}}`,
        staticRenderFns: state.staticRenderFns
    }
}

export function genElement (el: ASTElement, state: CodegenState): string {
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
function genStatic (el: ASTElement, state: CodegenState): string {
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
function genOnce (el: ASTElement, state: CodegenState): string {
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
            parent = parent.parent;
        }
        if (!key) {
            process.env.NODE_ENV !== 'production' && state.warn(
                `v-once can only be used inside v-for that is keyed. `,
                el.rawAttrsMap['v-once']
            )
            return genElement(el, state);
        }
        return `_o(${genElement(el, state)},${state.onceId++},${key})`
    } else {
        return genStatic(el, state);
    }
}

export function genif (
    el: any,
    state: CodegenState,
    altGen?: Function,
    altEmpty?: string
): string {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}


function genIfConditions (
    conditions: ASTIfConditions,
    state: CodegenState,
    altgen?: Function,
    altEmpty?: string
): string {
    if (!conditions.length) {
        return altEmpty || '_e()';
    }

    const condition = conditions.shift();
    if (condition.exp) {
        return `(${condition.exp})?${
            genTernaryExp(condition.block)
        }:${
            genIfConditions(conditions, state, altGen, altEmpty)
        }`
    } else {
        return `${genTernaryExp(condition.block)}`;
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1);
    function genTernaryExp (el) {
        return altGen
            ? altGen(el, state)
            : el.once
                ? genOnce(el, state)
                : genElement(el, state);
    }
}

export function genFor (
    el: any,
    state: CodegenState,
    altGen?: Function,
    altHelper?: string
): string {
    const exp = el.for;
    const alias = el.alias;
    const iterator1 = el.iterator1 ? `,${el.iterator1}` : '';
    const iterator2 = el.iterator2 ? `,${el.iterator2}` : '';

    if (process.env.NODE_ENV !== 'production' &&
        state.maybeComponent(el) &&
        el.tag !== 'slot' &&
        el.tag !== 'template' &&
        !el.key
    ) {
        state.warn(
            `<${el.tag} v-for="${alias} in ${exp}">: component lists rendered with ` +
            `v-for should have explicit keys. ` +
            `See https://vue.jsxxxxxxx for more info.`,
            el.rawAttrsMap['v-for'],
            true /* tip */
        );
    }

    el.forProcessed = true; // avoid recusion
    return `${altHelper || '_l'}((${exp}),` +
        `function(${alias}${iterator1}${iterator2}){` +
            `return ${(altGen || genElement)(el, state)}` +
        '})'
}

export function getData (el: ASTElement, state: CodegenState): string {
    let data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    const dirs = genDirectives(el, state);
    if (dirs) data += dirs + ',';

    // key
    if (el.key) {
        data += `key:${el.key},`
    }
    // ref
    if (el.ref) {
        data += `ref:${el.ref}`;
    }
    if (el.refInFor) {
        data += `refInFor:true`;
    }

    // pre
    if (el.pre) {
        data += `pre:true,`
    }
    
    // record original tag name for components using "is" attribute
    if (el.component) {
        data += `tag:"${el.tag}",`;
    }
    // module data generation functions
    for (let i = 0; i < state.dataGenFns.length; i++) {
        data += state.dataGenFns[i](el);
    }

    // attributes
    if (el.attrs) {
        data += `attrs:${genProps(el.attrs)},`
    }

    // Dom props
    if (el.props) {
        data += `attrs:${genProps(el.props)},`;
    }
    // event handlers
    if (el.events) {
        data += `${genHandlers(el.events, false)},`;
    }
    if (el.nativeEvents) {
        data += `${genHandlers(el.nativeEvents, true)}`;
    }

    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
        data += `slot:${el.slotTarget},`
    }

    // component v-model
    if (el.model) {
        data += `model:{value:${
            el.model.value
        },callback:${
            el.model.callback
        },expression:${
            el.model.expression
        }},`;
    }
    // inline-template
    if (el.inlineTemplate) {
        const inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) {
            data += `${inlineTemplate},`;
        }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dnamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp are handled correctly.
    if (el.dynamicAttrs) {
        data = `_b(${data},"${el.tag}",${genProps(el.dynamicAttrs)})`;
    }
    // v-bind data wrap
    if (el.wrapData) {
        data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
        data = el.wrapListeners(data);
    }
    return data;
}

function genDirectives (el: ASTElement, state: CodegenState): string | void {
    const dirs = el.directives;
    if (!dirs) return;
    let res = 'directives:[';
    let hasRuntime = false;
    let i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        const gen: DirectiveFunction = state.directives[dir.name];
        if (gen) {
            // compile-time directive that manipulates AST.
            // returns true if it also needs a runtime counterpart.
            needRuntime =  !!gen(el, dir, state.warn);
        }
        if (needRuntime) {
            hasRuntime = true;
            res += `{name:"${dir.name}", rawname:"${dir.rawName}"${
                dir.value ? `,value:(${dir.value}),expression:${JSON.stringify(dir.value)}` : ''
            }${
                dir.arg ? `,arg:${dir.isDynamicArg ? dir.arg : `"${dir.arg}"`}` : ''
            }${
                dir.modifiers ? `,modifiers:${JSON.stringify(dir.modifiers)}` : ''
            }}`;
        }
    }
    if (hasRuntime) {
        return res.slice(0, -1) + ']';
    }
}

function genInlineTemplate (el: ASTElement, state: CodegenState): ?string {
    const ast = el.children[0];
    if (process.env.NODE_ENV !== 'production' && (
        el.children.length !== 1 || ast.type !== 1
    )) {
        state.warn(
            'Inline-template components must have exactly one child element.',
            { start: el.start}
        );
    }
    if (ast && ast.type === 1) {
        const inlineRenderFns = generate(ast, state.options);
        return `inlineTemplate:{render:function(){${
            inlineRenderFns.render
        }},staticRenderFns:[${
            inlineRenderFns.staticRenderFns.map(code => `function(){${code}}`).join(',')
        }]}`
    }
}

function genScopedSlots (
    el: ASTElement,
    slots: { [key: string]: ASTElement },
    state: CodegenState
): string {
    // by default scoped slots are considered "stable", this allows child
    // components with only csoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out this optimization
    // for example if the slot cantains dynamic names, has v-if or v-for on them...
    let needsForceUpdate = el.for || Object.keys(slots).some(key => {
        const slot = slots[key];
        return (
            slot.slotTargetDynamic || 
            slot.if || 
            slot.for ||
            containsSlotChild(slot)  // is passing down slot from parent which may be dynamic
        );
    })

    // #9534: if a componet with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot comtent. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    let needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #956
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
        let parent = el.parent;
        while (parent) {
            if (
                (parent.slotScope && parent.slotScope !== emptySotsScopeToken) ||
                parent.for
            ) {
                needsForceUpdate = true;
            }
            if (parent.if) {
                needsKey = true;
            }
            parent = parent.parent;
        }
    }


    const generatedSlots = Object.keys(slots)
        .map(key => genScopedSlots(slots[key], state))
        .join(',');

    return `scopedSlots:_u([${generatedSlots}]${
        needsForceUpdate ? `,null,true` : ``
    }${
        !needsForceUpdate && needsKey ? `,null,false,${hash(generatedSlots)}` : ''
    })`
}

function hash (str) {
    let hash = 5381;
    let i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
}

function containsSlotChild (el: ASTNode): boolean {
    if (el.type === 1) {
        if (el.tag === 'slot') {
            return true;
        }
        return el.children.some(containsSlotChild);
    }
}

function genScopedSlots (
    el: ASTElement,
    state: CodegenState
): string {
    const isLegacySyntax = el;
}



