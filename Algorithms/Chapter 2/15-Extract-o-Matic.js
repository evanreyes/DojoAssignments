/* Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.

Third: handle negative num values as well, doing what you think is appropriate. */

function extractDigit(num,digitNum) {
	num = num % Math.pow(10, digitNum + 1);
	return Math.floor(num / Math.pow(10, digitNum));
}

// console.log(extractDigit(1824,2))

function extractNeg(num,digitNum){
	if (digitNum > 0) {
		return extractDigit(num,digitNum);
	}
	while (digitNum !== 0) {
		num = num % 1;
		num *= 10;
		digitNum++;
	}
	return Math.floor(num);

}

// console.log(extractNeg(1.234,-2))

function extract3(num,digitNum) {
	return extractNeg(Math.abs(num), digitNum);
}

console.log(extract3(1824,2))
