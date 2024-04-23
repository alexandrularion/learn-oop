// Function Constructor
function Car(brand, model, year) {
  this.brand = brand; // new property of this object
  this.model = model; // new property of this object
  this.year = year; // new property of this object

  // Method: getter fn to get the brand
  this.getBrand = function () {
    return this.brand;
  };
  // Method: getter fn to get the model
  this.getModel = function () {
    return this.model;
  };
  // Method: getter fn to get the model
  this.getYear = function () {
    return this.year;
  };

  // Method: setter fn to set the brand
  this.setBrand = function (brand) {
    // brand can be: object, array, string, boolean, number and we must validate it
    if (typeof brand === "string") {
      if (brand.length >= 3) {
        this.brand = brand;
      } else {
        throw new Error("The brand must have at least 3 characters.");
      }
    } else {
      throw new Error("The brand must be a string.");
    }
  };
}

// We create some instances of the Car constructor
const car1 = new Car("Dacia", "Logan", 2022);
const car2 = new Car("Alfa Romeo", "Brera", 2023);
const car3 = new Car("Nissan", "X-Trail", 2020);

console.log(car1); // Car { brand: 'Dacia', model: 'Logan', year: 2022, getBrand: [Function (anonymous)], getModel: [Function (anonymous)], getYear: [Function (anonymous)], setBrand: [Function (anonymous)] }
console.log(car2); // Car { brand: 'Alfa Romeo', model: 'Brera', year: 2023, getBrand: [Function (anonymous)], getModel: [Function (anonymous)], getYear: [Function (anonymous)], setBrand: [Function (anonymous)] }
console.log(car3); // Car { brand: 'Nissan', model: 'X-Trail', year: 2020, getBrand: [Function (anonymous)], getModel: [Function (anonymous)], getYear: [Function (anonymous)], setBrand: [Function (anonymous)]}

console.log(car2.getModel()); // "Brera"
console.log(car3.getBrand()); // "Nissan"
car1.setBrand("BMW"); // We use the setBrand setter to update the brand property
console.log(car1.getBrand()); // "BMW"
