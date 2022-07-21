const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');

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
    })
})