//Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensodds(arr){
	var odd = 0
	var even = 0
	for (var i = 0; i < arr.length; i++){
		if (arr[i] % 2 !== 0) {
			odd = odd + 1;
			if (odd == 3) {
				console.log("That's odd!");
				odd = 0;
			}
		}
		if (arr[i] % 2 == 0) {
			even = even + 1;
			if (even == 3) {
				console.log("Even more so!");
				even = 0;
			}
		}
	}

}
evensodds([2,2,6,11,11,11,7,11,9,2,2,4])
