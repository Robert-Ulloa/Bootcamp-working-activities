const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # this defines the graphQL schema for the application
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # this defines the Query type, which lists all  available queries, incluiding the 'classes' query
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
