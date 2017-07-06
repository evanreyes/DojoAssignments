// Rewrite these 3 as anonymous functions assigned to variables.

// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
var sumIntegers = function(x,y) {
    sum = 0;
    for (var i = x; i <= y; i++){
        sum = sum + i;
    }
    console.log(sum);
}

// Write a loop that will go through an array, find the minimum value, and then return it
var findMin = function(arr) {
    var min = arr[0];
    for (var j = 0; j < arr.length; j++){
        if (arr[j] < min) {
            min = arr[j];
        }
    }
    return min
}

// Write a loop that will go through an array, find the average of all of the values, and then return it
var findAvg = function(arr) {
    sum = 0
    for (var k = 0; k < arr.length; k++){
        sum = sum + arr[k];
    }
    return sum/arr.length
}

// Rewrite these as methods of an object
var object = {
    sumIntegers: function(x,y) {
        sum = 0;
        for (var i = x; i <= y; i++){
            sum = sum + i;
        }
        console.log(sum);
    },
    findMin: function(arr) {
        var min = arr[0];
        for (var j = 0; j < arr.length; j++){
            if (arr[j] < min) {
                min = arr[j];
            }
        }
        return min
    },
    findAvg: function(arr) {
        sum = 0
        for (var k = 0; k < arr.length; k++){
            sum = sum + arr[k];
        }
        return sum/arr.length
    }
}

// Create a JavaScript object called person with the following properties/methods:

// Properties
// name - set this as your own name
// distance_traveled - set this initially as zero

// Methods
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
    name: "Evan",
    distance_traveled: 0,
    say_name: function() {
        return "It's "+ person.name + "!";
    },
    say_something: function(thing) {
        return person.name + "says: " + "'" + thing + ".'";
    },
    walk: function() {
        console.log(person.name + " is walking and has journeyed for " + person.distance_traveled + " travel units.");
        person.distance_traveled += 3;
        return person;
    },
    run: function() {
        console.log(person.name + " is running and has journeyed for " + person.distance_traveled + " travel units.");
        person.distance_traveled += 10;
        return person
    },
    crawl: function() {
        console.log(person.name + " is crawling and has journeyed for " + person.distance_traveled + " travel units.");
        person.distance_traveled += 1;
        return person
    }
}
