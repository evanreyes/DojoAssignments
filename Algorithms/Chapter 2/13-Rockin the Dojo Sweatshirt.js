/* Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts - maybe even more than one. Let's say they cost $20 (including tax), but friendly Josh will give a 9% discount if you buy two, or a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and doesn't have coins, so you have to round up to the nearest dollar. Build a function sweatshirtPricing(num) that, given how many sweatshirts you want, returns the cost.*/

function sweatshirtPricing(num) {
	var sweatshirt = 20;
	var cost = 0;
	if (num >= 4) {
		cost = num * (sweatshirt * .65)
	}
	else if (num == 3) {
		cost = num * (sweatshirt * .81)
	}
	else if (num = 2) {
		cost = num * (sweatshirt * .91)
	}
	else {
		cost = num * sweatshirt
	}
	return Math.ceil(cost);
}

console.log("Total: $"+sweatshirtPricing(2))
