function firstNonRepeatedChar(str) {
const charCount = new Map()
for(let char of str){
	charCount.set(char,(charCount.get(char)||0)+1)
}
for(let val of str){
	if(charCount.get(val)===1){
		return val
	} 
}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
