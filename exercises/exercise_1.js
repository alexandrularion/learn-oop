/**
 * Write a JavaScript program to create a class called "Person"
 * with properties for name, age and country. Include a method
 * to display the person's details. Create two instances of the
 * 'Person' class and display their details.
 * FOR MORE CHECK THIS URL: https://www.w3resource.com/javascript-exercises/oop/index.php
 */

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  getDetails() {
    return `Numele este ${this.name}, are varsta de ${this.age}, din tara ${this.country}.`;
  }
}

const p1 = new Person("John Doe", 23, "UK");
const p2 = new Person("John Wick", 50, "LA");

console.log(p1);

console.log(p1.getDetails());
console.log(p2.getDetails());
