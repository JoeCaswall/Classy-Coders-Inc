const { Employees } = require("./Employees.js");

class Manager extends Employees {
  #employeesManaged;
  constructor(name, title, salary, department, employeesManaged) {
    super(name, title, salary);
    this.department = department;
    this.#employeesManaged = employeesManaged;
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }
  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

module.exports = {
  Manager,
};
