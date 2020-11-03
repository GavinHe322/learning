// 10.9 引用父对象

var log = console.log

var Folder = function(name) {
  this.name = name
  this.parent = null // 增加 parent 属性
  this.files = []
}

Folder.prototype.add = function(file) {
  file.parent = this
  this.files.push(file)
}

Folder.prototype.scan = function() {
  log('开始扫描文件,', this.name)

  for (var i = 0, file, files = this.files; file = files[i++];) {
    file.scan()
  }
}

Folder.prototype.remove = function() {
  if (!this.parent) { // 根节点或游离节点
    return
  }

  for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l]
    if (file === this) {
      files.splice(l, 1)
    }
  }
}

var File = function(name) {
  this.name = name
  this.parent = null
}

File.prototype.add = function() {
  throw new Error('不能添加在文件下面')
}

File.prototype.scan = function() {
  log('开始扫描文件,', this.name)
}

File.prototype.remove = function() {
  if (!this.parent) { // 根节点或游离节点
    return
  }

  for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l]
    if (file === this) {
      files.splice(l, 1)
    }
  }
}

var folder = new Folder('学习资料')
var folder1 = new Folder('JavaScript')

var fole1 = new Folder('深入浅出Node.js')
folder1.add(new File('JavaScript设计模式与开发实践'))
folder.add(folder1)

folder1.remove()
folder.scan()
