const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Route to get all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Route to get a specific plant by ID
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ msg: 'Plant not found' });
    }
    res.json(plant);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
