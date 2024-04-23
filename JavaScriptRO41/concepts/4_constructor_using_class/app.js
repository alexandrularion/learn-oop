class Person {
  name = "";
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
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

const person1 = new Person("Ion Popescu", 18); // instance 1 of the Person class

const person2 = new Person("Gabriel", 40); // instance 2 of the Person class

console.log(person1.getName()); // "Ion Popescu"

// we set the name data member within the person1 object
person1.setName("Alin");

console.log(person1); // { name: "Alin", age: 18 }
