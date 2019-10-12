function Observer(data) {
    this.data = data
    this.walk(data)
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        var vm = this
        Object.keys(data).forEach(function(key) {
            vm.convert(key, data[key])
        })
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val)
    },

    defineReactive: function(data, key, val) {
        var dep = new Dep()

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                console.log(1)
                if (Dep.target) {
                    dep.depend()
                }
                return val
            },
            set: function(newVal) {
                if (newVal === val) {
                    return
                }
                val = newVal
                // 新的值是 object 的话，进行监听
                console.log(val, 'change, observer')
                childObj = observer(newVal)
                // 通知订阅者
                dep.notify()
            }
        })
    }
}

function observer(value, vm) {
    if (!value || typeof value !== 'object') {
        return
    }
    return new Observer(value)
}

var uid = 0

function Dep() {
    this.id = uid++
    this.subs = []
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub)
    },

    depend: function() {
        Dep.target.addSub(this)
    },
    
    removeSub: function(sub) {
        var index = this.subs.indexOf(sub)
        if (index != -1) {
            this.subs.splice(index, 1)
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            console.log(sub)
            sub.update()
        })
    }
}

Dep.target = null
