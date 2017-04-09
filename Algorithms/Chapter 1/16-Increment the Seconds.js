//Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc). Afterward, console.log each array value and return arr.

function incre(arr) {			
    for(var x = 0; x < arr.length; x++) {
    	if (x % 2 !== 0)
    	{
    		arr[x] = arr[x] + 1
    	}

    }
	console.log(arr);
	return arr;					
}
incre([1,2,3,4,5,6])