const { Journal, Tarot, Horoscope, User, Card } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user_id })
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        user: async (parent, { username }) => {
          return User.findOne({ username });
        },
        users: async (parent, args) => {
            return User.find({});
        },
        tarotCard: async (parent, { tarotId }) => {
            return Card.findOne({ tarotId: tarotId });
        },
        journals: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Journal.find(params).sort({ createdAt: -1 });
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
              // First we create the user
              const user = await User.create(args);
              // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
              const token = signToken(user);
              // Return an `Auth` object that consists of the signed token and user's information
              return { token, user };
        },
        login: async (parent, { email, password }) => {
              // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
              const user = await User.findOne({ email });
        
              // If there is no user with that email address, return an Authentication error stating so
              if (!user) {
                throw new AuthenticationError('No user found with this email address');
              }
        
              // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
              const correctPw = await user.isCorrectPassword(password);
        
              // If the password is incorrect, return an Authentication error stating so
              if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              // If email and password are correct, sign user into the application with a JWT
              const token = signToken(user);
        
              // Return an `Auth` object that consists of the signed token and user's information
              return { token, user };
        },
        createJournalEntry: async (parent, { JournalEntryInput }, context) => {
              // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
              if (context.user) {
                return User.findOneAndUpdate(
                  { _id: context.user._id },
                  {
                    $addToSet: { journals: JournalEntryInput },
                  },
                  {
                    new: true,
                    runValidators: true,
                  }
                );
              }
              // If user attempts to execute this mutation and isn't logged in, throw an error
              throw new AuthenticationError('You need to be logged in!');
        },
        saveHoroscope: async (parent, { HoroscopeInput }, context) => {
              if (context.user) {
                await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { journals: {
                      savedHoroscope: HoroscopeInput
                      } 
                    } 
                  }
                );
        
                return context.user;
              }
              throw new AuthenticationError('You need to be logged in!');
        },
        saveTarotRead: async (parent, { TarotReadInput }, context) => {
              if (context.user) {
                await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { savedBooks: BookInput } }
                );
        
                return context.user;
              }
              throw new AuthenticationError('You need to be logged in!');
        },
        removeJournalEntry: async (parent, { createdAt }, context) => {
              if (context.user) {
                await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $pull: { journals: createdAt } }
                );
        
                return context.user;
              }
              throw new AuthenticationError('You need to be logged in!');
        }
    },
};

    
module.exports = resolvers;