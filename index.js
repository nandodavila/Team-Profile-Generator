const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

const employeeArray = [];

const commonQuestions = [
    {
        type: 'list',
        message: 'What is this employee role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
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

const addQuestion = [
    {
        type: 'list',
        message: 'Do you want to add an Employee?',
        name: 'add',
        choices: ['Yes', 'No']
    },
    
];

function init() {
    inquirer
        .prompt(addQuestion)
        .then((val) => {
            if (val.add === "Yes") {
                askQuestion()
            } else {
                generateHTML(employeeArray)
            }
            console.log(employeeArray)
        })
}

function askQuestion() { 
    inquirer
        .prompt(commonQuestions)
        .then((data) => {
            if (data.role === "Manager") {
                inquirer
                    .prompt(managerQuestion)
                    .then((manData) => {
                        employeeArray.push(new Manager(data.name, data.id, data.email, manData.phone))
                        init();
                        });
            } 
            else if(data.role === "Engineer") {
                inquirer
                    .prompt(engineerQuestion)
                    .then((engData) => {
                        employeeArray.push(new Engineer(data.name, data.id, data.email, engData.github))
                        init();
                        });
                }
            else if(data.role === "Intern") {
                inquirer
                    .prompt(internQuestion)
                    .then((intData) => {
                        employeeArray.push(new Intern(data.name, data.id, data.email, intData.school))
                        init();
                        });
                } 
            
        });
};

init();

module.exports = employeeArray