const mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  rollNo: String,
  name: {
    firstname: String,
    lastname: String
  },
  contact: String,
  dob: String,
  address: {
    city: String,
    state: String,
    pincode: Number
  }
});

module.exports = mongoose.model("Student", StudentSchema);
