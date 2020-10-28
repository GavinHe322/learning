// 7.7 迭代器模式的应用举例

// 检测是否支持 flash
const supportFlash = () => {
  /**
   * 代码
   */
}

// 需要重构的代码
/**
 * 1.难以阅读
 * 2.严重违反开闭原则，假设调试或者增加兼容的方法，则只能增加条件分支
 */
var getUploadObj = function() {
  try {
      return new ActiveXObject("TXFTNActiveX.FTNUpload") // IE 上传控件
  } catch (error) {
    if (supportFlash()) {
      var str = '<object type="application/x-shockwave-flash"></object>'
      return $(str).appendTo($('body'))
    } else {
      var str = '<input name="file" type="file" class="ui-file" />'
      return $(str).appendTo($('body'))
    }
  }
}

// 重构

/**
 * 三个创建方法抽离出来
 */
var getActiveUploadObj = function() {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload") // IE 上传控件
  } catch (error) {
    return false
  }
}

var getFlashUploadObj = function() {
  if (supportFlash()) {
    var str = '<object type="application/x-shockwave-flash"></object>'
    return $(str).appendTo($('body'))
  }
  return false
}

var getFormUploadObj = function() {
  var str = '<input name="file" type="file" class="ui-file" />'
  return $(str).appendTo($('body'))
}

/**
 * 迭代器
 */
var interatorUploadObj = function() {
  for (var i = 0, fn; fn = arguments[i++];) {
    var uploadObj = fn()
    if (uploadObj !== false) {
      return uploadObj
    }
  }
}

// 重构猴，我们可以看到，不同的方法在各自的函数里互不干扰，变得容易维护和拓展。
interatorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)

// 比如新需求，增加获取 webkit 控件
var getWebKitUploadObj = function() {
  // 略
}

interatorUploadObj(getActiveUploadObj, getFlashUploadObj, getWebKitUploadObj, getFormUploadObj)
