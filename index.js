// Require inquirer and fs so that we can ask questions in the terminal and create a file
// Require our class files and file to generate HTML document with data returned from user input
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./dist/generateHTML.js');
// const { getRandomValues } = require('crypto');

// var steve = new Employee("Steve", 12345, "steve@steve.org")
// var name = steve.getName();

// Questions to use for inquirer -- perhaps consolidate the first 3 of each?
// team manager’s name, employee ID, email address, and office number
const managerQuestions = () => {
    return inquirer.prompt([
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
]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
    allEmployees.push(manager);
    optionsMenu();
})
};

// engineer’s name, ID, email, and GitHub username
const engineerQuestions = () => {
    return inquirer.prompt([
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
])
.then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    allEmployees.push(engineer);
    optionsMenu();
})
};

// intern’s name, ID, email, and school
const internQuestions = () => {
    return inquirer.prompt([
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
])
.then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    allEmployees.push(intern);
    optionsMenu();
})
};

// Question to check if user would like to add another employee
// const continueQuestion = [
//     {
//         type: "confirm",
//         name: "continue",
//         message: "Would you like to add another team member?"
//     }
// ];

// Question to check which type of employee user would like to add
const optionsMenu = () => {
    return inquirer.prompt([
    {
        type: "list",
        name: "selectMember",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "Finish"]
    }
]).then(answers => {
    if (answers.selectMember == "Engineer") {
        engineerQuestions();
    } else if (answers.selectMember == "Intern") {
        internQuestions();
    } else if (answers.selectMember == "Finish") {
        return;
    }
})
};

// function promptByEmployeeType(userType)
// {
//     if (userType == "Engineer") {
//         return inquirer.prompt(engineerQuestions);
//     } else if (userType == "Intern") {
//         return inquirer.prompt(internQuestions);
//     }
// }

// // Check if the user wants to add another employee
// const chooseContinue = (data) => {
//     if (data.continue == true) {
//         var addAnotherEmployee = true;
//         inquirer.prompt(selectMember)
//         .then((response) => chooseQuestionSet())
//     } else if (data.continue == false) {
//         var addAnotherEmployee = false;
//         return;
//     }
//     //  else {
//     //     inquirer.prompt({ type: "list", name: "member", message: "Which type would you like to add? (accepts yes/ no)"})
//     // }
// }

// Empty array to store the created employees
var allEmployees = []

// Create employee from our data
// function addManager(data)
// {
//     var manager = new Manager(data.name, data.id, data.email, data.officeNum);
//     allEmployees.push(manager);
// }

// function addIntern(data) {
//     var intern = new Intern(data.internName, data.internId, data.internEmail, data.schoolName);
//     allEmployees.push(intern);
// }

// function addEngineer(data) {
//     // TODO: make the fields below (e.g. data.name) match whats in the questions
//     var engineer = new Engineer(data.name, data.id, data.email, data.github);
//     allEmployees.push(engineer);
// }

// Create the type of employee based on role returned
// function addEmployeeByRole(data) {
//     // getRole();
//     if (data.internId != null) {
//         addIntern(data);
//     } else if (data.engineerId != null) {
//         addEngineer(data);
//     } else if (data.id != null) {
//         addManager(data);
//     }
// }

// Writes file
function writeToFile() {
    const generateHTMLContent = generateHTML(allEmployees);
    fs.writeFile(`team-index.html`, generateHTMLContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team profile page!')
    );
}

// function getNextUserData()
// {
//    // ask the user if they want to enter another employe
//   // inquirer.prompt(continueQuestion).then(chooseContinue())

//   // while(addAnotherEmployee == true) {
//     // ask the user for what kind of employee
//     return inquirer.prompt(selectMember)
//     .then(promptByEmployeeType)
//     .then(addEmployeeByRole)
//     .then(inquirer.prompt(continueQuestion))
//     .then((response) => {
//         if(response.confirm == true)
//             getNextUserData();
//       })


//     //    for value of allEmployees (generate cards)
//         // inquirer.prompt(employeeSelect)
//         // if (response === "engineer") {inquirer.prompt(engineerQuestions)}
//        // do the inquirer and add the employee to our list
//       // addEngineerToAllEmployees(response)
//       // ask the user if they want to enter another employee
//       // inquirer.prompt(continue)
//   // }
// }

// Function to initialize app
// function init() 
// {
//   inquirer
//   .prompt(managerQuestions)
//     //   anything that needs response data needs to be w/ the then
//     // 19 ist demo format nodejs to use as an example of how to order things for this here
//     .then((response) => {
//         addManager(response);
//     }).then(getsAllEmployeesFromUser) 
//     .then((response) => {
//         writeToFile();
//     })
// }
function init() {
    managerQuestions().then(writeToFile());
}

// Function call to initialize app
init();