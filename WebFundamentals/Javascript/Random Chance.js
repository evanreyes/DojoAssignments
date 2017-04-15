function slots(quarters){
    win = Math.trunc(Math.random() * 100);
    console.log("(The winning number is "+win+".)");
    roll = 1;
    for (var quarters; quarters > 0; quarters--){
        spin = Math.trunc(Math.random() * 100);{
            if (spin == win) {
                prize = Math.trunc((Math.random() * 50)+50);
                total = prize + quarters;
                console.log("Roll #"+roll+": You rolled "+spin+" and the winning number is "+win+"! You win "+prize+" quarters for a total of "+total+" quarters!");
                break;
                }
            else {
                console.log("Roll #"+roll+": You rolled "+spin+", which is not a winner.");
                roll = roll + 1;
                }
        }
    }
}
slots(75)
