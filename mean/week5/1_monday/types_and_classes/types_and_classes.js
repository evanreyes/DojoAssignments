// myNum = 5;
var myNum = 5;
// myString = "Hello Universe";
var myString = "Hello Universe";
// myArr = [1, 2, 3, 4];
var myArr_1 = [1, 2, 3, 4];
var myArr_2 = [1, 2, 3, 4];
// myObj_1 = { name:'Bill'};
var myObj_1 = { name: 'Bill' };
// anythingVariable_1 = "Hey";
var anythingVariable_1 = "Hey";
// anythingVariable_2 = 25; 
var anythingVariable_2 = 25;
// arrayOne = [true, false, true, true]; 
var arrayOne_1 = [true, false, true, true];
var arrayOne_2 = [true, false, true, true];
// arrayTwo = [1, 'abc', true, 2];
var arrayTwo_1 = [1, 'abc', true, 2];
var arrayTwo_2 = [1, 'abc', true, 2];
// myObj_2 = { x: 5, y: 10 };
var myObj_2 = {
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
var myNode = (function () {
    function myNode(val) {
        this.val = val;
    }
    myNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return myNode;
}());
var myNodeInstance = new myNode(1);
myNodeInstance.doSomething();
console.log(myNodeInstance.val);
console.log(myNodeInstance._priv);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
var myFunction = function () { return (console.log("Hello World!")); };
myFunction();
// function sendingErrors() {
// 	throw new Error('Error message');
// }
var sendingErrors = function (message) { throw new Error(message); };
sendingErrors('Error message');
