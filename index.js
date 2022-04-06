// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input


const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.?",
    name: "description",
  },
  // {
  //   type: "checkbox",
  //   message: "Select which contents you would like in your Table of Contents",
  //   choices: [
  //     "[Installation](#Installation)",
  //     "[Usage](#usage)",
  //     "[Credits](#Credits)",
  //     "[License](#License)",
  //   ],
  //   name: "tableOfContents",
  // },
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
    type: "input",
    message: "Please give credit to any resources you have used?",
    name: "credits",
  },
  {
    type: "list",
    message: "Please select a license type to include.",
    choices: [
      "MIT License",
      "Apache 2.0 License",
      "Boost Software License 1.0",
    ],
    name: "license",
  },
  {
    type: "input",
    message:
      "If you want others to contribute, please explain how they could do so.",
    name: "contribute",
  },
  {
    type: "input",
    message: "List any tests you have done on your application?",
    name: "test",
  },
  {
    type: "input",
    message:
      "How would you like others to contact you with questions? Email, GitHub, etc...",
    name: "questions",
  },
  {
    type: "input",
    message: "Please enter your email.",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your github.",
    name: "github",
  },
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    fs.writeFile("README.md", generateMarkdown(answers), (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Success!");
      }
    });
  });
}


init();
