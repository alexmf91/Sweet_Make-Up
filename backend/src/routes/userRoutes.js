const { Router } = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/user/:userId')
  .all(passport.authenticate('jwt', { session: false }))
  .put(userController.updateOneById)
  .get(userController.getOneById)
  .delete(userController.deleteOneById);

userRouter
  .route('/register')
  .all(passport.authenticate('signup', { session: false }))
  .post(userController.signUp);

userRouter
  .route('/login')
  .all(passport.authenticate('login', { session: false }))
  .post(userController.logIn);

module.exports = userRouter;
