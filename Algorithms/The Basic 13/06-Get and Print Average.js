//Analyze an array’s values and print the average.

function getAvg(arr) {
    var sum = 0;
    for(var x = 0; x < arr.length; x++) {
        sum = sum + arr[x]
    }
    console.log(sum / arr.length) 
}
getAvg([1,2,3,4,5])