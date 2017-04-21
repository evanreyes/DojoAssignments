// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.  Second: allow negative shiftBy (shift L, not R).  Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.  Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    var len0 = arr.length;
    for (var x = 0; x < len0 - shiftBy; x++) {
        arr[len0 + x] = arr[x];
    }
    var offset = len0 - shiftBy;
    for (var x = offset; x < arr.length; x++) {
        arr[x - offset] = arr[x];
    }
    arr.length = len0;
    return arr;
}
// console.log(rotateArr([2,4,6,8,10,12,14,16,18,20], 2))

function rotateArrNeg(arr, shiftBy){
    if (shiftBy < 0) {
        shiftBy = shiftBy % arr.length;
        shiftBy = arr.length + shiftBy;
    }
    rotateArr(arr, shiftBy);
}

console.log(rotateArr([1,2,3,4,5], -2))
