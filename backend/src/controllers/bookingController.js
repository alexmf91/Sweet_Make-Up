const Booking = require('../models/bookingModel');

async function createOne({ body }, res) {
  try {
    const newBooking = await Booking.create(body);
    res.json(newBooking);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const bookings = await Booking.find(query);
    res.json(bookings);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll
};
