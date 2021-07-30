// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
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
        }
    ])
    .then((response) => {
        console.log(response);
        // TODO: Create a function to write README file
        const inputs = `This is where the ReadMe markdown will go, once I write it`
        fs.writeFile('README.md', inputs, (error, data) =>
        error ? console.error(error) : console.log(data)
      );
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {},

// TODO: Create a function to initialize app
// function init() {},

// Function call to initialize app
// init();