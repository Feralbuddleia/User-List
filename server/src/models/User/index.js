const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: String,
  password: String,
  firstName: String,
  lastName: String,
  sex: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);