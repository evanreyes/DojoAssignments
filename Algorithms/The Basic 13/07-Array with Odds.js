//Create an array with all the odd integers between 1 and 255 (inclusive).

var arr = []
    for(var x = 1; x <= 255; x++) {
    	if(x % 2 !== 0){
    		arr.push(x)
    }
}
console.log(arr)