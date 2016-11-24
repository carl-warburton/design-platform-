var express = require('express');
var router = express.Router();

var Profile = require('../models/profile');

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


module.exports = router;
