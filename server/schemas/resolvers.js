const { Journal, Tarot, Horoscope, User, Card } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedHoroscope').populate('savedTarot').populate('journal');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        tarotCard: async (parent, { tarotId }) => {
            return Card.findOne({ tarotId: tarotId });
        },
        journals: async (parent, username, context ) => {
            return Journal.find({});
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
        createJournalEntry: async (parent, args, context) => {
            if (context.user) {
                const savedJournal = await Journal.create(args);
                const user = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  {
                    $addToSet: { journal: savedJournal },
                  },
                  {
                    new: true,
                  }
                );
                return user, savedJournal;
              }
            throw new AuthenticationError('You need to be logged in!');
        },
        saveHoroscope: async (parent, args, context) => {
            if (context.user) {
              const savedHoroscope = await Horoscope.create(args);
              const user = User.findOneAndUpdate(
                { _id: context.user._id },
                { 
                  $addToSet: { savedHoroscope: savedHoroscope } 
                },
                {
                  new: true,
                }
              );
              return savedHoroscope, user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        saveTarotRead: async (parent, args, context) => {
            if (context.user) {
                const savedTarot = await Tarot.create(args);
                const user = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { 
                    $addToSet: { savedTarot: savedTarot } 
                  },
                  {
                    new: true,
                  }
                )
                return savedTarot, user;
              };
              throw new AuthenticationError('You need to be logged in!');
        },
    },
};

    
module.exports = resolvers;