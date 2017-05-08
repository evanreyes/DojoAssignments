function weekdayName(weekdayNum) {
	switch(weekdayNum) {
		case 1:
			console.log("Sunday");
			break;
		case 2:
			console.log("Monday");
			break;
		case 3:
			console.log("Tuesday");
			break;
		case 4:
			console.log("Wednesday");
			break;
		case 5:
			console.log("Thursday");
			break;
		case 6:
			console.log("Friday");
			break;
		case 7:
			console.log("Saturday");
			break;
	}
}

// weekdayName(7)

function weekdayName2(weekdayNum) {
	weekdayNum = weekdayNum % 7
	switch(weekdayNum) {
		case 1:
			console.log("Sunday");
			break;
		case 2:
			console.log("Monday");
			break;
		case 3:
			console.log("Tuesday");
			break;
		case 4:
			console.log("Wednesday");
			break;
		case 5:
			console.log("Thursday");
			break;
		case 6:
			console.log("Friday");
			break;
		case 0:
			console.log("Saturday");
			break;
	}
}
// weekdayName2(9)

function someDays() {
	for (var i = 1; i <= 17; i++){
		var weekdayNum = Math.trunc((Math.random() * 365)+1);
		weekdayName2(weekdayNum)
		weekdayNum = weekdayNum % 7
		if (weekdayNum == 1 || weekdayNum == 0){
			console.log("Enjoy your day off!");
		}
		else {
			console.log("Work hard!")
		}
	}
}

someDays()
