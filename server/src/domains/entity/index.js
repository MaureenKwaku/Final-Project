const { EntityModel } = require('./model');

module.exports = {
  createEntity: args => new EntityModel(args).save(),
  getEntities: ({ filter = {} }) => EntityModel.find(filter),
  getEntitiesLength: ({ filter = {} }) =>
    EntityModel.countDocuments(filter)
};
