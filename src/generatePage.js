const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateManagerCard(teamBuild) {
    let cardsArr = [];

    for(let i = 0; i < teamBuild.length; i++) {

        const teamArr = teamBuild[i];

        switch(teamArr.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArr.name, teamArr.id, teamArr.email, teamArr.officeNumber);

                cardsArr.push(managerCard(manager));
                break;
        }
    }
    return cardsArr.join(``)
};

function generateEmployeeCards(teamBuild) {
    let cardsArr = [];

    for(let i = 0; i < teamBuild.length; i++) {
        
        const teamArr = teamBuild[i];
        
        switch(teamArr.getRole()) {
            case 'Engineer':
                const engineer = new Engineer(teamArr.name, teamArr.id, teamArr.email, teamArr.github);

                cardsArr.push(engineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArr.name, teamArr.id, teamArr.email, teamArr.school);

                cardsArr.push(internCard(intern));
                break;
        }
    }
    return cardsArr.join(``)
};

function generatePage(teamBuild) {
    console.log(teamBuild);

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href= "style.css" rel="stylesheet">
</head>

<body>
    <header>
        <div class="container-fluid text-center text-white bg-dark">
            <h1 class= "pt-2 pb-2">Team Profile</h1>
        </div>
    </header>
    
    <main>
        <div class="container-fluid manager-card">
            ${generateManagerCard(teamBuild)}
        </div>

        <div class="container-fluid employee-cards d-flex">
            ${generateEmployeeCards(teamBuild)}
        </div>
    </main>
</body>
</html>
    `
};

const managerCard = (Manager) => {
    return `
    <div class="card m-auto" style="width: 25rem;">
                <h4 class="card-title bg-primary text-white text-center p-2 m-0">Manager: ${Manager.getName()}</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">ID Number: </span><span class="list-font">${Manager.getId()}</span></li>
                  <!-- this works on opening in mail app for windows 10 -->
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">Email: </span><a class="list-font" href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">Office Number: </span><span class="list-font">${Manager.getOfficeNumber()}</span></li>
                </ul>
            </div>
            `
};

const engineerCard = (Engineer) => {
    return `
    <div class="card me-2" style="width: 25rem;">
                <h4 class="card-title bg-warning text-white text-center p-2 m-0">Engineer: ${Engineer.getName()}</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">ID Number: </span><span class="list-font">${Engineer.getId()}</span></li>
                  <!-- this works on opening in mail app for windows 10 -->
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">Email: </span><a class="list-font" href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">Github: </span> <a class ="list-font" href= "https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
                </ul>
            </div>
    `
};

const internCard = (Intern) => {
    return `
    <div class="card me-2" style="width: 25rem;">
                <h4 class="card-title bg-success text-white text-center p-2 m-0">Intern: ${Intern.getName()}</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">ID Number: </span><span class="list-font">${Intern.getId()}</span></li>
                  <!-- this works on opening in mail app for windows 10 -->
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">Email: </span><a class="list-font" href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                  <li class="list-group-item bg-secondary text-center"><span class="list-titles">School: </span><span class="list-font">${Intern.getSchool()}</span></li>
                </ul>
            </div>
    `
};

module.exports = generatePage;