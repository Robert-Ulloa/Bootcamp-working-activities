const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'numbersDB';

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    await db.collection('numberList').deleteMany({});
    await db.collection('numberList').insertMany(data);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Mongo connection error: ', err.message);
  }
}
seedDBAndStartServer();

app.use(express.json());

// TODO: Update route to use cursor methods
app.get('/numbers', (req, res) => {
  db.collection('numberList')
    .find()
    //sort doc by the 'number' field in descending order
    .sort({ number: -1 })
    //skip the first 5 docs
    .skip(5)
    //limit the results to 5 docs
    .limit(5)
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});
