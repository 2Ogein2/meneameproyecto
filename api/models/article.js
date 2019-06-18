const mongoose = require('mongoose');

  const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    link: String,
    createAt: Date,
    category: String,
    thumbnailUrl: String
  });

  module.exports = mongoose.model('Article', articleSchema)