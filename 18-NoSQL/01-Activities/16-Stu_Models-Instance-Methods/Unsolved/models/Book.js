const mongoose = require('mongoose');

// Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true }
});

// Create a custom instance method named `getDiscount`
// This method reduces the price by 50% and logs the book title and discounted price
bookSchema.methods.getDiscount = function () {
  const discountedPrice = this.price * 0.5;
  console.log(`The book "${this.title}" is now available for $${discountedPrice}`);
};

// Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// Create a new instance of the model
const discountedBook = new Book({
  title: 'Moby Dick',
  author: 'Herman Melville',
  price: 20
});

// Call the custom instance method on the instance
discountedBook.getDiscount();

// Export the Book model
module.exports = Book;