const Employee = require('./lib/employee.js');

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and role if provided valid arguments", () => {
        // Act
        const employee = new Employee("Damien", 345, "damiensmail@mail.com");
  
        // Verify that the new object has the correct properties
        expect(employee.name).toEqual("Damien");
        expect(employee.id).toEqual(345);
        expect(employee.email).toEqual("damiensmail@mail.com");
      });

      it("should throw an error if provided no arguments", () => {
        // Wrap the object initialization in a callback function that Jest will run
        const cb = () => new Employee();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });

      it("should throw an error if not provided an id", () => {
        const cb = () => new Employee("Damien");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'id' not found");
        expect(cb).toThrowError(err);
      });

      it("should throw an error if not provided an email", () => {
        const cb = () => new Employee("Damien", 345);
        const err = new Error("Expected parameter 'email' not found");
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Employee(3, 345, "damiensmail@mail.com");
        const err = new Error("Expected parameter 'name' to be a non-empty string");
        expect(cb).toThrowError(err);
      });

    // Would be nice if it check if the email is actually an email
    //   it("should throw an error if 'email' is not a valid email", () => {
    //     const cb = () => new Employee("Damien", 345, "mail");
    //     const err = new Error("Expected parameter 'email' to be a valid email");
  
    //     expect(cb).toThrowError(err);
    //   });
    })
});