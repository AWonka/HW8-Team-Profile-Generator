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
        },
        {
            type: 'input',
            message: "Please enter the Manager's ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter the Manager's email.",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter the Manager's office number.",
            name: 'officeNumber',
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
