const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    // TODO: Update resolver to include classes
    professors: async () => {
      // populate the classes for each profesor
      return await Professor.find({}).populate('classes');
    }
  }
};

module.exports = resolvers;
