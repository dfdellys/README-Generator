// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Enter the installation instructions',
    },
    {
        type: 'input',
        name: 'appUsage',
        message: 'Enter the usage information',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter instructions for test',
    },
    {
        type: 'list',
        message: 'Choose a license type for the project',
        name: 'licenseType'
        choices: ['MIT', 'Apache','MPL 2.0', 'none'],
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is your GitHub username',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
        validate: function (email) {
            const isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            return isValid ? true : "A valid email address is required";
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
