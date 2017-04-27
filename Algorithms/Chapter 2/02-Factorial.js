/*Just the Facts, ma'am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).

Example: factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).*/

function factorial(num){
    var total = 1
    for (var x = 1; x <= num; x++){
        total = total * x;

    }
    console.log(total)
}
factorial(5)
