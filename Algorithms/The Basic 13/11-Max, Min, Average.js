//Given an array, print the max, min and average values for that array.

function maxminavg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
    for(var x = 1; x < arr.length; x++){
        if (arr[x] > max) {   
        	max = arr[x];
        }
        if (arr[x] < min){
        	min = arr[x]
        }
        sum = sum + arr[x];
    }
    var avg = sum / arr.length;
    var arrnew = [max,min,avg];
    console.log(arrnew)
}
maxminavg([7,2,15,5,90,4,15])