function MVVM(options) {
    this.$options = options || {}
    var data = this._data = this.$options.data
    var vm = this
    console.log(
        options
    )
    //  代理data
    Object.keys(data).forEach(function(key) {
        console.log(key)
        vm._proxyData(key)
    })

    // 代理Computed
    this._initComputed()
}

MVVM.prototype = {
    constructor: MVVM,
    _proxyData: function(key, setter, getter) {
        var vm = this
        setter = setter ||
        Object.defineProperty(vm, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return vm._data[key]
            },
            set: function proxySetter(newVal) {
                vm._data[key] = newVal
            }
        })
    },
    
    _initComputed: function () {
        var vm = this
        var computed = this.$options.computed
        console.log(
            computed
        )
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(vm, key, {
                    get: typeof computed[key] === 'function'
                            ? computed[key]
                            : computed[key].get,
                    set: function() {}
                })

            })
        }
    }
}