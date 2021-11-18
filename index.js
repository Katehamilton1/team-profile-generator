const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

let teamArray = [];


  function  managerQuestions() {
        return inquirer.prompt([
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
            .then(function (dataManager) {

                const manager = new Manager(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNumber);
                teamArray.push(manager);

            });
    };

    function addEngineer() {
       return inquirer.prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: "name"
            },
            {
                type: 'input',
                message: "What is the engineer's email address?",
                name: "email"
            },
            {
                type: 'input',
                message: "What is the engineer's Github profile?",
                name: "github"
            }
        ])
            .then(function (data) {
                const name = data.name;
                const email = data.email;
                const github = data.github
                const teamMember = new Intern(name, email, github)
                teamArray.push(teamMember);
            });
        };

        function addIntern() {
            return inquirer.prompt([
                {
                    type: 'input',
                    message: "What is this intern's name?",
                    name: "name"
                },
                {
                    type: 'input',
                    message: "What is this intern's email address?",
                    name: "email"
                },
                {
                    type: 'input',
                    message: "What is this intern's school?",
                    name: "school"
                }
            ])
                .then(function (data) {
            console.log(data);
                })
            }

            managerQuestions()
           .then(addIntern)
           .then(addEngineer)


