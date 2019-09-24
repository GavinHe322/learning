/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) return nums[i]
    // }
    // return ans;
    let numsObj = {}

    for (let i = 0, l = nums.length; i < l; i++) {
        if (numsObj[nums[i]]) {
            delete numsObj[nums[i]]
        } else {
            numsObj[nums[i]] = 1
        }
    }
    return Object.keys(numsObj)[0]
};

console.log(
    singleNumber([1, 1, 2, 3, 4, 4])
)
