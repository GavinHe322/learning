// 13.2 开发中的职责链模式

/**
 * 预付定金有优惠
 * 500定金 -> 100优惠卷
 * 200定金 -> 50 优惠卷
 * 其他没有
 * 
 * orderType
 * pay
 * stock
 */
var log = console.log

/**
 * 待重构代码
 * 巨大且难以理解，维护将变成噩梦
 */
var order = function(orderType, pay, stock) {
  if (orderType === 1) {
    if (pay === true) {
      log('500定金，得到100优惠卷')
    } else {

      if (stock > 0) {
        log('普通用户，无优惠卷')
      } else {
        log('库存不足')
      }
    }
  } else if(orderType === 2) {
    if (pay === true) {
      log('200定金，50优惠')
    } else {
      if (stock > 0) {
        log('普通')
      } else {
        log('库存不足')
      }
    }
  } else {
    if (stock > 0) {
      log('普通')
    } else {
      log('库存不足')
    }
  }
}

order(3, false, 0)
