const colors = require('colors');

// Capture command line arguments
const name = process.argv[2];
const profit = parseInt(process.argv[3]);

// Check if profit is greater than 0
if (profit > 0) {
  console.log(`My name is ${name.bgYellow} and I made ${profit.toString().bgGreen} dollars this quarter.`);
} else {
  console.log(`My name is ${name.bgYellow} and I made ${profit.toString().bgRed} dollars this quarter.`);
}

