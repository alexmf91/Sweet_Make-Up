const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/user/:userId')
  .put(userController.updateOneById)
  .get(userController.getOneById)
  .delete(userController.deleteOneById);

userRouter
  .route('/users/')
  .post(userController.createOne)
  .get(userController.getAll);

module.exports = userRouter;
