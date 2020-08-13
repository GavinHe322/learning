
function Vue(options) {
    
    this._init(options)
}

initMixin(Vue)
renderMixin(Vue)
lifecycleMixin(Vue)

// 挂载 mount
Vue.prototype.$mount = $mount
Vue.prototype.__patch__ = patch