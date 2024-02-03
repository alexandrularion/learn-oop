/**
 * Write a JavaScript program that creates a class called 'Vehicle'
 * with properties for make, model, and year. Include a method to
 * display vehicle details. Create a subclass called 'Car' that
 * inherits from the 'Vehicle' class and includes an additional
 * property for the number of doors. Override the display method
 * to include the number of doors.
 * FOR MORE CHECK THIS URL: https://www.w3resource.com/javascript-exercises/oop/index.php
 */

class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `Vehiculul cu brandul ${this.brand}, reprezinta modelul ${this.model} din anul ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year);
    this.doors = doors;
  }
  getDetails() {
    return `${super.getDetails()} si are ${this.doors} usi.`;
  }
}

const v1 = new Vehicle("BMW", "Seria 3", 2004);
console.log(v1);
console.log(v1.getDetails());

const c1 = new Car("Mercedes", "C Klass", 2022, 5);
console.log(c1);
console.log(c1.getDetails());
