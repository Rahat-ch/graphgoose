#!/usr/bin/env node
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
    validate: (input) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

const currentDirectory = process.cwd();

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      const writePath = `${currentDirectory}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currentDirectory}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }

  });
}

inquirer.prompt(questions)
  .then(answers => {
    const template = answers['choose-template'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/configs/${template}`;

    fs.mkdirSync(`${currentDirectory}/${projectName}`);
    createDirectoryContents(templatePath, projectName);
    console.log(`A new folder was created! You can run:
    cd ${projectName}
    and then
    npm install
    Then open in your favorite code editor to get started!
    Don't forget to enter a MongoDB URI into your .env file!
    `)
  });