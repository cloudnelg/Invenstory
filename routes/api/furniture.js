const express = require('express');
const router = express.Router();


// Item Model
const Furniture = require('../../models/furniture');

// @route   GET api/appliances
// @desc    Get All appliances
// @access  Public
router.get('/', (req, res) => {
  Furniture.find()
    .sort({ date: -1 })
    .then(furniture => res.json(furniture));
});

// @route   POST api/appliances
// @desc    Create An Appliance
// @access  Public
 router.post('/', (req, res) => {
  const newFurniture = new Furniture({
    furniture_name: req.body.furniture_name,
    price: req.body.price,
    comment: req.body.comment
  });

  newFurniture.save().then(Furniture => res.json(Furniture));
}); 

// @route   DELETE api/appliances/:id
// @desc    Delete An Appliance
// @access  Public
 router.delete('/:id', (req, res) => {
  Furniture.findById(req.params.id)
    .then(furniture => furniture.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;