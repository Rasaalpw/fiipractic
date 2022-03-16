/**
 * OBJECTS Practice
 * Complete the function freeze in a way that the Object person becomes
 * immutable (no properties can be changed after we call the function)
 *
 * Hint - there's a function that may come in handy Object.freeze(),
 * but it's not going to be enough.
 */

const Person = {
  name: "John",
  car: {
    make: "Audi",
    model: "RS7",
    color: "grey",
    year: 2019,
    engine: {
      horsePower: 316,
      capacity: 2996,
    },
  },
};

function freeze(object) {
  // your code here;
  Object.freeze(object);
  Object.freeze(object.car);
}

freeze(Person);
Person.name = "Calin";
Person.car.make = "Mercedes";
console.log(Person); // nothing should change
