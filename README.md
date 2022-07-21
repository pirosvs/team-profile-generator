# team-profile-generator

## Description
This project allows the user to quickly and easily create a simple HTML page for their project's team members, including key bits of information such as the employee name, ID, and emails for contact, engineer's github profiles, the office number for the manager, and any interns' school names. This allows for teams to create a basic page for contact information for the entire team, as well as other pertinent information for clients, hopefully creating an end to otherwise endless back-and-forths regarding who to contact and where and how, or at least facilitating the form email admin staff will be made to send out. 

For this project, user input for each of the team members and their information is taken from the command line using inquirer prompts. Questions are cycled through different functions to allow for the the questions to loop until the user has inputed all team members. Team member employee objects are created and added to an empty array to facilitate card generation. Members are created according to their class, each of which extends off the basic "Employee" class to simplify code and eliminate redundancies. Hence we have 
```
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
```
As all employee types need to have a name, id, and email argument, and then 
```
class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
    }
}
```
Where we extend our "Employee" class onto our "Engineer" class, taking in the previous arguments by including them in our constructor and with the "super" method and add on our new "github" argument specific to our engineer class.

Once our prompts are complete and we have no more members to add, file system then writes our new file using the template literal in our generateHTML file, which contains the literals for the entire HTML as well as the functions to generate cards with the information taken from the user's input from the command line prompts and put into our employee objects. File system then generates our new HTML file with corresponding CSS to create our finished team profile page. 

Each class is also tested using the files in our 'test' directory to make sure they only take in correct inputs and throw an error if they are not given the correct type of input or if they are left empty. Hence, we have a number of tests that are variations of 
```
it("should throw an error if provided no arguments", () => {
    const cb = () => new Employee();
    expect(cb).toThrow();
});
```
Where we give our test an example of a new Employee being created with no arguments for the name, id, email, and role, and we say that the result of providing it no arguments should be to throw out an error, which we find matched in the "employee" JavaScript file in out "lib" directory:
```
needs actual code
```

## Credits

## License
This project falls under the MIT license.

## Author
Damien Armstrong can be found on: <a href="https://www.linkedin.com/in/damien-armstrong-412319138/">Linkedin</a>, <a href="https://github.com/pirosvs">Github</a>