var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaProfile = new Schema({
  imageProf: {type: String, required: true},
  name: {type: String, required: true},
  hometown: {type: String, required: true},
  instagram: {type: String, required: true},
  twitter: {type: String, required: true}
});

module.exports = mongoose.model('Profile', schemaProfile);
