const router = require("express").Router();
const routes = require("../../constants/application.json").routes;
const Student = require("../../models/Student");

router.get(routes.ADD, (req, res) => {
  var originalUrl = req.originalUrl;
  res.render("add_student", { ADD_STUDENT_ROUTE: originalUrl });
});

router.post(routes.ADD, (req, res)=> {
  let student = req.body;
  var newStudent = new Student(student);
  newStudent.save()
  .then(student => {
    console.log("New Student Saved Successfully:", student);
    res.redirect(routes.MAIN);
  })
  .catch(err => {
    console.log("Error while Saving Student:", err);
    res.send(err);
  });
});

router.get("/:_id", (req, res) => {
  var _id = req.params._id;
  var originalUrl = req.originalUrl.replace("/"+_id, "");
  Student.findOne({_id: _id})
  .then(student => {
    res.render('edit_student', { UPDATE_STUDENT_ROUTE: originalUrl+routes.UPDATE,
                                DELETE_STUDENT_ROUTE: originalUrl+routes.DELETE,
                                student });
  })
  .catch(err => {
    res.send(err);
  })
});

router.post(routes.UPDATE+"/:_id", (req, res) => {
  var _id = req.params._id;
  var student = req.body;
  Student.updateOne({ _id }, {$set: student})
  .then(() => {
    res.send("Done");
  })
  .catch(err => {
    res.send(err);
  })
});

router.post(routes.DELETE+"/:_id", (req, res) => {
  var _id = req.params._id;
  Student.deleteOne({_id})
  .then(() => {
    res.send("Done");
  })
  .catch(err => {
    res.send(err);
  })
});

module.exports = router;
