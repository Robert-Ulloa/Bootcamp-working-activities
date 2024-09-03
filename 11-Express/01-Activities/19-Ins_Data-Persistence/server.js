const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Utility function to read reviews from the JSON file
const readReviews = () => {
  try {
    const data = fs.readFileSync('./db/reviews.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading reviews:', error);
    return [];
  }
};

// Utility function to write reviews to the JSON file
const writeReviews = (reviews) => {
  try {
    fs.writeFileSync('./db/reviews.json', JSON.stringify(reviews, null, 2));
  } catch (error) {
    console.error('Error writing reviews:', error);
  }
};

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  const reviews = readReviews();
  res.json(reviews);
  console.info(`${req.method} request received to get reviews`);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  const { product, review, username } = req.body;

  if (product && review && username) {
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    // Read existing reviews, append the new one, and write back to the file
    const reviews = readReviews();
    reviews.push(newReview);
    writeReviews(reviews);

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
