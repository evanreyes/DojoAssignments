function shuffle(arr){
    for (var x = arr.length - 1; x > 0; x--){
        var rand = Math.floor(Math.random()*x);
        var temp = arr[rand];
        arr[rand] = arr[x];
        arr[x] = temp;
        return arr;
    }
}

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))
