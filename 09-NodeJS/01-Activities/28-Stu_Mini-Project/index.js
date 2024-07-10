const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for portfolio information
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?',
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Write a short bio:',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn URL?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub URL?',
  },
]).then((answers) => {
  const htmlContent = generateHTML(answers);

  fs.writeFile('portfolio.html', htmlContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Portfolio page created successfully!');
    }
  });
}).catch((error) => {
  console.error('Something went wrong:', error);
});  

function generateHTML({name, location, bio, linkedin, github}) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
      border-radius: 8px;
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
    }
    a {
      color: #007BFF;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${name}</h1>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Bio:</strong> ${bio}</p>
    <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
  </div>
</body>
</html>
    `;
}