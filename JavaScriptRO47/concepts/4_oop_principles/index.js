// Entities: Employee, Manager, Developer

// Abstraction - Hiding complex deatils and showing only the essential features of an object
// Encapsulation - Restricting access to certain properties and methods of an object to protect its integrity.
// Inheritance - Allowing one class to inherit properties and methods from another class, promoting code reuse.
// Polymorphism - Allowing objects of different classes to be treated as instances of the same class, enabling method overriding.

class Employee {
  constructor(employeeName, employeeAge, employeeSalary) {
    this._name = employeeName;
    this._age = employeeAge;
    this._salary = employeeSalary;
  }

  // Encapsulation
  get name() {
    return this._name;
  }
  set name(employeeName) {
    this._name = employeeName;
  }

  // Encapsulation
  get salary() {
    return this._salary;
  }
  set salary(employeeSalary) {
    this._salary = employeeSalary;
  }

  calculateBonus() {
    return this._salary * 1.1;
  }

  print() {
    return `${this._name} is a general employee.`;
  }
}

class Manager extends Employee {
  constructor(managerName, managerAge, managerSalary, managerTeamSize) {
    // we call super method to pass the params to the employee constructor
    super(managerName, managerAge, managerSalary);

    // assign new properties to the this object as usual
    this.teamSize = managerTeamSize;
  }

  // polymorphism
  calculateBonus() {
    return this._salary * 1.2;
  }

  // polymorphism
  print() {
    return `${this._name} is a manager managing a team of ${this.teamSize} people.`;
  }
}

class Developer extends Employee {
  constructor(
    developerName,
    developerAge,
    developerSalary,
    developerProgLanguage
  ) {
    super(developerName, developerAge, developerSalary);
    this.programmingLanguage = developerProgLanguage;
  }

  // polymorphism
  calculateBonus() {
    return this._salary * 1.3;
  }

  // polymorphism
  print() {
    return `${this._name} is a developer skilled in ${this.programmingLanguage}.`;
  }
}

const manager = new Manager("Eustache", 55, 20000, 30); // instance 1 of manager class
const developer = new Developer("Curaj", 26, 15000, "JavaScript"); // instance 1 of developer class

console.log(manager.name); // "Eustache"
console.log(developer.name); // "Curaj"

console.log(manager.calculateBonus()); // 24000
console.log(developer.calculateBonus()); // 19500

console.log(manager.print());
console.log(developer.print());
