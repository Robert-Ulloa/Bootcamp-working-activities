const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: { type: Number, required: true}
}); 

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments

const library = new Library({
  name: 'City Library',
  books: [
    { title: 'Book One', price: 20 },
    { title: 'Book Two', price: 15 },
    { title: 'Book Three', price: 25 }
  ]
});
library.save();

module.exports = Library;
