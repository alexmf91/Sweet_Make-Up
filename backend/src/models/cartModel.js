const { model, Schema } = require('mongoose');

const cartSchema = new Schema({
  services: [
    {
      service: { type: Schema.Types.ObjectId, ref: 'Service' },
      amount: Number,
      types: String
    }],
  totalPrice: Number
});

module.exports = model('Cart', cartSchema);
