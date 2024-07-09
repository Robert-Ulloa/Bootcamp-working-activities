const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
// Map () it will multiply *2 and return it.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray);
console.log(originalArray);


// Describe how map is working in the example below. What will the value of tripledArray be?

// Map () it will multiply *3 and return it.
const tripledArray = originalArray.map(data => data * 3);

// Describe how map is working in the example below. What will the value of oddOrEven be?
//it will return if the number is even or odd

const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(tripledArray);
console.log(oddOrEven);
