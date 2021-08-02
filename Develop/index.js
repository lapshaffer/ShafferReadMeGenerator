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
    .then((response) => {
        // console.log(response);
        generateMarkdown(response);
        // TODO: Create a function to write README file
        // Figure out how to include license badge in Description, link and outline to put in License section
        const inputs = 
`# ${response.title} \n 
## Description \n
${response.description} \n \n
## Table of Contents \n
- [Installation](#installation) \n
- [Usage](#usage) \n
- [Contribution](#contribution) \n
- [Testing](#testing) \n
- [License](#license) \n
- [Questions](#questions) \n \n
## Installation \n
${response.installation} \n \n
## Usage \n
${response.usage} \n \n
## Contribution \n
${response.contribution} \n \n
## Testing \n
${response.testing} \n \n
## License \n
${response.license} \n \n
## Questions \n
If you have any questions concerning this application, please reach out to me by email at ${response.email} \n
Github: https://github.com/${response.username} \n` 
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