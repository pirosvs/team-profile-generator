// Require inquirer and fs so that we can ask questions in the terminal and create a file
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Creates our class Employee 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        name = data.name;
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
    },

    {
        type: "input",
        name: "continue",
        message: "Would you like to add another team member?"
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
    },

    {
        type: "input",
        name: "continue",
        message: "Would you like to add another team member?"
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
    },

    {
        type: "input",
        name: "continue",
        message: "Would you like to add another team member?"
    }
];

const selectMember = () => {
    if (data.continue.val == "yes") {
        // inquirer.prompt({ type: "list", name: "member", message: "Which type would you like to add?", choices: "Engineer", "Intern"})
        // if (response.member.val == "Engineer") {
            // inquirer.prompt(engineerQuestions)
        // } else if (response.member.val == "Intern") {
            // inquirer.prompt(internQuestions)
        // }
    } else if (data.continue.val == "no") {
        // exit
    } else {
        // inquirer.prompt({ type: "list", name: "member", message: "Which type would you like to add? (accepts yes/ no)"})
    }
}

// If the user has more team members, keep going, otherwise exit the prompts
inquirer.when(continue) or prompts.next(internQuestions)

// Writes file
function writeToFile(data) {
    const generateHTMLContent = generateHTML(data);
    fs.writeFile(`team-index.html`, generateHTMLContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// Function to initialize app
function init() 
{
  inquirer
  .prompt(managerQuestions)
  //.prompt( the thing they choose)
  .then(writeToFile);
}

// Function call to initialize app
init();