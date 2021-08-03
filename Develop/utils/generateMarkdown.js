// Selecting license badge url based on user input
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
// Generating markdown for ReadMe based on user input
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
// Allowing link between index and generateMarkdown files
module.exports = generateMarkdown;