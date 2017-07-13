module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log('Add: ' + (num1 + num2));
    },
    multiply: function(num1, num2) {
         console.log('Multiply: ' + (num1 * num2));
    },
    square: function(num) {
         console.log('Square: ' + (Math.pow(num, 2)));
    },
    random: function(num1, num2) {
         console.log('Random: ' + (Math.floor(Math.random() * num2) + num1));
    }
  }
};
