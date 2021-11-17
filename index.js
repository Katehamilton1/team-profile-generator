const inquire = require('inquire');
const Employee = require('employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');

let teamArray = [];

function managerQuestions() {
    const managerQuestions = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team managers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team managers email?',
            },
            {
                type: 'input',
                name: 'number',
                message: 'What is the team managers office number?',
            },
        ])
        .then(managerInput => {
            const {name, id, email, officeNumber} = managerInput;
            const manager = new Manager (name, id, email, officeNumber);

            teamArray.push(manager);
        })
    };
};





// function addTeamMembers() {

// }

// function addEngineer() {

// }

// function addIntern() {

// }