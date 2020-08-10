function initRender(vm) {
  vm._vnode = null
  vm._staticTrees = null
  const options = vm.$options
  const parentVnode = vm.$vnode = options._parentVnode
  /**
   * 将 createElement 绑定在实例上
   * 这样我们就能在里面获得正确的上下文
   * args: tag, data, children, normalizationType, alwaysNormalize
   * 内部版本由从模板编译的呈现函数使用
   */
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  /**
   * 规范化用在用户编写的render函数中使用
   */
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}

function renderMixin(Vue) {
  Vue.prototype._render = function() {
    const vm = this
    const { render, _parentVnode } = vm.$options
    console.log(render())
    return
    if (_parentVnode) {
    }

    let vnode
    vnode = render.call(vm._renderProxy, vm.$createElement)
  }
}