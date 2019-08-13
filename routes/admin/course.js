const router = require("express").Router();
const routes = require("../../constants/application.json").routes;
const Course = require("../../models/Course");

router.get(routes.ADD, (req, res) => {
  var originalUrl = req.originalUrl;
  res.render("add_course", { ADD_COURSE_ROUTE: originalUrl });
});

router.post(routes.ADD, (req, res)=> {
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

router.get("/:_id", (req, res) => {
  var _id = req.params._id;
  var originalUrl = req.originalUrl.replace("/"+_id, "");
  Course.findOne({_id: _id})
  .then(course => {
    res.render('edit_course', { UPDATE_COURSE_ROUTE: originalUrl+routes.UPDATE,
                                DELETE_COURSE_ROUTE: originalUrl+routes.DELETE,
                                course });
  })
  .catch(err => {
    res.send(err);
  });
});

router.post(routes.UPDATE+"/:_id", (req, res) => {
  var _id = req.params._id;
  var course = req.body;
  Course.updateOne({ _id }, {$set: course})
  .then(() => {
    res.send("Done");
  })
  .catch(err => {
    res.send(err);
  });
});

router.post(routes.DELETE+"/:_id", (req, res) => {
  var _id = req.params._id;
  Course.deleteOne({_id})
  .then(() => {
    res.send("Done");
  })
  .catch(err => {
    res.send(err);
  });
});

module.exports = router;
