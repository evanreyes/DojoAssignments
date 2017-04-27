//Stan learned something today: that reducing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function onlyKeep(arr,x) {
	len = (arr.length-x)
	for (var i = 0; i < len; i++){
		arr.shift(i)
	}
	console.log(arr);
	return arr;
}
onlyKeep([2,4,6,8,10],3)
