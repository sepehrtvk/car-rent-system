const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: [true, 'please tell us your phone'],
  },
  name: {
    type: String,
    required: [true, 'please tell us your email'],
    lowercase: true,
  },
  carname: {
    type: String,
    required: [true, 'please tell us your car name']
  },
  rentTime: {
    type: String,
    required: [true, 'please tell us your rent time']
  },
});


const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
