// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `Apache license 2.0`) {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === `BSD 3-Clause License`) {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === `BSD 2-Clause License`) {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license === `GPL v2`) {
    return `[[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === `GPL v3`) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === `MIT`) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === `None`) {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ---
  ##Table of Content
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [How to Contribute](#how-to-contribute)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Contact information](#contact-information)


  ---
  ## Description
  ${data.description}

  ---
  ## Installation
  ${data.installation}

  ---
  ## Usage
  ${data.usage}

  ---
  ## How to Contribute
  ${data.contribute}

  ---
  ## Tests
  ${data.test}

  ---
  ## License
  License used for this project - ${renderLicenseBadge(data.license)}

  ---
  ## Contact information
  If you have any question about this project, please don't hesitate to contact me via:
  GitHub: ${data.username}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
