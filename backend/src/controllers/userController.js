/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const refreshTokens = [];

async function getOneById({ params: { userId } }, res) {
  try {
    const user = await User.findById(userId)
      .populate('cart')
      .populate('bookings');
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ body, params: { userId } }, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function signUp({ user }, res) {
  res.send({
    user,
    message: 'Register works'
  });
}

function logIn({ user }, res) {
  const data = { _id: user._id, email: user.email };
  try {
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    const refreshToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET
    );

    refreshTokens.push(refreshToken);

    return res.json({
      token,
      refreshToken
    });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getOneById,
  updateOneById,
  deleteOneById,
  signUp,
  logIn
};
