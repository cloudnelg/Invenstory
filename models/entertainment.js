const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EntertainmentSchema = new Schema({
  entertainment_name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
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

module.exports = entertainment = mongoose.model('entertainment', EntertainmentSchema);