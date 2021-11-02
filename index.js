const fs = require('fs')
const inquirer = require('inquirer')
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

const employeeCards = []

function generateCards(arr) {
    arr.forEach(element => {
        switch (element.role) {
            case "Manager":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.id}</li>
                <li class="list-group-item"><a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">${element.phone}</li>
                </ul>
            </div>`)
                break;

            case "Engineer":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.id}</li>
                <li class="list-group-item"><a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item"><a href="https://github.com/${element.github}">${element.github}</a></li>
                </ul>
                </div>`)
                break;
                
            case "Intern":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${element.id}</li>
                    <li class="list-group-item"><a href = "mailto: ${element.email}">${element.email}</a></li>
                    <li class="list-group-item">${element.school}</li>
                    </ul>
                    </div>`)
                break;
        
        }
        
    });

}

function generateHTML(arr) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Enter your description here" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    
      <title>Project Team!</title>
    </head>
    
    <body>
        
        <header class="container-fluid bg-dark text-light mb-5 p-3">
            <div class="d-flex align-items-center">
            <h1>Project Team</h1>
            </div>
            </header>
            <section class="container">
                <div class="row">
                ${arr.join('\r\n')}
                </div>
            </section>
    
    </body>`


}

function init() {
    inquirer
        .prompt(addQuestion)
        .then((val) => {
            if (val.add === "Yes") {
                askQuestion()
            } else {
                generateCards(employeeArray)
                fs.writeFile('index.html', generateHTML(employeeCards), (error) =>
                error ? console.error(error) : console.log('sucsess!'))
            }
            
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