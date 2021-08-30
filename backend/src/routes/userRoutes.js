const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/users/')
  .post(userController.createOne)
  .get(userController.getAll);

module.exports = userRouter;
