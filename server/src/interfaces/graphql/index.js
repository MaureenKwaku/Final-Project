const { admin, user, car } = require('../../domains');

exports.resolvers = {
  Mutation: {
    ...admin.resolver.Mutation,
    ...user.resolver.Mutation,
    ...car.resolver.Mutation,
  },
  Query: {
    ...admin.resolver.Query,
    ...user.resolver.Query,
    ...car.resolver.Query,
  },
};

exports.typeDefs = [admin.schema, user.schema, car.schema];
