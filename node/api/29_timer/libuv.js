// nodejs的网络I/O、文件I/O、DNS操作、还有一些用户代码都是在 libuv 工作的

// 异步事件
/**
 * 非I/O
 *  定时器(setTimeout、setInterval)
 *  miscrotask(promise)
 *  process.nextTick
 *  setImmediate
 *  DNS.lookup
 * I/O
 *  网络I/O
 *  文件I/O
 *  一些DNS操作
 * ...
 */

//  网络I/O
/**
 * 对于网络I/O，各个平台的实现机制不一样
 * linux 是 epoll 模型
 * 类 unix 是 kquene
 * windows 下是高效的 IOCP 完成端口
 * SunOs 是 event ports
 * libuv 对这几种网络I/O模型进行了封装
 */

//  文件I/O、一步DNS操作
/**
 * 默认四个线程的线程池
 * 当js层传递 libuv 一个操作任务时，libuv会把这个任务添加到队列中
 * 
 * 1. 线程池中的线程被占用的时候，队列中任务就要进行排队等待空闲线程。
 * 2. 线程池中有可用线程时，从队列中取出这个任务执行，执行完毕后，线程归还
 *    到线程池，等待下个任务。同事以事件的方式通知 event-loop，event-loop接收到
 *    执行该事件注册的回调函数。
 */


// node 启动过程
/**
 * 1、调用 platformInit 方法，初始化 nodejs 的运行环境
 * 2、调用 performance_node_start 方法，对 nodejs 进行性能统计
 * 3、openssl 设置的判断
 * 4、调用 v8_platform.Initialize，初始化 libuv 线程池
 * 5、调用 V8::Initialize，初始化 V8环境
 * 6、创建一个 nodejs 运行实例
 * 7、启动上一步创建好的实例
 * 8、开始执行 js 文件，同步代码执行完毕后，进入时间循环
 * 9、在没有任何可监听的事件时，销毁 nodejs 实例，程序执行完毕
 */


// 事件循环原理
/**
 * node的初始化
 *   初始化 node 环境
 *   执行输入代码
 *   执行 process.nextTick 回调
 *   执行 microtasks
 * 进入 event-loop
 *   进入 timers 阶段
 *     检查 timer 队列是否有到期的 timer 回调，将到期的 timer 回调按照 timerId 升序执行
 *     检查是否有 process.nextTick 任务，如果有，全部执行
 *     检查是否有 microTask，如果有，全部执行
 *     退出该阶段
 *   进入 IO callbacks 阶段
 *     检查是否有 pending 的 I/O 回调。如果有，执行回调。如果没有，退出该阶段
 *     检查是否有 process.nextTick 任务，如果有，全部执行。
 *     检查是否有 microtask，如果有，全部执行
 *     退出该阶段
 *   进入 idle、prepare 阶段
 *     这两个阶段关系不大
 *   进入 poll 阶段
 *     首先检查是否存在尚未完成的回调，如果存在，那么分两种情况
 *       第一种
 *          如果有回调(可用回调包含到期的定时器还有一些IO时间等)，执行所有可用回调
 *          检查是否有 process.nextTick 回调，如果有，全部执行
 *          检查是否有 microtasks，如果有，全部执行
 *          退出该阶段
 *       第二种
 *          如果没有可用回调
 *          检查是否有 immediate 回调，如果有，退出 poll 阶段，如果没有，阻塞此阶段，等待新的事件通知
 *     如果不存在尚未完成的回调，退出 poll 阶段
 *   进入 check 阶段
 *     如果有 immediate 回调，则执行所有 immediate 回调
 *     检查是否有 process.nextTick 回调，如果有，全部执行
 *     检查是否有microTasks, 如果有，全部执行
 *     退出 check 阶段
 *   进入 closing 阶段
 *     如果有 immediate 回调，则执行所有 immediate 回调
 *     检查是否有process.nextTick 回调，如果有，全部执行
 *     检查是否有microtasks,如果有，全部执行。
 *     退出 closing 阶段
 *   检查是否有活跃的 handles (定时器、IO事件句柄)
 *     如果有，继续下一轮循环
 *     没有，结束时间循环、退出程序
 */

/**
 * 相同点
 *   存在 process.nextTick 回调，全部执行
 *   存在 microTasks，全部执行
 *   退出该阶段
 */