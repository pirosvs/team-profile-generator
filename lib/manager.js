// Need to require employee file first to have access to it
const employee = require('../index.js');

// Need to create our class of Intern taking in properties &/ methods from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    }

    // Needs to override parent function that returns "Employee"
    getRole() {
        return "Manager";
    }
}