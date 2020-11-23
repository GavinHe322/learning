// 22.10 分解大类型

// before
var Spirit = function(name) {
  this.name = name
}

Spirit.prototype.attack = function(type) {
  if (type === 'waveBoxing') {
    console.log(this.name + ',使用波动拳')
  } else if (type === 'whirlKick') {
    console.log(this.name + ',使用旋风腿')
  }
}

var spirit = new Spirit('gavin')
spirit.attack('waveBoxing')

// after
var Attack = function(spirit) {
  this.spirit = spirit
}

Attack.prototype.start = function(type) {
  return this.list[type].call(this)
}

Attack.prototype.list = {
  waveBoxing: function() {
    console.log(this.name + ',使用波动拳')
  },
  whirlKick: function() {
    console.log(this.name + ',使用旋风腿')
  }
}

var Spirit = function(name) {
  this.name = name
  this.attackObj = new Attack(this)
}

Spirit.prototype.attack = function(type) {
  this.attackObj.start(type)
}

var spirit = new Spirit('gavin')
spirit.attack('waveBoxing')
