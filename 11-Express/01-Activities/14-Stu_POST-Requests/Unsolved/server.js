const express = require('express');

const PORT = 3001;

const app = express();

const processRequest = (req, res) => {
  const message =`${req.method} recived for ${req.route.path}.`;
  res.json(message);
  console.info(message);
}

app.use(express.json());

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', processRequest);

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
app.post('/api/reviers', processRequest);

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', processRequest);

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/upvotes', processRequest);

app.listen(PORT, () =>
  console.log(`Express server listening on port http://localhost:${PORT}`)
);
