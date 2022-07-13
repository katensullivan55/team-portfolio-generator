// class page where it grabs employee data and office if the role is manager

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;