/**
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 以此类推，直到所有元素均排序完毕。
 */

 function selectionSort(arr) {
     console.time('选择排序')
     var len = arr.length
     var minIndex, temp

     for (var i = 0 ; i < len - 1; i++) {
         minIndex = i
         for (var j = i + 1; j < len; j++) {
            //  1.找到比 当前 arr[i] 小的
             if (arr[j] < arr[minIndex]) {
                 minIndex = j
             }
         }
        //  2.然后在这里交换
         temp = arr[i]
         arr[i] = arr[minIndex]
         arr[minIndex] = arr[i]
     }
     console.timeEnd('选择排序')
    //  return arr
 }
 function selectionSort2(arr) {
     var len = arr.length
     var minIndex, temp
     for (var i = 0; i < len; i++) {
         minIndex = i

         for (var j = i + 1; j < len; j++) {
             
         }
     }
 }

var arr = []
 for (var i = 0; i < 1000; i ++) {
    arr.push(
      Math.ceil(Math.random() * 100)
    )
}

console.log(
    selectionSort(arr)
)

// 算法分析
// 1. 最佳/最差/平均  T(n) = O(n2)