const { model, Schema } = require('mongoose');

const serviceSchema = new Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  name: String,
  description: String,
  duration: String,
  type: String,
  price: Number
});

module.exports = model('Service', serviceSchema);
