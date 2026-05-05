export const typeDefs = `
  type Property {
    id: ID!
    title: String!
    description: String!
    city: String!
    pricePerNight: Float!
    amenities: [Amenity!]!
    createdAt: String!
  }

  type Amenity {
    id: ID!
    name: String!
  }

  input PropertyInput {
    title: String!
    description: String!
    city: String!
    pricePerNight: Float!
  }

  type Query {
    properties: [Property!]!
  }

  type Mutation {
    createProperty(input: PropertyInput!): Property!
  }
`;
//# sourceMappingURL=property.typeDefs.js.map