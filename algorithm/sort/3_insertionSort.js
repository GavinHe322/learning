/**
 * 它的工作原理是通过构建有序序列，对于未排序数据，
 * 在已排序序列中从后向前扫描，找到相应位置并插入。
 * 插入排序在实现上，通常采用 in-place 排序
 * （即只需用到 O(1)的额外空间的排序），因而在从后向前扫描过程中，
 * 需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
 */

/**
 * <1>.从第一个元素开始，该元素可以认为已经被排序；
    <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
    <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
    <4>.重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
    <5>.将新元素插入到该位置后；
    <6>.重复步骤 2~5。
 */

function insertionSort(arr) {
  console.time('插入排序')
    var len = arr.length
    for (var i = 1; i < len; i++) {
        var key = arr[i]
        var j = i -1
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    console.timeEnd('插入排序')
    return arr
 }

 var arr = []
 for (var i = 0; i < 5; i ++) {
    arr.push(
      Math.ceil(Math.random() * 1000)
    )
}

console.log(
  binaryInsertionSort(arr)
)

function binaryInsertionSort(array) {
    console.time("二分插入排序耗时：");
    for (var i = 1; i < array.length; i++) {
      var key = array[i],
        left = 0,
        right = i - 1;
      while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < array[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
      }
      array[left] = key;
    }
    console.timeEnd("二分插入排序耗时：");
    return array;
}


/**
   最佳情况：输入数组按升序排列。(T(n) = O(n))
   最坏情况：输入数组按降序排列。(T(n) = O(n2))
   平均情况：(T(n) = O(n2))
 */


