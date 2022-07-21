// Creates our class Employee 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (typeof this.name === "string") {
        return this.name;
        // } else {
        //     // return err
        }
    }

    getId() {
        return this.id;
    }

    getEmail() {
        if (this.email.includes("@") && this.email.includes(".")) {
            return this.email;
        // } else {
        // throw err
        }
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;