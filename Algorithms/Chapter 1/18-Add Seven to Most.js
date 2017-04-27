//Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addseven(arr) {
	var arrnew = [] 					
    for(var i = 1; i < arr.length; i++) 
    {
        arrnew.push(arr[i] + 7)			
    }
	console.log(arr)					
	console.log(arrnew)					
}
addseven([1,2,3,4,5])