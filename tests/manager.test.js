const Employee = require('../lib/employee.js');
const Manager = require('../lib/manager.js');

describe("Manager", () => {
    // Test for our new case officeNumber when initializing a new Manager object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and role if provided valid arguments", () => {
        const manager = new Manager("Damien", 345, "damiensmail@mail.com", 678);
  
        // Verify that the new object has the correct properties
        // expect(manager.name).toEqual("Damien");
        // expect(manager.id).toEqual(345);
        // expect(manager.email).toEqual("damiensmail@mail.com");
        expect(manager.officeNumber).toEqual(678);
      });

//       it("should throw an error if not provided an office number", () => {
//         const manager = new Manager("Damien", 345, "damiensmail@mail.com");
//         const err = new Error("Expected parameter 'officeNumber' not found");
//         expect(manager).toThrowError(err);
//       });
    })

  describe("getRole", () => {
    it("should return the role", () => {
      expect(new Manager("Damien", 345, "damiensmail@mail.com", 54).getRole()).toBe("Manager");
    });
  })
})