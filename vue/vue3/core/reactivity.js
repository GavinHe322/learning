const { reactive, ref } = require('@vue/reactivity')

const log = console.log

const count = reactive({
  name: '1'
})

log(count)

const refCount = ref(1)

log(refCount)
