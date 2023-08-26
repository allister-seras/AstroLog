const { Journal, tarotRead, User, Cards, Horoscope } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('journals');

        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('journals');
        },
        tarotCard: async (parent, { tarotId }) => {
            return Cards.findOne({ tarotId: tarotId });
        },
        journals: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Journal.find(params).sort({ createdAt: -1 });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user_id }).populate('journals');
            }
            throw new AuthenthicationError('You need to be logged in!');

        },
    },
          Mutation: {
            // TODO addUser
            addUser: async (parent, { username, email, password }) => {
              const user = await User.create({ username, email, password });
              const token = signToken(user);
              return { token, user };
            },
            // TODO login
            login: async (parent, { email, password }) => {
              const user = await User.findOne({ email });
        
              if (!user) {
                throw new AuthenticationError('No user found with this email address');
              }
        
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const token = signToken(user);
        
              return { token, user };
            },
            // TODO horoscopeReading
            horoscopeReading: async (parent, { prediction }, context) => {
              if (context.user) {
                const reading = await Horoscope.create({
                  prediction: context.user.dailyHoroscope,
                });
        
                await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { dailyHoroscope: reading._id } }
                );
        
                return dailyHoroscope;
              }
              throw new AuthenticationError('You need to be logged in!');
            },
            // TODO tarotPrediction
            // TODO jornalEntries
  },
};
    



module.exports = resolvers;