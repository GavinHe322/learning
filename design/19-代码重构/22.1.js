// 22.1 提炼函数
/**
 * 好处:
 *   避免出现超大函数
 *   独立出来的函数有助于代码复用
 *   独立出来的函数容易被覆写
 *   独立出来的函数如果拥有一个良好的命名，它本身就起到了注释的作用
 */

function ajax() {
  const data =  {
    userId: 1,
    userName: 'gavin'
  }
  return Promise.resolve(data)
}

// before
var getUserInfo = function() {
  ajax().then((data) => {
    console.log('userId:' + data.userId)
    console.log('userName:' + data.userName)
  })
}

// after
var getUserInfo = function() {
  ajax().then((data) => {
    printDetails(data)
  })
}

var printDetails = function(data) {
  console.log('userId:' + data.userId)
  console.log('userName:' + data.userName)
}
