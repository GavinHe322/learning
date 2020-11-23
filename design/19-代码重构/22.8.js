// 22.8 少用三木运算符

// 如果条件分支逻辑简单且清晰，这无碍我们使用三木运算符
var global = typeof window !== 'undefined' ? window : this

// 如果条件非常复杂，这应该不是一种好的编写方式
if (!aup || !bup) {
  return (
    a === doc ? -1 :
      a === doc ? 1 :
        aup ? -1 :
          sortInput ?
            (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
            0
  )
}
