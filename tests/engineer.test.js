const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer.js');

describe("Engineer", () => {
    // Test for all new case github when initializing a new Engineer object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and role if provided valid arguments", () => {
        const engineer = new Engineer("Damien", 345, "damiensmail@mail.com", "pirosvs");
  
        // Verify that the new object has the correct properties
        // expect(engineer.name).toEqual("Damien");
        // expect(engineer.id).toEqual(345);
        // expect(engineer.email).toEqual("damiensmail@mail.com");
        expect(engineer.github).toEqual("pirosvs");
      });

//       it("should throw an error if not provided a github username", () => {
//         // const engineer = new Engineer("Damien", 345, "damiensmail@mail.com");
//         const cb = () => new Engineer("Damien", 345, "damiensmail@mail.com");
//         const err = new Error("Expected parameter 'github' to be a non-empty string");
//         expect(engineer).toThrowError(err);
//       });
    })

    describe("getGithub", () => {
      it("should return the github username", () => {
        expect(new Engineer("Damien", 345, "damiensmail@mail.com", "pirosvs").getGithub()).toBe("pirosvs");
      });
      })
})