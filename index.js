// Required node_modules
const inquirer = require("inquirer");
const fs = require("fs");

// Link to generate-site.js

const generateSite = require("./src/generate-site");

// Imports the team members

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const intern = require("./lib/intern");




// Creates an array for the team members
let teamMems = [];


// add Manager

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Enter Manger's name:"
        },

      
        {
            type: "input",
            name: "managerId",
            message: "Enter Manger's id:"
        },

        
        {
            type: "input",
            name: "managerEmail",
            message: "Enter Manager's email address:"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter Manager's office number:"
        },
    ])

    .then(answers => {
        let managerName, managerId, managerEmail, managerOfficeNumber = answers;
        console.log(answers);
        const manager = new Manager (managerName, managerId, managerEmail, managerOfficeNumber);

        teamMems.push(manager);

        //after manager add more team members 
        addTeamMem();

})

}


// add Intern

function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name:"
        },

      
        {
            type: "input",
            name: "internId",
            message: "Enter the intern's id:"
        },

        
        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "internSchoolName",
            message: "Enter the name of the school your intern is enrolled in:"
        },
    ])

    .then(answers => {
        let internName, internId, internEmail, internSchoolName = answers; 
        console.log(answers);
        const Intern = new intern (internName, internId, internEmail, internSchoolName);

        teamMems.push(Intern);

        //after manager add more team members 
        addTeamMem();

})

}

// add engineer

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the engineer's name:"
        },

      
        {
            type: "input",
            name: "engineerId",
            message: "Enter the engineer's id:"
        },

        
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the engineer's GitHub username:"
        },
    ])

    .then(answers => {
        let engineerName, engineerId, engineerEmail, engineerGithub = answers;
        console.log(answers);
        const engineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub);

        teamMems.push(engineer);

        //after manager add more team members 
        addTeamMem();

    })

}


function addTeamMem() {
    inquirer.prompt({
        type:"list",
        name:"addTeamMem",
        message: "Choose the type of team memeber you would like to add:",
        choices: ["Engineer", "Intern", "I do not want to add any team members right now"]
 })
 
 .then(answers => {
    let { addTeamMem } = answers;
    if (addTeamMem === "Intern") {
        addIntern();
    } else if (addTeamMem === "Engineer") {
        addEngineer();
    } else if (addTeamMem === "I do not want to add any team members right now") {
        initPage();
    }
})
}

function initPage() {
// function to generate HTML page file using file system 
fs.writeFile("./dist/index.html", generateSite(teamMems), err => {
    if (err) {
        return console.error(err);
    } else {
        console.log("Congratulations! Your profile has been created! Check out the HTML file to see what was generated!");
        
    };
});
}



addManager();
