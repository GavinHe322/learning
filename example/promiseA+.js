
// 初始版本myPromise

// v1.0 初始版本myPromise
// function myPromise(constructor) {
//     let _this = this;
//     _this.status = 'pending' //定义状态改变前的初始状态
//     _this.value = undefined
//     _this.reason = undefined

//     function resolve(value) {
//         // 如果 === 'pending', 保证了状态的改变是不可逆的
//         if (_this.status === 'pending') {
//             _this.value = value
//             _this.status = 'resolved'
//         }
//     }

//     function reject(reason) {
//         // 两个 === 'pending', 保证了状态的改变是不可逆的
//         if (_this.status === 'pending') {
//             _this.reason = reason
//             _this.status = 'rejected'
//         }
//     }

//     // 捕获构造异常
//     try {
//         constructor(resolve, reject)
//     } catch(e) {
//         reject(e)
//     }
// }

// myPromise.prototype.then = function( onFullfilled, onRejected) {
//     let _this = this;
//         // console.log(_this.status)
//     switch(_this.status) {
//         case 'resolved':
//             onFullfilled(_this.value)
//             break
//         case 'rejected':
//             onRejected(_this.reason)
//             break
//         default:
//     }
// }

// var p = new myPromise(
//     function (resolve, reject) {
//         resolve(1)
//     }
// )
// p.then(
//     function (x) {
//         console.log(x)
//     }
// )


// v2.0 基于观察者模式实现

// 为了处理异步resolve, 我们修改myPromise的定义，用两个数组onFullfilledArray 和RejectedArray
// 来保存异步的方法。在状态发生改变时， 一次遍历执行数组中的方法。

// function myPromise(constructor) {
//     let _this = this
//     _this.status = 'pending' //定义状态改变前的初始状态
//     _this.value = undefined  //定义状态resolved 时候的状态
//     _this.reason = undefined  //定义状态为 rejected时候的状态
//     _this.onFullfillArray = []
//     _this.onRejectedArray = []

//     function resolve(value) {
//         if (_this.status === 'pending'){
//             _this.value =value
//             _this.onFullfillArray.forEach(function (f) {
//                 f(_this.value)
//                 // 如果状态pending 变为 resolved.
//                 // 那么就遍历执行里面的异步方法
//             })
//         }
//     }

//     function reject(reason) {
//         if (_this.status === 'pending') {
//             _this.reason = 'reason'
//             _this.status = 'rejected'
//             _this.onRejectedArray.forEach(function(f) {
//                 f(_this.value)
//                 // 如果状态pending 变为rejected
//                 // 那么久遍历执行里面的异步方法
//             })
//         }
//     }

//     // 捕获异常
//     try {
//         constructor(resolve, reject)
//     } catch (e) {
//         reject(e)
//     }
// }


// myPromise.prototype.then = function(onFullfilled, onRejected) {
//     let _this = this
//     switch(_this.status) {
//         case 'pending':
//             _this.onFullfillArray.push(
//                 function () {
//                     onFullfilled(_this.value)
//                 }
//             )
//             _this.onRejectedArray.push(
//                 function () {
//                     onRejected(_this.reason)
//                 }
//             )
//         case 'resolved':
//             onFullfilled(_this.value)
//             break
//         case 'rejected':
//             onRejected(_this.reason)
//             break
//         default:
//     }
// }

// var promise = new myPromise(
//     function (resolve, reject) {
//         setTimeout( () => {
//             resolve('可以了')
//         }, 5000)
//     }
// )

// promise.then(
//     function(e) {
//         //  还未完善， 这里会执行两次
//         // console.log(e, 'eee?')
//     }
// )

function myPromise(constructor) {
    let _this = this
    _this.status = 'pending' //定义状态改变前的初始状态
    _this.value = undefined  //定义状态resolved 时候的状态
    _this.reason = undefined  //定义状态为 rejected时候的状态
    _this.onFullfillArray = []
    _this.onRejectedArray = []

    function resolve(value) {
        if (_this.status === 'pending'){
            _this.value =value
            _this.onFullfillArray.forEach(function (f) {
                f(_this.value)
                // 如果状态pending 变为 resolved.
                // 那么就遍历执行里面的异步方法
            })
        }
    }

    function reject(reason) {
        if (_this.status === 'pending') {
            _this.reason = 'reason'
            _this.status = 'rejected'
            _this.onRejectedArray.forEach(function(f) {
                f(_this.value)
                // 如果状态pending 变为rejected
                // 那么久遍历执行里面的异步方法
            })
        }
    }

    // 捕获异常
    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

// new Promise( function (resolve, reject) {
//     setTimeout( () => {
//         resolve('new Promise')
//     }, 5000)
// }).then(function(e) {
//     console.log(e);
//     console.log('after?')
// })