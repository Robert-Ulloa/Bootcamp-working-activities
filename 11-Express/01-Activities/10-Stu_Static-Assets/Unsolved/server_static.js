const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

// Use express.static middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '/public/')));

// Set up other routes as needed
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
