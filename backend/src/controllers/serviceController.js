const Service = require('../models/serviceModel');

async function getAll({ query }, res) {
  try {
    const services = await Service.find(query);
    res.json(services);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { serviceId } }, res) {
  try {
    const services = await Service.findById(serviceId);
    res.json(services);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  getOneById
};
