class Employees {
  #salary;
  #isHired;
  static allEmployees = [];
  static getEmployees() {
    return this.allEmployees;
  }
  static getTotalPayroll() {
    let total = 0;
    for (let x of this.allEmployees) {
      total += x.#salary;
    }
    return total;
  }
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = true;
    Employees.allEmployees.push(this);
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getSalary(amount) {
    return this.#salary;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") this.#isHired = false;
  }
}

module.exports = {
  Employees,
};
