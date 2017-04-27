//Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensandodds(arr) {			
    for(var x = 0; x < arr.length; x++) {
    	if (arr[x] > 0)
    	{
    		pos = pos + 1
    	}

    }
    arr[arr.length-1] = pos
	console.log(arr)					
}
evensandodds([-1,1,1,1])