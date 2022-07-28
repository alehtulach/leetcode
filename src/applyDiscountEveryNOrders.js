/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
const Cashier = function (n, discount, products, prices) {
  this.n = n;
  this.discount = discount;
  this.callCounter = 0;
  this.products = new Map();
  for (let i = 0; i < products.length; i++) {
    this.products.set(products[i], prices[i]);
  }
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  this.callCounter++;

  let subtotal = 0;
  for (let i = 0; i < product.length; i++) {
    let productId = product[i];
    subtotal = subtotal + amount[i] * this.products.get(productId);
  }
  if (this.n === this.callCounter) {
    this.callCounter = 0;
    return subtotal * ((100 - this.discount) / 100);
  }
  return subtotal;
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

cashier = new Cashier(
  3,
  50,
  [1, 2, 3, 4, 5, 6, 7],
  [100, 200, 300, 400, 300, 200, 100]
);
let res = cashier.getBill([1, 2], [1, 2]);
let res2 = cashier.getBill([3, 7], [10, 10]);
let res3 = cashier.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1]);
