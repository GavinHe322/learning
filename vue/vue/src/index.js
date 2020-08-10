
function Vue(options) {
    
    this._init(options)
}

initMixin(Vue)
renderMixin(Vue)
// 挂载 mount
Vue.prototype.$mount = $mount