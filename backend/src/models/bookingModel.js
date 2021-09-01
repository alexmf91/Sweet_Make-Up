const { model, Schema } = require('mongoose');

const bookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  services: [{
    service: { type: Schema.Types.ObjectId, ref: 'Service' },
    amount: Number
  }],
  day: Number,
  hour: Number,
  month: String
});

module.exports = model('Booking', bookingSchema);
