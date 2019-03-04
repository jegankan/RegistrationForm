var mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);
//Another way to auto increment the _id
// var autoIncrement = require('mongoose-auto-increment');
// var connection = mongoose.createConnection("mongodb://localhost/RegistrationForm")
// autoIncrement.initialize(connection);

var listofdocSchema = new mongoose.Schema({
  _id: Number,
    FileName: String,
    Type: { data: Buffer, contentType: String },
    Description: String,
    updated_date: { type: Date, default: Date.now },
  }, { _id: false });
  listofdocSchema.plugin(AutoIncrement);
  
//listofdocSchema.plugin(autoIncrement.plugin, 'Listofdocform');

   listofdocSchema.set('toObject', {versionKey: false});
   const Listofdocform = mongoose.model('Listofdocform', listofdocSchema);
 
   module.exports = Listofdocform;

 