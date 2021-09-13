const Cart = require('../models/cartModel');

async function createOne({ body }, res) {
  try {
    const newCart = await Cart.create(body);
    res.json(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { cartId } }, res) {
  try {
    const carts = await Cart.findById(cartId).populate('services.service');
    res.json(carts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ body, params: { cartId } }, res) {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(cartId,
      body, { new: true, useFindAndModify: false })
      .populate('services.service');
    res.json(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { cartId } }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getOneById,
  deleteOneById,
  updateOneById
};
