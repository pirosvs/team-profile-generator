// Creates our class Employee 
class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        // if (!id.trim().length) {
        //     throw new Error("Expected parameter 'id' not found");
        // }
       
        // if (typeof email !== "string" || !email.trim().length || (this.email.includes("@") && this.email.includes("."))) {
        //     return this.email;
        // } else {
        //     throw new Error("Expected parameter 'email' to be a valid email including characters @ and .");
        // }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
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