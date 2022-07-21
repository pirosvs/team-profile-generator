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
        } else {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
    }

    getId() {
        return this.id;
    }

    getEmail() {
        if (this.email.includes("@") && this.email.includes(".")) {
            return this.email;
        } else {
            throw new Error("Expected parameter 'email' to be a valid email including characters @ and .");
        }
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;