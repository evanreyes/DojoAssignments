//Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function double(arr) {
	var arrnew = [] 					//doubled values will go in here
    for(var i = 0; i < arr.length; i++) //iterate through
    {
        arrnew.push(arr[i] * 2)			//calculate doubled values for each index in arr
    }
	console.log(arr)					//just to make sure... show me the original arr, unchanged
	console.log(arrnew)					//our new array with the doubled values
}
double([1,2,3,4,5])