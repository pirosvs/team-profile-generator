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
    var employeeCard = 
`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${getName()}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${emailLink(data)}</li>
      <li class="list-group-item">${getEmail()}</li>
      <li class="list-group-item">${getSpecialInfo(data)}</li>
    </ul>
  </div>
</div>
`
    resultHTML += employeeCard
  }

  return resultHTML
}

function makeGithubLink(data) {
  var githubLink = `https://github.com/${engineer.github}`;
}

function makeEmailLink(data) {
  var emailLink = `<a href="mailto:${employee.email}"></a>`;
}

function internCard(data) {
  var internCard = 
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.id}</li>
    <li class="list-group-item">${emailLink(data)}</li>
    <li class="list-group-item">${getSchool()}</li>
  </ul>
  </div>
  </div>
  `
}

function engineerCard(data) {
`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${getName()}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${emailLink(data)}</li>
    <li class="list-group-item">${getEmail()}</li>
      <li class="list-group-item">${getGithub()}</li>
    </ul>
  </div>
</div>
`
}

function getSpecialInfo (data) {
  if (intern) {
    getSchool();
  } else if (engineer) {
    getGithub();
    makeGithubLink();
  }
}

module.exports = generateHTML;