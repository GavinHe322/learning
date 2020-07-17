function initState(vm) {
    let opts = vm.$options

    if (opts.data) {
        initData(vm)
    }
}


function initData(vm) {
    let data = vm.$options.data

    data = vm._data = typeof data === 'function'
        ? data.call(vm, vm)
        : data || {}
    
    // proxy data on instance
    const keys = Object.keys(data)
    let i = keys.length
    while (i --) {
        const key = keys[i]
        proxy(vm, `_data`, key)
    }
    
    // observe data
    observe(data)
}


const noop = () => {}
const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
}

function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxyGetter(val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}