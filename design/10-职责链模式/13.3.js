// 13.3 用职责链重构代码

var log = console.log

/**
 * 代码清晰了很多，拆分成三个小函数，去掉了很多嵌套
 * 
 * 但是链条传递还是很僵硬，请求顺序被耦合在一起
 */
var order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    log('500订金，得到100')
  } else {
    order200(orderType, pay, stock)
  }
}

var order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    log('200定金，得到50')
  } else {
    orderNormal(orderType, pay, stock)
  }
}

var orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    log('普通购买')
  } else {
    log('库存不足!')
  }
}

order500(1, true, 500)
order500(1, false, 500)
order500(2, true, 500)
order500(2, false, 500)
order500(3, false, 500)