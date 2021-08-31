const { Router } = require('express');
const cartController = require('../controllers/cartController');

const cartRouter = new Router();

cartRouter
  .route('/cart/:cartId')
  .put(cartController.updateOneById)
  .get(cartController.getOneById)
  .delete(cartController.deleteOneById);

cartRouter
  .route('/cart/')
  .post(cartController.createOne)
  .get(cartController.getAll);

module.exports = cartRouter;
