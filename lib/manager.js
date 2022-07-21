// Need to require employee file first to have access to it
const Employee = require('./employee.js');

// Need to create our class of Intern taking in properties &/ methods from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    if (typeof officeNumber !== "number" || officeNumber < 0) {
        throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
    }

    super(name, id, email)
    this.officeNumber = officeNumber;
    }

    // Needs to override parent function that returns "Employee"
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;