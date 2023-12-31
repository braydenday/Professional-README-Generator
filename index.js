// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptInput(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        },
        {
            type: "input",
            name: "title",
            message: "What is the title for your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description about your project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process : ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is your project's usage ?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose your license for this project: ",
            choices: [
                "Apache",
                "GPL",
                "BSD",
                "MIT",
                "None"
            ]
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do you do if there's any questions? "
        },
        
    ]);
} 

// TODO: Create a function to write README file from prompted answers
async function init() {
    try {
        const answers = await promptInput();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync('./newREADME/README.md', generateContent);
        console.log('Successful');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();




// Acceptance Criteria;
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README