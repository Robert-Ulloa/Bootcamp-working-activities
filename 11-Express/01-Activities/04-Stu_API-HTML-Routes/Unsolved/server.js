// Import express
const express = require('express');

// Import 'terms.json' file
const terms = require('./terms.json');

// Initialize app variable
const app = express();
const PORT = 3001;

// Create a route for a GET request that will return the content of our `terms.json` file
app.get('/terms', (req, res) => {
  res.json(terms);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}/terms`);
});