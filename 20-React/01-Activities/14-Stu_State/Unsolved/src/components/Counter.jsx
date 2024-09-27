import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// The 'export default' syntax is used to export the Counter component, making it available 
// for import in other files as the default export of this module.
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
    // The useState hook creates a piece of state (count) and a setter function (setCount).
  // The initial value of count is set to 0. When setCount is called, it updates the value of count,
  // causing the component to re-render with the new value.
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
    // handleIncrement is a function that increases the value of count by 1 whenever it is called.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
    // handleDecrement is a function that decreases the value of count by 1, 
  // but only if the current count is greater than 0. It prevents the count from going negative.
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
            {/* The CardBody component is receiving the current count value and the functions for incrementing 
      and decrementing the count as props */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
