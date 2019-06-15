function square (str) {
    var obj = {}
    for (var el of str) {
        if ( Object.keys(obj).indexOf(el) == -1 ) {
            obj[el] = el
        }
    }
    return Object.keys(obj).length
}

var str = 'abcabcbb'
console.log(
    square(str)
)

var repeatStr = 'bbbb'

console.log(
    square(repeatStr)
)