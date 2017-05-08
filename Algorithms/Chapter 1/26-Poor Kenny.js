//Kenny tries to stay safe, but somehow everyday something happens. If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard, and 30% chance of meteor strike, write function whatHappensToday() to print the outcome.

function whatHappensToday(){
	var outcome = Math.trunc(Math.random() * 100);
	if(outcome < 10){
		return "It's a volcano!"
	}
	else if(outcome < 25){
		return "It's a tsunami!"
	}
	else if(outcome < 45){
		return "It's an earthquake!"
	}
	else if(outcome < 70){
		return "It's a blizzard!"
	}
	else if(outcome < 100){
		return "It's a meteor strike!!!"
	}
}
console.log(whatHappensToday())
