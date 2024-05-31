const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';


body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);
// Append list items to the ordered list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// Part to add: Setting styles for the ordered list and list items

li1.textContent = 'Tacos';
li2.textContent = 'Pizza';
li3.textContent = 'Kebah';
li4.textContent = 'Blueberries';

// Set styles for the ordered list

listEl.setAttribute('style', 'background-color: #333333; padding: 20px;');

// Set styles for each list item
const listItems = [li1, li2, li3, li4];
const backgroundColors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700'];

listItems.forEach((li, index) => {
  li.setAttribute('style', `color: white; padding: 5px; margin-left: 35px; background-color: ${backgroundColors[index]};`);
});

