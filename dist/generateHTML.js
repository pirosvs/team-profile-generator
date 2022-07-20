const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


function generateHTML(employeeList) {
return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>Work Day Scheduler</title>
  </head>
    
  <body>
  `

  + createEmployeeCards(employeeList) +

  `
  </body>
  
</html>
`
}

function createEmployeeCards(employeeList)
{
  var resultHTML = ``

  for(var employee in employeeList)
  {
    var employeeCard = `<p>` + employee.name + `</p>`
    resultHTML += employeeCard
  }

  return resultHTML
}

module.exports = generateHTML;