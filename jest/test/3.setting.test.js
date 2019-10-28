var {beforEach, afterEach} = require('../src/3.setting')

beforEach(() => {
    initializeCityDatabase()
})

afterEach(() => {
    clearCityDatabase()
})

function isCity(str) {
    var cityList = ['Vienna']
    return cityList.includes(str)
}

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy()
})


