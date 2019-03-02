var mongoose = require('mongoose');
var listofdocSchema = new mongoose.Schema({
    No: Number,
    FileName: String,
    Type: String,
    Description: String,
    updated_date: { type: Date, default: Date.now },
  });

   listofdocSchema.set('toObject', {versionKey: false});
   const Listofdocform = mongoose.model('Listofdocform', listofdocSchema);
 
   module.exports = Listofdocform;

