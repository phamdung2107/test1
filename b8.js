function sum(...args) {
	let total = 0;
	args.forEach(e => total += e);

	return total;
}

console.log(sum(1,2,3,4,5,1,2,3));