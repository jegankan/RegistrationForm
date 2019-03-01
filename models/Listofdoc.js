var mongoose = require('mongoose');
var listofdocSchema = new mongoose.Schema({
    No: String,
    FileName: String,
    Type: String,
    Description: String,
    updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Listofdocform', listofdocSchema);

  