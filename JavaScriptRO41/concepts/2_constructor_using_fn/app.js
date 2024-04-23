function Car() {
  // we use object to modify it when needed
  const data = {
    brand: "Dacia",
    model: "Golan",
    year: "2022",
  };

  // we modify the brand property by reference
  data.brand = "Nissan";
  //   const brand = "Dacia";
  //   const model = "Golan";
  //   const year = "2022";

  // getter fn
  const getBrand = function () {
    return data.brand; // "Dacia"
  };

  // getter fn
  const getModel = function () {
    return data.model; // "Golan"
  };

  //   getter fn
  const getYear = function () {
    return data.year; // "2022"
  };

  //   setter fn
  const setBrand = function (brand) {
    // brand can be: object, array, string, boolean, number and we must validate it
    if (typeof brand === "string") {
      if (brand.length >= 3) {
        data.brand = brand;
      } else {
        throw new Error("The brand must have at least 3 characters.");
      }
    } else {
      throw new Error("The brand must be a string.");
    }
  };

  return {
    // We don't pass the properties because we made them PRIVATE
    // brand: brand,
    // model: model,
    // year: year,
    getBrand: getBrand,
    getModel: getModel,
    getYear: getYear,
    setBrand: setBrand,
  };
}

const car1 = Car(); // { brand: "Dacia", model: "Golan", year: "2022" }

console.log(car1);

car1.setBrand("BID");

console.log(car1.brand); // "Dacia"

console.log(car1.getBrand()); // "BID"

console.log(car1.getModel()); // "Golan";
