/*Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", then "boom", then "chick" - continuing the same cycle for each number up to (including) 12.*/

function twelveBarBlues() {
    for (var x = 1; x <= 12; x++) {
        console.log(x);
        console.log('chick');
        console.log('boom');
        console.log('chick');
    }
}
twelveBarBlues()
