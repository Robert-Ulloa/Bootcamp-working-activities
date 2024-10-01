const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// this resolver handles the 'classes' query and returns a list of classes from the database
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // this statement retrieves all Class documents from the database using Mongoose's find method
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
