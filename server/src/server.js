require('dotenv').config();

const { ApolloServer, gql } = require('apollo-server-express');
const graphqlInterface = require('./interfaces/graphql');
const domains = require('./domains');

const rootTypeDef = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

// Configuring graphQL server
exports.GraphqlServer = () => {
  return new ApolloServer({
    typeDefs: [rootTypeDef, ...graphqlInterface.typeDefs],
    resolvers: [graphqlInterface.resolvers],
    introspection: true,
    playground: true,
    tracing: true,
    context: async () => {
      return { domains };
    },
  });
};
