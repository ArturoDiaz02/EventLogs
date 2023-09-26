var mongoose = require('mongoose');

const schema = new mongoose.Schema({
  event: {
    type: mongoose.ObjectId,
    ref: 'Event',
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true,
  }
})

schema.index({ userId: 1, eventId: 1 }, { unique: true })

const RegistrationModel = mongoose.model('Registration', schema);

module.exports = RegistrationModel;

RegistrationModel.watch().on('change', (change: any) => {
  console.log(change);
});

