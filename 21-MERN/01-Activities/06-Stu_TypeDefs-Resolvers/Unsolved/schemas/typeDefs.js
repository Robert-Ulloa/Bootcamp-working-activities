const typeDefs = `
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  # TODO: Update type definition to include classes
  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class] # Add all the classes array for the profesor
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
  }
`;

module.exports = typeDefs;
