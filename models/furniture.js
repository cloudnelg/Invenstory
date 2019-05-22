const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FurnitureSchema = new Schema({
  furniture_name: {
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
  imgURL: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = furniture = mongoose.model('furniture', FurnitureSchema);