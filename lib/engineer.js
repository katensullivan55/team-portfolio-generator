// class page where it grabs employee data and github if the role is engineer

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    
    }
}

module.exports = Engineer; 