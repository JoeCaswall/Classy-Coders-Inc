const { Employees } = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;
  constructor(name, title, salary, clients) {
    super(name, title, salary);
    this.#totalSales = 0;
    this.clients = clients;
  }
  getSalesNumber() {
    return this.#totalSales;
  }
  makeSale(amount) {
    this.#totalSales += amount;
  }
}

const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, [
  "Vine",
  "MySpace",
  "Shutterfly",
]);
console.log(malik.getSalesNumber()); // 0
malik.makeSale(10500);
malik.makeSale(20000);
console.log(malik.getSalesNumber());

module.exports = {
  SalesPerson,
};
