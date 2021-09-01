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

async function getOneById({ params: { bookingId } }, res) {
  try {
    const bookings = await Booking.findById(bookingId);
    res.json(bookings);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ body, params: { bookingId } }, res) {
  try {
    const updatedbooking = await Booking.findByIdAndUpdate(bookingId,
      body, { new: true, useFindAndModify: false });
    res.json(updatedbooking);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { bookingId } }, res) {
  try {
    await Booking.findByIdAndDelete(bookingId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById
};
