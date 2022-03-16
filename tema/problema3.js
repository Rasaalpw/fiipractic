/**
 * 2. The make strings functions receives an array of objects as
 * an arguments. Complete the function if order to obtain another array
 * with the following content:
 *
 * ["Angelina Jolie can go to The Matrix",
 * "Eric Jones is under age!!",
 * "Paris Hilton is under age!!",
 * "Kayne West is under age!!",
 * "Bob Ziroll can go to The Matrix"]
 *
 * Hint: A person can go to The Matrix movie if he/she is 18+
 */

function makeStrings(arr) {
  // Your code here
  let approved = [];

  arr.map((person) => {
    if (person.age < 18) approved.push(person.name + " is under age!");
    else if (person.age >= 18)
      approved.push(person.name + " can go to the Matrix");
  });
  return approved;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
