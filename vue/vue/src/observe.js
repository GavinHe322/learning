function observe(data) {
    let ob = new Observer(data)

}

class Observer {
    constructor(data) {
        this.data = data

        this.work(data)
    }

    work(obj) {
        const keys = Object.keys(obj)
        for (let i = 0, l = keys.length; i < l; i++) {
            defineReactive(obj, keys[i])
        }
    }
}

function defineReactive(obj, key) {
    /**
     * configurable: true
     * enumerable: true
     * value: "1"
     * writable: true
     */
    const property = Object.getOwnPropertyDescriptor(obj, key)

    const getter = property && property.get
    const setter = property && property.set

    if ((!getter ||setter) && arguments.length === 2) {
        val = obj[key]
    }

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val
            return value
        },
        set: function reactiveSetter(newVal) {
            console.log('set??', newVal)
            val = newVal
        }
    })
}


