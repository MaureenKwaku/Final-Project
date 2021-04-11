const { admin, user, car, rental, payment, dashboard } = require('../../domains');

exports.resolvers = {
  Mutation: {
    ...admin.resolver.Mutation,
    ...user.resolver.Mutation,
    ...car.resolver.Mutation,
    ...rental.resolver.Mutation,
  },
  Query: {
    ...admin.resolver.Query,
    ...user.resolver.Query,
    ...car.resolver.Query,
    ...rental.resolver.Query,
    ...dashboard.resolver.Query,
  },
};

exports.typeDefs = [
  admin.schema,
  user.schema,
  car.schema,
  rental.schema,
  payment.schema,
  dashboard.schema,
];
