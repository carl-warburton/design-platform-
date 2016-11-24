var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Profile = require('../models/profile');

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  Profile.find(function(err, docs) {
    var profileChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      profileChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Design Platform', profiles: profileChunks });
  });
});

router.get('/user/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
});

module.exports = router;
