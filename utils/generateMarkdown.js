// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Boost Software License 1.0"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    return `"`
  }
  ;

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

    ${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installations 

    ${data.installation}

## Usage 

    ${data.usage}

## Credits

    ${data.credits}

## License 

    ${data.license}

${renderLicenseBadge(data.license)}

## How to Contribute 

    ${data.contribute}

## Test 

    ${data.test}

## Questions 

    ${data.questions} 

## Contact Me
  
    Email: ${data.email}

    GitHub: ${data.github}


`;
}

module.exports = generateMarkdown;
