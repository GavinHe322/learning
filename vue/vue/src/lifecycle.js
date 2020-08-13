function initLifecycle(vm) {
  const options = vm.$options
  vm.$parent = options.parent
  vm.$root = vm

  vm.$children = []
  vm.$refs = {}

  vm._watcher = null
  vm.isMounted = false
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode) {
    var vm = this
    var prevEl = vm.$el
    var prevVnode = vm._vnode
    vm._vnode = vnode

    if (!prevVnode) {
      vm.$el = vm.__patch__(vm.$el, vnode)
    }

  }
}

function mountComponent(vm, el) {
  vm.$el = el
  let updateComponent = vm._update(vm._render())
  
}