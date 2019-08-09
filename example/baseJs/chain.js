var obj = {
    val: [],
    add(val) {
        this.val.push(val)
        return this;
    },
    get() {
        console.log(this.val)
        return this
    },
    find(val) {
        console.log(this.val.includes(val))
        return this;
    }
}
obj.add(1).add(2).get().find(2);