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
        name = this.name;
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return "Employee";
    }
}

// Questions to use for inquirer -- perhaps consolidate the first 3 of each?
// team manager’s name, employee ID, email address, and office number
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter manager name"
    },

    {
        type: "input",
        name: "id",
        message: "Please enter manager employee ID"
    },

    {
        type: "input",
        name: "email",
        message: "Please enter manager email address"
    },

    {
        type: "input",
        name: "officeNum",
        message: "Please enter manager office number"
    }
];

// engineer’s name, ID, email, and GitHub username
const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Please enter engineer name"
    },

    {
        type: "input",
        name: "engineerId",
        message: "Please enter engineer employee ID"
    },

    {
        type: "input",
        name: "engineerEmail",
        message: "Please enter engineer email address"
    },

    {
        type: "input",
        name: "github",
        message: "Please enter github username"
    }
];

// intern’s name, ID, email, and school
const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Please enter intern name"
    },

    {
        type: "input",
        name: "internId",
        message: "Please enter intern employee ID"
    },

    {
        type: "input",
        name: "internEmail",
        message: "Please enter intern email address"
    },

    {
        type: "input",
        name: "schoolName",
        message: "Please enter intern school name"
    }
];

// List of questions asked by inquirer
inquirer
    .prompt([
        {
            type: "input",
            name: "1",
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