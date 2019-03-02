var mongoose = require('mongoose');
var RegistrationuserformSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    SSOID: String,
    updated_date: { type: Date, default: Date.now },
  });
  
  RegistrationuserformSchema.set('toObject', {versionKey: false});
  const Registrationuserform = mongoose.model('Registrationuserform', RegistrationuserformSchema);

  module.exports = Registrationuserform;
  