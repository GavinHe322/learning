function mountComponent(vm, el) {
  vm.$el = el
  console.log(vm._render(), '???', vm)
}