function initMixin(Vue) {
    Vue.prototype._init = function(options) {
        var vm = this
        vm.$options = options
        
        initState(vm)
    }
}