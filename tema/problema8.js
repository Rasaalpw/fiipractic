/**
 * We're done, congratu...
 * Wait! No! There's a bonus exercise.
 * I encourage you to avoid googling this one.
 * Take a moment and try to think it through. If 2 hours go by and you
 * still couldn't think of a reasonable solution, google the answer,
 * but implement the function yourself(no copy & paste).
 *
 * We're trying to remove some duplicate values again, but this time
 * you MUST use the .reduce function.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * Hint: the accumulator should be an array :)
 */

const otherDuplicates = [1, 2, 3, 3, 2, 1, 2, 5, 3, 6, 7, 1, 9, 6];

function removeOtherDuplicates(arr) {
  // your code here
  let array = [];
  return arr.sort().reduce((prev, curr) => {
    if (prev.indexOf(curr) === -1) {
      prev.push(curr);
      return prev;
    } else return prev;
  }, array);
}

const otherUniqueValues = removeOtherDuplicates(otherDuplicates);
console.log(otherUniqueValues); // [1, 2, 3, 5, 6, 7, 9]
