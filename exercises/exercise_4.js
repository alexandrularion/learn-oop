/**
 * Write a JavaScript program that creates a class called "BankAccount" with
 * properties for account number and balance. Include methods to deposit and
 * withdraw money from the account. Create some instances of the "BankAccount"
 * class, deposit some money, and withdraw a portion of it.
 * FOR MORE CHECK THIS URL: https://www.w3resource.com/javascript-exercises/oop/index.php
 */

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance; // the amount of money in the account
  }
  deposit(amount) {
    // amount represents the money that are deposited in the account
    this.balance = this.balance + amount; // this.balance += amount; (shortcut)

    return `Ati depus suma de ${amount} EURO.`;
  }
  withdraw(amount) {
    // 9000 <= 10000 (true)
    if (amount <= this.balance) {
      this.balance = this.balance - amount; // this.balance -= amount; (shortcut)
    } else {
      return `Nu aveti suficiente fonduri. Sold: ${this.balance}`;
    }
    return `Ati retras suma de ${amount} EURO.`;
  }
  getBalanceDetails() {
    return `Noul sold este de ${this.balance} EURO.`;
  }
}

const ba1 = new BankAccount(789333, 5000); // 5k euro
console.log(ba1);
console.log(ba1.deposit(10000));
console.log(ba1.getBalanceDetails()); // 5k euro + 10k euro = 15k
console.log(ba1.deposit(3000));
console.log(ba1.getBalanceDetails()); // 15k euro + 3k euro = 18k
console.log(ba1.withdraw(2000));
console.log(ba1.getBalanceDetails()); // 16k
console.log(ba1.withdraw(20000)); // Nu aveti suficiente fonduri. Sold: 16000
