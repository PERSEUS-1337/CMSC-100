// const math = require("./math.js");
// import math from "./math.js";
import { add, PI } from "./math.js";
import { snakeCase } from "snake-case";

// console.log(math.add(69, 420));
// console.log(math.mul(69, 420));
// console.log(math.PI);

console.log(add(69, 420));
console.log(PI);

console.log(snakeCase("ThisIsInCamelCase"));