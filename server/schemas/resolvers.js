const { Journal, tarotRead, User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('journals');

        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('journals');
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
        //   Mutation: {

//   },
// };
}
    



module.exports = resolvers;