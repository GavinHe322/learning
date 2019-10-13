function MVVM(options) {
    this.$options = options || {}
    var data = this._data = this.$options.data
    var vm = this

    // 数据代理
    Object.keys(data).forEach(key => {
        vm._proxyData(key)
    })

    // 数据监听 发布
    observe(data, this)
    
    // 初始 computed 属性
    this._initComputed()

    // $mount
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch(key, cb, options) {
        new Watcher(this, key, cb)
    },

    _proxyData(key, setter, getter) {
        var vm = this
        setter = setter ||
            Object.defineProperty(vm, key, {
                configurable: false,
                enumerable: true,
                get() {
                    return vm._data[key]
                },
                set(newVal) {
                    vm._data[key] = newVal
                }
            })
    },

    _initComputed() {
        var vm = this
        var computed = this.$options.computed

        if (typeof computed === 'object') {
            Object.keys(computed).forEach(key => {
                Object.defineProperty(vm, key, {
                    get: typeof computed[key] === 'function'
                            ? computed[key]
                            : computed[key].get,
                    set() {}
                })
            })
        }
    }
}