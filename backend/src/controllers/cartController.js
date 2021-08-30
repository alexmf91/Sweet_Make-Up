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

async function getAll({ query }, res) {
  try {
    const carts = await Cart.find(query);
    res.json(carts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll
};
