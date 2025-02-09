let fruits = ["apple", "banana", "orange"];
let internationFruits = new Array("kiwi", "avacado", "strawberry");

console.log(fruits);
console.log(internationFruits);
console.log(fruits.length);

console.log(fruits[0]);

fruits[0] = "mango";
console.log(fruits[0]);

fruits.push("watermelon");
console.log(fruits);

fruits.unshift("pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);