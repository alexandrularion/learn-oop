// String literals
// "...", '...', `...`
const email = "john.doe@gmail.com"; // string
const fullName = "John Doe"; // string
const greeting = `Good morning, ${fullName}`; // string - template literal

console.log(email); // "john.doe@gmail.com"
console.log(fullName); // "John Doe"
console.log(greeting); // "Good morning, John Doe"

const biography = new String("Lorem ipsum...");

console.log(biography); // [String: 'Lorem ipsum...']

// Numeric literals
// 123123123
const age = 30;
const cnp = new Number(50402023040120310);
const price = 3000;

console.log(price.toFixed(3));
console.log(
  price.toLocaleString("ro", {
    currency: "EUR",
    style: "currency",
  })
);

// Object literals
const user = {
  name: "John Doe",
  age: 30,
  print: function () {
    return `${this.name} is ${this.age} years old.`;
  },
};
const product = new Object({
  name: "My product",
  price: 300,
  isListed: false,
});

console.log(user.print()); // "John Doe is 30 years old."

console.log(product.hasOwnProperty("price")); // true
console.log(user.hasOwnProperty("age")); // true
console.log(user.hasOwnProperty("occupation")); // false
