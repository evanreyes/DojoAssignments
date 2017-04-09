//Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapstring(arr) {
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] < 0)
            {
                arr[x] = 'Dojo'
            }
    } 
    console.log(arr) 
}
swapstring([1,-2,3,-4,5])