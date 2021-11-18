const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

let teamArray = [];

function startQuestions() {
  function  managerQuestions() {
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
            .then(function (dataManager) {

                const manager = new Manager(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNumber);
                teamArray.push(manager);

            });
    };



    // function addTeamMembers() {
    //     inquirer.prompt([

    //         {
    //             type: 'list',
    //             name: 'add memberData',
    //             message: 'Would you like to add more team members?',
    //             choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],

    //         }
    //     ])
    //         .then(function (data) {
    //             const name = name.data
    //             const id = id.data
    //             const email = email.data;
    //             const office = office.data;
    //             const teamMember = new Manager(name, id, email, officeNumber)
    //             teamArray.push(teamMember);

    //         })
    // }

    function addEngineer() {
        inquirer.prompt([
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
            inquirer.prompt([
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
            addIntern()
};

startQuestions()