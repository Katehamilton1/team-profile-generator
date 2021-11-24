// link to page creation
const generateTemplate = require('./src/template.js');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');

// team array
let teamArray = [];

// start of manager prompts 
function managerQuestions() {
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
        },
        // {
        //     type: 'input',
        //     mesage: 'Would you like to add more team members?',
        //     name: 'confirmAddEmployee',
        //     default: false
        // }
    ])
        .then(employeeData => {
            //data for employees

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school)
            }
            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};
   
// function to generate HTML page file using file system
  const writeFile = data => {
    const newFile = teamArray

    fs.writeFile('/template.js', newFile, 'utf-8', err => {
      if (err) {
        console.error(err)
        return
      }else {
        console.log("Your team profile has been successfully created! Please check out the index.html")
    }
    })

  };
    


managerQuestions()
    .then(addIntern)
    .then(addEngineer)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    



