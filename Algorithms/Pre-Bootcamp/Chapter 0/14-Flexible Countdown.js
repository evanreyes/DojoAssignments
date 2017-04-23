//Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), print the numbers in multiples of mult from highNum down to lowNum, using a FOR loop. Example: For (2,9,3), print 9 6 3 (on successive lines).

function flex(lowNum,highNum,mult) {
	var x = lowNum;
	var y = highNum;
	var z = mult;
		for (var y = highNum; y >= x; y = y - z) {
			console.log(y)
			}
}
flex(2,9,3)