import { gql } from 'apollo-server-micro'

export const TypeDefs = gql`
  type Member {
    id: String
    name: String
    address: String
    email: String
    telNumber: String
    isStudent: Boolean
  }

  type Query {
    members: [Member]!
  }
`
