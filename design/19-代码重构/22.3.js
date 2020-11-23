// 22.3 把条件分支语句提炼成函数

// beforce
var getPrice = function(price) {
  var date = new Date()
  // 夏天八折
  if (date.getMonth() >= 6 && date.getMonth() <= 9) {
    return price * 0.8
  }
  return price
}

// after
var isSummer = function() {
  var date = new Date()
  return date.getMonth() >= 6 && date.getMonth() <= 9
}

var getPrice = function(price) {
  if (isSummer()) {
    return price * 0.8
  }
  return price
}
