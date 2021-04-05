const { admin, user } = require('../../domains');

exports.resolvers = {
  Mutation: {
    ...admin.resolver.Mutation,
    ...user.resolver.Mutation,
  },
  Query: {
    ...admin.resolver.Query,
    ...user.resolver.Query,
  },
};

exports.typeDefs = [admin.schema, user.schema];
