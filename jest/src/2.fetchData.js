function fetchData(callback) {
    return new Promise((resolve, reject) => {
        reject('peanut butter error')
        // resolve('peanut butter')
    })
    // callback('peanut butter')
}
module.exports = fetchData