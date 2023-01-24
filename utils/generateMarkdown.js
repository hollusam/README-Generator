// function to select license batch
function licenseBadge(data) {
  const license = data.license[0];
  let licenseUrl = ""
  if (license) {
    licenseUrl = `![Github license](https://img.shields.io/badge/license-${data.license}-green.svg)`;
  }
  return licenseUrl
};



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![Github license](https://img.shields.io/badge/license-${data.license}-green.svg)

## Description
${data.description}

## Table of Contents

* [Installation](#install)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Install
${data.install}

## Usage
${data.usage}

## Screenshot
![Screenshot](${data.screenshot})

## License
${licenseBadge(data)}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
Feel free to contact at ${data.email} to ask any questions about this project. To view other projects by me; please visit https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
