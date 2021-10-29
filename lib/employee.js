const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        inquirer
            .prompt(
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },  
            )
            .then((data) => {
                this.name = data;
            })
    }

    getId() {
        inquirer
            .prompt(
                {
                    type: 'input',
                    message: 'What is your employeeID?',
                    name: 'id',
                },  
            )
            .then((data) => {
                this.id = data;
            })
    }

    getEmail(){
        inquirer
            .prompt(
                {
                    type: 'input',
                    message: 'what is your email',
                    name: 'email',
                },
            )
            .then((data) => {
                this.email = data;
            })
    }

    getRole(){
        inquirer
            .prompt(
                {
                    type: 'input',
                    message: 'what is your role',
                    name: 'role',
                    choices: ['Manager', 'Engineer', 'Intern']
                },
            )
            .then((data) => {
                if(data.length > 1){
                    console.log('To many roles chosen, please try again.')
                } else if (data === 'Manager'){
                    //manager file 
                } else if (data === 'Engineer') {
                    // Engineer file
                } else {
                    // intern file 
                }                
            }
            )
    }

}   

module.exports = Employee;