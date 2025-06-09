// TODO: Include packages needed for this application
import {generateMarkdown} from './utils/generateMarkdown.js';
import inquirer from 'inquirer';
import fs from 'fs';
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type : 'input',
    name: 'description',
    message: 'Please describe your project:',
  },
  {
    type: 'input',
    name: "dependencies",
    message: 'What dependencies does your project have?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
