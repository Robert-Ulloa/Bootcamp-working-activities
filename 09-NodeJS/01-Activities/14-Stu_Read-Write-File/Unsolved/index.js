// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Complete the `writeToLog` function such that it will take in data and use it to write to a file called `log.txt`.
const writeToLog = (data) => {
    fs.writeFile('log.txt', data + '\n', (err) => {
        if (err) throw err;
        console.log('The message was appended to log.txt!');
    });
}

// the `addFunc` function will add two values that are passed in
const addFunc = (x, y) => {
    let message;

    // This conditional validates whether the correct amount of inputs have been provided
    if (y === undefined) {
        // Set the `message` variable to a string that explains that an incorrect number of arguments have been passed in.
        message = 'Incorrect number of arguments. Please provide two numbers.';
        // Call the `writeToLog` function and pass in the `message` as an argument.
        writeToLog(message);
    } else {
        let num1 = parseInt(x);
        let num2 = parseInt(y);
        // Set the `message` variable to the `num1` and `num2`
        message = `The numbers are: ${num1} and ${num2}`;
        // Call the `writeToLog` function and pass in the `message` as an argument.
        writeToLog(message);
        // Optionally, you can also perform the addition and log the result.
        let result = num1 + num2;
        writeToLog(`The result is: ${result}`);
    }
}

// call the `addFunc` passing in a number and a string.
addFunc(process.argv[2], process.argv[3]);