/**
 * Post model 
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  teaser: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: [ 'publish', 'pending', 'draft']
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users' //table / collection users
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('posts', PostSchema)