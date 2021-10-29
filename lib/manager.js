const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./employee')

class Manager extends Employee{
    constructor(phone) {
        this.phone = phone
    }
}