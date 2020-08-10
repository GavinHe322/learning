function initMixin(Vue) {
    Vue.prototype._init = function(options) {
        var vm = this
        vm.$options = options

        initRender(vm)

        initState(vm)
        if (vm.$options.el) {
            vm.$mount(vm.$options.el)
        }
    }
}
