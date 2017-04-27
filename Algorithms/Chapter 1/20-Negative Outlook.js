//Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negout(arr) {
	arrnew = []
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > 0){
	       	arrnew.push(arr[x]);
	        arrnew[x] = -Math.abs(arrnew[x]);
		}
		else {
			arrnew.push(arr[x]);
		}
    }
	console.log(arr)
	console.log(arrnew)
}
negout([1,-3,5])
