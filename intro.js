console.log("Introduction to JavaScript");

//Fizz Buzz
console.log("*********************FizzBuzz**************************");
for (var counter = 1; counter <= 100; counter++) {
	if (counter % 3 === 0) {
		console.log("Fizz");
	} else if (counter % 5 === 0 && counter % 3 !== 0) {
		console.log("Buzz");
	} else if (counter % 15 ===0) {
		console.log("FizzBuzz");
	} else {
		console.log(counter);
	}
}

//Bean Counting
function countBs(inputStr) {
	var count = 0;
	for(var i = 0; i < inputStr.length; i++) {
		if (inputStr.charAt(i) == 'B') {
			count++;
		}
	}
	return count;
}
console.log("*********************Bean Counting**************************");
console.log(countBs("BBC"));
console.log(countChar("kakkerlak","k"));