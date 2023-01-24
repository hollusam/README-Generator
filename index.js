const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "How can your application be installed?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you want your application used?",
    },
    {
        type: "input",
        name: "screenshot",
        message: "please enter the relative path for your app screenshot."
    },
    {
        type: "confirm",
        name: "licenseConfirm",
        message: "Would you like to include a license?",
        default: false
    },
    {
        type: "list",
        name: "license",
        message: "What license is used for your application?",
        choices: ["MIT", "Apache_2.0", "IBM", "ISC", "MPL_2.0"],
        when: ({ licenseConfirm }) => {
            if (licenseConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "How do you want developers to contribute?",
    },
    {
        type: "input",
        name: "tests",
        message: "How can developers update the tests for your projects?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your contact email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log('README successfully created!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            return writeToFile("README.md", generateMarkdown(data))
        });
        
}

// function call to initialize program
init();
