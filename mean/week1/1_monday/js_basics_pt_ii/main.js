function magic_multiply(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        x = x * y
        return x;
    };
    if (x instanceof Array) {
        newarr = []
        for (var i = 0; i < x.length; i++) {
            newarr.push(x[i] * y)
        }
        return newarr
    };
    if (typeof y == 'string') {
        console.log('Error: Cannot multiply by string')
    };
    if (typeof x == 'string' && typeof y == 'number') {
        output = ''
        for (var j = 1; j <= y; j ++) {
            output += x;
        }
        console.log(output)
    };
};

// Test 1
let test1 = magic_multiply(5,2);
console.log(test1);

// Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);

// Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

// Test 4
let test4 = magic_multiply(7, "three");
test4;

// Test 5
let test5 = magic_multiply("Brendo", 4);
test5
