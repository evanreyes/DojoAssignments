/* Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, however, for now, just create one that is easy to understand and debug.*/

function isPrime(num){
	for (var i = 2; i < num; i++){
		if (num % i == 0){
			return num+" is NOT prime!";
		}
	}
	return num+" IS prime!";
}

console.log(isPrime(9))
