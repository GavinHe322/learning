// 12.4 文件上传的例子

// 12.4.1 对象爆炸
/**
 * 队列上传，同时上传 2000 个文件
 * 但是第一版开发同时 new 了2000个 upload对象，chrome 勉强支撑 ie 直接假死状态
 */

var id = 0
var log = console.log

/**
 * 
 * @param {string} uploadType 区分控件还是 flash
 * @param {Object} files file对象
 */
// window.startUpload = function(uploadType, files) {
//   for (var i = 0, file; file = files[i++];) {
//     var uploadObj = new Upload(uploadType, file.fileName, file.fileSize)
//     uploadObj.init(id++)
//   }
// }

// var Upload = function(uploadType, fileName, fileSize) {
//   this.uploadType = uploadType
//   this.fileName = fileName
//   this.fileSize = fileSize
//   this.dom = null
// }

// Upload.prototype.init = function(id) {
//   var that = this
//   this.id = id
//   this.dom = document.createElement('div')
//   this.dom.innerHTML = `
//     <span>文件名称: ${this.fileName}, 文件大小: ${this.fileSize}</span>
//     <button class="delFile">删除</button>
//   `
//   this.dom.querySelector('.delFile').onclick = function() {
//     that.delFile()
//   }
//   document.body.appendChild(this.dom)
// }

// Upload.prototype.delFile = function() {
//   if (this.fileSize < 2000) {
//     return this.dom.parentNode.removeChild(this.dom)
//   }

//   if (window.confirm('确定要删除该文件吗?' + this.fileName)) {
//     return this.dom.parentNode.removeChild(this.dom)
//   }
// }

// startUpload('plugin', [
//   {
//     fileName: '1.txt',
//     fileSize: 1000
//   },
//   {
//     fileName: '2.txt',
//     fileSize: 2000
//   },
//   {
//     fileName: '3.txt',
//     fileSize: 3000
//   },
//   {
//     fileName: '4.txt',
//     fileSize: 4000
//   },
//   {
//     fileName: '5.txt',
//     fileSize: 5000
//   }
// ])

// startUpload('flash', [
//   {
//     fileName: '1.txt',
//     fileSize: 1000
//   },
//   {
//     fileName: '2.txt',
//     fileSize: 2000
//   },
//   {
//     fileName: '3.txt',
//     fileSize: 3000
//   },
//   {
//     fileName: '4.txt',
//     fileSize: 4000
//   },
//   {
//     fileName: '5.txt',
//     fileSize: 5000
//   }
// ])


// 12.4.2 享元模式重构文件上传
/**
 * 1、内部状态存储于对象内部
 * 2、内部状态可以被一些对象共享
 * 3、内部状态独立于具体的长江，通常不会改变
 * 4、外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享
 */

//  12.4.3 剥离外部状态
var Upload = function(uploadType) {
  this.uploadType = uploadType
}

Upload.prototype.delFile = function(id) {
  uploadMangager.setExternalState(id, this)

  if (this.fileSize < 2000) {
    return this.dom.parentNode.removeChild(this.dom)
  }

  if (window.confirm('确定要删除该文件吗?' + this.fileName)) {
    return this.dom.parentNode.removeChild(this.dom)
  }
}

// 12.4.4 工厂进行对象实例化
var UploadFactory = (function() {
  var createdFlyWeightObjs = {}

  return {
    createdFlyWeightObjs,
    create: function(uploadType) {
      if (createdFlyWeightObjs[uploadType]) {
        return createdFlyWeightObjs[uploadType]
      }

      return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
    }
  }
})()

// 12.4.5 管理封装状态外部状态

var uploadMangager = (function() {
  var uploadDataBase = {}

  return {
    add: function(id, uploadType, fileName, fileSize) {
      var flyWeightObj = UploadFactory.create(uploadType)

      var dom = document.createElement('div')
      dom.innerHTML = `
        <span>文件名称: ${fileName}, 文件大小: ${fileSize}</span>
        <button class="delFile">删除</button>
      `
      dom.querySelector('.delFile').onclick = function() {
        flyWeightObj.delFile(id)
      }
      document.body.appendChild(dom)

      uploadDataBase[id] = {
        fileName,
        fileSize,
        dom
      }
      return flyWeightObj
    },
    setExternalState: function(id, flyWeightObj) {
      var uploadData = uploadDataBase[id]
      for (var i in uploadData) {
        flyWeightObj[i] = uploadData[i]
      }
    }
  }
})()

var id = 0

window.startUpload = function(uploadType, files) {
  for (var i = 0, file; file = files[i++];) {
    var uploadObj = uploadMangager.add(++id, uploadType, file.fileName, file.fileSize)
  }
}

startUpload('plugin', [
  {
    fileName: '1.txt',
    fileSize: 1000
  },
  {
    fileName: '2.html',
    fileSize: 2000
  },
  {
    fileName: '3.txt',
    fileSize: 3000
  }
])

startUpload('flash', [
  {
    fileName: '1.txt',
    fileSize: 1000
  },
  {
    fileName: '2.html',
    fileSize: 2000
  },
  {
    fileName: '3.txt',
    fileSize: 3000
  }
])
