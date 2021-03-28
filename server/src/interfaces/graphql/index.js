const { admin } = require('../../domains');

exports.resolvers = {
  Mutation: {
    ...admin.resolver.Mutation,
  },
  Query: {
    ...admin.resolver.Query,
  },
};

exports.typeDefs = [admin.schema];
