//Square each value in a given array, returning that same array with changed values.

function squareVal(arr) {
    for(var i = 0; i < arr.length; i++){
            arr[i] = arr[i] * arr[i];
    }
    console.log(arr)
}
squareVal([1,2,3,4,5])