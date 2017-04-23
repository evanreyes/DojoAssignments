//Given an array, write a function that changes all positive numbers in the array to “big”.

//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(arr) {
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > 0) {
                arr[x] = "big"
            }
    }
    console.log(arr)
}
makeItBig([-1,3,5,-5])
