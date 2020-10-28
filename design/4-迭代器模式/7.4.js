// 7.4 迭代类数组对象和字面量对象

var log = console.log

var each = function(obj, callback) {
  var value,
      i = 0,
      length = obj.length,
      isArray = Array.isArray(obj)
  
  if (isArray) {
    for(; i < length; i++) {
      value = callback.call(obj[i], i, obj[i])

      if (value === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      value = callback.call(obj[i], i, obj[i])
      if (value === false) {
        break
      }
    }
  }
  return obj
}

const printFn = (val, i) => log(val, i)

each([1, 2], printFn)
each({0: 'a', 1: 'b'}, printFn)
