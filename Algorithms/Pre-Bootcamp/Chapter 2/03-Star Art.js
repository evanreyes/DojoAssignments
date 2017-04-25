/*Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first character in the text field), or right-justified (last star would be very last character in the text field, with potentially some number of spaces at the beginning of the text field before the block of stars start), or centered in the 75 -character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

Write a function drawLeftStars(num) that accepts a number and prints that many asterisks
Write a function drawRightStars(num) that prints 75 characters total. The stars should build from the right side. the last num characters should be asterisks; the other remaining of the 75 should be spaces.
Write a function drawCenterStars(num) that prints 75 characters total. The stars should be centered in the 75. the middle num characters should be asterisks; the rest of the 75 characters should be spaces.
Optional: Create epic text-art Empire vs. Rebellion battle, using formations like "(=*=)" and ">o<".*/

function drawLeftStars(num){
    for (var x = 1; x <= (num); x++){
        console.log(x+" *");
    }
    for (var space = (75-(74 - num)); space <= 75; space++) {
        console.log(space+' ')
    }
}

function drawRightStars(num){
    for (var space = 1; space <= (75-num); space++) {
        console.log(space+' ')
    }
    for (var x = (75-num+1); x <= 75; x++){
        console.log(x+" *");
    }
}

function drawCenterStars(num){
    var side1 = Math.round((75-num)/2)
    var side2 = Math.floor((75-num)/2)
    for (var space = 1; space <= side1; space++) {
        console.log(space+' ')
    }
    for (var x = (75-side2-num+1); x <= (75-side2); x++) {
        console.log(x+' *')
    }
    for (var space = (75-side2+1); space <= 75; space++) {
        console.log(space+' ')
    }
}

drawCenterStars(10)
