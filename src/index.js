const inquirer = require("inquirer");
const fs = require('fs');

const choices = fs.readdirSync(`${__dirname}/configs`)

const getFilteredchoices = (arr) => {
  return arr = arr.filter(dir => dir !== '.DS_Store')
}

const questions = [
  {
    name: 'choose-template',
    type: 'list',
    message: 'Which template would you like to generate?',
    choices: getFilteredchoices(choices)
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Enter a name for your project',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

inquirer.prompt(questions)
  .then(answers => {
    console.log(answers);
  });