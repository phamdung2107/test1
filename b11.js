function increment(){
	let n = 0;
	return () => n++;
}

const get = increment();

console.log(get());
console.log(get());
console.log(get());