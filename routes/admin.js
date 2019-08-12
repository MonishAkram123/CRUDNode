const router = require("express").Router();
const routes = require("../constants/application.json").routes;
const Course = require("../models/Course");

router.get(routes.ADD_COURSE, (req, res) => {
  res.render("add_course", { ADD_COURSE_ROUTE: routes.ADMIN +routes.ADD_COURSE });
});

router.post(routes.ADD_COURSE, (req, res)=> {
  let course = req.body;
  var newCourse = new Course(course);
  newCourse.save()
  .then(course => {
    console.log("New Course Saved Successfully:", course);
    res.redirect(routes.MAIN);
  })
  .catch(err => {
    console.log("Error while Saving Course:", err);
    res.send(err);
  });
});

router.get(routes.EDIT_COURSE+"/:_id", (req, res) => {
  var _id = req.params._id;
  Course.findOne({_id: _id})
  .then(course => {
    res.render('edit_course', { UPDATE_COURSE_ROUTE: routes.ADMIN+routes.UPDATE_COURSE,
                                DELETE_COURSE_ROUTE: routes.ADMIN+routes.DELETE_COURSE,
                                course });
  })
});

router.post(routes.UPDATE_COURSE+"/:_id", (req, res) => {
  var _id = req.params._id;
  var course = req.body;
  res.send("Done");
  Course.update({ _id }, {$set: course})
  .then(() => {
    res.send("Done");
  });
});

router.post(routes.DELETE_COURSE+"/:_id", (req, res) => {
  var _id = req.params._id;
  Course.remove({_id})
  .then(() => {
    res.send("Done");
  });
});

module.exports = router;
