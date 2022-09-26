// Exercise 1
//----> <----
// Write a js program to check two given numbers and return true if one of the number is 100 or if the both of the two numbers is 100.

let result = "";
const checking = (a, b) => {
	if (a === 100 && b === 100) {
		return (result = "Both are equal to 100");
	} else if (a === 100) {
		return (result = "a is equal to 100");
	} else {
		result = "b is equal to 100";
	}
};
checking(100, 100);

// Exercise 2
//----> <----
// Write a js program to get the current date.

const formatDate = (date = new Date()) => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

// Exercise 3
//----> <----
// Write a js program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

const newString = (str) => {
	if (str.length < 3) {
		return str;
	} else {
		return str.slice(0, 3) + str.slice(-3);
	}
};

console.log(newString("Sakib"));

// Exercise 4
//----> <----
// Write a js program to extract the first half of a string of even length.

const firstHalf = (str) => {
	if (str.length % 2 === 0) {
		return str.slice(0, str.length / 2);
	} else {
		return "Please enter an even length string";
	}
};

console.log(firstHalf("Take"));

// Exercise 5
//----> <----
// Given two values, write a js program to find out which one is nearest to 100.

const nearestTo100 = (a, b) => {
	if (100 === a || 100 === b) {
		return "Please Enter a number other than 100";
	} else if (100 - a > 100 - b) {
		return `${b} is nearest to 100`;
	} else if (100 - a < 100 - b) {
		return `${a} is nearest to 100`;
	} else {
		return "Both are equal to 100";
	}
};

console.log(nearestTo100(19, 15));

// Exercise 6
//----> <----
// Write a js program to find the number of even digits in a given array of integer.

const evenDigits = (array) => array.filter((num) => num % 2 === 0);
console.log(evenDigits([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercise 7
//----> <----
// Write a js program to get random number in a specific range.

const randomNum = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum(1, 10));

// Exercise 8
//----> <----
// Sort an array Alphabetically
const sortInAlphabeticalOrder = (array) => array.sort();

console.log(
	sortInAlphabeticalOrder(["Sunny", "Rakib", "Anas", "Mamdud", "Tanvir"])
);

// Exercise 9
//----> <----
// Write a js program to sort array of Numbers
const sortedNumbers = (array) => {
	return array.sort((a, b) => a - b);
};

console.log(sortedNumbers([16, 22, 3, 14, 25, 76, 107, 58, 99]));
