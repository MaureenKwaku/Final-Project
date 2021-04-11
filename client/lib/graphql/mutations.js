import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      user {
        _id
        name
        email
        phone
        address
        photo
        createdAt
        updatedAt
      }
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $phone: String!
    $address: String!
    $photo: String!
    $password: String!
  ) {
    createUser(
      input: {
        name: $name
        email: $email
        phone: $phone
        address: $address
        photo: $photo
        password: $password
      }
    ) {
      user {
        _id
        name
        email
        phone
        address
        photo
        createdAt
        updatedAt
      }
      token
    }
  }
`;
