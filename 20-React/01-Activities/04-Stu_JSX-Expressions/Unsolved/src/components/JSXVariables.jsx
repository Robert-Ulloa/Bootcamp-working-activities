// TODO: Create a `name` variable
const name = "Roberto";

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = "is an awesome library for building UIs!";

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi my name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters </h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React ({thoughts})</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
