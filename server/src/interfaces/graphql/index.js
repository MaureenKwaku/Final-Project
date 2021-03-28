const entity = require('./entity');

exports.resolvers = {
  Mutation: {
    ...entity.resolvers.Mutation,
  },
  Query: {
    ...entity.resolvers.Query,
  },
};

exports.typeDefs = [
  entity.typeDefs,
];
