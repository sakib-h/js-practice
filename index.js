// Exercise 1

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
// Write a js program to get the current date.

const formatDate = (date = new Date()) => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

// Exercise 3
// Write a js program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

const newString = (str) => {
	if (str.length < 3) {
		return str;
	} else {
		return str.slice(0, 3) + str.slice(-3);
	}
};

console.log(newString("Sakib"));
