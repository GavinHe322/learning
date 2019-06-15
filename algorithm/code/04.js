/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2);
    arr.sort( (a, b) => {
        return a - b
    });
    var i = arr.length

    return   i % 2 == 1 ? arr[ (i % 2) ] : (arr[i / 2] + arr[i / 2 - 1]) / 2
};

var nums1 = [1, 3]

var nums2 = [2]

console.log(
    findMedianSortedArrays(nums1, nums2)
)