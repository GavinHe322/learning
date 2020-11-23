// 22.4 合理使用循环

// before
var createXHR = function() {
  var xhr
  try {
    xhr = new ActiveXObject('MSXML2.XMLHttp.6.0')
  } catch (e) {
    try {
      xhr = new ActiveXObject('MSXML2.XMLHttp.3.0')
    } catch (e) {
      xhr = new ActiveXObject('MSXML2.XMLHttp')
    }
  }
  return xhr
}

var xhr = createXHR()

// after
var createXHR = function() {
  var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp']
  for (var i = 0, version; version = versions[i++];) {
    try {
      return new ActiveXObject(version)
    } catch (error) {
    }
  }
}

var xhr = createXHR()
