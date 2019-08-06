
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

// new Promise( function (resolve, reject) {
//     setTimeout( () => {
//         resolve('new Promise')
//     }, 5000)
// }).then(function(e) {
//     console.log(e);
//     console.log('after?')
// })

// function myPromise(constructor){
//     let self = this;
//     self.status="pending";
//     self.value = undefined;//if pending->resolved
//     self.reason = undefined;//if pending->rejected
//     self.onFullfilledArray = [];//to deal with async(resolved)
//     self.onRejectedArray = [];//to deal with async(rejeced)
//     function resolve(value){
//       //pending->resolved
//       if(self.status === "pending"){
//         self.status = "resolved";
//         self.value = value;
//         self.onFullfilledArray.forEach(function(f){
//           f(self.value);
//         })
//       }
//     }
//     function reject(reason){
//       if(self.status === "pending"){
//         self.status = "rejected";
//         self.reason = reason;
//         self.onRejectedArray.forEach(function(f){
//           f(self.reason);
//         })
//       }
//     }
//     //According to the definition that the function "constructor" accept two parameters
//     //error catch
//     try {
//       constructor(resolve,reject);
//     } catch (e) {
//       reject(e);
//     }
//   }
//   myPromise.prototype.then = function(onFullfilled, onRejected){
//     onFullfilled = typeof onFullfilled === "function" ? onFullfilled:function(x){return x};
//     onRejected = typeof onRejected === "function" ? onRejected:function(e){throw e};
//     let self = this;
//     let promise2;
//     switch (self.status) {
//       case "pending":
//          promise2 = new myPromise(function(resolve,reject){
//            self.onFullfilledArray.push(function(){
//               setTimeout(function(){
//                 try {
//                   let temple = onFullfilled(self.value);
//                   resolvePromise(promise2,temple,resolve,reject);
//                 } catch (e) {
//                   reject(e)
//                 }
//               })
//            });
//            self.onRejectedArray.push(function(){
//               setTimeout(function(){
//                 try {
//                   let temple = onRejected(self.reason);
//                   resolvePromise(promise2,temple,resolve,reject);
//                 } catch (e) {
//                   reject(e)
//                 }
//               })
//            })
//          });
//          break;
//       case "resolved":
//          promise2 = new myPromise(function(resolve,reject){
//               setTimeout(function(){
//                 try {
//                   let temple=onFullfilled(self.value);
//                   resolvePromise(promise2,temple,resolve,reject);
//                 } catch (e) {
//                   reject(e)
//                 }
//               })
//          });
//          break;
//       case "rejected":
//           promise2 = new myPromise(function(resolve,reject){
//                 setTimeout(function(){
//                   try {
//                     let temple=onRejected(self.reason);
//                     resolvePromise(promise2,temple,resolve,reject);
//                   } catch (e) {
//                     reject(e)
//                   }
//                 })
//              });
//          break;
//       default:
//     }
//     return promise2;
//   }
//   function resolvePromise(promise, x, resolve, reject){
//     if(promise === x){
//       return reject(new TypeError("Cyclic reference"));
//     }
//     let isUsed;
//     if(x !== null && (typeof x === "object" || typeof x === "function")){
//       try{
//         let then=x.then;
//         if(typeof then==="function"){
//           //
//           then.call(x,function(y){
//             if(isUsed)return;
//             isUsed=true;
//             resolvePromise(promise,y,resolve,reject)
//           },function(e){
//             if(isUsed)return;
//             isUsed=true;
//             reject(e);
//           })
//         }else{
//           resolve(x);
//         }
//       }catch(e){
//         if(isUsed)return;
//         isUsed=true;
//         reject(e);
//       }
//     }else{
//       resolve(x);
//     }
//   }
//   myPromise.deferred=function(){
//     let dfd={};
//     dfd.promise=new myPromise(function(resolve,reject){
//       dfd.resolve=resolve;
//       dfd.reject=reject;
//     });
//     return dfd;
//   }
  
// var p = new myPromise(function(resolve,reject){
//     setTimeout(function() {
//         resolve('123')
//     }, 3000)
// });

// function fn (e) {
//     console.log('after', e)
// }
// p.then(fn)






function myPromise(constructor) {
  let self = this
  self.status = 'pending'
  self.value = undefined // if pending -> resolved
  self.reason = undefined // if pending -> rejected
  self.onFullfilledArray = [] //to deal with async (resolved)
  self.onRejectedArray = []  // to deal with async(rejeced)
  function resolve(value) {
    // pending -> resolved
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.value = value
      self.onFullfilledArray.forEach(function(f) {
        f(self.value)
      })
    }
  }
  function reject(reason) {
    if (self.status == 'pending') {
      self.status = 'rejected'
      self.reason = reason
      self.onRejectedArray.forEach(function (f) {
        f(self.reason)
      })
    }
  }
  // according to the definition that the function 'constructor' accept two parameters
  // error catch
  try {
    constructor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}


