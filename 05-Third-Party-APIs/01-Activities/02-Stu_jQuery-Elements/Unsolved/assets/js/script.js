// Select the existing DOM element, <div id="root">, and assign to a new variable
const rootEl = $('#root');

// Create a `<p>` element that will store an author's name and assign that created element to a new variable
const authorEl = $('<p>');

// Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorEl.text('~ Carol Dweck');

// Add the class `plain` to the author element
authorEl.addClass('plain');

// Create a new `<h1>` element that will store an author's quote and assign it to a new variable
const quoteEl = $('<h1>');

// Add the following quote text to the quote element
quoteEl.text(
  "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
);

// Apply the class `fancy` to the quote element
quoteEl.addClass('fancy');

// Append the author element to the quote element
quoteEl.append(authorEl); // Corrected this line

// Append the quote element to the HTML element with an ID of `root`
rootEl.append(quoteEl);
