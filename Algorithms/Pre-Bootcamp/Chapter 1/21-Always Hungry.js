//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function hungry(arr) {
	var food = 0
    for(var x = 0; x < arr.length; x++) {

        if(arr[x] == 'food'){
	       	console.log('Yummy!')
			food = food + 1
		}
    }
	if(food == 0){
		console.log("I'm hungry!")
	}
}
hungry(['no','food','nofood'])
