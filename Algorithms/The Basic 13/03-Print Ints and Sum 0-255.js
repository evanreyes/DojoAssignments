//Print integers from 0 to 255, and with each integer print the sum so far.

var sum = 0
for(var x = 0; x <= 255; x++){
	console.log("The integer is "+x)
	sum = sum + x
	console.log("The sum so far is "+sum)
}