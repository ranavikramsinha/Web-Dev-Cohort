//* Primitive data types ->

//* String -> "", '', ``
let name = "Rana Vikram Sinha";

//* Number -> 12345, 154.53, 53.33333, etc
let age = 23;

//* boolean -> true, false
let isPaid = true;

//* NULL
let favouriteClass = null;
console.log(typeof favouriteClass);

//* undefined
let hometown;
// console.log(hometown);

//* BigInt
let largeNumber = 1234567890123456789012345678901234567890n;

//* Symbol -> Introduced in ECMAScript 6 (ES6), symbols are unique and immutable. They are often used as unique property keys in objects
let sym = Symbol("uniqueIdentifier");

//* Non-Primitive data types or Objects ->

//* Array
let skills = ["html", "css", "javascript"];

//* Object
let studentProfile = {
    name: "Aryan Sinha",
    age: 23,
    isPaid: true,
    skills: ["html", "css", "javascript", "react"],
    favouriteClass: null,
}

console.log(typeof isPaid);
console.log(typeof favouriteClass);