const express = require('express');
const router = express.Router();


// Item Model
const Entertainment = require('../../models/entertainment');

// @route   GET api/appliances
// @desc    Get All appliances
// @access  Public
router.get('/', (req, res) => {
  Entertainment.find()
    .sort({ date: -1 })
    .then(entertainment => res.json(entertainment));
});

// @route   POST api/appliances
// @desc    Create An Appliance
// @access  Public
 router.post('/', (req, res) => {
  const newEntertainment = new Entertainment({
    entertainment_name: req.body.entertainment_name,
    price: req.body.price,
    comment: req.body.comment,
    imgURL: req.body.imgURL
  });

  newEntertainment.save().then(Entertainment => res.json(Entertainment));
}); 

// @route   DELETE api/appliances/:id
// @desc    Delete An Appliance
// @access  Public
 router.delete('/:id', (req, res) => {
  Entertainment.findById(req.params.id)
    .then(entertainment => entertainment.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;