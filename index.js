// necesary node info
const inquirer = require('inquirer');
const fs = require('fs');

// file connections
const employee = require('./lib/employee.js');
const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');

// questions to run with inquirer
const questions = [

    // start with asking for manager info
    {
        name: "managerName",
        type: "input",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "managerid",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
        default: () => {},
        validate: function (managerEmail) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail);

            if (!valid) {
            console.log(".  Please enter a valid email");
            return false;
            } else {
            return true;
            }
        },
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "office",
    },

    //now prompts questions about intern or engineer
    {
      type: "list",
      message: "Is the next employee an intern or engineer?",
      name: "role",
      choices: ["engineer", "intern"],
    },

    // path if engineer is selected
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineerName",
      when: (response) => response.role == "engineer",
    },
    {
      type: "input",
      message: "What is the engineer's id?",
      name: "engineerid",
      when: (response) => response.role == "engineer",
    },
    {
      type: "input",
      message: "What is the employee's email?",
      name: "engineerEmail",
      when: (response) => response.role == "engineer",
      default: () => {},
      validate: function (engineerEmail) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail);
  
        if (!valid) {
          console.log(".  Please enter a valid email");
          return false;
        } else {
          return true;
        }
      },
    },
    {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "github",
        when: (response) => response.role == "engineer",
    },

    // path if intern is selected
    {
        type: "input",
        message: "What is the intern's's name?",
        name: "internName",
        when: (response) => response.role == "intern",
      },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "internid",
        when: (response) => response.role == "intern",
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "internEmail",
        when: (response) => response.role == "intern",
        default: () => {},
        validate: function (internEmail) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail);
    
          if (!valid) {
            console.log(".  Please enter a valid email");
            return false;
          } else {
            return true;
          }
        },
    },
    {
        type: "input",
        message: "What is the school?",
        name: "school",
        when: (response) => response.role == "intern",
    },

    // run questions again as needed
    {
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "addEmployee",
    },
  ];

// Make arrays to hold each type of employee
let internArray = [];
let engineerArray = [];

//function to create the employee based on the answers to the employee type question
function internOrEngineer(response) {
  if (response.role == "intern") {
    const Intern = new intern(
      response.internName,
      response.internid,
      response.internEmail,
      response.school
    );
    //Once the employee is created then push them onto the appropriate employee array
    internArray.push(Intern);
  } else if (response.role == "engineer") {
    const Engineer = new engineer(
      response.engineerName,
      response.engineerid,
      response.engineereEmail,
      response.github,
    );
    engineerArray.push(Engineer);
  }
}

function createManagerCard(response) {
    //Each function makes a constant variable that is an string of each employee's HTML that needs to be appended to the HTML to create each card
    const managerTemplateLits = response
      .map((element) => {
        return `
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">${element.managerName}</h5>
                          <p class="card-text">
                          <i style="font-size:24px" class="fa">&#xf0f4;</i>
                          Manager
                          </p>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                              ID: ${element.managerid}
                          </li>
                          <li class="list-group-item">
                              Email: 
                              <a href="mailto:${element.managerEmail}" target="_blank">${element.managerEmail}</a>
                          </li>
                          <li class="list-group-item">
                          Office Number: ${element.officeNumber}
                          </li>
                      </ul>
                  </div>`;
      })
      .join("");
  
    return managerTemplateLits;
  }
  
  function createEngineerCard(engineerArray) {
    const engineerTemplateLits = engineerArray
      .map((element) => {
        return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.engineerName}</h5>
                        <p class="card-text">
                        <i style="font-size:24px" class="fa">&#xf530;</i>
                        Engineer
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            ID: ${element.engineerid}
                        </li>
                        <li class="list-group-item">
                            Email: 
                            <a href="mailto:${element.engineerEmail}" target="_blank" class="">${element.engineerEmail}</a>
                        </li>
                        <li class="list-group-item">
                        Github: 
                        <a href="${github.com}" target = "_blank">${element.githubUsername}</a>
                    </li>
                    </ul>
                </div>`;
      })
      .join("");
  
    return engineerTemplateLits;
  }
  
  function createInternCard(internArray) {
    const internTemplateLits = internArray
      .map((element) => {
        return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.internName}</h5>
                        <p class="card-text">
                        <i style="font-size:24px" class="fa">&#xf19d;</i>
                        Intern
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            ID: ${element.internid}
                        </li>
                        <li class="list-group-item">
                            Email: 
                            <a href="mailto:${element.internEmail}" target="_blank">${element.internEmail}</a>
                        </li>
                        <li class="list-group-item">
                            School: ${element.school}
                        </li>
                    </ul>
                </div>`;
      })
      .join("");
  
    return internTemplateLits;
  }

//function to write the HTML 
function writeToHtml(response) {
    const htmlFile = `
      <html lang="en-us"> 
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width">
              <title>Team Profile</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
              <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous"
            />
              <link rel="stylesheet" href="./assets/css/style.css">
          </head>
          <body>
              <header class="header">
                  <h1>My Team</h1>
              </header>
              <div class="card-container">
                  ${createManagerCard(response)}
                  ${createEngineerCard(engineerArray)}
                  ${createInternCard(internArray)}
              </div>
          </body>
      </html>`;
  
    //write an HTML file that is called "company name".html and populates in the dist folder using the htmlFile variable
    fs.writeFile(`dist/index.html`, htmlFile, function (err) {
      //if there is an error then console log the error otherwise console log "Success!"
      err ? console.log(err) : console.log("Success!");
    });
  }
  
  // Function to initialize app 
  function init() {
    return inquirer.prompt(questions).then((response) => {
      createNewEmployee(response);
      if (!response.anotherEmployee) {
        writeToHtml(response);
      } else {
        return init();
      }
    });
  }
  
  //initialize the app
  init();