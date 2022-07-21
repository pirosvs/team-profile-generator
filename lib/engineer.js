// Need to require employee file first to have access to it
const Employee = require('./employee.js');

// Need to create our class of Engineer taking in properties &/ methods from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
    }

    // Needs to take the github username given in the prompt and make a link to their github page
    getGithub() {
        return this.github;
        // Don't know if I need to check that it's an existing github page to validate
        // const githubLink = `<a href="https://github.com/${this.github}"></a>`;
    }

    // Needs to override parent function that returns "Employee"
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;