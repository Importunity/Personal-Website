const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // makes sure the email is unique
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date_registered: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('user', UserSchema);


module.exports = User;