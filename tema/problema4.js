/**
 * 3. Given the array of numbers bellow, complete getEvenNumbers so it
 * returns only the even numbers
 *
 * Difficulty: Super duper easy
 * Hint: You can use the filter function
 */

const randomNumbers = [11, 8, 102, 9, 6, 2, 3, 5, 99, 23];

function getEvenNumbers(arr) {
  // your code here
  return arr.filter((randomNumber) => randomNumber % 2 == 0);
}

const evenNumbers = getEvenNumbers(randomNumbers);
console.log(evenNumbers); // should log only even numbers
