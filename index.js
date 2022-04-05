// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")

// This is connecting to js page that generates markdown file
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
//* Title ====
//* Description =====
//* Table of Contents - Send you to corresponding section ====
//* Installation ===
//* Usage =====
//* License - list ======
//* Contributing =====
//* Tests
//*questions - link to github, and how to reach me email address=====

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
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use of application.",
      name: "usage",
    },
    {
      type: "list",
      message: "Please select a license type to include.",
      choices: ["MIT License", "Other"],
      name: "license",
    },
    {
      type: "input",
      message: "If you want others to contribute, please explain how they could do so.",
      name: "contributing",
    },
    {
      type: "input",
      message: "List any tests you have done on your application?",
      name: "test",
    },
    {
      type: "input",
      message: "How would you like others to contact you with questions?",
      name: "questions",
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



  


