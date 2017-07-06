// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// Add a new value (100) in the array x using a push method.
x.push(100)
// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x.push(["hello", "world", "JavaScript is Fun"])
console.log(x)

// Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var total = 0
for (var j = 1; j <= 500; j++){
    total = total + j;
}
console.log(total)

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
arr = [1, 5, 90, 25, -3, 0]
var min = arr[0]
for (var y = 0; y < arr.length; y++){
    if (arr[y] < min){
        min = arr[y]
    }
}
console.log(min)

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
sum = 0
for (var z = 0; z < arr.length; z++){
    sum = sum + arr[z];
}
console.log(sum/arr.length)

// Write a for-in loop that will navigate through the object below. And console.log() each key value pair.
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas'
}

for (var key in newNinja){
    console.log(key + ": " + newNinja[key]);
}
