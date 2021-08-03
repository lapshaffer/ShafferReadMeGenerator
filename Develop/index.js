// Bringing data into file
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// Inquirer prompt with questions
inquirer
    .prompt([
        {
           type: 'input',
           message: 'What is the title of your project?',
           name: 'title' 
        },
        {
            type: 'input',
            message: 'Please provide a description of your project',
            name: 'description'
        },
        {
            type: 'prompt',
            message: 'Please list the installation instructions for your project',
            name: 'installation'
        },
        {
           type: 'prompt',
           message: 'Please enter the usage information for your project',
           name: 'usage' 
        },
        {
            type: 'prompt',
            message: 'Please list the contribution guidelines for your project',
            name: 'contribution'
        },
        {
            type: 'prompt',
            message: 'Please list the test instructions for your project',
            name: 'testing'
        },
        {
            type: 'list',
            message: 'Which license are you using for your project?',
            choices: ['MIT', 'Apache', 'GPL'],
            name: 'license'
        },
        {
            type: 'prompt',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'prompt',
            message: 'Which email address can be used to reach you?',
            name: 'email'
        }
    ])
    // Using the generateMarkdown file to write ReadMe
    .then((response) => {
        fs.writeFile('README.md', generateMarkdown(response), (error, data) =>
        error ? console.error(error) : console.log(data))
    })

