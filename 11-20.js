// --> Practice 11
// Remove duplicate elements from an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 4, 5, 7, 8, 7, 10];
const uniqueNumber = [];
const duplicates = numbers.filter((number, index, array) => {
	// Checking if the 1st index of number is equal to the current index of number
	if (array.indexOf(number) === index) {
		uniqueNumber.push(number);
	}
});
console.log(uniqueNumber);

// --> Practice 12
// Write a js code to find how many times a specific word is used in a string and what is the 1st index of the word

const sentence =
	"This is Sakib Hasan, A front end web developer who is skilled at React JS, Next JS, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Material UI, and many more. Sakib has 2+ years of experiences in building websites for his clients. Sakib's dream is to be a full stack developer in future";

const matches = sentence.match(/sakib/gi);
const occurrence = matches ? matches.length : "No matches found";
console.log(occurrence);

const position = sentence.search(/sakib/i);

const message =
	position >= 0
		? `The word "sakib" is found at index ${position}`
		: "The word is not found";

console.log(message);

// --> Practice 13
// Write a js program to find the longest string in an array and return its index number

const longestString = (names) => {
	let longestWord = "";
	for (let name of names) {
		if (name.length > longestWord.length) {
			longestWord = name;
		}
	}
	return [longestWord, names.indexOf(longestWord)];
};

console.log(longestString(["Sakib", "Hasan", "Sakib Hasan"]));

// --> Practice 14
// Write a js program to find which number is divided by 3 or 5 or both

const fizzBuzz = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 15 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};

fizzBuzz(1, 30);

// --> Practice 15
// Create a function that will convert from Celsius to Fahrenheit

const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;

console.log(celsiusToFahrenheit(0));

// --> Practice 16
// Create a function that will convert from  Fahrenheit to Celsius

const FahrenheitToCelsius = (Fahrenheit) => Math.floor((Fahrenheit - 32) / 1.8);

console.log(FahrenheitToCelsius(98.4));
