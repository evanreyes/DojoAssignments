//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.


function tltv(num1,num2){
    if (num1 == num2){
        console.log("Jinx!")
        return
    }
    var arr = []
    for (var x = 0; x < num1; x++){
        arr.push(num2);
    }
    console.log(arr)
}

tltv(5,6)
