var sum = [2, 7, 11, 15]
var target = 9
// retun [0, 1]
function toSum(arr, target) {
    var i = 0,
        len = arr.length

        for (i; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                if (arr[i] + arr[j] == target) {
                    return [i, j]
                }
            }
        }
}

console.log(
    toSum(sum, target)
)