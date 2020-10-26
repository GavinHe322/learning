// 5.2 JavaScript 中的策略模式
var strategies = {
  'S': function(salary) {
    return salary * 4
  },
  'A': function(salary) {
    return salary * 3
  }
}

var calculateBonus = function(level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonus('S', 2000))
console.log(calculateBonus('A', 2000))