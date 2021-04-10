import { gql } from "@apollo/client";

export const GET_ADMINS = gql`
  query Admins($filter: GetAdminsFilter, $skip: Int, $limit: Int) {
    admins(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      _id
      name
      email
      phone
      createdAt
      updatedAt
    }
    adminsLength(filter: $filter)
  }
`;

export const GET_USERS = gql`
  query Users($filter: GetUsersFilter, $skip: Int, $limit: Int) {
    users(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      _id
      name
      email
      address
      photo
      phone
      createdAt
      updatedAt
    }
    usersLength(filter: $filter)
  }
`;
