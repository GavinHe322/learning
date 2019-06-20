var module = {
    x: 24,
    fn: function() {
        console.log(this.x)
        return this.x
    }
}

var unboundGetX = module.fn

console.log(
    unboundGetX()
)

var unboundGetX = unboundGetX.bind(module)
console.log(
    unboundGetX()
)
