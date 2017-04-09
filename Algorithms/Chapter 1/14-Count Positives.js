//Given array of numbers, create function to replace last value with number of positive values.

function countPositives(arr) {
	pos = 0				
    for(var x = 0; x < arr.length; x++) {
    	if (arr[x] > 0)
    	{
    		pos = pos + 1
    	}

    }
    arr[arr.length-1] = pos
	console.log(arr)					
}
countPositives([-1,1,1,1])