// 1) Where is carNoise stored?
// global execution context

const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global Execution Context

const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // GEt a value when we can the function / Function Execution Context
  
  // 5) Where is makeNoise stored?
  //Function Execution Context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  //  Reads the carNoise value from the Global Execution Context and passrd the vallue from the Goblal Execution Context 
  //where it is a console.log... which is also referencing the speed from the outher cuntion execution context.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
