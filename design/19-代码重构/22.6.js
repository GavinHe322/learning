// 22.6 传递对象参数代替过长的参数列表

const log = console.log

// before
var setUserInfo = function(id, name, address, sex, mobile, qq) {
  log('id=' + id)
  log('name=' + name)
  log('address=' + address)
  log('sex=' + sex)
  log('mobile=' + mobile)
  log('qq=' + qq)
}

// after
var setUserInfo = function(obj) {
  log('id=' + obj.id)
  log('name=' + obj.name)
  log('address=' + obj.address)
  log('sex=' + obj.sex)
  log('mobile=' + obj.mobile)
  log('qq=' + obj.qq)
}

// 无需考虑传入的顺序
setUserInfo({
  name: 'gavin',
  id: 1,
  // address: '广州',
  sex: 1,
  mobile: '15555555555',
  qq: null
})
