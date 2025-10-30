function stringChop(str, size) {
  // your code here
	if(str == null) return [];
	
	let n = str.length;
	size = Number(size);
	let arr = [];

	for(let i = 0; i < n; i += size){
		let chunk = str.slice(i, i+size);
		arr.push(chunk);
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
