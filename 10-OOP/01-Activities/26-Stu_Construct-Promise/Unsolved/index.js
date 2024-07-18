const http = require('http');

// TODO: What does this function return?
//The asyncRequest function returns a Promise. This Promise represents the eventual completion (or failure) of the asynchronous HTTP request.

const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume(); //
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
          // This line rejects the Promise with the error object that was created earlier in the code. 
          // Rejecting a Promise indicates that the asynchronous operation failed.
          reject(error);
        } else {
          // TODO: What does the following line do?
         //Resolving a Promise indicates that the asynchronous operation was successful and the requested data is available in the rawData variable.
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  /* The callback function passed to .then() is called when the Promise resolves successfully. 
  This means the HTTP request completed without errors, and the resolve function was called with the retrieved data.
   The .then() callback receives the resolved data (the rawData string) as an argument. */
  .then((data) => console.log(data))
  // TODO: When is the callback function passed to .catch() called by the promise?
  /* The callback function passed to .catch() is called when the Promise is rejected. 
  This could happen due to network errors, server issues, or errors creating the error object within the HTTP request logic. 
  The .catch() callback receives the rejection reason (the error object) as an argument. */
  .catch((error) => console.log(error));
