const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: '2256',
    host: 'localhost',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
)

pool.connect();

// Query to count the number of books in stock, grouping by the 'in_stock' field
// Total count of books bases on what is in-stock (or not)
pool.query(
  'SELECT in_stock, COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', 
  function (err, {rows}) {
  console.log(rows);
});

// Query to perform aggregate functions on the 'quantity' field, grouping by 'section'
// GEt the total # of books, max quantity of any one book, min quantity of any one book
pool.query('SELECT section,  SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', 
  function (err, {rows}) {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
