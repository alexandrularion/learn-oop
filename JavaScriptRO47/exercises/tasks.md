# OOP Exercises in JavaScript 

## Beginner Level

### 1. **Create a Simple Class**
   **Task**: Create a `Person` class with properties `name` and `age`. Add a method `greet()` that prints `"Hello, my name is [name]"`.
   
   **Hint**: Use the `class` keyword and define a method inside the class.

   **Description**: This exercise introduces the basic syntax of defining a class and working with its properties and methods.

---

### 2. **Encapsulation with Getters and Setters**
   **Task**: Create a `Car` class with private properties `_brand`, `_model`, and `_year`. Use getters and setters to access and update these properties, ensuring `year` is a valid number.

   **Hint**: Use `get` and `set` methods to control access to the properties.

   **Description**: You'll practice data validation and encapsulation by restricting direct access to object properties.

---

### 3. **Constructor Functions**
   **Task**: Create a `Book` constructor function that accepts parameters `title`, `author`, and `year`. Add a method `getSummary()` to return a string with the book’s title, author, and year.

   **Hint**: Use `this` to reference the properties inside the constructor, and define a method using the prototype.

   **Description**: This exercise helps you understand constructor functions and prototype-based methods in JavaScript.

---

### 4. **Inheritance: Extending a Class**
   **Task**: Create a `Vehicle` class with properties `make` and `model`. Then, create a `Truck` class that extends `Vehicle` and adds a new property `loadCapacity`.

   **Hint**: Use `extends` and call the parent constructor using `super()`.

   **Description**: This introduces inheritance, allowing a class to reuse properties and methods from another class.

---

### 5. **Polymorphism: Method Overriding**
   **Task**: Create a `Shape` class with a method `getArea()`. Extend it with `Circle` and `Rectangle` classes, each overriding the `getArea()` method to calculate the area based on their specific formulas.

   **Hint**: Override the `getArea()` method in the subclasses with their own logic.

   **Description**: Learn how polymorphism works by overriding methods in subclasses for specific behaviors.

---

## Intermediate Level

### 6. **Abstract Class Simulation**
   **Task**: Create an `Animal` class with an abstract method `makeSound()`. Extend `Animal` with `Dog` and `Cat` classes that implement `makeSound()` differently for each animal.

   **Hint**: You can simulate an abstract class by throwing an error if the method is not implemented in the subclass.

   **Description**: Simulates abstract classes in JavaScript, forcing child classes to provide specific implementations.

---

### 7. **Static Methods and Properties**
   **Task**: Create a `MathUtil` class with static methods for basic arithmetic operations: `add()`, `subtract()`, `multiply()`, and `divide()`. These methods should be called without creating an instance of the class.

   **Hint**: Use the `static` keyword to define methods that can be called directly from the class.

   **Description**: Static methods belong to the class itself, not instances, which is useful for utility methods like in this exercise.

---

### 8. **Private Methods (Simulated with WeakMap or Closures)**
   **Task**: Create a `BankAccount` class that uses closures or `WeakMap` to keep the balance private. Implement methods to `deposit()`, `withdraw()`, and `checkBalance()`.

   **Hint**: Use closures or `WeakMap` to simulate private properties.

   **Description**: Learn how to hide data in JavaScript classes, simulating true private properties.

---

### 9. **Inheritance Chain**
   **Task**: Create three classes: `Person`, `Employee`, and `Manager`. `Manager` should inherit from `Employee`, and `Employee` should inherit from `Person`. Each class should have unique properties and methods.

   **Hint**: Use multiple levels of `extends` to build a class hierarchy.

   **Description**: This exercise teaches you how to create multi-level inheritance and manage common properties and methods across different levels.

---

### 10. **Factory Pattern**
   **Task**: Create a factory function `createVehicle()` that returns either a `Car` or `Bike` object based on the input parameters. Both should have a `move()` method with different implementations.

   **Hint**: Create different classes for `Car` and `Bike` and use a function to return the appropriate object based on input.

   **Description**: Learn how to implement the factory pattern, which helps to manage object creation logic and reduce code duplication.

---

## Advanced Level

### 11. **Composition Over Inheritance**
   **Task**: Create two independent classes `Engine` and `Wheels`. Create a `Car` class that uses composition by including instances of `Engine` and `Wheels` in its properties.

   **Hint**: Rather than inheriting, create instances of `Engine` and `Wheels` inside the `Car` class.

   **Description**: This exercise demonstrates the use of composition, which is often a better approach than inheritance for creating complex objects.

---

### 12. **Mixin Pattern**
   **Task**: Create a `Swimmer` and `Flyer` mixin with methods `swim()` and `fly()`. Apply these mixins to a class `Penguin` (that can swim) and `Eagle` (that can fly).

   **Hint**: Use Object.assign() or class inheritance to apply multiple behaviors to a class.

   **Description**: Introduces the mixin pattern to share functionality across different classes without inheritance.

---

### 13. **Observer Pattern**
   **Task**: Implement the Observer pattern by creating a `Subject` class with methods to attach, detach, and notify observers. Then create an `Observer` class that reacts to changes in the subject.

   **Hint**: Use an array to hold the observers and notify them when a specific event occurs.

   **Description**: Learn the Observer pattern, which is useful for creating decoupled systems where objects react to state changes.

---

### 14. **Prototype-Based Inheritance**
   **Task**: Create a `User` prototype with methods `login()` and `logout()`. Extend the `User` prototype to create an `Admin` prototype with an additional method `deleteUser()`.

   **Hint**: Use `Object.create()` to set up prototype-based inheritance.

   **Description**: Understand JavaScript’s prototype-based inheritance by extending prototypes and adding additional methods.

---

### 15. **Singleton Pattern**
   **Task**: Implement a singleton class `Config` that restricts object creation to only one instance. Ensure that any attempt to create multiple instances returns the same object.

   **Hint**: Use a static variable inside the class to store the single instance.

   **Description**: The Singleton pattern ensures a class has only one instance, useful for managing shared resources like configuration settings.

---

### Bonus Exercise:
### **Create a Real-World Application**
   **Task**: Build a class-based app to manage employees in a company. Include classes for `Employee`, `Manager`, and `Department`. Implement features such as adding employees, promoting them to managers, and listing employees in a department.

   **Hint**: Use a combination of inheritance and composition to manage different types of employees and their relationships to departments.

   **Description**: This comprehensive exercise ties together multiple OOP concepts into a real-world scenario.
