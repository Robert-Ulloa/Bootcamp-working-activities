const express = require('express');
const db = require('./config/connection');
// TODO: Add a comment describing the functionality of the code below
  // import the book model
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of the code below
    //Use Mongoose  to retrieve all documents in the book collection
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
