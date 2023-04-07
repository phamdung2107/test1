const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const total = ages.reduce((acc,cur) =>{
	return acc + cur
},0)

console.log(total);