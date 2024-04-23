class Person {
  name = "";
  age = 0;

  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  }

  //   getter
  getName() {
    return this.name;
  }

  //   setter
  setName(name) {
    this.name = name;
  }
}

/**
 * @class Student
 * @description The following class inherits the Person class
 */
class Student extends Person {
  constructor(name, age, email) {
    super(name, age);
    this.email = email || "";
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
}

const student1 = new Student();
const student2 = new Student("Ion Popescu", 40, "ion.popescu@gmail.com");

console.log(student1);
console.log(student2);

student2.setName("Ion Popescu Jr");

console.log(student2);
