/*
 *  Constructor using function
 */
function Bank(amount, balance) {
  this.amount = amount;
  this.balance = balance;
}
/**
 * Put the getBalance in prototype object
 */
Bank.prototype.getBalance = function () {
  return this.balance;
};

/**
 * Instantiate an object of the function constructor
 */
const b2 = new Bank(20.0, 300.0);
console.log(b2);
