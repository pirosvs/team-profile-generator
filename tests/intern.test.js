const Employee = require('../lib/employee.js');
const Intern = require('../lib/intern.js');

describe("Intern", () => {
    // Test for our new case school when initializing a new Intern object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and school if provided valid arguments", () => {
        const intern = new Intern("Damien", 345, "damiensmail@mail.com", "Mills College");
  
        // Verify that the new object has the correct properties
        expect(intern.name).toEqual("Damien");
        expect(intern.id).toEqual(345);
        expect(intern.email).toEqual("damiensmail@mail.com");
        expect(intern.school).toEqual("Mills College");
      });

//       // Not required below
//       it("should throw an error if not provided a school", () => {
//         const cb = () => new Intern("Damien", 345, "damiensmail@mail.com");
//         const err = new Error("Expected parameter 'school' to be a non-empty string`");
//         expect(cb).toThrowError(err);
//       });

      it("should throw an error if 'school' is not a string", () => {
        const cb = () => new Intern("Damien", 345, "damiensmail@mail.com", 45);
        const err = new Error("Expected parameter 'school' to be a non-empty string");
        expect(cb).toThrowError(err);
      });
    })
})

describe("getSchool", () => {
  // test methods
  it("should return the school provided when getSchool is called", () => {
    expect(new Intern("Damien", 345, "damiensmail@mail.com", "Mills College").getSchool()).toBe("Mills College");
  });
})