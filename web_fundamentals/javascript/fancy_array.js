function fancyArray(arr,symbol,reversed) {
    if (reversed == true){                          //check for reversed paramater
        for(var x = arr.length-1; x >= 0; x--) {    //start at last index (arr.length-1) and iterate through down
        console.log(x+" "+symbol+" "+arr[x]);       //log index plus the user's symbol plus the value
        }
    }
    else if (reversed == false){
        for(var x = 0; x < arr.length; x++){
        console.log(x+" "+symbol+" "+arr[x]);
        }
    }
}
fancyArray(["James","Jill","Jane","Jack"],"->",false)
