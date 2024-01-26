// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Add the project title:",
        name: "title",
    },
    {
        type: "input",
        message: "Add the project description:",
        name: "description",
    },
    {
        type: "input",
        message: "Add the Table of Contents (if applicable):",
        name: "table",
    },
    {
        type: "input",
        message: "What are the steps needed install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "Instructions and examples of use:",
        name: "usage",
    },
    {
        type: "input",
        message: "Add any collaborators with the links to their GitHub profiles or any tutorials you used:",
        name: "credits",
    },
    {
        type: "input",
        message: "Which license did you use?",
        name: "license",
    },
];

// TODO: Create a function to write README file
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function askQuestions() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            const genMarkdown = generateMarkdown(answers);
            writeToFile('readMe.md', genMarkdown);
            console.log(genMarkdown);

            const badge = renderLicenseBadge(license);
            const licenseLink = renderLicenseLink(license);
        });
}
// TODO: Create a function to initialize app
function init() {
    console.log('Automatic README generator!')
    askQuestions()
}

// Function call to initialize app
init();