const {
  // 同步
  SyncHook, // 从上到下顺序执行
  SyncBailHook, // 同步早退钩子 从上到下顺序执行，遇到返回值不是undefined的注册函数时停止执行
  SyncWaterfallHook, // 依赖上一个步的执行结果
  SyncLoopHook, // 如果返回一个 非undefined，会一直循环调用回调函数，直到返回undefined
  // 异步
  AsyncParallelBailHook, // 异步并发可早退钩子
  AsyncParallelHook, // 异步并行
  AsyncSeriesHook, // 异步串行
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require('tapable')
