
// *Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.

// *Explain & TIP:* The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const numbers: number[] = [5, 10, 15, 20, 70, 80];
console.log(filterGreaterThanTen(numbers))