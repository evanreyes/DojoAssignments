//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

var arr = [1,3,5,7,9,13]
var values = 0
for (var x = 0; x < arr.length; x++) {
	if(arr[x] > arr[1]) {
		console.log(arr[x])
		values = values + 1
		}
}
console.log(values)