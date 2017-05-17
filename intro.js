console.log("Introduction to JavaScript");

//Fizz Buzz
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