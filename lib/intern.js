// Need to require employee file first to have access to it
const Employee = require('./employee.js');

// Need to create our class of Intern taking in properties &/ methods from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email)
    
    if (typeof school !== "string" || !school.trim().length) {
        throw new Error("Expected parameter 'school' to be a non-empty string");
    }

    this.school = school;
    }

    // Needs to get the school given in the prompt
    getSchool() {
        return this.school;
    }

    // Needs to override parent function that returns "Employee"
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;