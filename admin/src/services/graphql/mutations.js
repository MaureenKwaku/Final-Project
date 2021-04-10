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

export const ADD_CAR = gql`
  mutation CreateCar(
    $featured: Boolean!
    $make: String!
    $model: String!
    $chassis: String
    $vin: String
    $description: String
    $plateNumber: String!
    $images: [String]
    $price: Float!
  ) {
    createCar(
      input: {
        featured: $featured
        make: $make
        model: $model
        chassis: $chassis
        vin: $vin
        price: $price
        description: $description
        images: $images
        plateNumber: $plateNumber
      }
    ) {
      _id
    }
  }
`;
