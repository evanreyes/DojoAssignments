// Part I
// Create a function called star_string() that takes a number and returns a string of that many *. For example:
function star_string(num) {
    let stars = '';                     // We start by creating an empty string that we will populate with stars
    for (var i = 1; i <= num; i++) {    // This for loop will create a star based on the num argument we pass in
        stars += '*';                   // This will concatenate one star to the same string each time we increment toward num
    }
    console.log(stars);                 // Show me the stars!
}
star_string(10)                         // Run it!
