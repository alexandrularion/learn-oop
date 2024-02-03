/**
 * Write a JavaScript program to create a class called 'Rectangle'
 * with properties for width and height. Include two methods to
 * calculate rectangle area and perimeter. Create an instance of
 * the 'Rectangle' class and calculate its area and perimeter.
 * FOR MORE CHECK THIS URL: https://www.w3resource.com/javascript-exercises/oop/index.php
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const r1 = new Rectangle(20, 10);
console.log(r1);
console.log(r1.calculateArea());
console.log(r1.calculatePerimeter());
