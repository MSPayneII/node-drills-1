const addTwoFunction = require("./addTwoFunction");
const { minusOne, timesThree, ageText } = require("./functions");

const result = addTwoFunction(5);
console.log(result);

console.log("four minus one:", minusOne(4));
console.log("12 times three:", timesThree(12));
console.log("how old am I:", ageText(35));
