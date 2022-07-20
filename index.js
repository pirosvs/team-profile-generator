// Require inquirer and fs so that we can ask questions in the terminal and create a file
const fs = require('fs');
const inquirer = require('inquirer');

// Creates our class Employee 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }
}

// List of questions asked by inquirer
inquirer
    .prompt([
        {
            type: "input"
            name: "1"
            message: "message"
        }
    ])

// Writes file
function writeToFile(data) {
    const generateHTMLContent = generateHTML(data);
    fs.writeFile(`${data.github.toLowerCase().split(' ').join('')}index.html`, generateHTMLContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}