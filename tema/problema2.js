/**
 * ARRAYS Practice
 * 1. Complete the squareArray function in order to return a new array
 * containing the squares of the numbers in the previous declared array
 * Difficulty: Super duper Easy
 *
 * Hint: You can use the .map() function
 */

const numbers = [2, 3, 5, 7, 9];

function squareArray(arr) {
  // your code here
  return arr.map((item) => item * item);
}

const squaredNumbers = squareArray(numbers);
console.log(squaredNumbers);
