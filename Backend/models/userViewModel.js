const mongoose = require('mongoose');

const userViewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please tell us your email'],
    lowercase: true,
  },
  carname: {
    type: String,
    required: [true, 'please tell us your car name']
  },
  view: {
    type: String,
    required: [true, 'please tell us your view']
  },
});


const View = mongoose.model('Views', userViewSchema);

module.exports = View;
