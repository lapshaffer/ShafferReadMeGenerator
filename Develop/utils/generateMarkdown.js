// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GPL':
      response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'MIT':
      response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
  } return response
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title} \n 
${renderLicenseBadge(data.license)} \n \n
## Description \n
${data.description} \n \n
## Table of Contents \n
- [Installation](#installation) \n
- [Usage](#usage) \n
- [Contribution](#contribution) \n
- [Testing](#testing) \n
- [License](#license) \n
- [Questions](#questions) \n \n
## Installation \n
${data.installation} \n \n
## Usage \n
${data.usage} \n \n
## Contribution \n
${data.contribution} \n \n
## Testing \n
${data.testing} \n \n
## License \n
This application is covered under the ${data.license} license. \n \n
## Questions \n
If you have any questions concerning this application, please reach out to me by email at ${data.email} \n
Github: https://github.com/${data.username} \n` 
}

module.exports = generateMarkdown;