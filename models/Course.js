const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  id: String,
  title: String,
  createdOn: String,
  price: String,
  duration: String
});

module.exports = mongoose.model("Course", CourseSchema);
