//Kenny tries to stay safe, but somehow everyday something happens. If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard, and 30% chance of meteor strike, write function whatHappensToday() to print the outcome.

function whatHappensToday(){
	var outcome = Math.trunc(Math.random() * 100);
	if(outcome >= 1 && outcome <= 10){
		console.log("It's a volcano!")
	}
	else if(outcome >= 11 && outcome <= 25){
		console.log("It's a tsunami!")
	}
	else if(outcome >= 26 && outcome <= 45){
		console.log("It's an earthquake!")
	}
	else if(outcome >= 46 && outcome <= 70){
		console.log("It's a blizzard!")
	}
	else if(outcome >= 71 && outcome <= 100){
		console.log("It's a meteor strike!!!")
	}
}
whatHappensToday()
