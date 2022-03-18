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
    house: {
      city: "Iasi",
      location: "Copou",
    },
  },
};
function isObject1(val) {
  if (val === null) {
    return false;
  }
  return typeof val === "function" || typeof val === "object";
}
function deepFreezeObject(obj) {
  // your code here;
  if (isObject1(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((name) => deepFreezeObject(obj[name]));
    Object.freeze(obj);
  }
  return obj;
}

deepFreezeObject(Person);
Person.name = "Calin";
Person.car.make = "Mercedes";
console.log(Person); // nothing should change
