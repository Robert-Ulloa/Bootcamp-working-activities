// TODO: Import `basicmath.js`
const basicMath = require("./basicmath");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const [operation, numOne, numTwo] = [
  process.argv[2],
  process.argv[3],
  process.argv[4],
];
// TODO: Create a `switch` statement that accepts an `operation` parameter
switch(operation) {
    case 'sum':
        console.log(basicMath.sum(parseInt(numOne), parseInt(numTwo)))
        break;
    case 'difference':
        console.log(basicMath.difference(parseInt(numOne), parseInt(numTwo)))
        break;
    case 'product':
        console.log(basicMath.product(parseInt(numOne), parseInt(numTwo)))
        break;
    case 'quotient':
        console.log(basicMath.quotient(parseInt(numOne), parseInt(numTwo)))
};
    
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`