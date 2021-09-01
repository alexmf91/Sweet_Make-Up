/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

let refreshTokens = [];

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
  const token = jwt.sign(
    { user: data },
    process.env.JWT_SECRET,
    { expiresIn: '1m' }
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
}

function tokenRefresh({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }

    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '5m' }
    );

    return res.json({
      token
    });
  });
}

function logOut(req, res) {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== token);
  res.send('Logout successful');
}

module.exports = {
  getOneById,
  updateOneById,
  deleteOneById,
  signUp,
  logIn,
  logOut,
  tokenRefresh
};
