const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: [true, 'please tell us your phone'],
  },
  name: {
    type: String,
    required: [true, 'please tell us your name'],
    unique: true,
    lowercase: true,
  },
  supportQuestion: {
    type: String,
    required: [true, 'please tell us your supportQuestion']
  },
  supportAnwser: {
    type: String,
    required: [true, 'please tell us your supportAnwser']
  },
});


const Support = mongoose.model('Support', supportSchema);

module.exports = Support;
