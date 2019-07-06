
var bubbleSort = function(arr) {
    let len = arr.length

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j +1], arr[j]] = [arr[j], arr[j +1]]
            }
        }
    }
    return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(
    bubbleSort(arr)
)