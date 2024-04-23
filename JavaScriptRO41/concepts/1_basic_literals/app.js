/**
 * Numbers
 */

const age = 20; // creating a number using number literal

const age2 = new Number(20.866544273); // creating a number using Number constructor

const age2WithZecimals = parseFloat(age2).toFixed(2);

const ageWithZecimals = parseFloat(age).toFixed(2);

console.log(age2WithZecimals.toString()); // 20.87

console.log(ageWithZecimals.toString()); // 20.00

/**
 * Strings
 */

const name = "Ion"; // using string literal

const name2 = new String("Ion"); // using string constructor

const name3 = "Ion Popescu";

console.log(name3.split(" ")); // ["Ion","Popescu"]
console.log(name2.length); // 3
console.log(name2.split()); // ['I','o','n']
console.log(name2.split("o")); // ['I','n']
console.log(name); // "Ion"
console.log(name2); // "Ion"

const isLogged = new Boolean({}); // using boolean cosntructor | true

if (isLogged) {
  // the if condition is true so the log will be seen below
  console.log("The user is logged in.");
}
console.log(isLogged); // true
