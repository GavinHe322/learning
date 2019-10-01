/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 /**
给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
  */

var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

var nums = [0, 1, 2, 2, 3, 0, 4, 2], 
    val = 2

removeElement(nums, val)