const employee = require('../index.js');

class Engineer extends Employee {
    constructor(name, id, email, github)
    super(name, id, email)
    this.github = github;

    getGithub() {
        const githubLink = `<a href="https://github.com/${this.github}"></a>`;
    }

    getRole() {}
}