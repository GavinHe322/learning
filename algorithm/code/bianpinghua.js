function fn(arr) {
	let newArr = []
	for (var i in arr){
		if (Array.isArray(arr[i]) ) {
		  newArr.push( ...fn(arr[i]))
		} else {
			newArr.push(arr[i])
        }
	}
	return new Set(newArr.sort((a, b) => a - b))
}

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

var newArr = arr.toString().split(',').sort((a, b) => a -b)
console.log(
    newArr
)
console.log(
    fn (arr )
)
