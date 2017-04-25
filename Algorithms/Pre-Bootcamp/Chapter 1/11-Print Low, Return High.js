// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function plrh(arr){
	var high = 1;
	var low = 1;
	for (var i = 0; i < arr.length; i++){
		if (high < arr[i]) {
			high = arr[i]
		}
		if (low > arr[i]) {
			low = arr[i]
		}
	}
	console.log(low)
	return high;
}
plrh([1,2,3,4])
