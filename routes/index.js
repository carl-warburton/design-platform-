var express = require('express');
var router = express.Router();
var Profile = require('../models/profile');
var csrf = require('csurf');

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
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
