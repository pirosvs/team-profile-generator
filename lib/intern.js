const employee = require('../index.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
    }
    
    getSchool() {
        const githubLink = `<a href="https://github.com/${this.github}"></a>`;
    }

    getRole() {
        return "Engineer";
    }
}