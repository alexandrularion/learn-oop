/**
 * PRIMITVE DATA TYPES
 * String
 * Boolean
 * Number
 * Null
 * Undefined
 * Symbol
 */

const s1 = "Hello world"; // "" string literals
console.log(s1, typeof s1); // String
console.log(s1.toUpperCase()); // "HELLO WORLD"

const s2 = new String("Hello world"); // String class
console.log(s2, typeof s2); // Object

const n1 = 2;
console.log(n1, typeof n1); // Number literals
console.log(n1.toFixed(2)); // 2.00

const n2 = new Number(2);
console.log(n2, typeof n2); // Object
console.log(n2.toFixed(2)); // 2.000
