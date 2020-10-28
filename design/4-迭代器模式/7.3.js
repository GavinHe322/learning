// 7.3 内部迭代器和外部迭代器

const log = console.log

/**
 * 1. 内部迭代器
 * 刚才编写的 each 函数属于内部迭代器，each 内部定义好了迭代规则，外部只需要一次初始调用
 * 外界不用关心迭代器的内部实现，跟迭代器的交互也仅仅是一次初始调用，刚好也是内部迭代器的缺点。
 * 由于内部迭代器事先被提前规定，上面的 each 函数就无法同时迭代2个数组了
 */

var each = function(ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    callback(ary[i], i, ary)
  }
}

/**
 * 需求，判断两个数组元素是否完全相等，如果不该写 each 函数本身的代码，只能入手回调函数
 * 但这一点也算不上好看
 */
var compare = function(ary1, ary2) {
  if (ary1.length !== ary2.length) {
    return log('不相等')
  }

  each(ary1, function(val, i) {
    if (val !== ary2[i]) {
      log('不相等')
    }
  })
}
compare([1, 2, 3], [1, 2, 3]) // 相等
compare([1, 2, 3], [1, 2, 4]) // 


/**
 * 2.外部迭代器
 * 显示的请求迭代下一个元素
 * 增加了一些调用的复杂度，但相对也增加了迭代器的灵活性，我们可以手工控制迭代的过程或顺序
 */
// 松本行弘的程序世界《第四章》
var Interatpr = function(obj) {
  var curent = 0

  var next = function() {
    curent += 1
  }

  var isDone = function() {
    return curent >= obj.length
  }
  
  var getCurrItem = function() {
    return obj[curent]
  }

  return {
    next,
    isDone,
    getCurrItem,
    length: obj.length
  }
}

var compare = function(iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    log('不相等')
    return
  }
  while(!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      log('不相等')
      return
    }
    iterator1.next()
    iterator2.next()
  }
  log('相等')
}

compare(Interatpr([1, 2, 3]), Interatpr([1, 2, 3])) // 相等
compare(Interatpr([1, 2, 3]), Interatpr([1, 2, 4])) // 不相等
