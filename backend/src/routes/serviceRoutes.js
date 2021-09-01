const { Router } = require('express');
const serviceController = require('../controllers/serviceController');

const serviceRouter = new Router();

serviceRouter
  .route('/service/:serviceId')
  .get(serviceController.getOneById);

serviceRouter
  .route('/service/')
  .get(serviceController.getAll);

module.exports = serviceRouter;
