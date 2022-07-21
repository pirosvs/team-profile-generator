// Need to require employee file first to have access to it
const Employee = require('./employee.js');

// Need to create our class of Intern taking in properties &/ methods from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
    }

    // Needs to get the school given in the prompt
    getSchool() {
        if (typeof this.school === "string") {
            return this.school;
            // } else {
            //     // return err
            }
    }

    // Needs to override parent function that returns "Employee"
    getRole() {
        return "Engineer";
    }
}

module.exports = Intern;