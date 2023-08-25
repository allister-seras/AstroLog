const { Journal, tarotRead, User, Cards } = require('../models');

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
            // TODO login
            // TODO horoscopeReading
            // TODO tarotPrediction
            // TODO jornalEntries
  },
};
    



module.exports = resolvers;