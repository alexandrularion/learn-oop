/*
Arrow Function - is a way to write more concise functions in JavaSript (introduced in ES6)
It offers a shorter syntax compared to traditional function expressions.
The keyword "this" works differently which helps use in particularly situations.
*/

// Traditional function
const add = function (a, b) {
  return a + b;
};

// Arrow function
const add2 = (a, b) => a + b;

// if the function body contains only a single expression, the return statement is implicit
// if there is only one parameter, the parentheses around the parameter can be omitted
// if there are no parameters, or more than one parameter, parantheses are required

/* prettier-ignore */
const greet = name => `Hello, ${name}.`;
console.log(greet("John")); // "Hello, John."

// More than one parameter
const multiply = (a, b, c) => a * b * c;
console.log(multiply(3, 4, 9)); // 108

// No parameters
const sayHello = () => "Hello!";
console.log(sayHello()); // "Hello!"

// Block body { //code }
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2; // return statement is required because of block body
};
console.log(calculate(2, 3)); // 10

function Person() {
  this.name = "Alice";

  setTimeout(function () {
    console.log(this.name); // 'this' refers to the global object, not the Person instance
  }, 2000);
}

const person = new Person(); // Logs undefined, as "this" does not refer to "Person"

function Car() {
  this.name = "Dacia";

  setTimeout(() => {
    console.log(this.name); // 'this' correctly refers to the Car instance
  }, 2000);
}

const car = new Car(); // Logs "Dacia"

// Arrow functions cannot be used as Constructors
const Smartphone = (name) => {
  this.name = name;
};
const phone = new Smartphone("Iphone 15 PROMAX"); // Throws error: Smartphone is not a constructor
