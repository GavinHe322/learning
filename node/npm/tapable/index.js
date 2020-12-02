const {
  SyncHook, // 同步钩子 从上到下顺序执行
  SyncBailHook, // 同步早退钩子 从上到下顺序执行，遇到返回值不是undefined的注册函数时停止执行
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelBailHook,
  AsyncParallelHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require('tapable')
