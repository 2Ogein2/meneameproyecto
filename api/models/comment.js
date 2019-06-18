const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: Number,
  articleId: Number,
  text: String,
  createAt: Date
});

module.exports = mongoose.model('Comment', commentSchema)