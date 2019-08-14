const router = require('express').Router();
const passport = require("passport");
const routes = require("../../constants/application.json").routes;
const courseRoutes = require("./course.js");
const studentRoutes = require("./student.js");

var ensureLoggedOut = (req, res, next) => {
  if(!req.user)
    next();
  else
    res.redirect(routes.HOME);
}

var ensureLoggedIn = (req, res, next) => {
  if(req.path == routes.LOGIN)
    return next();
  if(!req.user)
    res.redirect(routes.ADMIN+routes.LOGIN);
  else
    next();
}

router.use(routes.COURSE, ensureLoggedIn, courseRoutes);
router.use(routes.STUDENT, ensureLoggedIn, studentRoutes);

router.all("*", ensureLoggedIn);

router.get(routes.LOGIN, ensureLoggedOut, (req, res) => {
  res.render('login', { LOGIN_ROUTE: req.originalUrl });
});

router.post(routes.LOGIN, passport.authenticate('local', { successRedirect: routes.LOGIN_SUCCESS,
                                                           faliureRedirect: routes.LOGIN_FALIURE }));

router.get(routes.LOGOUT, (req, res) => {
  req.logout();
  res.redirect(routes.HOME);
});

module.exports = router;
