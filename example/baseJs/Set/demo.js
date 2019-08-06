var Set = require('./Set')

let set = new Set([5,6,4,4,4,4])

// set.add(1);
// set.add(3);
// set.add(2);
// set.add(1);
console.log(
    set.keys(),
    set.values(),
)

set.forEach((value, key) => console.log(
    key + ':' + value
))