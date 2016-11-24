var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    User.findOne({'email':email}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, {message: 'Email is already in use'});
      }
      var newUser = new User();
      newUser.email = email;
      newUser.password = newUser.encryptPassword(password);
      newUser.save(function(err, result) {
        if (err) {
          return done(err)
        }
        return done(null, newUser);
      });
    });
}));

//
// passport.use('local.signup', new FacebookStrategy({
//     clientID: '1012492952230239',
//     clientSecret: '2bd07798f45938e32758022ff08ae978',
//     callbackURL: "http://localhost:3000/"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
