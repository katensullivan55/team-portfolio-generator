// class page where it grabs employee data and office if the role is manager

const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id , email,office)
        this.officeNumber = this.office;
    }
    getOfficeNumber () {
        return this.officeNumber;

    }
    getRole () {
        return Manager;
    }
}

module.exports = Manager;