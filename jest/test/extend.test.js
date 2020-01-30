expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        console.log(received, floor, ceiling, 'original--------------')
        const pass = received >= floor && received <= ceiling
        if (pass) {
            return {
                message: () => 
                `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true
            }
        } else {
            return {
                message: () => 
                `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false
            }
        }
    }
})


test('numeric ranges', () => {
    expect(100).toBeWithinRange(90, 100)
    expect(101).not.toBeWithinRange(0, 100)
    // expect(101).not.toBeWithinRange(0, 102) // error
    var obj = {
        apples: 6,
        bananas: 3
    }
    expect(obj).toEqual({
        apples: expect.toBeWithinRange(1, 10),
        bananas: expect.not.toBeWithinRange(11, 20)
    })
})