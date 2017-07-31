// myNum = 5;
let myNum: number = 5;

// myString = "Hello Universe";
let myString: string = "Hello Universe";

// myArr = [1, 2, 3, 4];
let myArr_1: number[] = [1, 2, 3, 4];
let myArr_2: Array<number> = [1, 2, 3, 4];

// myObj_1 = { name:'Bill'};
let myObj_1: {} = { name: 'Bill'};

// anythingVariable_1 = "Hey";
let anythingVariable_1: any = "Hey";

// anythingVariable_2 = 25; 
let anythingVariable_2: any = 25;

// arrayOne = [true, false, true, true]; 
let arrayOne_1: boolean[] = [true, false, true, true];
let arrayOne_2: Array<boolean> = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
let arrayTwo_1: any[] = [1, 'abc', true, 2];
let arrayTwo_2: Array<any> = [1, 'abc', true, 2];

// myObj_2 = { x: 5, y: 10 };
let myObj_2: {} = { 
    x: 5,
    y: 10
};

// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());

class myNode {
    val: any;
    _priv: number;

    constructor(val) {
        this.val = val;
    }

    doSomething() {
        this._priv = 10
    }
}

let myNodeInstance = new myNode(1);
myNodeInstance.doSomething();
console.log(myNodeInstance.val);
console.log(myNodeInstance._priv)

// function myFunction() {
//     console.log("Hello World");
//     return;
// }
let myFunction = () => (
    console.log("Hello World!")
)
myFunction();

// function sendingErrors() {
// 	throw new Error('Error message');
// }
var sendingErrors = function (message) { throw new Error(message); };
sendingErrors('Error message');