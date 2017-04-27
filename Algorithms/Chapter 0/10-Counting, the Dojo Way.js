//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(var x = 1; x<=100; x++) {
	{
		if(x % 10 == 0){
			console.log("Coding Dojo")
			continue;
		}
		if(x % 5 == 0){
			console.log("Coding")
			continue;
		}
		console.log(x)
	}
}