//Given an array, find and print its largest element.

function findMax(arr) {
    var max = 1;
    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
        max = arr[i]
        }
    }
    console.log(max) 
}
findMax([1,10,99,4,5])