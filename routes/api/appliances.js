const express = require('express');
const router = express.Router();


// Item Model
const Appliance = require('../../models/appliances');

// @route   GET api/appliances
// @desc    Get All appliances
// @access  Public
router.get('/', (req, res) => {
  Appliance.find()
    .sort({ date: -1 })
    .then(appliances => res.json(appliances));
});

// @route   POST api/appliances
// @desc    Create An Appliance
// @access  Public
 router.post('/', (req, res) => {
  const newAppliance = new Appliance({
    appliance_name: req.body.appliance_name,
    price: req.body.price,
    comment: req.body.comment
  });

  newAppliance.save().then(Appliance => res.json(Appliance));
}); 

// @route   DELETE api/appliances/:id
// @desc    Delete An Appliance
// @access  Public
 router.delete('/:id', (req, res) => {
  Appliance.findById(req.params.id)
    .then(appliance => appliance.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;