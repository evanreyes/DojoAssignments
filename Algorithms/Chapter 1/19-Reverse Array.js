//Given array, write a function that reverses values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverse(arr) {
    for(var x = 0; x < arr.length; x++) {
        temp = arr[arr.length - 1]
        arr[x] = temp
    }
	console.log(arr)
}
reverse([1,2,3,4,5])