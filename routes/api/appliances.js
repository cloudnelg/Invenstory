const express = require('express');
const router = express.Router();
const User = '../../models/User'


// Item Model
const Appliance = require('../../models/appliances');

// @route   GET api/appliances
// @desc    Get All appliances
// @access  Public
// router.get('/', (req, res) => {
//   Appliance.findOne({_id: })
//     .sort({ date: -1 })
//     .then(appliances => res.json(appliances));
// });

router.get('/', (req, res) => {
  // console.log('request', req)
  User.findOne({_id: users._id })
    .sort({ date: -1 })
    .then(appliances => {
      console.log("Appliances", appliances)
      res.json(appliances)
    });
    
});

// @route   POST api/appliances
// @desc    Create An Appliance
// @access  Public
 router.post('/', (req, res) => {
  const newAppliance = new Appliance({
    appliance_name: req.body.appliance_name,
    price: req.body.price,
    comment: req.body.comment,
    imgURL: req.body.imgURL
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