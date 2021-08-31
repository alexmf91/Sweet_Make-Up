const { Router } = require('express');
const serviceController = require('../controllers/serviceController');

const serviceRouter = new Router();

serviceRouter
  .route('/service/:serviceId')
  .put(serviceController.updateOneById)
  .get(serviceController.getOneById)
  .delete(serviceController.deleteOneById);

serviceRouter
  .route('/service/')
  .post(serviceController.createOne)
  .get(serviceController.getAll);

module.exports = serviceRouter;
