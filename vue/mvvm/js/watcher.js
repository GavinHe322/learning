function Watcher(vm, expOrFn, cb) {
    console.log(vm, expOrFn, cb, 'sss')
    this.cb = cb
    this.vm = vm
    this.expOrFn = expOrFn
    this.depIds = {}

    if (typeof expOrFn === 'function') {
        this.getter = expOrFn
    } else {
        this.getter = this.parseGetter(expOrFn.trim())
    }

    this.value = this.get()
}

Watcher.prototype = {
    constructor: Watcher,
    update: function () {
        this.run()
    },
    run: function() {
        var value = this.get()
        var oldVal = this.value
        if (value !== oldVal) {
            this.value = value
            this.cb.call(this.vm, value, oldVal)
        }
    },
    addDep: function(dep) {
        // 1. 每次调用run()的时候会触发响应属相的getter
        // getter里面会触发dep.depend(), 继而触发这里的addDep
        // 2. 假如相应属性的dep.id 已经在当前watcher的depIds里，说明不是一个新的属性，仅仅是改变了其值而已
        // 则不需要将当前watcher添加到该属性的dep里
        // 3. 假如相应属性是新的属性，则将当前watcher添加到新属性的dep里，
        // 如通过 vn.child = {name: 'a'}加入到新的 child.name 的dep里
        // 因为此时 child.name = xxx 赋值的时候，对应的 watcher 就收不到通知，等于失效了
        // 4. 每个子属性的 watcher 在添加到子属性的dep的同时，也会添加到父属性的dep
        // 监听子属性的同时监听父属性的变更，这样，父属性改变时，子属性的 watcher 也能收到通知进行 update
        // 这一步是在 this.get() --> this.getVMVal() 里面完成， forEach时会从父级开始取值，间接调用了他的getter
        // 触发了addDep(), 在整个forEach 过程，当前 wacher 都会假如到每个父级过程属性的dep
        // 例如：当前 watcher 的是 'child.child.name', 那么 child, child.child, child.child.name 这三个属性的 dep 都会 加入当前 wacher

        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this)
            this.depIds[dep.id] = dep
        }
    },
    get: function() {
        Dep.target = this
        var value = this.getter.call(this.vm, this.vm)
        Dep.target = null
        return value
    },

    parseGetter: function(exp) {
        console.log(exp)

        if (/[^\w.&]/.test(exp)) return

        var exps = exp.split('.')
        
        return function(obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return
                obj = obj[exps[i]]
            }
            return obj
        }
    }
}

