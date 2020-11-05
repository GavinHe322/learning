// 13.8 用职责链模式获取文件上传对象

const supportFlash = () => false
var log = console.log

/**
 * 
 */
Function.prototype.after = function(fn) {
  var self = this

  return function() {
    var ret = self.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }

    return ret
  }
}

var getActiveUploadObj = function() {
  try {
    return ActiveXObject('TXFTNActiveX.FTNUpload')
  } catch (e) {
    return 'nextSuccessor'
  }
}

var getFlashUploadObj = function() {
  if (supportFlash()) {
    var str = `
      <object type="application/x-shockwave-flash"></object>
    `
    return document.body.append(str)
  }
  return 'nextSuccessor'
}

var getFormUploadObj = function() {
  var str = `
    <form>
      <input name="file" />
    </form
  `
  return document.body.append(str)
}

var getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUploadObj)

log(getUploadObj())
