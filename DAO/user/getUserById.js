const Model = require('../../models/model');

const getResult = async elementId => {
  let element = await Model.findById(elementId);

  return element;
};

module.exports = getResult;
