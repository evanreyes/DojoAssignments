/*Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).

Example: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).*/

function sigma(num){
    var total = 0
    for (var x = 1; x <= num; x++){
        total = total + x;

    }
    console.log(total)
}
sigma(5)
