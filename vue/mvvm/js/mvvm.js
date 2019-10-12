function MVVM(options) {
    this.$options = options || {}
    var data = this._data = this.$options.data
    var vm = this
  
    //  代理data
    Object.keys(data).forEach(function(key) {
        console.log(key)
        vm._proxyData(key)
    })

    // 代理Computed
    this._initComputed()

    observer(data, this)
    // 
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb)
    },
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
                console.log(newVal, 'change')
                vm._data[key] = newVal
            }
        })
    },
    
    _initComputed: function () {
        var vm = this
        var computed = this.$options.computed
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