// function to block the stack for x number of milliseconds
document.addEventListener('DOMContentLoaded', () => {
  const submintButton = document.querySelector('button');
  submintButton.disabled = true;  //disable the button on page load

  setTimeout(()=> {
    submintButton.disabled = false;
    submintButton.textContent = 'Submit'; // Update the button so they know is clickable
  },
  8000);
});

/*const pause = milliSeconds => {
    // get the current time
    var startTime = new Date().getTime(); 
    // block stack until time's up
    while (new Date().getTime() < startTime + milliSeconds); 
  }
*/