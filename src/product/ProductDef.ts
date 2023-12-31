import { gql } from "apollo-server-express";
export const ProductData = gql`
  # A type that describes user
 
  type ProductData {

    _id: String
    price: Int
    name: String
    category: String
    customerIDs: [String]

  }
 

  type Query {
    productquery: [ProductData]
  }
 
`;
