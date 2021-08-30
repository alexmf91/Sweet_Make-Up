const { Router } = require('express');
const bookingController = require('../controllers/bookingController');

const bookingRouter = new Router();

bookingRouter
  .route('/booking/')
  .post(bookingController.createOne)
  .get(bookingController.getAll);

module.exports = bookingRouter;
