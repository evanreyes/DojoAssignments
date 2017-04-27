/* Return to your previous clockHandAngles solution. Allow fractional values for input seconds, but change your implementation to print only integer values for angles (in degrees) of the various hands. */

function clockHandAngles(numSeconds) {
	var minutes = Math.floor(numSeconds/60);
	var rSeconds = numSeconds % 60;
	var hours = Math.floor(minutes/60);
	var rMins = minutes % 60;
	var rHours = hours % 12;
	var minAngle = rMins*6 + 6*(rSeconds/60);
	var hourAngle = rHours*30 + 30*(rMins/60);
	var secAngle = rSeconds * 6;
	console.log('Hour Hand: '+hourAngle+' degs.')
	console.log('Minute Hand: '+minAngle+' degs.')
	console.log('Second Hand: '+secAngle+' degs.')

}

clockHandAngles(3600)
