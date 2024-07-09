// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
//spread - not in a function 
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
//creating a new array copying the songs into a new song
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  //reduce into all values from an array into a single value
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
//6 - mix all the values into one
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
//
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// TODO: What do you expect to be logged in the console?
//6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
//110
console.log(additionSpread(1, 2, 3, 4, 100));
