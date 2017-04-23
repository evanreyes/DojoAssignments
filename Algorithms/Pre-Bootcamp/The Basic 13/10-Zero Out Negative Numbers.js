//Return the given array, after setting any negative values to zero.

function zeroout(arr) {
    for(var x = 0; x < arr.length; x++){
        if (arr[x] < 0) {   
        arr[x] = 0
        }   
    }
    return arr; 
}
zeroout([-1,2,-3,5,-6])