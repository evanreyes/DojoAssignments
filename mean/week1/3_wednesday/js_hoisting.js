// 1
// console.log(hello);
// var hello = 'world';
//
// Prediction:
// undefined // Variable declaration occurs before console logging, which occurs before assignment

// 2
// var needle = 'haystack';
// test();
//
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// Prediciton:
// magnet // the 'haystack' version of needle never gets called. The only occurence of printing anything is within the function's scope

// 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// Prediction:
// super cool // The function is being declared, but never called

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// Prediction:
// chicken
// half-chicken // 'gone' becomes the value of food, but never gets called before the function is exited


// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// Prediction:
// error // Function call before declaration

// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// Prediction:
// undefined
// rock
// r&b
// disco


// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	var dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// Prediction:
// san jose
// seattle
// burbank
// san jose
