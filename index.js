const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

const employeeArray = [];

const commonQuestions = [
    {
        type: 'checkbox',
        message: 'What is this employee role?',
        name: 'role'
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

const managerQuestion = [
    {
        type: 'input',
        message: 'What is your phone number',
        name: 'phone'
    },
    
];

const engineerQuestion = [
    {
        type: 'input',
        message: 'What is your github?',
        name: 'github'
    },
    
];

const internQuestion = [
    {
        type: 'input',
        message: 'Where do you go to school?',
        name: 'school'
    },
    
];


