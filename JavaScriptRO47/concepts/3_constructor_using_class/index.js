class Product {
  static prefixMessage = "Production information: ";

  /**
   * Helps to build objects
   * @param {string}        productName         i.e. "Smartphone Iphone16 ProMax 1TB, 28GB RAM"
   * @param {Array<number>} productSize         i.e. [5,10]
   * @param {string}        productDescription  i.e. "Powerful smartphone designed by apple"
   * @param {number}        productWeight       i.e. 200
   */
  constructor(productName, productSize, productDescription, productWeight) {
    this.name = productName; // property
    this.size = productSize; // property
    this.description = productDescription; // property
    this.weight = productWeight; // property
  }

  /**
   * Set the price of the product
   * @param {number}    productPrice  i.e. 7000
   */
  set setPrice(productPrice) {
    this.price = productPrice;
  }

  /**
   * Get the size formated as an object
   * @returns {Object}  i.e. { x: 30, y: 100 }
   */
  get getSize() {
    return {
      x: this.size[0],
      y: this.size[1],
    };
  }

  /**
   * Print a message using a custom prefix mesage
   * @method Product#print
   * @param {string} prefixMessage  i.e. "Production information: "
   */
  print(prefixMessage) {
    console.log(
      `${prefixMessage} ${this.name}, ${this.price}, ${this.description}`
    );
  }

  /**
   * Format the price using romanian currency and format
   * @method    Product#formatPrice
   * @param     {number|string}     price   i.e. 200 | "200"
   * @returns   {string}                    i.e. 200.00 RON
   */
  static formatPrice(price) {
    return Number(price).toLocaleString("ro", {
      style: "currency",
      currency: "RON",
    });
  }
}

const product1 = new Product(
  "Smartphone Iphone16 ProMax",
  [5.5, 12],
  "Powerful smartphone designed by apple",
  220
); // instance 1

/**
 { 
    name: "Smartphone Iphone16 ProMax", 
    size: [5.5,12], 
    description: "Powerful smartphone designed by apple" 
    weight: 220
 }
 */
console.log(product1);

product1.setPrice = 7000;

/**
 { 
    name: "Smartphone Iphone16 ProMax", 
    size: [5.5,12], 
    description: "Powerful smartphone designed by apple" 
    weight: 220,
    price: 7000
 }
 */
console.log(product1);

/**
 {
    x: 5.5,
    y: 12
 }
 */
console.log(product1.getSize);

// Access static proeprty prefixMessage within Product class
product1.print(Product.prefixMessage);

const formatedPrice = Product.formatPrice(product1.price); // access the static method formatPrice
console.log(formatedPrice); // 7.000,00 RON
