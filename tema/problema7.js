/**
 * R U Tired?
 * It's almost over, if you made it through the previous ones, the upcoming
 * exercises should be easy
 *
 * Santa is getting quite old, so help him do the math and find out
 * how much money he needs to fulfill the wishlist bellow.
 *
 * He heard that there's a function called reduce() that could do the job,
 * show him how.
 *
 * Disclaimer: If you're getting primary school flashbacks, just know...
 * that this was on purpose.
 */

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function helpSanta(list) {
  // your code here
  return list.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
}
const neededBudget = helpSanta(wishlist);
console.log(neededBudget);
