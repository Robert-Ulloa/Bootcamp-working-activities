const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

// Route to get all dishes
router.get('/', async (req, res) => {
  try {
    // Fetch all dishes from the database
    const dishData = await Dish.findAll();

    // Serialize the data
    const dishes = dishData.map((dish) => dish.get({ plain: true }));

    // Render the 'all' template and pass the dishes data
    res.render('all', { dishes });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ? route to get one dish
router.get('/dish/:id', async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: 'No dish with this id!' });
      return;
    }
    const dish = dishData.get({ plain: true });
    res.render('dish', dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
