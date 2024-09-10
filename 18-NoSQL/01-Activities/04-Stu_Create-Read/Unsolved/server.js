// Import the express module to create a server
const express = require('express');
// Import MongoClient to connect and interact with MongoDB
const { MongoClient } = require('mongodb');

// Initialize an Express application
const app = express();
// Define the port number on which the server will listen
const port = 3001;

// MongoDB connection string to connect to the local MongoDB server
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Create a new MongoClient instance with the connection string
const client = new MongoClient(connectionStringURI);

// Variable to hold the database connection
let db;

// Name of the database
const dbName = 'inventoryDB';

// Connect to MongoDB, set up the database connection and start the Express server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Access the database by name
    db = client.db(dbName);

    // Start listening on the specified port for HTTP requests
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    // Log any errors that occur during connection
    console.error('Mongo connection error: ', err.message);
  });

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Route to handle POST requests to add a single book
app.post('/books', (req, res) => {
  // Insert one new book document into the bookCollection
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

// Route to insert multiple books into the database
app.post('/books/seed', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

// Route to fetch all books from the database
app.get('/books', (req, res) => {
  // Find all documents in the bookCollection and convert them to an array
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});