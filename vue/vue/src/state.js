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
    
    console.log(data)
    // observe(data)
}