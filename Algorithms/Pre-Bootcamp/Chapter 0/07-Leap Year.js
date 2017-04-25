//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapyear(y){
	if ((y % 4 !== 0 && y % 100 == 0) || (y % 400 == 0)) {
		console.log(y+" is a "+"leap year!")
		}
	else {
		console.log(y+" is "+"not a leap year...")
		}
}
leapyear(1600)
