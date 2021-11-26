const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'car must have a name'],
  },
  brand: {
    type: String,
    required: [true, 'car must have a brand'],
  },
  color: {
    type: String,
    required: [true, 'car must have a color'],
  },
  gearbox: {
    type: String,
    required: [true, 'car must have a gearbox type'],
    enum: {
      values: ['automatic', 'manual'],
      message: 'car must have a gearbox type of automatic or manual',
    },
  },
  capacity: {
    type: Number,
    required: [true, 'car must have a capacity'],
  },
  pricePerDay: {
    type: Number,
    required: [true, 'car must have a pricePerDay'],
  },
  pricePerWeek: {
    type: Number,
    required: [true, 'car must have a pricePerWeek'],
  },
  pricePerMonth: {
    type: Number,
    required: [true, 'car must have a pricePerMonth'],
  },
  class: {
    type: String,
    required: [true, 'car must have a class type'],
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