myPromise.prototype.then = function(onFullfilled, onRejected) {
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : function(x) {return x}
  onRejected = typeof onRejected === 'function' ? onRejected : function(e) {throw e}

  let self = this
  let promise2
  switch(self.status) {
    case 'pending':
      promise2 = new myPromise(function(resolve, reject) {
        self.onFullfilledArray.push(function() {
          setTimeout(function() {
            try {
              let temple = onFullfilled(self.value)
              resolvePromise(promise2, temple, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        self.onRejectedArray.push(function() {
          setTimeout(function() {
            try {
              let temple = onRejected(self.reason)
              resolvePromise(promise2, temple, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }) 
      break;
    case 'resolved':
      promise2 = new myPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let temple = onFullfilled(self.value)
            resolvePromise(promise2, temple, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }) 
      break;
    case 'rejected':
      promise2 = new myPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let temple = onRejected(self.reason)
            resolvePromise(promise2, temple, resolve, reject)
          } catch(e) {
            reject(e)
          }
        })
      })
      break;
    default:
  }
  return promise2
}

function resolvePromise(promise, x, resolve, reject) {
  // x 未 value
  if (promise === x) {
    return reject(new TypeError('cyclic reference'))
  }
  let isUsed;
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, function(y) {
          if (isUsed) return;
          isUsed = true
          resolvePromise(promise, y, resolve, reject)
        }, function(e) {
          if (isUsed) return
          isUsed = true
          reject(e)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (isUsed) true
      isUsed = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

myPromise.deferred = function() {
  let dfd = {}
  dfd.promise = new myPromise(function(resolve, reject) {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

console.log('window. 1')
var p = new myPromise( function(resolve, reject) {
  console.log('timeout before 2')
  setTimeout(function() {
    resolve('setTimeout inner 3')
  }, 3000)
  console.log('timeout after 4')
})
console.log('window. 5')


p.then(function(e) {
  console.log(e)
})


console.log('window. 11')
var b = new Promise( function(resolve, reject) {
  console.log('timeout before 12')
  setTimeout(function() {
    resolve('setTimeout inner 13')
  }, 3000)
  console.log('timeout after 14')
})
console.log('window. 15')


b.then(function(e) {
  console.log(e)
})

// console.log('window. 111')
// var c = new Promise( function(resolve, reject) {
//   console.log('timeout before 112')
//   setTimeout(function() {
//     resolve('setTimeout inner 113')
//   }, 3000)
//   console.log('timeout after 114')
// })
// console.log('window. 115')


// c.then(function(e) {
//   console.log(e)
// })

function myPromise(constructor) {
  let self = this
  self.status = 'pending'
  self.value = undefined // if pending -> resolved
  self.reason = undefined // if pending -> rejected
  self.onFullfilledArray = [] // to deal with async (resolved)
  self.onRejectedArray = [] // to deal with async (rejected)

  function resolve(value) {
    // pending -> resolved
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.value = value
      self.onFullfilledArray.forEach(function (f) {
        f(self.value)
      })
    }

    function reject(reason) {
      if (self.status == 'pending') {
        self.status = 'rejected'
        self.reason = reason
        self.onRejectedArray.forEach(function (f) {
          f(self.reason)
        })
      }
    }
    // according to the definition that the function 'constructor' accept two parameters
    // erro catch
    try {
      constructor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : function (x) {return x}
  onRejected = typeof onRejected === 'function' ? onRejected : function(e) {throw e}

  let self = this
  let promise2

  switch(self.status) {
    case 'pending':
      promise2 = new myPromise(function(resolve, reject) {
        self.onFullfilledArray.push(function() {
          setTimeout(function () {
            try {
              let temple = onFullfilled(self.value)
              resolvePromise(promise2, temple, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }) 
      self.onRejectedArray.push(function() {
        setTimeout(function() {
          try {
            let temple = onRejected(self.reason)
            resolvePromise(promise2, temple, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      })
      break
    case 'resolved':
      promise2 = new myPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let temple = onFullfilled(self.value)
            resolvePromise(promise2, temple, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      })
      break
    default:
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('Cyclic reference'))
  }
  let isUsed
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, function(y) {
          if (isUsed) return
        })
      }
    } catch (e) {
      reject(e)
    }
  }
}