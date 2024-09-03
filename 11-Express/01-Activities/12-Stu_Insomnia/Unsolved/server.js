const express = require('express');
// Require the json file located in `/db`
const data = require('./db/repos.json'); // Adjust the path if your JSON file has a different name or location

// Create an `app` variable set to the value of `express()`
const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => {
  res.json(data);
});

// Have the app listen on port 3001
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
