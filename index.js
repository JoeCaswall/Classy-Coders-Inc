const { Employees } = require("./classes/Employees");
const { Manager } = require("./classes/Manager");
const { SalesPerson } = require("./classes/SalesPerson");
const { SoftwareEngineer } = require("./classes/SoftwareEngineer");

// Run and debug your code here

const jenna = new Manager(
  "Jenna",
  "Head of Engineers",
  120000,
  "Software Engineering",
  10
);

jenna.promote("CTO", 100000);
console.log(jenna);
console.log(jenna.getSalary());

module.exports = {
  Employees,
  Manager,
  SalesPerson,
  SoftwareEngineer,
};
