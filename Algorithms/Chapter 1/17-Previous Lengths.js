//You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function prev(arr) {			
    for(var x = 0; x < arr.length; x++) {
    	if (x % 2 !== 0)
    	{
    		arr[x] = arr[x] + 1
    	}

    }
	console.log(arr);
	return arr;					
}
prev(["one","two","three","four","five"])