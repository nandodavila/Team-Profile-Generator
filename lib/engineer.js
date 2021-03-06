const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role = "Engineer"
    }
}

module.exports = Engineer