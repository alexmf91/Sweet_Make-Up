const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  name: String,
  surname: String,
  email: String,
  password: String,
  gender: String,
  reservations: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  calendar: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('User', userSchema);
