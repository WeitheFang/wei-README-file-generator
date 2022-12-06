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
      `Academic Free License v3.0`,
      `Apache license 2.0	`,
      `Artistic license 2.0	`,
      `Boost Software License 1.0`,
      `BSD 2-clause "Simplified" license`,
      `BSD 3-clause "New" or "Revised" license`,
      `BSD 3-clause Clear license`,
      `Creative Commons license family`,
      `Creative Commons Zero v1.0 Universal`,
      `Creative Commons Attribution 4.0`,
      `Creative Commons Attribution Share Alike 4.0`,
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
