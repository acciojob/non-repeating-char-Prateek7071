function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i = 1 ; i<str.length-1;i++){
		if(str[i]!==str[i+1] && str[i-1]!==str[i])
			 return str[i]
	}
	if(str[str.length-1]!==str[str.length-2])
		return str[str.length-1 ]
	return null
}
  const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
