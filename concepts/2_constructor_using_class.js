class Bank {
  /**
   * Constructor in class
   */
  constructor(amount, balance) {
    /**
     * Properties (data members) of the class
     */
    this.amount = amount;
    this.balance = balance;
  }
  /**
   * Method
   * Added automatically in prototype
   */
  getBalance() {
    return this.balance;
  }
}

/**
 * Instantiate an object
 */
const b1 = new Bank(10.0, 200.0, 2392);
console.log(b1);
