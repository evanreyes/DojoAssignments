var total = 0;
var mult = 1;
var amount = 0;
for (day = 1; day <= 30; day++){
    if (total > 10000 && total < 20000){
        console.log("It took "+day+" days to earn $10,000.");
    }
    amount = .01 * mult;
    total = total + amount;
    mult = mult * 2;
}
console.log("$"+total)
