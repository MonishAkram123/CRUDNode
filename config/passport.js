const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const sha256 = require("sha256");
const User = require("../models/User");

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  User.findOne({ _id }, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username }, (err, user) => {
      if(err)
        return done(err);
      if(!user)
        return done(undefined, false, "Incorrect username.");
      if(user.password !== sha256(password))
        return done(undefined, false, "Invalid password.");
      return done(undefined, user);
    });
  }
));

module.exports = passport;
