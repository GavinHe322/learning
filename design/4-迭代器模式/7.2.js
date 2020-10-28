// 7.2 实现自己的迭代器

const log = console.log

var each = function(ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    callback(ary[i], i, ary)
  }
}

each([1, 2, 3, 4], function(val, idx, ary) {
  log(val, idx, ary)
})
