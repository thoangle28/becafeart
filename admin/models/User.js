/**
 * User model 
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  eaddress: {
    type: String,
    required: true,
    unique: true,
    index: true, 
    sparse: true
  },
  nicename: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model('users', UserSchema)
module.exports = User