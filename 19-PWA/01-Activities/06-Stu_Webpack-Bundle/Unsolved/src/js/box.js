// Import yellow robot image as Yellow
import yellow from '../images/yellow-robot.png';
// Import blue robot image as Blue
import blue from '../images/blue-robot.png';

// Function to handle the box click event
export const boxClick = (box) => {
  // Toggle between yellow and blue images based on the current src
  if (box.src.includes('yellow')) {
    box.src = blue;
  } else {
    box.src = yellow;
  }
};