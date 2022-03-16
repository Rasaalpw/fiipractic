/**
 * Complete the removeDuplicates function in order to filter out the
 * duplicates in the given array
 *
 * Difficulty: Intermediate
 */

const duplicates = [1, 2, 3, 3, 2, 1, 2, 5, 3, 6, 7, 1, 9, 6];

function removeDuplicates(arr) {
  // your code here

  return arr.sort().filter((number, i, array) => {
    return number != array[i - 1];
  });
}

const uniqueValues = removeDuplicates(duplicates);
console.log(uniqueValues); // [1, 2, 3, 5, 6, 7, 9]
