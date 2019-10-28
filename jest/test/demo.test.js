
// 1. toEqual 递归检查对象或数组的每个字段。
// test('object assignment', () => {
//     const data = {one: 1}
//     data['two'] = 2
        
//     expect(data).toEqual({
//         one: 1,
//         two: 2
//     })
// })


// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a< 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).not.toBe(0)
//         }
//     }
// })


// 2. 真实性
// 在测试中，有时需要进行区分 undefined, null 以及 false，但你有时不想区别对待这些，
// toBeNull 仅匹配 null
// toBeUndefined 仅匹配 undefined
// toBeDefined 与..相反 toBeUndefined
// toBeTruthy 匹配 if 语句视为真实的任何内容
// toBeFalsy 匹配 if 语句视为假的任何内容


// test('null', () => {
//     const n = null
//     expect(n).toBeNull()
//     expect(n).toBeDefined()
//     expect(n).not.toBeUndefined()
//     expect(n).not.toBeTruthy()
//     expect(n).toBeFalsy()
//     // expect(n).toBe(!!0) // error
// })

// test('zero', () => {
//     const n = 0
//     expect(n).not.toBeNull()
//     expect(n).toBeDefined()
//     expect(n).not.toBeUndefined()
//     expect(n).toBeFalsy()
//     expect(n).not.toBeTruthy()
// })



// 3. 对于浮点相同，请使用toBeCloseTo 代替 toEqual, 因为您不希望依赖于微笑的摄入误差。
// test('adding floating point numbers', () => {
//     const value = 0.1 + 0.2
//     expect(value).toBeCloseTo(0.3); // this works.
// })


// 4. 匹配
// 你可以使用 toMatch 以下命令针对正则表达式检查字符串
// test('there is not i in team', () => {
//     expect('team').not.toMatch(/I/)
// })

// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/)
// })


// 5. 数组和可迭代器
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
]

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
})
