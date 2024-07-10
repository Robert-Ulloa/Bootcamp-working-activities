const inquirer = require("inquirer");
const colors = require("colors");

inquirer
  .prompt([
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    },
    {
      type: "text",
      message: "What is your name?",
      name: "Username"
    }
  ])
  .then((response) =>
    console.log(colors[response.color](`Your favorite color is ${response.color}!`))
  );
