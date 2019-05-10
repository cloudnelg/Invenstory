const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ApplianceSchema = new Schema({
  appliance_name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = appliance = mongoose.model('appliance', ApplianceSchema);