/*From Star Art, derive the following that will accept and draw the given characters, not just asterisks:

drawLeftChars(num, char)
drawRightChars(num, char)
drawCenterChar(num, char)
For all three of these, you can safely assume that 'char' is a string with length 1.*/

function drawLeftChars(num,char){
    for (var x = 1; x <= (num); x++){
        console.log(x+' '+char);
    }
    for (var space = (75-(74 - num)); space <= 75; space++) {
        console.log(space+' ')
    }
}

function drawRightChars(num,char){
    for (var space = 1; space <= (75-num); space++) {
        console.log(space+' ')
    }
    for (var x = (75-num+1); x <= 75; x++){
        console.log(x+' '+char);
    }
}

function drawCenterChars(num, char){
    var side1 = Math.round((75-num)/2)
    var side2 = Math.floor((75-num)/2)
    for (var space = 1; space <= side1; space++) {
        console.log(space+' ')
    }
    for (var x = (75-side2-num+1); x <= (75-side2); x++) {
        console.log(x+' '+char)
    }
    for (var space = (75-side2+1); space <= 75; space++) {
        console.log(space+' ')
    }
}

drawLeftChars(10,'@')
