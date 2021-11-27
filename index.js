
// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');

const path = require('path');

const output_dir = path.resolve(__dirname, 'dist')
const output_path = path.join(output_dir, 'index.html')
const render = require('./src/template.js')

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
            teamPrompt ()

        });
};

function teamPrompt () {
    inquirer.prompt([
        {
            type:'list',
            message:"Which team member would you like to add?",
            name: 'userChoice',
            choices:[
                'Engineer',
                'Intern',
                'done'
            ]
        }
    ])
    .then(userData =>{
        switch(userData.userChoice) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                renderPage();
        }
    })
}

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
            const teamMember = new Engineer(name, email, github)
            teamArray.push(teamMember);
            teamPrompt ()
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
    ])
    
        .then(employeeData => {


            //data for employees
            let employee = new Intern(employeeData.name,employeeData.email, employeeData.school);
            teamArray.push(employee);


            teamPrompt ()
        })
        
};
   
const renderPage = () => {
 if (!fs.existsSync(output_dir)){
     fs.mkdirSync(output_dir);
 }
  
fs.writeFileSync(output_path,render(teamArray), "utf-8")
console.log("write to file")

}




managerQuestions()
  



