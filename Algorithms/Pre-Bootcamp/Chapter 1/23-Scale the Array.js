//Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.

function scale(arr,num) {
    for(var x = 0; x < arr.length; x++) {
		arr[x] = arr[x]*num;
	}
	console.log(arr);
	return arr;
}
scale([1,2,3,4,5], 5)
