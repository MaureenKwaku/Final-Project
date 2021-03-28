const { gql } = require('apollo-server-express');

module.exports = gql`
    type Entity {
        _id: ID!
        name: String!
    }
  
    input createEntityInput{
        name: String!
    }
    
    extend type Query {
        entities: [Entity]
        entitiesLength: Int
    }
    
    extend type Mutation {
        createEntity(input: createEntityInput): Entity
    }
`;
