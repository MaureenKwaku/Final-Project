import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    loginAdmin(input: { email: $email, password: $password }) {
      admin {
        _id
        name
        email
        phone
        createdAt
        updatedAt
      }
      token
    }
  }
`;
