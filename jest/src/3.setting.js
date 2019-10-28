function beforEach(callback) {
    console.log('before')
    // callback()
}

function afterEach(callback) {
    console.log('after')
    // callback()
}

module.exports = {
    beforEach: beforEach,
    afterEach: afterEach
}