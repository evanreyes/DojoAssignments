// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            return false;
        }
        return true;
    }
}
console.log('Zero Negativity: ' + zero_negativity([-1,0,1,2,3]))

// Math 2
// Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.
function is_even(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log('Is Even: ' + is_even(2))

// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr2) {
    let total = 0
    for (var j = 0; j < arr2.length; j++) {
        if (is_even(arr2[j])) {
            total += 1;
        }
    }
    return total
}
console.log('How Many Even: ' + how_many_even([1,1,2,3,5,8]))

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(n) {
    let dumarr = [];
    for (var k = 0; k < n; k++) {
        let rand = Math.floor(Math.random() * 10);
        dumarr.push(rand);
    }
    return dumarr
}
console.log('Create Dummy Array: ' + create_dummy_array(7))

// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on it's length. This function should never return undefined.
function random_choice(arr3) {
    let randselect = Math.floor(Math.random() * (arr3.length));
    return arr3[randselect]
}
console.log('Random Choice: ' + random_choice([1,1,2,3,5,8,13,21,34]))
