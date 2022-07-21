// Creates our class Employee 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // if (this.name typeof === "string") {
        return this.name;
        // } else {
        //     // return err
        // }
    }

    getId() {
        return this.id;
    }

    getEmail() {
        // if (this.email !includes "@" && this.email !includes ".") {
            // throw error
        // } else {
        return this.email;
        // }
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;