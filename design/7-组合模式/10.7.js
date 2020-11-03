// 10.7 组合模式的例子——扫描文件夹

var log = console.log

/**
 * Folder
 */
var Folder = function(name) {
  this.name = name
  this.files = []
}

Folder.prototype.add = function(file) {
  this.files.push(file)
}

Folder.prototype.scan = function() {
  log('开始扫描文件', this.name)
  for (var i = 0, file, files = this.files; file = files[i++];) {
    file.scan()
  }
}

var File = function(name) {
  this.name = name
}

File.prototype.add = function() {
  throw new Error('文件下面不能添加文件')
}

File.prototype.scan = function() {
  log('开始扫描文件', this.name)
}

var folder = new Folder('学习资料')
var folder1 = new Folder('JavaScript')
var folder2 = new Folder('jQuery')

var file1 = new File('JavaScript')
var file2 = new File('精通jQuery')
var file3 = new File('重构于模式')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

console.log(folder)

// 假设将文件都复制到这棵树
var folder3 = new Folder('Node.js')
var file4 = new File('深入浅出Node.js')

folder3.add(file4)

var file5 = new File('JavaScript 语言精髓于编程实践')

folder.add(folder3)
folder.add(file5)


folder.scan()