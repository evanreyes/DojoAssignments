//You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function prev(arr) {
    for(var x = 0; x < arr.length; x++) {
        if (x>0) {
            z = x - 1;
            y = arr[x].length;
            arr[x] = y;
        }
        else {
            arr[x] = 0;
        }

    }

	console.log(arr);
	return arr;
}
prev(["one","two","three","four","five"])
