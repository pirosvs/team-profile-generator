// Require inquirer and fs so that we can ask questions in the terminal and create a file
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./dist/generateHTML.js');

// var steve = new Employee("Steve", 12345, "steve@steve.org")
// var name = steve.getName();

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
    if (data.continue.toLowerCase() == "yes") {
        // inquirer.prompt({ type: "list", name: "member", message: "Which type would you like to add?", choices: "Engineer", "Intern"})
        // if (response.member.val == "Engineer") {
            // inquirer.prompt(engineerQuestions)
        // } else if (response.member.val == "Intern") {
            // inquirer.prompt(internQuestions)
        // }
    } else if (data.continue.toLowerCase() == "no") {
        // exit
    } else {
        // inquirer.prompt({ type: "list", name: "member", message: "Which type would you like to add? (accepts yes/ no)"})
    }
}

var allEmployees = []

// create employee from our data
function addManagerToAllEmployees(data)
{
    var manager = new Manager(data.name, data.id, data.email, data.officeNum);
    allEmployees.push(manager);
}

// Writes file
function writeToFile() {
    const generateHTMLContent = generateHTML(allEmployees);
    fs.writeFile(`team-index.html`, generateHTMLContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

function getsAllEmployeesFromUser()
{
   addAnotherEmployee = true
   // ask the user if they want to enter another employe
   
   while(addAnotherEmployee == true) {
       // ask the user for what kind of employee
    //    for value of allEmployees (generate cards)
        // inquirer.prompt(employeeSelect)
        // if (response === "engineer") {inquirer.prompt(engineerQuestions)}
       // do the inquirer and add the employee to our list
      // addEngineerToAllEmployees(response)
      // ask the user if they want to enter another employee
      // inquirer.prompt(continue)
   }


    return allEmployees;
}

// Function to initialize app
function init() 
{
  // Ask the user for manager info
  // add that manager to the list
  // 
  //
  inquirer
  .prompt(managerQuestions)
    //   anything that needs response data needs to be w/ the then
    // 19 ist demo format nodejs to use as an example of how to order things for this here
    // .then((response) => {
    //     console.log(response)
    //     response.confirm === response.password
    //       ? console.log('Success!')
    //       : console.log('You forgot your password already?!')
    //   }
  .then(addManagerToAllEmployees){}

  getsAllEmployeesFromUser()
  writeToFile()
}

// Function call to initialize app
init();