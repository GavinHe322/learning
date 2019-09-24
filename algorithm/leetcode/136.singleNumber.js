/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var ans = 0;
    for (const num of nums) {
        ans ^= num;
    }
    return ans;
};
console.log(
    singleNumber([1,2,3,4])
)
