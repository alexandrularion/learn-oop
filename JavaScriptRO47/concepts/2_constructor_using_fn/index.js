/**
 * Constructor to create specific vehicles
 * @param {string} vehicleBrand   The brand of the vehicle
 * @param {string} vehicleColor   The color of the vehicle
 * @param {number} vehicleYear    The year of the vehicle
 */
function Vehicle(vehicleBrand, vehicleColor, vehicleYear) {
  this.brand = vehicleBrand; // property
  this.color = vehicleColor; // property
  this.year = vehicleYear; // property
}

/**
 * Display the information about the vehicle in one line
 * @method  Vehicle#print
 * @returns {void}
 */
Vehicle.prototype.print = function () {
  console.log(
    `The vehicle ${this.brand} has color ${this.color} and was manufactured in ${this.year} year.`
  );
};

const vehicle1 = new Vehicle("Mercedes", "Black Matte", 2019); // instance 1
const vehicle2 = new Vehicle("BMW", "Black", 2020); // instance 2
const vehicle3 = new Vehicle("Matiz", "Green", 2005); // instance 3

console.log(vehicle1); // Vehicle { brand: 'Mercedes', color: 'Black Matte', year: 2019 }
console.log(vehicle2); // Vehicle { brand: 'BMW', color: 'Black', year: 2020 }
console.log(vehicle3); // Vehicle { brand: 'Matiz', color: 'Green', year: 2005 }

vehicle1.print();
vehicle2.print();
