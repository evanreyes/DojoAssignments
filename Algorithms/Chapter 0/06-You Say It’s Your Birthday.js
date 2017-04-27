/* If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",

Example: given yourBirthday(4,19) or yourBirthday(19,4) */

function myBirthday(m,d) {
	if(m == 9 && d == 17) {
			console.log("How did you know?");
		}
	else if(m = 17 && d == 9) {
			console.log("How did you know?");
		}
	else {
		console.log("Just another day...");
		}
}
myBirthday(17,10)