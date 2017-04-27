//Kyle (smarter than Kenny) notes that the chance of one disaster is totally unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

function whatReallyHappensToday(){
	var volcano = Math.trunc(Math.random() * 100);
	var tsunami = Math.trunc(Math.random() * 100);
	var earthquake = Math.trunc(Math.random() * 100);
	var blizzard = Math.trunc(Math.random() * 100);
	var meteor = Math.trunc(Math.random() * 100);
	if(volcano >= 1 && volcano <= 10){
		console.log("It's a volcano!")
	}
	else{
		console.log("Phew... no volcano.")
	}
	if(tsunami >= 1 && tsunami <= 15){
		console.log("It's a tsunami!")
	}
	else{
		console.log("Phew... no tsunami.")
	}
	if(earthquake >= 1 && earthquake <= 20){
		console.log("It's an earthquake!")
	}
	else{
		console.log("Phew... no earthquake.")
	}
	if(blizzard >= 1 && blizzard <= 25){
		console.log("It's a blizzard!")
	}
	else{
		console.log("Phew... no blizzard.")
	}
	if(meteor >= 1 && meteor <= 30){
		console.log("It's a meteor strike!!!")
	}
	else{
		console.log("Phew... no meteor strike.")
	}
}
whatReallyHappensToday()
