import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
})

//auto populate 3 users
const User = mongoose.model('User', userSchema);

User.find({}).then((users) => {
  if (users.length === 0) {
    User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com'
    });
    User.create({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@gmail.com'
    });
    User.create({
      firstName: 'Jack',
      lastName: 'Doe',
      email: 'Jack@gmail.com'
    });
    }

});

module.exports = User;