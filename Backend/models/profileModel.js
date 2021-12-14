const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please tell us your email'],
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'please tell us your email']
  },
});


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
