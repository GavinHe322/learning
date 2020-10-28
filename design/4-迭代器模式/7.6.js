// 7.6 中止迭代器

var each = function(ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    if (callback(i, ary[i]) === false) {
      break
    }
  }
}

each([1, 2, 3, 4], function(i, n) {
  if (n > 3) {
    return false
  }
  console.log(n)
})
