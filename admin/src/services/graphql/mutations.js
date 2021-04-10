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

export const UPDATE_PASSWORD = gql`
  mutation($old: String!, $password: String!) {
    updateAdminPassword(input: { oldPassword: $old, newPassword: $password })
  }
`;

export const ADD_ADMIN = gql`
  mutation CreateAdmin($name: String!, $email: String!, $phone: String!) {
    createAdmin(input: { name: $name, email: $email, phone: $phone }) {
      _id
    }
  }
`;
