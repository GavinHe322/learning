//     // const p = Promise.resolve();

//     // (async () => {
//     // await p;
//     //     console.log("after:await");
//     // })();

//     // p.then(() => {
//     //     console.log("tick:a");
//     //     setTimeout(() => {
//     //         console.log('timeout 1')
//     //     }, 2000)
//     // }).then(() => {
//     //     console.log("tick:b");
//     //     setTimeout( () => {
//     //         console.log("timeout 2")
//     //     }, 1000)
//     // });

//     async function testSync() {
//         var response = await new Promise(resolve => {
//             setTimeout(() => {
//                 resolve("async await test...");
//              }, 1000);
//         });
//         console.log('什么鬼')
//         console.log(response);
//    }
// //    testSync();//async await test...


// async function demo() {
//     var response = await new Promise( resolve => {
//         setTimeout(_ => {
//             resolve('async await timeout....')
//         }, 1000)
//     })

//     await setTimeout(() => {
//         console.log('await timeout...')
//     }, 1000)
//     console.log("???")

//     console.log(response)
// }
// demo()

// async function asyncAwaitFn(str) {
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(str)
//         }, 1000);
//     })
// }

// const serialFn = async () => { //串行执行

//     console.time('serialFn')
//     await (() =>{
//         setTimeout( _ => {
//             console.log('timeout number one ?')
//         }, 3000)
//     })()
//     console.log(await asyncAwaitFn('string 1'));
//     console.log(await asyncAwaitFn('string 2'));
//     console.timeEnd('serialFn')
// }

// serialFn();

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(x)
        }, 500)
    })
}

// var add = async function(x) {
//     var a = await resolveAfter2Seconds(20)
//     var b = await resolveAfter2Seconds(30)
//     return x + a + b
// }

// add(10).then(v => {
//     console.log(v)  //prints 60 after 2 seconds
// })

(async function(x) { // async function expression used as an IIFE
    var p_a = resolveAfter2Seconds(20);
    var p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b;
  })(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});
setTimeout( () => {
    console.log('timeout1')
    var a = new Promise(
        resolve => {
            resolve('timeout inner promise.resolve')
        }
    )
    a.then(v => {
        console.log(v)
    })
}, 500) 
console.log('outer')