//Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiustofahrenheit(cDegrees) {
	var x = cDegrees
	x = (x * 9/5) + 32
	console.log(cDegrees+"°"+" "+"Celsius"+" "+"is"+" "+x+"°"+" "+"Fahrenheit")
}
celsiustofahrenheit(-40)

//-40 degrees is the same in both C and F!