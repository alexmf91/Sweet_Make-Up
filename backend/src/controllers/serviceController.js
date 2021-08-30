const Service = require('../models/serviceModel');

async function createOne({ body }, res) {
  try {
    const newService = await Service.create(body);
    res.json(newService);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const services = await Service.find(query);
    res.json(services);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll
};
