// 22.11 用 return 退出多重循环

/**
 * 假设在函数体内有一个两重循环语句，我们需要在内层判断，
 * 当达到某个临街条件时退出外层的循环，我们大多数时候引入一个控制标记变量
 */

//  第一种
var func = function() {
  var flag = false
  
  for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        flag = true
        break
      }
    }
    
    if (flag === true) {
      break
    }
  }
}

// 第二种
var func = function() {
  outerloop:
  for (var i = 0; i < 10; i++) {

    innerloop:
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        break outerloop
      }
    }
  }
}

// 使用 return

var print = function(i) {
  console.log(i)
}

var func = function() {
  for (var i = 0; i < 10; i++) {
    
    for(var j = 0; j < 10; j++) {
      if ( i * j > 30) {
        // 假设在 return 时要执行一些代码，并且较多时，可以提炼成一个函数
        return print(i)
      }
    }
  }
}

func()
