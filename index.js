const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamBuild = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the Manager's name.",
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please Enter a name for the Manager!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter the Manager's ID.",
            name: 'id',
            validate: id => {
                if (isNaN(id)) {
                    console.log("Please enter an ID Number for the Manager!")
                    return false;
                } else if (!id) {
                    console.log("Please enter an ID Number for the Manager!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter the Manager's email.",
            name: 'email',
            validate: email => {
                // tests email input for valid email
                validInput = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (validInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid Email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter the Manager's office number.",
            name: 'officeNumber',
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log('Please enter an Office Number for the Manager!')
                    return false;
                } else if (!officeNumber) {
                    console.log('Please enter an Office Number for the Manager!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'list',
            message: 'Please add an Engineer, Intern or finish building your team.',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
            name: 'role',
        },
    ])
    
    .then((managerInfo) => {
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        teamBuild.push(manager);

        switch(managerInfo.role) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                // write filename and data to pass off to file
                generateFile();    
        }
    });
};

promptUser();

function generateFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if(err) throw err;
        console.log('File Successfully Generated');
    });
};
