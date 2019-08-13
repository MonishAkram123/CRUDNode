const mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  rollNo: String,
  firstname: String,
  lastname: String,
  contact: String,
  dob: String,
  city: String,
  state: String,
  pincode: Number
});

module.exports = mongoose.model("Student", StudentSchema);
