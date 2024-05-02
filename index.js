const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Write installation instructions.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the guildlines for contributers',
        name: 'guildlines',
    },
    {
        type: 'input',
        message: 'What are the test instructions',
        name: 'test',
    },
  ])
  .then((response) =>
    fs.writeFile('testREADME.md',
`
# ${response.title}

${response.description}

## installation instructions

${response.install}

## usage information

${response.usage}

## contribution guidelines

${response.guildlines}

## test instructions

${response.test}
`,
     (err) =>
    err ? console.error(err) : console.log('You made a README.md file')
));
//I have to make a ${call to a function with the paramiters with (response.license)} ie functionName(response.license)