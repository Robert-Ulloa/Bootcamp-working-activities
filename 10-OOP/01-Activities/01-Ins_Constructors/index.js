// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog'
// }

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
}

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const dog = new Dog('Rex', 2, 'Bulldog');
const dog2 =new Dog( 'rex',2, 'Husky'); 

// Calling dog's nap method
dog.nap();

// WHAT JS IS ACTUALLY DOING WITH THE new KEYWORD:
//function myNew(){
//  let newObj = {};
//  newObj.constructor = Dog;
//  newObj.constructor('rex', 2, 'bulldog');
 // return newObj;
//}

