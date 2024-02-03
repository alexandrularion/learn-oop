/**
 * Bank Constructor Function
 */
function Bank(amount, balance) {
  this.amount = amount;
  this.balance = balance;
}

/**
 * Adding getBalance function to the prototype object
 */
Bank.prototype.getBalance = function () {
  return this.balance;
};

/**
 * Account Constructor Function
 * Inherit the bank properties
 */
function Account(amount, balance, id) {
  //   this = {}
  console.log("before using Bank.call method", this);
  Bank.call(this, amount, balance);
  //   this = { amount: 20.0, balance: 300.0 }
  console.log("after using Bank.call method", this);
  this.id = id;
  //   this = { amount: 20.0, balance: 300.0, id: "x2D2d|32d" }
  console.log("after assigning the id property", this);
}

/**
 * Inherit the bank prototype
 */
Account.prototype = Object.create(Bank.prototype);

const a1 = new Account(20.0, 300.0, "x2D2d|32d");
console.log(a1);
console.log(a1.getBalance());
