//Given array, write a function that reverses values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverse(arr) {
    for(var x = 0; x < arr.length; x++) {
        var temp = arr[x];                            //[1,2,3,4,5] temp == 1
        arr[x] = arr[arr.length - (x + 1)];           //[5,2,3,4,5] temp == 1
        arr[arr.length - (x + 1)] = temp;
    }
    console.log(arr)
}
reverse([1,2,3,4,5])
