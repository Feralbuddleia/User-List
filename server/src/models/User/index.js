const mongoose  = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: String,
  firstName: String,
  lastName: String,
  gender: String,
  age: Number
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);