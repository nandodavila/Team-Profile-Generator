const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./employee')


class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email, "Manager");
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }
}

module.exports = Manager