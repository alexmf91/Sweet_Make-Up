const { Router } = require('express');
const serviceController = require('../controllers/serviceController');

const serviceRouter = new Router();

serviceRouter
  .route('/service/')
  .post(serviceController.createOne)
  .get(serviceController.getAll);

module.exports = serviceRouter;
