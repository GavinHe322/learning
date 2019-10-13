function Observer(data) {
    this.data = data
    this.walk(data)
    console.log(data)
}


Observer.prototype = {
    constructor: Observer,
    walk(data) {
        var vm = this
        Object.keys(data).forEach(key => {
            vm.convert(key, data[key])
        })
    },
    convert(key, val) {
        this.defineReactive(this.data, key, val)
    },
    
    defineReactive(data, key, val) {
        var dep = new Dep()
        var childObj = observe(val)

        Object.defineProperty(data, key, {
            enumerable: true, 
            configurable: false,
            get() {
                if (Dep.target) {
                    dep.depend()
                }
                return val
            },
            set(newVal) {
                if (newVal == val) {
                    return
                }
                val = newVal
                // 是的值是 object 的话， 进行监听
                childObj = observe(newVal)
                // 通知订阅者
                dep.notify()
            }
        })
    }
}

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return
    }
    return new Observer(value)
}

var uid 

function Dep() {
    this.id = uid++
    this.subs = []
}

Dep.prototype = {
    addSub(sub) {
        this.subs.push(sub)
    },

    depend() {
        Dep.target.addDep(this)
    },

    removeSub(sub) {
        var index = this.subs.indexOf(sub)

        if (index != -1) {
            this.subs.splice(index, 1)
        }
    },

    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

Dep.target = null
