// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

function pora(arr){
	console.log(arr[arr.length-2])
	for (var i = 0; i < arr.length; i++){
		if (arr[i] % 2 !== 0) {
			console.log(arr[i]);
			return arr[i];
		}
	}

}
pora([2,2,6,4,11,4,6,9])
