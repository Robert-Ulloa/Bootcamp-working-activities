const router = require('express').Router();

// ? We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
  },
  {
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanish Chorizo',
  },
  {
    dish_name: 'Fish Tacos',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalapeños and cilantro, pickled red onion',
  },
  {
    dish_name: 'Tropical Fruit Salad',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
  },
  {
    dish_name: 'Pork Gyoza',
    description:
      'Homemade Japanese dumplings stuffed with a pork and green onion filling',
  },
  {
    dish_name: 'Yebeg Tibs with Injera Bread',
    description:
      'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
  },
  {
    dish_name: 'Cape Malay Curry',
    description: 'Chicken and vegetable curry dish with basmati rice',
  },
];

// ? Get all dishes
router.get('/', async (req, res) => {
  res.render('all');
});

// TODO: Add a route called `/dish/:num` below

router.get('/dish/:num', async (req, res) => {
  res.render('dish', dishes[req.params.num - 1]);
});


router.get('/dish/:num', (req, res) => {
  const dishNum = parseInt(req.params.num, 10);

  // ? Validate the dish number
  if (dishNum >= 0 && dishNum < dishes.length) {
    const selectedDish = dishes[dishNum];
    // Assuming there's a view called 'dish' to render an individual dish
    res.render('dish', { dish: selectedDish });
  } else {
    res.status(404).send('Dish not found');
  }
});

module.exports = router;
