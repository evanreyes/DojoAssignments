/* If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant. Given a number of any size, return the most significant digit. If you already know what strings are, that’s great! However, don’t use them here J. Hint: use WHILE to bring the most significant digit into a range where you can use the friendly modulus operator (%). The most significant digit is the leftmost non-zero digit of a number. Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.

Second: handle negative num values as well, doing what you think is appropriate. */

function signif(num) {
	num = num % Math.pow(10, num.length-1);
	console.log(num)
	// return Math.floor(num / Math.pow(10, digitNum));
}

console.log(signif(12345))
