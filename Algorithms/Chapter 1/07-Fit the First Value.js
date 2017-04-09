//Your function should accept an array. If the value at [0] is greater than array’s length, print "Too big!"; if the value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function ftff(arr) {
	if(arr[0] > arr.length){
		console.log("Too big!")
	}
	else if(arr[0] < arr.length){
		console.log("Too small!")
	}
	else if(arr[0] = arr.length){
		console.log("Just right!")
	}
}
ftff([5,2,3,4,5])