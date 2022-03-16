/**
 * 4. The array of characters bellow contains multiple Star Wars characters,
 * complete the getFemaleCharacters function, so it filters out the males
 *
 * Difficulty: Easy
 */

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

function getFemaleCharacters(arr) {
  // your code here
  return arr.filter((female) => female.gender === "female");
}

const starWarsFemales = getFemaleCharacters(characters);
console.log(starWarsFemales);
