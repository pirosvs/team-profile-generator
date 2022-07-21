const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');

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

      it("should throw an error if not provided an office number", () => {
        const cb = () => new Employee("Damien", 345, "damiensmail@mail.com");
        const err = new Error("Expected parameter 'officeNumber' not found");
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'officeNumber' is not a number", () => {
        const cb = () => new Child("Damien", 345, "damiensmail@mail.com", "678");
        const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
    })
})