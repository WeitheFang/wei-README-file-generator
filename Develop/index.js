// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
  //title
  {
    type: "input",
    message: "Please provide a title for this project (Required)",
    name: "title",
  },
  //description
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project. (Required)",
    name: "description",
  },
  //installation instruction
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)",
    name: "installation",
  },
  //usage information
  {
    type: "input",
    message:
      "Please provide the usage information for this project. (Required)",
    name: "usage",
  },
  //contribution guidelines
  {
    type: "input",
    message: "How should people contribute with this project. (Required)",
    name: "contribute",
  },
  //test instructions
  {
    type: "input",
    message:
      "Please provide the test instructions for this project. (Required)",
    name: "test",
  },
  //license
  {
    type: "list",
    message: "Please select a desired license from the list. (Required)",
    choices: [
      `Apache license 2.0`,
      `BSD 3-Clause License`,
      `BSD 2-Clause License`,
      `GPL v2`,
      `GPL v3`,
      `MIT`,
      `None`,
    ],
    name: "license",
  },
  //Github
  {
    type: "input",
    message: "Please enter your Github user name. (Required)",
    name: "username",
  },
  //email
  {
    type: "input",
    message: "Please enter your email address. (Required)",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userInput) => writeToFile(`README.md`, generateMarkdown(userInput)));
}

// Function call to initialize app
init();
