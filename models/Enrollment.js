const mongoose = require('mongoose');

var EnrollmentSchema = new mongoose.Schema({
  rollNo: String,
  courseId: String,
  enrollDate: String
});

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
