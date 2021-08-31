const { Router } = require('express');
const bookingController = require('../controllers/bookingController');

const bookingRouter = new Router();

bookingRouter
  .route('/booking/:bookingId')
  .put(bookingController.updateOneById)
  .get(bookingController.getOneById)
  .delete(bookingController.deleteOneById);

bookingRouter
  .route('/booking/')
  .post(bookingController.createOne)
  .get(bookingController.getAll);

module.exports = bookingRouter;
