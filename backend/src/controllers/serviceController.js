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

async function getOneById({ params: { serviceId } }, res) {
  try {
    const services = await Service.findById(serviceId);
    res.json(services);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ body, params: { serviceId } }, res) {
  try {
    const updatedservice = await Service.findByIdAndUpdate(serviceId,
      body, { new: true, useFindAndModify: false });
    res.json(updatedservice);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { serviceId } }, res) {
  try {
    await Service.findByIdAndDelete(serviceId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById
};
