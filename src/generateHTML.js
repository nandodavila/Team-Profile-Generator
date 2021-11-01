const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const employeeArray = require('../index')
const employeeCards = []

function generateCards(arr) {
    arr.forEach(element => {
        switch (element.getrole()) {
            case "Manager":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.id}</li>
                <li class="list-group-item">${element.email}</li>
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
                <li class="list-group-item">${element.email}</li>
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
                    <li class="list-group-item">${element.email}</li>
                    <li class="list-group-item">${element.phone}</li>
                    </ul>
                    </div>`)
                break;
        
        }
        
    });

}

function generateHTML(arr) {


}

module.exports = generateHTML()