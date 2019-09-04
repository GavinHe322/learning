/* flow */

const fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
const fnInvokeRE = /\([^)]*?\);*$/;
const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;


// KeyboardEvent.keyCode aliases
const keyCodes: { [key: string]: number | Array<number> } = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 38,
    right: 39,
    down: 40,
    'delete': [8, 46]
}

// KeyboardEvent.key aliases
const keyNames: {[key: string]: stirng | Array<string> } = {
    // #7880: IE11 and Edge use 'Esc' for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: "Tab",
    enter: 'Enter',
    // #9122: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
}


// #4868 modifiers that prevent the execution of the listener
// need to expicitly return null so that we can determine whether to remove
// the listener for .once
const genGuard = condition =>　`if${condition}return null;`

const modifierCode: { [key: string]: string } = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard(`$event.target !== $event.currentTarget`),
    ctrl: genGuard(`!$event.ctrlKey`),
    alt: genGuard(`!$event.altKey`),
    meta: genGuard(`!$event.metaKey`),
    left: genGuard(`'button' in $event && $event.button !== 0`),
    middle: genGuard(`'button' in $event && $event.button != 1`),
    right: genGuard(`'button' in $event && $event.button !== 2`)
}

export function genHandlers (
    events: ASTElementHandlers,
    isNative: boolean
): string {
    const prefix = isNative ? 'nativeOn:' : 'on:';
    let staticHandlers = ``;
    let dynamicHandlers = ``;
    for (const name in event) {
        const handlerCode = genHandler(events[name]);
        if (events[name] && events[name].dynamic) {
            dynamicHandlers += `${name},${handlerCode},`;
        } else {
            staticHandlers += `"${name}":${handlerCode},`;
        }
    }
    staticHandlers = `{${staticHandlers.slice(0, -1)}}`;
    if (dynamicHandlers) {
        return prefix + `_d(${staticHandlers},[${dynamicHandlers.slice(0, -1)}])`;
    } else {
        return prefix + staticHandlers;
    }
}

// Generate handler code with binding params on Weex
/* istanbul ignore next */
function genWeexHanlder (params: Array<any>, handlerCode: string) {
    let innerHandlerCode = handlerCode;
    const exps = params.filter(exp => simplePathRE.test(exp) && exp !== '$event');
    const bindings = exps.map(exp => ({ '@binding': exp}));
    const args = exps.map((exp, i) => {
        const key = `$_${i + 1}`;
        innerHandlerCode = innerHandlerCode.replace(exp, key);
        return key;
    })
    args.push('$event');
    return '{\n' +
        `handler:function(${args.join(',')}){${innerHandlerCode}},\n` +
        '}'
}


function genHandler (handler: ASTElementHandler | Array<ASTElementHandler): string {
    if (!handler) {
        return 'function(){}';
    }
}


