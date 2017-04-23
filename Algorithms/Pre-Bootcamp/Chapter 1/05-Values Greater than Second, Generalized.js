//Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

var arr = [1,2,3,4,5,6,7,8,9,10]
var arr2 = []
var values = 0
for (var x = 0; x < arr.length; x++) {
	if(arr[x] > arr[1]) {
		arr2.push(arr[x])
		}
	values = arr2.length	
}
console.log(arr2)
console.log(values)