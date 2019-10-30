// Don't do this!
var fetchData = require('../src/2.fetchData')

// test('the data is peanut butter', () => {
//     function callback(data) {
//         expect(data).toBe('peanut butter')
//     }
//     fetchData(callback)
// })

// test('the data is peanut butter', done => {
//     function callback(data) {
//         console.log(data, 'data')
//       expect(data).toBe('peanut butter');

//       // 如果 done() 从不调用，则测试将失败。
//       done();
//     }
  
//     fetchData(callback);
// });


// promise
// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//       expect(data).toBe('peanut butter');
//     });
// });

// test('the fetch fails with an error', () => {
//     // assertions 以验证是否调用了一定数量的断言，否则，兑现承诺就不会使测试失败。
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e).toMatch('error'));
// });


// .resolves / .rejects
// test('the data is peanut butter', () => {
//     return expect(fetchData()).resolves.toBe('peanut butter')
// })

// test('the fetch fails with an error', () => {
//     return expect(fetchData()).rejects.toMatch('error');
// });

// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
// });

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
});

