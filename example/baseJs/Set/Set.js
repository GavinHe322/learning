/**
 * Set 和 Map 主要应用于 数组去重 和数据存储
 * 
 * Set 是一种叫集合的数据结构，Map 是一种叫字典的数据结构
 */

// var s = new Set()
// var arr = [2, 2, 3, 4, 5, 1]
// arr.forEach(x => s.add(x))


// for (let i of s) {
//     console.log(i)
// }

// // 去重
// console.log(
//     [...new Set(arr)]
// )

class Set{ 
    //可以传入数组
    constructor(arr = []) {
        this.items = {}
        this.size = 0; // 记录 集合中成员的数量
        // this.add()
        for (var i in arr) {
            this.add(arr[i])
        }
    }
    
    // has(value) 方法
    has (val) {
        return this.items.hasOwnProperty(val)
    }
    // add(val)
    add (val) {
        if (!this.has(val)) {
            this.items[val] = val

            this.size ++ // 累计集合成员数量
            return true
        }
        return false
    }

    // delete(val)
    delete (val) {
        if (this.has(val)) {
            delete this.items[val] // 将对象属性删掉
            this.size--
            return true
        }
        return false
    }
    // clear 方法  (直接重新赋值即可)
    clear () {
        this.items = {};
        this.size = 0;
    }

    // keys()
    keys () {
        return Object.keys(this.items); 
    }
    // values()
    values () {
        return Object.values(this.items)
    }

    // forEach() 方法
    forEach(fn, context) {
        for (var i = 0; i < this.size; i++) {
            let item = Object.keys(this.items)[i]
            console.log(fn, context)
            fn.call(context, item, item, this.items)
        }
    }
}


module.exports = Set;