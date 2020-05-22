// 严格模式
// const assert = require('assert').strict
const assert = require('assert')

console.log(
  // assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '1']], 4, 5])
  // assert.deepEqual([1, 2, 3], [1, 2]) //正确会返回 undefined
)

console.log(
  // assert.equal(Object, Array)
  // assert.equal(Object, Object)
)

console.log(
  assert.deepEqual(/a/gi, new Date())
)