//Given an array and a value Y, count and print the number of array values greater than Y.

function greaterY(arr, Y) {
    var count = 0
    for(var i=0; i<arr.length; i++){
        if (arr[i] > Y) {   
        count = count + 1
        }   
    }
    console.log(count); 
}
greaterY([1,2,3,5,6], 3)