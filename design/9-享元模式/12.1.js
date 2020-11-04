// 12.1 初始享元模式

var log = console.log

/**
 * 男士内衣和女士内衣分别50种
 * 
 * 分别请50个男女模特来拍照
 * 
 * 一共产生100个对象，极其浪费
 */
var Model = function(sex, underwear) {
  this.sex = sex
  this.underwear = underwear
}

Model.prototype.takePhoto = function() {
  log(`sex = ${this.sex},underwear = ${this.underwear}`)
}

// for (var i = 1; i <= 50; i++) {
//   var maleModel = new Model('male', 'underwear' + i)
//   maleModel.takePhoto()

//   var maleModel = new Model('female', 'underwear' + i)
//   maleModel.takePhoto()
// }

/**
 * 优化
 * 优点
 * 只创建了两个对象
 * 缺点
 * 1、并不是一开始就不要两个对象
 * 2、需要手动设置外部对象 underwear
 */
var Model = function(sex) {
  this.sex = sex
}

Model.prototype.takePhoto = function() {
  log(`sex=${this.sex}, underwear=${this.underwear}`)
}

var maleModel = new Model('male'),
    femaleModel = new Model('female')

for (var i = 1; i <= 50; i++) {
  maleModel.underwear = 'underwear' + i
  maleModel.takePhoto()

  femaleModel.underwear = 'underwear' + i
  femaleModel.takePhoto()
}
