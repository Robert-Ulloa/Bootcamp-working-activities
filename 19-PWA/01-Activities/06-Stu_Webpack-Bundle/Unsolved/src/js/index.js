import { boxClick } from './box';
import '../css/style.css';
import yellow from '../images/yellow-robot.png';

// Set up the box element with the initial yellow image
const box = document.getElementById('box');
box.src = yellow;

// Add event listener for the button
document.getElementById('boxBtn').addEventListener('click', () => {
  boxClick(box);
});