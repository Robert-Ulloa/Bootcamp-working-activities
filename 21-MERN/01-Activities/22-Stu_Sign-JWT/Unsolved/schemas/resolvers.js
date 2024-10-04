const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
        // Mutation to create a new user and sign a JWT token for that user
    addUser: async (parent, args) => {
      const user = await User.create(args);  // Create a new user with the provided arguments (name, email, password)
      const token = signToken(user);   // Sign a JWT token with the user's information

      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below
        // Mutation to log in an existing user and sign a JWT token if credentials are valid
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }); // Find the user by their email

      if (!user) {
                // If no user is found with the given email, throw an authentication error
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password);   // Check if the provided password matches the user's password

      if (!correctPw) {
                // If the password is incorrect, throw an authentication error
        throw AuthenticationError 
      }

      const token = signToken(user);  // Sign a JWT token with the user's information
      return { token, user }; // Return the JWT token and the logged-in user
    },
        // Mutation to add a new thought to a user
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
        // Mutation to add a new comment to a thought
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },   // Find the thought by its ID
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
