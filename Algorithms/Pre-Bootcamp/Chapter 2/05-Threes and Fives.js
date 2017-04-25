/*Create ThreesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

Second: Create BetterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of your above ThreesFives() function as BetterThreesFives(100,4000000).*/

function threesFives(){
    var sum = 0;
    for (var x = 100; x <= 4000000; x++){
        if(x % 3 == 0 && x % 5 == 0){
            continue;

        }
        else if(x % 3 == 0 || x % 5 == 0){
            sum = sum + x;
        }
    }
    console.log(sum)
}
threesFives()

function betterThreesFives(start,end){
    var sum = 0;
    for (var x = start; x <= end; x++){
        if(x % 3 == 0 && x % 5 == 0){
            continue;

        }
        else if(x % 3 == 0 || x % 5 == 0){
            sum = sum + x;
        }
    }
    console.log(sum)
}
betterThreesFives(1,50)
