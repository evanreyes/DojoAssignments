// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Second: can you simplify/shorten your code?

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

var cents = 0
function generateCoinChange(cents){
    console.log('Change for '+cents+' cents is:');

    var quarters = Math.floor(cents/25);
    cents = cents % 25;
    console.log(quarters+' quarters');

    var dimes = Math.floor(cents/10);
    cents = cents % 10;
    console.log(dimes+' dimes');

    var nickels = Math.floor(cents/5);;
    cents = cents % 5;
    console.log(nickels+' nickels');
    console.log(cents+' pennies');
}
generateCoinChange(43)
