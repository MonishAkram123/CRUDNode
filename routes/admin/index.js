const router = require('express').Router();
const routes = require("../../constants/application.json").routes;
const courseRoutes = require("./course.js");
const studentRoutes = require("./student.js");

router.use(routes.COURSE, courseRoutes);
router.use(routes.STUDENT, studentRoutes);

module.exports = router;
