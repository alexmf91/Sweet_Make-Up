const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  name: String,
  surname: String,
  phone: String,
  email: String,
  password: String,
  gender: { type: String, default: 'person' },
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  calendar: { type: Schema.Types.ObjectId, ref: 'User' }
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
