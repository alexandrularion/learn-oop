function Person(name, age) {
  this.name = name || "";
  this.age = age || 0;
}

Person.prototype.setName = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

function Student(name, age, email) {
  // we call the Person constructor
  Person.call(this, name, age);
  this.email = email || "";
}

// Setup the inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.setEmail = function (email) {
  this.email = email;
};

Student.prototype.getEmail = function () {
  return this.email;
};

const person = new Person("Ion Popescu", 40);
const student = new Student("Ion Popescu", 40, "ion.popescu@gmail.com");

console.log(person);
console.log(student);

student.setEmail("ion.popescu.jr@gmail.com");

console.log(student);
