//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

var count = 0
for(var x = 515; x<=4096; x=x+5)
	{
		console.log(x);
		count++
	}
console.log("There are"+" "+count+" "+"multiples of 5 between 512 and 4096.")