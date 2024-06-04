const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  //Verify that user  click on one of the boxes
  if (element.matches('div.box')) {
          // if data -state is 'Hidden'
    if (element.dataset.state === 'hidden') {
      const num = element.dataset.number;
      element.dataset.state = 'visible';

      element.textContent = num;}
  }
});
