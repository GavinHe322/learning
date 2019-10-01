/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  * 时间复杂度 O(n)
  * 空间复杂度 O(1)
  */
var removeDuplicates = function(nums) {
    if (!nums.length) return 0
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        // debugger
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

var arr = [1, 1, 3, 4, 4, 5, 5]
removeDuplicates(
    arr
)

console.log(arr)