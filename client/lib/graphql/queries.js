import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query Cars($filter: GetCarsFilter, $skip: Int, $limit: Int) {
    cars(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      _id
      featured
      make
      model
      chassis
      vin
      description
      plateNumber
      images
      status
      updatedAt
      createdAt
    }
    carsLength(filter: $filter)
  }
`;
