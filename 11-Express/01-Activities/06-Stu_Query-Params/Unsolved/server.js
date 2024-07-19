const express = require('express');
// Helper function to sort our data in ascending and descending order
// Object distructure
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
// This route returns a list of terms. If a query parameter is present, it sorts the terms.

app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
  // The req.query object contains key-value pairs of query parameters in the URL.
  // It is used to determine if sorting is required based on the presence of a 'sort' query.

  const hasQuery = Object.keys(req.query).length > 0;

//   &&: if this is false

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  //returns the rems that match the request category
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
//

app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
    // The req.params object contains route parameters, which are named segments
  // of the URL, specified in the path as ':term'.

  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
// This route returns a specific term based on the 'term' parameter in the URL.
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
// This route returns all terms that belong to a specific category provided in the URL.

app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
