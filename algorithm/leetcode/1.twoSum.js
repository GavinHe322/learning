var sum = [2, 7, 2, 15]
var target = 9
// retun [0, 1]
function toSum(nums, target) {
    // 1.O(n²)
    // var i = 0,
    //     len = nums.length
    //     for (i; i < len; i++) {
    //         for (var j = i + 1; j < len; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 return [i, j]
    //             }
    //         }
    //     }
    // 2. O(n)
    var a = [],
        len = nums.length
    // debugger
    for (let i = 0; i < len; i++) {
        let tem = target - nums[i]
        // 7 2
        if (a[tem] != undefined) return [a[tem], i]
        // 2 
        a[nums[i]] = i
    }
}
console.log(
    toSum(sum, target)
)

var sum = [2, 7, 2, 15]
var target = 9

function toSum(nums, target) {
    let a = [],
        len = nums.length
    for (var i = 0; i < len; i++) {
        let tem = target - nums[i]

        if (a[tem] != undefined) return [a[tem], i]
        a[nums[i]] = i
    }
}