// TODO: Add a comment describing what the `position` parameter means for this function.
// The 'position' parameter represents the intex in the fibonacci sequence
// for chich we want to calculate the corresponding fibonacci number

const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  //this conditional statement acts as the base case for the recursion
  // If the position is less than 2, the fibonacci number is the position itself (0 or 1)
  // because the first two numbers in the fibonacci sequence are 0 and 1
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  //this return statment uses recursion to calculate fibonaci number
  // it sums the fibonacci numbers of the two preceding position
  //this is based on the fact that each number in the fibonacci sequence is the sum of the two proceding ones
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
//this will print the fibonacci number at the 9th position in the sequence.
// for sequence is 34
console.log(fibonacci(9));
