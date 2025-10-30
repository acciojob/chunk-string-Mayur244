function stringChop(str, size) {
  // your code here
	let n = str.length;
	let start = 0;
	let end = size;
	let arr = [];

	for(let i = 0; i < Math.ceil(n/size); i++){
		let chunk = str.slice(start, end);
		arr.push(chunk);
		start += size;
		end += size;
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
