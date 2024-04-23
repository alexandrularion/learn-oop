/**
 * Bank Class
 */
class Bank {
  /**
   * Class Constructor
   * Takes amount and balance as params
   */
  constructor(amount, balance) {
    this.amount = amount;
    this.balance = balance;
  }
  /**
   * Method
   * Returns the value of the balance property
   */
  getBalance() {
    return this.balance;
  }
}

/**
 * Account Subclass
 * Extends (inherit) the Bank main class
 */
class Account extends Bank {
  /**
   * Class Constructor
   * Takes amount, balance and id params
   */
  constructor(amount, balance, id) {
    /**
     * Inherit the properties of the Bank main class
     */
    super(amount, balance);
    this.id = id;
  }
}
/**
 * Instantiate an object from Account class
 */
const a1 = new Account(20.0, 300.0, "x2D2d|32d");
console.log(a1); // { amount: 20.0, balance: 300.0, id: "x2D2d|32d" }
console.log(a1.getBalance()); // 300.0
