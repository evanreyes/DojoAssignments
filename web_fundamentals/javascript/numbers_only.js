var arr = [];                                      //declare a blank array
function numbersOnly(arr){
    var newArray = [];                             //declare a new array to dump numbers into
    for (var x = 0; x < arr.length; x++) {         //iterate through our original array
        {
            if (typeof arr[x] === "number") {      //check if each index is a number
                newArray.push(arr[x]);             //if it is, push it into the new array
            }
        }
    }
    console.log("Original array: "+arr);           //show me the original array
    console.log("New array: "+newArray);           //show me the new array
}
numbersOnly([1, "apple", -3, "orange", 0.5])
