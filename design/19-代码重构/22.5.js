// 22.5 提前让函数退出代理嵌套条件分支

// ‘函数只有一个出口的’ 经典代码
// before
var del = function(obj) {
  var ret
  if (!obj.isReadOnly) { // 不为只读的才能删除
    if (obj.isFolder) { // 如果是文件
      ret = deleteFolder(obj)
    } else if (obj.isFile) {
      ret = deleteFile(obj)
    }
  }
  return ret
}

// after
var del = function(obj) {
  if (obj.isReadOnly) return

  if (obj.isFolder) return deleteFile(obj)

  if (obj.isFile) return deleteFile(obj)
}
