// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")

// This is connecting to js page that generates markdown file
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project.?",
      name: "Description",
    },
    {
      type: "checkbox",
      message: "Select which contents you would like in your Table of Contents",
      choices: ["[Installation]", "[Usage]", "[Credits]", "[License]"],
      name: "tableOfcontents",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "languages",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "communication",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "languages",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "communication",
    },
  ]);
  
}

// TODO: Create a function to write README file
const writeToFile = data => {
  fs.writeFile("README.md", data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Success!");
    }
  })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(questions())



  


