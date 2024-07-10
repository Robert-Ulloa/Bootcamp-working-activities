const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

// Prompt user for name, languages, and preferred method of communication
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'.brightMagenta,
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?'.brightMagenta,
      choices: ['JavaScript', 'Python', 'Java', 'C#', 'C++'],
    },
    {
      type: 'list',
      name: 'communication',
      message: 'What is your preferred method of communication?'.brightMagenta,
      choices: ['Email', 'Phone', 'In-person', 'Text', 'Video call'],
    },
  ])
  .then((answers) => {
    // Create a user file with the provided information
    const fileName = `${answers.name.toLowerCase().split(' ').join('_')}.json`;
    const data = JSON.stringify(answers, null, 2);

    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('User information saved to', fileName);
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error('Prompt couldn\'t be rendered in the current environment');
    } else {
      // Something else went wrong
      console.error('Something went wrong:', error);
    }
  });
