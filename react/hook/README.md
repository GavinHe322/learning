# Hook
[refs](https://github.com/reactjs/rfcs/blob/master/text/0068-react-hooks.md)

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用

## Usage

```js
import { useState } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me!
      </button>
    </div>
  )
}
```

## 动机

Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种看起来不相关的问题。

### 在组件之间复用状态逻辑很难

React 需要为共享状态逻辑提供更好的原生途径。


### 复杂组件变得难以理解

Hook 讲组件中相互关联的部分拆分成更小的函数(比如设置订阅或请求数据)

### 难以理解的 class

Hook 使你在非 class 的情况下可以使用更多的 React 特性

