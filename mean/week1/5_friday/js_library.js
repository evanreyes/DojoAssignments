var _ = {
    map: function(array, callback) {
        let mapped = [];
        for (let i = 0; i < array.length; i++) {
            mapped.push(callback(array[i]));
        }
        return mapped;
    },
    reduce: function(array, callback, memo) {
        let i = 0;
        if (memo == undefined) {
            memo = array[i++];
        }
        for (;i < array.length; i++) {
            memo = callback(memo, array[i]);
        }
        return memo;
    },
    find: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
    },
    filter: function(array, callback) {
        let new_array = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                new_array.push(array[i]);
            }
        }
        return new_array;
    },
    reject: function(array, callback) {
        let new_array = [];
        for (let i = 0; i < array.length; i++) {
            if (! callback(array[i])) {
                new_array.push(array[i])
            }
        }
        return new_array;
    }
 }

let array = [1, 2, 3, 4, 5, 6];

let mapped_by_three = _.map(array, function(num) { return num * 3; });
console.log(mapped_by_three);

let reduced = _.reduce(array, function(memo, num) { return memo + num; });
console.log(reduced);

let found_evens = _.find(array, function(num) { return num % 2 == 0; });
console.log(found_evens);

let filtered_evens = _.filter(array, function(num) { return num % 2 == 0; });
console.log(filtered_evens);

let rejected_evens = _.reject(array, function(num) { return num % 2 == 0; });
console.log(rejected_evens);
