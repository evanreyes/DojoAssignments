//Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

function shift(arr) {
	var arr = [1,2,3,4,5]
	for(var x = 0; x < arr.length; x++){
		arr[x] = arr[x+1];
		arr.push(0);
	}
    return arr
}
shift([1,2,3,4,5])