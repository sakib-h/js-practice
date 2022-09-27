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
